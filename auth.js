/* CTS Prep — Google sign-in + Firestore progress sync.
   Firebase project: lift-tracker-fade7 (shared with the fitlog-tracker app).
   Google Auth provider is enabled and isaacred718.github.io is an authorized domain.

   Offline-first: every Firebase/Firestore call is guarded. If the SDK can't load,
   the user is offline, or a write fails, the app keeps working fully on
   localStorage and the header shows an Offline/Sync-failed status. */
(function () {
'use strict';

var FIREBASE_CONFIG = {
  apiKey: "AIzaSyAw2BlvU4QhIC-TaH-hP-ELHOpjhoEe0UE",
  authDomain: "lift-tracker-fade7.firebaseapp.com",
  projectId: "lift-tracker-fade7",
  storageBucket: "lift-tracker-fade7.firebasestorage.app",
  messagingSenderId: "1045140412331",
  appId: "1:1045140412331:web:9668f12422e5d6a48d64ee"
};
var COLLECTION = 'cts_users';   // kept separate from the fitlog users/{uid} docs
var PUSH_DEBOUNCE_MS = 2000;

function $(id) { return document.getElementById(id); }

var auth = null, db = null, user = null;
var pushTimer = null;

/* ---------- sync status indicator (header) ---------- */
function setStatus(mode, label) {
  var dot = $('sync-dot'), lab = $('sync-label');
  if (!dot || !lab) return;
  dot.className = 'sync-dot' + (mode === 'ok' ? ' ok' : mode === 'busy' ? ' busy' : mode === 'err' ? ' err' : '');
  lab.textContent = label || '';
  dot.title = label || 'Sync status';
}

/* ---------- standalone / PWA detection ----------
   Home-screen web apps (iOS "Add to Home Screen", Android TWA-ish installs)
   cannot open OAuth popups, so sign-in must go through the redirect flow. */
function isStandalone() {
  if (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) return true;
  if (window.navigator && window.navigator.standalone === true) return true; // older iOS
  return false;
}

/* ---------- merge decision: pure function, newer updatedAt wins ----------
   local: { boxes, hist, updatedAt }   cloud: null | Firestore doc data
   'push'  -> write local state to the cloud doc
   'adopt' -> replace local state with the cloud doc (then refresh the UI) */
function decideSync(local, cloud) {
  if (!cloud) return 'push'; // first sign-in: nothing in the cloud yet
  var lu = (local && local.updatedAt) || 0;
  var cu = (cloud && cloud.updatedAt) || 0;
  return cu > lu ? 'adopt' : 'push'; // ties go to local (avoids flip-flopping)
}

/* ---------- local state (via the app.js bridge) ---------- */
function readLocal() {
  return window.CTS ? window.CTS.getState() : { boxes: {}, hist: [], updatedAt: 0 };
}

/* ---------- cloud ops (all guarded, never throw into the app) ---------- */
function cloudDoc() {
  if (!db || !user) return null;
  try { return db.collection(COLLECTION).doc(user.uid); }
  catch (e) { return null; }
}
function toCloudPayload(state) {
  return {
    displayName: user.displayName || '',
    email: user.email || '',
    photoURL: user.photoURL || '',
    updatedAt: (state && state.updatedAt) || Date.now(),
    leitnerBoxes: (state && state.boxes) || {},
    testHistory: ((state && state.hist) || []).slice(0, 20)
  };
}
function fromCloudPayload(doc) {
  return {
    boxes: (doc && doc.leitnerBoxes) || {},
    hist: (doc && doc.testHistory) || [],
    updatedAt: (doc && doc.updatedAt) || 0
  };
}

function pushNow() {
  pushTimer = null;
  var ref = cloudDoc();
  if (!ref) return;
  var state = readLocal();
  setStatus('busy', 'Syncing…');
  ref.set(toCloudPayload(state), { merge: true }).then(
    function () { setStatus('ok', 'Synced'); },
    function () { setStatus('err', 'Sync failed — saved locally'); }
  );
}
function schedulePush() {
  if (!user || !db) return;
  if (pushTimer) clearTimeout(pushTimer);
  pushTimer = setTimeout(pushNow, PUSH_DEBOUNCE_MS);
}

function syncOnSignIn(u) {
  var ref = cloudDoc();
  if (!ref) return;
  setStatus('busy', 'Syncing…');
  ref.get().then(function (snap) {
    var local = readLocal();
    var decision = decideSync(local, snap.exists ? snap.data() : null);
    if (decision === 'adopt') {
      if (window.CTS) {
        window.CTS.applyState(fromCloudPayload(snap.data())); // adopts cloud updatedAt too
        window.CTS.refreshUI(); // reload Leitner boxes + test history UI
      }
      setStatus('ok', 'Synced');
    } else {
      pushNow(); // local is newer, or first run: push local up
    }
  }, function () {
    setStatus('err', 'Offline — saved locally');
  });
}

/* ---------- auth UI ---------- */
function renderAuth() {
  var out = $('auth-out'), inn = $('auth-in');
  if (!out || !inn) return;
  if (user) {
    out.style.display = 'none';
    inn.style.display = '';
    var av = $('auth-avatar');
    if (av) {
      if (user.photoURL) { av.src = user.photoURL; av.style.display = ''; }
      else { av.style.display = 'none'; }
    }
    var nm = $('auth-name');
    if (nm) nm.textContent = user.displayName || user.email || 'Signed in';
  } else {
    out.style.display = '';
    inn.style.display = 'none';
  }
}

function signIn() {
  if (!auth || !window.firebase) return;
  var provider = new firebase.auth.GoogleAuthProvider();
  setStatus('busy', 'Signing in…');
  if (isStandalone()) {
    // iOS home-screen web apps: popups don't work — redirect straight away.
    auth.signInWithRedirect(provider).catch(function () { setStatus('err', 'Sign-in failed'); });
    return;
  }
  auth.signInWithPopup(provider).catch(function (e) {
    var code = e && e.code;
    if (code === 'auth/popup-blocked' || code === 'auth/popup-closed-by-user' ||
        code === 'auth/cancelled-popup-request' ||
        code === 'auth/operation-not-supported-in-this-environment') {
      // popup unavailable (blockers, some in-app browsers) — fall back to redirect
      auth.signInWithRedirect(provider).catch(function () { setStatus('err', 'Sign-in failed'); });
    } else {
      setStatus('err', 'Sign-in failed');
    }
  });
}

function signOut() {
  if (!auth) return;
  auth.signOut().catch(function () {});
  // local progress stays on the device; the app keeps working offline
}

/* ---------- init ---------- */
function init() {
  var btnIn = $('btn-signin'), btnOut = $('btn-signout');
  if (btnIn) btnIn.addEventListener('click', signIn);
  if (btnOut) btnOut.addEventListener('click', signOut);

  if (window.CTS) window.CTS.onChange = schedulePush; // debounced cloud write on local progress

  if (!window.firebase) { setStatus('', 'Offline'); return; } // CDN blocked / file:// without network
  try {
    if (!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
  } catch (e) { setStatus('', 'Offline'); return; }
  auth = firebase.auth();
  db = firebase.firestore();
  try {
    var p = db.enablePersistence(); // offline cache for Firestore reads
    if (p && p.catch) p.catch(function () {}); // multi-tab / unsupported: ignore, app still works
  } catch (e) {}

  auth.getRedirectResult().catch(function () {}); // completes redirect sign-ins (standalone / popup fallback)

  auth.onAuthStateChanged(function (u) {
    user = u;
    renderAuth();
    if (u) syncOnSignIn(u);
    else setStatus('', 'Signed out');
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();

// exposed for unit-testing the merge logic without a browser
window.CTSAuth = { decideSync: decideSync, isStandalone: isStandalone, collection: COLLECTION };

})();

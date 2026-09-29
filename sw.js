/* CTS-Prep offline service worker (v5).
   Caches the app shell, question data, and Firebase SDKs so the app loads
   and runs with no internet. Progress is stored in localStorage (already
   offline-safe) and syncs to the cloud when back online.
   Firebase backend API calls are never cached. */
var CACHE = 'cts-prep-v5';
var ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './auth.js',
  './forge.js',
  './data/questions.js',
  './data/cards.js',
  './data/guides.js',
  './data/drills.js',
  'https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js',
  'https://www.gstatic.com/firebasejs/10.14.1/firebase-auth-compat.js',
  'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore-compat.js'
];
// Firebase backend hosts: auth + firestore APIs, and the OAuth handler.
var API_RE = /firestore\.googleapis\.com|identitytoolkit\.googleapis\.com|securetoken\.googleapis\.com|firebaseapp\.com\/__\/auth|accounts\.google\.com/;

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) { return c.addAll(ASSETS); })
      .then(function () { return self.skipWaiting(); })
      .catch(function (err) { console.warn('[sw] precache failed', err); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; })
        .map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  var url = e.request.url;
  if (API_RE.test(url)) return; // let auth/API traffic go straight to network
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(function (hit) {
      if (hit) return hit;
      return fetch(e.request).then(function (res) {
        if (res && res.ok &&
            (url.indexOf(self.location.origin) === 0 || url.indexOf('https://www.gstatic.com/') === 0)) {
          var copy = res.clone();
          caches.open(CACHE).then(function (c) { c.put(e.request, copy); });
        }
        return res;
      }).catch(function () {
        // Offline and not cached: fall back to the app shell for page loads.
        if (e.request.mode === 'navigate' || e.request.destination === 'document') {
          return caches.match('./index.html', { ignoreSearch: true });
        }
        return Response.error();
      });
    })
  );
});

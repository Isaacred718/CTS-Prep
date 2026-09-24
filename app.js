/* CTS Prep merged study app — all logic. Data comes from data/questions.js, data/cards.js, data/guides.js */
(function () {
'use strict';

/* ---------- helpers ---------- */
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
function shuffle(a) {
  a = a.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function sampleNoRepeat(arr, n) { return shuffle(arr).slice(0, Math.min(n, arr.length)); }
function md(src) {
  // minimal markdown: ##, ###, bullets, **bold**, *italic*, `code`
  const lines = String(src).split('\n');
  let html = '', inList = false;
  const inline = t => esc(t)
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^*])\*([^*\n]+)\*/g, '$1<em>$2</em>')
    .replace(/`([^`]+)`/g, '<code>$1</code>');
  for (const line of lines) {
    const h2 = line.match(/^##\s+(.*)/), h3 = line.match(/^###\s+(.*)/), li = line.match(/^\s*-\s+(.*)/);
    if (h2 || h3) {
      if (inList) { html += '</ul>'; inList = false; }
      html += h2 ? `<h2>${inline(h2[1])}</h2>` : `<h3>${inline(h3[1])}</h3>`;
    } else if (li) {
      if (!inList) { html += '<ul>'; inList = true; }
      html += `<li>${inline(li[1])}</li>`;
    } else if (line.trim() === '') {
      if (inList) { html += '</ul>'; inList = false; }
    } else {
      if (inList) { html += '</ul>'; inList = false; }
      html += `<p>${inline(line)}</p>`;
    }
  }
  if (inList) html += '</ul>';
  return html;
}
const isAdv = d => d.indexOf('Advanced:') === 0;
const tagCls = d => 'tag' + (isAdv(d) ? ' adv' : '');
function domainsOf(list) {
  const m = new Map();
  list.forEach(q => m.set(q.domain, (m.get(q.domain) || 0) + 1));
  return [...m.entries()].sort((a, b) => a[0].localeCompare(b[0]));
}
function domainBar(domain, correct, total) {
  const pct = total ? Math.round(100 * correct / total) : 0;
  const color = pct >= 80 ? 'var(--green)' : pct >= 60 ? 'var(--amber)' : 'var(--red)';
  return `<div class="dbar"><div class="dlbl"><span>${esc(domain)}</span><span>${correct}/${total} · ${pct}%</span></div>` +
    `<div class="dtrack"><div class="dfill" style="width:${pct}%;background:${color}"></div></div></div>`;
}

/* ---------- progress bridge (used by auth.js for Google sign-in / cloud sync) ---------- */
const LS_BOXES = 'cts_leitner_v1';
const LS_HIST = 'cts_test_history';
const LS_META = 'cts_sync_meta_v1';
function setMetaTs(ts) { try { localStorage.setItem(LS_META, JSON.stringify({ updatedAt: ts || Date.now() })); } catch (e) {} }
function readMetaTs() { try { return JSON.parse(localStorage.getItem(LS_META) || '{}').updatedAt || 0; } catch (e) { return 0; } }
function notifyProgress() {
  setMetaTs(Date.now());
  try { renderReadiness(); } catch (e) {}
  if (window.CTS && typeof window.CTS.onChange === 'function') { try { window.CTS.onChange(); } catch (e) {} }
}
window.CTS = {
  onChange: null, // auth.js assigns a debounced cloud-push callback
  getState() {
    let boxes = {}, hist = [];
    try { boxes = JSON.parse(localStorage.getItem(LS_BOXES) || '{}'); } catch (e) {}
    try { hist = JSON.parse(localStorage.getItem(LS_HIST) || '[]'); } catch (e) {}
    return { boxes, hist, updatedAt: readMetaTs() };
  },
  applyState(s) {
    if (s && s.boxes) { try { localStorage.setItem(LS_BOXES, JSON.stringify(s.boxes)); } catch (e) {} }
    if (s && s.hist) { try { localStorage.setItem(LS_HIST, JSON.stringify(s.hist.slice(0, 20))); } catch (e) {} }
    setMetaTs(s && s.updatedAt); // adopt the cloud timestamp so we don't push straight back
  },
  refreshUI() { try { FC.reload(); } catch (e) {} renderHistory(); try { renderReadiness(); } catch (e) {} }
};

/* ---------- tabs ---------- */
document.querySelectorAll('nav.tabs button').forEach(b => {
  b.addEventListener('click', () => {
    document.querySelectorAll('nav.tabs button').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    document.querySelectorAll('.tabpane').forEach(p => p.classList.remove('active'));
    $('pane-' + b.dataset.tab).classList.add('active');
    if (b.dataset.tab === 'overview') { try { renderReadiness(); } catch (e) {} }
    window.scrollTo(0, 0);
  });
});

/* ---------- career targets ----------
   Each title maps to the 1–3 CTS domains the role leans on. Titles are ranked by
   the average readiness of their mapped domains; titles with no signal yet are
   never given a fake score. */
const CAREERS = [
  { title: 'AV Engineer',
    domains: ['CTS: AV Design', 'CTS: Video & Signal', 'CTS: Sound & Physics'],
    why: 'Designs, installs and commissions integrated AV systems end to end.' },
  { title: 'AV Design Engineer',
    domains: ['CTS: Needs Analysis', 'CTS: AV Design', 'CTS: AVIXA Standards'],
    why: 'Turns client needs into standards-based system designs and documentation.' },
  { title: 'AV Project Manager',
    domains: ['CTS: Project Management', 'CTS: Customer Relations', 'CTS: Commissioning & Closeout'],
    why: 'Owns scope, schedule and budget from kickoff to client sign-off.' },
  { title: 'Field Service Engineer',
    domains: ['CTS: Troubleshooting & Verification', 'CTS: AV Networking', 'CTS: Electrical & Site Survey'],
    why: 'Diagnoses and repairs deployed AV systems on site.' },
  { title: 'Lead AV Technician',
    domains: ['CTS: Sound & Physics', 'CTS: Video & Signal', 'CTS: Customer Relations'],
    why: 'Runs event and install crews and owns the room on show day.' },
  { title: 'Control Systems Programmer',
    domains: ['CTS: Control Systems', 'CTS: AV Networking'],
    why: 'Programs touch panels, DSP and room automation logic.' },
  { title: 'UC / Collaboration Engineer',
    domains: ['CTS: AV Networking', 'CTS: Video & Signal', 'CTS: Control Systems'],
    why: 'Deploys and supports Teams/Zoom rooms and UC estates.' },
  { title: 'Broadcast Systems Engineer',
    domains: ['Advanced: ST 2110 Suite', 'CTS: Video & Signal', 'Advanced: Dante & AES67'],
    why: 'Builds IP-based broadcast and live-production workflows.' },
];

/* ---------- overview ---------- */
(function overview() {
  $('hdr-stats').textContent = `${QUESTIONS.length} questions · ${CARDS.length} cards · ${typeof DRILLS !== 'undefined' ? DRILLS.length : 0} drills`;
  $('ov-stats').innerHTML =
    statBox(QUESTIONS.length, 'questions') + statBox(CARDS.length, 'flashcards') + statBox(GUIDES.length, 'guides') + statBox(typeof DRILLS !== 'undefined' ? DRILLS.length : 0, 'drills');
  function statBox(v, l) { return `<div class="stat-box"><div class="stat-val">${v}</div><div class="stat-lbl">${l}</div></div>`; }
  $('ov-blurb').textContent =
    'Merged from the CTS-Prep and cts-study banks, with full explanations on every question, ' +
    'new coverage of needs analysis, design, project management, customer relations, troubleshooting and closeout, ' +
    'plus a practice-test generator that builds a fresh randomized exam every time.';
  $('ov-domains').innerHTML = domainsOf(QUESTIONS).map(([d, n]) => {
    const pct = Math.round(100 * n / QUESTIONS.length);
    return `<div class="dbar"><div class="dlbl"><span>${esc(d)}</span><span>${n}</span></div>` +
      `<div class="dtrack"><div class="dfill" style="width:${pct}%;background:var(--blue)"></div></div></div>`;
  }).join('');
  renderHistory();
  renderReadiness();
})();
function renderHistory() {
  let hist = [];
  try { hist = JSON.parse(localStorage.getItem('cts_test_history') || '[]'); } catch (e) {}
  if (!hist.length) return;
  $('ov-history').innerHTML = hist.slice(0, 5).map(h =>
    `<div class="hist-row"><span>${esc(h.date)} · ${h.n}Q ${esc(h.mode)}</span>` +
    `<strong class="${h.score >= 70 ? 'pass' : 'fail'}">${h.score}%</strong></div>`
  ).join('');
}

/* ---------- exam readiness ----------
   Per-domain score = 60% practice-test performance (pooled correct/answered across
   history entries that carry a per-domain breakdown) + 40% flashcard mastery
   (% of the domain's cards in Leitner box 4 or 5). With only one signal available,
   that signal carries full weight; with none, the domain reports "No data yet".
   Overall = mean of domains with data. Bands echo the 70% pass heuristic. */
function computeReadiness() {
  let hist = [];
  try { hist = JSON.parse(localStorage.getItem('cts_test_history') || '[]'); } catch (e) { hist = []; }
  let boxes = {};
  try { boxes = JSON.parse(localStorage.getItem('cts_leitner_v1') || '{}'); } catch (e) { boxes = {}; }
  const per = domainsOf(QUESTIONS).map(([d]) => {
    let c = 0, t = 0; // pooled test performance for this domain
    hist.forEach(h => {
      const hd = h && h.domains && h.domains[d];
      if (hd) { c += (+hd.c || 0); t += (+hd.t || 0); }
    });
    const test = t > 0 ? 100 * c / t : null;
    const cards = CARDS.filter(x => x.domain === d);
    let mastered = 0, touched = 0; // touched = cards with any recorded box (seen at least once)
    cards.forEach(x => {
      const b = +boxes[x.domain + '|' + x.front] || 0;
      if (b > 0) { touched++; if (b >= 4) mastered++; }
    });
    const mastery = touched ? 100 * mastered / cards.length : null;
    let score = null;
    if (test !== null && mastery !== null) score = 0.6 * test + 0.4 * mastery;
    else if (test !== null) score = test;
    else if (mastery !== null) score = mastery;
    return { domain: d, test, mastery, score: score === null ? null : Math.round(score) };
  });
  const scored = per.filter(p => p.score !== null);
  const overall = scored.length
    ? Math.round(scored.reduce((a, p) => a + p.score, 0) / scored.length) : null;
  return { per, overall };
}
function readyBand(score) {
  if (score === null) return { label: 'No data yet', cls: 'muted' };
  if (score >= 85) return { label: 'Exam ready', cls: 'pass' };
  if (score >= 70) return { label: 'Almost there', cls: 'info' };
  if (score >= 50) return { label: 'Building momentum', cls: 'warn' };
  return { label: 'Early stages', cls: 'fail' };
}
function readyColor(score) {
  if (score >= 85) return 'var(--green)';
  if (score >= 70) return 'var(--blue)';
  if (score >= 50) return 'var(--amber)';
  return 'var(--red)';
}
function renderReadiness() {
  const el = $('ov-readiness');
  if (!el) return;
  const { per, overall } = computeReadiness();
  const b = readyBand(overall);
  const rows = per.slice().sort((a, c) =>
    (a.score === null ? 9999 : a.score) - (c.score === null ? 9999 : c.score));
  el.innerHTML =
    `<div class="ready-head"><div class="ready-score ${b.cls}">${overall === null ? '—' : overall + '%'}</div>` +
    `<div><div class="ready-band ${b.cls}">${b.label}</div>` +
    `<p class="muted small" style="margin:4px 0 0">Practice tests 60% · flashcards 40%. ` +
    `Pass heuristic: 70% — the real exam uses scaled scoring, so treat this as a study signal, not a prediction.</p></div></div>` +
    rows.map(p => {
      if (p.score === null)
        return `<div class="dbar"><div class="dlbl"><span>${esc(p.domain)}</span>` +
          `<span class="muted">No data yet</span></div></div>`;
      const pb = readyBand(p.score);
      return `<div class="dbar"><div class="dlbl"><span>${esc(p.domain)}</span>` +
        `<span class="${pb.cls}">${p.score}% · ${pb.label}</span></div>` +
        `<div class="dtrack"><div class="dfill" style="width:${p.score}%;background:${readyColor(p.score)}"></div></div></div>`;
    }).join('');
  renderCareers(per);
}

function matchLabel(avg) {
  if (avg === null) return { label: 'Study to unlock signal', cls: 'muted' };
  if (avg >= 80) return { label: 'Strong match', cls: 'pass' };
  if (avg >= 60) return { label: 'Developing', cls: 'info' };
  return { label: 'Early', cls: 'warn' };
}
function renderCareers(per) {
  const box = $('ov-careers');
  if (!box) return;
  const byDom = {};
  per.forEach(p => { byDom[p.domain] = p.score; });
  const ranked = CAREERS.map(c => {
    const scores = c.domains.map(d => byDom[d]).filter(s => s !== null && s !== undefined);
    const avg = scores.length ? Math.round(scores.reduce((a, s) => a + s, 0) / scores.length) : null;
    return { title: c.title, domains: c.domains, why: c.why, avg };
  }).sort((a, b) => (b.avg === null ? -1 : b.avg) - (a.avg === null ? -1 : a.avg));
  box.innerHTML = ranked.slice(0, 6).map(c => {
    const m = matchLabel(c.avg);
    return `<div class="career"><div class="career-top"><h3>${esc(c.title)}</h3>` +
      `<span class="match ${m.cls}">${m.label}${c.avg !== null ? ' · ' + c.avg + '%' : ''}</span></div>` +
      `<div class="career-domains">${c.domains.map(esc).join(' · ')}</div>` +
      `<p class="muted small career-why">${esc(c.why)}</p></div>`;
  }).join('');
}

/* ---------- guides ---------- */
(function guides() {
  const list = $('guide-list');
  list.innerHTML = '';
  GUIDES.forEach((g, i) => {
    const b = document.createElement('button');
    b.innerHTML = `<div class="gt">${esc(g.title)}</div><div class="gd">${esc(g.domain)}</div>`;
    b.addEventListener('click', () => {
      $('guide-list').parentElement.style.display = 'none';
      $('guide-view').style.display = '';
      $('guide-body').innerHTML = md(g.body);
      window.scrollTo(0, 0);
    });
    list.appendChild(b);
  });
  $('guide-back').addEventListener('click', () => {
    $('guide-view').style.display = 'none';
    $('guide-list').parentElement.style.display = '';
  });
})();

/* ---------- flashcards (Leitner) ---------- */
const FC = (function () {
  const LS = 'cts_leitner_v1';
  let boxes = {};
  try { boxes = JSON.parse(localStorage.getItem(LS) || '{}'); } catch (e) { boxes = {}; }
  const save = () => { localStorage.setItem(LS, JSON.stringify(boxes)); notifyProgress(); };
  const key = c => c.domain + '|' + c.front;
  const boxOf = c => boxes[key(c)] || 1;

  const cats = [...new Set(CARDS.map(c => c.domain))].sort();
  const sel = $('fc-filter');
  cats.forEach(c => { const o = document.createElement('option'); o.value = c; o.textContent = `${c} (${CARDS.filter(x => x.domain === c).length})`; sel.appendChild(o); });

  let deck = [], idx = 0, flipped = false;

  function buildDeck() {
    const f = sel.value;
    deck = shuffle(CARDS.filter(c => f === '__all' || c.domain === f)
      .sort((a, b) => boxOf(a) - boxOf(b)));
    idx = 0;
  }
  function renderBoxes() {
    const f = sel.value;
    const list = CARDS.filter(c => f === '__all' || c.domain === f);
    const counts = [0, 0, 0, 0, 0, 0];
    list.forEach(c => counts[boxOf(c)]++);
    $('fc-boxes').innerHTML = [1, 2, 3, 4, 5].map(b =>
      `<div class="box${deck.length && boxOf(deck[idx]) === b ? 'cur' : ''}"><b>${counts[b]}</b>Box ${b}</div>`).join('');
    const learned = counts[5];
    $('fc-progress').textContent = list.length
      ? `${learned}/${list.length} mastered · ${deck.length - idx} left in deck`
      : 'No cards in this category yet.';
    $('fc-count').textContent = `· ${list.length} cards`;
  }
  function show() {
    flipped = false;
    $('fc-card').classList.remove('flipped');
    if (!deck.length) { $('fc-front').textContent = 'Deck complete — nice work!'; $('fc-back').textContent = 'Shuffle to run it again.'; }
    else {
      const c = deck[idx];
      $('fc-front').textContent = c.front;
      $('fc-back').textContent = c.back;
    }
    renderBoxes();
  }
  function grade(ok) {
    if (!deck.length) return;
    const c = deck[idx], k = key(c);
    boxes[k] = ok ? Math.min(5, boxOf(c) + 1) : 1;
    save();
    idx++;
    if (idx >= deck.length) {
      // rebuild with remaining weak cards first for continuous drilling
      const weak = CARDS.filter(x => boxOf(x) < 3 && (sel.value === '__all' || x.domain === sel.value));
      deck = shuffle(weak); idx = 0;
      if (!deck.length) { show(); return; }
    }
    show();
  }
  $('fc-card').addEventListener('click', () => {
    flipped = !flipped;
    $('fc-card').classList.toggle('flipped', flipped);
  });
  $('fc-got').addEventListener('click', () => grade(true));
  $('fc-miss').addEventListener('click', () => grade(false));
  $('fc-shuffle').addEventListener('click', () => { buildDeck(); show(); });
  $('fc-reset').addEventListener('click', () => {
    if (!confirm('Reset all flashcard progress?')) return;
    boxes = {}; save(); buildDeck(); show();
  });
  sel.addEventListener('change', () => { buildDeck(); show(); });
  buildDeck(); show();
  return {
    rebuild: () => { buildDeck(); show(); },
    reload() { // re-read boxes from localStorage (e.g. after adopting cloud state), then redraw
      try { boxes = JSON.parse(localStorage.getItem(LS) || '{}'); } catch (e) { boxes = {}; }
      buildDeck(); show();
    }
  };
})();

/* ---------- shared test/quiz engine ---------- */
function makeTimer(displayEl, minutes, onExpire) {
  if (!minutes || minutes <= 0) return { stop() {}, el: null };
  let left = Math.round(minutes * 60);
  const el = displayEl;
  el.style.display = '';
  const tick = () => {
    const m = Math.floor(left / 60), s = left % 60;
    el.textContent = `${m}:${String(s).padStart(2, '0')}`;
    el.classList.toggle('danger', left <= 300);
    if (left <= 0) { clearInterval(iv); onExpire(); return; }
    left--;
  };
  tick();
  const iv = setInterval(tick, 1000);
  return { stop() { clearInterval(iv); }, el };
}

/* ---------- quiz ---------- */
const Quiz = (function () {
  let qs = [], i = 0, results = [], timer = null, total = 0;

  // setup controls
  const domSel = $('q-domain');
  domainsOf(QUESTIONS).forEach(([d, n]) => {
    const o = document.createElement('option');
    o.value = d; o.textContent = `${d} (${n})`; domSel.appendChild(o);
  });
  let qCount = 25;
  $('q-count-seg').querySelectorAll('button').forEach(b => b.addEventListener('click', () => {
    $('q-count-seg').querySelectorAll('button').forEach(x => x.classList.remove('on'));
    b.classList.add('on'); qCount = +b.dataset.n;
  }));

  $('q-start').addEventListener('click', () => {
    const d = domSel.value;
    let pool = QUESTIONS.filter(q => d === '__all' || q.domain === d);
    if ($('q-shuffle').checked) pool = shuffle(pool);
    qs = qCount === 0 ? pool : sampleNoRepeat(pool, qCount);
    if (!qs.length) { alert('No questions for this selection.'); return; }
    i = 0; results = []; total = qs.length;
    $('quiz-setup').style.display = 'none';
    $('quiz-results').style.display = 'none';
    $('quiz-run').style.display = '';
    const mins = +$('q-timer').value || 0;
    timer = makeTimer($('quiz-timer'), mins, () => finish());
    show();
  });

  function show() {
    const q = qs[i];
    $('quiz-pos').textContent = `Question ${i + 1} of ${total}`;
    $('quiz-bar').style.width = (100 * i / total) + '%';
    $('quiz-tag').className = tagCls(q.domain);
    $('quiz-tag').textContent = q.domain;
    $('quiz-q').textContent = q.q;
    $('quiz-explain').style.display = 'none';
    $('quiz-next').style.display = 'none';
    const box = $('quiz-opts'); box.innerHTML = '';
    const order = shuffle(q.options.map((t, oi) => oi));
    order.forEach(oi => {
      const b = document.createElement('button');
      b.className = 'option'; b.textContent = q.options[oi];
      b.dataset.oi = oi;
      b.addEventListener('click', () => answer(oi, b));
      box.appendChild(b);
    });
  }
  function answer(oi, btn) {
    const q = qs[i];
    const ok = oi === q.correct;
    results.push({ q, picked: oi, ok });
    [...$('quiz-opts').children].forEach(b => {
      b.disabled = true;
      const idxOpt = +b.dataset.oi;
      if (idxOpt === q.correct) b.classList.add('correct');
      else if (b === btn) b.classList.add('wrong');
      else b.classList.add('dim');
    });
    const ex = $('quiz-explain');
    ex.innerHTML = `<div class="explain"><strong>${ok ? 'Correct.' : 'Not quite.'}</strong> ${esc(q.explanation)}</div>`;
    ex.style.display = '';
    $('quiz-next').style.display = '';
    $('quiz-next').textContent = i + 1 === total ? 'See results →' : 'Next →';
  }
  $('quiz-next').addEventListener('click', () => { i++; i < total ? show() : finish(); });
  $('quiz-quit').addEventListener('click', () => { if (timer) timer.stop(); backToSetup(); });

  function backToSetup() {
    $('quiz-run').style.display = 'none';
    $('quiz-results').style.display = 'none';
    $('quiz-setup').style.display = '';
  }
  function finish() {
    if (timer) timer.stop();
    const correct = results.filter(r => r.ok).length;
    const pct = total ? Math.round(100 * correct / total) : 0;
    $('quiz-run').style.display = 'none';
    $('quiz-results').style.display = '';
    const sc = $('qr-score');
    sc.textContent = pct + '%';
    sc.className = 'big-score ' + (pct >= 80 ? 'pass' : pct >= 60 ? 'warn' : 'fail');
    $('qr-verdict').textContent = pct >= 80 ? 'Strong — exam ready on this material.' : pct >= 60 ? 'Getting there — review the weak domains.' : 'Keep studying — hit the guides and cards first.';
    $('qr-verdict').className = 'verdict ' + (pct >= 80 ? 'pass' : pct >= 60 ? 'warn' : 'fail');
    const byDom = {};
    results.forEach(r => {
      const d = r.q.domain;
      byDom[d] = byDom[d] || { c: 0, t: 0 };
      byDom[d].t++; if (r.ok) byDom[d].c++;
    });
    $('qr-domains').innerHTML = Object.entries(byDom).sort((a, b) => (a[1].c / a[1].t) - (b[1].c / b[1].t))
      .map(([d, v]) => domainBar(d, v.c, v.t)).join('');
    $('qr-review-list').style.display = 'none';
    $('qr-review-list').innerHTML = results.map(r => reviewItem(r.q, r.picked)).join('');
    window.scrollTo(0, 0);
  }
  $('qr-retry').addEventListener('click', backToSetup);
  $('qr-review').addEventListener('click', () => {
    const l = $('qr-review-list');
    l.style.display = l.style.display === 'none' ? '' : 'none';
  });
  return {};
})();

function reviewItem(q, picked) {
  const ok = picked === q.correct;
  const mark = ok ? '<span class="pass">✓ Correct</span>' : '<span class="fail">✗ Missed</span>';
  const your = picked == null ? '<em>unanswered</em>' : esc(q.options[picked]);
  return `<div class="review-item"><div class="rq">${mark} · ${esc(q.q)}</div>` +
    `<div class="ra">Your answer: <strong>${your}</strong><br>Correct answer: <strong class="pass">${esc(q.options[q.correct])}</strong></div>` +
    `<div class="re">${esc(q.explanation)}</div></div>`;
}

/* ---------- practice test generator ---------- */
const PTest = (function () {
  let qs = [], i = 0, answers = [], timer = null, meta = {};

  const allDomains = domainsOf(QUESTIONS).map(([d]) => d);
  const grid = $('t-domain-grid');
  allDomains.forEach(d => {
    const lab = document.createElement('label');
    lab.innerHTML = `<input type="checkbox" value="${esc(d)}" checked> ${esc(d)}`;
    grid.appendChild(lab);
  });
  $('t-dom-all').addEventListener('click', () => grid.querySelectorAll('input').forEach(c => c.checked = true));
  $('t-dom-none').addEventListener('click', () => grid.querySelectorAll('input').forEach(c => c.checked = false));

  let tLen = 50, tMix = 'balanced';
  const perQ = 150 / 110; // minutes per question, from the full-sim default
  $('t-len-seg').querySelectorAll('button').forEach(b => b.addEventListener('click', () => {
    $('t-len-seg').querySelectorAll('button').forEach(x => x.classList.remove('on'));
    b.classList.add('on'); tLen = +b.dataset.n;
    $('t-timer').value = Math.round(tLen * perQ);
  }));
  $('t-mix-seg').querySelectorAll('button').forEach(b => b.addEventListener('click', () => {
    $('t-mix-seg').querySelectorAll('button').forEach(x => x.classList.remove('on'));
    b.classList.add('on'); tMix = b.dataset.m;
  }));
  $('t-timer').value = Math.round(50 * perQ);

  function buildTest() {
    // selected domains drive both mix modes; nothing checked = all domains
    const checked = [...grid.querySelectorAll('input:checked')].map(c => c.value);
    const selected = checked.length ? checked : allDomains;
    const byDom = {};
    selected.forEach(d => { byDom[d] = QUESTIONS.filter(q => q.domain === d); });
    let picked = [];
    if (tMix === 'balanced') {
      // round-robin across the selected domains so each is represented
      const pools = Object.entries(byDom).map(([d, arr]) => shuffle(arr));
      let progressed = true;
      while (picked.length < tLen && progressed) {
        progressed = false;
        for (const pool of pools) {
          if (picked.length >= tLen) break;
          if (pool.length) { picked.push(pool.pop()); progressed = true; }
        }
      }
    } else {
      // pure random draw from the combined pool of selected domains
      picked = sampleNoRepeat(selected.flatMap(d => byDom[d]), tLen);
    }
    return { picked: shuffle(picked), selected, capped: picked.length < tLen };
  }

  $('t-start').addEventListener('click', () => {
    const { picked, selected, capped } = buildTest();
    if (!picked.length) { alert('No questions available for this selection.'); return; }
    qs = picked; i = 0; answers = new Array(qs.length).fill(null);
    meta = { n: qs.length, mode: tMix === 'balanced' ? 'balanced' : 'random', capped };
    $('test-setup').style.display = 'none';
    $('test-results').style.display = 'none';
    $('test-run').style.display = '';
    const mins = +$('t-timer').value || 0;
    if (timer) timer.stop();
    timer = makeTimer($('test-timer'), mins, () => grade(true));
    if (!mins) $('test-timer').style.display = 'none';
    show();
  });

  function show() {
    const q = qs[i];
    $('test-pos').textContent = `Question ${i + 1} of ${qs.length}${meta.capped ? ' (capped: bank exhausted)' : ''}`;
    const answered = answers.filter(a => a !== null).length;
    $('test-bar').style.width = (100 * answered / qs.length) + '%';
    $('test-tag').className = tagCls(q.domain);
    $('test-tag').textContent = q.domain;
    $('test-q').textContent = q.q;
    const box = $('test-opts'); box.innerHTML = '';
    // stable option order per question within a test run
    q.options.forEach((t, oi) => {
      const b = document.createElement('button');
      b.className = 'option' + (answers[i] === oi ? ' correct' : '');
      if (answers[i] === oi) b.style.borderColor = 'var(--blue)';
      b.textContent = t;
      b.addEventListener('click', () => { answers[i] = oi; show(); });
      box.appendChild(b);
    });
    $('test-prev').disabled = i === 0;
    $('test-next').style.display = i === qs.length - 1 ? 'none' : '';
    $('test-finish').style.display = i === qs.length - 1 ? '' : 'none';
    window.scrollTo(0, 0);
  }
  $('test-prev').addEventListener('click', () => { if (i > 0) { i--; show(); } });
  $('test-next').addEventListener('click', () => { if (i < qs.length - 1) { i++; show(); } });
  $('test-finish').addEventListener('click', () => {
    const un = answers.filter(a => a === null).length;
    if (un && !confirm(`${un} question${un > 1 ? 's' : ''} unanswered. Finish and grade anyway?`)) return;
    grade(false);
  });
  $('test-quit').addEventListener('click', () => {
    if (!confirm('Abandon this test? Progress will be lost.')) return;
    if (timer) timer.stop();
    $('test-run').style.display = 'none';
    $('test-setup').style.display = '';
  });

  function grade(expired) {
    if (timer) timer.stop();
    let correct = 0;
    const byDom = {};
    qs.forEach((q, idx) => {
      const ok = answers[idx] === q.correct;
      if (ok) correct++;
      const d = q.domain;
      byDom[d] = byDom[d] || { c: 0, t: 0 };
      byDom[d].t++; if (ok) byDom[d].c++;
    });
    const pct = Math.round(100 * correct / qs.length);
    $('test-run').style.display = 'none';
    $('test-results').style.display = '';
    const sc = $('tr-score');
    sc.textContent = pct + '%';
    sc.className = 'big-score ' + (pct >= 70 ? 'pass' : 'fail');
    const verdict = $('tr-verdict');
    if (pct >= 85) { verdict.textContent = 'Excellent — exam ready.'; verdict.className = 'verdict pass'; }
    else if (pct >= 70) { verdict.textContent = 'Likely pass — keep polishing weak domains.'; verdict.className = 'verdict pass'; }
    else { verdict.textContent = 'Below the pass heuristic — more study needed.'; verdict.className = 'verdict fail'; }
    $('tr-note').textContent = (expired ? 'Time expired — test auto-graded. ' : '') +
      'Pass heuristic: 70%. The real CTS exam uses scaled scoring; treat this as a practice benchmark, not a prediction.';
    $('tr-domains').innerHTML = Object.entries(byDom).sort((a, b) => (a[1].c / a[1].t) - (b[1].c / b[1].t))
      .map(([d, v]) => domainBar(d, v.c, v.t)).join('');
    $('tr-review-list').style.display = 'none';
    $('tr-review-list').innerHTML = qs.map((q, idx) => reviewItem(q, answers[idx])).join('');
    // history
    try {
      const hist = JSON.parse(localStorage.getItem('cts_test_history') || '[]');
      hist.unshift({ date: new Date().toLocaleDateString(), n: qs.length, score: pct, mode: meta.mode, domains: byDom });
      localStorage.setItem('cts_test_history', JSON.stringify(hist.slice(0, 20)));
    } catch (e) {}
    notifyProgress();
    renderHistory();
    window.scrollTo(0, 0);
  }
  $('tr-new').addEventListener('click', () => {
    $('test-results').style.display = 'none';
    $('test-setup').style.display = '';
  });
  $('tr-review').addEventListener('click', () => {
    const l = $('tr-review-list');
    l.style.display = l.style.display === 'none' ? '' : 'none';
  });
  return {};
})();

/* ---------- scenario drills ----------
   Exam-style scenario drills weighted to the current CTS Job Task Analysis,
   with troubleshooting and AV-over-IP decisions carrying the most weight.
   Results are recorded into cts_test_history (mode 'drill') so they ride the
   same local + Firestore sync channel as quizzes and practice tests. */
const Drills = (function () {
  let qs = [], i = 0, answers = [];
  if (typeof DRILLS === 'undefined' || !DRILLS.length) return {};
  $('drill-count').textContent = DRILLS.length;

  function backToSetup() {
    $('drill-run').style.display = 'none';
    $('drill-results').style.display = 'none';
    $('drill-setup').style.display = '';
  }
  function show() {
    const d = qs[i], picked = answers[i];
    $('drill-pos').textContent = `Drill ${i + 1} of ${qs.length}`;
    $('drill-bar').style.width = (100 * answers.filter(a => a !== null).length / qs.length) + '%';
    $('drill-tag').className = 'tag';
    $('drill-tag').textContent = d.duty;
    $('drill-task').textContent = d.task;
    $('drill-scenario').textContent = d.scenario;
    $('drill-q').textContent = d.question;
    const box = $('drill-opts'); box.innerHTML = '';
    const ex = $('drill-explain');
    d.options.forEach((t, oi) => {
      const b = document.createElement('button');
      let cls = 'option';
      if (picked !== null) {
        if (oi === d.correct) cls += ' correct';
        else if (oi === picked) cls += ' wrong';
      }
      b.className = cls;
      b.textContent = t;
      b.disabled = picked !== null;
      b.addEventListener('click', () => { answers[i] = oi; show(); });
      box.appendChild(b);
    });
    if (picked !== null) {
      const ok = picked === d.correct;
      ex.style.display = '';
      ex.innerHTML = `<div class="${ok ? 'pass' : 'fail'}" style="font-weight:700;margin-bottom:6px">${ok ? '✓ Correct' : '✗ Not quite — correct answer: ' + esc(d.options[d.correct])}</div><div>${esc(d.explanation)}</div>`;
      ex.className = 'explain ' + (ok ? 'ok' : 'no');
      $('drill-next').style.display = '';
      $('drill-next').textContent = i === qs.length - 1 ? 'See results →' : 'Next →';
    } else {
      ex.style.display = 'none';
      $('drill-next').style.display = 'none';
    }
    window.scrollTo(0, 0);
  }
  function finish() {
    let correct = 0;
    const byDuty = {};
    qs.forEach((d, idx) => {
      const ok = answers[idx] === d.correct;
      if (ok) correct++;
      byDuty[d.duty] = byDuty[d.duty] || { c: 0, t: 0 };
      byDuty[d.duty].t++; if (ok) byDuty[d.duty].c++;
    });
    const pct = Math.round(100 * correct / qs.length);
    $('drill-run').style.display = 'none';
    $('drill-results').style.display = '';
    const sc = $('dr-score');
    sc.textContent = pct + '%';
    sc.className = 'big-score ' + (pct >= 70 ? 'pass' : 'fail');
    const verdict = $('dr-verdict');
    if (pct >= 85) { verdict.textContent = 'Excellent — strong decision instincts.'; verdict.className = 'verdict pass'; }
    else if (pct >= 70) { verdict.textContent = 'Solid — keep polishing the weak duties.'; verdict.className = 'verdict pass'; }
    else { verdict.textContent = 'Below the pass heuristic — run them again.'; verdict.className = 'verdict fail'; }
    $('dr-duties').innerHTML = Object.entries(byDuty).sort((a, b) => (a[1].c / a[1].t) - (b[1].c / b[1].t))
      .map(([d, v]) => domainBar(d, v.c, v.t)).join('');
    $('dr-review-list').style.display = 'none';
    $('dr-review-list').innerHTML = qs.map((d, idx) => {
      const picked = answers[idx], ok = picked === d.correct;
      const your = picked == null ? '<em>unanswered</em>' : esc(d.options[picked]);
      return `<div class="review-item"><div class="rq">${ok ? '<span class="pass">✓ Correct</span>' : '<span class="fail">✗ Missed</span>'} · ${esc(d.duty)}</div>` +
        `<div class="drill-scenario" style="margin:8px 0">${esc(d.scenario)}</div>` +
        `<div class="ra">Your answer: <strong>${your}</strong><br>Correct answer: <strong class="pass">${esc(d.options[d.correct])}</strong></div>` +
        `<div class="re">${esc(d.explanation)}</div></div>`;
    }).join('');
    // history — same shape as quizzes/tests, so overview + cloud sync pick it up
    try {
      const hist = JSON.parse(localStorage.getItem('cts_test_history') || '[]');
      hist.unshift({ date: new Date().toLocaleDateString(), n: qs.length, score: pct, mode: 'drill', domains: byDuty });
      localStorage.setItem('cts_test_history', JSON.stringify(hist.slice(0, 20)));
    } catch (e) {}
    notifyProgress();
    renderHistory();
    window.scrollTo(0, 0);
  }
  $('drill-start').addEventListener('click', () => {
    qs = shuffle(DRILLS); i = 0; answers = new Array(qs.length).fill(null);
    $('drill-setup').style.display = 'none';
    $('drill-results').style.display = 'none';
    $('drill-run').style.display = '';
    show();
  });
  $('drill-next').addEventListener('click', () => {
    if (i < qs.length - 1) { i++; show(); }
    else finish();
  });
  $('drill-quit').addEventListener('click', () => {
    if (!confirm('End this drill run? Progress will be lost.')) return;
    backToSetup();
  });
  $('dr-retry').addEventListener('click', () => {
    $('drill-results').style.display = 'none';
    $('drill-setup').style.display = '';
  });
  $('dr-review').addEventListener('click', () => {
    const l = $('dr-review-list');
    l.style.display = l.style.display === 'none' ? '' : 'none';
  });
  return {};
})();

})();

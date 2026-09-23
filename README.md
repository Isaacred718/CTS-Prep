# CTS Prep — Merged Study App

A single-page, offline-first study app for the **AVIXA CTS (Certified Technology Specialist)** exam,
merged from the `CTS-Prep` and `cts-study` repos with expanded content and a practice-test generator.

## What's inside

| Content | Count |
|---|---|
| Quiz / practice-test questions (every one with a full explanation) | 172 |
| Flashcards (Leitner spaced repetition) | 131 |
| Study guides (incl. Exam Cram quick reference) | 7 |

**Domain coverage** — questions span core CTS domains: Needs Analysis, AV Design,
Sound & Physics, Video & Signal, AV Networking, Control Systems, Electrical & Site Survey,
Project Management, Customer Relations, Troubleshooting & Verification,
Commissioning & Closeout, and AVIXA Standards — plus clearly-labeled
*Advanced* material (ST 2110 suite, Dante & AES67) kept separate from the core bank.

## Features

- **Overview** — dashboard with content stats, domain coverage, recent test history, and a suggested study loop.
- **Study Guides** — concise per-domain guides plus an *Exam Cram* (formulas, numbers to memorize, memory aids, common mistakes).
- **Flashcards** — Leitner 5-box spaced repetition, flip animation, shuffle, category filters, progress tracking (saved in the browser).
- **Quiz** — domain filter, question-count options, shuffle, optional timer, live progress, immediate per-question explanations, results broken down by domain, and full answer review.
- **Practice Test generator** — build a fresh randomized test every time:
  - Lengths: **Quick (25)**, **Standard (50)**, **Full exam sim (110)**
  - Domain mix: **Balanced** (round-robin across all domains) or **pick specific domains**
  - Timer: scaled default (150 min for the full 110-question sim), adjustable, auto-grades on expiry
  - No repeated questions within a test; prev/next navigation with changeable answers
  - Score %, per-domain breakdown, 70% pass heuristic (labeled as a benchmark, not a prediction),
    full review screen with explanations, and a **Generate new test** button

## Open it locally

No build step, no server required — just open the file:

```bash
open ~/workspace/cts-merge/merged-app/index.html   # macOS
xdg-open ~/workspace/cts-merge/merged-app/index.html  # Linux
```

Or serve it locally (avoids any `file://` quirks):

```bash
cd ~/workspace/cts-merge/merged-app && python3 -m http.server 8080
# then visit http://localhost:8080
```

Progress (flashcard boxes, test history) is stored in the browser's `localStorage`.
Signing in with Google syncs it to the cloud — see below.

## Google sign-in & progress sync (optional)

The app works fully offline without an account. Tapping **Sign in with Google** in the
header syncs your progress to the cloud so it follows you across devices.

- **Backend:** Firebase project `lift-tracker-fade7` (shared with the fitlog-tracker app).
  The Google sign-in provider is enabled and `isaacred718.github.io` is already an
  authorized domain, so no extra Firebase setup is needed.
- **What syncs:** flashcard Leitner boxes + practice-test history.
- **Where:** one Firestore document per user at `cts_users/{uid}`
  (kept separate from the fitlog `users/{uid}` docs):

| Field | Contents |
|---|---|
| `displayName`, `email`, `photoURL` | from the Google account |
| `updatedAt` | ms timestamp of the last change — drives the newer-wins merge |
| `leitnerBoxes` | flashcard boxes: `{ "domain\|front": 1–5 }` |
| `testHistory` | last 20 practice tests: `{ date, n, score, mode }` |

- **Merge rule:** on sign-in, the newer side wins by `updatedAt` — if the cloud copy is
  newer it is adopted locally (Leitner boxes + history refresh in the UI); otherwise local
  progress is pushed up. Local changes are pushed ~2 seconds after you make them
  (`set(..., { merge: true })`).
- **Offline-first:** every Firestore call is guarded — if the SDK can't load, you're
  offline, or a write fails, the app keeps working on `localStorage` and the header
  shows an Offline / Sync-failed status. Signing out leaves local progress on the device.
- **Security rules:** see `../firestore-cts.rules` — a signed-in user can read/write only
  their own `cts_users/{uid}` doc. Merge that block into the existing Firestore rules
  (don't replace the fitlog rules).

### iOS home-screen note
When the app is added to the Home Screen (standalone mode), Google sign-in automatically
uses a redirect flow, since OAuth popups don't work in standalone web apps.

## Deploy on GitHub Pages

1. Create a new repo (or reuse one) and push the contents of `merged-app/` to the `main` branch —
   `index.html` must be at the repo root.
2. On GitHub: **Settings → Pages → Deploy from a branch → `main` / `/ (root)`**.
3. The app is live at `https://<username>.github.io/<repo>/` within a minute or two.

Because everything is static (HTML + CSS + JS, no backend), Pages deployment is all you need.

## Suggested study plan

1. **Survey** — skim the Study Guides, noting unfamiliar domains.
2. **Learn** — read one guide, then drill its flashcards until most cards reach Box 4+.
3. **Test** — take a Quiz filtered to that domain; re-study anything under 80%.
4. **Simulate** — run Full exam sims (110 Q, 150 min) until you consistently score 80%+.
5. **Review** — use the per-domain breakdown after every test to aim your next study session.

## Content notes & provenance

- Built from `CTS-Prep` (36 questions, 36 cards, 6 guides) and `cts-study` (87 questions, 83 cards).
- All 87 `cts-study` questions were given full 2–3 sentence teaching explanations (replacing one-liners).
- 50 new questions were added for under-weighted CTS domains (needs analysis, AV design,
  project management, customer relations, troubleshooting, commissioning/closeout).
- Near-duplicate questions were removed (e.g. a duplicated ONVIF camera-control question);
  short "stands for?" stems that test different acronyms were kept.
- One factually weak `cts-study` question was corrected: HDMI copper cables use
  **twisted-pair** construction (the original answer choice was wrong).
- Advanced ST 2110 / Dante material is tagged `Advanced:` so it can't be confused with core CTS scope.
- 15 new flashcards and an *Exam Cram* guide were added; the old "How to use this app" guide
  was rewritten for the merged app.

## File layout

```
merged-app/
├── index.html        # app shell (5 tabs) + Firebase CDN scripts + auth UI
├── styles.css        # dark glassmorphism theme
├── app.js            # all logic: tabs, guides, Leitner cards, quiz, test generator
├── auth.js           # Google sign-in + Firestore progress sync (offline-first)
├── data/
│   ├── questions.js  # 172 questions: { domain, q, options[4], correct, explanation }
│   ├── cards.js      # 131 flashcards: { domain, front, back }
│   └── guides.js     # 7 guides: { title, domain, body }
└── README.md
```

Firestore rules live at `../firestore-cts.rules` (merge into the existing
`lift-tracker-fade7` ruleset — not part of the deployed site).

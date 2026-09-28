# CTS Prep — Merged Study App

A single-page, offline-first study app for the **AVIXA CTS, CTS-D, and CTS-I** certifications,
merged from the `CTS-Prep` and `cts-study` repos with expanded content and a practice-test generator.

## What's inside

| Content | Count |
|---|---|
| Quiz / practice-test questions (every one with a full explanation) | **392** |
| — CTS questions | 185 |
| — CTS-D questions (design) | 104 |
| — CTS-I questions (installation) | 103 |
| Flashcards (Leitner spaced repetition) | 131 |
| Study guides (incl. Exam Cram quick reference) | 7 |
| Scenario drills | 24 |

**Domain coverage** — 29 domains across three certifications:

- **CTS (14 domains):** Needs Analysis, AV Design, Sound & Physics, Video & Signal,
  AV Networking, Control Systems, Electrical & Site Survey, Project Management,
  Customer Relations, Troubleshooting & Verification, Commissioning & Closeout,
  AVIXA Standards — plus clearly-labeled *Advanced* material (ST 2110 suite, Dante & AES67).
- **CTS-D (6 domains):** Needs Assessment, Allied Trade Coordination, AV System Design,
  Design Calculations, Design Documentation, Verification & Closeout.
- **CTS-I (9 domains):** Pre-Installation Activities, Rough-In & First Fix,
  Rack Build & Wiring, Mounting & Distribution, Termination & Cable Standards,
  Configuration & Networking, Testing & Calibration, Closeout & Training,
  Jobsite Operations & Safety.

The CTS-D and CTS-I banks are grounded in the official AVIXA content outlines:
CTS-D (Needs Assessment 16.8%, Coordinating with Other Professionals 23.2%,
Developing AV Designs 48.0%, Project Implementation 12.0%) and the current
six-duty CTS-I outline (Pre-Installation ~17%, Ongoing Project Responsibilities
~12%, Site Rough-In/First-Fix ~12%, Install AV Systems ~39%, Systems Closeout
~12%, Post-Project Activities ~8%). Questions favor realistic scenarios and
calculations over trivia.

## Features

- **Overview** — dashboard with content stats, domain coverage, recent test history, and a suggested study loop.
- **Exam Readiness** — per-domain readiness scores (practice tests 60% + flashcard mastery 40%) with an overall band: Exam ready (85+), Almost there (70–84), Building momentum (50–69), Early stages (below 50). Filterable by certification (CTS / CTS-D / CTS-I / All). Domains are sorted weakest-first so you always see what to study next. Recomputed live as you study and sync. CTS-D/I domains have no flashcards yet, so practice-test performance carries full weight for them until cards exist — missing data is never scored as zero.
- **Career targets** — full-time AV roles ranked by your readiness in the domains each role leans on (AV Engineer, AV Design Engineer, AV Project Manager, Field Service Engineer, Lead AV Technician, Control Systems Programmer, UC/Collaboration Engineer, Broadcast Systems Engineer, plus CTS-D track **AV Design Engineer** and CTS-I track **Lead AV Installer**), with Strong/Developing/Early match labels.
- **Study Guides** — concise per-domain guides plus an *Exam Cram* (formulas, numbers to memorize, memory aids, common mistakes).
- **Flashcards** — Leitner 5-box spaced repetition, flip animation, shuffle, category filters, progress tracking (saved in the browser).
- **Quiz** — domain filter, question-count options, shuffle, optional timer, live progress, immediate per-question explanations, results broken down by domain, and full answer review.
- **Practice Test generator** — build a fresh randomized test every time:
  - Certification filter: **CTS**, **CTS-D**, **CTS-I**, or **All certifications** — the domain list, both question mixes, and the generated test all stay inside the selected certification (old history entries without a cert tag keep working)
  - Lengths: **Quick (25)**, **Standard (50)**, **Full exam sim (110)**
  - Domain selection: tap checkboxes to include/exclude any of the 14 domains, with All/None shortcuts
  - Question mix: **Balanced** (even spread across the selected domains) or **Pure random** (random draw from the selected pool)
  - Timer: scaled default (150 min for the full 110-question sim), adjustable, auto-grades on expiry
  - No repeated questions within a test; prev/next navigation with changeable answers
  - Score %, per-domain breakdown, 70% pass heuristic (labeled as a benchmark, not a prediction),
    full review screen with explanations, and a **Generate new test** button

## How Exam Readiness is computed

Per domain (29 domains across CTS, CTS-D, CTS-I):
- **Practice tests — 60%:** pooled correct ÷ pooled answered across saved practice tests that carry a per-domain breakdown. Tests saved before this feature (no breakdown) are ignored for domain stats.
- **Flashcards — 40%:** share of the domain's cards sitting in Leitner box 4 or 5.
- If only one signal exists for a domain, it carries full weight; with neither, the domain shows "No data yet" and is excluded from the overall score. The new CTS-D and CTS-I domains have no flashcards yet, so test performance carries full weight for them — absence of data is never turned into a zero.
- The readiness card can be filtered by certification (CTS / CTS-D / CTS-I / All) to view each track separately.

Overall readiness = mean of the domains that have data. Bands: **85+ Exam ready · 70–84 Almost there · 50–69 Building momentum · below 50 Early stages.** The 70% band echoes the app's pass heuristic — the real CTS exam uses scaled scoring, so readiness is a study signal, not a prediction. Career-target rankings use the average readiness of each role's mapped domains; roles with no supporting data show "Study to unlock signal" instead of a score.

## Certification recorded in history

Every new practice-test entry in `cts_test_history` records the certification it was
generated for (`cert: "CTS" | "CTS-D" | "CTS-I" | "__all"`), shown in the recent-tests
list on the Overview tab. Entries saved before this field existed (including all
drill entries) have no `cert` and continue to display and contribute to readiness
wherever their stored domain breakdown applies.

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
| `testHistory` | last 20 practice tests: `{ date, n, score, mode, domains: { [domain]: { c, t } } }` — the per-domain breakdown powers the Exam Readiness ratings |

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
- **2026-09-27 expansion:** every question now carries a `cert` tag (`CTS` | `CTS-D` | `CTS-I`);
  the 172 legacy questions were backfilled as `CTS`. 104 new CTS-D questions (6 domains)
  and 103 new CTS-I questions (9 domains) were authored against the official AVIXA
  content outlines, and 13 questions topped up thin CTS domains
  (Commissioning & Closeout, Electrical & Site Survey, AVIXA Standards,
  Control Systems, Dante & AES67). Practice tests gained a certification selector,
  readiness gained a certification filter, history entries record their certification,
  and career targets added CTS-D track **AV Design Engineer** and CTS-I track
  **Lead AV Installer**.

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

/* topic.js — everything that makes this app about CTS lives in this file.

   The engine (index.html, styles.css, settings.js, app.js, forge.js,
   auth.js, sw.js) is topic-agnostic. To build the same app for a different
   subject: keep the engine files, replace this file and the files in data/,
   and follow TEMPLATE.md (or run `node tools/new-topic.mjs`).

   Written as a plain `var` (no window/document) so the service worker can
   importScripts() it as well. */
var TOPIC = {
  // Short slug. It namespaces local storage keys ("cts_leitner_v1", ...),
  // the offline cache and the cloud collection. Never change it once people
  // have progress saved: their progress lives under these keys.
  id: 'cts',

  name: 'CTS Prep',
  title: 'CTS Prep — AVIXA CTS, CTS-D & CTS-I study app',
  version: '6.3',

  // Default accent color: sky | violet | emerald | amber | rose | indigo.
  // People can pick their own in Settings; this is what a new visitor sees.
  accent: 'sky',
  // Letters on the generated home-screen / favicon icon (1–4 characters).
  iconText: 'CTS',

  // Tracks are the separate exams, certifications or levels. Every question
  // carries `cert` set to one of these ids. With one track, every track
  // selector hides itself.
  trackLabel: 'Certification',
  tracks: [
    { id: 'CTS', label: 'CTS' },
    { id: 'CTS-D', label: 'CTS-D' },
    { id: 'CTS-I', label: 'CTS-I' }
  ],
  defaultTrack: 'CTS',

  exam: {
    passMark: 70, // default pass heuristic; adjustable in Settings
    lengths: [
      { n: 25, label: 'Quick' },
      { n: 50, label: 'Standard', default: true },
      { n: 110, label: 'Full exam sim' }
    ],
    // Exam pace for the practice-test timer: simMinutes for simQuestions.
    simQuestions: 110,
    simMinutes: 150,
    disclaimer: 'The real CTS exam uses scaled scoring, so treat this as a study signal, not a prediction.'
  },

  // Domains that start with this prefix get the violet "beyond the exam" tag.
  advancedPrefix: 'Advanced:',

  // User-facing copy. {questions} {cards} {guides} {drills} and
  // {track:CTS-D} are replaced with live counts.
  copy: {
    blurb: 'Full explanations on every question, plus {track:CTS-D} CTS-D design questions and ' +
      '{track:CTS-I} CTS-I installation questions grounded in the official AVIXA content outlines. ' +
      'The practice-test generator filters by certification and builds a fresh randomized exam every time.',
    careersIntro: "Ranked by your readiness in the domains each role leans on. CTS certification is commonly " +
      "preferred or required for engineer and PM-tier roles — it's the credential that unlocks this tier.",
    drillsIntro: 'Short exam-style scenarios ending in a decision — not isolated facts. Weighted to the current ' +
      'CTS Job Task Analysis, with troubleshooting and AV-over-IP decisions carrying the most weight.'
  },

  // Career targets (optional). Each role maps to the domains it leans on and
  // is ranked by your readiness in them. Leave the array empty to hide it.
  careers: [
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
    { title: 'AV Design Engineer',
      domains: ['CTS-D: Needs Assessment', 'CTS-D: AV System Design', 'CTS-D: Design Calculations'],
      why: 'Develops AV designs from needs assessment through calculations and documentation. (CTS-D track)' },
    { title: 'Lead AV Installer',
      domains: ['CTS-I: Rack Build & Wiring', 'CTS-I: Configuration & Networking', 'CTS-I: Testing & Calibration'],
      why: 'Leads installation crews: racks, termination, configuration and system verification. (CTS-I track)' }
  ],

  // Endless mode level names, easiest first (five levels).
  levels: ['Foundations', 'Core Knowledge', 'Proficient', 'Advanced', 'Expert'],

  // Endless mode auto-tags question difficulty 1–5 from stem length plus
  // these signal words (regular-expression source, case-insensitive). A
  // question can also set `diff: 1..5` explicitly.
  difficulty: {
    hard: 'calculat|scenario|troubleshoot|commission|best practice|most likely|except|difference between|compare|sequence|how many|how much|how long|how far',
    easy: '^(what is|what are|what does|which (cable|connector)|what do the letters)'
  },

  // Endless mode brings repeats back rephrased; these lead-ins are rotated in.
  rephrasePrefixes: ['Quick check: ', 'On a real project, ', 'Think it through: ', 'You are on site and '],


  // Official duty/task structure per track, from the AVIXA exam content
  // outlines (PDFs in data/docs/). Weights are percent of the exam.
  // Drives the duty-weighted readiness on the home page.
  duties: {
    'CTS': {
      weights: { A: 35, B: 30, C: 15, D: 20 },
      names: { A: 'Creating AV Solutions', B: 'Implementing AV Solutions',
        C: 'Supporting AV System Operation', D: 'Servicing AV Solutions' }
    },
    'CTS-D': {
      weights: { A: 20, B: 28, C: 38, D: 14 },
      names: { A: 'Conduct a Needs Assessment', B: 'Coordinate with Other Professionals',
        C: 'Develop and Document AV Designs', D: 'Deploy AV Designs' }
    },
    'CTS-I': {
      weights: { A: 17, B: 12, C: 12, D: 39, E: 12, F: 8 },
      names: { A: 'Implement Pre-Installation Activities', B: 'Practice Ongoing Project Responsibilities',
        C: 'Conduct Site Rough-In/First-Fix', D: 'Install AV Systems',
        E: 'Perform AV Systems Closeout', F: 'Conduct Post Project Activities' }
    },
    'ANP': {
      weights: { A: 16, B: 19, C: 15, D: 27, E: 13, F: 10 },
      names: { A: 'Conduct a Needs Analysis', B: 'Design Hardware Network Topology',
        C: 'Design Software Network Topology', D: 'Perform System Deployment',
        E: 'Verify System Performance', F: 'Conduct Project Closeout' }
    }
  },

  // Document library tab: official AVIXA PDFs in data/docs/, grouped by cert.
  library: {
    title: 'Document Library',
    intro: 'Official AVIXA references, organized by certification, plus free advanced-topic documents. Saved on this device, so they open even offline.',
    groups: [
      { cert: 'CTS', docs: [
        ['cts_handbook_august_2026.pdf', 'CTS Candidate Handbook (Aug 2026)', 'Eligibility, scheduling, policies'],
        ['cts_exam_content_outline_2024.pdf', 'CTS Exam Content Outline 2024', 'Official duty/task weights'],
        ['code_of_ethics.pdf', 'CTS Code of Ethics and Conduct', 'Professional conduct requirements']
      ]},
      { cert: 'CTS-D', docs: [
        ['cts-d_handbook_august_2026.pdf', 'CTS-D Candidate Handbook (Aug 2026)', 'Eligibility, scheduling, policies'],
        ['cts-d_exam_content_outline.pdf', 'CTS-D Exam Content Outline', 'Official duty/task weights'],
        ['ctsd_math_formulas_2024.pdf', 'CTS-D Math Formulas 2024', 'The official formula sheet']
      ]},
      { cert: 'CTS-I', docs: [
        ['cts-i_handbook_august_2026.pdf', 'CTS-I Candidate Handbook (Aug 2026)', 'Eligibility, scheduling, policies'],
        ['cts-i_exam_content_outline.pdf', 'CTS-I Exam Content Outline', 'Official duty/task weights']
      ]},
      { cert: 'ANP', docs: [
        ['anp_handbook_2026.pdf', 'ANP Candidate Handbook 2026', 'Eligibility, scheduling, policies'],
        ['anp-exam-content-outline-october-2023.pdf', 'ANP Exam Content Outline (Oct 2023)', 'Official duty/task weights']
      ]},
      { cert: 'Shared', docs: [
        ['certification_fee_schedule_2025.pdf', 'Certification Fee Schedule 2025 (USD)', 'Exam, application and retest fees'],
        ['ru_options_chart_2023.pdf', 'Renewal Unit (RU) Options Chart', 'How to earn renewal units']
      ]},
      { cert: 'Advanced', docs: [
        ['aes67_practical_guide.pdf', 'AES67 Practical Guide (ALC NetworX)', 'The free RAVENNA guide: sync, multicast, QoS, sessions, configuration'],
        ['ravenna_aes67_vad_guide.pdf', 'RAVENNA/AES67 Virtual Audio Device Guide (Merging)', 'Set up the free RAVENNA/AES67 software device on Mac or PC'],
        ['ravenna_intro_resolution.pdf', 'RAVENNA Explained (Resolution Magazine)', 'Introductory feature on RAVENNA from Merging Technologies']
      ]}
    ]
  },

  // Roadmap tab: one checklist per cert, in the forced order. CTS-D and
  // CTS-I require a current general CTS; ANP stands alone.
  roadmap: {
    title: 'Certification Roadmap',
    intro: 'The path from CTS to CTS-D, CTS-I and ANP, in order. CTS-D and CTS-I require holding a current general CTS. ANP stands alone and has no prerequisite.',
    footer: '<p class="small"><strong>Retest fee:</strong> $150 if you do not pass and need to retake any of these exams.</p>' +
      '<p class="small"><a href="https://www.pearsonvue.com/us/en/avixa.html" target="_blank" rel="noopener">Find a test center / schedule at Pearson VUE</a></p>',
    tracks: [
      { id: 'CTS', status: 'Exam booked: Friday, October 9, 2026, 3:45 PM ET, Pearson Professional Centers, 2 Teleport Dr, Suite 100, Staten Island, NY 10311.',
        note: null,
        items: ['Handbook read', 'Application approved', 'Fee paid ($490 non-member)', 'Pearson VUE scheduled', 'Exam taken', 'Pass'] },
      { id: 'CTS-D', status: null,
        note: 'Requires holding a current general CTS. 110 questions (10 pilot), 150 minutes.',
        items: ['Hold current CTS', 'Handbook read', 'Application submitted', 'Fee paid ($590)', 'Scheduled', 'Exam taken', 'Pass'] },
      { id: 'CTS-I', status: null,
        note: 'Requires holding a current general CTS. 110 questions (10 pilot), 150 minutes.',
        items: ['Hold current CTS', 'Handbook read', 'Application submitted', 'Fee paid ($590)', 'Scheduled', 'Exam taken', 'Pass'] },
      { id: 'ANP', status: null,
        note: 'No CTS required. 115 questions (15 pilot), 150 minutes.',
        items: ['Handbook read', 'Application submitted', 'Fee paid ($350)', 'Scheduled', 'Exam taken', 'Pass'] }
    ]
  },

  // Google sign-in + cloud progress sync (Firebase). Set to null to run
  // purely on this device and hide the sign-in button.
  sync: {
    collection: 'cts_users', // one Firestore doc per user: cts_users/{uid}
    firebase: {
      apiKey: 'AIzaSyAw2BlvU4QhIC-TaH-hP-ELHOpjhoEe0UE',
      authDomain: 'lift-tracker-fade7.firebaseapp.com',
      projectId: 'lift-tracker-fade7',
      storageBucket: 'lift-tracker-fade7.firebasestorage.app',
      messagingSenderId: '1045140412331',
      appId: '1:1045140412331:web:9668f12422e5d6a48d64ee'
    }
  }
};

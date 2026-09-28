// FORGE — procedural question generator for CTS Prep.
// Separate internal logic from the static bank: every call to FORGE.draw()
// builds brand-new questions (randomized numbers, rotated stems, sampled
// distractors), so depth is effectively unlimited. Pure logic, no network.
// Shape of each generated question matches the bank:
//   { domain, cert, q, options[4], correct, explanation, _diff, _qi, _forged }
const FORGE = (function () {
  const R = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const pick = arr => arr[(Math.random() * arr.length) | 0];
  const lcfirst = s => s.charAt(0).toLowerCase() + s.slice(1);
  function shuf(a) {
    a = a.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = (Math.random() * (i + 1)) | 0;
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  // pretty number: trim to `dec` decimals, drop trailing zeros
  function fmt(n, dec) {
    const s = (+n).toFixed(dec === undefined ? 2 : dec);
    return s.replace(/\.?0+$/, '');
  }
  // Build a 4-option array from string values; returns { options, correct }
  function mkOptions(correctStr, distractorStrs) {
    const seen = new Set([correctStr]);
    const ds = [];
    for (const d of shuf(distractorStrs)) {
      if (!seen.has(d)) { seen.add(d); ds.push(d); }
      if (ds.length === 3) break;
    }
    while (ds.length < 3) ds.push(correctStr + ' '); // unreachable in practice; guards shape
    const options = shuf([correctStr, ...ds]);
    return { options, correct: options.indexOf(correctStr) };
  }

  const generators = [];
  function calc(id, domain, cert, diff, make) {
    generators.push({ id, domain, cert, diff, kind: 'calc', make });
  }

  /* ================= calculation generators ================= */

  // Inverse square law: SPL at a new distance
  calc('inv-square', 'CTS: Sound & Physics', 'CTS', 3, () => {
    const spl = R(80, 95), d1 = pick([1, 2, 3, 4]), mult = pick([2, 4]);
    const d2 = d1 * mult, drop = mult === 2 ? 6 : 12, ans = spl - drop;
    const o = mkOptions(`${ans} dB SPL`, [`${spl - 3} dB SPL`, `${spl - 10} dB SPL`, `${spl} dB SPL`, `${spl - 12} dB SPL`]);
    return {
      q: `A loudspeaker produces ${spl} dB SPL at ${d1} meter${d1 > 1 ? 's' : ''}. What is the SPL at ${d2} meters in a free field?`,
      ...o,
      explanation: `Inverse square law: each doubling of distance in a free field drops SPL by 6 dB. ${d1} m to ${d2} m is ${mult === 2 ? 'one doubling' : 'two doublings'}, so ${spl} − ${drop} = ${ans} dB SPL.`
    };
  });

  // Power ratio -> dB change (10 log)
  calc('power-db', 'CTS: Sound & Physics', 'CTS', 3, () => {
    const cases = [
      { r: 'double', db: '+3 dB', wrong: ['+6 dB', '+10 dB', '+1.5 dB'] },
      { r: 'quadruple', db: '+6 dB', wrong: ['+3 dB', '+12 dB', '+10 dB'] },
      { r: '10x', db: '+10 dB', wrong: ['+20 dB', '+3 dB', '+6 dB'] },
      { r: 'halve', db: '−3 dB', wrong: ['−6 dB', '−10 dB', '+3 dB'] }
    ];
    const c = pick(cases);
    const o = mkOptions(c.db, [...c.wrong, '0 dB']);
    const verb = { double: 'double', quadruple: 'quadruple', '10x': 'increase tenfold', halve: 'halve' }[c.r];
    return {
      q: `You ${verb} the electrical power to a loudspeaker. What is the approximate change in SPL?`,
      ...o,
      explanation: `Power ratio in dB uses 10·log10. Doubling power is 10·log10(2) ≈ +3 dB, four times is +6 dB, ten times is +10 dB, halving is −3 dB.`
    };
  });

  // Wavelength from frequency
  calc('wavelength', 'CTS: Sound & Physics', 'CTS', 3, () => {
    const f = pick([125, 250, 500, 1000, 2000, 4000, 8000]);
    const lam = 343 / f;
    const fLabel = f >= 1000 ? fmt(f / 1000, 1) + ' kHz' : f + ' Hz';
    const article = /^[aeiou]/i.test(fLabel) ? 'an' : 'a';
    const o = mkOptions(`${fmt(lam)} m`, [`${fmt(lam * 2)} m`, `${fmt(lam / 2)} m`, `${fmt(lam * 10)} m`, `${fmt(f / 343)} m`]);
    return {
      q: `What is the approximate wavelength of ${article} ${fLabel} tone in air at room temperature?`,
      ...o,
      explanation: `Wavelength = speed of sound ÷ frequency. 343 m/s ÷ ${f} Hz ≈ ${fmt(lam)} m.`
    };
  });

  // Ohm's law: V = I × R
  calc('ohm-v', 'CTS: Electrical & Site Survey', 'CTS', 2, () => {
    const i = R(2, 12), r = pick([4, 8, 16, 25, 50]), v = i * r;
    const o = mkOptions(`${v} V`, [`${fmt(i + r)} V`, `${fmt(v / 2)} V`, `${fmt(v * 2)} V`, `${fmt(i / r, 2)} V`]);
    return {
      q: `A circuit draws ${i} A through a ${r} Ω load. What is the voltage across the load?`,
      ...o,
      explanation: `Ohm's law: V = I × R = ${i} A × ${r} Ω = ${v} V.`
    };
  });

  // Power: P = V² / R
  calc('ohm-p', 'CTS: Electrical & Site Survey', 'CTS', 3, () => {
    const v = pick([12, 24, 48, 120]), r = pick([4, 8, 12, 24]);
    const p = (v * v) / r;
    const o = mkOptions(`${fmt(p)} W`, [`${fmt(v * r)} W`, `${fmt(v / r, 2)} W`, `${fmt(p / 2)} W`, `${fmt(p * 4)} W`]);
    return {
      q: `How much power is dissipated by a ${r} Ω load with ${v} V across it?`,
      ...o,
      explanation: `P = V² ÷ R = ${v}² ÷ ${r} = ${fmt(v * v)} ÷ ${r} = ${fmt(p)} W.`
    };
  });

  // Series resistance
  calc('series-r', 'CTS: Electrical & Site Survey', 'CTS', 2, () => {
    const n = pick([2, 2, 3]);
    const rs = []; for (let k = 0; k < n; k++) rs.push(pick([10, 22, 33, 47, 68, 100]));
    const total = rs.reduce((a, b) => a + b, 0);
    const o = mkOptions(`${total} Ω`, [`${fmt(total / n, 1)} Ω`, `${fmt(total * 2)} Ω`, `${fmt(total - rs[0])} Ω`, `${rs[0]} Ω`]);
    return {
      q: `What is the total resistance of ${rs.join(' Ω, ')} Ω resistors wired in series?`,
      ...o,
      explanation: `Resistors in series add directly: ${rs.join(' + ')} = ${total} Ω.`
    };
  });

  // Parallel resistance (two resistors, clean values)
  calc('parallel-r', 'CTS: Electrical & Site Survey', 'CTS', 4, () => {
    const pair = pick([[8, 8], [12, 12], [16, 16], [20, 20], [8, 24], [12, 24], [6, 12]]);
    const [r1, r2] = pair;
    const total = (r1 * r2) / (r1 + r2);
    const o = mkOptions(`${fmt(total, 1)} Ω`, [`${r1 + r2} Ω`, `${fmt((r1 + r2) / 2, 1)} Ω`, `${fmt(Math.min(r1, r2) / 2, 1)} Ω`, `${Math.min(r1, r2)} Ω`]);
    return {
      q: `What is the total resistance of a ${r1} Ω and a ${r2} Ω resistor wired in parallel?`,
      ...o,
      explanation: `Parallel: 1/R = 1/${r1} + 1/${r2}, so R = (${r1} × ${r2}) ÷ (${r1} + ${r2}) = ${fmt(total, 1)} Ω. Note it is always less than the smallest branch.`
    };
  });

  // Voltage ratio -> dB (20 log) — classic discriminator
  calc('volt-db', 'CTS: Sound & Physics', 'CTS', 4, () => {
    const cases = [
      { r: 'doubles', db: '+6 dB', wrong: ['+3 dB', '+10 dB', '+12 dB'] },
      { r: 'quadruples', db: '+12 dB', wrong: ['+6 dB', '+24 dB', '+3 dB'] },
      { r: 'increases tenfold', db: '+20 dB', wrong: ['+10 dB', '+6 dB', '+40 dB'] }
    ];
    const c = pick(cases);
    const o = mkOptions(c.db, [...c.wrong, '0 dB']);
    return {
      q: `A line-level signal voltage ${c.r}. What is the change in dB?`,
      ...o,
      explanation: `Voltage ratios use 20·log10 (not 10·log10 like power). Doubling voltage is 20·log10(2) ≈ +6 dB — twice the dB value of doubling power.`
    };
  });

  // Projector throw distance
  calc('throw-dist', 'CTS: Video & Signal', 'CTS', 2, () => {
    const ratio = pick([12, 14, 16, 18, 20, 25]) / 10;
    const w = R(2, 5), dist = ratio * w;
    const o = mkOptions(`${fmt(dist, 1)} m`, [`${fmt(w / ratio, 1)} m`, `${fmt(w + ratio, 1)} m`, `${fmt(dist * 2, 1)} m`, `${fmt(dist / 2, 1)} m`]);
    return {
      q: `A projector has a throw ratio of ${fmt(ratio, 1)}:1 and the screen is ${w} m wide. How far from the screen should the projector sit?`,
      ...o,
      explanation: `Throw distance = throw ratio × image width = ${fmt(ratio, 1)} × ${w} m = ${fmt(dist, 1)} m.`
    };
  });

  // Subnet host count
  calc('subnet-hosts', 'CTS: AV Networking', 'CTS', 3, () => {
    const n = pick([24, 25, 26, 27, 28, 30]);
    const hosts = Math.pow(2, 32 - n) - 2;
    const full = Math.pow(2, 32 - n);
    const o = mkOptions(`${hosts}`, [`${full}`, `${full - 1}`, `${Math.pow(2, 31 - n)}`, `${hosts * 2}`]);
    return {
      q: `How many usable host addresses does a /${n} subnet provide?`,
      ...o,
      explanation: `A /${n} leaves ${32 - n} host bits: 2^${32 - n} = ${full} addresses, minus the network and broadcast addresses = ${hosts} usable hosts.`
    };
  });

  /* ================= concept fact tables =================
     Each fact: { t: term, d: definition }. The generator asks about one
     fact and samples distractors from other definitions in the same
     domain, so wrong answers are always plausible and on-topic. */

  const CONCEPT_TABLES = [
    {
      domain: 'CTS: Sound & Physics', cert: 'CTS', diff: 2,
      facts: [
        { t: 'The inverse square law', d: 'In a free field, doubling the distance from a point source drops SPL by 6 dB.' },
        { t: 'Doubling amplifier power', d: 'Doubling the electrical power to a loudspeaker increases SPL by about 3 dB.' },
        { t: 'Perceived doubling of loudness', d: 'Roughly a 10 dB increase is heard as twice as loud, and takes ten times the power.' },
        { t: 'Wavelength', d: 'The physical length of one cycle of a sound wave: speed of sound divided by frequency.' },
        { t: 'Comb filtering', d: 'The hollow, phasey coloration caused by mixing a signal with a slightly delayed copy of itself.' },
        { t: 'The Haas (precedence) effect', d: 'When two identical sounds arrive within about 5–35 ms, the brain fuses them and localizes to the first arrival.' },
        { t: 'Auditory masking', d: 'A louder sound rendering a quieter, nearby-frequency sound inaudible.' },
        { t: 'RT60', d: 'The time it takes reverberant sound to decay by 60 dB after the source stops.' },
        { t: 'Phantom power', d: '48 V DC sent down a balanced mic cable to power condenser microphones.' },
        { t: '0 dB SPL', d: 'The reference for sound pressure level: 20 micropascals, about the threshold of human hearing.' }
      ]
    },
    {
      domain: 'CTS: Video & Signal', cert: 'CTS', diff: 2,
      facts: [
        { t: 'EDID', d: 'The data block a display sends its source describing supported resolutions, refresh rates, and audio formats.' },
        { t: 'HDCP', d: 'Content-protection encryption on HDMI/DisplayPort links; a failed handshake shows a black screen, not a degraded image.' },
        { t: '4:2:0 chroma subsampling', d: 'Storing color at quarter resolution while keeping full luminance resolution, roughly halving bandwidth.' },
        { t: 'Genlock', d: 'Synchronizing video devices to a common reference signal so switching between them is clean.' },
        { t: 'Scaling', d: 'Converting an image from one resolution to another; scaling up cannot create detail that was never captured.' },
        { t: 'Refresh rate', d: 'How many times per second a display redraws its image, measured in hertz.' },
        { t: 'The practical limit of passive HDMI copper', d: 'About 5 meters at 4K; longer runs need active, fiber, or HDBaseT extension.' },
        { t: 'HDBaseT', d: 'A standard carrying uncompressed video, audio, Ethernet, control, and power up to 100 m over one Cat6 cable.' },
        { t: 'Contrast ratio', d: 'The luminance difference between the brightest white and the darkest black a display can produce.' },
        { t: 'Video latency', d: 'The delay from camera capture to display; lip-sync problems typically appear above about 40 ms.' }
      ]
    },
    {
      domain: 'CTS: AV Networking', cert: 'CTS', diff: 2,
      facts: [
        { t: 'A subnet mask', d: 'The value that defines which part of an IP address is the network and which part is the host.' },
        { t: 'The default gateway', d: 'The router address a host uses to reach destinations on other networks.' },
        { t: 'DHCP', d: 'The service that automatically assigns IP addresses, subnet masks, gateways, and DNS; a failed request can leave a 169.254.x.x link-local address.' },
        { t: 'A VLAN', d: 'A logical segmentation of one physical switch into multiple isolated broadcast domains.' },
        { t: 'Multicast', d: 'One stream delivered to many subscribed receivers via IGMP, unlike one-to-one unicast or send-to-everyone broadcast.' },
        { t: 'IGMP snooping', d: 'The switch feature that forwards multicast only to ports with subscribed receivers, preventing network floods.' },
        { t: 'PoE standards', d: 'Power over Ethernet: 802.3af delivers up to about 15 W, 802.3at (PoE+) about 30 W, and 802.3bt up to 60 or 90 W.' },
        { t: 'Dante', d: 'A protocol transporting uncompressed, low-latency digital audio over standard IP networks with PTP clocking.' },
        { t: 'QoS / DSCP markings', d: 'Priority tags that let time-sensitive AV packets jump the queue ahead of bulk data traffic.' },
        { t: 'Dante latency settings', d: 'A per-device buffer (commonly 1 ms) that must be set at or above what the slowest network path requires.' }
      ]
    },
    {
      domain: 'CTS: Electrical & Site Survey', cert: 'CTS', diff: 2,
      facts: [
        { t: "Ohm's law", d: 'Voltage equals current times resistance: V = I × R.' },
        { t: 'Resistors in series', d: 'Their resistances add directly, and the same current flows through each one.' },
        { t: 'Resistors in parallel', d: 'The total is always less than the smallest branch: 1/R = 1/R1 + 1/R2.' },
        { t: 'A ground loop', d: 'Hum or noise caused by two grounded devices sitting at different ground potentials, so current flows on the shield.' },
        { t: 'American Wire Gauge (AWG)', d: 'A sizing standard where a lower number means a thicker conductor that carries more current.' },
        { t: 'The 80% breaker rule', d: 'Continuous loads should not exceed 80% of a breaker rating — 16 A on a 20 A breaker.' },
        { t: 'An isolated-ground receptacle', d: 'The orange outlet whose ground runs dedicated back to the panel, reducing noise coupling.' },
        { t: 'A UPS', d: 'Battery backup that keeps gear alive for graceful shutdown; it does not fix grounding or replace surge protection.' }
      ]
    },
    {
      domain: 'CTS: Control Systems', cert: 'CTS', diff: 2,
      facts: [
        { t: 'A control processor', d: 'The central brain of an AV system: it sends commands to devices and reads back their status.' },
        { t: 'RS-232 control', d: 'A short-distance serial protocol (typically under 15 m) using transmit, receive, and ground.' },
        { t: 'IP control', d: 'Device commands sent over the network, allowing long distances and two-way feedback.' },
        { t: 'A relay (dry contact closure)', d: 'A simple on/off switch output used for screens, lifts, shades, and power sequencing.' },
        { t: 'An API', d: 'The documented command set a device exposes so control systems and software can operate it.' },
        { t: 'Two-way feedback', d: 'Status reported back from a device so the control system shows true state instead of assuming it.' }
      ]
    },
    {
      domain: 'CTS: Troubleshooting & Verification', cert: 'CTS', diff: 3,
      facts: [
        { t: 'The divide-and-conquer method', d: 'Isolating a fault by testing the midpoint of a signal chain first, then halving the suspect half.' },
        { t: 'The known-good substitution', d: 'Swapping in a verified cable, source, or display to rule out a suspect component fast.' },
        { t: 'Tracing signal flow', d: 'Walking the chain from source to display to find exactly where the signal breaks.' },
        { t: 'Mismatched firmware', d: 'A common cause of discovery or audio failures between networked AV devices that otherwise look healthy.' },
        { t: 'Cable certification vs. verification', d: 'Certification proves a run meets Cat6 performance; a basic tester only checks for opens and shorts.' },
        { t: 'As-built documentation', d: 'The record of what was actually installed — the drawing you troubleshoot against, not the proposal.' }
      ]
    }
  ];

  CONCEPT_TABLES.forEach((table, ti) => {
    generators.push({
      id: 'concept-' + ti, domain: table.domain, cert: table.cert, diff: table.diff, kind: 'concept',
      make() {
        const fact = pick(table.facts);
        const distract = shuf(table.facts.filter(f => f !== fact)).slice(0, 3).map(f => f.d);
        const o = mkOptions(fact.d, distract);
        const stem = pick([
          `Which of the following best describes ${lcfirst(fact.t)}?`,
          `In AV practice, ${lcfirst(fact.t)} refers to which of the following?`
        ]);
        return {
          q: stem[0].toUpperCase() + stem.slice(1),
          ...o,
          explanation: `${fact.t[0].toUpperCase() + fact.t.slice(1)}: ${lcfirst(fact.d)}`
        };
      }
    });
  });

  /* ================= public API ================= */
  let seq = 0;
  function draw(n, opts) {
    opts = opts || {};
    const cert = opts.cert || 'CTS';
    const target = opts.diff || 2;
    const inCert = generators.filter(g => g.cert === cert || cert === '__all');
    if (!inCert.length) return [];
    let elig = inCert.filter(g => Math.abs(g.diff - target) <= 1);
    if (!elig.length) elig = inCert;
    const out = [];
    for (let i = 0; i < n; i++) {
      const g = pick(elig);
      const made = g.make();
      made.domain = g.domain;
      made.cert = g.cert;
      made._diff = g.diff;
      made._qi = 'f' + (seq++);
      made._forged = true;
      out.push(made);
    }
    return out;
  }

  return {
    draw,
    generators,
    // introspection for tests / debugging
    info: () => generators.map(g => ({ id: g.id, domain: g.domain, diff: g.diff, kind: g.kind }))
  };
})();

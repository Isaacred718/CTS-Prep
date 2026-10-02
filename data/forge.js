// CTS question forge content — registered into the FORGE engine (forge.js).
// Calculation generators build fresh numbers every draw; concept and trick
// tables are sampled with rotated stems and distractors. See TEMPLATE.md for
// the format of each piece.
(function (F) {
  const { R, pick, fmt, mkOptions } = F.helpers;

  /* ================= calculation generators ================= */

  // Inverse square law: SPL at a new distance
  F.calc('inv-square', 'CTS: Sound & Physics', 'CTS', 3, () => {
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
  F.calc('power-db', 'CTS: Sound & Physics', 'CTS', 3, () => {
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
  F.calc('wavelength', 'CTS: Sound & Physics', 'CTS', 3, () => {
    const f = pick([125, 250, 500, 1000, 2000, 4000, 8000]);
    const lam = 343 / f;
    const fLabel = f >= 1000 ? fmt(f / 1000, 1) + ' kHz' : f + ' Hz';
    const article = /^(8|11|18)/.test(fLabel) ? 'an' : 'a';
    const o = mkOptions(`${fmt(lam)} m`, [`${fmt(lam * 2)} m`, `${fmt(lam / 2)} m`, `${fmt(lam * 10)} m`, `${fmt(f / 343)} m`]);
    return {
      q: `What is the approximate wavelength of ${article} ${fLabel} tone in air at room temperature?`,
      ...o,
      explanation: `Wavelength = speed of sound ÷ frequency. 343 m/s ÷ ${f} Hz ≈ ${fmt(lam)} m.`
    };
  });

  // Ohm's law: V = I × R
  F.calc('ohm-v', 'CTS: Electrical & Site Survey', 'CTS', 2, () => {
    const i = R(2, 12), r = pick([4, 8, 16, 25, 50]), v = i * r;
    const o = mkOptions(`${v} V`, [`${fmt(i + r)} V`, `${fmt(v / 2)} V`, `${fmt(v * 2)} V`, `${fmt(i / r, 2)} V`]);
    return {
      q: `A circuit draws ${i} A through a ${r} Ω load. What is the voltage across the load?`,
      ...o,
      explanation: `Ohm's law: V = I × R = ${i} A × ${r} Ω = ${v} V.`
    };
  });

  // Power: P = V² / R
  F.calc('ohm-p', 'CTS: Electrical & Site Survey', 'CTS', 3, () => {
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
  F.calc('series-r', 'CTS: Electrical & Site Survey', 'CTS', 2, () => {
    const n = pick([2, 2, 3]);
    const vals = [10, 22, 33, 47, 68, 100];
    const rs = []; for (let k = 0; k < n; k++) rs.push(pick(vals));
    // Avoid all-identical values: they collapse distractors into duplicates
    if (rs.every(v => v === rs[0])) rs[rs.length - 1] = pick(vals.filter(v => v !== rs[0]));
    const total = rs.reduce((a, b) => a + b, 0);
    const o = mkOptions(`${total} Ω`, [`${fmt(total / n, 1)} Ω`, `${fmt(total * 2)} Ω`, `${fmt(total - rs[0])} Ω`, `${rs[0]} Ω`]);
    return {
      q: `What is the total resistance of ${rs.join(' Ω, ')} Ω resistors wired in series?`,
      ...o,
      explanation: `Resistors in series add directly: ${rs.join(' + ')} = ${total} Ω.`
    };
  });

  // Parallel resistance (two resistors, clean values)
  F.calc('parallel-r', 'CTS: Electrical & Site Survey', 'CTS', 4, () => {
    const pair = pick([[8, 8], [12, 12], [16, 16], [20, 20], [8, 24], [12, 24], [6, 12]]);
    const [r1, r2] = pair, lo = Math.min(r1, r2);
    const total = (r1 * r2) / (r1 + r2);
    // Six candidate mistakes; equal pairs collapse a few of them, which still
    // leaves at least three distinct distractors.
    const o = mkOptions(`${fmt(total, 1)} Ω`, [
      `${r1 + r2} Ω`, `${fmt((r1 + r2) / 2, 1)} Ω`, `${fmt(lo / 2, 1)} Ω`,
      `${lo} Ω`, `${fmt(total * 2, 1)} Ω`, `${fmt(total / 2, 1)} Ω`
    ]);
    return {
      q: `What is the total resistance of a ${r1} Ω and a ${r2} Ω resistor wired in parallel?`,
      ...o,
      explanation: `Parallel: 1/R = 1/${r1} + 1/${r2}, so R = (${r1} × ${r2}) ÷ (${r1} + ${r2}) = ${fmt(total, 1)} Ω. Note it is always less than the smallest branch.`
    };
  });

  // Voltage ratio -> dB (20 log) — classic discriminator
  F.calc('volt-db', 'CTS: Sound & Physics', 'CTS', 4, () => {
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
  F.calc('throw-dist', 'CTS: Video & Signal', 'CTS', 2, () => {
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
  F.calc('subnet-hosts', 'CTS: AV Networking', 'CTS', 3, () => {
    const n = pick([24, 25, 26, 27, 28, 30]);
    const hosts = Math.pow(2, 32 - n) - 2;
    const full = Math.pow(2, 32 - n);
    // Off-by-one traps; all guaranteed unique and != hosts
    const o = mkOptions(`${hosts}`, [`${full}`, `${hosts + 1}`, `${Math.max(1, hosts - 1)}`, `${full + 1}`]);
    return {
      q: `How many usable host addresses does a /${n} subnet provide?`,
      ...o,
      explanation: `A /${n} leaves ${32 - n} host bits: 2^${32 - n} = ${full} addresses, minus the network and broadcast addresses = ${hosts} usable hosts.`
    };
  });

  /* ================= concept fact tables =================
     Each fact: { t: term (as it reads mid-sentence), d: definition }. */
  F.concepts([
    {
      domain: 'CTS: Sound & Physics', cert: 'CTS', diff: 2,
      facts: [
        { t: 'the inverse square law', d: 'In a free field, doubling the distance from a point source drops SPL by 6 dB.' },
        { t: 'doubling amplifier power', d: 'Doubling the electrical power to a loudspeaker increases SPL by about 3 dB.' },
        { t: 'a perceived doubling of loudness', d: 'Roughly a 10 dB increase is heard as twice as loud, and takes ten times the power.' },
        { t: 'wavelength', d: 'The physical length of one cycle of a sound wave: speed of sound divided by frequency.' },
        { t: 'comb filtering', d: 'The hollow, phasey coloration caused by mixing a signal with a slightly delayed copy of itself.' },
        { t: 'the Haas (precedence) effect', d: 'When two identical sounds arrive within about 5–35 ms, the brain fuses them and localizes to the first arrival.' },
        { t: 'auditory masking', d: 'A louder sound rendering a quieter, nearby-frequency sound inaudible.' },
        { t: 'RT60', d: 'The time it takes reverberant sound to decay by 60 dB after the source stops.' },
        { t: 'phantom power', d: '48 V DC sent down a balanced mic cable to power condenser microphones.' },
        { t: '0 dB SPL', d: 'The reference for sound pressure level: 20 micropascals, about the threshold of human hearing.' }
      ]
    },
    {
      domain: 'CTS: Video & Signal', cert: 'CTS', diff: 2,
      facts: [
        { t: 'EDID', d: 'The data block a display sends its source describing supported resolutions, refresh rates, and audio formats.' },
        { t: 'HDCP', d: 'Content-protection encryption on HDMI/DisplayPort links; a failed handshake shows a black screen, not a degraded image.' },
        { t: '4:2:0 chroma subsampling', d: 'Storing color at quarter resolution while keeping full luminance resolution, roughly halving bandwidth.' },
        { t: 'genlock', d: 'Synchronizing video devices to a common reference signal so switching between them is clean.' },
        { t: 'scaling', d: 'Converting an image from one resolution to another; scaling up cannot create detail that was never captured.' },
        { t: 'refresh rate', d: 'How many times per second a display redraws its image, measured in hertz.' },
        { t: 'the practical limit of passive HDMI copper', d: 'About 5–7.5 meters at 4K60 (about 15 m at 1080p); longer runs need active, fiber, or HDBaseT extension.' },
        { t: 'HDBaseT', d: 'A standard carrying uncompressed video, audio, Ethernet, control, and power up to 100 m over one Cat6 cable.' },
        { t: 'contrast ratio', d: 'The luminance difference between the brightest white and the darkest black a display can produce.' },
        { t: 'video latency', d: 'The delay from camera capture to display; lip-sync problems typically appear above about 40 ms.' }
      ]
    },
    {
      domain: 'CTS: AV Networking', cert: 'CTS', diff: 2,
      facts: [
        { t: 'a subnet mask', d: 'The value that defines which part of an IP address is the network and which part is the host.' },
        { t: 'the default gateway', d: 'The router address a host uses to reach destinations on other networks.' },
        { t: 'DHCP', d: 'The service that automatically assigns IP addresses, subnet masks, gateways, and DNS; a failed request can leave a 169.254.x.x link-local address.' },
        { t: 'a VLAN', d: 'A logical segmentation of one physical switch into multiple isolated broadcast domains.' },
        { t: 'multicast', d: 'One stream delivered to many subscribed receivers via IGMP, unlike one-to-one unicast or send-to-everyone broadcast.' },
        { t: 'IGMP snooping', d: 'The switch feature that forwards multicast only to ports with subscribed receivers, preventing network floods.' },
        { t: 'the PoE standards', d: 'Power over Ethernet: 802.3af delivers up to about 15 W, 802.3at (PoE+) about 30 W, and 802.3bt up to 60 or 90 W.' },
        { t: 'Dante', d: 'A protocol transporting uncompressed, low-latency digital audio over standard IP networks with PTP clocking.' },
        { t: 'QoS / DSCP markings', d: 'Priority tags that let time-sensitive AV packets jump the queue ahead of bulk data traffic.' },
        { t: 'the Dante latency setting', d: 'A per-device buffer (commonly 1 ms) that must be set at or above what the slowest network path requires.' }
      ]
    },
    {
      domain: 'CTS: Electrical & Site Survey', cert: 'CTS', diff: 2,
      facts: [
        { t: "Ohm's law", d: 'Voltage equals current times resistance: V = I × R.' },
        { t: 'resistors in series', d: 'Their resistances add directly, and the same current flows through each one.' },
        { t: 'resistors in parallel', d: 'The total is always less than the smallest branch: 1/R = 1/R1 + 1/R2.' },
        { t: 'a ground loop', d: 'Hum or noise caused by two grounded devices sitting at different ground potentials, so current flows on the shield.' },
        { t: 'American Wire Gauge (AWG)', d: 'A sizing standard where a lower number means a thicker conductor that carries more current.' },
        { t: 'the 80% breaker rule', d: 'Continuous loads should not exceed 80% of a breaker rating — 16 A on a 20 A breaker.' },
        { t: 'an isolated-ground receptacle', d: 'The orange outlet whose ground runs dedicated back to the panel, reducing noise coupling.' },
        { t: 'a UPS', d: 'Battery backup that keeps gear alive for graceful shutdown; it does not fix grounding or replace surge protection.' }
      ]
    },
    {
      domain: 'CTS: Control Systems', cert: 'CTS', diff: 2,
      facts: [
        { t: 'a control processor', d: 'The central brain of an AV system: it sends commands to devices and reads back their status.' },
        { t: 'RS-232 control', d: 'A short-distance serial protocol (typically under 15 m) using transmit, receive, and ground.' },
        { t: 'IP control', d: 'Device commands sent over the network, allowing long distances and two-way feedback.' },
        { t: 'a relay (dry contact closure)', d: 'A simple on/off switch output used for screens, lifts, shades, and power sequencing.' },
        { t: 'an API', d: 'The documented command set a device exposes so control systems and software can operate it.' },
        { t: 'two-way feedback', d: 'Status reported back from a device so the control system shows true state instead of assuming it.' }
      ]
    },
    {
      domain: 'CTS: Troubleshooting & Verification', cert: 'CTS', diff: 3,
      facts: [
        { t: 'the divide-and-conquer method', d: 'Isolating a fault by testing the midpoint of a signal chain first, then halving the suspect half.' },
        { t: 'known-good substitution', d: 'Swapping in a verified cable, source, or display to rule out a suspect component fast.' },
        { t: 'tracing signal flow', d: 'Walking the chain from source to display to find exactly where the signal breaks.' },
        { t: 'mismatched firmware', d: 'A common cause of discovery or audio failures between networked AV devices that otherwise look healthy.' },
        { t: 'cable certification vs. verification', d: 'Certification proves a run meets Cat6 performance; a basic tester only checks for opens and shorts.' },
        { t: 'as-built documentation', d: 'The record of what was actually installed — the drawing you troubleshoot against, not the proposal.' }
      ]
    }
  ], {
    stems: ['Which of the following best describes {term}?', 'In AV practice, {term} refers to which of the following?']
  });

  /* ================= trick question tables =================
     EXCEPT / NOT / TRUE / FALSE stems with always/never absolute traps.
     Each item has trueStmts (unambiguously true) and falseStmts
     (unambiguously false), written to similar lengths. */
  F.tricks([
    {
      domain: 'CTS: Sound & Physics', cert: 'CTS', diff: 3,
      items: [
        {
          topic: 'the inverse square law',
          trueStmts: [
            'In a free field, doubling the distance from a point source drops SPL by 6 dB.',
            'Moving from 1 meter to 4 meters from a source reduces SPL by about 12 dB.',
            'The law assumes a free field with no reflections adding energy back in.'
          ],
          falseStmts: [
            'Doubling the distance from a source always drops SPL by exactly 3 dB.',
            'The inverse square law applies unchanged inside small reverberant rooms.',
            'Halving the distance to a source never changes the measured SPL.'
          ]
        },
        {
          topic: 'decibel changes with power',
          trueStmts: [
            'Doubling amplifier power yields roughly a 3 dB increase in SPL.',
            'A 10 dB gain requires about ten times the amplifier power.',
            'Halving the power to a loudspeaker drops output by about 3 dB.'
          ],
          falseStmts: [
            'Doubling amplifier power always doubles the perceived loudness.',
            'A 3 dB increase requires ten times the power, never less.',
            'Tripling the power invariably adds exactly 10 dB of output.'
          ]
        },
        {
          topic: 'phantom power',
          trueStmts: [
            'Phantom power is 48 V DC carried on a balanced microphone cable.',
            'It is intended for condenser microphones and active DI boxes.',
            'Dynamic microphones generally ignore phantom power when wired correctly.'
          ],
          falseStmts: [
            'Phantom power is always 12 V AC on an unbalanced instrument cable.',
            'Every microphone ever made requires phantom power to produce signal.',
            'Phantom power is an RF signal sent to power wireless transmitters.'
          ]
        },
        {
          topic: 'comb filtering',
          trueStmts: [
            'It is the hollow coloration from mixing a signal with a delayed copy of itself.',
            'It commonly results from two microphones picking up one source at different distances.',
            'The 3:1 microphone placement rule helps avoid it.'
          ],
          falseStmts: [
            'Comb filtering only ever occurs in digital systems, never with analog mics.',
            'It is always desirable because it doubles the perceived loudness.',
            'Comb filtering is caused by mismatched speaker impedance alone.'
          ]
        },
        {
          topic: 'RT60',
          trueStmts: [
            'RT60 is the time for reverberant sound to decay 60 dB after the source stops.',
            'Longer RT60 values make speech intelligibility worse in most rooms.',
            'It is measured with the sound source turned off, capturing the room decay.'
          ],
          falseStmts: [
            'RT60 measures the time for sound to travel 60 feet, never decay.',
            'A longer RT60 always improves speech clarity in every room.',
            'RT60 is only defined for outdoor free-field measurements.'
          ]
        }
      ]
    },
    {
      domain: 'CTS: Video & Signal', cert: 'CTS', diff: 3,
      items: [
        {
          topic: 'EDID',
          trueStmts: [
            'EDID is the data block a display sends describing its supported resolutions.',
            'A missing or corrupt EDID can leave a source with no image at all.',
            'EDID emulators hold a fixed resolution so sources stay locked when displays change.'
          ],
          falseStmts: [
            'EDID is an audio encryption scheme that always blocks unlicensed sources.',
            'Displays never send EDID; sources simply guess the resolution instead.',
            'EDID exclusively carries HDCP keys and never mentions resolutions.'
          ]
        },
        {
          topic: 'HDCP',
          trueStmts: [
            'HDCP is content-protection encryption on HDMI and DisplayPort links.',
            'A failed HDCP handshake typically produces a black screen, not a dim image.',
            'Too many devices in series can exceed the HDCP repeater limit.'
          ],
          falseStmts: [
            'HDCP failures always show a clear image with a small warning icon.',
            'HDCP is an audio-only protocol that never affects the video signal.',
            'Every display manufactured supports all HDCP versions simultaneously.'
          ]
        },
        {
          topic: 'HDBaseT',
          trueStmts: [
            'HDBaseT carries video, audio, Ethernet, control, and power over one Cat cable.',
            'Its rated distance is up to 100 meters on Cat6 for most feature sets.',
            'It uses standard RJ45 terminations rather than proprietary connectors.'
          ],
          falseStmts: [
            'HDBaseT runs exclusively on fiber and never on copper cable.',
            'It is limited to 5 meters and cannot carry control signals at all.',
            'HDBaseT always requires a separate power cable for every endpoint.'
          ]
        },
        {
          topic: 'chroma subsampling',
          trueStmts: [
            '4:2:0 stores color at quarter resolution while keeping full luminance detail.',
            'It roughly halves bandwidth because human vision is less sensitive to color detail.',
            'Most streamed video uses 4:2:0 rather than full 4:4:4 color.'
          ],
          falseStmts: [
            '4:2:0 always doubles the bandwidth compared to uncompressed RGB video.',
            'Chroma subsampling exclusively affects audio and never touches the image.',
            '4:4:4 is never used anywhere because it contains no color information.'
          ]
        }
      ]
    },
    {
      domain: 'CTS: AV Networking', cert: 'CTS', diff: 3,
      items: [
        {
          topic: 'multicast',
          trueStmts: [
            'Multicast delivers one stream to many subscribed receivers via IGMP.',
            'It uses far less bandwidth than sending a separate unicast to each receiver.',
            'IGMP snooping keeps multicast from flooding ports with no subscribers.'
          ],
          falseStmts: [
            'Multicast always sends every packet to every device on the network.',
            'Multicast and broadcast are identical and never differ in behavior.',
            'IGMP is a video codec and has nothing to do with network traffic.'
          ]
        },
        {
          topic: 'DHCP',
          trueStmts: [
            'DHCP automatically assigns IP addresses, masks, gateways, and DNS servers.',
            'A failed DHCP request can leave a device with a 169.254.x.x link-local address.',
            'Reservations tie a specific IP to a device MAC address.'
          ],
          falseStmts: [
            'DHCP manually requires typing every address and never automates anything.',
            'A 169.254.x.x address always proves the DHCP server is working perfectly.',
            'DHCP exclusively assigns printer names and never handles IP addresses.'
          ]
        },
        {
          topic: 'VLANs',
          trueStmts: [
            'A VLAN logically segments one physical switch into isolated broadcast domains.',
            'AV traffic is often placed on its own VLAN to isolate it from data traffic.',
            'Devices on different VLANs need a router to communicate with each other.'
          ],
          falseStmts: [
            'VLANs physically divide a switch with internal walls and separate power.',
            'Every device on any VLAN can always see all traffic on all other VLANs.',
            'A VLAN is a type of audio cable and never relates to networking.'
          ]
        },
        {
          topic: 'Power over Ethernet',
          trueStmts: [
            '802.3af delivers up to about 15 W and 802.3at (PoE+) about 30 W.',
            '802.3bt extends PoE to 60 W or 90 W for demanding endpoints.',
            'The powered device negotiates its power class with the switch.'
          ],
          falseStmts: [
            'All PoE standards always deliver exactly 90 W regardless of the class.',
            'PoE sends high-voltage AC mains power down the Ethernet cable.',
            'A PoE switch can never power a device; injectors are always mandatory.'
          ]
        }
      ]
    },
    {
      domain: 'CTS: Electrical & Site Survey', cert: 'CTS', diff: 3,
      items: [
        {
          topic: "Ohm's law",
          trueStmts: [
            "Ohm's law states that voltage equals current times resistance: V = I x R.",
            'Doubling the voltage across a fixed resistor doubles the current through it.',
            'It applies to the resistive portion of AC and DC circuits alike.'
          ],
          falseStmts: [
            "Ohm's law states that power always equals voltage divided by current.",
            'Current through a resistor never changes when the voltage changes.',
            "Ohm's law only applies to capacitors and never to resistors."
          ]
        },
        {
          topic: 'ground loops',
          trueStmts: [
            'A ground loop causes hum when two grounded devices sit at different ground potentials.',
            'Current flowing on cable shields is the classic symptom of a ground loop.',
            'Lifting the shield at one end of a balanced line can break the loop.'
          ],
          falseStmts: [
            'Ground loops only occur in fiber-optic systems and never with copper.',
            'A ground loop always improves audio quality by adding shielding current.',
            'Ground loops are exclusively a video-sync issue unrelated to audio hum.'
          ]
        },
        {
          topic: 'the 80% breaker rule',
          trueStmts: [
            'Continuous loads should not exceed 80% of a breaker rating.',
            'On a 20 A breaker, the continuous load limit is 16 A.',
            'The rule prevents nuisance tripping from heat buildup over long shows.'
          ],
          falseStmts: [
            'Breakers should always be loaded to 100% continuously for efficiency.',
            'The 80% rule applies only to lighting and never to AV equipment.',
            'A 20 A breaker safely carries 25 A forever without any derating.'
          ]
        }
      ]
    },
    {
      domain: 'CTS: Control Systems', cert: 'CTS', diff: 3,
      items: [
        {
          topic: 'RS-232 control',
          trueStmts: [
            'RS-232 is a short-distance serial protocol, typically reliable under 15 meters.',
            'It uses transmit, receive, and ground conductors between devices.',
            'Baud rate, data bits, and parity must match on both ends of the link.'
          ],
          falseStmts: [
            'RS-232 reliably spans 500 meters and always carries 4K video.',
            'RS-232 uses only a single conductor with no ground reference at all.',
            'Baud rate mismatches never matter because RS-232 auto-negotiates.'
          ]
        },
        {
          topic: 'two-way feedback',
          trueStmts: [
            'Two-way feedback reports true device status back to the control system.',
            'It lets touch panels display actual volume levels instead of assumed ones.',
            'Feedback requires the controlled device to expose a status-reporting protocol.'
          ],
          falseStmts: [
            'Two-way feedback means the user must press every button twice always.',
            'It is impossible over IP networks and only works on infrared.',
            'Feedback lets the control system ignore device state entirely forever.'
          ]
        }
      ]
    },
    {
      domain: 'CTS: Troubleshooting & Verification', cert: 'CTS', diff: 3,
      items: [
        {
          topic: 'divide-and-conquer troubleshooting',
          trueStmts: [
            'It isolates a fault by testing the midpoint of the signal chain first.',
            'Each test halves the suspect portion of the chain until the fault is found.',
            'It is faster than swapping components one at a time from one end.'
          ],
          falseStmts: [
            'It always starts at the display end and never tests the middle.',
            'The method requires replacing every cable before any testing begins.',
            'Divide-and-conquer only works on networks and never on signal chains.'
          ]
        },
        {
          topic: 'cable certification vs. verification',
          trueStmts: [
            'Certification proves a run meets Cat6 performance across the full spec.',
            'A basic wire-map tester only checks for opens, shorts, and miswires.',
            'Certification results are the documented proof a cable plant performs.'
          ],
          falseStmts: [
            'A $30 continuity tester always certifies Cat6A to the full standard.',
            'Certification and verification are identical and never differ.',
            'Certification exclusively tests fiber and never applies to copper.'
          ]
        }
      ]
    }
  ]);
})(FORGE);

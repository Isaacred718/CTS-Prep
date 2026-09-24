// CTS Scenario Drills — exam-style decision drills weighted to the current CTS
// Job Task Analysis (2022 study). Troubleshooting and AV-over-IP decisions carry
// the heaviest weight, per the exam's emphasis.
// Every entry: { duty, task, scenario, question, options[4], correct (index), explanation }
const DRILLS = [
  {
    "duty": "Duty D: Servicing AV Solutions",
    "task": "Troubleshoot and Repair AV Solutions",
    "scenario": "A hotel ballroom runs all of its audio over Dante on the house network. Every day the system drops audio for two to three seconds at the top of every hour, then recovers on its own. The switch logs show no errors, and the Dante devices are set to get their addresses from the building's DHCP server, which hands out one-hour leases.",
    "question": "What is the most likely cause, and the right fix?",
    "options": [
      "The Dante clock leader is failing over — designate two preferred leaders",
      "Devices are re-acquiring IP addresses each time the one-hour DHCP lease renews — move Dante devices to static IPs or DHCP reservations",
      "Multicast traffic is flooding the switch — enable QoS",
      "The Dante latency setting is too low — raise it to 5 ms"
    ],
    "correct": 1,
    "explanation": "A fault on a fixed hourly cadence points at the one-hour DHCP lease: devices briefly lose and re-acquire IPs at renewal. Static IPs (or reservations with a long lease) fix it. Clock failover and multicast flooding would not follow a clock."
  },
  {
    "duty": "Duty D: Servicing AV Solutions",
    "task": "Troubleshoot and Repair AV Solutions",
    "scenario": "A classroom projector fed by HDBaseT from a wall-plate transmitter shows \u201cNo Signal.\u201d The instructor's laptop works fine when plugged directly into the room's confidence monitor.",
    "question": "What is the best FIRST troubleshooting step?",
    "options": [
      "Replace the projector lamp",
      "Bypass the extender: connect the laptop directly to the projector with a short HDMI cable",
      "Re-terminate the wall plate",
      "Factory-reset the projector"
    ],
    "correct": 1,
    "explanation": "Divide and conquer — bypassing the extender tells you whether the fault is in the extension path or the endpoints. Isolate the fault before replacing parts."
  },
  {
    "duty": "Duty D: Servicing AV Solutions",
    "task": "Troubleshoot and Repair AV Solutions",
    "scenario": "Ceiling speakers in a boardroom hum at 60 Hz. The hum appears only when the room's projector is powered on. The audio DSP and the projector are fed from different branch circuits.",
    "question": "What is the most likely cause and fix?",
    "options": [
      "The amplifier is underpowered — install a larger amp",
      "A ground loop between the projector and the audio system — establish a single-point ground or isolate with an audio isolation transformer",
      "The speaker wire runs are too long — shorten them",
      "The projector lamp is failing — replace it"
    ],
    "correct": 1,
    "explanation": "Hum that appears when a second device on a different circuit powers up is the classic ground loop: current flowing between two ground points. Break the loop with single-point grounding or an isolation transformer."
  },
  {
    "duty": "Duty C: Supporting AV System Operation",
    "task": "Provide AV Support",
    "scenario": "During a town hall, two of twelve wireless mics drop out whenever the presenter walks to the left side of the stage. The frequencies were coordinated with the manufacturer's software last month; a new LED video wall was installed last week.",
    "question": "What should you check first?",
    "options": [
      "Replace the mic batteries",
      "Run a fresh RF spectrum scan and re-coordinate frequencies",
      "Turn up the receiver squelch",
      "Move the receivers closer to the stage"
    ],
    "correct": 1,
    "explanation": "The environment changed since coordination — the new LED wall is a likely new RF noise source. Re-scan the spectrum and re-coordinate. Dead batteries would not be zone-specific."
  },
  {
    "duty": "Duty C: Supporting AV System Operation",
    "task": "Provide AV Support",
    "scenario": "Monday morning, three touch panels show \u201coffline.\u201d IT performed switch maintenance over the weekend. The panels have link lights and the control processor's status LED is green.",
    "question": "What is the most likely cause?",
    "options": [
      "The processor's program is corrupted",
      "The panels lost their touch calibration",
      "A network change (VLAN, DHCP scope, or IP addressing) is blocking the panels from reaching the processor",
      "The panels' firmware expired"
    ],
    "correct": 2,
    "explanation": "Link lights plus a healthy processor, with timing right after IT maintenance, points at the network layer. Verify IP addressing and VLANs, and confirm the panels can reach the processor."
  },
  {
    "duty": "Duty D: Servicing AV Solutions",
    "task": "Troubleshoot and Repair AV Solutions",
    "scenario": "A 4K60 signal from a media player to a display 40 feet away over a passive HDMI cable drops out intermittently — worse with high-motion content.",
    "question": "What is the right fix?",
    "options": [
      "Lower the display brightness",
      "Replace the passive cable with an active optical HDMI cable or an HDBaseT extender rated for 18 Gbps",
      "Add an HDMI splitter as a booster",
      "Switch the player to 1080i"
    ],
    "correct": 1,
    "explanation": "4K60 needs 18 Gbps; passive HDMI is unreliable past about 25 feet at that rate. Fix the transport with active optical or rated HDBaseT — don't degrade the signal to fit a bad cable."
  },
  {
    "duty": "Duty D: Servicing AV Solutions",
    "task": "Troubleshoot and Repair AV Solutions",
    "scenario": "A new LED video wall tears horizontally on fast-moving video. The video processor and the wall are running unsynchronized refresh timing.",
    "question": "What should you configure?",
    "options": [
      "Genlock the system so source, processor, and wall share sync",
      "Raise the HDMI cable gauge",
      "Enable HDR on the processor",
      "Set the wall to a lower resolution"
    ],
    "correct": 0,
    "explanation": "Tearing comes from unsynchronized frame updates. Genlock aligns source, processor, and display to the same sync so frames update together."
  },
  {
    "duty": "Duty C: Supporting AV System Operation",
    "task": "Provide AV Support",
    "scenario": "A council chamber with nine open delegate mics and ceiling speakers rings with feedback during heated debate. The operator is already riding the faders.",
    "question": "What is the most effective single change?",
    "options": [
      "Add more loudspeakers",
      "Insert an automixer or gating so only active mics are open, reducing the number of open mics",
      "Turn on the DSP's compressor",
      "Boost the high frequencies for clarity"
    ],
    "correct": 1,
    "explanation": "Gain-before-feedback math (PAG/NAG): every doubling of open mics costs about 3 dB of gain before feedback. Reducing the number of open mics is the most effective lever."
  },
  {
    "duty": "Duty B: Implementing AV Solutions",
    "task": "Integrate AV Solutions",
    "scenario": "Dante audio on a shared corporate network stutters whenever the office hits peak traffic. The switch is at default settings; Dante Controller shows all devices healthy.",
    "question": "What is the most likely cause, and the first thing to check?",
    "options": [
      "Enable IGMP snooping with a querier so multicast audio is not flooded to every port",
      "Add a second Dante clock leader",
      "Increase Dante latency to 10 ms",
      "Replace the switch with a PoE model"
    ],
    "correct": 0,
    "explanation": "Dante rides on multicast. Without IGMP snooping, multicast is flooded like broadcast traffic and chokes when office traffic peaks. Snooping plus a querier constrains multicast to subscribed ports only."
  },
  {
    "duty": "Duty B: Implementing AV Solutions",
    "task": "Integrate AV Solutions",
    "scenario": "On a converged network, Dante audio is clean until someone starts a large file transfer — then it glitches. The switch supports QoS but it is not configured.",
    "question": "What should you configure on the switch?",
    "options": [
      "Port mirroring",
      "QoS prioritizing time-sensitive traffic: DSCP 46 for Dante audio, DSCP 56 for PTP clocking",
      "Spanning tree",
      "Jumbo frames"
    ],
    "correct": 1,
    "explanation": "QoS keeps bulk traffic from starving time-sensitive packets. Dante expects DSCP 46 (audio) and DSCP 56 (PTP clock) prioritization on converged networks."
  },
  {
    "duty": "Duty B: Implementing AV Solutions",
    "task": "Integrate AV Solutions",
    "scenario": "Dante Controller discovers devices on VLAN 10 (AV), but subscriptions fail to a device IT moved to VLAN 20 (data). Unicast routing between the VLANs works fine for everything else.",
    "question": "Why do the subscriptions fail?",
    "options": [
      "Dante discovery and subscription rely on multicast, which does not cross VLAN boundaries by default — keep Dante endpoints on the same VLAN or route multicast properly",
      "The device needs a static IP",
      "Dante requires 10-gigabit uplinks",
      "AES67 must be enabled"
    ],
    "correct": 0,
    "explanation": "Dante uses multicast for discovery and flow setup; VLANs contain multicast by design. Keep AV endpoints on one VLAN, or configure multicast routing (PIM) between them."
  },
  {
    "duty": "Duty B: Implementing AV Solutions",
    "task": "Integrate AV Solutions",
    "scenario": "A PTZ camera sending NDI over the venue's Wi-Fi stutters and drops frames during events, though it looks fine in an empty room.",
    "question": "What is the correct response?",
    "options": [
      "Increase the Wi-Fi transmit power",
      "Move the camera to a wired gigabit connection",
      "Lower the camera's exposure setting",
      "Enable multicast on the access point"
    ],
    "correct": 1,
    "explanation": "NDI needs sustained high bandwidth with low jitter; Wi-Fi contention during a full event cannot guarantee that. A wired gigabit connection is the fix."
  },
  {
    "duty": "Duty B: Implementing AV Solutions",
    "task": "Integrate AV Solutions",
    "scenario": "You add two PoE PTZ cameras to a switch already powering four PoE devices. The switch's total PoE budget is 120 W; the six devices together need 150 W. The cameras randomly reboot.",
    "question": "What is the correct action?",
    "options": [
      "Daisy-chain the cameras to share power",
      "Do the power math: move devices to a higher-budget switch or add a midspan injector, and set port priority",
      "Use longer Ethernet cables",
      "Disable PoE and power the cameras over USB"
    ],
    "correct": 1,
    "explanation": "Devices rebooting when load is added means the PoE budget is exceeded. Add budget (bigger switch or midspan injector) and set port priority so critical devices stay powered."
  },
  {
    "duty": "Duty B: Implementing AV Solutions",
    "task": "Integrate AV Solutions",
    "scenario": "A Dante-enabled DSP needs to exchange audio with a third-party AES67-only device on the same network.",
    "question": "What must you do?",
    "options": [
      "Enable AES67 mode on the Dante device and configure matching multicast flows",
      "Install a second network card in the DSP",
      "Convert the signal path to analog",
      "Raise the Dante latency to 2 ms"
    ],
    "correct": 0,
    "explanation": "AES67 is the interoperability standard for networked audio. Dante devices can expose AES67 flows when enabled — match sample rates and multicast addresses on both sides."
  },
  {
    "duty": "Duty B: Implementing AV Solutions",
    "task": "Integrate AV Solutions",
    "scenario": "A live reinforcement system runs Dante through a single managed gigabit switch. The engineer wants the lowest stable latency for in-ear monitors.",
    "question": "What should the device latency be set to?",
    "options": [
      "0.25 ms",
      "10 ms",
      "1 ms — the default is mandatory",
      "Latency should match the age of the switch"
    ],
    "correct": 0,
    "explanation": "On a single managed gigabit switch, 0.25 ms is the supported minimum Dante latency and is fine for IEMs. Raise it only as switch hops increase."
  },
  {
    "duty": "Duty A: Creating AV Solutions",
    "task": "Design AV Solutions",
    "scenario": "A design calls for four open mics. The nearest mic is 2 feet from the talker; the loudspeaker is 20 feet from that mic. You calculate the needed acoustic gain at 12 dB, but the system's NAG works out to 8 dB.",
    "question": "What does this tell you?",
    "options": [
      "The system will work with 4 dB of headroom",
      "The design will feed back before reaching the required gain — move mics closer, reduce open mics, or add acoustic treatment",
      "Install a more powerful amplifier",
      "NAG only applies to outdoor systems"
    ],
    "correct": 1,
    "explanation": "Required gain (12 dB) exceeds the needed acoustic gain the room allows (8 dB), so it will ring before it gets loud enough. Fix the geometry or acoustics — more amplifier power cannot fix a feedback margin problem."
  },
  {
    "duty": "Duty A: Creating AV Solutions",
    "task": "Design AV Solutions",
    "scenario": "A client wants a 14-foot-wide image using a projector with a 1.6\u20132.4:1 zoom lens.",
    "question": "Where can the projector be placed?",
    "options": [
      "Anywhere in the room",
      "Between 22.4 and 33.6 feet from the screen",
      "Exactly 14 feet from the screen",
      "Directly above the screen"
    ],
    "correct": 1,
    "explanation": "Throw distance = throw ratio \u00d7 image width: 1.6 \u00d7 14 = 22.4 ft and 2.4 \u00d7 14 = 33.6 ft. The mount must land inside that window."
  },
  {
    "duty": "Duty A: Creating AV Solutions",
    "task": "Conduct Site Survey",
    "scenario": "Site survey: a glass-walled conference room where confidential calls happen. You can hear conversations clearly from the hallway outside.",
    "question": "What belongs in the AV scope?",
    "options": [
      "Louder ceiling speakers",
      "Sound masking plus absorptive treatment to raise the noise floor and reduce intelligibility outside the room",
      "A bigger display",
      "More wireless microphones"
    ],
    "correct": 1,
    "explanation": "Speech privacy means reducing intelligibility outside the room: masking raises the noise floor while absorption tames the reflections that carry speech through and around the glass."
  },
  {
    "duty": "Duty A: Creating AV Solutions",
    "task": "Design AV Solutions",
    "scenario": "A bright atrium with floor-to-ceiling windows needs a 16-foot-wide image for digital signage, running all day.",
    "question": "What should you specify?",
    "options": [
      "A standard 5,000-lumen projector",
      "A fine-pitch direct-view LED wall",
      "A rear-projection screen",
      "A larger matte-white projection screen"
    ],
    "correct": 1,
    "explanation": "Projection washes out in high ambient light. An emissive direct-view LED wall holds contrast all day and suits a 16-foot signage image."
  },
  {
    "duty": "Duty B: Implementing AV Solutions",
    "task": "Manage AV Integration",
    "scenario": "Integration is complete. Before client sign-off, you need to prove the system works as designed.",
    "question": "What is the correct commissioning step?",
    "options": [
      "Verify every input-to-output signal path end to end against the as-built drawings",
      "Check that the rack looks tidy",
      "Confirm the invoice is paid",
      "Test one input per room"
    ],
    "correct": 0,
    "explanation": "Commissioning is systematic: verify every designed signal path end to end against the as-builts. Spot checks don't prove the system."
  },
  {
    "duty": "Duty B: Implementing AV Solutions",
    "task": "Integrate AV Solutions",
    "scenario": "Eight rack units of amplifiers and processors go into a sealed credenza. The gear draws 900 W total.",
    "question": "What must the design include?",
    "options": [
      "Nothing — racks cool themselves",
      "Ventilation: vented panels, active exhaust fans, and clearance, sized from the heat load",
      "A second credenza for symmetry",
      "Shorter power cables"
    ],
    "correct": 1,
    "explanation": "900 W becomes roughly 3,000 BTU/hr of heat; sealed furniture will cook the gear. Design airflow — vented panels, exhaust fans, clearance — from the actual heat load."
  },
  {
    "duty": "Duty B: Implementing AV Solutions",
    "task": "Integrate AV Solutions",
    "scenario": "You are pulling Cat6A for AV-over-IP endpoints across a corporate floor.",
    "question": "How should the cable plant be tested?",
    "options": [
      "Plug in a laptop and see if it links",
      "Certify each run with a cable certifier to the Cat6A standard",
      "Test one run per floor",
      "Visual inspection is enough"
    ],
    "correct": 1,
    "explanation": "AV-over-IP needs full-spec cable performance. Certification proves each run meets the Cat6A standard; a link light proves almost nothing."
  },
  {
    "duty": "Duty C: Supporting AV System Operation",
    "task": "Provide AV Support",
    "scenario": "Five minutes to showtime: the presenter's laptop shows video on the room display but there is no audio in the PA. The DSP meters show no input signal at all.",
    "question": "What do you check first?",
    "options": [
      "Reprogram the DSP",
      "Check the laptop's audio output device and routing — confirm it is sending audio to the room interface, not its own speakers",
      "Replace the HDMI cable",
      "Reboot the control processor"
    ],
    "correct": 1,
    "explanation": "Video is present but the DSP sees no input, so the laptop isn't routing audio out. The most common live-event fault is at the source — check there first."
  },
  {
    "duty": "Duty D: Servicing AV Solutions",
    "task": "Conduct Maintenance Activities",
    "scenario": "During a preventive maintenance visit you notice new firmware is available for the DSP and the control processor.",
    "question": "What is the correct procedure?",
    "options": [
      "Update everything immediately during the visit",
      "Back up the current configurations, review the release notes, and schedule the update in a maintenance window with a rollback plan",
      "Never update firmware",
      "Update only if the client complains"
    ],
    "correct": 1,
    "explanation": "Firmware can change behavior. Back up configs, read the release notes, and update in a window where you can test and roll back if needed."
  }
];

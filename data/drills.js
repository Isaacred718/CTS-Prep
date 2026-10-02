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
      "The clock leader is failing over every hour — set one preferred leader so the clock election stops changing",
      "Devices re-acquire addresses at each one-hour DHCP renewal — give Dante devices static IPs or DHCP reservations",
      "Multicast flooding is saturating the switch — enable QoS so the Dante audio packets always take priority",
      "The device latency is too low for the house network — raise it to 5 ms on every Dante receiver in the room"
    ],
    "correct": 1,
    "explanation": "A fault on a fixed hourly cadence points at the one-hour DHCP lease: devices briefly lose and re-acquire IPs at renewal. Static IPs (or reservations with a long lease) fix it. Clock failover and multicast flooding would not follow a clock."
  },
  {
    "duty": "Duty D: Servicing AV Solutions",
    "task": "Troubleshoot and Repair AV Solutions",
    "scenario": "A classroom projector fed by HDBaseT from a wall-plate transmitter shows “No Signal.” The instructor's laptop works fine when plugged directly into the room's confidence monitor.",
    "question": "What is the best FIRST troubleshooting step?",
    "options": [
      "Swap in a new projector lamp first, since a dying lamp is the most common projector fault",
      "Bypass the extender: connect the laptop directly to the projector with a short HDMI cable",
      "Re-terminate the wall plate's Cat6 jack, since field terminations are the most likely weak point",
      "Factory-reset the projector to clear any input settings the last presenter may have changed"
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
      "The amplifier is underpowered and clipping on the hum — install a larger amplifier with more headroom for the room",
      "A ground loop between projector and audio system — fix it with single-point grounding or an isolation transformer",
      "The speaker wire runs are long enough to pick up the hum — shorten them or move to a heavier-gauge speaker cable",
      "The projector's lamp ballast is failing and buzzing — replace the lamp and its ballast before the next meeting"
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
      "Replace the batteries in the two mics that are dropping out",
      "Run a fresh RF spectrum scan and re-coordinate frequencies",
      "Turn up the receiver squelch so the brief drops are masked",
      "Move the receivers to the left wing, nearer the dropout zone"
    ],
    "correct": 1,
    "explanation": "The environment changed since coordination — the new LED wall is a likely new RF noise source. Re-scan the spectrum and re-coordinate. Dead batteries would not be zone-specific."
  },
  {
    "duty": "Duty C: Supporting AV System Operation",
    "task": "Provide AV Support",
    "scenario": "Monday morning, three touch panels show “offline.” IT performed switch maintenance over the weekend. The panels have link lights and the control processor's status LED is green.",
    "question": "What is the most likely cause?",
    "options": [
      "The processor's program was corrupted when the switches rebooted, so it needs to be reloaded from backup",
      "The panels lost their touch calibration in the power cycle, so they can no longer send any commands",
      "A network change (VLAN, DHCP scope, or IP addressing) is blocking the panels from reaching the processor",
      "The panels' firmware license expired over the weekend and must be renewed through the manufacturer"
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
      "Lower the display's brightness and refresh rate so the panel stops dropping the high-motion frames",
      "Replace the passive cable with an active optical HDMI cable or an HDBaseT extender rated for 18 Gbps",
      "Add an HDMI splitter mid-run as a booster, since its powered output regenerates the 18 Gbps signal",
      "Switch the player to 4K30 4:2:0 so the signal fits the passive cable for the full forty-foot run"
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
      "Use a heavier-gauge HDMI cable to the video wall processor",
      "Enable HDR on the processor to smooth fast-moving content",
      "Set the wall to a lower resolution so it redraws faster"
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
      "Add more ceiling loudspeakers so each one can run quieter and stay below the feedback point",
      "Insert an automixer or gating so only active mics are open, reducing the number of open mics",
      "Turn on the DSP's compressor so loud debate can't push the mic channels past the feedback point",
      "Boost the high frequencies for clarity so the delegates can be heard at a lower overall level"
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
      "Add a second preferred Dante clock leader so the clock survives the traffic peaks",
      "Increase the Dante latency to 10 ms so the receivers can ride out the traffic peaks",
      "Replace the switch with a PoE model so the Dante devices are powered more reliably"
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
      "Port mirroring, so every Dante packet is duplicated to a second port as a live backup",
      "QoS prioritizing time-sensitive traffic: DSCP 46 for Dante audio, DSCP 56 for PTP clocking",
      "Spanning tree on every port, so the large transfer is blocked from looping back on itself",
      "Jumbo frames on every port, so the audio packets travel in fewer, larger frames per second"
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
      "Discovery and flow setup use multicast, which stays inside each VLAN unless routed — keep endpoints on one VLAN or route multicast",
      "The moved device needs a static IP address, since Dante subscriptions fail to any device that gets its address from DHCP",
      "Dante requires 10-gigabit uplinks between VLANs, and the data VLAN's gigabit trunk cannot carry the audio flows reliably",
      "AES67 mode must be enabled on both devices, since only AES67 flows are allowed to cross from one VLAN into another"
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
      "Increase the access point's transmit power",
      "Move the camera to a wired gigabit connection",
      "Lower the camera's resolution and frame rate",
      "Enable multicast on the access point for NDI"
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
      "Daisy-chain the two new cameras from one port so they share a single PoE power allocation",
      "Do the power math: move devices to a higher-budget switch or add a midspan injector, and set port priority",
      "Use shorter, heavier-gauge patch cables so less power is lost before it reaches each of the cameras",
      "Disable PoE on the cameras and power them from a USB hub, since PTZ motors draw too much for any PoE port"
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
      "Install a second network card in the DSP to bridge it onto the AES67 network",
      "Convert the signal path to analog, since Dante and AES67 cannot exchange audio",
      "Raise the Dante latency to 2 ms so the AES67 device can lock to the Dante clock"
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
    "scenario": "A design calls for four open mics. The nearest mic is 2 feet from the talker; the loudspeaker is 20 feet from that mic. You calculate the needed acoustic gain (NAG) at 12 dB, but the system's potential acoustic gain (PAG) works out to 8 dB.",
    "question": "What does this tell you?",
    "options": [
      "The system has 4 dB of headroom to spare, so it will reach the required level without ever feeding back at all",
      "It will feed back before reaching the needed gain — move mics closer, reduce open mics, or add acoustic treatment",
      "Install a more powerful amplifier so the system has the extra 4 dB of gain it needs before feedback",
      "PAG and NAG only apply outdoors, so in a room the reverberant field makes the extra gain available"
    ],
    "correct": 1,
    "explanation": "The needed acoustic gain (12 dB) is more than the potential acoustic gain the room allows (8 dB), so the system will ring before it gets loud enough. Fix the geometry or the acoustics — more amplifier power cannot fix a feedback-margin problem."
  },
  {
    "duty": "Duty A: Creating AV Solutions",
    "task": "Design AV Solutions",
    "scenario": "A client wants a 14-foot-wide image using a projector with a 1.6–2.4:1 zoom lens.",
    "question": "Where can the projector be placed?",
    "options": [
      "Between 5.8 and 8.8 feet from the screen",
      "Between 22.4 and 33.6 feet from the screen",
      "Between 12.6 and 18.9 feet from the screen",
      "22.4 feet or farther; zoom covers any longer throw"
    ],
    "correct": 1,
    "explanation": "Throw distance = throw ratio × image width: 1.6 × 14 = 22.4 ft and 2.4 × 14 = 33.6 ft. The mount must land inside that window."
  },
  {
    "duty": "Duty A: Creating AV Solutions",
    "task": "Conduct Site Survey",
    "scenario": "Site survey: a glass-walled conference room where confidential calls happen. You can hear conversations clearly from the hallway outside.",
    "question": "What belongs in the AV scope?",
    "options": [
      "Louder ceiling speakers inside the room, so the far end's audio drowns out the voices in the hallway",
      "Sound masking plus absorptive treatment to raise the noise floor and reduce intelligibility outside the room",
      "Frosted privacy film on the glass walls, which blocks speech from passing through as well as blocking the view",
      "Beamforming ceiling microphones, so the far end hears the talkers clearly while the room itself stays quiet"
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
      "Spot-check one input in each room, since a working sample proves the shared paths",
      "Have the client press through the touch panel pages and sign off on what they see",
      "Run the control system's built-in self-test report and attach it to the closeout"
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
      "Nothing extra: the equipment's internal fans can move the heat out of a closed credenza",
      "Ventilation: vented panels, active exhaust fans, and clearance, sized from the heat load",
      "A larger sealed credenza, so the same 900 W of heat spreads through more internal air volume",
      "Shorter power cables and a power conditioner, so less of the 900 W ends up as waste heat"
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
      "Plug in a laptop at each drop and confirm it links at gigabit",
      "Certify each run with a cable certifier to the Cat6A standard",
      "Certify one run per floor and wiremap-test all of the others",
      "Run a continuity and wiremap test on every run with a tester"
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
      "Reload the DSP program, since the show file may have lost the laptop input's routing and gain settings",
      "Check the laptop's audio output and routing: it must send audio to the room interface, not its own speakers",
      "Replace the HDMI cable, because a damaged cable can pass video while the embedded audio channel fails",
      "Reboot the control processor, since a hung audio preset can mute the PA input without showing any warning"
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
      "Update everything immediately during the visit, since new firmware fixes bugs and the room is already offline",
      "Back up the configurations, read the release notes, and schedule the update in a maintenance window with a rollback plan",
      "Leave the firmware alone permanently, since a working system should never be changed once it has been commissioned",
      "Update only the control processor, since DSP firmware rarely changes behavior and needs no change management"
    ],
    "correct": 1,
    "explanation": "Firmware can change behavior. Back up configs, read the release notes, and update in a window where you can test and roll back if needed."
  }
];

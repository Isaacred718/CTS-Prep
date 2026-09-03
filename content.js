/* ============================================================
   CONTENT FILE — this is the only file you edit to add material.
   Never touch index.html unless you want to change how it works.

   Three lists live here:
     QUESTIONS    quiz items
     CARDS        flashcards
     GUIDES       study guides

   After editing, commit and push. GitHub Pages redeploys in ~1 min.
   If something breaks, open the page, then the browser console —
   a syntax error here (usually a missing comma) shows up there.
   ============================================================ */


/* ---------- QUESTIONS ----------------------------------------
   Copy this block, paste it above the closing ,
  {
    domain: "CTS: Video & Signal",
    q: "When calculating the distance for a projector, what does 'Throw Ratio' represent?",
    options: ["The ratio of image width to screen height", "The ratio of the distance from the lens to the screen versus the image width", "The ratio of lumens to square footage", "The ratio of contrast to brightness"],
    correct: 1,
    explanation: "Throw Ratio = Distance / Width. A 1.5:1 throw means the projector must be 1.5 times the image width away from the screen."
  },
  {
    domain: "CTS: Video & Signal",
    q: "Which color space is the industry standard for HD video transmission and represents the primary colors of Red, Green, and Blue?",
    options: ["YPbPr", "RGB", "YCbCr", "CMYK"],
    correct: 1,
    explanation: "RGB is the primary color model used for displays and cameras. YCbCr (or YPbPr) is used for transmission to save bandwidth by separating luminance from chrominance."
  },
  {
    domain: "CTS: Video & Signal",
    q: "In a projection system, what is the primary cause of 'Keystone' distortion?",
    options: ["Incorrect resolution settings", "The projector being tilted relative to the screen plane", "Using a lens with too short a throw", "Insufficient lumens for the ambient light"],
    correct: 1,
    explanation: "Keystoning occurs when the projector is not perpendicular to the screen, causing the image to appear as a trapezoid."
  },
  {
    domain: "CTS: Sound & Physics",
    q: "What is the primary purpose of a 'Bass Trap' in a room's acoustic treatment?",
    options: ["To increase the volume of low frequencies", "To absorb low-frequency standing waves typically found in corners", "To reflect high frequencies back into the room", "To prevent sound from leaking into adjacent rooms"],
    correct: 1,
    explanation: "Low frequencies have long wavelengths and accumulate in corners. Bass traps are designed to absorb these specific frequencies to reduce 'boominess'."
  },
  {
    domain: "CTS: Sound & Physics",
    q: "A microphone with a 'Cardioid' polar pattern is most sensitive to sound arriving from which direction?",
    options: ["The rear", "The sides", "The front (0 degrees)", "All directions equally"],
    correct: 2,
    explanation: "Cardioid (heart-shaped) mics are most sensitive to the front and reject sound from the rear, making them ideal for reducing feedback from monitors."
  },
  {
    domain: "CTS: Sound & Physics",
    q: "What does RT60 refer to in room acoustics?",
    options: ["The time it takes for sound to travel 60 meters", "The time it takes for a sound to decay by 60 decibels", "The time it takes for sound to decay by 60% of its original level", "The frequency response of a room at 60Hz"],
    correct: 1,
    explanation: "RT60 (Reverberation Time) is the time required for the sound pressure level to drop 60 dB after the source has stopped."
  },
  {
    domain: "CTS: AVIXA Standards",
    q: "According to the DISCAS standard, the 'Minimum Content Element' is determined by what?",
    options: ["The brightness of the projector", "The distance to the farthest viewer", "The aspect ratio of the screen", "The contrast ratio of the image"],
    correct: 1,
    explanation: "DISCAS uses the farthest viewer distance to calculate how large the smallest critical piece of information (the content element) must be to be legible."
  },
  {
    domain: "CTS: Project Management",
    q: "What is the primary goal of 'Commissioning' in an AV installation?",
    options: ["To finish the punch list", "To verify that the system performs according to the design intent and specifications", "To train the end user on how to use the system", "To collect the final payment from the client"],
    correct: 1,
    explanation: "Commissioning is the formal process of testing and documenting that every system function works as specified in the original design."
  },
  {
    domain: "CTS: Electrical & Site Survey",
    q: "When performing a site survey, why is it critical to identify the 'HVAC noise floor'?",
    options: ["To determine if the AC is powerful enough to cool the racks", "To ensure the audio system's signal-to-noise ratio is sufficient for speech intelligibility", "To calculate the electrical load of the room", "To check for potential water leaks from the ceiling"],
    correct: 1,
    explanation: "If the background noise (HVAC) is too high, the audio system must be louder to be heard, which can increase the risk of feedback and reduce clarity."
  }
]; and edit.

     {
       domain: "CTS: Sound & Physics",
       q: "Question text?",
       options: ["A", "B", "C", "D"],
       correct: 1,          // 0 = first option, 1 = second, etc.
       explanation: "Why that answer is right."
     },

   Domains are free text. Anything you type becomes a filterable
   domain on the dashboard automatically, and gets its own accuracy
   score. Keep the prefix style ("CTS: ..." / "ST 2110: ...") so
   related topics group together.
-------------------------------------------------------------- */

const QUESTIONS = [

  // ---- CTS: Project Management ----
  {
    domain: "CTS: Project Management",
    q: "When addressing scope creep during installation, what formal document must be submitted to and approved by the client?",
    options: ["Field Report", "Change Order", "Certificate of Substantial Completion", "Punch List"],
    correct: 1,
    explanation: "Any addition or modification to agreed scope must be documented and priced via a Change Order before work proceeds."
  },
  {
    domain: "CTS: Project Management",
    q: "What does the Certificate of Substantial Completion establish on an AV project?",
    options: [
      "That every punch list item has been closed out",
      "That the system is usable for its intended purpose, starting warranty and closeout clocks",
      "That the client has paid the final invoice",
      "That commissioning has not yet begun"
    ],
    correct: 1,
    explanation: "Substantial completion means the owner can use the system for its intended purpose. Minor punch list items may remain open; warranty periods and final payment terms typically start here."
  },
  {
    domain: "CTS: Project Management",
    q: "In a project schedule, what does the critical path represent?",
    options: [
      "The tasks with the highest budget",
      "The longest sequence of dependent tasks, which sets the minimum project duration",
      "The tasks assigned to the lead technician",
      "The shortest route through the task list"
    ],
    correct: 1,
    explanation: "The critical path is the longest chain of dependent tasks. Any delay on it delays the whole project; tasks off it have float."
  },

  // ---- CTS: Sound & Physics ----
  {
    domain: "CTS: Sound & Physics",
    q: "A speaker produces 80 dB SPL at 2 meters. What is the SPL at 4 meters in a free field?",
    options: ["77 dB SPL", "74 dB SPL", "70 dB SPL", "68 dB SPL"],
    correct: 1,
    explanation: "Inverse Square Law: doubling distance from a point source in a free field drops SPL by 6 dB. 80 − 6 = 74."
  },
  {
    domain: "CTS: Sound & Physics",
    q: "Doubling the electrical power to a loudspeaker produces roughly what change in SPL?",
    options: ["+2 dB", "+3 dB", "+6 dB", "+10 dB"],
    correct: 1,
    explanation: "Doubling power is +3 dB. Doubling perceived loudness takes roughly +10 dB, which is ten times the power."
  },
  {
    domain: "CTS: Sound & Physics",
    q: "What is the approximate wavelength of a 1 kHz tone in air at room temperature?",
    options: ["0.034 m", "0.34 m", "3.4 m", "34 m"],
    correct: 1,
    explanation: "Wavelength = speed / frequency. 343 m/s ÷ 1000 Hz ≈ 0.34 m."
  },
  {
    domain: "CTS: Sound & Physics",
    q: "Per the Potential Acoustic Gain concept, what is the most effective way to increase gain before feedback?",
    options: [
      "Increase amplifier headroom",
      "Move the microphone closer to the talker and the loudspeaker farther from the mic",
      "Add more open microphones",
      "Raise the system EQ at the feedback frequency"
    ],
    correct: 1,
    explanation: "PAG/NAG is governed by distances. Shortening talker-to-mic distance and lengthening loudspeaker-to-mic distance both raise gain before feedback. Each doubling of open mics costs 3 dB."
  },

  // ---- CTS: AVIXA Standards ----
  {
    domain: "CTS: AVIXA Standards",
    q: "Under AVIXA V201.01, what minimum contrast ratio is recommended for Basic Decision Making content?",
    options: ["7:1", "15:1", "50:1", "80:1"],
    correct: 1,
    explanation: "V201.01 specifies 15:1 for Basic Decision Making. Passive viewing is 7:1, Analytical Decision Making is 80:1."
  },
  {
    domain: "CTS: AVIXA Standards",
    q: "Which AVIXA standard defines Display Image Size for 2D content in viewing environments?",
    options: ["V201.01", "DISCAS (V202.01)", "A102.01", "F501.01"],
    correct: 1,
    explanation: "DISCAS — Display Image Size for 2D Content in Audiovisual Systems — derives image height from farthest viewer distance and content element height."
  },
  {
    domain: "CTS: AVIXA Standards",
    q: "What does AVIXA A102.01 govern?",
    options: [
      "Audio coverage uniformity in listener areas",
      "Rack building and cable dressing",
      "Projector lamp replacement intervals",
      "Network switch configuration"
    ],
    correct: 0,
    explanation: "A102.01, Audio Coverage Uniformity, sets tolerances for how evenly sound pressure level is distributed across a listener area."
  },

  // ---- CTS: Electrical & Site Survey ----
  {
    domain: "CTS: Electrical & Site Survey",
    q: "What is the total current draw of three 120V racks if each draws 480 Watts?",
    options: ["4 Amps", "12 Amps", "16 Amps", "20 Amps"],
    correct: 1,
    explanation: "P = V × I. Total = 1440W. 1440 ÷ 120 = 12 Amps."
  },
  {
    domain: "CTS: Electrical & Site Survey",
    q: "What is the continuous load limit on a 20A branch circuit under standard derating practice?",
    options: ["12 A", "16 A", "18 A", "20 A"],
    correct: 1,
    explanation: "Continuous loads are limited to 80% of the breaker rating. 20 × 0.8 = 16 A."
  },
  {
    domain: "CTS: Electrical & Site Survey",
    q: "A ground loop hum in an unbalanced audio run is best resolved by which approach?",
    options: [
      "Lifting the safety ground on the equipment chassis",
      "Inserting an isolation transformer or converting the run to balanced",
      "Increasing gain at the mixer input",
      "Using a longer cable run"
    ],
    correct: 1,
    explanation: "Never lift a safety ground — it is a life-safety hazard. Break the loop galvanically with an isolation transformer, or move to a balanced connection with differential rejection."
  },

  // ---- CTS: Video & Signal ----
  {
    domain: "CTS: Video & Signal",
    q: "What is the approximate uncompressed bit rate of 1080p59.94 video at 4:2:2, 10-bit?",
    options: ["1.5 Gbps", "3 Gbps", "6 Gbps", "12 Gbps"],
    correct: 1,
    explanation: "1080p at 59.94 fps needs roughly 3 Gbps, which is why it maps to 3G-SDI. 1080i59.94 fits in 1.5G-SDI."
  },
  {
    domain: "CTS: Video & Signal",
    q: "In HDCP, what is the practical consequence of a repeater exceeding its device or depth limit?",
    options: [
      "Video downgrades to standard definition",
      "Authentication fails and downstream displays go blank or show an error",
      "Audio drops but video continues",
      "The signal converts to analog automatically"
    ],
    correct: 1,
    explanation: "HDCP repeaters have finite device counts and cascade depth. Exceeding either breaks authentication, and the sink shows black or an HDCP error rather than degrading gracefully."
  },
  {
    domain: "CTS: Video & Signal",
    q: "What does EDID communicate in an HDMI link?",
    options: [
      "The encryption keys for content protection",
      "The sink's supported resolutions, timings, and audio formats to the source",
      "The physical cable length",
      "The IP address of the display"
    ],
    correct: 1,
    explanation: "Extended Display Identification Data lets the display tell the source what it can accept. Bad or missing EDID is a common cause of no-sync and wrong-resolution faults."
  },

  // ---- ST 2110: Core Suite ----
  {
    domain: "ST 2110: Core Suite",
    q: "Which protocol does SMPTE ST 2110-10 leverage for microsecond-level synchronization across IP media networks?",
    options: ["NTP", "PTP / IEEE 1588 (ST 2059-2)", "PTP v1 / IEEE 1394", "RTCP Sender Reports"],
    correct: 1,
    explanation: "ST 2110-10 relies on Precision Time Protocol v2 under the SMPTE ST 2059-2 profile for frame-accurate sync over IP."
  },
  {
    domain: "ST 2110: Core Suite",
    q: "Which sub-standard governs transport of PCM digital audio streams?",
    options: ["ST 2110-10", "ST 2110-20", "ST 2110-30", "ST 2110-40"],
    correct: 2,
    explanation: "ST 2110-30 carries uncompressed PCM audio based on AES67. -20 is video, -40 is ancillary data."
  },
  {
    domain: "ST 2110: Core Suite",
    q: "What is the defining architectural change ST 2110 makes relative to ST 2022-6?",
    options: [
      "It compresses video to reduce bandwidth",
      "It carries video, audio, and ancillary data as separate essence streams rather than one encapsulated SDI signal",
      "It replaces PTP with NTP",
      "It requires fiber rather than copper"
    ],
    correct: 1,
    explanation: "ST 2022-6 wraps a whole SDI signal in IP. ST 2110 splits essences into independent streams that can be routed, shuffled, and processed separately."
  },
  {
    domain: "ST 2110: Core Suite",
    q: "What does ST 2110-21 define?",
    options: [
      "Ancillary data mapping",
      "Traffic shaping and sender timing models (narrow, narrow linear, wide)",
      "Audio channel counts",
      "Stream encryption"
    ],
    correct: 1,
    explanation: "ST 2110-21 specifies sender packet pacing so receivers can size buffers. Narrow senders pace tightly to the video timing; wide senders are burstier and demand more receiver buffer."
  },

  // ---- ST 2110: Network & Control ----
  {
    domain: "ST 2110: Network & Control",
    q: "How does a receiver handle duplicate streams under SMPTE ST 2022-7?",
    options: [
      "It averages both streams to clean up jitter",
      "It performs packet-by-packet hitless merge using RTP sequence numbers",
      "It drops the secondary unless link failure occurs",
      "It converts both to SDI before combining"
    ],
    correct: 1,
    explanation: "ST 2022-7 reconstructs an uninterrupted stream from identical RTP sequence numbers arriving on two independent network fabrics, so a fabric failure causes no visible glitch."
  },
  {
    domain: "ST 2110: Network & Control",
    q: "Which AMWA NMOS specification handles discovery and registration of media nodes?",
    options: ["IS-04", "IS-05", "IS-08", "IS-09"],
    correct: 0,
    explanation: "IS-04 is Discovery and Registration. IS-05 is Connection Management, IS-08 is audio channel mapping, IS-09 is system parameters."
  },
  {
    domain: "ST 2110: Network & Control",
    q: "What protocol do receiver endpoints use to join an active IP multicast stream?",
    options: ["PIM-SM", "IGMP", "OSPF", "LLDP"],
    correct: 1,
    explanation: "Endpoints send IGMP Join and Leave messages to the local switch to subscribe to multicast group addresses. PIM handles multicast routing between switches upstream of that."
  },
  {
    domain: "ST 2110: Network & Control",
    q: "In a PTP domain, what is the role of the Boundary Clock in a leaf-spine media network?",
    options: [
      "It generates the master reference from GPS",
      "It terminates PTP on one port and regenerates timing to downstream devices, reducing load and jitter on the grandmaster",
      "It converts PTP to NTP for legacy gear",
      "It measures multicast bandwidth"
    ],
    correct: 1,
    explanation: "A Boundary Clock syncs to the upstream grandmaster and acts as master to devices below it, which scales PTP distribution and limits accumulated jitter."
  },
  {
    domain: "ST 2110: Network & Control",
    q: "What does SDP (Session Description Protocol) provide in an ST 2110 workflow?",
    options: [
      "Encryption of the media payload",
      "The stream's multicast address, port, payload type, and format parameters that let a receiver interpret it",
      "The physical patch record of the facility",
      "Automatic switch configuration"
    ],
    correct: 1,
    explanation: "The SDP file is the contract describing a stream. NMOS IS-05 typically hands SDP data to the receiver during connection management."
  },

  // ---- Dante & AES67 ----
  {
    domain: "Dante & AES67",
    q: "What is the relationship between Dante and AES67?",
    options: [
      "They are the same protocol under different names",
      "Dante can operate in an AES67 mode to interoperate, but its native transport and discovery differ",
      "AES67 is a licensed subset of Dante",
      "They cannot interoperate under any conditions"
    ],
    correct: 1,
    explanation: "Dante is a proprietary ecosystem with its own discovery and clocking. Enabling AES67 mode exposes standards-based multicast streams that other AES67 devices can subscribe to, with constraints on sample rate and packet time."
  },
  {
    domain: "Dante & AES67",
    q: "In a Dante network, what does the Leader clock (formerly Master) provide?",
    options: [
      "Routing of audio subscriptions",
      "The PTP reference all devices sync their sample clocks to",
      "Gain staging across the network",
      "Device naming"
    ],
    correct: 1,
    explanation: "Dante elects a Leader clock by PTP. All devices word-clock to it, which is what allows sample-accurate playout across the network."
  }
,
  { domain: "CTS: Video & Signal", front: "Throw Ratio", back: "Distance / Width. Used to determine projector placement." },
  { domain: "CTS: Video & Signal", front: "RGB vs YCbCr", back: "RGB is for displays/cameras; YCbCr is for transmission (separates brightness from color)." },
  { domain: "CTS: Sound & Physics", front: "RT60", back: "The time for sound to decay by 60 dB. A measure of reverberation." },
  { domain: "CTS: Sound & Physics", front: "Cardioid Pattern", back: "Heart-shaped; sensitive to front, rejects rear." },
  { domain: "CTS: AVIXA Standards", front: "DISCAS Primary Variable", back: "Farthest Viewer Distance determines the minimum image size." },
  { domain: "CTS: Project Management", front: "Commissioning", back: "Verifying the system performs per design intent and specifications." },
  { domain: "CTS: Electrical & Site Survey", front: "Noise Floor", back: "The ambient sound level of a room; affects audio system gain and intelligibility." }
];


/* ---------- FLASHCARDS ---------------------------------------
   Tap to flip. You rate yourself Got it or Missed it, and the app
   uses a Leitner box system: cards you miss come back sooner,
   cards you know keep getting pushed further out.

     { domain: "ST 2110: Core Suite", front: "Prompt", back: "Answer" },
-------------------------------------------------------------- */

const CARDS = [
  { domain: "CTS: Sound & Physics", front: "Inverse Square Law", back: "Doubling distance from a point source in a free field drops SPL by 6 dB." },
  { domain: "CTS: Sound & Physics", front: "Power to SPL", back: "Double the power = +3 dB. Ten times the power = +10 dB ≈ twice as loud perceptually." },
  { domain: "CTS: Sound & Physics", front: "Open mic penalty (NOM)", back: "Every doubling of the number of open mics costs 3 dB of gain before feedback." },
  { domain: "CTS: Sound & Physics", front: "Speed of sound", back: "≈ 343 m/s (1130 ft/s) at 20°C. Wavelength = 343 / frequency." },
  { domain: "CTS: Sound & Physics", front: "Haas / precedence effect", back: "Arrivals within ~30 ms of the direct sound are perceived as one event, localized to the first arrival." },

  { domain: "CTS: AVIXA Standards", front: "V201.01 contrast ratios", back: "Passive viewing 7:1 · Basic decision making 15:1 · Analytical decision making 80:1." },
  { domain: "CTS: AVIXA Standards", front: "DISCAS", back: "Display Image Size for 2D Content. Sizes the image from farthest viewer distance and the smallest content element." },
  { domain: "CTS: AVIXA Standards", front: "A102.01", back: "Audio Coverage Uniformity — tolerance for SPL variation across the listener area." },

  { domain: "CTS: Electrical & Site Survey", front: "Ohm's / power law", back: "V = I × R, P = V × I. Amps = Watts ÷ Volts." },
  { domain: "CTS: Electrical & Site Survey", front: "80% rule", back: "Continuous loads are limited to 80% of breaker rating. A 20A circuit carries 16A continuously." },
  { domain: "CTS: Electrical & Site Survey", front: "Ground loop fix", back: "Isolation transformer or balanced connection. Never lift a safety ground." },

  { domain: "CTS: Project Management", front: "Change Order", back: "The formal, priced, client-approved document for any change to agreed scope. Approve before work proceeds." },
  { domain: "CTS: Project Management", front: "Punch list vs substantial completion", back: "Substantial completion = usable for intended purpose. Punch list = remaining minor items that don't block use." },
  { domain: "CTS: Project Management", front: "Critical path", back: "Longest chain of dependent tasks. Sets minimum duration; delays here delay the project." },

  { domain: "ST 2110: Core Suite", front: "ST 2110-10", back: "System timing and definitions. PTP per ST 2059-2." },
  { domain: "ST 2110: Core Suite", front: "ST 2110-20", back: "Uncompressed active video essence." },
  { domain: "ST 2110: Core Suite", front: "ST 2110-21", back: "Sender traffic shaping and timing models: narrow, narrow linear, wide." },
  { domain: "ST 2110: Core Suite", front: "ST 2110-30", back: "PCM audio, built on AES67." },
  { domain: "ST 2110: Core Suite", front: "ST 2110-40", back: "Ancillary data — timecode, closed captions, AFD." },
  { domain: "ST 2110: Core Suite", front: "ST 2022-6 vs ST 2110", back: "2022-6 encapsulates full SDI in IP. 2110 splits video, audio, and ANC into separately routable essence streams." },

  { domain: "ST 2110: Network & Control", front: "ST 2022-7", back: "Hitless redundancy. Receiver merges two identical streams packet-by-packet using RTP sequence numbers." },
  { domain: "ST 2110: Network & Control", front: "NMOS IS-04", back: "Discovery and Registration — nodes register with a registry." },
  { domain: "ST 2110: Network & Control", front: "NMOS IS-05", back: "Connection Management — makes and breaks the actual sender/receiver connections." },
  { domain: "ST 2110: Network & Control", front: "NMOS IS-08", back: "Audio channel mapping between senders and receivers." },
  { domain: "ST 2110: Network & Control", front: "IGMP vs PIM", back: "IGMP: endpoint to local switch, joining a group. PIM: routing multicast between switches/routers." },
  { domain: "ST 2110: Network & Control", front: "SDP file", back: "Describes multicast address, port, payload type, and format so a receiver can interpret a stream." },
  { domain: "ST 2110: Network & Control", front: "Boundary Clock", back: "Syncs to the grandmaster upstream, acts as master downstream. Scales PTP and limits jitter accumulation." },

  { domain: "Dante & AES67", front: "Dante Leader clock", back: "PTP-elected reference every Dante device syncs its sample clock to." },
  { domain: "Dante & AES67", front: "Dante AES67 mode", back: "Exposes standards-based multicast streams for interop, with sample-rate and packet-time constraints. Not identical to native Dante." }
,
  {
    title: "Visual Systems & Projection",
    domain: "CTS: Video & Signal",
    body: `## Projection Math

- **Throw Ratio:** The most critical number for placement. 
  - *Formula:* Distance = Throw Ratio × Image Width.
  - If a lens is 1.5:1 and you want a 10ft wide image, you must be 15ft away.

## Image Quality & Optics

- **Keystoning:** Caused by non-perpendicular placement. Corrected via digital keystone (which reduces resolution) or motorized lens shift (which preserves resolution).
- **Lumens & Contrast:** Lumens describe total light output. Contrast describes the difference between the brightest white and darkest black. High ambient light requires higher lumens.

## Color & Signal

- **RGB:** The base of all digital video. Red, Green, Blue.
- **Chroma Subsampling (4:2:2, 4:4:4):** A way to compress color data without affecting brightness (Luma), taking advantage of the human eye's lower sensitivity to color detail.`
  }
];


/* ---------- STUDY GUIDES -------------------------------------
   Written reference material. Supports very light markup in body:
     ## Heading
     - bullet
     **bold**
   Everything else is plain paragraphs. Blank line separates blocks.

     { title: "...", domain: "...", body: `...` },

   Note the backticks around body — those let it span many lines.
-------------------------------------------------------------- */

const GUIDES = [
  {
    title: "The ST 2110 suite at a glance",
    domain: "ST 2110: Core Suite",
    body: `The whole point of ST 2110 is essence separation. Where SDI and ST 2022-6 carry one bonded signal, ST 2110 sends video, audio, and ancillary data as independent multicast streams that share only a common clock.

## The parts you need cold

- **-10** System timing and definitions. Everything rides on PTP under the ST 2059-2 profile.
- **-20** Uncompressed active video. Blanking is stripped; only active picture is sent.
- **-21** Sender traffic shaping. Narrow, narrow linear, and wide models describe how evenly a sender paces packets, which determines how much buffer a receiver needs.
- **-30** PCM audio, based on AES67.
- **-31** AES3 transparent transport, for carrying non-PCM payloads like Dolby E.
- **-40** Ancillary data: timecode, captions, AFD.

## Why separation matters operationally

Because essences are independent, you can route a camera's video to a switcher while its audio goes straight to the audio console, and shuffle audio channels without touching video. That flexibility is also the failure mode: video and audio can arrive correctly while being out of sync, or an audio stream can be forgotten during a route. Lip sync problems in 2110 plants are usually routing or buffer problems, not encoder problems.

## The clock is the system

If PTP is unhealthy, nothing else matters. A grandmaster locked to GPS feeds boundary clocks in the spine or leaf switches, which in turn serve endpoints. Watch for multiple grandmasters fighting over BMCA election, and for endpoints slipping into holdover.`
  },
  {
    title: "Redundancy, discovery, and control",
    domain: "ST 2110: Network & Control",
    body: `Three separate problems get solved by three separate mechanisms, and mixing them up is the most common source of confusion.

## Redundancy — ST 2022-7

Two physically separate networks, red and blue, carry identical copies of a stream. The receiver reconstructs one clean stream by matching RTP sequence numbers packet by packet. A fabric can fail entirely with no visible glitch. This is a receiver-side function, not a switch function.

## Discovery — NMOS IS-04

Nodes register themselves with a registry, advertising their senders and receivers. This is how a control system knows what exists on the network. Without it you are managing multicast addresses in a spreadsheet.

## Connection — NMOS IS-05

Actually making a route. The controller tells a receiver which sender to subscribe to, typically handing over SDP data that describes the stream format. IS-04 tells you what is out there; IS-05 connects it.

## The rest of the IS family

- **IS-07** Event and tally messaging.
- **IS-08** Audio channel mapping.
- **IS-09** System parameters, handed to nodes at startup.

## Multicast plumbing

Endpoints join groups with IGMP. Between switches, PIM routes multicast. In a leaf-spine plant, IGMP snooping keeps streams off ports that didn't ask for them — a misconfiguration here floods links and is a classic cause of mysterious packet loss.`
  },
  {
    title: "CTS audio math you should be able to do without thinking",
    domain: "CTS: Sound & Physics",
    body: `The exam rewards fast recall of a small number of relationships. Drill these until they're automatic.

## Distance and level

Free field, point source: every doubling of distance costs 6 dB. 80 dB at 2 m is 74 dB at 4 m, 68 dB at 8 m.

## Power and level

Doubling amplifier power gives +3 dB. Ten times the power gives +10 dB, which is roughly a doubling of perceived loudness. Note the mismatch: buying twice the amp does not sound twice as loud.

## Gain before feedback

Potential Acoustic Gain improves when the talker is closer to the mic and the loudspeaker is farther from the mic. Each doubling of open microphones costs 3 dB, so a system with 8 open mics has 9 dB less headroom than the same system with one.

## Wavelength

Wavelength = 343 ÷ frequency in meters. 100 Hz is about 3.4 m, 1 kHz is about 0.34 m, 10 kHz is about 3.4 cm. This is what tells you whether a room feature will act as a reflector or be transparent.

## Delay and perception

Arrivals within roughly 30 ms fuse with the direct sound and are localized to the first arrival. This is why delay speakers are time-aligned rather than just level-matched.`
  },
  {
    title: "Power, grounding, and the site survey",
    domain: "CTS: Electrical & Site Survey",
    body: `## The arithmetic

P = V × I. To get current, divide watts by volts. Three racks at 480 W each on 120 V draw 1440 ÷ 120 = 12 A.

Then derate. Continuous loads are limited to 80% of the breaker rating, so a 20 A circuit supports 16 A continuous and a 15 A circuit supports 12 A. Sizing to the breaker rating instead of the derated figure is the standard trap.

## Grounding

A ground loop happens when two pieces of equipment reference different ground potentials and a signal cable completes the circuit. The hum you hear is current flowing through the shield.

Correct fixes: convert the run to balanced so the differential input rejects the common-mode voltage, insert an isolation transformer, or bring both devices onto the same technical power source. Lifting the safety ground is not a fix — it is a shock hazard and a code violation, no matter how well it works.

## What to capture on survey

Circuit inventory and available capacity, panel locations and distances, existing conduit and pathway capacity, ceiling type and height, HVAC noise floor, ambient light on display surfaces, and sight lines. Missing any of these is what generates change orders later, which puts you back in project management territory.`
  },
  {
    title: "How to use this app",
    domain: "Reference",
    body: `## Modes

**Exam** gives you a fixed 10-question set and scores it like the real thing. **Practice** runs the whole bank, shuffled, with explanations after every answer. Both write to your all-time record.

**Weak spots** builds a session from the domains where your accuracy is lowest. Use it once you have 30 or 40 questions of history and the numbers mean something.

**Flashcards** use Leitner boxes. A card you get right moves to a higher box and comes back less often; a card you miss drops to box 1 and returns immediately. Recall practice beats rereading.

## Your record

Everything is stored in your browser, on this device, under this site's address. It survives closing the tab and restarting the phone. It does not survive clearing site data, and it does not sync between your phone and your laptop.

So back it up. The dashboard has Export progress, which downloads a small JSON file, and Import progress, which restores one. Export before you clear anything, and use export/import to move your history between devices.`
  }


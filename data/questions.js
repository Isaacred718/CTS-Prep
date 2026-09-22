// Merged CTS question bank — built from CTS-Prep, cts-study, and new content.
// Every entry: { domain, q, options[4], correct (index), explanation }
// Generated 2026-09-22 — 172 questions.
const QUESTIONS = [
  {
    "domain": "CTS: Project Management",
    "q": "When addressing scope creep during installation, what formal document must be submitted to and approved by the client?",
    "options": [
      "Field Report",
      "Change Order",
      "Certificate of Substantial Completion",
      "Punch List"
    ],
    "correct": 1,
    "explanation": "Any addition or modification to agreed scope must be documented and priced via a Change Order before work proceeds."
  },
  {
    "domain": "CTS: Project Management",
    "q": "What does the Certificate of Substantial Completion establish on an AV project?",
    "options": [
      "That every punch list item has been closed out",
      "That the system is usable for its intended purpose, starting warranty and closeout clocks",
      "That the client has paid the final invoice",
      "That commissioning has not yet begun"
    ],
    "correct": 1,
    "explanation": "Substantial completion means the owner can use the system for its intended purpose. Minor punch list items may remain open; warranty periods and final payment terms typically start here."
  },
  {
    "domain": "CTS: Project Management",
    "q": "In a project schedule, what does the critical path represent?",
    "options": [
      "The tasks with the highest budget",
      "The longest sequence of dependent tasks, which sets the minimum project duration",
      "The tasks assigned to the lead technician",
      "The shortest route through the task list"
    ],
    "correct": 1,
    "explanation": "The critical path is the longest chain of dependent tasks. Any delay on it delays the whole project; tasks off it have float."
  },
  {
    "domain": "CTS: Sound & Physics",
    "q": "A speaker produces 80 dB SPL at 2 meters. What is the SPL at 4 meters in a free field?",
    "options": [
      "77 dB SPL",
      "74 dB SPL",
      "70 dB SPL",
      "68 dB SPL"
    ],
    "correct": 1,
    "explanation": "Inverse Square Law: doubling distance from a point source in a free field drops SPL by 6 dB. 80 − 6 = 74."
  },
  {
    "domain": "CTS: Sound & Physics",
    "q": "Doubling the electrical power to a loudspeaker produces roughly what change in SPL?",
    "options": [
      "+2 dB",
      "+3 dB",
      "+6 dB",
      "+10 dB"
    ],
    "correct": 1,
    "explanation": "Doubling power is +3 dB. Doubling perceived loudness takes roughly +10 dB, which is ten times the power."
  },
  {
    "domain": "CTS: Sound & Physics",
    "q": "What is the approximate wavelength of a 1 kHz tone in air at room temperature?",
    "options": [
      "0.034 m",
      "0.34 m",
      "3.4 m",
      "34 m"
    ],
    "correct": 1,
    "explanation": "Wavelength = speed / frequency. 343 m/s ÷ 1000 Hz ≈ 0.34 m."
  },
  {
    "domain": "CTS: Sound & Physics",
    "q": "Per the Potential Acoustic Gain concept, what is the most effective way to increase gain before feedback?",
    "options": [
      "Increase amplifier headroom",
      "Move the microphone closer to the talker and the loudspeaker farther from the mic",
      "Add more open microphones",
      "Raise the system EQ at the feedback frequency"
    ],
    "correct": 1,
    "explanation": "PAG/NAG is governed by distances. Shortening talker-to-mic distance and lengthening loudspeaker-to-mic distance both raise gain before feedback. Each doubling of open mics costs 3 dB."
  },
  {
    "domain": "CTS: AVIXA Standards",
    "q": "Under AVIXA V201.01, what minimum contrast ratio is recommended for Basic Decision Making content?",
    "options": [
      "7:1",
      "15:1",
      "50:1",
      "80:1"
    ],
    "correct": 1,
    "explanation": "V201.01 specifies 15:1 for Basic Decision Making. Passive viewing is 7:1, Analytical Decision Making is 80:1."
  },
  {
    "domain": "CTS: AVIXA Standards",
    "q": "Which AVIXA standard defines Display Image Size for 2D content in viewing environments?",
    "options": [
      "V201.01",
      "DISCAS (V202.01)",
      "A102.01",
      "F501.01"
    ],
    "correct": 1,
    "explanation": "DISCAS — Display Image Size for 2D Content in Audiovisual Systems — derives image height from farthest viewer distance and content element height."
  },
  {
    "domain": "CTS: AVIXA Standards",
    "q": "What does AVIXA A102.01 govern?",
    "options": [
      "Audio coverage uniformity in listener areas",
      "Rack building and cable dressing",
      "Projector lamp replacement intervals",
      "Network switch configuration"
    ],
    "correct": 0,
    "explanation": "A102.01, Audio Coverage Uniformity, sets tolerances for how evenly sound pressure level is distributed across a listener area."
  },
  {
    "domain": "CTS: Electrical & Site Survey",
    "q": "What is the total current draw of three 120V racks if each draws 480 Watts?",
    "options": [
      "4 Amps",
      "12 Amps",
      "16 Amps",
      "20 Amps"
    ],
    "correct": 1,
    "explanation": "P = V × I. Total = 1440W. 1440 ÷ 120 = 12 Amps."
  },
  {
    "domain": "CTS: Electrical & Site Survey",
    "q": "What is the continuous load limit on a 20A branch circuit under standard derating practice?",
    "options": [
      "12 A",
      "16 A",
      "18 A",
      "20 A"
    ],
    "correct": 1,
    "explanation": "Continuous loads are limited to 80% of the breaker rating. 20 × 0.8 = 16 A."
  },
  {
    "domain": "CTS: Electrical & Site Survey",
    "q": "A ground loop hum in an unbalanced audio run is best resolved by which approach?",
    "options": [
      "Lifting the safety ground on the equipment chassis",
      "Inserting an isolation transformer or converting the run to balanced",
      "Increasing gain at the mixer input",
      "Using a longer cable run"
    ],
    "correct": 1,
    "explanation": "Never lift a safety ground — it is a life-safety hazard. Break the loop galvanically with an isolation transformer, or move to a balanced connection with differential rejection."
  },
  {
    "domain": "CTS: Video & Signal",
    "q": "What is the approximate uncompressed bit rate of 1080p59.94 video at 4:2:2, 10-bit?",
    "options": [
      "1.5 Gbps",
      "3 Gbps",
      "6 Gbps",
      "12 Gbps"
    ],
    "correct": 1,
    "explanation": "1080p at 59.94 fps needs roughly 3 Gbps, which is why it maps to 3G-SDI. 1080i59.94 fits in 1.5G-SDI."
  },
  {
    "domain": "CTS: Video & Signal",
    "q": "In HDCP, what is the practical consequence of a repeater exceeding its device or depth limit?",
    "options": [
      "Video downgrades to standard definition",
      "Authentication fails and downstream displays go blank or show an error",
      "Audio drops but video continues",
      "The signal converts to analog automatically"
    ],
    "correct": 1,
    "explanation": "HDCP repeaters have finite device counts and cascade depth. Exceeding either breaks authentication, and the sink shows black or an HDCP error rather than degrading gracefully."
  },
  {
    "domain": "CTS: Video & Signal",
    "q": "What does EDID communicate in an HDMI link?",
    "options": [
      "The encryption keys for content protection",
      "The sink's supported resolutions, timings, and audio formats to the source",
      "The physical cable length",
      "The IP address of the display"
    ],
    "correct": 1,
    "explanation": "Extended Display Identification Data lets the display tell the source what it can accept. Bad or missing EDID is a common cause of no-sync and wrong-resolution faults."
  },
  {
    "domain": "Advanced: ST 2110 Suite",
    "q": "Which protocol does SMPTE ST 2110-10 leverage for microsecond-level synchronization across IP media networks?",
    "options": [
      "NTP",
      "PTP / IEEE 1588 (ST 2059-2)",
      "PTP v1 / IEEE 1394",
      "RTCP Sender Reports"
    ],
    "correct": 1,
    "explanation": "ST 2110-10 relies on Precision Time Protocol v2 under the SMPTE ST 2059-2 profile for frame-accurate sync over IP."
  },
  {
    "domain": "Advanced: ST 2110 Suite",
    "q": "Which sub-standard governs transport of PCM digital audio streams?",
    "options": [
      "ST 2110-10",
      "ST 2110-20",
      "ST 2110-30",
      "ST 2110-40"
    ],
    "correct": 2,
    "explanation": "ST 2110-30 carries uncompressed PCM audio based on AES67. -20 is video, -40 is ancillary data."
  },
  {
    "domain": "Advanced: ST 2110 Suite",
    "q": "What is the defining architectural change ST 2110 makes relative to ST 2022-6?",
    "options": [
      "It compresses video to reduce bandwidth",
      "It carries video, audio, and ancillary data as separate essence streams rather than one encapsulated SDI signal",
      "It replaces PTP with NTP",
      "It requires fiber rather than copper"
    ],
    "correct": 1,
    "explanation": "ST 2022-6 wraps a whole SDI signal in IP. ST 2110 splits essences into independent streams that can be routed, shuffled, and processed separately."
  },
  {
    "domain": "Advanced: ST 2110 Suite",
    "q": "What does ST 2110-21 define?",
    "options": [
      "Ancillary data mapping",
      "Traffic shaping and sender timing models (narrow, narrow linear, wide)",
      "Audio channel counts",
      "Stream encryption"
    ],
    "correct": 1,
    "explanation": "ST 2110-21 specifies sender packet pacing so receivers can size buffers. Narrow senders pace tightly to the video timing; wide senders are burstier and demand more receiver buffer."
  },
  {
    "domain": "Advanced: ST 2110 Suite",
    "q": "How does a receiver handle duplicate streams under SMPTE ST 2022-7?",
    "options": [
      "It averages both streams to clean up jitter",
      "It performs packet-by-packet hitless merge using RTP sequence numbers",
      "It drops the secondary unless link failure occurs",
      "It converts both to SDI before combining"
    ],
    "correct": 1,
    "explanation": "ST 2022-7 reconstructs an uninterrupted stream from identical RTP sequence numbers arriving on two independent network fabrics, so a fabric failure causes no visible glitch."
  },
  {
    "domain": "Advanced: ST 2110 Suite",
    "q": "Which AMWA NMOS specification handles discovery and registration of media nodes?",
    "options": [
      "IS-04",
      "IS-05",
      "IS-08",
      "IS-09"
    ],
    "correct": 0,
    "explanation": "IS-04 is Discovery and Registration. IS-05 is Connection Management, IS-08 is audio channel mapping, IS-09 is system parameters."
  },
  {
    "domain": "Advanced: ST 2110 Suite",
    "q": "What protocol do receiver endpoints use to join an active IP multicast stream?",
    "options": [
      "PIM-SM",
      "IGMP",
      "OSPF",
      "LLDP"
    ],
    "correct": 1,
    "explanation": "Endpoints send IGMP Join and Leave messages to the local switch to subscribe to multicast group addresses. PIM handles multicast routing between switches upstream of that."
  },
  {
    "domain": "Advanced: ST 2110 Suite",
    "q": "In a PTP domain, what is the role of the Boundary Clock in a leaf-spine media network?",
    "options": [
      "It generates the master reference from GPS",
      "It terminates PTP on one port and regenerates timing to downstream devices, reducing load and jitter on the grandmaster",
      "It converts PTP to NTP for legacy gear",
      "It measures multicast bandwidth"
    ],
    "correct": 1,
    "explanation": "A Boundary Clock syncs to the upstream grandmaster and acts as master to devices below it, which scales PTP distribution and limits accumulated jitter."
  },
  {
    "domain": "Advanced: ST 2110 Suite",
    "q": "What does SDP (Session Description Protocol) provide in an ST 2110 workflow?",
    "options": [
      "Encryption of the media payload",
      "The stream's multicast address, port, payload type, and format parameters that let a receiver interpret it",
      "The physical patch record of the facility",
      "Automatic switch configuration"
    ],
    "correct": 1,
    "explanation": "The SDP file is the contract describing a stream. NMOS IS-05 typically hands SDP data to the receiver during connection management."
  },
  {
    "domain": "Advanced: Dante & AES67",
    "q": "What is the relationship between Dante and AES67?",
    "options": [
      "They are the same protocol under different names",
      "Dante can operate in an AES67 mode to interoperate, but its native transport and discovery differ",
      "AES67 is a licensed subset of Dante",
      "They cannot interoperate under any conditions"
    ],
    "correct": 1,
    "explanation": "Dante is a proprietary ecosystem with its own discovery and clocking. Enabling AES67 mode exposes standards-based multicast streams that other AES67 devices can subscribe to, with constraints on sample rate and packet time."
  },
  {
    "domain": "Advanced: Dante & AES67",
    "q": "In a Dante network, what does the Leader clock (formerly Master) provide?",
    "options": [
      "Routing of audio subscriptions",
      "The PTP reference all devices sync their sample clocks to",
      "Gain staging across the network",
      "Device naming"
    ],
    "correct": 1,
    "explanation": "Dante elects a Leader clock by PTP. All devices word-clock to it, which is what allows sample-accurate playout across the network."
  },
  {
    "domain": "CTS: Video & Signal",
    "q": "When calculating the distance for a projector, what does 'Throw Ratio' represent?",
    "options": [
      "The ratio of image width to screen height",
      "The ratio of the distance from the lens to the screen versus the image width",
      "The ratio of lumens to square footage",
      "The ratio of contrast to brightness"
    ],
    "correct": 1,
    "explanation": "Throw Ratio = Distance / Width. A 1.5:1 throw means the projector must be 1.5 times the image width away from the screen."
  },
  {
    "domain": "CTS: Video & Signal",
    "q": "Which color space is the industry standard for HD video transmission and represents the primary colors of Red, Green, and Blue?",
    "options": [
      "YPbPr",
      "RGB",
      "YCbCr",
      "CMYK"
    ],
    "correct": 1,
    "explanation": "RGB is the primary color model used for displays and cameras. YCbCr (or YPbPr) is used for transmission to save bandwidth by separating luminance from chrominance."
  },
  {
    "domain": "CTS: Video & Signal",
    "q": "In a projection system, what is the primary cause of 'Keystone' distortion?",
    "options": [
      "Incorrect resolution settings",
      "The projector being tilted relative to the screen plane",
      "Using a lens with too short a throw",
      "Insufficient lumens for the ambient light"
    ],
    "correct": 1,
    "explanation": "Keystoning occurs when the projector is not perpendicular to the screen, causing the image to appear as a trapezoid."
  },
  {
    "domain": "CTS: Sound & Physics",
    "q": "What is the primary purpose of a 'Bass Trap' in a room's acoustic treatment?",
    "options": [
      "To increase the volume of low frequencies",
      "To absorb low-frequency standing waves typically found in corners",
      "To reflect high frequencies back into the room",
      "To prevent sound from leaking into adjacent rooms"
    ],
    "correct": 1,
    "explanation": "Low frequencies have long wavelengths and accumulate in corners. Bass traps are designed to absorb these specific frequencies to reduce 'boominess'."
  },
  {
    "domain": "CTS: Sound & Physics",
    "q": "A microphone with a 'Cardioid' polar pattern is most sensitive to sound arriving from which direction?",
    "options": [
      "The rear",
      "The sides",
      "The front (0 degrees)",
      "All directions equally"
    ],
    "correct": 2,
    "explanation": "Cardioid (heart-shaped) mics are most sensitive to the front and reject sound from the rear, making them ideal for reducing feedback from monitors."
  },
  {
    "domain": "CTS: Sound & Physics",
    "q": "What does RT60 refer to in room acoustics?",
    "options": [
      "The time it takes for sound to travel 60 meters",
      "The time it takes for a sound to decay by 60 decibels",
      "The time it takes for sound to decay by 60% of its original level",
      "The frequency response of a room at 60Hz"
    ],
    "correct": 1,
    "explanation": "RT60 (Reverberation Time) is the time required for the sound pressure level to drop 60 dB after the source has stopped."
  },
  {
    "domain": "CTS: AVIXA Standards",
    "q": "According to the DISCAS standard, the 'Minimum Content Element' is determined by what?",
    "options": [
      "The brightness of the projector",
      "The distance to the farthest viewer",
      "The aspect ratio of the screen",
      "The contrast ratio of the image"
    ],
    "correct": 1,
    "explanation": "DISCAS uses the farthest viewer distance to calculate how large the smallest critical piece of information (the content element) must be to be legible."
  },
  {
    "domain": "CTS: Project Management",
    "q": "What is the primary goal of 'Commissioning' in an AV installation?",
    "options": [
      "To finish the punch list",
      "To verify that the system performs according to the design intent and specifications",
      "To train the end user on how to use the system",
      "To collect the final payment from the client"
    ],
    "correct": 1,
    "explanation": "Commissioning is the formal process of testing and documenting that every system function works as specified in the original design."
  },
  {
    "domain": "CTS: Electrical & Site Survey",
    "q": "When performing a site survey, why is it critical to identify the 'HVAC noise floor'?",
    "options": [
      "To determine if the AC is powerful enough to cool the racks",
      "To ensure the audio system's signal-to-noise ratio is sufficient for speech intelligibility",
      "To calculate the electrical load of the room",
      "To check for potential water leaks from the ceiling"
    ],
    "correct": 1,
    "explanation": "If the background noise (HVAC) is too high, the audio system must be louder to be heard, which can increase the risk of feedback and reduce clarity."
  },
  {
    "domain": "CTS: Sound & Physics",
    "q": "What is the standard impedance of professional audio equipment?",
    "options": [
      "75 ohms",
      "50 ohms",
      "600 ohms",
      "300 ohms"
    ],
    "correct": 2,
    "explanation": "Legacy professional audio gear was designed around 600-ohm circuits, a standard inherited from telephone networks. Matching impedances was once critical for maximum power transfer; modern bridging inputs just need to be at least 10x the source impedance. On the exam, 600 ohms is the answer they expect for professional audio impedance."
  },
  {
    "domain": "CTS: Video & Signal",
    "q": "Which video resolution is considered 4K UHD?",
    "options": [
      "1920x1080",
      "2560x1440",
      "3840x2160",
      "4096x2160"
    ],
    "correct": 2,
    "explanation": "4K UHD is 3840x2160 pixels — exactly twice the width and height of 1080p HD (1920x1080), so four times the pixels. Don't confuse it with 4K DCI (4096x2160), the digital cinema variant that is slightly wider. UHD is the consumer/AV-industry standard; DCI is for movie production."
  },
  {
    "domain": "CTS: Sound & Physics",
    "q": "What does SPL stand for?",
    "options": [
      "Sound Power Level",
      "Sound Pressure Level",
      "Signal Processing Level",
      "Speaker Performance Level"
    ],
    "correct": 1,
    "explanation": "SPL stands for Sound Pressure Level, measured in decibels relative to the threshold of human hearing (20 micropascals, defined as 0 dB SPL). It describes acoustic pressure in air, unlike dBu or dBV which describe electrical signal levels. Almost every audio measurement question on the exam ties back to SPL."
  },
  {
    "domain": "CTS: Video & Signal",
    "q": "Which conductor construction is used inside a standard copper HDMI cable?",
    "options": [
      "Coaxial conductors",
      "Twisted pairs",
      "Ribbon cable",
      "Single solid wire"
    ],
    "correct": 1,
    "explanation": "Standard copper HDMI cables are built from multiple shielded twisted pairs that carry the high-speed TMDS data, plus separate conductors for control and power. The twisted-pair construction rejects electromagnetic interference, which is essential at HDMI data rates. Fiber-optic HDMI exists too, but it converts the signal to light for long runs rather than being the standard copper construction."
  },
  {
    "domain": "CTS: Video & Signal",
    "q": "What is the refresh rate of standard NTSC video?",
    "options": [
      "25 Hz",
      "30 Hz",
      "50 Hz",
      "59.94 Hz"
    ],
    "correct": 3,
    "explanation": "NTSC analog video refreshes at 59.94 Hz (often rounded to 60 Hz) — the odd fraction comes from a 1953 tweak that prevented the color subcarrier from interfering with the audio carrier. PAL/SECAM regions standardized on 50 Hz tied to their mains frequency. For digital formats this lives on as 59.94 fps and 29.97 fps frame rates."
  },
  {
    "domain": "CTS: Control Systems",
    "q": "Which protocol is used for lighting control?",
    "options": [
      "DMX512",
      "MIDI",
      "RS-232",
      "TCP/IP"
    ],
    "correct": 0,
    "explanation": "DMX512 is the industry-standard digital protocol for stage and architectural lighting control, carrying up to 512 channels (one universe) of dimmer/control values. It uses RS-485-based differential signaling over 120-ohm twisted pair. MIDI is for musical instruments, RS-232 is general serial control — DMX512 is purpose-built for lighting."
  },
  {
    "domain": "CTS: AV Networking",
    "q": "Maximum cable length for Cat6 Ethernet?",
    "options": [
      "50 meters",
      "100 meters",
      "150 meters",
      "200 meters"
    ],
    "correct": 1,
    "explanation": "The TIA/EIA standard limits copper Ethernet runs (Cat5e, Cat6, Cat6a) to 100 meters total channel length, including patch cords and 90 meters of horizontal cable. Beyond that, attenuation and timing make the link unreliable. Longer runs need fiber or an intermediate switch as a repeater."
  },
  {
    "domain": "CTS: Sound & Physics",
    "q": "Which frequency range is mid-range audio?",
    "options": [
      "20-200 Hz",
      "200-2000 Hz",
      "2-20 kHz",
      "Above 20 kHz"
    ],
    "correct": 1,
    "explanation": "The midrange band (roughly 200 Hz to 2 kHz) carries most speech intelligibility and the presence region of many instruments. This is where the ear is most sensitive, so intelligibility specs and EQ problems concentrate here. Low frequencies are below it (20-200 Hz); highs extend from about 2 kHz to 20 kHz."
  },
  {
    "domain": "CTS: Video & Signal",
    "q": "What does EDID stand for?",
    "options": [
      "Enhanced Display Identification Data",
      "Extended Display Information Data",
      "Electronic Display Interface Data",
      "Embedded Display ID Data"
    ],
    "correct": 0,
    "explanation": "EDID (Extended Display Identification Data) is the data block a display sends back to the source over HDMI/DisplayPort, reporting its supported resolutions, refresh rates, and audio capabilities. Missing or corrupted EDID is one of the most common causes of 'no image' or wrong-resolution faults on site. The source reads EDID to pick a compatible output format automatically."
  },
  {
    "domain": "CTS: Sound & Physics",
    "q": "Standard connector for professional microphones?",
    "options": [
      "1/4 inch TRS",
      "RCA",
      "XLR",
      "3.5mm"
    ],
    "correct": 2,
    "explanation": "The 3-pin XLR is the professional standard for balanced microphone connections: pins 1-3 carry ground, hot, and cold, with the balanced pair canceling induced noise over long runs. It also carries 48V phantom power for condenser mics. RCA and 3.5mm connectors are consumer/unbalanced; 1/4-inch TRS can be balanced but XLR is the mic standard."
  },
  {
    "domain": "CTS: Video & Signal",
    "q": "Standard frame rate for film?",
    "options": [
      "23.976 fps",
      "24 fps",
      "25 fps",
      "30 fps"
    ],
    "correct": 1,
    "explanation": "Motion picture film standardized on 24 frames per second, a rate chosen early in the sound era as the slowest (cheapest) rate that still produced smooth motion. Digital cinema keeps 24 fps (often 23.976 for broadcast compatibility), which is why pulldown conversion exists to fit 24p content into 60 Hz video systems."
  },
  {
    "domain": "CTS: Video & Signal",
    "q": "Technology for simultaneous multi-source display?",
    "options": [
      "Scaling",
      "Switching",
      "Windowing",
      "Routing"
    ],
    "correct": 2,
    "explanation": "Windowing lets a display or videowall processor show multiple sources simultaneously, each scaled into its own resizable window on one screen. It differs from simple switching (one source at a time) or a fixed multiviewer layout because windows can be sized and positioned freely. Control rooms and collaboration spaces rely on it heavily."
  },
  {
    "domain": "CTS: Sound & Physics",
    "q": "Mixing console mic input impedance?",
    "options": [
      "600 ohms",
      "1k ohm",
      "2k ohms",
      "10k ohms"
    ],
    "correct": 2,
    "explanation": "Professional console mic preamps present about 2k ohms (2,000 ohms) of input impedance — roughly ten times the ~150-200 ohm source impedance of a typical dynamic mic. This 'bridging' ratio transfers voltage efficiently without loading the microphone. Lower impedance would load the mic and dull the sound; the 10:1 rule is the design principle behind it."
  },
  {
    "domain": "CTS: Video & Signal",
    "q": "Highest color depth video format?",
    "options": [
      "RGB",
      "YUV 4:2:0",
      "YUV 4:2:2",
      "YUV 4:4:4"
    ],
    "correct": 3,
    "explanation": "4:4:4 chroma subsampling keeps full color resolution for every pixel — no chroma is discarded, unlike 4:2:2 (half horizontal color resolution) or 4:2:0 (quarter). That makes 4:4:4 the best choice for text, graphics, and color-critical content where subsampled color would blur edges. It costs more bandwidth, which is why video distribution often uses 4:2:0 instead."
  },
  {
    "domain": "CTS: AV Networking",
    "q": "T568A/B 'T' stands for?",
    "options": [
      "Telephone",
      "Twisted",
      "Termination",
      "Telecommunications"
    ],
    "correct": 3,
    "explanation": "T568A and T568B are the two standard twisted-pair termination schemes, and the 'T' stands for Telecommunications (from the TIA — Telecommunications Industry Association — standards). The only difference between them is which color pairs land on pins 1-2 versus 3-6. What matters on the job is using the same scheme at both ends, or a proper crossover when needed."
  },
  {
    "domain": "CTS: Sound & Physics",
    "q": "Audio connector providing phantom power?",
    "options": [
      "1/4 inch TS",
      "RCA",
      "XLR",
      "3.5mm TRS"
    ],
    "correct": 2,
    "explanation": "XLR connectors carry phantom power: 48V DC applied equally to pins 2 and 3 relative to pin 1 (ground), so condenser microphone capsules get power without disturbing the balanced audio signal. Dynamic mics simply ignore it. This is why phantom power only appears on mic inputs with XLRs — RCA, TS, and 3.5mm connectors don't support it."
  },
  {
    "domain": "CTS: Sound & Physics",
    "q": "Standard phantom power voltage?",
    "options": [
      "12V",
      "24V",
      "48V",
      "60V"
    ],
    "correct": 2,
    "explanation": "The professional phantom power standard is 48V DC (P48), with a tolerance of ±4V, supplied through 6.81k-ohm feed resistors. Lower variants (12V, 24V) exist for battery-powered gear but 48V is the studio/console standard. Most condenser mics are designed around it, though many tolerate a range."
  },
  {
    "domain": "CTS: Sound & Physics",
    "q": "Wireless microphone transmission technology?",
    "options": [
      "AM",
      "FM",
      "Digital spread spectrum",
      "All"
    ],
    "correct": 3,
    "explanation": "Modern wireless microphone systems use several transmission technologies — analog FM, digital, and digital spread-spectrum — chosen for range, audio quality, and RF congestion. No single technology covers every use case, so the exam answer is 'all of the above.' What matters more in practice is frequency coordination: avoiding TV bands, intermodulation, and other wireless devices in the venue."
  },
  {
    "domain": "CTS: Sound & Physics",
    "q": "Purpose of DI box?",
    "options": [
      "Amplify signals",
      "Convert impedance",
      "Add effects",
      "Record audio"
    ],
    "correct": 1,
    "explanation": "A DI (direct injection) box converts a high-impedance, unbalanced instrument signal (guitar, keyboard) into a low-impedance, balanced mic-level signal that can run long distances to a console. It does this with a transformer or active buffer. Without it, the long cable run would pick up noise and lose high frequencies."
  },
  {
    "domain": "Advanced: Dante & AES67",
    "q": "Protocol for digital audio over IP?",
    "options": [
      "AES/EBU",
      "SPDIF",
      "Dante",
      "MADI"
    ],
    "correct": 2,
    "explanation": "Dante, developed by Audinate, is the dominant protocol for transporting digital audio over standard IP/Ethernet networks, replacing racks of analog multicore cable with a single network. It uses IP networking with PTP clocking so every device stays sample-accurate. AES67 is the open interoperability standard; Dante devices can speak AES67 mode to talk to non-Dante gear."
  },
  {
    "domain": "CTS: Sound & Physics",
    "q": "CD audio bit depth?",
    "options": [
      "8 bits",
      "16 bits",
      "24 bits",
      "32 bits"
    ],
    "correct": 1,
    "explanation": "The CD Red Book standard specifies 16-bit audio at a 44.1 kHz sample rate — 16 bits gives ~96 dB of theoretical dynamic range. Professional production moved to 24-bit (144 dB theoretical) for more headroom during mixing, though delivery is still often 16-bit. Bit depth sets dynamic range; sample rate sets the highest reproducible frequency."
  },
  {
    "domain": "CTS: Video & Signal",
    "q": "Highest bandwidth video interface?",
    "options": [
      "HDMI 1.4",
      "HDMI 2.0",
      "HDMI 2.1",
      "DisplayPort 1.4"
    ],
    "correct": 2,
    "explanation": "HDMI 2.1 raises the maximum throughput to 48 Gbps (up from 18 Gbps in HDMI 2.0), enabling uncompressed 4K at 120 Hz or 8K at 60 Hz. That bandwidth requires Ultra High Speed certified cables. DisplayPort 1.4 tops out around 32.4 Gbps, so HDMI 2.1 currently leads for single-cable consumer/pro AV video transport."
  },
  {
    "domain": "CTS: Video & Signal",
    "q": "HDR stands for?",
    "options": [
      "High Definition Resolution",
      "High Dynamic Range",
      "High Data Rate",
      "High Display Refresh"
    ],
    "correct": 1,
    "explanation": "HDR (High Dynamic Range) expands the range between the darkest black and brightest white a display can reproduce, along with wider color, for a more lifelike image. It is metadata-driven: the source tells the display how to tone-map each scene (HDR10, Dolby Vision, HLG). Resolution (pixel count) and dynamic range are independent — a 1080p HDR image can look better than 4K SDR."
  },
  {
    "domain": "CTS: Sound & Physics",
    "q": "Acoustic treatment that absorbs sound?",
    "options": [
      "Diffusion panels",
      "Acoustic foam",
      "Reflective surfaces",
      "Hard surfaces"
    ],
    "correct": 1,
    "explanation": "Absorptive treatments like acoustic foam convert sound energy into heat through friction in the porous material, reducing reflections and reverberation. Diffusion panels scatter sound instead of absorbing it, and hard reflective surfaces do the opposite of treatment. Foam is most effective at mid and high frequencies; bass needs thicker traps."
  },
  {
    "domain": "CTS: AVIXA Standards",
    "q": "4K display viewing distance?",
    "options": [
      "1.5× screen height",
      "2× screen height",
      "3× screen height",
      "4× screen height"
    ],
    "correct": 0,
    "explanation": "For detailed 4K UHD content, design guidance puts the optimal viewing distance around 1.5 times the image height — close enough that the eye can actually resolve the extra pixels, per AVIXA DISCAS viewing-distance principles. Sit much farther and the eye can't distinguish 4K from 1080p, wasting the resolution. Farther viewing (3x height or more) is for passive viewing where detail doesn't matter."
  },
  {
    "domain": "CTS: AV Networking",
    "q": "Network topology with most redundancy?",
    "options": [
      "Star",
      "Ring",
      "Mesh",
      "Bus"
    ],
    "correct": 2,
    "explanation": "In a mesh topology every node connects to multiple others, so traffic can reroute around any single failed link or node — the most redundant option. Star depends on one central switch, ring breaks if one link fails, and bus fails entirely with one break. Mesh costs more cabling and complexity, which is why AV networks usually use redundant star (core/distribution) instead of full mesh."
  },
  {
    "domain": "CTS: Video & Signal",
    "q": "Purpose of matrix switcher?",
    "options": [
      "Amplify signals",
      "Route any input to any output",
      "Convert formats",
      "Store content"
    ],
    "correct": 1,
    "explanation": "A matrix switcher routes any input to any output (or multiple outputs) independently — e.g., an 8x8 matrix can send any of 8 sources to any of 8 displays. That 'any-to-any' routing is the defining feature, versus a simple switcher that shows one source at a time. Amplifiers, format converters, and storage are separate device categories."
  },
  {
    "domain": "CTS: Sound & Physics",
    "q": "Speaker sensitivity measurement?",
    "options": [
      "Watts",
      "Ohms",
      "dB SPL/W/m",
      "Hertz"
    ],
    "correct": 2,
    "explanation": "Speaker sensitivity is specified as dB SPL measured at 1 watt of input power from 1 meter away (dB SPL/W/m), telling you how efficiently the speaker converts power into sound. A speaker rated 90 dB/W/m needs half the amplifier power of one rated 87 dB/W/m for the same output. Watts, ohms, and hertz describe other things entirely — sensitivity is always an SPL figure."
  },
  {
    "domain": "CTS: Video & Signal",
    "q": "VSWR measures?",
    "options": [
      "Power output",
      "Signal strength",
      "Impedance matching",
      "Frequency response"
    ],
    "correct": 2,
    "explanation": "VSWR (Voltage Standing Wave Ratio) measures how well a transmission line's impedance matches its load — a 1:1 ratio means all power transfers, while higher ratios mean energy reflects back toward the source. It's most relevant in RF work (antennas, wireless mic systems, cable TV distribution). A high VSWR on a wireless mic antenna wastes transmit power and can damage the transmitter."
  },
  {
    "domain": "CTS: Video & Signal",
    "q": "Best codec for 4K?",
    "options": [
      "H.264",
      "H.265/HEVC",
      "MJPEG",
      "DV"
    ],
    "correct": 1,
    "explanation": "H.265/HEVC (High Efficiency Video Coding) compresses video roughly twice as efficiently as H.264, delivering the same quality at about half the bitrate — which is what makes 4K streaming practical over real-world internet connections. The tradeoff is heavier encoding/decoding computation, so it needs newer hardware. MJPEG and DV are older, far less efficient codecs."
  },
  {
    "domain": "CTS: Video & Signal",
    "q": "Standard daylight color temperature?",
    "options": [
      "3200K",
      "5600K",
      "6500K",
      "9300K"
    ],
    "correct": 2,
    "explanation": "The daylight/overcast reference white point is D65, standardized at 6500K, and it is the calibration target for video displays and reference monitors. 3200K is tungsten (indoor lighting), 5600K is direct sun/electronic flash, and 9300K is an old cool-white monitor preset. If a display looks too blue or too orange, its white point is off D65."
  },
  {
    "domain": "CTS: Electrical & Site Survey",
    "q": "Best EMI cable shielding?",
    "options": [
      "Unshielded",
      "Foil",
      "Braided",
      "Quad shield"
    ],
    "correct": 3,
    "explanation": "Quad-shield cable (two foil layers plus two braided layers) gives the strongest protection against electromagnetic interference, combining foil's full coverage with braid's low-frequency effectiveness and durability. Single foil or single braid each cover different interference types, so stacking them wins. Use quad shield for long runs near lighting dimmers, motors, or RF sources."
  },
  {
    "domain": "CTS: Sound & Physics",
    "q": "Crossover purpose?",
    "options": [
      "Amplify signals",
      "Divide frequency ranges",
      "Match impedance",
      "Provide power"
    ],
    "correct": 1,
    "explanation": "A crossover divides the audio spectrum into frequency bands and sends each band to the driver built for it — lows to the woofer, highs to the tweeter (and mids to a midrange in 3-way systems). This prevents drivers from receiving frequencies they can't reproduce cleanly. Crossovers can be passive (in the speaker cabinet) or active/DSP-based before the amplifiers."
  },
  {
    "domain": "CTS: AV Networking",
    "q": "IP camera control protocol?",
    "options": [
      "RTSP",
      "ONVIF",
      "SIP",
      "SNMP"
    ],
    "correct": 1,
    "explanation": "ONVIF is the open industry standard that lets IP cameras, encoders, and VMS/recording platforms from different manufacturers discover each other and interoperate — including PTZ camera control. RTSP is the underlying streaming protocol ONVIF often uses, but it's ONVIF that standardizes device control and management. SIP is for voice/video calls; SNMP is for network device monitoring."
  },
  {
    "domain": "CTS: AV Networking",
    "q": "Single-mode fiber transmission distance?",
    "options": [
      "2 km",
      "10 km",
      "40 km",
      "Over 100 km"
    ],
    "correct": 3,
    "explanation": "Single-mode fiber uses a tiny core that carries one light path, so it avoids modal dispersion and can span very long distances — over 100 km with proper optics and amplification. Multimode fiber's larger core is cheaper to terminate but limited to about 2 km (and far less at high data rates). Campus and inter-building AV runs use single-mode."
  },
  {
    "domain": "CTS: Sound & Physics",
    "q": "Object-based surround sound format?",
    "options": [
      "5.1",
      "7.1",
      "Dolby Atmos",
      "DTS"
    ],
    "correct": 2,
    "explanation": "Dolby Atmos is an object-based format: instead of mixing to fixed channels (like 5.1 or 7.1), sounds are treated as objects with 3D position metadata that the renderer places in the room — including overhead speakers. The playback system adapts the mix to however many speakers are installed. 5.1/7.1 are channel-based; Atmos adds the height/object dimension."
  },
  {
    "domain": "CTS: Electrical & Site Survey",
    "q": "IP rating 'P' means?",
    "options": [
      "Power",
      "Protection",
      "Performance",
      "Pressure"
    ],
    "correct": 1,
    "explanation": "In an IP (Ingress Protection) rating like IP65, the 'P' stands for Protection — protection against the ingress of solids and liquids, rated by the two digits that follow. The first digit rates solid-particle protection, the second rates liquid protection. It has nothing to do with electrical power; check IP ratings when specifying outdoor or washdown AV gear."
  },
  {
    "domain": "CTS: Video & Signal",
    "q": "Video standard with interlaced scanning?",
    "options": [
      "1080p",
      "720p",
      "1080i",
      "4K"
    ],
    "correct": 2,
    "explanation": "The 'i' in 1080i stands for interlaced: each frame is drawn as two fields, first the odd lines then the even lines, effectively halving the bandwidth versus progressive 1080p. 1080p, 720p, and 4K (as 2160p) are progressive — full frames every refresh. Interlacing is a legacy bandwidth-saving trick that can cause motion artifacts on modern displays."
  },
  {
    "domain": "CTS: Video & Signal",
    "q": "Time code purpose?",
    "options": [
      "Color correction",
      "Audio sync",
      "Frame identification",
      "Compression"
    ],
    "correct": 2,
    "explanation": "Timecode (SMPTE timecode) labels every video frame with an hours:minutes:seconds:frames address, so editors, switchers, and playback systems can identify and synchronize exact frames. It's the backbone of multi-camera sync, broadcast automation, and post-production. Color correction and compression don't need frame addresses — synchronization does."
  },
  {
    "domain": "CTS: AV Networking",
    "q": "Device discovery protocol?",
    "options": [
      "DHCP",
      "DNS",
      "Bonjour/mDNS",
      "SMTP"
    ],
    "correct": 2,
    "explanation": "Bonjour (Apple's implementation of mDNS/DNS-SD) lets AV devices discover each other on a local network with zero configuration — no DNS server needed. Many AV products (Dante, AirPlay, control systems, printers) rely on it for automatic discovery. DHCP assigns addresses and DNS resolves names, but neither provides service discovery the way mDNS does."
  },
  {
    "domain": "CTS: Video & Signal",
    "q": "Standard HDTV aspect ratio?",
    "options": [
      "4:3",
      "16:9",
      "16:10",
      "21:9"
    ],
    "correct": 1,
    "explanation": "HDTV standardized on the 16:9 widescreen aspect ratio (1920x1080), replacing the 4:3 ratio of standard-definition TV. 16:10 is a computer-display ratio and 21:9 is ultrawide cinema-style. When designing video systems, 16:9 is the default assumption for screens, switchers, and content unless the project specifies otherwise."
  },
  {
    "domain": "CTS: Sound & Physics",
    "q": "Most wind-sensitive microphone?",
    "options": [
      "Dynamic",
      "Condenser",
      "Ribbon",
      "Shotgun"
    ],
    "correct": 2,
    "explanation": "Ribbon microphones are the most wind- and blast-sensitive: their ultra-thin corrugated ribbon element can be stretched or torn by strong air movement, which is why they're always used with pop filters and kept away from wind. Condenser and shotgun mics are also wind-sensitive, but a ribbon can be physically damaged. Dynamic mics are the most rugged choice outdoors."
  },
  {
    "domain": "CTS: AV Networking",
    "q": "PoE+ provides?",
    "options": [
      "Higher voltage",
      "More power",
      "Faster data",
      "Better reliability"
    ],
    "correct": 1,
    "explanation": "PoE+ (IEEE 802.3at) delivers up to 25.5W to the powered device, versus 15.4W for standard PoE (802.3af) — the extra power supports PTZ cameras, video phones, and larger wireless access points. PoE++ (802.3bt) goes further, to 60W or 90W. Voltage stays at ~48V DC in all cases; the standards differ in available power, not voltage."
  },
  {
    "domain": "CTS: Control Systems",
    "q": "Commercial AV control protocols?",
    "options": [
      "RS-232",
      "RS-485",
      "TCP/IP",
      "All"
    ],
    "correct": 3,
    "explanation": "Commercial AV control systems speak multiple protocols because different devices need different ones: RS-232 for simple point-to-point serial control, RS-485 for longer multi-drop runs, and TCP/IP for networked devices. A single control processor typically has ports for all three. The exam wants you to know that control is multi-protocol by nature — no single standard covers everything."
  },
  {
    "domain": "CTS: Video & Signal",
    "q": "Media server purpose?",
    "options": [
      "Store/play content",
      "Control devices",
      "Route signals",
      "Amplify audio"
    ],
    "correct": 0,
    "explanation": "A media server stores and plays back audio/video content — digital signage playlists, show control timelines, projection mapping content — often with precise scheduling and synchronization across outputs. It doesn't route signals (that's a switcher) or control third-party devices (that's a control system), though high-end servers can do some of both. Think of it as the content source."
  },
  {
    "domain": "CTS: Sound & Physics",
    "q": "Wireless mic range factors?",
    "options": [
      "Battery",
      "RF power",
      "Antenna",
      "All"
    ],
    "correct": 3,
    "explanation": "Wireless microphone range depends on every link in the chain: transmitter RF power and battery condition, antenna type/placement (diversity reception), and the RF environment (interference, obstacles, competing systems). Weakening any one of them shortens usable range. That's why the exam answer is 'all of the above' — range is a system property, not one spec."
  },
  {
    "domain": "CTS: Sound & Physics",
    "q": "Professional audio sampling rate?",
    "options": [
      "44.1 kHz",
      "48 kHz",
      "96 kHz",
      "192 kHz"
    ],
    "correct": 1,
    "explanation": "48 kHz is the professional audio production standard — it syncs cleanly with video frame rates (unlike 44.1 kHz, the CD rate) and gives a Nyquist limit of 24 kHz, comfortably above human hearing. Film/video post, broadcast, and live consoles all run at 48 kHz. Higher rates (96/192 kHz) exist for recording headroom but 48 kHz is the working standard."
  },
  {
    "domain": "CTS: Video & Signal",
    "q": "Deepest black display tech?",
    "options": [
      "LCD",
      "LED",
      "OLED",
      "Plasma"
    ],
    "correct": 2,
    "explanation": "OLED produces the deepest blacks because each pixel generates its own light and can switch completely off — true zero light output, giving effectively infinite contrast. LCD/LED-LCD always has a backlight, so blacks are really dark gray from light leakage. Plasma had excellent blacks too but is discontinued; OLED is the current reference."
  },
  {
    "domain": "CTS: AV Networking",
    "q": "DHCP stands for?",
    "options": [
      "Dynamic Host Configuration Protocol",
      "Digital High-Definition Content",
      "Direct Hardware Control",
      "Distributed Host Communication"
    ],
    "correct": 0,
    "explanation": "DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses, subnet masks, gateways, and DNS servers to devices when they join a network — no manual addressing needed. Without it (or static addressing), AV devices can't communicate on IP networks. It's the reason most AV gear 'just works' when plugged into a managed network."
  },
  {
    "domain": "CTS: Sound & Physics",
    "q": "Balanced audio connector?",
    "options": [
      "1/4 inch TS",
      "RCA",
      "XLR",
      "3.5mm TRS"
    ],
    "correct": 2,
    "explanation": "XLR is the balanced audio connector: its three pins carry ground plus a differential signal pair that cancels induced hum and noise, allowing microphone cable runs of hundreds of feet. RCA and 1/4-inch TS are unbalanced; 3.5mm TRS is typically unbalanced stereo in consumer gear. On a pro job, balanced XLR is the default for mic-level runs."
  },
  {
    "domain": "CTS: Video & Signal",
    "q": "Scaler purpose?",
    "options": [
      "Change resolution",
      "Switch inputs",
      "Record video",
      "Distribute signals"
    ],
    "correct": 0,
    "explanation": "A scaler converts video from one resolution to another — e.g., scaling a 1080p laptop output up to fill a 4K display, or down to match a projector's native resolution. Good scaling preserves image quality; cheap scaling softens detail or adds latency. Switchers route sources, recorders capture them, distributors split them — scalers change their resolution."
  },
  {
    "domain": "CTS: Video & Signal",
    "q": "Best live streaming codec?",
    "options": [
      "H.264",
      "H.265",
      "MJPEG",
      "ProRes"
    ],
    "correct": 0,
    "explanation": "H.264 (AVC) remains the best-supported codec for live streaming because every device, browser, and platform decodes it in hardware with low latency — universal compatibility beats raw efficiency for live delivery. H.265 compresses better but needs more processing and has licensing friction. ProRes and MJPEG are production/editing codecs, far too heavy for streaming."
  },
  {
    "domain": "CTS: Video & Signal",
    "q": "Max HDMI length without repeaters?",
    "options": [
      "5m",
      "15m",
      "25m",
      "50m"
    ],
    "correct": 1,
    "explanation": "Passive copper HDMI is generally reliable to about 15 meters (50 feet); beyond that, signal attenuation causes dropouts, sparkles, or complete loss — especially at 4K/60 data rates. Longer runs need active optical HDMI cables (fiber), HDBaseT extenders, or AV-over-IP. Always budget an extender or fiber for in-wall runs over 15m."
  },
  {
    "domain": "CTS: Sound & Physics",
    "q": "Reverberation time factors?",
    "options": [
      "Size",
      "Shape",
      "Materials",
      "All"
    ],
    "correct": 3,
    "explanation": "Reverberation time depends on everything that shapes how sound decays in a room: its volume (size), its geometry (shape — parallel walls cause flutter echo), and its surface materials (absorption coefficients). Change any one and RT60 changes. That's why acoustic treatment starts with measuring the room, not just adding panels."
  },
  {
    "domain": "CTS: AV Networking",
    "q": "RTMP stands for?",
    "options": [
      "Real-Time Messaging Protocol",
      "Real-Time Media Protocol",
      "Remote Terminal Management",
      "Reliable Transport Media"
    ],
    "correct": 0,
    "explanation": "RTMP (Real-Time Messaging Protocol) was the long-time standard for pushing live streams from encoders to platforms (YouTube, Facebook, Twitch ingest), valued for low latency and broad support. Adobe created it for Flash; it survived Flash's death as an ingest protocol. Newer options like SRT and WebRTC exist, but RTMP ingest is still everywhere."
  },
  {
    "domain": "CTS: Sound & Physics",
    "q": "Best stereo speaker placement?",
    "options": [
      "Equilateral triangle",
      "Straight line",
      "L-shaped",
      "Random"
    ],
    "correct": 0,
    "explanation": "The classic stereo listening setup places the two speakers and the listener at the corners of an equilateral triangle, so each speaker is the same distance from the listener and from each other. This gives a centered, stable stereo image with correct phantom-center placement. Angling the speakers inward (toe-in) toward the listener completes the setup."
  },
  {
    "domain": "CTS: Sound & Physics",
    "q": "Compressor purpose?",
    "options": [
      "Increase volume",
      "Reduce dynamic range",
      "Add effects",
      "Change pitch"
    ],
    "correct": 1,
    "explanation": "A compressor reduces a signal's dynamic range by automatically turning down the loudest parts once they cross a threshold — making quiet passages more audible and loud peaks more controlled. Ratio, attack, and release shape how aggressively it works. It doesn't just 'increase volume'; makeup gain afterward restores overall level with the peaks tamed."
  },
  {
    "domain": "CTS: Video & Signal",
    "q": "Video format with alpha channel?",
    "options": [
      "MP4",
      "AVI",
      "MOV ProRes",
      "MPEG-2"
    ],
    "correct": 2,
    "explanation": "Apple ProRes in a MOV container supports an alpha (transparency) channel — the ProRes 4444 variant — making it the professional choice for graphics, lower-thirds, and overlays that need transparency. MP4/H.264 and MPEG-2 don't carry alpha. For playback systems and media servers, ProRes 4444 MOV is the standard transparent-video deliverable."
  },
  {
    "domain": "CTS: Video & Signal",
    "q": "Video signal impedance?",
    "options": [
      "50 ohms",
      "75 ohms",
      "100 ohms",
      "300 ohms"
    ],
    "correct": 1,
    "explanation": "Video/coaxial systems standardized on 75-ohm impedance (cables, connectors, terminators) — mismatching to 50-ohm RF parts causes reflections and ghosting. Ethernet twisted pair is 100 ohms; pro audio is 600 ohms nominal. On site, using proper 75-ohm BNCs and terminators (not 50-ohm) is a classic 'invisible' fix for analog video problems."
  },
  {
    "domain": "CTS: AV Networking",
    "q": "Wi-Fi frequency bands?",
    "options": [
      "900 MHz",
      "2.4 GHz",
      "5 GHz",
      "2.4 and 5 GHz"
    ],
    "correct": 3,
    "explanation": "Modern Wi-Fi operates in the 2.4 GHz band (longer range, more congestion and interference) and the 5 GHz band (faster, shorter range, more channels). Dual-band devices use both, typically preferring 5 GHz for throughput. Newer Wi-Fi 6E/7 adds 6 GHz, but 2.4 and 5 GHz remain the universal baseline every AV network design must account for."
  },
  {
    "domain": "CTS: Control Systems",
    "q": "API stands for?",
    "options": [
      "Application Programming Interface",
      "Automatic Process Integration",
      "Advanced Protocol Interface",
      "Audio Processing Interface"
    ],
    "correct": 0,
    "explanation": "API (Application Programming Interface) is the documented set of commands a device or software platform exposes so other systems — like an AV control processor — can integrate with it. Modern AV integration increasingly happens over IP APIs (REST, WebSocket) rather than serial strings. When a manufacturer publishes an API, your control system can drive their product."
  },
  {
    "domain": "CTS: Sound & Physics",
    "q": "Long audio run cable type?",
    "options": [
      "Unbalanced",
      "Balanced",
      "Digital",
      "Wireless"
    ],
    "correct": 1,
    "explanation": "Balanced lines (XLR/TRS) reject induced noise through common-mode rejection — interference picked up equally on both conductors cancels at the differential receiver. That's why long microphone and line-level runs are always balanced. Unbalanced cable (RCA, TS) has no such rejection and is limited to short runs of a few feet."
  },
  {
    "domain": "CTS: Sound & Physics",
    "q": "Limiter purpose?",
    "options": [
      "Boost signals",
      "Prevent clipping",
      "Add reverb",
      "Change frequency"
    ],
    "correct": 1,
    "explanation": "A limiter is a compressor with a very high ratio (often ∞:1) that acts as a ceiling: nothing passes above the threshold, preventing clipping and protecting speakers and ears. It's the last stage of protection in a signal chain. Unlike a compressor's gentle shaping, a limiter's job is purely protective — brick-wall level control."
  },
  {
    "domain": "CTS: Video & Signal",
    "q": "Professional video calibration standard?",
    "options": [
      "sRGB",
      "Adobe RGB",
      "Rec. 709",
      "DCI-P3"
    ],
    "correct": 2,
    "explanation": "Rec. 709 is the ITU standard defining colorimetry for HDTV — the color space, gamma, and white point (D65) that HD broadcast and Blu-ray are mastered to. Professional calibration means adjusting a display to reproduce Rec. 709 accurately. sRGB is the computer-graphics cousin; DCI-P3 is the wider cinema gamut; Adobe RGB is for print photography."
  },
  {
    "domain": "CTS: AV Networking",
    "q": "Latency refers to?",
    "options": [
      "Signal strength",
      "Time delay",
      "Frequency response",
      "Bit rate"
    ],
    "correct": 1,
    "explanation": "Latency is the time delay between a signal entering a system and emerging — caused by analog-to-digital conversion, DSP processing, network buffering, and codec encode/decode. In AV it shows up as lip-sync error, delayed foldback for performers, and sluggish video-conference interaction. Every digital stage adds latency, so system design is about budgeting it end to end."
  },
  {
    "domain": "CTS: Sound & Physics",
    "q": "Digital audio connector?",
    "options": [
      "RCA",
      "XLR",
      "Optical TOSLINK",
      "1/4 inch"
    ],
    "correct": 2,
    "explanation": "Optical TOSLINK (Toshiba Link) carries digital audio as pulses of light through fiber, immune to electrical interference and ground loops — a classic fix for hum between a TV and a soundbar. It typically carries stereo PCM or compressed surround (Dolby Digital/DTS). RCA and XLR are analog electrical connectors; TOSLINK is digital optical."
  },
  {
    "domain": "CTS: Video & Signal",
    "q": "RGB color bit depth?",
    "options": [
      "8 bits per channel",
      "16 bits per channel",
      "24 bits total",
      "32 bits per pixel"
    ],
    "correct": 0,
    "explanation": "Standard 8-bit color gives 256 levels per channel (2^8), so RGB 8-bit-per-channel yields 16.7 million colors (256³). Banding in gradients is the visible symptom of 8-bit depth; 10-bit (1 billion colors) largely eliminates it. '24-bit color' means 8 bits × 3 channels — same thing stated differently."
  },
  {
    "domain": "CTS: AV Networking",
    "q": "Edge processing technology?",
    "options": [
      "Scaling",
      "Processing",
      "FPGA",
      "Cloud computing"
    ],
    "correct": 2,
    "explanation": "FPGAs (Field-Programmable Gate Arrays) are reconfigurable chips that process signals in hardware with deterministic, ultra-low latency — ideal for edge processing like video scaling, format conversion, and Dante/AES67 audio bridging right at the network edge. Unlike CPUs (flexible but latent) or fixed ASICs (fast but inflexible), FPGAs can be reprogrammed for new AV standards after deployment."
  },
  {
    "domain": "CTS: Sound & Physics",
    "q": "Buffer amplifier purpose?",
    "options": [
      "Boost volume",
      "Isolate impedance",
      "Add compression",
      "Reduce noise"
    ],
    "correct": 1,
    "explanation": "A buffer amplifier isolates one circuit stage from the next: it presents a high input impedance (so it doesn't load the source) and a low output impedance (so it can drive the load). It provides no voltage gain — its job is impedance isolation, preventing a downstream stage from affecting an upstream one. Think of it as an electrical 'one-way valve' between devices."
  },
  {
    "domain": "CTS: Video & Signal",
    "q": "HDMI backward compatible?",
    "options": [
      "DisplayPort",
      "DVI",
      "Component",
      "Composite"
    ],
    "correct": 1,
    "explanation": "HDMI is electrically backward-compatible with single-link DVI-D for video: a passive cable adapter carries the digital video signal between them, since both use TMDS signaling. But DVI carries no audio and no CEC/HDCP-handshake extras, so the compatibility is video-only. DisplayPort needs an active converter — it is not passively compatible."
  },
  {
    "domain": "CTS: Control Systems",
    "q": "Professional lighting standard?",
    "options": [
      "DMX512",
      "Art-Net",
      "sACN",
      "All"
    ],
    "correct": 3,
    "explanation": "Professional lighting uses a stack of standards: DMX512 for the wired control bus, plus Art-Net and sACN (E1.31) which transport DMX universes over Ethernet/IP networks. A modern rig often runs sACN or Art-Net over the network with DMX512 at the fixtures. Knowing all three matters because you'll encounter each in real venues."
  },
  {
    "domain": "CTS: Sound & Physics",
    "q": "Wireless mic frequencies?",
    "options": [
      "VHF",
      "UHF",
      "2.4 GHz",
      "All"
    ],
    "correct": 3,
    "explanation": "Wireless microphone systems operate across VHF, UHF, and 2.4 GHz bands depending on the design — traditional pro systems favor UHF for range and reliability, while compact digital systems increasingly use 2.4 GHz. Each band has tradeoffs in range, congestion, and licensing. Frequency coordination across all your wireless devices matters more than which band any single mic uses."
  },
  {
    "domain": "CTS: Sound & Physics",
    "q": "SNR stands for?",
    "options": [
      "Signal-to-Noise Ratio",
      "System Noise Rating",
      "Sound Noise Reference",
      "Signal Noise Response"
    ],
    "correct": 0,
    "explanation": "SNR (Signal-to-Noise Ratio) measures how far the desired signal sits above the background noise floor, in decibels — higher is cleaner. A 100 dB SNR means the loudest undistorted signal is 100 dB above the noise. It's the key quality figure for preamps, converters, and wireless systems: low SNR means audible hiss."
  },
  {
    "domain": "CTS: Video & Signal",
    "q": "Video needing pulldown conversion?",
    "options": [
      "1080p",
      "1080i",
      "720p",
      "480p"
    ],
    "correct": 1,
    "explanation": "Pulldown (3:2 pulldown/telecine) converts 24 fps film content into 60-field interlaced video like 1080i by repeating fields in a 3-2 pattern. It's needed whenever film-rate content must play in an interlaced broadcast chain. Progressive formats (1080p, 720p) can carry 24p natively, so the question's classic exam pairing is 1080i with pulldown."
  },
  {
    "domain": "Advanced: Dante & AES67",
    "q": "Dante Controller purpose?",
    "options": [
      "Route audio",
      "Manage devices",
      "Control lighting",
      "Sync video"
    ],
    "correct": 1,
    "explanation": "Dante Controller is Audinate's free software for managing a Dante network: it discovers every Dante device, routes audio between transmitters and receivers with a few clicks, and monitors clocking and latency. It's the central management tool — routing that once required physical patchbays now happens in software. It doesn't control lighting or video; it's the Dante network's command center."
  },
  {
    "domain": "CTS: AV Networking",
    "q": "RJ45 termination connector?",
    "options": [
      "HDMI",
      "Ethernet",
      "USB",
      "Fiber optic"
    ],
    "correct": 1,
    "explanation": "The RJ45 8P8C modular connector is the standard termination for twisted-pair Ethernet (Cat5e/6/6a) — the physical plug on every network cable in an AV rack. HDMI, USB, and fiber use entirely different connectors. On the exam and on site, RJ45 = Ethernet, and correct T568A/B termination of that RJ45 is a core installation skill."
  },
  {
    "domain": "CTS: AV Networking",
    "q": "USB 3.0 data rate?",
    "options": [
      "480 Mbps",
      "5 Gbps",
      "10 Gbps",
      "40 Gbps"
    ],
    "correct": 1,
    "explanation": "USB 3.0 (SuperSpeed USB) runs at 5 Gbps — ten times USB 2.0's 480 Mbps — which is what makes it viable for HD video capture devices, audio interfaces, and fast storage in AV systems. USB 3.1/3.2 push 10 Gbps and USB4 reaches 40 Gbps. When a USB camera or capture device misbehaves, confirming a true USB 3.0 5 Gbps port (and cable) is a first troubleshooting step."
  },
  {
    "domain": "CTS: AV Networking",
    "q": "Real-time streaming protocol?",
    "options": [
      "HTTP",
      "RTSP",
      "FTP",
      "SMTP"
    ],
    "correct": 1,
    "explanation": "RTSP (Real-Time Streaming Protocol) is the control protocol for streaming media sessions — it sets up and tears down streams (play, pause, teardown) for IP cameras, encoders, and media servers, usually with RTP carrying the actual media. HTTP/FTP/SMTP are web, file-transfer, and email protocols, not streaming control. ONVIF cameras use RTSP URLs for their video streams."
  },
  {
    "domain": "CTS: Sound & Physics",
    "q": "THD stands for?",
    "options": [
      "Total Harmonic Distortion",
      "Thermal Heat Dissipation",
      "Total Harmonic Dynamics",
      "Thermal Harmonic Data"
    ],
    "correct": 0,
    "explanation": "THD (Total Harmonic Distortion) measures the unwanted harmonic frequencies an amplifier or device adds to the signal, expressed as a percentage — lower is cleaner (0.01% is excellent; 1% is audible). It's the standard figure for amplifier and loudspeaker linearity. Thermal dissipation, dynamics, and heat are unrelated distractors."
  },
  {
    "domain": "CTS: Video & Signal",
    "q": "Best bright environment display?",
    "options": [
      "OLED",
      "LCD",
      "Plasma",
      "LED LCD"
    ],
    "correct": 3,
    "explanation": "LED-backlit LCD wins in bright environments because it can push very high brightness (1,000+ nits) to overcome ambient light, and it suffers no burn-in from static content the way OLED and plasma can. OLED has better blacks and contrast in controlled light, but washes out under bright ambient. For lobbies, retail, and outdoor-adjacent installs, high-brightness LED LCD is the safe specification."
  },
  {
    "domain": "CTS: Video & Signal",
    "q": "Broadcast color space?",
    "options": [
      "RGB",
      "YCbCr",
      "sRGB",
      "Adobe RGB"
    ],
    "correct": 1,
    "explanation": "Broadcast and video transmission standardized on YCbCr, which separates luminance (Y, brightness/detail) from chrominance (Cb/Cr, color) — allowing color resolution to be reduced (chroma subsampling) without visibly hurting the image. RGB carries full color per pixel and is used at displays and cameras. sRGB and Adobe RGB are computer/print color spaces, not broadcast transmission."
  },
  {
    "domain": "CTS: Video & Signal",
    "q": "Reference monitor purpose?",
    "options": [
      "Record video",
      "Color calibration",
      "Transmit signals",
      "Amplify"
    ],
    "correct": 1,
    "explanation": "A reference monitor is a calibrated display used as the trusted color standard in grading suites and broadcast — it's built for accuracy (Rec. 709/DCI-P3, D65 white point, tight tolerances), not for recording, transmitting, or amplifying. Colorists make decisions on it knowing the audience's displays should match. Consumer TVs are not reference monitors, no matter how expensive."
  },
  {
    "domain": "CTS: Sound & Physics",
    "q": "Audio format needing more bandwidth?",
    "options": [
      "Analog",
      "Compressed",
      "Uncompressed",
      "Wireless"
    ],
    "correct": 2,
    "explanation": "Uncompressed audio needs the most bandwidth because every sample is stored or transmitted in full — e.g., stereo 48 kHz/24-bit is about 2.3 Mbps before any overhead. Compressed formats (MP3, AAC) discard psychoacoustically masked data to shrink that dramatically. Analog isn't measured in digital bandwidth, and wireless is a transport, not a format — uncompressed digital is the bandwidth hog."
  },
  {
    "domain": "CTS: Video & Signal",
    "q": "Blu-ray standard resolution?",
    "options": [
      "1280x720",
      "1920x1080",
      "2560x1440",
      "3840x2160"
    ],
    "correct": 1,
    "explanation": "The Blu-ray standard is built around 1920x1080 (1080p) high definition — the format was designed to deliver full HD movies. 4K content came later with Ultra HD Blu-ray (3840x2160). 720p and 1440p are computer/display resolutions, not Blu-ray standards. On the exam, Blu-ray = 1080p remains the expected answer."
  },
  {
    "domain": "CTS: Video & Signal",
    "q": "Frame synchronization technology?",
    "options": [
      "Genlock",
      "Sync pulse",
      "Color burst",
      "Blanking"
    ],
    "correct": 0,
    "explanation": "Genlock (generator locking) synchronizes video devices to a common reference signal (black burst or tri-level sync) so their frames start at exactly the same instant — essential for clean switching between cameras without rolls or tears. Sync pulses, color burst, and blanking are parts of the video signal itself; genlock is the system-level technique that locks multiple devices together."
  },
  {
    "domain": "CTS: AVIXA Standards",
    "q": "CTS stands for?",
    "options": [
      "Certified Technical Specialist",
      "Certified Technology Specialist",
      "Commercial Television Systems",
      "Centralized Technology Services"
    ],
    "correct": 1,
    "explanation": "CTS stands for Certified Technology Specialist, the flagship AV-industry certification administered by AVIXA (the Audiovisual and Integrated Experience Association). It validates the core knowledge tested throughout this app — design, installation, and operation of AV systems. The other options are plausible-sounding distractors; only 'Certified Technology Specialist' is the real credential."
  },
  {
    "domain": "CTS: Needs Analysis",
    "q": "What is the primary purpose of a needs analysis on an AV project?",
    "options": [
      "To select specific equipment brands and models",
      "To define the problems the AV system must solve before any design begins",
      "To create the final installation schedule",
      "To test the installed system against specifications"
    ],
    "correct": 1,
    "explanation": "A needs analysis defines the client's goals, tasks, and problems first — the 'why' behind the project. Equipment selection, scheduling, and testing all come later and depend on it. Designing without a needs analysis risks building an impressive system that solves the wrong problem."
  },
  {
    "domain": "CTS: Needs Analysis",
    "q": "During stakeholder interviews, which group is MOST important to include for a conference room project?",
    "options": [
      "Only the executive who approved the budget",
      "Only the IT department",
      "End users, IT, facilities, and executive sponsors",
      "Only the architect of the building"
    ],
    "correct": 2,
    "explanation": "Different stakeholders own different requirements: end users know the workflows, IT owns network/security policy, facilities owns power/HVAC/structure, and sponsors own budget and vision. Interviewing only one group guarantees missed requirements that surface as expensive changes later."
  },
  {
    "domain": "CTS: Needs Analysis",
    "q": "What is the key difference between a client's stated 'needs' and their 'wants'?",
    "options": [
      "There is no difference; both must be delivered",
      "Needs are required for the system to fulfill its purpose; wants are desirable but optional enhancements",
      "Wants are always more expensive than needs",
      "Needs are documented but wants are not"
    ],
    "correct": 1,
    "explanation": "Separating must-haves from nice-to-haves lets you protect the core functionality when budget or schedule gets tight. Document both, but design the system around the needs first. This prioritization is what keeps scope creep from derailing the project."
  },
  {
    "domain": "CTS: Needs Analysis",
    "q": "What document is the primary deliverable of a completed needs analysis?",
    "options": [
      "A detailed equipment list with part numbers",
      "A needs assessment / program report capturing requirements, constraints, and success criteria",
      "The final as-built drawings",
      "A service contract"
    ],
    "correct": 1,
    "explanation": "The needs assessment (program report) captures what was discovered: business goals, user workflows, technical requirements, constraints, budget range, and how success will be measured. It becomes the foundation the design is built on and the benchmark the final system is judged against — long before any equipment is specified."
  },
  {
    "domain": "CTS: Needs Analysis",
    "q": "Why should budget expectations be established during the needs analysis phase?",
    "options": [
      "To lock in equipment pricing immediately",
      "To ensure the design that follows is realistic and buildable within the client's means",
      "To determine the installer's profit margin",
      "Budget is only discussed at project closeout"
    ],
    "correct": 1,
    "explanation": "A design created without budget context often prices itself out of existence, wasting everyone's time and damaging trust. Establishing a realistic budget range early lets you design to a target and have honest good/better/best conversations before drawings are finalized."
  },
  {
    "domain": "CTS: Needs Analysis",
    "q": "How does a site survey differ from a needs analysis?",
    "options": [
      "They are the same activity with different names",
      "A site survey documents physical conditions; a needs analysis defines functional requirements",
      "A site survey is done after installation",
      "A needs analysis only covers audio requirements"
    ],
    "correct": 1,
    "explanation": "The needs analysis answers 'what must the system do?' while the site survey answers 'what are we working with physically?' — room dimensions, structure, power, HVAC noise, lighting, network drops, and pathways. Both feed the design, but they collect fundamentally different information."
  },
  {
    "domain": "CTS: Needs Analysis",
    "q": "Which accessibility consideration must be captured during needs analysis for a public assembly space?",
    "options": [
      "Only the color of the wall plates",
      "Assistive listening, sight lines, and accessible control interfaces",
      "Only the brand of the hearing loop",
      "Accessibility is handled entirely by the architect"
    ],
    "correct": 1,
    "explanation": "Public assembly spaces carry legal accessibility obligations — assistive listening systems, clear sight lines to captioning/displays, and controls usable by people with disabilities. Capturing these in needs analysis means they're designed in from the start, not retrofitted at penalty cost after inspection."
  },
  {
    "domain": "CTS: Needs Analysis",
    "q": "When assessing a client's existing infrastructure, what should you document?",
    "options": [
      "Only the equipment you plan to replace",
      "What can be reused, what must be replaced, and how existing systems constrain the new design",
      "Only the network passwords",
      "Nothing; existing infrastructure is irrelevant to new design"
    ],
    "correct": 1,
    "explanation": "Knowing what stays and what goes prevents costly surprises: reusable displays, cabling, or network capacity can save budget, while legacy constraints (old switchers, analog-only paths) shape what the new design must accommodate. Documenting it also protects you from being blamed for pre-existing problems."
  },
  {
    "domain": "CTS: AV Design",
    "q": "Per AVIXA DISCAS principles, what primarily determines the minimum image height for a display?",
    "options": [
      "The projector's lumen output",
      "The farthest viewer's distance and the smallest content element that must be legible",
      "The room's ceiling height",
      "The display manufacturer's recommendation"
    ],
    "correct": 1,
    "explanation": "DISCAS sizes the image from the back of the room forward: the farthest viewer must be able to resolve the smallest critical detail (the 'content element'). Lumen output affects visibility in ambient light, not legibility of detail. This is why the same room needs a bigger image for spreadsheet review than for passive video watching."
  },
  {
    "domain": "CTS: AV Design",
    "q": "For a 1080p image, what is the generally accepted minimum viewing distance to avoid seeing individual pixels?",
    "options": [
      "Equal to the image width",
      "Approximately 2 times the image height",
      "Approximately 5 times the image height",
      "There is no minimum; closer is always better"
    ],
    "correct": 1,
    "explanation": "Viewers closer than about 2x image height on a 1080p display start resolving the pixel structure, which degrades the image and causes eye fatigue. This sets the front-row limit in design. Higher resolutions (4K) allow closer seating — roughly 1.5x height — because the pixels are smaller."
  },
  {
    "domain": "CTS: AV Design",
    "q": "When designing a distributed loudspeaker system, what does a uniformity target of ±3 dB mean?",
    "options": [
      "The system is 3 dB louder than the design target",
      "SPL varies no more than 3 dB above or below the average across the listening area",
      "Only 3 dB of amplifier headroom is required",
      "The speakers are spaced 3 dB apart"
    ],
    "correct": 1,
    "explanation": "Uniform coverage means every seat hears essentially the same level — AVIXA A102.01 sets the tolerance framework. A ±3 dB window is a common design target because variations smaller than that are barely noticeable to listeners. Achieving it drives speaker quantity, placement, and tap settings in a distributed design."
  },
  {
    "domain": "CTS: AV Design",
    "q": "Why must ambient light levels be measured during the design phase for a projection system?",
    "options": [
      "Ambient light has no effect on projected images",
      "Projected contrast washes out as ambient light rises, so the design must compensate with brightness, screen selection, or light control",
      "It determines the projector's throw ratio",
      "It is only needed for the electrical permit"
    ],
    "correct": 1,
    "explanation": "A projector can't project black — dark areas of the image are just the screen showing ambient light. As ambient light rises, contrast ratio collapses regardless of lumen output. Measuring it tells you whether you need a brighter projector, an ambient-light-rejecting screen, or lighting control — decisions that must happen in design, not after installation."
  },
  {
    "domain": "CTS: AV Design",
    "q": "What is the recommended maximum conduit fill for AV cabling pathways?",
    "options": [
      "100% — fill it completely to save on conduit",
      "Approximately 40%, leaving room for future expansion and heat dissipation",
      "80%, matching the electrical derating rule",
      "Conduit fill does not matter for low-voltage cable"
    ],
    "correct": 1,
    "explanation": "The 40% fill guideline leaves space to pull additional cable later without damaging existing runs, and reduces heat buildup. A conduit packed to 100% is effectively a dead end — the first future upgrade becomes a demolition project. Designing pathways for growth is a hallmark of professional AV design."
  },
  {
    "domain": "CTS: AV Design",
    "q": "Why is heat load calculation part of equipment rack design?",
    "options": [
      "It is only required for outdoor racks",
      "Excess heat shortens equipment life and causes failures, so ventilation and cooling must be designed in",
      "It determines the rack's paint color",
      "Heat load only matters for amplifiers"
    ],
    "correct": 1,
    "explanation": "Every watt a rack's equipment consumes becomes heat. Without planned ventilation or active cooling, rack temperatures climb, components drift out of spec, and failures follow — usually after the warranty conversation gets awkward. Good design totals the thermal load and provides a cooling path before equipment is ordered."
  },
  {
    "domain": "CTS: AV Design",
    "q": "What is the purpose of a block diagram / signal flow drawing in an AV design package?",
    "options": [
      "It is decorative documentation for the client",
      "It shows every signal path from source to destination, serving as the build reference and the primary troubleshooting map",
      "It replaces the need for a site survey",
      "It is only used for marketing the project"
    ],
    "correct": 1,
    "explanation": "The signal flow diagram is the design's single source of truth: installers build from it, and technicians troubleshoot from it for the life of the system. When something fails at 8am before a board meeting, the tech traces the path on this drawing. Incomplete signal documentation is a design defect."
  },
  {
    "domain": "CTS: AV Design",
    "q": "For a seated audience, how high should the bottom of a presentation screen typically be mounted?",
    "options": [
      "At floor level for maximum image size",
      "High enough to clear seated viewers' sight lines — typically around 42-48 inches above the finished floor",
      "At the ceiling, regardless of room size",
      "At seated eye level"
    ],
    "correct": 1,
    "explanation": "If the bottom of the image sits below the sight lines of the back rows, those viewers see the backs of heads instead of content. The 42-48 inch guideline keeps the image above a seated audience's heads. Screen height, ceiling height, and projector placement all interact here — it's a three-way design compromise."
  },
  {
    "domain": "CTS: AV Design",
    "q": "Why should AV traffic be placed on a separate VLAN or physical network from general corporate data?",
    "options": [
      "AV equipment cannot use TCP/IP",
      "To guarantee bandwidth, prioritize latency-sensitive media traffic, and satisfy IT security policy",
      "VLANs increase total network speed",
      "It is never necessary; shared networks always work fine"
    ],
    "correct": 1,
    "explanation": "Media traffic (Dante, NDI, control) is sensitive to latency and packet loss that bursty office data causes, and IT departments rightly resist unknown devices on the corporate LAN. A dedicated AV VLAN with QoS gives the media traffic priority and gives IT the security boundary they require. This conversation happens in design, with IT at the table."
  },
  {
    "domain": "CTS: Project Management",
    "q": "What does a RACI chart clarify on an AV project?",
    "options": [
      "The cable labeling scheme",
      "Who is Responsible, Accountable, Consulted, and Informed for each task or decision",
      "The projector throw distances",
      "The network IP address assignments"
    ],
    "correct": 1,
    "explanation": "RACI eliminates the most common project dysfunction: everyone assuming someone else is handling a task. Each activity gets one Accountable owner (the single throat to choke), plus who's doing the work, who must be consulted, and who just needs updates. On multi-trade AV jobs, this clarity prevents dropped handoffs."
  },
  {
    "domain": "CTS: Project Management",
    "q": "What is the primary value of a Gantt chart in AV project management?",
    "options": [
      "It lists equipment serial numbers",
      "It visualizes tasks, durations, dependencies, and milestones on a timeline",
      "It replaces the need for a budget",
      "It is used only after project completion"
    ],
    "correct": 1,
    "explanation": "A Gantt chart turns a task list into a schedule you can actually manage: you see what happens in what order, which tasks depend on others, and where the milestones fall. When the electrician's rough-in slips, the chart shows exactly which AV tasks it impacts. It's the project's shared picture of time."
  },
  {
    "domain": "CTS: Project Management",
    "q": "What is an RFI and when is it used?",
    "options": [
      "A Request for Information — used during construction to get clarification on ambiguous or conflicting design documents",
      "A type of wireless microphone",
      "A final invoice submitted at closeout",
      "A radio frequency interference report"
    ],
    "correct": 0,
    "explanation": "When drawings and specs conflict — or a field condition doesn't match the plan — the installer submits an RFI to get a formal, documented answer from the designer before proceeding. Guessing instead of asking is how expensive rework happens. RFIs create the paper trail that protects everyone."
  },
  {
    "domain": "CTS: Project Management",
    "q": "What are submittals in the AV construction process?",
    "options": [
      "The final payment applications",
      "Shop drawings, product data, and samples submitted for approval before procurement and installation",
      "Employee time sheets",
      "Warranty claim forms"
    ],
    "correct": 1,
    "explanation": "Submittals prove that what you plan to install matches what was specified — exact models, shop drawings showing how it fits, and samples where needed. Approval happens before purchase, so a wrong or substituted product gets caught on paper instead of in the ceiling. Skipping submittals is a classic cause of rejected work."
  },
  {
    "domain": "CTS: Project Management",
    "q": "What is a schedule of values in AV contracting?",
    "options": [
      "A list of equipment discounts",
      "A line-item breakdown of the contract price tied to work progress, used as the basis for progress billing",
      "The project calendar",
      "A warranty schedule"
    ],
    "correct": 1,
    "explanation": "The schedule of values breaks the lump-sum price into billable chunks (engineering, rough-in, trim-out, programming, commissioning...). Each pay application bills the percentage complete per line. It aligns cash flow with actual progress and gives the client transparency into what they're paying for."
  },
  {
    "domain": "CTS: Project Management",
    "q": "Which project risk should be identified earliest on an AV installation?",
    "options": [
      "The color of the rack screws",
      "Long-lead equipment, trade coordination conflicts, and site-access constraints",
      "The brand of coffee in the break room",
      "The installer's parking spot"
    ],
    "correct": 1,
    "explanation": "Risks you identify early can be mitigated: long-lead items get ordered first, trade conflicts get sequenced in the schedule, and access constraints get planned around. Risks discovered late become delays and change orders. Early risk identification is the cheapest insurance a project manager buys."
  },
  {
    "domain": "CTS: Project Management",
    "q": "What should a project communication plan define?",
    "options": [
      "Only the CEO's phone number",
      "Who gets what information, how often, through which channel, and who can make decisions",
      "The wireless microphone frequencies",
      "The paint colors for the equipment room"
    ],
    "correct": 1,
    "explanation": "A communication plan prevents the two classic failures: stakeholders blindsided by surprises, and decisions stalled because nobody knows who's authorized to make them. Regular status updates, defined meeting rhythms, and clear escalation paths keep small issues from becoming project crises."
  },
  {
    "domain": "CTS: Project Management",
    "q": "What is a milestone in a project schedule?",
    "options": [
      "A daily task assigned to the lead technician",
      "A significant checkpoint or event marking major progress, such as rough-in complete or system go-live",
      "The final invoice amount",
      "A type of cable milestone marker"
    ],
    "correct": 1,
    "explanation": "Milestones are zero-duration markers of major progress — design approval, rough-in complete, commissioning done, go-live. They give the client and the team shared checkpoints to measure progress against, and slipping a milestone is the early warning that the schedule is at risk."
  },
  {
    "domain": "CTS: Project Management",
    "q": "What is the purpose of a pre-installation / kickoff meeting with all trades?",
    "options": [
      "It is purely social",
      "To align schedule, sequencing, responsibilities, site rules, and communication before work begins",
      "To negotiate the contract price",
      "To train the end users"
    ],
    "correct": 1,
    "explanation": "Most installation conflicts — AV rough-in blocked by HVAC ductwork, electricians unaware of AV power needs, painters painting over cable labels — come from trades working from different assumptions. A kickoff meeting puts everyone on the same sequence and the same rules before the first hole is drilled."
  },
  {
    "domain": "CTS: Customer Relations",
    "q": "What is the most effective way to manage client expectations during an AV project?",
    "options": [
      "Promise the fastest possible timeline regardless of reality",
      "Document assumptions, communicate proactively about progress and issues, and under-promise while over-delivering",
      "Avoid giving the client any schedule information",
      "Only communicate when there is bad news"
    ],
    "correct": 1,
    "explanation": "Expectations are managed with documentation and communication, not optimism. Written assumptions prevent 'I thought that was included' disputes; proactive updates prevent surprises; and conservative commitments you beat build more trust than aggressive ones you miss. Trust is the product you're really delivering."
  },
  {
    "domain": "CTS: Customer Relations",
    "q": "A client is upset about a system malfunction during an important event. What is the best immediate response?",
    "options": [
      "Explain why it is the client's fault",
      "Listen, acknowledge the impact, focus on restoring function, then follow up with root cause and prevention",
      "Promise it will never happen again without investigating",
      "Blame the equipment manufacturer"
    ],
    "correct": 1,
    "explanation": "In the moment, the client needs two things: to feel heard, and to have the event saved. Fix first, investigate second, report third. Blame — of the client, the manufacturer, or anyone — destroys trust even when technically accurate. The follow-up report with root cause and prevention is what turns a failure into retained business."
  },
  {
    "domain": "CTS: Customer Relations",
    "q": "Why should important client decisions and verbal agreements be confirmed in writing?",
    "options": [
      "It is unnecessary if you trust the client",
      "To create a shared record that prevents misunderstandings and protects both parties if memories differ",
      "Only lawyers need written records",
      "Written confirmation slows projects down"
    ],
    "correct": 1,
    "explanation": "A brief confirming email after a meeting ('per our discussion, we agreed on X') takes two minutes and prevents the most expensive sentence in contracting: 'that's not what I remember.' Memories genuinely differ under project stress; the written record is the neutral referee both sides agreed to."
  },
  {
    "domain": "CTS: Customer Relations",
    "q": "When a client asks for out-of-scope work, what is the most professional response?",
    "options": [
      "Immediately refuse and cite the contract",
      "Acknowledge the request positively, explain the change-order process, and provide pricing and schedule impact",
      "Do it for free to build goodwill",
      "Ignore the request and hope they forget"
    ],
    "correct": 1,
    "explanation": "'Yes, we can do that — here's what it adds in cost and time, and I need your approval to proceed' keeps the relationship positive while protecting the project's economics. Flat refusal feels adversarial; free work trains the client to expect it. The change order process turns scope discussions into business discussions."
  },
  {
    "domain": "CTS: Customer Relations",
    "q": "What is the business value of thorough end-user training at project handover?",
    "options": [
      "It has no value; users figure it out",
      "Confident users file fewer support calls, perceive higher system value, and become advocates for future work",
      "It only matters for the warranty paperwork",
      "Training is the client's responsibility to arrange"
    ],
    "correct": 1,
    "explanation": "An untrained user experiences even a perfect system as broken — every support call that starts 'the system doesn't work' and ends 'oh, that button' costs you money and goodwill. Good training, plus a one-page quick-start guide, converts the system from your project into their tool. That's what generates referrals."
  },
  {
    "domain": "CTS: Customer Relations",
    "q": "What does presenting 'good / better / best' options accomplish in an AV proposal?",
    "options": [
      "It confuses the client",
      "It lets the client match the solution to their budget while making the tradeoffs of each tier explicit",
      "It triples the engineering work for no benefit",
      "It is only used for residential projects"
    ],
    "correct": 1,
    "explanation": "Tiered options turn a take-it-or-leave-it price into a conversation about value: the client sees what more money buys and what less money sacrifices. It respects their budget authority while keeping the recommended solution in front of them. Most clients choose the middle tier — which is usually what you'd have proposed anyway."
  },
  {
    "domain": "CTS: Customer Relations",
    "q": "After project completion, what is the best way to maintain the client relationship?",
    "options": [
      "Never contact them again unless something breaks",
      "Scheduled check-ins, a clear support path, and service agreement options that keep you as their trusted advisor",
      "Send them a bill every month",
      "Only call when you need a reference"
    ],
    "correct": 1,
    "explanation": "The most profitable AV work is repeat and referral business, and it goes to the integrator who stays present. A 30-day check-in call, a defined support number, and an optional service agreement keep small issues from becoming resentments — and keep you first in line for the next project."
  },
  {
    "domain": "CTS: Customer Relations",
    "q": "Why is active listening more valuable than technical expertise in an initial client meeting?",
    "options": [
      "Technical expertise is never needed",
      "Understanding the client's actual problem matters more than showcasing what you know; solutions follow understanding",
      "Clients dislike technical people",
      "Listening wastes meeting time"
    ],
    "correct": 1,
    "explanation": "Clients buy outcomes, not specifications. The integrator who asks sharp questions and truly hears the answers designs the right system; the one who leads with product knowledge often solves the wrong problem brilliantly. Expertise matters enormously — but only after understanding directs it."
  },
  {
    "domain": "CTS: Troubleshooting & Verification",
    "q": "What is the 'half-splitting' method of AV troubleshooting?",
    "options": [
      "Cutting all cables in half",
      "Testing at the midpoint of a signal path to determine which half contains the fault, then repeating on the faulty half",
      "Replacing half the equipment at random",
      "Splitting the crew into two teams"
    ],
    "correct": 1,
    "explanation": "Half-splitting is binary search applied to signal flow: test the middle, and one test eliminates half the system as the culprit. It's dramatically faster than checking sources-to-destination in order. Combined with a signal flow diagram, it's the professional's default fault-isolation method."
  },
  {
    "domain": "CTS: Troubleshooting & Verification",
    "q": "A display shows 'no signal' from a known-good source over HDMI. After verifying power and input selection, what is the most likely cause?",
    "options": [
      "The display's speakers are muted",
      "An HDCP authentication failure or corrupted EDID handshake",
      "The room is too bright",
      "The source file is corrupted"
    ],
    "correct": 1,
    "explanation": "HDMI is a negotiated digital link: source and display must complete HDCP authentication and EDID exchange before video flows. A failed handshake gives you 'no signal' from perfectly good hardware. Power-cycling the chain in order (display first, then source) or inserting an EDID emulator often resolves it — which is why it's the first suspect, not the last."
  },
  {
    "domain": "CTS: Troubleshooting & Verification",
    "q": "A loud 60 Hz hum is present in the audio system. What does this symptom most likely indicate?",
    "options": [
      "A ground loop between equipment on different electrical grounds",
      "A blown loudspeaker",
      "Feedback from the microphones",
      "A failed amplifier channel"
    ],
    "correct": 0,
    "explanation": "Mains-frequency hum (60 Hz in North America, 50 Hz elsewhere) is the signature of a ground loop — current flowing between chassis grounds at different potentials, often via cable shields. The fix is breaking the loop with an isolation transformer or balanced connections, never by lifting a safety ground. Blown speakers distort; feedback howls; ground loops hum."
  },
  {
    "domain": "CTS: Troubleshooting & Verification",
    "q": "During sound check, the system feeds back when the presenter speaks. What is the correct order of corrective actions?",
    "options": [
      "Add more speakers, then turn everything up",
      "Reduce overall gain, move microphones away from loudspeakers, then apply narrow EQ cuts at the feedback frequencies",
      "Replace all the microphones immediately",
      "Turn off the system and cancel the event"
    ],
    "correct": 1,
    "explanation": "Feedback is a gain-before-feedback problem solved in order of effectiveness: less gain needed (move mic closer to talker), more distance between mics and speakers, then surgical EQ notches at the ringing frequencies. EQ first without fixing gain structure just moves the feedback to a new frequency. The PAG/NAG concept governs the whole process."
  },
  {
    "domain": "CTS: Troubleshooting & Verification",
    "q": "There is no audio from any zone of a distributed system. What is the most logical first check?",
    "options": [
      "Rewire all the loudspeakers",
      "Verify the common upstream points first: source selection, system mute, main power, and the DSP/processor status",
      "Replace the amplifiers",
      "Check the projector lamp"
    ],
    "correct": 1,
    "explanation": "A fault affecting every zone lives upstream of the zones — at the source, the system-wide mute, the DSP, or power. Troubleshooting from the common point outward finds system-wide faults in one step; starting at individual speakers wastes hours. Always ask 'what do all the failures have in common?' first."
  },
  {
    "domain": "CTS: Troubleshooting & Verification",
    "q": "What is a toner (tone generator and probe) used for during verification?",
    "options": [
      "Calibrating projector color",
      "Identifying and tracing individual cables within bundles and through walls",
      "Measuring sound pressure level",
      "Tuning wireless microphone frequencies"
    ],
    "correct": 1,
    "explanation": "The toner injects an audible signal onto a cable at one end; the inductive probe finds that same tone at the far end — even through walls and inside bundles. It's how you answer 'which of these 40 identical cables is input 7?' during verification and retrofit work. Labeling as you go prevents ever needing it, but every tech carries one."
  },
  {
    "domain": "CTS: Troubleshooting & Verification",
    "q": "Why are test patterns and signal generators used during video system verification?",
    "options": [
      "They are only for showroom demonstrations",
      "They provide known-good reference signals to verify each link in the chain independently of source devices",
      "They replace the need for displays",
      "They increase the system's resolution"
    ],
    "correct": 1,
    "explanation": "A laptop is an unknown variable — wrong resolution, HDCP issues, sleep mode. A test pattern generator outputs a precise, known signal, so any fault you see is definitively in the distribution path, not the source. Verifying the infrastructure with reference signals before connecting real sources is standard commissioning practice."
  },
  {
    "domain": "CTS: Troubleshooting & Verification",
    "q": "An AV device is not reachable on the network. Which troubleshooting step comes first?",
    "options": [
      "Replace the network switch",
      "Check the physical layer: link lights, cable, port, then IP addressing (DHCP/static, correct subnet/VLAN)",
      "Reinstall the device firmware",
      "Call the ISP"
    ],
    "correct": 1,
    "explanation": "Network troubleshooting follows the OSI model from the bottom up: no link light means a physical problem (cable, port, PoE), and link-with-no-communication means an addressing problem (wrong subnet, VLAN, or DHCP failure). Skipping to firmware or switch replacement before checking Layer 1 wastes time and risks breaking what works."
  },
  {
    "domain": "CTS: Troubleshooting & Verification",
    "q": "Why is gain staging verified before any other audio troubleshooting step?",
    "options": [
      "It is not important",
      "Proper gain staging ensures each device operates in its optimal range; incorrect staging causes noise, distortion, or weak signal that mimics other faults",
      "It only affects the subwoofers",
      "Gain staging is done after the client moves in"
    ],
    "correct": 1,
    "explanation": "If the first device in the chain is clipping or starved, every downstream symptom — distortion, hiss, weak output — is a lie told by bad gain structure. Verifying unity gain through the chain (each stage neither clipping nor buried in noise) eliminates a whole class of phantom faults before you chase real ones."
  },
  {
    "domain": "CTS: Commissioning & Closeout",
    "q": "How does commissioning differ from installation?",
    "options": [
      "They are identical activities",
      "Installation puts the equipment in place; commissioning systematically verifies every function performs to the design intent",
      "Commissioning happens before design",
      "Only the client performs commissioning"
    ],
    "correct": 1,
    "explanation": "Installation ends when everything is connected; commissioning ends when everything is proven. Commissioning tests each input, output, preset, control function, and failure mode against the design documents and records the results. A system that was installed but never commissioned is an unverified system."
  },
  {
    "domain": "CTS: Commissioning & Closeout",
    "q": "What are as-built drawings and why do they matter?",
    "options": [
      "Marketing renderings of the finished room",
      "Drawings updated to reflect what was actually installed, serving as the accurate record for future service and expansion",
      "The original proposal drawings",
      "Drawings of the building's architecture"
    ],
    "correct": 1,
    "explanation": "Field conditions always force deviations from the design — a rerouted conduit, a substituted model, a moved rack. As-builts capture reality, and the service tech who arrives three years later depends on them entirely. Delivering design drawings labeled as as-builts is a closeout failure."
  },
  {
    "domain": "CTS: Commissioning & Closeout",
    "q": "What should client training at handover cover at minimum?",
    "options": [
      "Nothing; the system should be self-explanatory",
      "Daily operation, source switching, basic troubleshooting, and who to call for support",
      "How to reprogram the control system",
      "The installer's internal cost breakdown"
    ],
    "correct": 1,
    "explanation": "Handover training converts the system from your project into their tool: how to turn it on, run a meeting, switch sources, recover from common issues, and reach support. It doesn't make them programmers — it makes them confident operators. Document it with a quick-start guide left at the rack."
  },
  {
    "domain": "CTS: Commissioning & Closeout",
    "q": "What warranty information must be delivered to the client at closeout?",
    "options": [
      "No warranty information is needed",
      "What is covered, for how long, when coverage starts, what is excluded, and exactly who to contact for service",
      "Only the manufacturer's phone number",
      "A verbal promise that everything is covered forever"
    ],
    "correct": 1,
    "explanation": "Vague warranty promises become disputes: the client expects everything covered, you know labor and certain parts aren't. The closeout package must spell out coverage periods, start dates (usually substantial completion), exclusions, and the service contact path. Clarity at handover prevents conflict at the first failure."
  },
  {
    "domain": "CTS: Commissioning & Closeout",
    "q": "What does final acceptance / sign-off signify on an AV project?",
    "options": [
      "The installer can stop answering the phone",
      "The client formally acknowledges the system is complete and performing per the contract, triggering final payment and warranty start",
      "The equipment warranties expire",
      "The design phase begins"
    ],
    "correct": 1,
    "explanation": "Sign-off is the contractual finish line: punch list cleared, commissioning documented, training delivered — the client agrees the contracted scope is complete. It releases final payment and starts warranty clocks. Never treat a project as done without it; undocumented 'we're basically finished' projects generate unpaid callbacks."
  },
  {
    "domain": "CTS: Commissioning & Closeout",
    "q": "Why is 'attic stock' (spare parts) often specified at closeout?",
    "options": [
      "To increase the project cost",
      "To ensure critical consumables and failure-prone parts are on hand for fast recovery without waiting on procurement",
      "It is required by law everywhere",
      "Spare parts are never useful"
    ],
    "correct": 1,
    "explanation": "A spare projector lamp, a couple of key cables, replacement batteries for wireless mics — attic stock turns a potential week-long outage into a ten-minute swap. It's cheap insurance specified at closeout when procurement is already mobilized, and the client will remember who thought of it."
  },
  {
    "domain": "CTS: Commissioning & Closeout",
    "q": "What is the purpose of a post-project lessons-learned review?",
    "options": [
      "To assign blame for problems",
      "To capture what went well and what didn't so future projects benefit from the experience",
      "To renegotiate the contract",
      "It serves no purpose"
    ],
    "correct": 1,
    "explanation": "Every project teaches something — an estimating miss, a coordination win, a product to avoid. A blameless review converts that experience into institutional knowledge: updated checklists, better estimates, fewer repeated mistakes. Companies that skip this step pay tuition on the same lessons repeatedly."
  }
];

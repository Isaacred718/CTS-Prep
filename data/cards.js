// Merged CTS flashcard deck (Leitner). Fields: { domain, front, back }
// Generated 2026-09-22 — 131 cards.
const CARDS = [
  {
    "domain": "CTS: Sound & Physics",
    "front": "Inverse Square Law",
    "back": "Doubling distance from a point source in a free field drops SPL by 6 dB."
  },
  {
    "domain": "CTS: Sound & Physics",
    "front": "Power to SPL",
    "back": "Double the power = +3 dB. Ten times the power = +10 dB ≈ twice as loud perceptually."
  },
  {
    "domain": "CTS: Sound & Physics",
    "front": "Open mic penalty (NOM)",
    "back": "Every doubling of the number of open mics costs 3 dB of gain before feedback."
  },
  {
    "domain": "CTS: Sound & Physics",
    "front": "Speed of sound",
    "back": "≈ 343 m/s (1130 ft/s) at 20°C. Wavelength = 343 / frequency."
  },
  {
    "domain": "CTS: Sound & Physics",
    "front": "Haas / precedence effect",
    "back": "Arrivals within ~30 ms of the direct sound are perceived as one event, localized to the first arrival."
  },
  {
    "domain": "CTS: AVIXA Standards",
    "front": "V201.01 contrast ratios",
    "back": "Passive viewing 7:1 · Basic decision making 15:1 · Analytical decision making 80:1."
  },
  {
    "domain": "CTS: AVIXA Standards",
    "front": "DISCAS",
    "back": "Display Image Size for 2D Content. Sizes the image from farthest viewer distance and the smallest content element."
  },
  {
    "domain": "CTS: AVIXA Standards",
    "front": "A102.01",
    "back": "Audio Coverage Uniformity — tolerance for SPL variation across the listener area."
  },
  {
    "domain": "CTS: Electrical & Site Survey",
    "front": "Ohm's / power law",
    "back": "V = I × R, P = V × I. Amps = Watts ÷ Volts."
  },
  {
    "domain": "CTS: Electrical & Site Survey",
    "front": "80% rule",
    "back": "Continuous loads are limited to 80% of breaker rating. A 20A circuit carries 16A continuously."
  },
  {
    "domain": "CTS: Electrical & Site Survey",
    "front": "Ground loop fix",
    "back": "Isolation transformer or balanced connection. Never lift a safety ground."
  },
  {
    "domain": "CTS: Project Management",
    "front": "Change Order",
    "back": "The formal, priced, client-approved document for any change to agreed scope. Approve before work proceeds."
  },
  {
    "domain": "CTS: Project Management",
    "front": "Punch list vs substantial completion",
    "back": "Substantial completion = usable for intended purpose. Punch list = remaining minor items that don't block use."
  },
  {
    "domain": "CTS: Project Management",
    "front": "Critical path",
    "back": "Longest chain of dependent tasks. Sets minimum duration; delays here delay the project."
  },
  {
    "domain": "Advanced: ST 2110 Suite",
    "front": "ST 2110-10",
    "back": "System timing and definitions. PTP per ST 2059-2."
  },
  {
    "domain": "Advanced: ST 2110 Suite",
    "front": "ST 2110-20",
    "back": "Uncompressed active video essence."
  },
  {
    "domain": "Advanced: ST 2110 Suite",
    "front": "ST 2110-21",
    "back": "Sender traffic shaping and timing models: narrow, narrow linear, wide."
  },
  {
    "domain": "Advanced: ST 2110 Suite",
    "front": "ST 2110-30",
    "back": "PCM audio, built on AES67."
  },
  {
    "domain": "Advanced: ST 2110 Suite",
    "front": "ST 2110-40",
    "back": "Ancillary data — timecode, closed captions, AFD."
  },
  {
    "domain": "Advanced: ST 2110 Suite",
    "front": "ST 2022-6 vs ST 2110",
    "back": "2022-6 encapsulates full SDI in IP. 2110 splits video, audio, and ANC into separately routable essence streams."
  },
  {
    "domain": "Advanced: ST 2110 Suite",
    "front": "ST 2022-7",
    "back": "Hitless redundancy. Receiver merges two identical streams packet-by-packet using RTP sequence numbers."
  },
  {
    "domain": "Advanced: ST 2110 Suite",
    "front": "NMOS IS-04",
    "back": "Discovery and Registration — nodes register with a registry."
  },
  {
    "domain": "Advanced: ST 2110 Suite",
    "front": "NMOS IS-05",
    "back": "Connection Management — makes and breaks the actual sender/receiver connections."
  },
  {
    "domain": "Advanced: ST 2110 Suite",
    "front": "NMOS IS-08",
    "back": "Audio channel mapping between senders and receivers."
  },
  {
    "domain": "Advanced: ST 2110 Suite",
    "front": "IGMP vs PIM",
    "back": "IGMP: endpoint to local switch, joining a group. PIM: routing multicast between switches/routers."
  },
  {
    "domain": "Advanced: ST 2110 Suite",
    "front": "SDP file",
    "back": "Describes multicast address, port, payload type, and format so a receiver can interpret a stream."
  },
  {
    "domain": "Advanced: ST 2110 Suite",
    "front": "Boundary Clock",
    "back": "Syncs to the grandmaster upstream, acts as master downstream. Scales PTP and limits jitter accumulation."
  },
  {
    "domain": "Advanced: Dante & AES67",
    "front": "Dante Leader clock",
    "back": "PTP-elected reference every Dante device syncs its sample clock to."
  },
  {
    "domain": "Advanced: Dante & AES67",
    "front": "Dante AES67 mode",
    "back": "Exposes standards-based multicast streams for interop, with sample-rate and packet-time constraints. Not identical to native Dante."
  },
  {
    "domain": "CTS: Video & Signal",
    "front": "Throw Ratio",
    "back": "Distance / Width. Used to determine projector placement."
  },
  {
    "domain": "CTS: Video & Signal",
    "front": "RGB vs YCbCr",
    "back": "RGB is for displays/cameras; YCbCr is for transmission (separates brightness from color)."
  },
  {
    "domain": "CTS: Sound & Physics",
    "front": "RT60",
    "back": "The time for sound to decay by 60 dB. A measure of reverberation."
  },
  {
    "domain": "CTS: Sound & Physics",
    "front": "Cardioid Pattern",
    "back": "Heart-shaped; sensitive to front, rejects rear."
  },
  {
    "domain": "CTS: AVIXA Standards",
    "front": "DISCAS Primary Variable",
    "back": "Farthest Viewer Distance determines the minimum image size."
  },
  {
    "domain": "CTS: Project Management",
    "front": "Commissioning",
    "back": "Verifying the system performs per design intent and specifications."
  },
  {
    "domain": "CTS: Electrical & Site Survey",
    "front": "Noise Floor",
    "back": "The ambient sound level of a room; affects audio system gain and intelligibility."
  },
  {
    "domain": "CTS: Sound & Physics",
    "front": "dB formula for voltage ratio",
    "back": "20 × log₁₀(V₂/V₁)"
  },
  {
    "domain": "CTS: Sound & Physics",
    "front": "dB formula for power ratio",
    "back": "10 × log₁₀(P₂/P₁)"
  },
  {
    "domain": "CTS: Sound & Physics",
    "front": "Standard professional audio impedance",
    "back": "600 ohms"
  },
  {
    "domain": "CTS: Sound & Physics",
    "front": "Typical microphone output",
    "back": "-60 to -40 dBu"
  },
  {
    "domain": "CTS: Sound & Physics",
    "front": "Line level audio",
    "back": "-20 to -10 dBu (typical -4 dBu)"
  },
  {
    "domain": "CTS: Sound & Physics",
    "front": "Instrument level impedance",
    "back": "600 ohms (high-impedance)"
  },
  {
    "domain": "CTS: Sound & Physics",
    "front": "Microphone input impedance (console)",
    "back": "2,000 ohms (2k)"
  },
  {
    "domain": "CTS: Sound & Physics",
    "front": "Balanced audio connector standard",
    "back": "XLR (3-pin)"
  },
  {
    "domain": "CTS: Sound & Physics",
    "front": "Phantom power voltage",
    "back": "48V DC (±4V)"
  },
  {
    "domain": "CTS: Sound & Physics",
    "front": "Phantom power current draw",
    "back": "10-20 mA"
  },
  {
    "domain": "CTS: Sound & Physics",
    "front": "Audio frequency range (human hearing)",
    "back": "20 Hz to 20 kHz"
  },
  {
    "domain": "CTS: Sound & Physics",
    "front": "Bass frequencies",
    "back": "20 Hz to 250 Hz"
  },
  {
    "domain": "CTS: Sound & Physics",
    "front": "Midrange frequencies",
    "back": "250 Hz to 2 kHz"
  },
  {
    "domain": "CTS: Sound & Physics",
    "front": "Treble frequencies",
    "back": "2 kHz to 20 kHz"
  },
  {
    "domain": "CTS: Sound & Physics",
    "front": "CD audio sampling rate",
    "back": "44.1 kHz"
  },
  {
    "domain": "CTS: Sound & Physics",
    "front": "Professional audio sampling rate",
    "back": "48 kHz"
  },
  {
    "domain": "CTS: Sound & Physics",
    "front": "CD audio bit depth",
    "back": "16 bits"
  },
  {
    "domain": "CTS: Sound & Physics",
    "front": "Professional audio bit depth",
    "back": "24 bits"
  },
  {
    "domain": "CTS: Sound & Physics",
    "front": "Sound pressure level threshold (hearing)",
    "back": "0 dB SPL (20 μPa)"
  },
  {
    "domain": "CTS: Sound & Physics",
    "front": "Conversational speech level",
    "back": "60-65 dB SPL"
  },
  {
    "domain": "CTS: Sound & Physics",
    "front": "Maximum safe exposure (85 dB)",
    "back": "8 hours continuous"
  },
  {
    "domain": "CTS: Sound & Physics",
    "front": "SPL measurement for speakers",
    "back": "dB SPL/W/m or dB SPL@1W/1m"
  },
  {
    "domain": "CTS: Sound & Physics",
    "front": "Crossover frequency (high-pass)",
    "back": "80-100 Hz (separates subwoofer)"
  },
  {
    "domain": "CTS: Sound & Physics",
    "front": "Dolby Digital surround",
    "back": "5.1 channels (L, C, R, Ls, Rs, LFE)"
  },
  {
    "domain": "CTS: Sound & Physics",
    "front": "DTS surround format",
    "back": "5.1 or 7.1 channels"
  },
  {
    "domain": "CTS: Video & Signal",
    "front": "1080p resolution",
    "back": "1920×1080 pixels, progressive"
  },
  {
    "domain": "CTS: Video & Signal",
    "front": "1080i resolution",
    "back": "1920×1080 pixels, interlaced"
  },
  {
    "domain": "CTS: Video & Signal",
    "front": "720p resolution",
    "back": "1280×720 pixels, progressive"
  },
  {
    "domain": "CTS: Video & Signal",
    "front": "4K UHD resolution",
    "back": "3840×2160 pixels"
  },
  {
    "domain": "CTS: Video & Signal",
    "front": "4K DCI resolution",
    "back": "4096×2160 pixels"
  },
  {
    "domain": "CTS: Video & Signal",
    "front": "HDTV aspect ratio",
    "back": "16:9 (widescreen)"
  },
  {
    "domain": "CTS: Video & Signal",
    "front": "Standard definition aspect ratio",
    "back": "4:3 (1.33:1)"
  },
  {
    "domain": "CTS: Video & Signal",
    "front": "NTSC frame rate",
    "back": "29.97 fps (59.94 Hz interlaced)"
  },
  {
    "domain": "CTS: Video & Signal",
    "front": "PAL frame rate",
    "back": "25 fps"
  },
  {
    "domain": "CTS: Video & Signal",
    "front": "Film frame rate",
    "back": "24 fps (23.976 fps)"
  },
  {
    "domain": "CTS: Video & Signal",
    "front": "Daylight color temperature",
    "back": "6500K"
  },
  {
    "domain": "CTS: Video & Signal",
    "front": "Tungsten color temperature",
    "back": "3200K"
  },
  {
    "domain": "CTS: Video & Signal",
    "front": "Video signal impedance",
    "back": "75 ohms"
  },
  {
    "domain": "CTS: Video & Signal",
    "front": "HDMI cable maximum length",
    "back": "15 meters (without repeater)"
  },
  {
    "domain": "CTS: Video & Signal",
    "front": "Rec. 709 standard",
    "back": "HD video broadcast standard"
  },
  {
    "domain": "CTS: Video & Signal",
    "front": "YUV 4:2:0 subsampling",
    "back": "Color at 1/4 resolution (streaming)"
  },
  {
    "domain": "CTS: Video & Signal",
    "front": "YUV 4:2:2 subsampling",
    "back": "Color at 1/2 horizontal resolution"
  },
  {
    "domain": "CTS: Video & Signal",
    "front": "YUV 4:4:4 subsampling",
    "back": "Full color resolution"
  },
  {
    "domain": "CTS: Video & Signal",
    "front": "EDID purpose",
    "back": "Allows display to report capabilities"
  },
  {
    "domain": "CTS: Video & Signal",
    "front": "HDMI 2.1 bandwidth",
    "back": "48 Gbps"
  },
  {
    "domain": "CTS: Video & Signal",
    "front": "H.264 use case",
    "back": "Live streaming, video recording"
  },
  {
    "domain": "CTS: Video & Signal",
    "front": "H.265/HEVC advantage",
    "back": "50% better compression than H.264"
  },
  {
    "domain": "CTS: AV Networking",
    "front": "Cat5e maximum length",
    "back": "100 meters"
  },
  {
    "domain": "CTS: AV Networking",
    "front": "Cat6 maximum length",
    "back": "100 meters"
  },
  {
    "domain": "CTS: AV Networking",
    "front": "Cat6a maximum length",
    "back": "100 meters (10 Gbps)"
  },
  {
    "domain": "CTS: AV Networking",
    "front": "Ethernet impedance",
    "back": "100 ohms (twisted pair)"
  },
  {
    "domain": "CTS: AV Networking",
    "front": "Standard PoE power",
    "back": "15.4 watts"
  },
  {
    "domain": "CTS: AV Networking",
    "front": "PoE+ power delivery",
    "back": "25.5 watts"
  },
  {
    "domain": "CTS: AV Networking",
    "front": "PoE++ (Hi-PoE) power",
    "back": "90 watts"
  },
  {
    "domain": "CTS: AV Networking",
    "front": "T568A wiring order",
    "back": "W-Grn, Grn, W-Org, Blu, W-Blu, Org, W-Brn, Brn"
  },
  {
    "domain": "CTS: AV Networking",
    "front": "T568B wiring order",
    "back": "W-Org, Org, W-Grn, Blu, W-Blu, Grn, W-Brn, Brn"
  },
  {
    "domain": "CTS: AV Networking",
    "front": "Single-mode fiber distance",
    "back": "Over 100 km"
  },
  {
    "domain": "CTS: AV Networking",
    "front": "Multimode fiber distance",
    "back": "Up to 2 km"
  },
  {
    "domain": "CTS: AV Networking",
    "front": "Dante networking standard",
    "back": "AES67-compatible audio over Ethernet"
  },
  {
    "domain": "CTS: AV Networking",
    "front": "AES67 purpose",
    "back": "Interoperable networked audio"
  },
  {
    "domain": "CTS: AV Networking",
    "front": "DHCP function",
    "back": "Automatically assigns IP addresses"
  },
  {
    "domain": "CTS: AV Networking",
    "front": "DNS function",
    "back": "Translates domain names to IPs"
  },
  {
    "domain": "CTS: AV Networking",
    "front": "RTSP protocol",
    "back": "Real-time streaming (video/audio)"
  },
  {
    "domain": "CTS: AV Networking",
    "front": "ONVIF standard",
    "back": "IP camera control & interoperability"
  },
  {
    "domain": "CTS: Control Systems",
    "front": "RS-232 standard",
    "back": "Serial, single-ended, up to 50 ft"
  },
  {
    "domain": "CTS: Control Systems",
    "front": "RS-485 standard",
    "back": "Balanced serial, 4000 ft range"
  },
  {
    "domain": "CTS: Control Systems",
    "front": "DMX512 standard",
    "back": "Stage lighting control (512 channels)"
  },
  {
    "domain": "CTS: Control Systems",
    "front": "DMX512 impedance",
    "back": "120 ohms (twisted pair)"
  },
  {
    "domain": "CTS: Control Systems",
    "front": "DMX512 channels per universe",
    "back": "512 channels"
  },
  {
    "domain": "CTS: Control Systems",
    "front": "MIDI purpose",
    "back": "Musical Instrument Digital Interface"
  },
  {
    "domain": "CTS: Control Systems",
    "front": "AC mains (North America)",
    "back": "120V, 60 Hz"
  },
  {
    "domain": "CTS: Control Systems",
    "front": "AC mains (Europe/Asia)",
    "back": "230V, 50 Hz"
  },
  {
    "domain": "CTS: Control Systems",
    "front": "Low voltage threshold",
    "back": "Below 50V AC or 120V DC"
  },
  {
    "domain": "CTS: Electrical & Site Survey",
    "front": "Audio cable run length",
    "back": "300 feet maximum"
  },
  {
    "domain": "CTS: Electrical & Site Survey",
    "front": "Analog audio cable separation",
    "back": "12 inches from AC/video"
  },
  {
    "domain": "CTS: Electrical & Site Survey",
    "front": "Shielded twisted pair use",
    "back": "Analog audio, mic, RS-485"
  },
  {
    "domain": "CTS: Electrical & Site Survey",
    "front": "UTP typical use",
    "back": "Ethernet network cabling"
  },
  {
    "domain": "CTS: Electrical & Site Survey",
    "front": "Coaxial impedance",
    "back": "50Ω (RF) or 75Ω (video)"
  },
  {
    "domain": "CTS: Electrical & Site Survey",
    "front": "Raceway fill guideline",
    "back": "Max 40% for future expansion"
  },
  {
    "domain": "CTS: Electrical & Site Survey",
    "front": "Power calculation",
    "back": "Watts = Volts × Amps"
  },
  {
    "domain": "CTS: Electrical & Site Survey",
    "front": "RCA connector use",
    "back": "Consumer audio/video"
  },
  {
    "domain": "CTS: Electrical & Site Survey",
    "front": "BNC connector use",
    "back": "Video coaxial (75Ω)"
  },
  {
    "domain": "CTS: Electrical & Site Survey",
    "front": "SpeakON connector use",
    "back": "Professional speaker connections"
  },
  {
    "domain": "CTS: Project Management",
    "front": "Substantial completion",
    "back": "System is usable for its intended purpose. Warranty periods and final payment terms typically start here."
  },
  {
    "domain": "CTS: Project Management",
    "front": "RFI",
    "back": "Request for Information — formal written clarification of ambiguous or conflicting design documents."
  },
  {
    "domain": "CTS: Project Management",
    "front": "Punch list",
    "back": "List of remaining incomplete or deficient items to clear before final acceptance."
  },
  {
    "domain": "CTS: Needs Analysis",
    "front": "Needs analysis deliverable",
    "back": "Program report: business goals, requirements, constraints, budget range, and success criteria."
  },
  {
    "domain": "CTS: Needs Analysis",
    "front": "Needs vs wants",
    "back": "Needs are required for the system to fulfill its purpose; wants are optional enhancements. Design around needs first."
  },
  {
    "domain": "CTS: AV Design",
    "front": "Conduit fill guideline",
    "back": "40% maximum — leaves room for future cable pulls and heat dissipation."
  },
  {
    "domain": "CTS: AV Design",
    "front": "Screen bottom height (seated audience)",
    "back": "Roughly 42-48 inches above finished floor, clearing seated viewers’ sight lines."
  },
  {
    "domain": "CTS: AVIXA Standards",
    "front": "V201.01 contrast: analytical decision making",
    "back": "80:1 (basic decision making 15:1, passive viewing 7:1)."
  },
  {
    "domain": "CTS: Troubleshooting & Verification",
    "front": "Half-splitting",
    "back": "Test at the midpoint of the signal path to isolate which half holds the fault; repeat on the faulty half."
  },
  {
    "domain": "CTS: Troubleshooting & Verification",
    "front": "60 Hz hum = ?",
    "back": "Ground loop. Break it with an isolation transformer or balanced connection — never lift a safety ground."
  },
  {
    "domain": "CTS: Customer Relations",
    "front": "Confirming verbal agreements",
    "back": "Follow up every important decision with a written confirmation (email/minutes) the same day."
  },
  {
    "domain": "CTS: Commissioning & Closeout",
    "front": "As-built drawings",
    "back": "Design drawings updated to reflect what was ACTUALLY installed — the record for all future service."
  }
];

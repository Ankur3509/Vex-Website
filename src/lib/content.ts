export type Feature = { title: string; body: string; icon: string };

export type FeatureGroup = {
  id: string;
  label: string;
  code: string;
  tagline: string;
  features: Feature[];
};

export const FEATURE_GROUPS: FeatureGroup[] = [
  {
    id: "conversation",
    label: "Conversation",
    code: "SYS.SPEECH",
    tagline: "Talk to it like you'd talk to a person — because you can.",
    features: [
      {
        icon: "wave",
        title: "Real-time voice, true interruption",
        body: "Barge right in mid-sentence and VEX pivots. It's a conversation, not a walkie-talkie with turn-taking.",
      },
      {
        icon: "key",
        title: "Instantly switch to text",
        body: "Type commands alongside voice whenever you need precision or silence.",
      },
      {
        icon: "brain",
        title: "Remembers across sessions",
        body: "Long-term memory keeps your preferences, projects, and context between launches.",
      },
      {
        icon: "bell",
        title: "Proactive check-ins",
        body: "VEX notices things and speaks up on its own — briefings, monitors, and system alerts it raises unprompted.",
      },
    ],
  },
  {
    id: "vision",
    label: "Vision",
    code: "SUBSYS.OPTIX",
    tagline: "It sees what you see — screen, camera, and everything on them.",
    features: [
      {
        icon: "screen",
        title: "Screen analysis",
        body: "Ask what's on your screen, any app, or any browser tab — analyzed live.",
      },
      {
        icon: "camera",
        title: "Live object detection",
        body: "Webcam feed with real-time YOLO detection, drawn as HUD-styled bounding boxes with confidence labels.",
      },
      {
        icon: "memory",
        title: "Visual memory",
        body: "\u201CWhat did I show you earlier?\u201D actually works. Past captures are recalled by description.",
      },
      {
        icon: "face",
        title: "Ambient presence detection",
        body: "Recognizes who's in front of the camera and greets them by name. Faces stored locally only.",
      },
      {
        icon: "translate",
        title: "Live translation",
        body: "Point the camera at foreign text, or hold a translated conversation in real time.",
      },
    ],
  },
  {
    id: "control",
    label: "Control",
    code: "SUBSYS.GENESIS",
    tagline: "Your desktop, driven by your voice.",
    features: [
      {
        icon: "desktop",
        title: "Full desktop control",
        body: "Open apps, manage files, adjust system settings — all by voice.",
      },
      {
        icon: "code",
        title: "Code helper & dev agent",
        body: "Generates, inspects, and self-heals Python, JavaScript, and shell scripts for technical tasks.",
      },
      {
        icon: "hand",
        title: "Gesture control",
        body: "Pinch, point, and swipe via webcam — no extra hardware, no wearables.",
      },
      {
        icon: "hologram",
        title: "3D holographic model viewer",
        body: "Summon and manipulate 3D models by voice — rotate, zoom, pan, explode view.",
      },
    ],
  },
  {
    id: "messaging",
    label: "Messaging",
    code: "SUBSYS.NET",
    tagline: "Your inbox handled quietly, in the background.",
    features: [
      {
        icon: "whatsapp",
        title: "WhatsApp",
        body: "Check unread messages, send messages, and monitor chats — all behind the scenes in the background.",
      },
      {
        icon: "instagram",
        title: "Instagram (optional)",
        body: "The same background handling for Instagram DMs. Opt-in, so it only runs if you enable it.",
      },
    ],
  },
  {
    id: "productivity",
    label: "Productivity",
    code: "SUBSYS.ARCHIVE",
    tagline: "Real output, not just summaries — files it actually creates.",
    features: [
      {
        icon: "doc",
        title: "Generates real files",
        body: "PowerPoint, Excel, and Word documents built from a spoken request — actual files you can open.",
      },
      {
        icon: "research",
        title: "Deep research mode",
        body: "Multi-source research that runs in the background, saved as a clean formatted report. Conversation keeps flowing while it works.",
      },
      {
        icon: "macro",
        title: "Custom routines",
        body: "One phrase triggers a whole sequence of actions — a named macro chain with every step logged.",
      },
      {
        icon: "agents",
        title: "Named sub-agents",
        body: "GENESIS, OPTIX, PROBE, and ARCHIVE each handle a domain — and VEX shows you which one is working on what, live.",
      },
    ],
  },
  {
    id: "access",
    label: "Access",
    code: "SYS.REMOTE",
    tagline: "Keep it running. Talk to it from anywhere.",
    features: [
      {
        icon: "phone",
        title: "Remote control from your phone",
        body: "Pair via QR code and talk to VEX from anywhere — and hear it talk back.",
      },
      {
        icon: "tray",
        title: "Runs quietly in the background",
        body: "Lives in the system tray, listens when you need it, and can launch on startup.",
      },
    ],
  },
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Download & run the installer",
    body: "Grab the setup file below and run it. Windows may flash a SmartScreen prompt — that's expected for an unsigned indie build; we walk you through it.",
    status: "BOOT",
  },
  {
    step: "02",
    title: "Get a free Gemini API key",
    body: "Head to Google AI Studio and grab a key. Takes under a minute, no credit card required. VEX runs on Gemini's free tier.",
    status: "AUTH",
    link: {
      href: "https://aistudio.google.com/apikey",
      label: "aistudio.google.com/apikey",
    },
  },
  {
    step: "03",
    title: "First launch — a couple quick questions",
    body: "VEX asks a few optional questions about you and your setup. Skip them if you like — honest setup, no mandatory onboarding gauntlet.",
    status: "CALIBRATE",
  },
  {
    step: "04",
    title: "Talk to it",
    body: "Start talking. Interrupt it mid-sentence, ask it to look at your screen, tell it to open an app. It just works.",
    status: "ONLINE",
  },
];

export const FAQS = [
  {
    q: "Is my data safe?",
    a: "Let's be precise rather than reassuring. Your local memories, face descriptors, and visual capture vault are stored on your machine only. The audio you speak and the text/images you ask about are sent to Google's Gemini API while you're talking, because that's what powers the intelligence. What VEX stores long-term, where it stores it, and what goes to Gemini are the actual mechanics — and VEX keeps those surfaces separate: on-device vault for memories, live API calls for comprehension.",
  },
  {
    q: "Does this work on Mac?",
    a: "Not yet. VEX is currently a Windows 10/11 application (Python/PyQt, plus platform hooks like autostart and SmartScreen). There's no macOS or Linux build on the table yet — if you're not on Windows, hold off until a port ships.",
  },
  {
    q: "Do I need to pay for the AI model?",
    a: "No. VEX works with Google's Gemini free tier — that's why setup asks for a free API key from Google AI Studio (no credit card). Free tiers have usage limits, so heavy, marathon sessions can hit them; you can upgrade your own Gemini quota separately if you ever need more headroom.",
  },
  {
    q: "Is the WhatsApp / Instagram integration official?",
    a: "No — and we're upfront about it. VEX connects through the apps' own web/messaging protocols (the same mechanism many automation tools use) rather than official partner APIs. That means they aren't guaranteed forever and you use them at your own discretion. It's why the setup includes a simple in-app QR pairing step.",
  },
  {
    q: "What does the installer actually install?",
    a: "The standalone build bundles the runtime plus the models needed for vision and the 3D viewer, so it's a chunky download that unpacks to roughly a gigabyte or more of disk space. The WhatsApp bridge also needs Node.js installed separately — skip that part if you don't use WhatsApp.",
  },
];

export const STATS = [
  { value: 20, suffix: "+", label: "capability modules" },
  { value: 6, suffix: "", label: "feature domains" },
  { value: 4, suffix: "", label: "named sub-agents" },
  { value: 0, suffix: "", label: "dollars. it's free" },
];

export const DOWNLOAD = {
  version: "VEX 1.9",
  fileName: "VEX_Setup.exe",
  href: "https://github.com/Ankur3509/Vex-Website/releases/download/v1.9.0/VEX_Setup.exe",
  sizeHint:
    "~395 MB download — bundles the vision & 3D model files (unpacks to 1 GB+, free disk accordingly).",
  checksum: "SHA-256: EBC5168267F1DC5547BA00E9CE7449AEDCA36F0DB7FD54FD5BEE474FA2F2698E",
};

export const SOCIALS = {
  github: "https://github.com/Ankur3509/Vex",
  aiStudio: "https://aistudio.google.com/apikey",
};
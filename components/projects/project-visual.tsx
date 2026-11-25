const motifs: Record<string, { accent: string; caption: string }> = {
  expresskilo: { accent: "#3B82F6", caption: "Routes, handoffs, a shared line." },
  vibelinx: { accent: "#8B5CF6", caption: "Two rings. One room." },
  "wave-clinique": { accent: "#60A5FA", caption: "Three roles. One record boundary." },
  "baqala-tunisie": { accent: "#93C5FD", caption: "Stock, suppliers, a single ledger." },
  playball: { accent: "#22C55E", caption: "A date, then two teams." },
  "plenty-miles": { accent: "#86EFAC", caption: "A walk, then a meadow." },
  "fitness-coach": { accent: "#F43F5E", caption: "A workout, a challenge, a meal." },
  studenty: { accent: "#38BDF8", caption: "Student or club. One feed." },
  "voice-to-work": { accent: "#C4B5FD", caption: "Speech, then a report." },
  "al-mindhar": { accent: "#93C5FD", caption: "Listing, profile, booking." },
  "zaghouan-delivery": { accent: "#60A5FA", caption: "Four jobs, one order." },
  domotika: { accent: "#22C55E", caption: "Four modes. One panel." },
}

const references: Record<string, { src: string; alt: string; label: string; wide?: boolean }> = {
  expresskilo: {
    src: "/projects/expresskilo/06-home.png",
    alt: "ExpressKilo sender home on a phone",
    label: "App screen",
  },
  playball: {
    src: "/projects/playball/04-my-games.png",
    alt: "Playball My Games on a phone",
    label: "App screen",
  },
  "plenty-miles": {
    src: "/projects/plenty-miles/01_home.png",
    alt: "Plenty Miles home design reference, the Sunlit Meadow board",
    label: "Design reference",
  },
  "fitness-coach": {
    src: "/projects/fitness-coach/01-welcome.png",
    alt: "Fitness Coach welcome screen",
    label: "App screen",
  },
  studenty: {
    src: "/projects/studenty/architecture.png",
    alt: "Studenty architecture: Flutter client, Node.js API, MongoDB",
    label: "Architecture",
    wide: true,
  },
  domotika: {
    src: "/projects/domotika/01-arm.png",
    alt: "Domotika alarm panel with Arm selected",
    label: "App screen",
  },
}

export function ProjectVisual({
  slug,
  name,
  index,
}: {
  slug: string
  name: string
  index: string
}) {
  const motif = motifs[slug] ?? { accent: "#3B82F6", caption: "Study" }
  const reference = references[slug]

  if (reference) {
    return (
      <div className="sheen relative overflow-hidden border border-white/10 bg-[#0a1020] px-6 py-8 sm:px-8">
        <div className="flex items-start justify-between gap-4">
          <p className="font-mono text-xs tracking-[0.2em] text-white/50">{index}</p>
          <p className="text-[0.68rem] uppercase tracking-[0.18em] text-white/55">{reference.label}</p>
        </div>
        <img
          src={reference.src}
          alt={reference.alt}
          className={`mx-auto mt-6 w-full ${reference.wide ? "bg-paper" : "max-w-[280px]"}`}
        />
        <div className="mt-6">
          <p className="text-2xl font-medium tracking-tight text-white/90">{name}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/55">{motif.caption}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="sheen relative aspect-[16/11] overflow-hidden border border-white/10 bg-[#0a1020]">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 640 440" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <radialGradient id={`${slug}-glow`} cx="70%" cy="40%" r="55%">
            <stop offset="0%" stopColor={motif.accent} stopOpacity="0.35" />
            <stop offset="70%" stopColor="#070912" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="640" height="440" fill="#070912" />
        <rect width="640" height="440" fill={`url(#${slug}-glow)`} />
        <g fill="none" stroke={motif.accent} strokeOpacity="0.85">
          {slug === "expresskilo" && (
            <>
              <path d="M40 300 C160 300 180 120 320 140 C460 160 480 280 600 220" strokeWidth="1.4" />
              <circle cx="180" cy="210" r="6" fill={motif.accent} />
              <circle cx="420" cy="196" r="6" fill={motif.accent} />
              <rect x="300" y="250" width="90" height="54" />
            </>
          )}
          {slug === "vibelinx" && (
            <>
              <circle cx="330" cy="210" r="90" />
              <circle cx="330" cy="210" r="140" strokeOpacity="0.4" />
              <path d="M250 210 H410" />
              <circle cx="330" cy="210" r="8" fill={motif.accent} />
            </>
          )}
          {slug === "wave-clinique" && (
            <>
              <circle cx="220" cy="180" r="46" />
              <circle cx="330" cy="240" r="46" />
              <circle cx="430" cy="170" r="46" />
              <path d="M220 180 L330 240 L430 170" strokeOpacity="0.5" />
            </>
          )}
          {slug === "baqala-tunisie" && (
            <>
              <rect x="150" y="90" width="150" height="110" />
              <rect x="250" y="160" width="170" height="120" />
              <rect x="190" y="230" width="120" height="80" />
            </>
          )}
          {slug === "playball" && (
            <>
              <circle cx="320" cy="210" r="110" />
              <path d="M320 100 V320 M210 210 H430" />
              <path d="M240 140 Q320 210 400 140" />
              <path d="M240 280 Q320 210 400 280" />
            </>
          )}
          {slug === "studenty" && (
            <>
              <circle cx="200" cy="150" r="8" fill={motif.accent} />
              <circle cx="320" cy="250" r="8" fill={motif.accent} />
              <circle cx="450" cy="160" r="8" fill={motif.accent} />
              <path d="M200 150 L320 250 L450 160 L200 150" />
              <path d="M80 330 H560" strokeOpacity="0.35" />
            </>
          )}
          {slug === "voice-to-work" && (
            <>
              <path d="M80 220 H180 L210 150 L250 290 L290 180 L330 240 H560" />
              <rect x="470" y="150" width="90" height="120" />
            </>
          )}
          {slug === "al-mindhar" && (
            <>
              <path d="M180 280 L320 120 L460 280 Z" />
              <rect x="270" y="220" width="100" height="80" />
            </>
          )}
          {slug === "zaghouan-delivery" && (
            <>
              <rect x="90" y="150" width="90" height="90" />
              <rect x="210" y="150" width="90" height="90" />
              <rect x="330" y="150" width="90" height="90" />
              <rect x="450" y="150" width="90" height="90" />
              <path d="M135 240 H495" strokeOpacity="0.4" />
            </>
          )}
        </g>
      </svg>
      <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-7">
        <p className="font-mono text-xs tracking-[0.2em] text-white/50">{index}</p>
        <div>
          <p className="text-2xl font-medium tracking-tight text-white/90">{name}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/55">{motif.caption}</p>
          <p className="mt-3 text-[0.68rem] uppercase tracking-[0.18em] text-white/40">Composition — not a screenshot</p>
        </div>
      </div>
    </div>
  )
}

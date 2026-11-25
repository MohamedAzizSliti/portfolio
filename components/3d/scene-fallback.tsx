export function SceneFallback() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <div className="absolute left-1/2 top-1/2 h-[min(72vw,440px)] w-[min(72vw,440px)] -translate-x-1/2 -translate-y-1/2">
        <div className="absolute inset-[6%] rounded-full border border-white/10" />
        <div className="absolute inset-[18%] rounded-full border border-electric/35" />
        <div className="absolute left-[8%] right-[8%] top-1/2 h-px -translate-y-1/2 bg-violet/40" />
        <div className="absolute bottom-[18%] left-[18%] top-[18%] w-px bg-electric/30" />
        <div className="absolute inset-[34%] rounded-full bg-[radial-gradient(circle_at_32%_28%,#e8eef8_0%,#8ea0bb_38%,#1a2238_68%,#070912_100%)] shadow-[0_40px_90px_rgba(37,99,235,0.22)]" />
      </div>
    </div>
  )
}

"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { picturedUseCases, useCases, type UseCase, type UseStep } from "@/data/use-cases"

const EASE = [0.22, 1, 0.36, 1] as const

export function UseCaseStudio({ slug }: { slug?: string }) {
  const cases = slug ? useCases.filter((item) => item.slug === slug) : picturedUseCases
  const [active, setActive] = useState(0)
  const [step, setStep] = useState(0)
  const [playing, setPlaying] = useState(!slug)
  const reduce = useReducedMotion()
  const current = cases[Math.min(active, Math.max(cases.length - 1, 0))]

  useEffect(() => {
    setStep(0)
  }, [active, slug])

  useEffect(() => {
    if (!current || reduce || !playing) return undefined
    const timer = window.setInterval(() => {
      setStep((value) => (value + 1) % current.steps.length)
    }, 6400)
    return () => window.clearInterval(timer)
  }, [current, playing, reduce])

  if (!current) return null

  const frame = current.steps[step] ?? current.steps[0]

  return (
    <div
      className={slug ? "" : "grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-12"}
      onMouseEnter={() => setPlaying(false)}
      onMouseLeave={() => setPlaying(true)}
    >
      {cases.length > 1 ? (
        <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0" role="tablist" aria-label="Applications">
          {cases.map((item, index) => {
            const selected = index === active
            return (
              <button
                key={item.slug}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(index)}
                className={`shrink-0 border px-4 py-3 text-left transition-colors duration-300 lg:w-full ${
                  selected ? "border-electric bg-white/[0.04] text-paper" : "border-white/10 text-mist hover:border-white/30 hover:text-paper"
                }`}
              >
                <span className="block text-sm font-medium">{item.name}</span>
                <span className="mt-1 block font-mono text-[0.65rem] uppercase tracking-[0.14em]">{item.source}</span>
              </button>
            )
          })}
        </div>
      ) : null}

      <div>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="kicker">
              {frame.actor} — {String(step + 1).padStart(2, "0")} / {String(current.steps.length).padStart(2, "0")}
            </p>
            <h3 className="mt-3 text-2xl font-medium tracking-tight sm:text-3xl">{frame.title}</h3>
          </div>
          <button
            type="button"
            className="btn-ghost px-4 py-2 text-[0.68rem]"
            onClick={() => setPlaying((value) => !value)}
            aria-pressed={playing}
          >
            {playing && !reduce ? "Pause" : "Play"}
          </button>
        </div>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-mist">{frame.detail}</p>

        <div className="mt-8 grid items-center gap-8 xl:grid-cols-[minmax(0,280px)_minmax(0,1fr)]">
          <PhoneFrame useCase={current} step={frame} stepIndex={step} />
          <ol className="space-y-2">
            {current.steps.map((item, index) => {
              const selected = index === step
              return (
                <li key={item.screen + item.title}>
                  <button
                    type="button"
                    onClick={() => setStep(index)}
                    className={`grid w-full grid-cols-[auto_1fr] gap-4 border px-4 py-3 text-left transition-colors duration-300 ${
                      selected ? "border-electric/70 bg-white/[0.03]" : "border-white/10 hover:border-white/25"
                    }`}
                  >
                    <span className="font-mono text-xs text-electric">{String(index + 1).padStart(2, "0")}</span>
                    <span>
                      <span className="block text-sm font-medium">{item.title}</span>
                      <span className="mt-1 block font-mono text-[0.65rem] uppercase tracking-[0.14em] text-mist">
                        {item.screen}
                      </span>
                    </span>
                  </button>
                </li>
              )
            })}
          </ol>
        </div>

        <div className="mt-6 h-px w-full overflow-hidden bg-white/10">
          <motion.div
            className="h-full bg-gradient-to-r from-azure to-violet"
            initial={false}
            animate={{ width: `${((step + 1) / current.steps.length) * 100}%` }}
            transition={{ duration: reduce ? 0 : 1.1, ease: EASE }}
          />
        </div>
        <p className="mt-4 text-xs leading-relaxed text-mist">{current.note}</p>
      </div>
    </div>
  )
}

function PhoneFrame({ useCase, step, stepIndex }: { useCase: UseCase; step: UseStep; stepIndex: number }) {
  const reduce = useReducedMotion()

  if (step.image && step.bareImage) {
    return (
      <div className="phone-float mx-auto w-full max-w-[280px]">
        <AnimatePresence mode="wait">
          <motion.img
            key={`${useCase.slug}-${stepIndex}`}
            src={step.image}
            alt={step.imageAlt ?? step.headline}
            className="w-full rounded-[1.75rem]"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -22 }}
            transition={{ duration: 0.95, ease: EASE }}
          />
        </AnimatePresence>
        <p className="mt-3 text-center font-mono text-[0.58rem] uppercase tracking-[0.14em] text-mist">App screen</p>
      </div>
    )
  }

  return (
    <div className="phone-float mx-auto w-full max-w-[280px]">
      <div className="rounded-[2rem] border border-white/15 bg-[#05070f] p-2 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
        <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#0c1224]">
          <div className="flex items-center justify-between px-4 py-3">
            <span className="text-[0.65rem] uppercase tracking-[0.16em] text-mist">AZ.</span>
            <span className="font-mono text-[0.62rem] text-mist">{useCase.name}</span>
          </div>
          <div className="flex flex-wrap gap-1 px-3 pb-3">
            {step.tabs.map((tab, index) => (
              <span
                key={tab}
                className={`rounded-full px-2 py-1 text-[0.58rem] uppercase tracking-[0.12em] ${
                  index === step.activeTab ? "bg-azure text-paper" : "bg-white/5 text-mist"
                }`}
              >
                {tab}
              </span>
            ))}
          </div>
          <div className="relative min-h-[250px] overflow-hidden border-y border-white/10">
            <AnimatePresence mode="wait">
              {step.image ? (
                <motion.div
                  key={`${useCase.slug}-${stepIndex}`}
                  className="bg-[#e7f6df]"
                  initial={reduce ? false : { opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -22 }}
                  transition={{ duration: 0.95, ease: EASE }}
                >
                  <img src={step.image} alt={step.imageAlt ?? step.headline} className="h-auto w-full" />
                  <p className="bg-[#e7f6df] px-3 py-2 text-center font-mono text-[0.58rem] uppercase tracking-[0.14em] text-[#143024]">
                    Design reference
                  </p>
                </motion.div>
              ) : (
              <motion.div
                key={`${useCase.slug}-${stepIndex}`}
                className="px-4 py-5"
                initial={reduce ? false : { opacity: 0, y: 28, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={reduce ? undefined : { opacity: 0, y: -22, filter: "blur(4px)" }}
                transition={{ duration: 0.95, ease: EASE }}
              >
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-electric">{step.actor}</p>
                <p className="mt-3 text-xl font-medium tracking-tight">{step.headline}</p>
                <ul className="mt-5 space-y-3">
                  {step.rows.map((row, index) => (
                    <motion.li
                      key={row.label}
                      className="flex items-baseline justify-between gap-3 border-b border-white/10 pb-2 text-xs"
                      initial={reduce ? false : { opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.16 * index, duration: 0.7 }}
                    >
                      <span className="text-mist">{row.label}</span>
                      <span className="text-right">{row.value}</span>
                    </motion.li>
                  ))}
                </ul>
                <motion.div
                  className="btn-primary mt-5 w-full py-2.5 text-[0.68rem]"
                  initial={reduce ? false : { scale: 0.96 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.35, type: "spring", stiffness: 120, damping: 22 }}
                >
                  {step.action}
                </motion.div>
              </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="flex justify-center py-3">
            <span className="h-1 w-16 rounded-full bg-white/20" />
          </div>
        </div>
      </div>
    </div>
  )
}

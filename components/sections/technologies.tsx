"use client"

import { useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { technologyGroups } from "@/data/technologies"
import { Reveal } from "@/components/motion/reveal"

const ease = [0.22, 1, 0.36, 1] as const

export function Technologies() {
  const [groupId, setGroupId] = useState(technologyGroups[0].id)
  const [name, setName] = useState(technologyGroups[0].items[0].name)
  const reduce = useReducedMotion()
  const group = technologyGroups.find((item) => item.id === groupId) ?? technologyGroups[0]
  const current = group.items.find((item) => item.name === name) ?? group.items[0]

  const openGroup = (id: string) => {
    const next = technologyGroups.find((item) => item.id === id) ?? technologyGroups[0]
    setGroupId(next.id)
    setName(next.items[0].name)
  }

  return (
    <section id="ecosystem" className="border-t border-white/10 bg-panel">
      <Reveal className="shell py-24 lg:py-24">
        <div className="max-w-3xl">
          <p className="kicker">02 — Ecosystem</p>
          <h2 className="heading-2 mt-4 max-w-[680px]">
            Five lanes.
            <span className="text-mist"> One stack.</span>
          </h2>
          <p className="prose-quiet mt-6 max-w-xl">
            Mobile, web, data, and automation. Open a lane, then a tool. Each one is something I have used to ship or shape a product.
          </p>
        </div>

        <div className="mt-14 hidden h-[540px] gap-3 lg:flex">
          {technologyGroups.map((item, index) => {
            const open = item.id === group.id
            return (
              <motion.div
                key={item.id}
                className={`relative flex h-full min-w-0 flex-col overflow-hidden border ${
                  open ? "border-electric/70 bg-ink" : "border-white/10 bg-transparent"
                }`}
                animate={{ flex: open ? 5.4 : 0.72 }}
                transition={{ duration: reduce ? 0 : 1.15, ease }}
                onMouseEnter={() => {
                  if (!open) openGroup(item.id)
                }}
              >
                <button
                  type="button"
                  onClick={() => openGroup(item.id)}
                  className={`flex w-full text-left ${
                    open ? "items-start justify-between gap-3 p-4" : "h-full flex-col items-center justify-center gap-8 p-3"
                  }`}
                >
                  <span className="kicker">{String(index + 1).padStart(2, "0")}</span>
                  {!open ? (
                    <span className="font-medium tracking-tight text-paper [writing-mode:vertical-rl]">
                      {item.label}
                    </span>
                  ) : (
                    <span className="text-sm uppercase tracking-[0.18em] text-electric">{item.label}</span>
                  )}
                </button>

                {open ? (
                  <div className="flex min-h-0 flex-1 flex-col px-6 pb-6">
                    <ul className="space-y-1">
                      {item.items.map((tech) => {
                        const selected = tech.name === current.name
                        return (
                          <li key={tech.name}>
                            <button
                              type="button"
                              onMouseEnter={() => setName(tech.name)}
                              onFocus={() => setName(tech.name)}
                              onClick={() => setName(tech.name)}
                              className={`text-left font-medium tracking-tight transition-colors ${
                                selected
                                  ? "text-3xl font-semibold leading-9 text-paper"
                                  : "text-xl text-mist hover:text-paper"
                              }`}
                            >
                              {tech.name}
                            </button>
                          </li>
                        )
                      })}
                    </ul>
                    <p className="mt-auto max-w-md border-t border-white/10 pt-5 text-sm leading-relaxed text-mist">
                      {current.note}
                    </p>
                  </div>
                ) : null}

                <span
                  className={`absolute inset-x-0 bottom-0 h-px origin-left ${open ? "bg-electric" : "bg-white/15"}`}
                  style={{ transform: open ? "scaleX(1)" : "scaleX(0.35)" }}
                />
              </motion.div>
            )
          })}
        </div>

        <div className="mt-12 lg:hidden">
          <div className="flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Stack lanes">
            {technologyGroups.map((item) => {
              const selected = item.id === group.id
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => openGroup(item.id)}
                  className={`shrink-0 border px-4 py-2 text-sm ${
                    selected ? "border-electric text-paper" : "border-white/10 text-mist"
                  }`}
                >
                  {item.label}
                </button>
              )
            })}
          </div>
          <ul className="mt-6 divide-y divide-white/10 border-y border-white/10">
            {group.items.map((tech) => {
              const selected = tech.name === current.name
              return (
                <li key={tech.name}>
                  <button type="button" className="w-full py-4 text-left" onClick={() => setName(tech.name)}>
                    <span className={`block text-lg font-medium ${selected ? "text-paper" : "text-mist"}`}>
                      {tech.name}
                    </span>
                    {selected ? <span className="mt-2 block text-sm leading-relaxed text-mist">{tech.note}</span> : null}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}

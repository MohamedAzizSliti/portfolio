"use client"

import { useEffect, useRef, useState } from "react"
import { useReducedMotion } from "framer-motion"

const lines = ["Ship the working product.", "Then the system that keeps it running."]

export function Tagline() {
  const reduce = useReducedMotion()
  const words = lines.flatMap((line) => line.split(" "))
  const refs = useRef<Array<HTMLSpanElement | null>>([])
  const [lit, setLit] = useState<boolean[]>(() => words.map(() => false))

  useEffect(() => {
    if (reduce) {
      setLit(words.map(() => true))
      return undefined
    }
    const observers = refs.current.map((node, index) => {
      if (!node) return null
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry?.isIntersecting) return
          setLit((current) => {
            if (current[index]) return current
            const next = [...current]
            next[index] = true
            return next
          })
          observer.disconnect()
        },
        { rootMargin: "-30% 0px -30% 0px", threshold: 0.6 },
      )
      observer.observe(node)
      return observer
    })
    return () => observers.forEach((observer) => observer?.disconnect())
  }, [reduce, words.length])

  let cursor = 0

  return (
    <section className="border-t border-[#272727] bg-ink">
      <div className="shell py-16 lg:py-24">
        <h2 className="heading-2 max-w-[680px]">
          {lines.map((line) => {
            const parts = line.split(" ")
            const row = (
              <span key={line} className="block">
                {parts.map((word) => {
                  const index = cursor
                  cursor += 1
                  return (
                    <span
                      key={`${word}-${index}`}
                      ref={(node) => {
                        refs.current[index] = node
                      }}
                      className="mr-[0.3em] inline-block transition-colors duration-1000 ease-draw"
                      style={{ color: lit[index] || reduce ? "#ffffff" : "rgba(255,255,255,0.3)" }}
                    >
                      {word}
                    </span>
                  )
                })}
              </span>
            )
            return row
          })}
        </h2>
      </div>
    </section>
  )
}

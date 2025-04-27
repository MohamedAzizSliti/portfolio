"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import { motion, useAnimation, useInView, type Variant } from "framer-motion"

interface AnimateInProps {
  children: React.ReactNode
  className?: string
  from?: Variant
  to?: Variant
  delay?: number
  duration?: number
  once?: boolean
  threshold?: number
}

export function AnimateIn({
  children,
  className,
  from = { opacity: 0, y: 20 },
  to = { opacity: 1, y: 0 },
  delay = 0,
  duration = 0.5,
  once = true,
  threshold = 0.1,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, amount: threshold })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    } else if (!once) {
      controls.start("hidden")
    }
  }, [isInView, controls, once])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: from,
        visible: {
          ...to,
          transition: {
            delay,
            duration,
            ease: "easeOut",
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function FadeIn({ children, className, delay = 0, duration = 0.5, once = true }) {
  return (
    <AnimateIn
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      className={className}
      delay={delay}
      duration={duration}
      once={once}
    >
      {children}
    </AnimateIn>
  )
}

export function FadeUp({ children, className, delay = 0, duration = 0.5, once = true }) {
  return (
    <AnimateIn
      from={{ opacity: 0, y: 20 }}
      to={{ opacity: 1, y: 0 }}
      className={className}
      delay={delay}
      duration={duration}
      once={once}
    >
      {children}
    </AnimateIn>
  )
}

export function FadeDown({ children, className, delay = 0, duration = 0.5, once = true }) {
  return (
    <AnimateIn
      from={{ opacity: 0, y: -20 }}
      to={{ opacity: 1, y: 0 }}
      className={className}
      delay={delay}
      duration={duration}
      once={once}
    >
      {children}
    </AnimateIn>
  )
}

export function FadeRight({ children, className, delay = 0, duration = 0.5, once = true }) {
  return (
    <AnimateIn
      from={{ opacity: 0, x: -20 }}
      to={{ opacity: 1, x: 0 }}
      className={className}
      delay={delay}
      duration={duration}
      once={once}
    >
      {children}
    </AnimateIn>
  )
}

export function FadeLeft({ children, className, delay = 0, duration = 0.5, once = true }) {
  return (
    <AnimateIn
      from={{ opacity: 0, x: 20 }}
      to={{ opacity: 1, x: 0 }}
      className={className}
      delay={delay}
      duration={duration}
      once={once}
    >
      {children}
    </AnimateIn>
  )
}

export function ScaleIn({ children, className, delay = 0, duration = 0.5, once = true }) {
  return (
    <AnimateIn
      from={{ opacity: 0, scale: 0.9 }}
      to={{ opacity: 1, scale: 1 }}
      className={className}
      delay={delay}
      duration={duration}
      once={once}
    >
      {children}
    </AnimateIn>
  )
}

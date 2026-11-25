"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { profile } from "@/lib/site"

const rise = {
  hidden: { y: 32, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 1.35, ease: [0.22, 1, 0.36, 1] as const } },
}

export function HeroIntro() {
  const reduce = useReducedMotion()

  return (
    <div className="relative z-10 flex max-w-[680px] flex-col justify-end pb-12 pt-28 lg:pb-16">
      <motion.p
        className="kicker"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        {profile.availability}
      </motion.p>

      <h1 className="heading-1 hero-title mt-6 max-w-[680px]">
        Engineering
        <br />
        digital
        <br />
        experiences.
      </h1>

      <motion.p
        className="prose-quiet mt-6 max-w-[680px]"
        initial={reduce ? false : "hidden"}
        animate="show"
        variants={rise}
      >
        I am Mohamed Aziz Sliti. I build mobile apps and web products for teams that need the interface and the system behind it.
      </motion.p>

      <motion.div
        className="mt-8"
        initial={reduce ? false : "hidden"}
        animate="show"
        variants={rise}
        transition={{ delay: 0.2 }}
      >
        <Link href="/#contact" className="btn-primary">
          Start a project
        </Link>
      </motion.div>

      <p className="mt-6 text-sm font-medium leading-5 text-mist">Based in {profile.location}.</p>
    </div>
  )
}

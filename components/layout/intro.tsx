"use client"

import { useEffect } from "react"

export function Intro() {
  useEffect(() => {
    const root = document.documentElement
    if (!root.classList.contains("is-loading")) return undefined

    const finish = () => {
      root.classList.remove("is-loading")
      try {
        sessionStorage.setItem("az-intro", "1")
      } catch {
        // Private mode can block storage. The intro still ends.
      }
    }

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" || event.key === "Enter") finish()
    }

    const timeout = window.setTimeout(finish, 2500)
    window.addEventListener("keydown", onKey)
    return () => {
      window.clearTimeout(timeout)
      window.removeEventListener("keydown", onKey)
    }
  }, [])

  return (
    <div className="intro" role="status" aria-live="polite" aria-label="Loading">
      <button type="button" className="intro-inner text-left" onClick={() => document.documentElement.classList.remove("is-loading")}>
        <p className="intro-mark">
          AZ<span>.</span>
        </p>
        <div className="intro-bar" aria-hidden="true">
          <span />
        </div>
        <p className="kicker">Mohamed Aziz Sliti</p>
      </button>
    </div>
  )
}

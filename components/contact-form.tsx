"use client"

import { useState, type FormEvent } from "react"

type Status = "idle" | "loading" | "success" | "error"

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState("Something went wrong. Email me directly.")

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    setStatus("loading")

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as { error?: string } | null
        setError(payload?.error || "Something went wrong. Email me directly.")
        setStatus("error")
        return
      }
      form.reset()
      setStatus("success")
    } catch {
      setError("Something went wrong. Email me directly.")
      setStatus("error")
    }
  }

  return (
    <form className="space-y-4" onSubmit={onSubmit} noValidate={false}>
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="kicker">
            Name
          </label>
          <input id="name" name="name" required autoComplete="name" className="field mt-2" placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className="kicker">
            Email
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className="field mt-2" placeholder="you@company.com" />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="kicker">
          Subject
        </label>
        <input id="subject" name="subject" required className="field mt-2" placeholder="What are you building?" />
      </div>
      <div>
        <label htmlFor="message" className="kicker">
          Message
        </label>
        <textarea id="message" name="message" required rows={6} className="field mt-2 resize-y" placeholder="The idea, the timeline, the constraint." />
      </div>
      <button type="submit" className="btn-primary w-full sm:w-auto" disabled={status === "loading"}>
        {status === "loading" ? "Sending" : "Start a project"}
      </button>
      <p className="min-h-5 text-sm" role="status" aria-live="polite">
        {status === "success" ? <span className="text-emerald-300">Message sent. I&apos;ll reply by email.</span> : null}
        {status === "error" ? <span className="text-red-300">{error}</span> : null}
      </p>
    </form>
  )
}

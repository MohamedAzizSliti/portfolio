import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { createAutoReplyTemplate, createContactEmailTemplate } from "@/utils/email-templates"

type Bucket = { count: number; reset: number }

const buckets = new Map<string, Bucket>()

function clientKey(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for")
  return forwarded?.split(",")[0]?.trim() || "local"
}

function allow(key: string) {
  const now = Date.now()
  const current = buckets.get(key)
  if (!current || now > current.reset) {
    buckets.set(key, { count: 1, reset: now + 60_000 })
    return true
  }
  if (current.count >= 5) return false
  buckets.set(key, { count: current.count + 1, reset: current.reset })
  return true
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
}

function clean(value: unknown, max: number) {
  if (typeof value !== "string") return ""
  return value.replace(/[\u0000]/g, "").trim().slice(0, max)
}

function headerSafe(value: string) {
  return value.replace(/[\r\n]/g, " ").slice(0, 140)
}

export async function POST(request: Request) {
  try {
    if (!allow(clientKey(request))) {
      return NextResponse.json({ error: "Too many messages. Try again shortly." }, { status: 429 })
    }

    const body = (await request.json()) as Record<string, unknown>
    if (clean(body.website, 200)) {
      return NextResponse.json({ success: true })
    }

    const name = clean(body.name, 80)
    const email = clean(body.email, 200)
    const subject = headerSafe(clean(body.subject, 140))
    const message = clean(body.message, 4000)
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    if (!name || !subject || !message || !emailOk) {
      return NextResponse.json({ error: "Check the name, email, subject, and message." }, { status: 400 })
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      return NextResponse.json({ error: "Mail is not configured." }, { status: 503 })
    }

    const safe = {
      name: escapeHtml(name),
      email: escapeHtml(email),
      subject: escapeHtml(subject),
      message: escapeHtml(message),
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "zzsliti1999@gmail.com",
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: createContactEmailTemplate(safe),
    })

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for your message",
      text: `Hello ${name},\n\nThank you for reaching out. I received your message and will reply as soon as I can.\n\nMohamed Aziz Sliti`,
      html: createAutoReplyTemplate({ name: safe.name }),
    })

    return NextResponse.json({ success: true })
  } catch {
    console.error("Contact form failed to send")
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}

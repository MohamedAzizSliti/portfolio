import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { createContactEmailTemplate, createAutoReplyTemplate } from "@/utils/email-templates"

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Email content for you (the portfolio owner)
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "zzsliti1999@gmail.com", // Your email where you want to receive messages
      subject: `Portfolio Contact: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: createContactEmailTemplate({ name, email, subject, message }),
    }

    // Auto-reply email to the sender
    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for your message",
      text: `
        Hello ${name},
        
        Thank you for reaching out through my portfolio website. I've received your message and will get back to you as soon as possible.
        
        Best regards,
        Mohamed Aziz Sliti
      `,
      html: createAutoReplyTemplate({ name }),
    }

    // Send emails
    await transporter.sendMail(mailOptions)
    await transporter.sendMail(autoReplyOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}

import type { Metadata } from "next"
import Link from "next/link"
import { profile } from "@/lib/site"

export const metadata: Metadata = {
  title: "Privacy",
  description: "How this personal site handles the messages you send.",
}

export default function PrivacyPage() {
  return (
    <main id="main" className="shell pb-16 pt-32">
      <p className="kicker">Privacy</p>
      <h1 className="heading-2 mt-4 max-w-[680px]">What this site keeps.</h1>
      <div className="mt-8 max-w-[680px] space-y-4 text-pretty text-base font-normal leading-6 text-mist">
        <p>
          This is a personal site for {profile.name}. It does not sell data and it does not run an advertising account.
        </p>
        <p>
          If you use the contact form, the name, email, subject, and message you type are sent by email to {profile.email}.
          That message is kept only as email. Do not send passwords or private documents through the form.
        </p>
        <p>The form asks you to leave one field empty. That field is used to ignore automated submissions.</p>
      </div>
      <Link href="/" className="btn-ghost mt-8">
        Back home
      </Link>
    </main>
  )
}

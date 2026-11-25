import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms",
  description: "What using this personal site does and does not agree to.",
}

export default function TermsPage() {
  return (
    <main id="main" className="shell pb-16 pt-32">
      <p className="kicker">Terms</p>
      <h1 className="heading-2 mt-4 max-w-[680px]">A conversation is not a contract.</h1>
      <div className="mt-8 max-w-[680px] space-y-4 text-pretty text-base font-normal leading-6 text-mist">
        <p>
          The work described here is a record of projects and roles. Sending the contact form starts a conversation. It
          does not hire anyone, set a price, or reserve a date.
        </p>
        <p>Project pages describe scope that can be verified. They are not an offer to reproduce a client product.</p>
      </div>
      <Link href="/" className="btn-ghost mt-8">
        Back home
      </Link>
    </main>
  )
}

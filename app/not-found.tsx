import Link from "next/link"

export default function NotFound() {
  return (
    <main id="main" className="shell flex min-h-[100svh] flex-col justify-end pb-20 pt-32">
      <p className="kicker">404</p>
      <h1 className="heading-1 mt-4 max-w-[680px]">This page is not on the map.</h1>
      <Link href="/" className="btn-primary mt-8 w-fit">
        Back home
      </Link>
    </main>
  )
}

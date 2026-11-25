import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Script from "next/script"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteShell } from "@/components/layout/site-shell"
import { getCanonicalUrl, getSiteUrl, profile } from "@/lib/site"
import "@/app/globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

const description =
  "Mohamed Aziz Sliti is a full-stack and mobile developer in Tunis. He builds Flutter and React Native products, Next.js platforms, backends, and AI-powered workflows."

const canonical = getCanonicalUrl("/")

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Mohamed Aziz Sliti — Full stack and mobile developer",
    template: "%s — Mohamed Aziz Sliti",
  },
  description,
  applicationName: "AZ.",
  authors: [{ name: profile.name, url: profile.linkedin }],
  creator: profile.name,
  keywords: [
    "Mohamed Aziz Sliti",
    "Full-Stack Developer",
    "Flutter Developer",
    "React Native Developer",
    "Next.js Developer",
    "AI Automation Developer",
    "Tunisia",
  ],
  alternates: canonical ? { canonical } : undefined,
  openGraph: {
    title: "Mohamed Aziz Sliti — Full stack and mobile developer",
    description,
    type: "website",
    locale: "en_US",
    siteName: "AZ. — Mohamed Aziz Sliti",
    url: canonical,
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Aziz Sliti — Full stack and mobile developer",
    description,
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  description,
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tunis",
    addressCountry: "TN",
  },
  sameAs: [profile.github, profile.linkedin],
  knowsAbout: [
    "Flutter",
    "React Native",
    "Next.js",
    "Node.js",
    "AI automation",
  ],
  url: canonical,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} dark`} suppressHydrationWarning>
      <body>
        <Script id="az-intro" strategy="beforeInteractive">
          {`try{var reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;if(!reduce&&sessionStorage.getItem("az-intro")!=="1"){document.documentElement.classList.add("is-loading")}}catch(e){}`}
        </Script>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <ThemeProvider attribute="class" forcedTheme="dark" enableSystem={false} disableTransitionOnChange>
          <SiteShell>{children}</SiteShell>
        </ThemeProvider>
      </body>
    </html>
  )
}

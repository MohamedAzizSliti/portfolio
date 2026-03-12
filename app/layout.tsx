import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import type { PropsWithChildren } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Mohamed Aziz Sliti - Full Stack Developer",
  description: "Portfolio of Mohamed Aziz Sliti, a Full Stack Developer specializing in Mobile (Flutter) and Web (React, Next.js) development based in Tunisia",
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

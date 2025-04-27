import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import type { PropsWithChildren } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Mohamed Aziz Sliti - Flutter & Mobile Developer",
  description: "Portfolio of Mohamed Aziz Sliti, a Flutter and Mobile Developer based in Tunisia",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

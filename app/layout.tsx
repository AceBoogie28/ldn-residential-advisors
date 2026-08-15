import type { Metadata } from "next"
import { Fraunces, Inter } from "next/font/google"

import "./globals.css"

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-fraunces"
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter"
})

export const metadata: Metadata = {
  title: "London Residential Advisors — Your Trusted Resource for London Real Estate",
  description:
    "Data-backed, transparent property advisory for international buyers relocating to London. We guide you through every phase of the purchase, from brief to completion."
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-ink-950 font-sans text-white antialiased">{children}</body>
    </html>
  )
}

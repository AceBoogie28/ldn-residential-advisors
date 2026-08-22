import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"

import "./globals.css"

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
    <html lang="en" className={GeistSans.variable}>
      <body className="bg-ink-950 font-sans text-white antialiased">{children}</body>
    </html>
  )
}

import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"

import { NoiseOverlay } from "~/components/NoiseOverlay"

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
      <body className="bg-ink font-sans text-white antialiased">
        <NoiseOverlay />
        {children}
      </body>
    </html>
  )
}

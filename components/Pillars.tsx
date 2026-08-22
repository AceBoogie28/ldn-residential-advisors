"use client"

import { motion } from "framer-motion"

import { AmbientGlow } from "./AmbientGlow"

const PILLARS = [
  {
    title: "Data-Backed Guidance",
    description:
      "Every recommendation is grounded in verified sales data, price trends, and comparable analysis — not gut feel."
  },
  {
    title: "Radical Transparency",
    description:
      "Our fee structure, our sourcing, our reasoning — all disclosed upfront. No hidden referral arrangements."
  },
  {
    title: "Independent & Discreet",
    description:
      "We work for you alone, not the seller. Engagements are handled with the confidentiality our clients expect."
  },
  {
    title: "London Expertise",
    description:
      "Deep, current knowledge of London's boroughs, tenure quirks, and planning constraints — built for relocating buyers."
  }
]

export function Pillars() {
  return (
    <section id="why-us" className="border-b border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <motion.div
          className="relative max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}>
          <AmbientGlow className="left-1/4 top-0" />
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-sans text-xs uppercase tracking-widest text-white/90 backdrop-blur-sm">
            Why Us
          </p>
          <h2 className="mt-4 font-sans text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Built for buyers who need a trusted resource, not a salesperson
          </h2>
        </motion.div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {PILLARS.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.12 }}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(255,255,255,0.03)]">
              <h3 className="font-sans text-xl font-medium tracking-tight text-white">{pillar.title}</h3>
              <p className="mt-3 font-sans text-sm font-normal leading-relaxed text-white/80">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

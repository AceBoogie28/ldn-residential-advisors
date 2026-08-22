"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

import { AmbientGlow } from "./AmbientGlow"

const PHASES = [
  {
    step: "01",
    title: "Discovery & Brief",
    description:
      "We translate your goals — budget, timeline, lifestyle, investment horizon — into a precise search brief and target areas."
  },
  {
    step: "02",
    title: "Market Intelligence",
    description:
      "Off-market access and live comparable data narrow the field to properties that meet your brief and hold their value."
  },
  {
    step: "03",
    title: "Viewings & Due Diligence",
    description:
      "We view on your behalf or alongside you, and commission the surveys, tenure, and title checks before you commit."
  },
  {
    step: "04",
    title: "Negotiation",
    description:
      "Every offer is benchmarked against verified local sales data, so you know the fair price before you name one."
  },
  {
    step: "05",
    title: "Completion & Handover",
    description:
      "We coordinate solicitors, lenders, and surveyors through exchange and completion, and stay on for the handover."
  }
]

export function Journey() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  const lineScaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section ref={sectionRef} id="process" className="border-b border-white/10 bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <motion.div
          className="relative max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}>
          <AmbientGlow className="left-1/4 top-0" />
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-sans text-xs uppercase tracking-widest text-white/90 backdrop-blur-sm">
            The Process
          </p>
          <h2 className="mt-4 font-sans text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Five phases, one point of contact
          </h2>
          <p className="mt-4 font-sans text-base font-normal leading-relaxed text-white/80">
            A structured path from your first brief to keys in hand — built for buyers who can&rsquo;t
            be on the ground in London every step of the way.
          </p>
        </motion.div>
        <div className="relative mt-16">
          <motion.div style={{ scaleX: lineScaleX }} className="absolute inset-x-0 top-0 h-px origin-left bg-white" />
          <ol className="grid gap-8 pt-8 sm:grid-cols-2 lg:grid-cols-5">
            {PHASES.map((phase, index) => (
              <motion.li
                key={phase.step}
                className="relative"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.12 }}>
                <span className="font-sans text-xs uppercase tracking-widest text-white/90">{phase.step}</span>
                <h3 className="mt-3 font-sans text-lg font-medium tracking-tight text-white">{phase.title}</h3>
                <p className="mt-2 font-sans text-sm font-normal leading-relaxed text-white/80">{phase.description}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

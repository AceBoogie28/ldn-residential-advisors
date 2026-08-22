"use client"

import { useState } from "react"

const TESTIMONIALS = [
  {
    quote:
      "Alex was a pleasure to work with from the very moment we met him. His calm and personable nature always made us feel at ease and not under any pressure. He was there as a knowledgeable guide to help us decide what we liked and needed, and we never felt rushed or pushed, or as though he had any agenda other than helping ensure we chose somewhere we would be really happy. When it came time to negotiate, Alex had the skills and personality to close the deal both with professionalism and with our best interests at the forefront. We couldn't be happier with where we landed, and we are very grateful to have gone through the process with Alex. We've found our forever home, but if we ever move again, we would absolutely work with Alex again.",
    author: "Steve G."
  },
  {
    quote:
      "I had not met Alex before but throughout our association, I found him to be very professional, knowledgeable and responsive to any questions I might have had. He gave me sound advice with no pressure which resulted in a most satisfactory outcome. Whenever we met, which was often, I found him well prepared. When decisions were to be made, he gave me quality advice and available options when possible. The decisions were mine. I have no hesitation in giving him my highest recommendation.",
    author: "Bill B."
  },
  {
    quote:
      "From our very first interaction to the last detail after our purchase/sale, Alex was a true professional. His understanding of the market is impressive, and his numerous close relationships gave us an advantage. I cannot recommend Alex strongly enough to anyone seeking a realtor. He's next level.",
    author: "Colin T."
  }
]

const TRUNCATE_LENGTH = 220

function truncate(text: string, length: number) {
  if (text.length <= length) return text
  const cut = text.slice(0, length)
  const lastSpace = cut.lastIndexOf(" ")
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : length).trimEnd()}…`
}

export function Testimonials() {
  const [expandedIndex, setExpandedIndex] = useState<Set<number>>(new Set())

  function toggle(index: number) {
    setExpandedIndex((prev) => {
      const next = new Set(prev)
      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })
  }

  return (
    <section className="border-b border-ink-700/60">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-emerald-400">Client Experience</p>
          <h2 className="mt-4 font-sans text-3xl font-medium tracking-tight text-white sm:text-4xl">Trusted by Buyers</h2>
          <p className="mt-4 font-sans text-base font-normal leading-relaxed text-slate-300">
            What our clients say about working with Alex.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => {
            const isLong = testimonial.quote.length > TRUNCATE_LENGTH
            const isExpanded = expandedIndex.has(index)
            const displayText = isLong && !isExpanded ? truncate(testimonial.quote, TRUNCATE_LENGTH) : testimonial.quote

            return (
              <figure
                key={testimonial.author}
                className="flex flex-col justify-between rounded-2xl border border-ink-700 bg-ink-900/60 p-8">
                <div>
                  <span aria-hidden="true" className="font-display text-5xl leading-none text-accent-500/50">
                    &ldquo;
                  </span>
                  <blockquote className="mt-3 font-sans text-sm font-normal leading-relaxed text-slate-300 transition-[height]">
                    {displayText}
                  </blockquote>
                  {isLong && (
                    <button
                      type="button"
                      onClick={() => toggle(index)}
                      aria-expanded={isExpanded}
                      className="mt-3 text-xs font-semibold uppercase tracking-wider text-white/50 transition-colors hover:text-accent-400">
                      {isExpanded ? "Read Less" : "Read More"}
                    </button>
                  )}
                </div>
                <figcaption className="mt-6 font-mono text-xs uppercase tracking-widest text-emerald-400">
                  {testimonial.author}
                </figcaption>
              </figure>
            )
          })}
        </div>
      </div>
    </section>
  )
}

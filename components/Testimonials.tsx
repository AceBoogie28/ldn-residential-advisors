const TESTIMONIALS = [
  {
    quote:
      "We were relocating from Singapore with three weeks of notice. Having someone see every property, ask every question, and push back on price on our behalf made the difference.",
    attribution: "Relocating Family · Singapore to London"
  },
  {
    quote:
      "The market data behind every recommendation was the reason we engaged them. No guesswork, no pressure — just a clear case for each property.",
    attribution: "Private Investor · New York to London"
  },
  {
    quote:
      "Transparent on fees from day one, and it stayed that way through completion. Exactly what you want from an advisor and not a salesperson.",
    attribution: "Relocating Executive · Dubai to London"
  }
]

export function Testimonials() {
  return (
    <section className="border-b border-ink-700/60">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-widest2 text-accent-400">Client Experience</p>
          <h2 className="mt-4 font-display text-3xl font-medium text-white sm:text-4xl">
            Trusted by buyers relocating to London
          </h2>
        </div>
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <figure key={testimonial.attribution} className="rounded-2xl border border-ink-700 bg-ink-900/60 p-8">
              <blockquote className="font-display text-lg leading-relaxed text-white/90">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-xs font-medium uppercase tracking-widest2 text-accent-400">
                {testimonial.attribution}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-6 text-xs text-white/30">
          Placeholder quotes — replace with real client testimonials before launch.
        </p>
      </div>
    </section>
  )
}

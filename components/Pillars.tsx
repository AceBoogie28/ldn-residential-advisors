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
    <section id="why-us" className="border-b border-ink-700/60">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-widest2 text-accent-400">Why Us</p>
          <h2 className="mt-4 font-display text-3xl font-medium text-white sm:text-4xl">
            Built for buyers who need a trusted resource, not a salesperson
          </h2>
        </div>
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-ink-700 bg-ink-700 sm:grid-cols-2">
          {PILLARS.map((pillar) => (
            <div key={pillar.title} className="bg-ink-900 p-8">
              <h3 className="font-display text-xl font-medium text-white">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

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
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-sans text-xs uppercase tracking-widest text-white/90 backdrop-blur-sm">
            Why Us
          </p>
          <h2 className="mt-4 font-sans text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Built for buyers who need a trusted resource, not a salesperson
          </h2>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {PILLARS.map((pillar) => (
            <div key={pillar.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm">
              <h3 className="font-sans text-xl font-medium tracking-tight text-white">{pillar.title}</h3>
              <p className="mt-3 font-sans text-sm font-normal leading-relaxed text-white/80">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

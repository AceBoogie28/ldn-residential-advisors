const SERVICES = [
  {
    title: "Property Search & Acquisition",
    description:
      "A curated shortlist against your brief, including off-market and pre-market opportunities across London."
  },
  {
    title: "Valuation & Negotiation",
    description: "Independent valuation modelling and hands-on negotiation to secure a fair, defensible price."
  },
  {
    title: "Market Intelligence Reports",
    description:
      "Borough-level price trend and yield reports to inform where — and when — you buy."
  },
  {
    title: "Transaction Management",
    description:
      "Coordination of solicitors, surveyors, and lenders from offer through to completion, tracked end to end."
  }
]

export function Services() {
  return (
    <section id="services" className="border-b border-ink-700/60 bg-ink-900/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="font-sans text-xs uppercase tracking-widest font-medium text-white/80">Services</p>
          <h2 className="mt-4 font-sans text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Advisory, not just introductions
          </h2>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-ink-700 bg-ink-950/60 p-8 transition hover:border-accent-500/40">
              <h3 className="font-sans text-xl font-medium tracking-tight text-white">{service.title}</h3>
              <p className="mt-3 font-sans text-sm font-normal leading-relaxed text-slate-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

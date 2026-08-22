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
  return (
    <section id="process" className="border-b border-white/10 bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
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
        </div>
        <ol className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {PHASES.map((phase) => (
            <li key={phase.step} className="relative border-t border-white/10 pt-6">
              <span className="font-sans text-xs uppercase tracking-widest text-white/90">{phase.step}</span>
              <h3 className="mt-3 font-sans text-lg font-medium tracking-tight text-white">{phase.title}</h3>
              <p className="mt-2 font-sans text-sm font-normal leading-relaxed text-white/80">{phase.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

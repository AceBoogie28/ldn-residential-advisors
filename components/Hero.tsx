import { AmbientGlow } from "./AmbientGlow"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-50 [background-image:linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_65%_55%_at_50%_0%,black,transparent)]"
      />
      <div className="relative mx-auto max-w-4xl px-6 py-28 text-center sm:py-36">
        <AmbientGlow className="left-1/2 top-1/2 -translate-y-1/2" />
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-sans text-xs uppercase tracking-widest text-white/90 backdrop-blur-sm">
          London Property Advisory
        </span>
        <h1 className="mt-8 font-sans text-4xl font-semibold leading-tight tracking-tighter text-white sm:text-5xl lg:text-6xl">
          Your trusted resource for London real estate
        </h1>
        <p className="mx-auto mt-6 max-w-2xl font-sans text-lg font-normal leading-relaxed text-white/80">
          London Residential Advisors guides international buyers through every phase of the
          purchase — from first brief to completion — with data-backed guidance and complete
          transparency at every step.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="w-full rounded-full bg-white px-6 py-3 text-sm font-medium text-[#041A10] shadow-sm transition-all hover:bg-white/90 sm:w-auto">
            Book a Consultation
          </a>
          <a
            href="#process"
            className="w-full rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition-all hover:bg-white/10 sm:w-auto">
            See how it works
          </a>
        </div>
        <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-sans text-xs uppercase tracking-widest text-white/90 backdrop-blur-sm">
          Independent · Discreet · Data-Led
        </p>
      </div>
    </section>
  )
}

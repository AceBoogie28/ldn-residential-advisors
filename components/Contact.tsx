import { ContactForm } from "./ContactForm"

export function Contact() {
  return (
    <section id="contact" className="bg-white/[0.02]">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-sans text-xs uppercase tracking-widest text-white/90 backdrop-blur-sm">
            Contact
          </p>
          <h2 className="mt-4 font-sans text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Start with a confidential brief
          </h2>
          <p className="mt-4 max-w-md font-sans text-base font-normal leading-relaxed text-white/80">
            Tell us where you&rsquo;re relocating from and what you&rsquo;re looking for. We&rsquo;ll
            respond within one business day with next steps.
          </p>
          <div className="mt-10 space-y-2">
            <p className="font-sans text-xs uppercase tracking-widest text-white/90">
              team@londonresidentialadvisors.com
            </p>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}

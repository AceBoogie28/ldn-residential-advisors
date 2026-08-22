"use client"

import { useState, type FormEvent } from "react"

type Status = "idle" | "submitting" | "success" | "error"

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("submitting")

    const form = event.currentTarget
    const payload = Object.fromEntries(new FormData(form).entries())

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      })

      if (!response.ok) throw new Error("Request failed")

      setStatus("success")
      form.reset()
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-sm">
        <p className="font-sans text-xl font-medium tracking-tight text-white">Thank you.</p>
        <p className="mt-2 font-sans text-sm font-normal leading-relaxed text-white/80">
          We&rsquo;ve received your enquiry and will be in touch within one business day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <Field
        label="Where are you relocating from?"
        name="origin"
        placeholder="e.g. Singapore, New York, Dubai"
      />
      <div>
        <label htmlFor="message" className="mb-2 block font-sans text-xs uppercase tracking-widest text-white/90">
          Tell us about your search
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-white/40 focus:outline-none"
          placeholder="Budget, target areas, timeline..."
        />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-full bg-white px-6 py-3 text-sm font-medium text-[#041A10] shadow-sm transition-all hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-60">
        {status === "submitting" ? "Sending…" : "Send Enquiry"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-400">Something went wrong — please try again or email us directly.</p>
      )}
    </form>
  )
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  placeholder?: string
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block font-sans text-xs uppercase tracking-widest text-white/90">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-white/40 focus:outline-none"
      />
    </div>
  )
}

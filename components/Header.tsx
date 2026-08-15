import { Logo } from "./Logo"

const LINKS = [
  { href: "#process", label: "Process" },
  { href: "#why-us", label: "Why Us" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" }
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-700/60 bg-ink-950/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo variant="wordmark" />
        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/60 transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full border border-accent-500/60 px-4 py-2 text-sm font-medium text-accent-400 transition hover:border-accent-400 hover:bg-accent-500/10 hover:text-accent-300">
          Book a Consultation
        </a>
      </div>
    </header>
  )
}

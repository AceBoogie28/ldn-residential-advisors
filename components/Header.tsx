import { ExpCobrand } from "./ExpCobrand"

const LINKS = [
  { href: "#process", label: "Process" },
  { href: "#why-us", label: "Why Us" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" }
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <ExpCobrand height={40} />
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
          className="hidden rounded-full bg-white px-6 py-3 text-sm font-medium text-[#041A10] shadow-sm transition-all hover:bg-white/90 md:inline-block">
          Book a Consultation
        </a>
      </div>
    </header>
  )
}

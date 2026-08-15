import { Logo } from "./Logo"

export function Footer() {
  return (
    <footer className="border-t border-ink-700/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-12 sm:flex-row sm:justify-between">
        <Logo variant="wordmark" />
        <div className="text-center text-xs text-white/40 sm:text-right">
          <p>© {new Date().getFullYear()} London Residential Advisors. All rights reserved.</p>
          <p className="mt-1">Powered by eXp Realty UK</p>
        </div>
      </div>
    </footer>
  )
}

import { Logo } from "./Logo"
import { ExpCobrand } from "./ExpCobrand"

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <Logo variant="wordmark" />
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} London Residential Advisors. All rights reserved.
          </p>
        </div>
        <div className="mt-8 flex justify-center border-t border-white/10 pt-8 sm:justify-start">
          <ExpCobrand height={28} />
        </div>
      </div>
    </footer>
  )
}

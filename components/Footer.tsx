import { Logo } from "./Logo"
import { ExpCobrand } from "./ExpCobrand"

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <Logo variant="wordmark" />
          <div className="text-center text-xs text-white/40 sm:text-right">
            <p>© {new Date().getFullYear()} London Residential Advisors. All rights reserved.</p>
            <p className="mt-1">
              London Residential Advisors is a trading style operated by Alexander Carroll, powered by
              eXp UK.
            </p>
          </div>
        </div>
        <div className="mt-8 flex justify-center border-t border-white/10 pt-8 sm:justify-start">
          <ExpCobrand height={28} />
        </div>
      </div>
    </footer>
  )
}

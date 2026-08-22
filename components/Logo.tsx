interface LogoProps {
  className?: string
  variant?: "mark" | "wordmark"
}

const GEIST_SANS_STACK = "var(--font-geist-sans), Helvetica, Arial, sans-serif"

/**
 * Square 3-line mark: LDN / Residential / Advisors, set in Geist Sans (the
 * site's own typeface) to match the reference redraw — bold grotesque type,
 * single border, no accent tint or divider rule.
 */
export function Logo({ className = "", variant = "mark" }: LogoProps) {
  if (variant === "wordmark") {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <Logo variant="mark" className="h-9 w-9 shrink-0" />
        <span className="font-sans text-lg font-medium tracking-wide text-white">
          London <span className="text-accent-400">Residential Advisors</span>
        </span>
      </div>
    )
  }

  return (
    <svg viewBox="0 0 200 200" className={className} role="img" aria-label="London Residential Advisors">
      <rect x="6" y="6" width="188" height="188" fill="#0B1B12" stroke="#F7F5EF" strokeWidth="4" />
      <text
        x="100"
        y="90"
        textAnchor="middle"
        fontFamily={GEIST_SANS_STACK}
        fontWeight="700"
        fontSize="64"
        fill="#F7F5EF"
        letterSpacing="-2">
        LDN
      </text>
      <text
        x="100"
        y="126"
        textAnchor="middle"
        fontFamily={GEIST_SANS_STACK}
        fontWeight="700"
        fontSize="20"
        fill="#F7F5EF"
        letterSpacing="0.5">
        Residential
      </text>
      <text
        x="100"
        y="156"
        textAnchor="middle"
        fontFamily={GEIST_SANS_STACK}
        fontWeight="700"
        fontSize="20"
        fill="#F7F5EF"
        letterSpacing="6">
        ADVISORS
      </text>
    </svg>
  )
}

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
          London Residential Advisors
        </span>
      </div>
    )
  }

  return (
    <svg viewBox="0 0 200 200" className={className} role="img" aria-label="London Residential Advisors">
      <rect x="6" y="6" width="188" height="188" fill="#041A10" stroke="#FFFFFF" strokeWidth="4" />
      <text
        x="100"
        y="108"
        textAnchor="middle"
        fontFamily={GEIST_SANS_STACK}
        fontWeight="700"
        fontSize="85.71"
        fill="#FFFFFF"
        letterSpacing="-2">
        LDN
      </text>
      <text
        x="100"
        y="144"
        textAnchor="middle"
        fontFamily={GEIST_SANS_STACK}
        fontWeight="700"
        fontSize="26"
        fill="#FFFFFF"
        letterSpacing="2.27">
        Residential
      </text>
      <text
        x="100"
        y="178"
        textAnchor="middle"
        fontFamily={GEIST_SANS_STACK}
        fontWeight="700"
        fontSize="24"
        fill="#FFFFFF"
        letterSpacing="5.45">
        ADVISORS
      </text>
    </svg>
  )
}

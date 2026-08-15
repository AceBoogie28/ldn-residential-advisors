interface LogoProps {
  className?: string
  variant?: "mark" | "wordmark"
}

/**
 * Square 3-line mark: LDN / Residential / Advisors, refined from the founder's
 * original sketch — tighter kerning, a hairline rule to separate the wordmark
 * from the initials, and a double-border frame for a stamped/seal feel.
 */
export function Logo({ className = "", variant = "mark" }: LogoProps) {
  if (variant === "wordmark") {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <Logo variant="mark" className="h-9 w-9 shrink-0" />
        <span className="font-display text-lg font-medium tracking-wide text-white">
          London <span className="text-accent-400">Residential Advisors</span>
        </span>
      </div>
    )
  }

  return (
    <svg viewBox="0 0 200 200" className={className} role="img" aria-label="London Residential Advisors">
      <rect x="4" y="4" width="192" height="192" fill="#0B1B12" stroke="#F7F5EF" strokeWidth="3" />
      <rect x="14" y="14" width="172" height="172" fill="none" stroke="#F7F5EF" strokeWidth="1" />
      <text
        x="100"
        y="86"
        textAnchor="middle"
        fontFamily="'Fraunces', Georgia, serif"
        fontWeight="600"
        fontSize="58"
        fill="#F7F5EF"
        letterSpacing="2">
        LDN
      </text>
      <line x1="46" y1="104" x2="154" y2="104" stroke="#CBBA95" strokeWidth="1.5" />
      <text
        x="100"
        y="130"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontWeight="500"
        fontSize="18"
        fill="#F7F5EF"
        letterSpacing="3">
        RESIDENTIAL
      </text>
      <text
        x="100"
        y="156"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontWeight="500"
        fontSize="18"
        fill="#CBBA95"
        letterSpacing="3">
        ADVISORS
      </text>
    </svg>
  )
}

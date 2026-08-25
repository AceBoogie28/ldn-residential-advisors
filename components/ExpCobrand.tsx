import { Logo } from "./Logo"

interface ExpCobrandProps {
  className?: string
  height?: number
}

// Intrinsic aspect ratio of /public/exp-logo-white.png (8000x3043).
const EXP_LOGO_ASPECT_RATIO = 8000 / 3043

/**
 * eXp UK "Team Logo — horizontal, with line" co-brand lockup, per
 * exptoolkit.com/brand-toolkit-agents-uk:
 *  - team logo first, eXp logo after, both rendered at the same height
 *  - joined by a 1px divider, vertically centred in the gap, matching the
 *    eXp logo's height
 *  - gap between the two logos is half (0.5x) the eXp logo's own rendered
 *    width — computed here from its real intrinsic ratio, not guessed
 *
 * Do not recolor, stretch, or otherwise alter the eXp logo file itself —
 * the guidelines explicitly prohibit using it "to create another logo."
 */
export function ExpCobrand({ className = "", height = 36 }: ExpCobrandProps) {
  const expLogoWidth = height * EXP_LOGO_ASPECT_RATIO
  const gap = expLogoWidth * 0.5

  return (
    <div className={`flex items-center ${className}`} style={{ height }}>
      <Logo style={{ height, width: height }} className="shrink-0" />
      <div
        aria-hidden="true"
        className="shrink-0 bg-white/50"
        style={{ width: 1, height, marginLeft: gap / 2, marginRight: gap / 2 }}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/exp-logo-white.png"
        alt="eXp"
        style={{ height, width: expLogoWidth }}
        className="shrink-0"
      />
    </div>
  )
}

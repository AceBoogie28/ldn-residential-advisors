interface LogoProps {
  className?: string
  variant?: "mark" | "wordmark"
  style?: React.CSSProperties
}

const GEIST_SANS_STACK = "var(--font-geist-sans), Helvetica, Arial, sans-serif"

// Crossword-style 3x3 grid: each of the 9 letters gets an identical cell,
// centred both ways, with no per-letter optical correction — that reads as
// "kerned type," not a grid. Equal cells, tiling edge to edge with no gap
// between them, are what make the inter-letter spacing and the outer
// border margin come from the same underlying numbers, rather than being
// tuned separately.
//
// Cell width and cell height are solved independently (not forced square)
// specifically so the border margin comes out equal on all four sides —
// bold capital letters are taller than they are wide (L in particular), so
// equal *cells* alone don't produce an equal ink margin; the cell width is
// solved against the single widest letter (N, 25.51 units at this size)
// and the cell height against the measured cap-height (34.22), both
// targeting the same 23-unit margin.
const FONT_SIZE = 34
const CAP_HEIGHT = 34.22 // measured: top-of-glyph offset from baseline at FONT_SIZE
const WIDEST_LETTER_WIDTH = 25.51 // measured: "N", the widest of the 8 letters used

const TARGET_MARGIN = 23
const CELL_WIDTH = (176 - TARGET_MARGIN * 2 - WIDEST_LETTER_WIDTH) / 2
const CELL_HEIGHT = (176 - TARGET_MARGIN * 2 - CAP_HEIGHT) / 2
const OUTER_MARGIN_H = TARGET_MARGIN - (CELL_WIDTH - WIDEST_LETTER_WIDTH) / 2
const OUTER_MARGIN_V = TARGET_MARGIN - (CELL_HEIGHT - CAP_HEIGHT) / 2

// A small manual nudge: A and V's pointed bottoms carry visibly less ink
// near the border than L/D/N's flat tops at the same mathematical margin,
// so the bottom row reads as having more room even though it doesn't.
// Shifting the whole block up compensates.
const Y_SHIFT = -2

const LETTERS = [
  ["L", "D", "N"],
  ["R", "E", "S"],
  ["A", "D", "V"]
]

function cellCenterX(index: number) {
  return 12 + OUTER_MARGIN_H + CELL_WIDTH * (index + 0.5)
}

function cellCenterY(index: number) {
  return 12 + OUTER_MARGIN_V + CELL_HEIGHT * (index + 0.5)
}

/**
 * Square 3-line monogram: LDN / RES / ADV, set in Geist Sans. Three equal
 * three-letter codes (city / trade / role), uniform size and weight, evenly
 * spaced within a rounded border — a crest rather than a wordmark.
 */
export function Logo({ className = "", variant = "mark", style }: LogoProps) {
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
    <svg viewBox="0 0 200 200" className={className} style={style} role="img" aria-label="London Residential Advisors">
      <rect x="10" y="10" width="180" height="180" rx="24" fill="#041A10" stroke="#FFFFFF" strokeWidth="4" />
      {LETTERS.map((row, rowIndex) =>
        row.map((char, colIndex) => (
          <text
            key={`${rowIndex}-${colIndex}`}
            x={cellCenterX(colIndex)}
            y={cellCenterY(rowIndex) + CAP_HEIGHT / 2 + Y_SHIFT}
            textAnchor="middle"
            fontFamily={GEIST_SANS_STACK}
            fontWeight="700"
            fontSize={FONT_SIZE}
            fill="#FFFFFF">
            {char}
          </text>
        ))
      )}
    </svg>
  )
}

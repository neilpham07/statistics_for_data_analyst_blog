type BellCurveIllustrationProps = {
  className?: string
}

export function BellCurveIllustration({ className = '' }: BellCurveIllustrationProps) {
  const scatterPoints = [
    [140, 290], [185, 265], [175, 295], [245, 242],
    [295, 205], [338, 162], [375, 115], [400, 95],
    [425, 112], [462, 158], [502, 200], [542, 242],
    [582, 268], [618, 285], [648, 298],
  ] as const

  return (
    <svg
      viewBox="0 0 800 370"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* Grid lines */}
      <line x1="60" y1="330" x2="740" y2="330" stroke="currentColor" strokeOpacity="0.12" strokeWidth="1" />
      <line x1="400" y1="40" x2="400" y2="330" stroke="currentColor" strokeOpacity="0.08" strokeWidth="1" strokeDasharray="5 5" />
      <line x1="270" y1="80" x2="270" y2="330" stroke="currentColor" strokeOpacity="0.06" strokeWidth="1" strokeDasharray="3 5" />
      <line x1="530" y1="80" x2="530" y2="330" stroke="currentColor" strokeOpacity="0.06" strokeWidth="1" strokeDasharray="3 5" />

      {/* X-axis ticks */}
      {[200, 270, 340, 400, 460, 530, 600].map((x) => (
        <line key={x} x1={x} y1="328" x2={x} y2="334" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" />
      ))}

      {/* Secondary distribution curve (offset, lighter) */}
      <path
        d="M 80,328 C 140,328 200,324 280,308 C 330,295 370,252 400,192 C 430,252 470,295 520,308 C 600,324 660,328 720,328"
        stroke="currentColor"
        strokeWidth="1"
        strokeOpacity="0.22"
      />

      {/* Main bell curve */}
      <path
        d="M 80,328 C 130,328 185,322 250,295 C 295,275 340,220 368,145 C 382,100 390,72 400,62 C 410,72 418,100 432,145 C 460,220 505,275 550,295 C 615,322 670,328 720,328"
        stroke="currentColor"
        strokeWidth="1"
        strokeOpacity="0.75"
      />

      {/* Scatter plot points */}
      {scatterPoints.map(([cx, cy], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r="2.5"
          fill="currentColor"
          fillOpacity="0.35"
        />
      ))}

      {/* Axis labels (μ and σ marks) */}
      <text x="396" y="348" fontSize="11" fill="currentColor" fillOpacity="0.4" fontFamily="var(--font-jetbrains-mono), monospace" textAnchor="middle">μ</text>
      <text x="270" y="348" fontSize="11" fill="currentColor" fillOpacity="0.25" fontFamily="var(--font-jetbrains-mono), monospace" textAnchor="middle">μ−σ</text>
      <text x="530" y="348" fontSize="11" fill="currentColor" fillOpacity="0.25" fontFamily="var(--font-jetbrains-mono), monospace" textAnchor="middle">μ+σ</text>
    </svg>
  )
}

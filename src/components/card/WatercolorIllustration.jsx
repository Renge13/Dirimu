// ============================================================
// WatercolorIllustration — abstract SVG wash for the card image zone
// ============================================================
// Layered ellipses at varying opacity simulate wet-on-wet
// watercolor bleed. Not literal — no flames, no waves. Color
// energy only, keyed by the chart's day-master element.
// ============================================================

import { ELEMENT_CONFIG } from '../../lib/bazi/elementConfig.js'

const SHAPES = {
  Fire: [
    { cx: '50%', cy: '87%', rx: '44%', ry: '42%', opacity: 0.75 },
    { cx: '50%', cy: '72%', rx: '30%', ry: '36%', opacity: 0.65 },
    { cx: '53%', cy: '58%', rx: '20%', ry: '30%', opacity: 0.58 },
    { cx: '50%', cy: '47%', rx: '13%', ry: '22%', opacity: 0.50 },
    { cx: '51%', cy: '38%', rx: '8%',  ry: '16%', opacity: 0.42 },
    { cx: '50%', cy: '31%', rx: '5%',  ry: '11%', opacity: 0.35 },
    { cx: '30%', cy: '84%', rx: '11%', ry: '17%', opacity: 0.45 },
    { cx: '72%', cy: '79%', rx: '12%', ry: '19%', opacity: 0.40 },
  ],
  Wood: [
    { cx: '50%', cy: '90%', rx: '44%', ry: '30%', opacity: 0.60 },
    { cx: '35%', cy: '60%', rx: '15%', ry: '50%', opacity: 0.55 },
    { cx: '65%', cy: '55%', rx: '12%', ry: '45%', opacity: 0.50 },
    { cx: '50%', cy: '40%', rx: '10%', ry: '35%', opacity: 0.45 },
    { cx: '25%', cy: '75%', rx: '10%', ry: '20%', opacity: 0.40 },
    { cx: '75%', cy: '70%', rx: '11%', ry: '22%', opacity: 0.38 },
  ],
  Water: [
    { cx: '50%', cy: '80%', rx: '48%', ry: '38%', opacity: 0.70 },
    { cx: '40%', cy: '60%', rx: '35%', ry: '30%', opacity: 0.60 },
    { cx: '60%', cy: '50%', rx: '28%', ry: '26%', opacity: 0.52 },
    { cx: '30%', cy: '45%', rx: '20%', ry: '20%', opacity: 0.44 },
    { cx: '70%', cy: '40%', rx: '22%', ry: '18%', opacity: 0.40 },
    { cx: '50%', cy: '30%', rx: '15%', ry: '14%', opacity: 0.35 },
  ],
  Earth: [
    { cx: '50%', cy: '95%', rx: '48%', ry: '25%', opacity: 0.70 },
    { cx: '50%', cy: '75%', rx: '45%', ry: '22%', opacity: 0.60 },
    { cx: '50%', cy: '58%', rx: '40%', ry: '18%', opacity: 0.52 },
    { cx: '50%', cy: '43%', rx: '34%', ry: '15%', opacity: 0.44 },
    { cx: '50%', cy: '30%', rx: '26%', ry: '12%', opacity: 0.36 },
  ],
  Metal: [
    { cx: '50%', cy: '50%', rx: '44%', ry: '44%', opacity: 0.40 },
    { cx: '50%', cy: '50%', rx: '34%', ry: '34%', opacity: 0.36 },
    { cx: '50%', cy: '50%', rx: '24%', ry: '24%', opacity: 0.30 },
    { cx: '50%', cy: '50%', rx: '15%', ry: '15%', opacity: 0.24 },
    { cx: '30%', cy: '35%', rx: '18%', ry: '14%', opacity: 0.28 },
    { cx: '72%', cy: '65%', rx: '16%', ry: '12%', opacity: 0.26 },
  ],
}

export function WatercolorIllustration({ element, chineseChar, width = 270, height = 104 }) {
  const cfg = ELEMENT_CONFIG[element] || ELEMENT_CONFIG.Fire
  const shapes = SHAPES[element] || SHAPES.Fire

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
      aria-hidden="true"
    >
      {shapes.map((s, i) => (
        <ellipse
          key={i}
          cx={s.cx} cy={s.cy} rx={s.rx} ry={s.ry}
          fill={cfg.wash}
          opacity={s.opacity}
        />
      ))}
      {/* Faint Chinese character watermark, bottom-right */}
      <text
        x="88%" y="96%"
        fontSize={Math.round(height * 0.55)}
        fontFamily="serif"
        fill={cfg.deep}
        opacity={0.06}
        textAnchor="middle"
        dominantBaseline="auto"
      >
        {chineseChar}
      </text>
    </svg>
  )
}

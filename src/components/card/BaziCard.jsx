// ============================================================
// BaziCard — 7-zone TCG-style watercolor canvas card
// ============================================================
// Intrinsic size: 270 × 480 px (9:16). mode="preview" renders at
// intrinsic. mode="export" multiplies every dimension by 4 for
// PNG export at 1080 × 1920 px.
//
// Each zone has a fixed flex basis (px) so content can never push
// zones around. Empty bank fields hide their rows but the zone
// container stays at its declared height — fixed-grid invariant.
// ============================================================

import { ELEMENT_CONFIG, ARCHETYPE_EMOJI } from '../../lib/bazi/elementConfig.js'
// Zone 3 (watercolor illustration) is hidden in this build — the SVG render
// was breaking layout. Reintroduce when art direction is finalized.
import {
  IconFlame,
  IconLeaf,
  IconDroplet,
  IconMountain,
  IconSword,
} from '@tabler/icons-react'

/* ── Palette (canvas neutrals shared across all elements) ──── */

const BASE = {
  bg:            '#FEFCF8',
  border:        '#E4DAD0',
  divider:       '#EDE5DC',
  textPrimary:   '#3A2E24',
  textSecondary: '#5A4A3A',
  muted:         '#A8927E',
  pillBg:        '#FBF7F3',
  pillBorder:    '#E0D4C8',
  bayanganDot:   '#9A8878',
  veryMuted:     '#D4CAC0',
}

const ICON_BY_ELEMENT = {
  Fire:  IconFlame,
  Wood:  IconLeaf,
  Water: IconDroplet,
  Earth: IconMountain,
  Metal: IconSword,
}

/* Indonesian short months for the header date stamp */
const ID_MONTHS_SHORT = [
  'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun',
  'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des',
]

function formatBirthDate(iso) {
  if (!iso || typeof iso !== 'string') return ''
  const parts = iso.split('-')
  if (parts.length !== 3) return iso
  const [y, m, d] = parts
  const monthIdx = parseInt(m, 10) - 1
  if (monthIdx < 0 || monthIdx > 11) return iso
  return `${parseInt(d, 10)} ${ID_MONTHS_SHORT[monthIdx]} ${y}`
}

function ElementIcon({ element, size, color }) {
  const Icon = ICON_BY_ELEMENT[element]
  if (!Icon) return null
  return <Icon size={size} color={color} strokeWidth={2} style={{ display: 'block' }} />
}

/* ── DimRow — one of the three Zone 4 dimension rows ─────────── */

function DimRow({ label, dotColor, labelColor, items, scale, showTopBorder }) {
  if (!items || items.length === 0) {
    // Hide the row when bank is empty; preserve zone height upstream.
    return null
  }
  return (
    <div style={{
      display:    'flex',
      alignItems: 'flex-start',
      gap:        scale * 8,
      padding:    `${scale * 5}px 0`,
      borderTop:  showTopBorder ? `${scale}px solid ${BASE.divider}` : 'none',
    }}>
      <div style={{
        width:        scale * 6,
        height:       scale * 6,
        borderRadius: '50%',
        background:   dotColor,
        marginTop:    scale * 4,
        flexShrink:   0,
      }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontSize:      scale * 9,
          letterSpacing: scale * 1.5,
          fontWeight:    600,
          color:         labelColor,
          marginBottom:  scale * 2,
        }}>
          {label}
        </div>
        <div style={{
          fontSize:   scale * 10.5,
          color:      BASE.textPrimary,
          lineHeight: 1.4,
        }}>
          {items.join(' · ')}
        </div>
      </div>
    </div>
  )
}

/* ── SocialColumn — Selaras or Pemicu sub-column in Zone 6 ───── */

function SocialColumn({ label, element, archetypes, scale, align = 'left' }) {
  if (!archetypes || archetypes.length === 0) return <div />
  return (
    <div style={{
      paddingLeft:  align === 'right' ? scale * 8 : 0,
      paddingRight: align === 'left'  ? scale * 8 : 0,
    }}>
      <div style={{
        display:       'flex',
        alignItems:    'center',
        gap:           scale * 4,
        marginBottom:  scale * 3,
      }}>
        <ElementIcon element={element} size={scale * 10} color={BASE.muted} />
        <span style={{
          fontSize:      scale * 7.5,
          letterSpacing: scale * 1.1,
          color:         BASE.muted,
          fontWeight:    600,
          whiteSpace:    'nowrap',
        }}>
          {label}
        </span>
      </div>
      {archetypes.map((a) => (
        <div key={a.stem} style={{
          fontSize:   scale * 10,
          color:      BASE.textPrimary,
          lineHeight: 1.55,
          whiteSpace: 'nowrap',
        }}>
          <span style={{ marginRight: scale * 4 }}>
            {ARCHETYPE_EMOJI[a.stem] || ''}
          </span>
          {a.name}
        </div>
      ))}
    </div>
  )
}

/* ── BaziCard — main component ─────────────────────────────── */

export default function BaziCard({ chart, interpretation, mode = 'preview' }) {
  if (!chart || !interpretation) return null

  const scale = mode === 'export' ? 4 : 1
  const s = (n) => n * scale

  const element = chart.dayMaster?.element
  const polarity = chart.dayMaster?.polarity
  const cfg = ELEMENT_CONFIG[element] || ELEMENT_CONFIG.Fire
  const chineseChar = polarity === 'Yang' ? cfg.chineseYang : cfg.chineseYin

  const {
    dayMasterName,
    dayMasterChinese,
    taglineCard,
    subtitle,
    kekuatanDescriptors = [],
    bayanganDescriptors = [],
    dampakDescriptors   = [],
    sifatPills          = [],
    selarasArchetypes   = [],
    pemicuArchetypes    = [],
    selarasElement,
    pemicuElement,
  } = interpretation

  const cardStyle = {
    width:        s(270),
    height:       s(410),
    display:      'flex',
    flexDirection:'column',
    overflow:     'hidden',
    borderRadius: s(14),
    background:   BASE.bg,
    boxSizing:    'border-box',
    fontFamily:   '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
    color:        BASE.textPrimary,
    boxShadow:    `0 0 0 ${scale}px ${BASE.border}`,
  }

  const zone = (px) => ({
    flex:         `0 0 ${s(px)}px`,
    boxSizing:    'border-box',
    overflow:     'hidden',
    borderBottom: `${scale}px solid ${BASE.divider}`,
  })

  const lastZone = (px) => ({
    flex:      `0 0 ${s(px)}px`,
    boxSizing: 'border-box',
    overflow:  'hidden',
  })

  return (
    <div style={cardStyle}>

      {/* ── Zone 1 — Header (28px) ────────────────────────── */}
      <div style={{
        ...zone(28),
        padding:        `0 ${s(14)}px`,
        display:        'flex',
        justifyContent: 'space-between',
        alignItems:     'center',
      }}>
        <span style={{
          fontSize:      s(9),
          letterSpacing: s(1.5),
          color:         BASE.muted,
          fontWeight:    500,
        }}>
          DIRIMU · 八字命理
        </span>
        <span style={{
          fontSize: s(9),
          color:    BASE.muted,
        }}>
          {formatBirthDate(chart.birthDate)}
        </span>
      </div>

      {/* ── Zone 2 — Identity (115px, expanded to fit subtitle + tagline) ─ */}
      <div style={{
        ...zone(115),
        padding:        `${s(14)}px ${s(14)}px ${s(12)}px`,
        display:        'flex',
        flexDirection:  'column',
        justifyContent: 'center',
      }}>
        {/* Element label row */}
        <div style={{
          display:       'flex',
          alignItems:    'center',
          gap:           s(5),
          marginBottom:  s(4),
          fontSize:      s(10),
          color:         cfg.mid,
          letterSpacing: s(1.2),
        }}>
          <ElementIcon element={element} size={s(12)} color={cfg.mid} />
          <span>{dayMasterChinese} · {cfg.label}</span>
        </div>
        {/* Archetype name */}
        <div style={{
          fontSize:      s(28),
          fontFamily:    'Georgia, "Playfair Display", "Times New Roman", serif',
          fontWeight:    700,
          color:         cfg.deep,
          letterSpacing: s(3),
          lineHeight:    1,
          textTransform: 'uppercase',
        }}>
          {dayMasterName}
        </div>
        {/* Subtitle — person-first identity gloss */}
        {subtitle && (
          <div style={{
            fontSize:    s(9.5),
            color:       BASE.textSecondary,
            marginTop:   s(5),
            lineHeight:  1.4,
            fontWeight:  500,
          }}>
            {subtitle}
          </div>
        )}
        {/* Tagline (no subject pronoun) */}
        {taglineCard && (
          <div style={{
            fontSize:    s(10),
            fontStyle:   'italic',
            fontFamily:  'Georgia, "Playfair Display", "Times New Roman", serif',
            color:       BASE.textSecondary,
            marginTop:   s(subtitle ? 3 : 6),
            lineHeight:  1.4,
          }}>
            “{taglineCard}”
          </div>
        )}
      </div>

      {/* ── Zone 3 — REMOVED (watercolor image; reintroduce when art ready) ── */}

      {/* ── Zone 4 — Three Dimensions (111px) ─────────────── */}
      <div style={{
        ...zone(111),
        padding:        `${s(4)}px ${s(14)}px`,
        display:        'flex',
        flexDirection:  'column',
        justifyContent: 'space-around',
      }}>
        <DimRow
          label="KEKUATAN"
          dotColor={cfg.deep}
          labelColor={cfg.deep}
          items={kekuatanDescriptors}
          scale={scale}
          showTopBorder={false}
        />
        <DimRow
          label="SISI LAIN"
          dotColor={BASE.bayanganDot}
          labelColor={BASE.bayanganDot}
          items={bayanganDescriptors}
          scale={scale}
          showTopBorder={kekuatanDescriptors.length > 0}
        />
        <DimRow
          label="DAMPAK"
          dotColor={cfg.mid}
          labelColor={cfg.mid}
          items={dampakDescriptors}
          scale={scale}
          showTopBorder={
            kekuatanDescriptors.length > 0 || bayanganDescriptors.length > 0
          }
        />
      </div>

      {/* ── Zone 5 — SIFAT (68px) ──────────────────────────── */}
      <div style={{
        ...zone(68),
        padding: `${s(8)}px ${s(14)}px ${s(8)}px`,
      }}>
        <div style={{
          fontSize:      s(9),
          letterSpacing: s(1.5),
          color:         BASE.muted,
          marginBottom:  s(6),
          fontWeight:    500,
        }}>
          SIFAT
        </div>
        <div style={{
          display:  'flex',
          flexWrap: 'wrap',
          gap:      s(4),
          overflow: 'hidden',
        }}>
          {sifatPills.map((trait, i) => (
            <span key={i} style={{
              fontSize:     s(9.5),
              padding:      `${s(2)}px ${s(8)}px`,
              border:       `${scale}px solid ${BASE.pillBorder}`,
              borderRadius: s(20),
              color:        BASE.textSecondary,
              background:   BASE.pillBg,
              whiteSpace:   'nowrap',
              lineHeight:   1.3,
            }}>
              {trait}
            </span>
          ))}
        </div>
      </div>

      {/* ── Zone 6 — Selaras / Pemicu (58px) ──────────────── */}
      <div style={{
        ...zone(58),
        padding:             `${s(8)}px ${s(14)}px`,
        display:             'grid',
        gridTemplateColumns: `1fr ${scale}px 1fr`,
        alignItems:          'center',
      }}>
        <SocialColumn
          label="COCOK DENGAN"
          element={selarasElement}
          archetypes={selarasArchetypes}
          scale={scale}
          align="left"
        />
        <div style={{
          background: BASE.border,
          height:     s(36),
          width:      scale,
        }} />
        <SocialColumn
          label="PERLU DIJAGA DENGAN"
          element={pemicuElement}
          archetypes={pemicuArchetypes}
          scale={scale}
          align="right"
        />
      </div>

      {/* ── Zone 7 — Footer (28px, no bottom border) ─────── */}
      <div style={{
        ...lastZone(28),
        padding:        `0 ${s(14)}px`,
        display:        'flex',
        justifyContent: 'space-between',
        alignItems:     'center',
        borderTop:      `${scale}px solid ${BASE.divider}`,
      }}>
        <span style={{
          fontSize:      s(9),
          letterSpacing: s(1.5),
          color:         BASE.muted,
          fontWeight:    500,
        }}>
          DIRIMU · 八字命理
        </span>
        <span style={{
          fontSize:      s(9),
          color:         BASE.veryMuted,
          fontFamily:    'ui-monospace, Consolas, monospace',
          letterSpacing: s(0.5),
        }}>
          dirimu.id
        </span>
      </div>

    </div>
  )
}

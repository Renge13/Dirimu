import { forwardRef } from 'react'
import './Sharecard.css'

// Sharecard renders at intrinsic 1080×1920 (9:16 IG-Story).
// In-page preview scales it down via CSS transform; html2canvas
// captures the un-scaled DOM at full resolution for the PNG export.
//
// The component is forwarded a ref so the export hook can target it.

const Sharecard = forwardRef(function Sharecard({ card }, ref) {
  if (!card) return null
  const { superpower, chinese, tagline, pills, team, lawan } = card

  return (
    <div className="sharecard" ref={ref}>
      <div className="sc-inner">

        <div className="sc-header">
          <div className="sc-eyebrow">Kekuatanmu adalah...</div>
          <div className="sc-superpower">{superpower}</div>
          {chinese && <div className="sc-chinese">{chinese}</div>}
        </div>

        {tagline && (
          <div className="sc-tagline-strip">
            <p className="sc-tagline">{tagline}</p>
          </div>
        )}

        <div className="sc-body">
          <div className="sc-illustration" aria-hidden="true">
            <div className="sc-illustration-glyph">{chinese?.[0] || superpower?.[0] || ''}</div>
          </div>

          {pills.length > 0 && (
            <ul className="sc-pills">
              {pills.map((p, i) => (
                <li key={i} className="sc-pill">{p}</li>
              ))}
            </ul>
          )}
        </div>

        <div className="sc-relations">
          {team.length > 0 && (
            <div className="sc-rel-group">
              <div className="sc-rel-label">Selaras</div>
              <div className="sc-rel-chips">
                {team.map((t) => (
                  <span key={t.stem} className="sc-rel-chip sc-rel-chip--team">{t.name}</span>
                ))}
              </div>
            </div>
          )}
          {lawan.length > 0 && (
            <div className="sc-rel-group">
              <div className="sc-rel-label">Pemicu</div>
              <div className="sc-rel-chips">
                {lawan.map((l) => (
                  <span key={l.stem} className="sc-rel-chip sc-rel-chip--lawan">{l.name}</span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="sc-footer">
          <div className="sc-brand">Dirimu · 八字</div>
          <div className="sc-url">dirimu.vercel.app</div>
        </div>

      </div>
    </div>
  )
})

export default Sharecard

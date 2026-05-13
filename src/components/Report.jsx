// ============================================================
// Report — long-form reflective reading
// ============================================================
// Renders the report from getReport(chart). Behind a CTA so the
// click itself is the tiny ritual of entering the deeper read.
//
// Watercolor canvas styling matches the BaziCard. Sits as a
// cream-on-dark contrasting block within the existing reading
// page (Phase 5 will restyle the surrounding page to match).
//
// Phase 4a behavior: when no passages are filled for the user's
// archetype, getReport returns sections=[] and this component
// renders null. Once content lands for any archetype, that
// archetype's chart starts showing the CTA.
// ============================================================

import { useMemo, useState } from 'react'
import { getReport } from '@/lib/bazi'
import './Report.css'

export default function Report({ chart }) {
  const [expanded, setExpanded] = useState(false)
  const report = useMemo(() => getReport(chart), [chart])

  if (!report?.sections?.length) return null

  if (!expanded) {
    return (
      <div className="report-cta-card">
        <div className="report-cta-eyebrow">REFLEKSI · 反思</div>
        <h2 className="report-cta-title">Pola Pribadimu</h2>
        <p className="report-cta-blurb">
          Ini bukan tentang masa depanmu. Ini tentang pola dirimu yang sering
          muncul tanpa sadar — refleksi mendalam untuk konfigurasi {report.chinese}.
        </p>
        <button
          className="report-cta-btn"
          type="button"
          onClick={() => setExpanded(true)}
        >
          Buka Refleksi →
        </button>
      </div>
    )
  }

  return (
    <article className="report-body">
      <header className="report-header">
        <div className="report-header-eyebrow">REFLEKSI · {report.chinese}</div>
        <h2 className="report-header-title">{report.archetype}</h2>
      </header>

      {report.sections.map((section) => (
        <section key={section.sectionKey} className="report-section">
          <h3 className="report-section-title">{section.title}</h3>
          {section.paragraphs.map((p, i) => (
            <p key={i} className="report-paragraph">{p}</p>
          ))}
          {section.reflectionPrompt && (
            <p className="report-prompt">{section.reflectionPrompt}</p>
          )}
        </section>
      ))}

      <button
        className="report-collapse-btn"
        type="button"
        onClick={() => setExpanded(false)}
      >
        ← Tutup Refleksi
      </button>
    </article>
  )
}

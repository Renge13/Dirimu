// ============================================================
// Report — long-form reflective reading (accordion / Bab pattern)
// ============================================================
// Renders the report from getReport(chart). Behind a CTA so the
// click itself is the tiny ritual of entering the deeper read.
//
// Inside, only ONE chapter (Bab) is visible at a time. After the
// body, a numbered list of remaining chapters lets the reader
// step forward. Modelled on Claude Design's mobile reader pattern
// (BAB SATU / drop cap / LANJUT KE BAB BERIKUTNYA).
//
// Watercolor canvas styling matches the BaziCard. Sits as a
// cream-on-dark contrasting block within the existing reading
// page (Phase 6 will restyle the surrounding page to match).
// ============================================================

import { useMemo, useState } from 'react'
import { getReport } from '@/lib/bazi'
import './Report.css'

const BAB_ORDINALS = ['SATU', 'DUA', 'TIGA', 'EMPAT', 'LIMA', 'ENAM', 'TUJUH']

const ELEMENT_LABEL_ID = {
  Wood:  'Kayu',
  Fire:  'Api',
  Earth: 'Bumi',
  Metal: 'Logam',
  Water: 'Air',
}

export default function Report({ chart }) {
  const [expanded, setExpanded] = useState(false)
  const [currentBab, setCurrentBab] = useState(0)
  const report = useMemo(() => getReport(chart), [chart])

  if (!report?.sections?.length) return null

  const meta = chart?.dayMaster
    ? `untuk ${report.archetype} · ${ELEMENT_LABEL_ID[chart.dayMaster.element] || ''} ${chart.dayMaster.polarity || ''}`.trim()
    : ''

  if (!expanded) {
    return (
      <div className="report-cta-card">
        <div className="report-cta-eyebrow">REFLEKSI · 反思</div>
        <h2 className="report-cta-title">Pola Pribadi</h2>
        <p className="report-cta-blurb">
          Bukan ramalan tentang masa depan. Tapi cermin pola yang sering muncul
          tanpa kamu sadari — refleksi mendalam untuk konfigurasi {report.chinese}.
        </p>
        <button
          className="report-cta-btn"
          type="button"
          onClick={() => { setExpanded(true); setCurrentBab(0) }}
        >
          Buka Refleksi →
        </button>
      </div>
    )
  }

  const section = report.sections[currentBab]
  const ordinal = BAB_ORDINALS[currentBab] || String(currentBab + 1)
  const isLast = currentBab === report.sections.length - 1
  const navLabel = isLast ? 'JELAJAHI BAB LAIN' : 'LANJUT KE BAB BERIKUTNYA'

  function jumpTo(i) {
    setCurrentBab(i)
    // Scroll to top of the report so the reader lands on the new chapter
    // header, not somewhere mid-body. requestAnimationFrame so the new
    // chapter has rendered before we scroll.
    requestAnimationFrame(() => {
      document
        .querySelector('.report-bab-header')
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  return (
    <article className="report-body">

      <header className="report-bab-header">
        <div className="report-bab-eyebrow">BAB {ordinal}</div>
        <h2 className="report-bab-title">{section.title}</h2>
        {meta && <div className="report-bab-meta">{meta}</div>}
      </header>

      <div className="report-bab-body">
        {section.paragraphs.map((p, i) => (
          <p
            key={i}
            className={`report-paragraph${i === 0 ? ' report-paragraph--first' : ''}`}
          >
            {p}
          </p>
        ))}
        {section.reflectionPrompt && (
          <p className="report-prompt">{section.reflectionPrompt}</p>
        )}
      </div>

      <nav className="report-bab-nav">
        <div className="report-bab-nav-label">{navLabel}</div>
        <ul className="report-bab-nav-list">
          {report.sections.map((s, i) => {
            const isCurrent = i === currentBab
            return (
              <li key={s.sectionKey}>
                <button
                  type="button"
                  className={`report-bab-nav-item${isCurrent ? ' report-bab-nav-item--current' : ''}`}
                  onClick={isCurrent ? undefined : () => jumpTo(i)}
                  aria-current={isCurrent ? 'true' : undefined}
                  disabled={isCurrent}
                >
                  <span className="report-bab-nav-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="report-bab-nav-title">{s.title}</span>
                  <span className="report-bab-nav-arrow" aria-hidden="true">
                    {isCurrent ? '●' : '→'}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </nav>

      <button
        className="report-collapse-btn"
        type="button"
        onClick={() => setExpanded(false)}
      >
        Tutup Refleksi
      </button>
    </article>
  )
}

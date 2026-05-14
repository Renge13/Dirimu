// ============================================================
// Report — long-form reflective reading (shadcn-style accordion)
// ============================================================
// Renders the report from getReport(chart). Behind a CTA so the
// click itself is the tiny ritual of entering the deeper read.
//
// Inside: a vertical stack of 7 chapter rows (accordion items).
// Single-open behavior — clicking a closed row opens it and
// collapses the currently open one. Bab 1 (Pola Dasar) opens
// by default. Clicking the currently-open row is a no-op so
// the reader always has one chapter visible.
//
// Watercolor canvas styling unified with the site palette.
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
  const [openBab, setOpenBab] = useState(0)
  const report = useMemo(() => getReport(chart), [chart])

  if (!report?.sections?.length) return null

  const meta = chart?.dayMaster
    ? `untuk ${report.archetype} · ${ELEMENT_LABEL_ID[chart.dayMaster.element] || ''} ${chart.dayMaster.polarity || ''}`.trim()
    : ''

  if (!expanded) {
    return (
      <section className="bridge">
        <div className="bridge-ornament" aria-hidden="true">✦</div>

        <p className="bridge-intro">
          Pola unikmu membawa pertanyaan-pertanyaan yang hanya bisa dijawab dari sudut chartmu sendiri.
        </p>

        <div className="bridge-rule" aria-hidden="true" />

        <div className="bridge-domains">
          <p>Bidang kerja yang sejalan dengan caramu, dan yang justru menguras energimu.</p>
          <p>Tipe pasangan yang membawa keseimbangan, serta apa yang sering memicu konflik.</p>
          <p>Pola tubuh dan energi yang perlu kamu perhatikan.</p>
          <p>Cara membangun rezeki yang sesuai dengan polamu sendiri.</p>
        </div>

        <div className="bridge-rule" aria-hidden="true" />

        <p className="bridge-frame">
          Semua dijelaskan di Bacaan Mendalam. Bukan sebagai aturan, tetapi sebagai panduan arah yang sesuai dengan caramu hidup.
        </p>

        <button
          className="bridge-cta"
          type="button"
          onClick={() => { setExpanded(true); setOpenBab(0) }}
        >
          Buka Bacaan Mendalam <span aria-hidden="true">→</span>
        </button>
      </section>
    )
  }

  return (
    <article className="report-body">

      <header className="report-header">
        <div className="report-eyebrow">BACAAN MENDALAM · {report.chinese}</div>
        <h2 className="report-archetype">{report.archetype}</h2>
        {meta && <div className="report-meta">{meta}</div>}
      </header>

      <div className="report-accordion">
        {report.sections.map((section, i) => {
          const isOpen = i === openBab
          const ordinal = BAB_ORDINALS[i] || String(i + 1)
          return (
            <div
              key={section.sectionKey}
              className={`bab-item${isOpen ? ' bab-item--open' : ''}`}
            >
              <button
                type="button"
                className="bab-row"
                aria-expanded={isOpen}
                aria-controls={`bab-panel-${i}`}
                onClick={isOpen ? undefined : () => setOpenBab(i)}
                disabled={isOpen}
              >
                <span className="bab-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="bab-title">{section.title}</span>
                <span className="bab-chevron" aria-hidden="true">▾</span>
              </button>

              {isOpen && (
                <div className="bab-panel" id={`bab-panel-${i}`} role="region">
                  <div className="bab-panel-meta">BAB {ordinal}</div>
                  {section.paragraphs.map((p, j) => (
                    <p
                      key={j}
                      className={`report-paragraph${j === 0 ? ' report-paragraph--first' : ''}`}
                    >
                      {p}
                    </p>
                  ))}
                  {section.reflectionPrompt && (
                    <p className="report-prompt">{section.reflectionPrompt}</p>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>

      <button
        className="report-collapse-btn"
        type="button"
        onClick={() => setExpanded(false)}
      >
        Tutup Bacaan
      </button>
    </article>
  )
}

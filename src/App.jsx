import { useEffect, useRef, useState } from 'react'
import { calculateBaziChart, getCardData, getInterpretation, runValidation } from '@/lib/bazi'
import Sharecard from '@/components/Sharecard.jsx'
import { useSharecardExport } from '@/lib/useSharecardExport.js'
import './App.css'

const ELEMENT_LABEL = {
  Wood:  'Kayu',
  Fire:  'Api',
  Earth: 'Bumi',
  Metal: 'Logam',
  Water: 'Air',
}

const ELEMENTS = ['Wood', 'Fire', 'Earth', 'Metal', 'Water']

const PILLAR_LABELS = {
  year:  'Tahun',
  month: 'Bulan',
  day:   'Hari',
  hour:  'Jam',
}

/* ── Sub-components ─────────────────────────────────────── */

function Pillar({ labelKey, pillar, isDayMaster }) {
  return (
    <div className={`pillar${isDayMaster ? ' pillar--day' : ''}`}>
      {isDayMaster && <div className="pillar-badge">Hari Master</div>}
      <div className="pillar-label">{PILLAR_LABELS[labelKey]}</div>
      <div className="pillar-stem">{pillar.stem}</div>
      <div className="pillar-branch">{pillar.branch}</div>
      <div className="pillar-element">
        {ELEMENT_LABEL[pillar.element]} · {pillar.polarity}
      </div>
    </div>
  )
}

function PillarEmpty({ labelKey }) {
  return (
    <div className="pillar pillar-empty">
      <div className="pillar-label">{PILLAR_LABELS[labelKey]}</div>
      <div className="pillar-empty-text">Tidak diketahui</div>
    </div>
  )
}

/* ── Main App ───────────────────────────────────────────── */

function App() {
  const [birthDate, setBirthDate] = useState('')
  const [birthTime, setBirthTime] = useState('')
  const [result, setResult]       = useState(null)
  const [error, setError]         = useState(null)

  const sharecardRef = useRef(null)
  const { exportAsPng, busy: exportBusy, error: exportError } = useSharecardExport()

  useEffect(() => { runValidation() }, [])

  function onSubmit(e) {
    e.preventDefault()
    setError(null)
    try {
      const chart = calculateBaziChart({
        birthDate,
        birthTime: birthTime || null,
      })
      const interpretation = getInterpretation(chart)
      const cardData = getCardData(chart)
      setResult({ ...chart, interpretation, cardData })
    } catch (err) {
      setError(err.message)
      setResult(null)
    }
  }

  function onDownload() {
    if (!result?.cardData) return
    exportAsPng(sharecardRef.current, {
      superpower: result.cardData.superpower,
      birthDate: result.birthDate,
    })
  }

  const maxBalance = result
    ? Math.max(...ELEMENTS.map((el) => result.elementBalance[el] || 0), 1)
    : 1

  return (
    <main className="app">

      {/* Hero */}
      <header className="hero">
        <span className="hero-eyebrow">Ba Zi · 八字</span>
        <h1>Dirimu</h1>
        <p className="tagline">
          Empat Pilar Nasibmu, terungkap dari tanggal dan jam lahirmu.
        </p>
      </header>

      {/* Form */}
      <div className="form-card">
        <form className="form" onSubmit={onSubmit}>
          <div className="fields-row">
            <div className="field">
              <label className="field-label" htmlFor="birthDate">Tanggal Lahir</label>
              <input
                id="birthDate"
                className="field-input"
                type="date"
                lang="id-ID"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                required
              />
            </div>
            <div className="field">
              <label className="field-label" htmlFor="birthTime">
                Jam Lahir <span style={{ opacity: 0.5 }}>(opsional)</span>
              </label>
              <input
                id="birthTime"
                className="field-input"
                type="time"
                lang="id-ID"
                step="60"
                value={birthTime}
                onChange={(e) => setBirthTime(e.target.value)}
              />
            </div>
          </div>

          <button className="submit" type="submit">
            Lihat Empat Pilarku →
          </button>
        </form>
      </div>

      {error && <div className="error">{error}</div>}

      {result && (
        <section className="result">

          {/* Pillars */}
          <div className="section-title">Empat Pilarmu</div>
          <div className="pillars">
            <Pillar labelKey="year"  pillar={result.year} />
            <Pillar labelKey="month" pillar={result.month} />
            <Pillar labelKey="day"   pillar={result.day} isDayMaster />
            {result.hour
              ? <Pillar labelKey="hour" pillar={result.hour} />
              : <PillarEmpty labelKey="hour" />
            }
          </div>

          {/* Sharecard preview + export */}
          {result.cardData && (
            <div className="sharecard-preview">
              <div className="section-title">Persona</div>
              <div className="sharecard-preview-frame">
                <Sharecard card={result.cardData} />
              </div>
              <div className="sharecard-actions">
                <button
                  className="sharecard-download"
                  type="button"
                  onClick={onDownload}
                  disabled={exportBusy}
                >
                  {exportBusy ? 'Menyimpan...' : 'Simpan Gambar'}
                </button>
              </div>
              {exportError && <div className="error">{exportError}</div>}
            </div>
          )}

          {/* Hidden full-resolution sharecard for html2canvas capture */}
          {result.cardData && (
            <div className="sharecard-capture" aria-hidden="true">
              <Sharecard ref={sharecardRef} card={result.cardData} />
            </div>
          )}

          {/* Archetype hero */}
          {result.interpretation && (result.interpretation.dayMasterName || result.interpretation.heroDescription || result.interpretation.shareTagline) && (
            <div className="archetype-card">
              {result.interpretation.dayMasterChinese && (
                <div className="archetype-chinese">{result.interpretation.dayMasterChinese}</div>
              )}
              {result.interpretation.dayMasterName && (
                <h2 className="archetype-name">{result.interpretation.dayMasterName}</h2>
              )}
              {result.interpretation.shareTagline && (
                <p className="archetype-tagline">{result.interpretation.shareTagline}</p>
              )}
              {result.interpretation.heroDescription && (
                <p className="archetype-description">{result.interpretation.heroDescription}</p>
              )}
              {result.interpretation.identityPills.length > 0 && (
                <div className="identity-pills">
                  {result.interpretation.identityPills.map((p, i) => (
                    <span className="identity-pill" key={i}>{p}</span>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Personality traits */}
          {result.interpretation && result.interpretation.personalityTraits.length > 0 && (
            <div className="info-card traits-card">
              <div className="section-title">Sifat-sifatmu</div>
              <ul className="traits-list">
                {result.interpretation.personalityTraits.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Day Master + Balance */}
          <div className="lower-grid">
            <div className="info-card">
              <div className="section-title">Hari Master</div>
              <div className="day-master-display">
                <span className="day-master-stem">{result.dayMaster.stem}</span>
                <span className="day-master-meta">
                  {ELEMENT_LABEL[result.dayMaster.element]} · {result.dayMaster.polarity}
                </span>
              </div>
            </div>

            <div className="info-card">
              <div className="section-title">Keseimbangan Elemen</div>
              <div className="balance">
                {ELEMENTS.map((el) => {
                  const val = result.elementBalance[el] || 0
                  const pct = Math.max((val / maxBalance) * 100, 0)
                  return (
                    <div className="balance-row" key={el}>
                      <span className="balance-label">{ELEMENT_LABEL[el]}</span>
                      <div className="balance-bar">
                        <div
                          className="balance-fill"
                          data-element={el}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <span className="balance-value">{val.toFixed(1)}</span>
                    </div>
                  )
                })}
              </div>
              {result.interpretation?.elementNote && (
                <p className="element-note">{result.interpretation.elementNote}</p>
              )}
            </div>
          </div>

          {/* Relations — each block pairs label + branch chips + description */}
          {(result.harmonyBranches.length > 0 || result.clashBranches.length > 0) && (
            <div className="relations-card">
              <div className="section-title">Relasi Cabang</div>

              {result.harmonyBranches.length > 0 && (
                <div className="relation-block relation-block--harmony">
                  <div className="relation-header">
                    <span className="relation-label">Selaras</span>
                    <span className="relation-chips">
                      {result.harmonyBranches.map((b) => (
                        <span className="chip chip--harmony" key={b}>{b}</span>
                      ))}
                    </span>
                  </div>
                  {result.interpretation?.compatibleDescription && (
                    <p className="relation-description">{result.interpretation.compatibleDescription}</p>
                  )}
                </div>
              )}

              {result.clashBranches.length > 0 && (
                <div className="relation-block relation-block--clash">
                  <div className="relation-header">
                    <span className="relation-label">Pemicu</span>
                    <span className="relation-chips">
                      {result.clashBranches.map((b) => (
                        <span className="chip chip--clash" key={b}>{b}</span>
                      ))}
                    </span>
                  </div>
                  {result.interpretation?.clashDescription && (
                    <p className="relation-description">{result.interpretation.clashDescription}</p>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Paid hook */}
          {result.interpretation?.paidHook && (
            <div className="paid-hook-card">
              <p className="paid-hook">{result.interpretation.paidHook}</p>
              <button className="paid-cta" type="button">Buka Bacaan Mendalam →</button>
            </div>
          )}

        </section>
      )}
    </main>
  )
}

export default App

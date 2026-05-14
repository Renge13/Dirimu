import { useEffect, useRef, useState } from 'react'
import { calculateBaziChart, getInterpretation, runValidation } from '@/lib/bazi'
import BaziCard from '@/components/card/BaziCard.jsx'
import Report from '@/components/Report.jsx'
import { exportCardAsPNG } from '@/utils/exportCard.jsx'
import { ARCHETYPE_EMOJI } from '@/lib/bazi/elementConfig.js'
import { PILLAR_STEM_MEANINGS } from '@/lib/bazi/interpretation/pillarMeanings.js'
import './App.css'

const ELEMENT_LABEL = {
  Wood:  'Kayu',
  Fire:  'Api',
  Earth: 'Bumi',
  Metal: 'Logam',
  Water: 'Air',
}

/* One-line plainspoken meaning per element for the Keseimbangan card.
   Without this caption, the bars + numbers don't communicate anything
   to a reader without BaZi vocabulary. */
const ELEMENT_MEANING = {
  Wood:  'pertumbuhan dan inisiatif',
  Fire:  'energi dan visibilitas',
  Earth: 'stabilitas dan kepedulian',
  Metal: 'ketegasan dan kejernihan',
  Water: 'adaptasi dan kedalaman',
}

const ELEMENTS = ['Wood', 'Fire', 'Earth', 'Metal', 'Water']

const PILLAR_LABELS = {
  year:  'Tahun',
  month: 'Bulan',
  day:   'Hari',
  hour:  'Jam',
}

/* Generic role label per pillar — short, scannable. The full
   stem-specific interpretation comes from PILLAR_STEM_MEANINGS. */
const PILLAR_ROLE = {
  year:  'cara dunia melihatmu',
  month: 'cara kamu bekerja',
  day:   'inti dirimu',
  hour:  'sisi pribadi yang jarang terlihat',
}

/* Indonesian month names, 1-indexed via .value strings */
const MONTHS = [
  { v: '1',  label: 'Januari' },
  { v: '2',  label: 'Februari' },
  { v: '3',  label: 'Maret' },
  { v: '4',  label: 'April' },
  { v: '5',  label: 'Mei' },
  { v: '6',  label: 'Juni' },
  { v: '7',  label: 'Juli' },
  { v: '8',  label: 'Agustus' },
  { v: '9',  label: 'September' },
  { v: '10', label: 'Oktober' },
  { v: '11', label: 'November' },
  { v: '12', label: 'Desember' },
]

/* Year range covers the solar-terms table bounds (1975–2030). */
const YEAR_MIN = 1900
const YEAR_MAX = 2030
const YEARS = Array.from({ length: YEAR_MAX - YEAR_MIN + 1 }, (_, i) => YEAR_MAX - i)

const HOURS = Array.from({ length: 24 }, (_, i) => i)
const MINUTES = Array.from({ length: 60 }, (_, i) => i)

function daysInMonth(monthStr, yearStr) {
  if (!monthStr) return 31
  const m = parseInt(monthStr, 10)
  const y = yearStr ? parseInt(yearStr, 10) : 2000 // leap, generous default
  if (m === 2) {
    const isLeap = (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0
    return isLeap ? 29 : 28
  }
  return [4, 6, 9, 11].includes(m) ? 30 : 31
}

/* ── Sub-components ─────────────────────────────────────── */

function Pillar({ labelKey, pillar, isDayMaster }) {
  const interpretation = PILLAR_STEM_MEANINGS[labelKey]?.[pillar.stem]
  return (
    <div className={`pillar${isDayMaster ? ' pillar--day' : ''}`}>
      {isDayMaster && <div className="pillar-badge">Energi Intimu</div>}
      <div className="pillar-label">{PILLAR_LABELS[labelKey]}</div>
      <div className="pillar-stem">{pillar.stem}</div>
      <div className="pillar-branch">{pillar.branch}</div>
      <div className="pillar-element">
        {ELEMENT_LABEL[pillar.element]} · {pillar.polarity}
      </div>
      <div className="pillar-role">{PILLAR_ROLE[labelKey]}</div>
      {interpretation && (
        <p className="pillar-interpretation">{interpretation}</p>
      )}
    </div>
  )
}

function PillarEmpty({ labelKey }) {
  return (
    <div className="pillar pillar-empty">
      <div className="pillar-label">{PILLAR_LABELS[labelKey]}</div>
      <div className="pillar-empty-text">Tidak diketahui</div>
      <div className="pillar-role">{PILLAR_ROLE[labelKey]}</div>
    </div>
  )
}

/* Renders multi-paragraph reflection text + linkifies the phrase
   'Bacaan Mendalam' as a CTA that smooth-scrolls to the paid-hook
   section. Used by the element balance note and (later) relasi cabang
   elaborations to open loops into the paid tier. */
function OpenLoopText({ text }) {
  if (!text) return null
  const paragraphs = text.split(/\n\s*\n+/)
  const scrollToPaywall = () => {
    document.querySelector('.paid-hook-card')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
  return (
    <>
      {paragraphs.map((para, i) => {
        const parts = para.split(/(Bacaan Mendalam)/)
        return (
          <p key={i} className="open-loop-paragraph">
            {parts.map((part, j) =>
              part === 'Bacaan Mendalam' ? (
                <button
                  key={j}
                  type="button"
                  className="open-loop-cta"
                  onClick={scrollToPaywall}
                >
                  {part}
                </button>
              ) : (
                <span key={j}>{part}</span>
              )
            )}
          </p>
        )
      })}
    </>
  )
}

/* ── Main App ───────────────────────────────────────────── */

function App() {
  const [day, setDay]     = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear]   = useState('')
  const [hour, setHour]     = useState('')
  const [minute, setMinute] = useState('')
  const [result, setResult] = useState(null)
  const [error, setError]   = useState(null)

  const [exporting, setExporting] = useState(false)
  const [exportError, setExportError] = useState(null)

  const resultRef = useRef(null)

  useEffect(() => { runValidation() }, [])

  // Cap the day dropdown when month/year change (e.g. picking Feb after 31 was set).
  const maxDay = daysInMonth(month, year)
  useEffect(() => {
    if (day && parseInt(day, 10) > maxDay) setDay(String(maxDay))
  }, [maxDay, day])

  function onSubmit(e) {
    e.preventDefault()
    setError(null)

    if (!day || !month || !year) {
      setError('Lengkapi tanggal lahirmu (tanggal, bulan, dan tahun).')
      setResult(null)
      return
    }

    const dd = parseInt(day, 10)
    const mm = parseInt(month, 10)
    const yyyy = parseInt(year, 10)
    const isoDate = `${yyyy}-${String(mm).padStart(2,'0')}-${String(dd).padStart(2,'0')}`

    // Hour and minute can both be empty (full unknown), or both filled.
    // If one is filled and the other isn't, treat as ambiguous.
    let isoTime = null
    const hasHour = hour !== ''
    const hasMinute = minute !== ''
    if (hasHour !== hasMinute) {
      setError('Jam dan menit harus diisi keduanya, atau dikosongkan keduanya.')
      setResult(null)
      return
    }
    if (hasHour && hasMinute) {
      isoTime = `${String(parseInt(hour, 10)).padStart(2,'0')}:${String(parseInt(minute, 10)).padStart(2,'0')}`
    }

    try {
      const chart = calculateBaziChart({
        birthDate: isoDate,
        birthTime: isoTime,
      })
      const interpretation = getInterpretation(chart)
      setResult({ ...chart, interpretation })
      // Smooth-scroll to the result section once React has painted it.
      requestAnimationFrame(() => {
        resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    } catch (err) {
      setError(err.message)
      setResult(null)
    }
  }

  async function onDownload() {
    if (!result?.interpretation) return
    setExporting(true)
    setExportError(null)
    try {
      await exportCardAsPNG(result, result.interpretation, BaziCard)
    } catch (err) {
      setExportError(err?.message || 'Gagal menyimpan gambar.')
    } finally {
      setExporting(false)
    }
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
          <div className="field">
            <label className="field-label">Tanggal Lahir</label>
            <div className="date-selects">
              <select
                className="field-input select-input"
                aria-label="Tanggal"
                value={day}
                onChange={(e) => setDay(e.target.value)}
                required
              >
                <option value="">Tgl</option>
                {Array.from({ length: maxDay }, (_, i) => i + 1).map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
              <select
                className="field-input select-input"
                aria-label="Bulan"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                required
              >
                <option value="">Bulan</option>
                {MONTHS.map((m) => (
                  <option key={m.v} value={m.v}>{m.label}</option>
                ))}
              </select>
              <select
                className="field-input select-input"
                aria-label="Tahun"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                required
              >
                <option value="">Tahun</option>
                {YEARS.map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="field">
            <label className="field-label">
              Jam Lahir <span style={{ opacity: 0.5 }}>(opsional)</span>
            </label>
            <div className="time-selects">
              <select
                className="field-input select-input"
                aria-label="Jam"
                value={hour}
                onChange={(e) => setHour(e.target.value)}
              >
                <option value="">Jam</option>
                {HOURS.map((h) => (
                  <option key={h} value={h}>{String(h).padStart(2, '0')}</option>
                ))}
              </select>
              <span className="time-separator" aria-hidden="true">:</span>
              <select
                className="field-input select-input"
                aria-label="Menit"
                value={minute}
                onChange={(e) => setMinute(e.target.value)}
              >
                <option value="">Menit</option>
                {MINUTES.map((m) => (
                  <option key={m} value={m}>{String(m).padStart(2, '0')}</option>
                ))}
              </select>
            </div>
          </div>

          <button className="submit" type="submit">
            Lihat Empat Pilarku →
          </button>
        </form>
      </div>

      {error && <div className="error">{error}</div>}

      {result && (
        <section className="result" ref={resultRef}>

          {/* Pillars */}
          <div className="section-title">Empat Pilarmu</div>
          <p className="section-caption">
            Kepribadianmu dibentuk dari empat lapisan energi.
          </p>
          <div className="pillars">
            <Pillar labelKey="year"  pillar={result.year} />
            <Pillar labelKey="month" pillar={result.month} />
            <Pillar labelKey="day"   pillar={result.day} isDayMaster />
            {result.hour
              ? <Pillar labelKey="hour" pillar={result.hour} />
              : <PillarEmpty labelKey="hour" />
            }
          </div>

          {/* BaziCard — watercolor canvas, 7-zone TCG layout */}
          {result.interpretation && (
            <div className="bazi-card-preview">
              <div className="section-title">Persona</div>
              <BaziCard
                chart={result}
                interpretation={result.interpretation}
                mode="preview"
              />
              <button
                className="bazi-card-download"
                type="button"
                onClick={onDownload}
                disabled={exporting}
              >
                {exporting ? 'Menyimpan...' : 'Simpan Gambar'}
              </button>
              {exportError && <div className="error">{exportError}</div>}
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

          {/* Element balance — bars + plain-Indonesian meaning per element */}
          <div className="info-card balance-card">
            <div className="section-title">Komposisi Energimu</div>
            <p className="section-caption">
              Lima energi dasar yang membentuk dirimu. Yang paling kuat menggambarkan
              cara kamu sering bertindak; yang paling lemah, sisi yang sering terlewat.
            </p>
            <div className="balance">
              {ELEMENTS.map((el) => {
                const val = result.elementBalance[el] || 0
                const pct = Math.max((val / maxBalance) * 100, 0)
                return (
                  <div className="balance-row" key={el}>
                    <div className="balance-label-group">
                      <span className="balance-label">{ELEMENT_LABEL[el]}</span>
                      <span className="balance-meaning">{ELEMENT_MEANING[el]}</span>
                    </div>
                    <div className="balance-bar">
                      <div
                        className="balance-fill"
                        data-element={el}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
            {result.interpretation?.elementNote && (
              <div className="element-note">
                <OpenLoopText text={result.interpretation.elementNote} />
              </div>
            )}
          </div>

          {/* Relations — archetype-named chips so reader doesn't have to remember branches */}
          {((result.interpretation?.selarasArchetypes?.length > 0) ||
            (result.interpretation?.pemicuArchetypes?.length > 0)) && (
            <div className="relations-card">
              <div className="section-title">Relasi Cabang</div>

              {result.interpretation?.selarasArchetypes?.length > 0 && (
                <div className="relation-block relation-block--harmony">
                  <div className="relation-header">
                    <span className="relation-label">Cocok Dengan</span>
                    <span className="relation-chips">
                      {result.interpretation.selarasArchetypes.map((a) => (
                        <span className="chip chip--harmony" key={a.stem}>
                          <span className="chip-emoji" aria-hidden="true">{ARCHETYPE_EMOJI[a.stem] || ''}</span>
                          {a.name}
                        </span>
                      ))}
                    </span>
                  </div>
                  {result.interpretation?.compatibleDescription && (
                    <p className="relation-description">{result.interpretation.compatibleDescription}</p>
                  )}
                </div>
              )}

              {result.interpretation?.pemicuArchetypes?.length > 0 && (
                <div className="relation-block relation-block--clash">
                  <div className="relation-header">
                    <span className="relation-label">Perlu Dijaga Dengan</span>
                    <span className="relation-chips">
                      {result.interpretation.pemicuArchetypes.map((a) => (
                        <span className="chip chip--clash" key={a.stem}>
                          <span className="chip-emoji" aria-hidden="true">{ARCHETYPE_EMOJI[a.stem] || ''}</span>
                          {a.name}
                        </span>
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

          {/* Reflective Report — free deep reading, gated behind CTA */}
          <Report chart={result} />

          {/* Paid hook — gold-foil bordered premium insert */}
          {result.interpretation?.paidHook && (
            <div className="paid-hook-card">
              <span className="paid-hook-eyebrow">Bacaan Mendalam</span>
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

import { useEffect, useState } from 'react'
import { calculateBaziChart, runValidation } from '@/lib/bazi'
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

  useEffect(() => { runValidation() }, [])

  function onSubmit(e) {
    e.preventDefault()
    setError(null)
    try {
      const chart = calculateBaziChart({
        birthDate,
        birthTime: birthTime || null,
      })
      setResult(chart)
    } catch (err) {
      setError(err.message)
      setResult(null)
    }
  }

  const maxBalance = result
    ? Math.max(...ELEMENTS.map((el) => result.elementBalance[el] || 0), 1)
    : 1

  return (
    <main className="app">

      {/* Hero */}
      <header className="hero">
        <span className="hero-eyebrow">Ba Zi &middot; 八字</span>
        <h1>Dirimu</h1>
        <p className="tagline">
          Empat Pilar Nasibmu &mdash; terungkap dari tanggal dan jam lahirmu.
        </p>
      </header>
      <div className="flourish" aria-hidden="true">&#10022; &nbsp; &#10022; &nbsp; &#10022;</div>

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
                value={birthTime}
                onChange={(e) => setBirthTime(e.target.value)}
              />
            </div>
          </div>

          <button className="submit" type="submit">
            Baca Empat Pilarku &rarr;
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
            </div>
          </div>

          {/* Relations */}
          {(result.harmonyBranches.length > 0 || result.clashBranches.length > 0) && (
            <div className="relations-card">
              <div className="section-title">Relasi Cabang</div>
              <div className="relations">
                {result.harmonyBranches.length > 0 && (
                  <div className="relation-group">
                    <span className="relation-label">Harmoni</span>
                    <span>
                      {result.harmonyBranches.map((b) => (
                        <span className="chip chip--harmony" key={b}>{b}</span>
                      ))}
                    </span>
                  </div>
                )}
                {result.clashBranches.length > 0 && (
                  <div className="relation-group">
                    <span className="relation-label">Bentrok</span>
                    <span>
                      {result.clashBranches.map((b) => (
                        <span className="chip chip--clash" key={b}>{b}</span>
                      ))}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}

        </section>
      )}
    </main>
  )
}

export default App

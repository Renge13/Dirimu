import { useEffect, useState } from 'react'
import { calculateBaziChart, runValidation } from '@/lib/bazi'
import './App.css'

const ELEMENT_LABEL = {
  Wood: 'Kayu',
  Fire: 'Api',
  Earth: 'Bumi',
  Metal: 'Logam',
  Water: 'Air',
}

const ELEMENTS = ['Wood', 'Fire', 'Earth', 'Metal', 'Water']

const PILLAR_LABELS = {
  year: 'Tahun',
  month: 'Bulan',
  day: 'Hari',
  hour: 'Jam',
}

function Pillar({ labelKey, pillar, isDayMaster }) {
  return (
    <div className={`pillar ${isDayMaster ? 'pillar--day' : ''}`}>
      {isDayMaster && <div className="pillar-badge">Hari Master</div>}
      <div className="pillar-label">{PILLAR_LABELS[labelKey]}</div>
      <div className="pillar-stem">{pillar.stem}</div>
      <div className="pillar-branch">{pillar.branch}</div>
      <div className="pillar-element">
        {ELEMENT_LABEL[pillar.element]} {pillar.polarity}
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

function App() {
  const [birthDate, setBirthDate] = useState('')
  const [birthTime, setBirthTime] = useState('')
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    runValidation()
  }, [])

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
      <h1>Dirimu</h1>
      <p className="tagline">Empat Pilar Nasibmu — berdasarkan tanggal dan jam lahirmu.</p>

      <form className="form" onSubmit={onSubmit}>
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
          <label className="field-label" htmlFor="birthTime">Jam Lahir (opsional)</label>
          <input
            id="birthTime"
            className="field-input"
            type="time"
            value={birthTime}
            onChange={(e) => setBirthTime(e.target.value)}
          />
        </div>

        <button className="submit" type="submit">
          Lihat Nasibku →
        </button>
      </form>

      {error && <div className="error">{error}</div>}

      {result && (
        <section className="result">
          <h2>Empat Pilarmu</h2>
          <div className="pillars">
            <Pillar labelKey="year" pillar={result.year} />
            <Pillar labelKey="month" pillar={result.month} />
            <Pillar labelKey="day" pillar={result.day} isDayMaster />
            {result.hour ? (
              <Pillar labelKey="hour" pillar={result.hour} />
            ) : (
              <PillarEmpty labelKey="hour" />
            )}
          </div>

          <h3>Hari Master</h3>
          <div className="day-master">
            <span className="day-master-stem">{result.dayMaster.stem}</span>
            <span className="day-master-meta">
              {ELEMENT_LABEL[result.dayMaster.element]} {result.dayMaster.polarity}
            </span>
          </div>

          <h3>Keseimbangan Elemen</h3>
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

          {(result.harmonyBranches.length > 0 || result.clashBranches.length > 0) && (
            <>
              <h3>Relasi Hari</h3>
              <div className="relations">
                {result.harmonyBranches.length > 0 && (
                  <div className="relation-group">
                    <span className="relation-label">Harmoni:</span>
                    <span>
                      {result.harmonyBranches.map((b) => (
                        <span className="chip" key={b}>{b}</span>
                      ))}
                    </span>
                  </div>
                )}
                {result.clashBranches.length > 0 && (
                  <div className="relation-group">
                    <span className="relation-label">Bentrok:</span>
                    <span>
                      {result.clashBranches.map((b) => (
                        <span className="chip" key={b}>{b}</span>
                      ))}
                    </span>
                  </div>
                )}
              </div>
            </>
          )}
        </section>
      )}
    </main>
  )
}

export default App

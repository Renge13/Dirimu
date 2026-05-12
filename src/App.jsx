import { useEffect, useState } from 'react'
import { calculateBaziChart, runValidation } from '@/lib/bazi'
import './App.css'

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

  return (
    <main style={{ maxWidth: 640, margin: '2rem auto', padding: '0 1rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Dirimu</h1>
      <p>Empat Pilar Nasibmu — berdasarkan tanggal lahirmu.</p>

      <form onSubmit={onSubmit} style={{ display: 'grid', gap: '1rem', marginTop: '1.5rem' }}>
        <label style={{ display: 'grid', gap: '0.25rem' }}>
          <span>Tanggal Lahir</span>
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            required
          />
        </label>

        <label style={{ display: 'grid', gap: '0.25rem' }}>
          <span>Jam Lahir (opsional)</span>
          <input
            type="time"
            value={birthTime}
            onChange={(e) => setBirthTime(e.target.value)}
          />
        </label>

        <button type="submit" style={{ padding: '0.75rem 1rem', fontSize: '1rem', cursor: 'pointer' }}>
          Lihat Nasibku →
        </button>
      </form>

      {error && (
        <pre style={{ marginTop: '1.5rem', color: '#b00020', whiteSpace: 'pre-wrap' }}>{error}</pre>
      )}

      {result && (
        <pre style={{ marginTop: '1.5rem', padding: '1rem', background: '#f5f5f5', borderRadius: 4, overflow: 'auto' }}>
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </main>
  )
}

export default App

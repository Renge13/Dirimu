import { useCallback, useState } from 'react'
import html2canvas from 'html2canvas'

// Captures the referenced Sharecard DOM at its intrinsic 1080x1920
// resolution and triggers a PNG download. The element being captured
// must be in the DOM and rendered at full size — we keep it off-screen
// via a fixed-position wrapper to avoid layout shift while preserving
// rendered dimensions for the capture.

function slugify(s) {
  return (s || 'dirimu')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    || 'dirimu'
}

function triggerDownload(blob, filename) {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  a.remove()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}

export function useSharecardExport() {
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState(null)

  const exportAsPng = useCallback(async (node, { superpower, birthDate } = {}) => {
    if (!node) {
      setError('Kartu belum siap.')
      return
    }
    setBusy(true)
    setError(null)
    try {
      const canvas = await html2canvas(node, {
        backgroundColor: null,
        useCORS: true,
        // Render at 1x intrinsic; the node is already 1080x1920.
        scale: 1,
        logging: false,
        // Avoid clipping when the node is partially offscreen.
        windowWidth: 1080,
        windowHeight: 1920,
      })
      await new Promise((resolve) => {
        canvas.toBlob((blob) => {
          if (!blob) {
            setError('Gagal membuat gambar.')
            resolve()
            return
          }
          const stamp = (birthDate || '').replace(/-/g, '')
          const name = `dirimu-${slugify(superpower)}${stamp ? '-' + stamp : ''}.png`
          triggerDownload(blob, name)
          resolve()
        }, 'image/png')
      })
    } catch (err) {
      setError(err?.message || 'Terjadi kesalahan saat ekspor.')
    } finally {
      setBusy(false)
    }
  }, [])

  return { exportAsPng, busy, error }
}

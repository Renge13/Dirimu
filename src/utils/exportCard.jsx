// ============================================================
// exportCard — render BaziCard offscreen at 4× and download PNG
// ============================================================
// Capture flow:
//   1. Create an absolutely-positioned offscreen container at the
//      exact target export size (1080×1920).
//   2. Mount the card via React's createRoot in mode="export"
//      (BaziCard scales every dimension by 4 in this mode).
//   3. flushSync forces synchronous commit, then we wait one
//      animation frame for the paint to land.
//   4. html2canvas captures the container.
//   5. Convert to blob, trigger an anchor click for download.
//   6. Unmount + remove the container.
//
// Notes:
//   - We use position: absolute + left: -9999px so the offscreen
//     DOM still has layout (display: none would zero out box rects
//     and html2canvas would capture nothing).
//   - useCORS:true is on for safety — though all assets are local.
// ============================================================

import { createRoot } from 'react-dom/client'
import { flushSync } from 'react-dom'
import html2canvas from 'html2canvas'

const EXPORT_W = 1080
const EXPORT_H = 1920

function slugify(s) {
  return (s || 'dirimu')
    .toString()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    || 'dirimu'
}

function nextPaint() {
  return new Promise((resolve) =>
    requestAnimationFrame(() => requestAnimationFrame(resolve))
  )
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

/**
 * Renders BaziCard offscreen at 4× and downloads a PNG.
 *
 * @param {object} chart           — the chart from calculateBaziChart
 * @param {object} interpretation  — getInterpretation(chart) output
 * @param {Function} BaziCard      — the BaziCard component
 */
export async function exportCardAsPNG(chart, interpretation, BaziCard) {
  const container = document.createElement('div')
  container.style.cssText = `
    position: absolute;
    left: -9999px;
    top: 0;
    width: ${EXPORT_W}px;
    height: ${EXPORT_H}px;
    pointer-events: none;
  `
  document.body.appendChild(container)

  const root = createRoot(container)

  try {
    flushSync(() => {
      root.render(
        <BaziCard chart={chart} interpretation={interpretation} mode="export" />
      )
    })
    await nextPaint()

    const canvas = await html2canvas(container, {
      width:           EXPORT_W,
      height:          EXPORT_H,
      windowWidth:     EXPORT_W,
      windowHeight:    EXPORT_H,
      scale:           1,
      useCORS:         true,
      backgroundColor: null,
      logging:         false,
    })

    const blob = await new Promise((resolve, reject) => {
      canvas.toBlob((b) => (b ? resolve(b) : reject(new Error('toBlob returned null'))), 'image/png')
    })

    const element = chart.dayMaster?.element || 'card'
    const filename = `dirimu-${slugify(element)}-${chart.birthDate || 'unknown'}.png`
    triggerDownload(blob, filename)
  } finally {
    root.unmount()
    if (container.parentNode) container.parentNode.removeChild(container)
  }
}

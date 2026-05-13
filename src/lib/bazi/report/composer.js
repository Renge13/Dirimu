// ============================================================
// Report composer — chart → full reflective report
// ============================================================
// Orchestrates 7 section composers, attaches per-section prompts,
// filters out empty sections, and emits a uniform object that
// the Report.jsx renderer consumes.
//
// Pure and deterministic: same chart in → same report out. No
// network, no AI, no randomness.
//
// Phase 4a behavior: all passages are empty, so every section
// composer returns null. getReport returns:
//   { archetype: 'Gunung', chinese: '戊土', sections: [] }
// Phase 4b/c: as passage banks fill, `sections` populates.
// ============================================================

import { DAY_MASTERS } from '../interpretation/dayMasters.js'
import { PROMPTS } from './prompts.js'

import { composePembukaan }            from './sections/pembukaan.js'
import { composeCaraKamuHadir }        from './sections/caraKamuHadir.js'
import { composePolaDiPekerjaan }      from './sections/polaDiPekerjaan.js'
import { composePolaDiHubungan }       from './sections/polaDiHubungan.js'
import { composePolaDiTubuh }          from './sections/polaDiTubuh.js'
import { composeHubunganDenganRezeki } from './sections/hubunganDenganRezeki.js'
import { composePenutup }              from './sections/penutup.js'

/**
 * Build the full reflective report for a chart.
 *
 * @param {object} chart  From calculateBaziChart
 * @returns {object}      { archetype, chinese, dayStem, sections[] }
 */
export function getReport(chart) {
  const stem = chart?.day?.stem
  const dm = DAY_MASTERS[stem] || {}
  const prompts = PROMPTS[stem] || {}

  // Each section composer reads its passage bank and returns
  // a section object, or null if the bank is empty for this stem.
  const candidates = [
    composePembukaan(chart,            prompts.pembukaan),
    composeCaraKamuHadir(chart,        prompts.caraKamuHadir),
    composePolaDiPekerjaan(chart,      prompts.polaDiPekerjaan),
    composePolaDiHubungan(chart,       prompts.polaDiHubungan),
    composePolaDiTubuh(chart,          prompts.polaDiTubuh),
    composeHubunganDenganRezeki(chart, prompts.hubunganDenganRezeki),
    composePenutup(chart,              prompts.penutup),
  ]

  const sections = candidates.filter(Boolean)

  return {
    archetype: dm.name || '',
    chinese:   dm.chinese || '',
    dayStem:   stem || null,
    sections,
  }
}

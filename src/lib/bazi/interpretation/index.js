// ============================================================
// Interpretation composer — chart → InterpretationJSON
// ============================================================
// Pure, synchronous, deterministic. Same chart → same output.
// No network. No API key. No randomness.
//
// The composer reads four axes from the chart:
//   1. Day Master (chart.day.stem)       → 10 archetypes
//   2. Day Branch (chart.day.branch)     → harmony/clash narrative
//   3. Dominant element (max count)      → element flavor
//   4. Missing element (count === 0)     → vulnerability framing
//
// For "pick N from pool" slots (traits, identityPills), selection is
// seeded by `${stem}${branch}:${birthDate}:${birthTime}`. Charts with
// different seeds → different selections. Same chart → same selection.
//
// If a bank entry is empty, the field returns ''. Empty arrays for
// pool-driven slots. The UI is built to hide empty sections, so a
// half-filled bank degrades gracefully — you can ship as you write.
// ============================================================

import { DAY_MASTERS } from './dayMasters.js'
import { DAY_BRANCHES } from './dayBranches.js'
import { DOMINANT_ELEMENT, MISSING_ELEMENT } from './elementImpact.js'
import { PAID_HOOK_TEMPLATE } from './paidHooks.js'
import { pickN } from './pickN.js'
import { STEM_ELEMENTS, STEM_POLARITY } from '../stems.js'

const ELEMENTS = ['Wood', 'Fire', 'Earth', 'Metal', 'Water']
const TRAITS_TO_SHOW = 6
const PILLS_TO_SHOW = 5

function getDominantElement(balance) {
  let dom = null
  let max = 0
  for (const el of ELEMENTS) {
    const v = balance[el] || 0
    if (v > max) {
      max = v
      dom = el
    }
  }
  return dom
}

function getMissingElement(balance) {
  for (const el of ELEMENTS) {
    if ((balance[el] || 0) === 0) return el
  }
  return null
}

function interpolate(template, vars) {
  if (!template) return ''
  return template.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '')
}

export function getInterpretation(chart) {
  const stem = chart.day.stem
  const branch = chart.day.branch
  const dm = DAY_MASTERS[stem] || {}
  const db = DAY_BRANCHES[branch] || {}

  const dominant = getDominantElement(chart.elementBalance)
  const missing = getMissingElement(chart.elementBalance)

  const seed = `${stem}${branch}:${chart.birthDate}:${chart.birthTime ?? ''}`

  const traits = pickN(dm.traits || [], TRAITS_TO_SHOW, seed + ':traits')
  const identityPills = pickN(dm.identityPills || [], PILLS_TO_SHOW, seed + ':pills')

  // Missing element takes priority over dominant — the skill prefers
  // surfacing one vulnerability over one strength.
  const elementNote =
    (missing && MISSING_ELEMENT[missing]) ||
    (dominant && DOMINANT_ELEMENT[dominant]) ||
    ''

  const paidHook = interpolate(PAID_HOOK_TEMPLATE, {
    dayMasterName: dm.name || '',
    dominantElement: dominant || '',
    missingElement: missing || '',
  })

  return {
    dayMasterName: dm.name || '',
    dayMasterChinese: dm.chinese || `${stem}${STEM_ELEMENTS[stem] || ''}`,
    dayMasterElement: STEM_ELEMENTS[stem] || null,
    dayMasterPolarity: STEM_POLARITY[stem] || null,
    shareTagline: dm.tagline || '',
    heroDescription: dm.hero || '',
    identityPills,
    personalityTraits: traits,
    elementNote,
    dominantElement: dominant,
    missingElement: missing,
    compatibleBranches: chart.harmonyBranches,
    clashBranches: chart.clashBranches,
    compatibleDescription: db.harmony || '',
    clashDescription: db.clash || '',
    paidHook,
  }
}

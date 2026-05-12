// ============================================================
// Sharecard composer — chart → sharecard data
// ============================================================
// Pure, deterministic. Same chart → same card. No network.
//
// Inputs:  chart (from calculateBaziChart)
// Output:  { superpower, chinese, tagline, pills, team, lawan }
//
//   superpower   archetype name (e.g. "Pohon Oak")
//   chinese      stem + element char (e.g. "甲木")
//   tagline      sharecard override OR canonical from dayMasters.js
//   pills        5 phrases — curated indices if set, else picked
//                from the 12 via chart-seeded pickN
//   team         [{ stem, name }, { stem, name }] — generates DM element
//   lawan        [{ stem, name }, { stem, name }] — controls DM element
// ============================================================

import { CARD_DATA } from './cardData.js'
import { getTeamLawan } from './elementCycle.js'
import { DAY_MASTERS } from '../interpretation/dayMasters.js'
import { pickN } from '../interpretation/pickN.js'
import { STEM_ELEMENTS } from '../stems.js'

const PILLS_ON_CARD = 5

function archetypeFor(stem) {
  const dm = DAY_MASTERS[stem]
  return { stem, name: dm?.name || stem }
}

export function getCardData(chart) {
  const stem = chart.day.stem
  const card = CARD_DATA[stem] || {}
  const dm = DAY_MASTERS[stem] || {}

  const tagline = card.shareTagline || dm.tagline || ''

  const pool = dm.identityPills || []
  let pills
  if (card.pillIndices && card.pillIndices.length > 0) {
    pills = card.pillIndices.map((i) => pool[i]).filter(Boolean).slice(0, PILLS_ON_CARD)
  } else {
    pills = pickN(pool, PILLS_ON_CARD, `${stem}:${chart.birthDate}:card`)
  }

  const dayElement = STEM_ELEMENTS[stem]
  const { team, lawan } = getTeamLawan(dayElement)

  return {
    superpower: card.superpower || dm.name || '',
    chinese: dm.chinese || `${stem}${dayElement || ''}`,
    tagline,
    pills,
    team: team.map(archetypeFor),
    lawan: lawan.map(archetypeFor),
  }
}

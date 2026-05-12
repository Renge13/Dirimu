// ============================================================
// Five Element Cycle — Team / Lawan derivation for the sharecard
// ============================================================
// Two cycles drive the sharecard's social mechanic:
//   Generation (相生): Wood → Fire → Earth → Metal → Water → Wood
//   Control    (相克): Wood→Earth, Earth→Water, Water→Fire,
//                      Fire→Metal, Metal→Wood
//
// For a given Day Master element:
//   Team  = archetypes whose element GENERATES the DM element
//   Lawan = archetypes whose element CONTROLS the DM element
//
// Example: Wood DM (甲乙) → Team = Water (壬癸 = Samudra, Hujan),
//          Lawan = Metal (庚辛 = Pedang, Permata).
//
// This is pure data — no copy required. Mirrors the dre-yo
// "Your Team / Your Enemies" social hook.
// ============================================================

const GENERATED_BY = {
  Wood:  'Water',
  Fire:  'Wood',
  Earth: 'Fire',
  Metal: 'Earth',
  Water: 'Metal',
}

const CONTROLLED_BY = {
  Wood:  'Metal',
  Fire:  'Water',
  Earth: 'Wood',
  Metal: 'Fire',
  Water: 'Earth',
}

// Element → its two Heavenly Stem archetypes ([Yang stem, Yin stem])
const ELEMENT_STEMS = {
  Wood:  ['甲', '乙'],
  Fire:  ['丙', '丁'],
  Earth: ['戊', '己'],
  Metal: ['庚', '辛'],
  Water: ['壬', '癸'],
}

export function getTeamLawan(dayElement) {
  return {
    team:  ELEMENT_STEMS[GENERATED_BY[dayElement]]  || [],
    lawan: ELEMENT_STEMS[CONTROLLED_BY[dayElement]] || [],
  }
}

export { ELEMENT_STEMS, GENERATED_BY, CONTROLLED_BY }

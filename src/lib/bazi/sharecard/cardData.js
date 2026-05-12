// ============================================================
// Sharecard data — per-stem overrides for the 9:16 IG-Story card
// ============================================================
// The sharecard is a separate product from the reading. It uses
// Bank 1 archetype names and identityPills, but allows a punchier
// tagline override and a curated pill subset where useful.
//
// FIELD SCHEMA per entry:
//   superpower    Archetype name. Canonical, pre-set.
//   shareTagline  '' = inherit canonical tagline from dayMasters.js.
//                 Non-empty = override for the sharecard ONLY.
//                 The reading still uses the canonical tagline.
//   pillIndices   Empty array = composer picks 5 of 12 pills via
//                 chart-seeded pickN (varies per user). Non-empty
//                 (e.g. [0,2,3,7,11]) = curated 5 for max impact.
//
// COPYWRITER ACTION ITEMS for this file:
//   - Fill `shareTagline` for 壬, 辛, 癸 (the 3 weak canonicals).
//     Other 7 leave empty to inherit.
//   - Optionally: curate `pillIndices` if a specific 5 land better
//     on the card than random-from-12.
// ============================================================

export const CARD_DATA = {
  '甲': { superpower: 'Pohon Oak',       shareTagline: '', pillIndices: [] },
  '乙': { superpower: 'Tanaman Rambat',  shareTagline: '', pillIndices: [] },
  '丙': { superpower: 'Matahari',        shareTagline: '', pillIndices: [] },
  '丁': { superpower: 'Lilin',           shareTagline: '', pillIndices: [] },
  '戊': { superpower: 'Gunung',          shareTagline: '', pillIndices: [] },
  '己': { superpower: 'Ladang',          shareTagline: '', pillIndices: [] },
  '庚': { superpower: 'Pedang',          shareTagline: '', pillIndices: [] },
  '辛': { superpower: 'Permata',         shareTagline: '', pillIndices: [] }, // TODO punchier
  '壬': { superpower: 'Samudra',         shareTagline: '', pillIndices: [] }, // TODO punchier
  '癸': { superpower: 'Hujan',           shareTagline: '', pillIndices: [] }, // TODO punchier
}

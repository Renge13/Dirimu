// ============================================================
// Day Branch flavor — keyed by Earthly Branch character
// ============================================================
// 12 entries, one per Earthly Branch. These drive the
// harmony/clash mechanic — the viral social hook ("kamu cocok
// sama orang yang lahir di tahun/bulan/hari 丑").
//
// FIELD SCHEMA per entry:
//   harmony   TODO. ~20 words, Bahasa Indonesia. Describes WHO
//             harmonizes with this branch and WHY — framed
//             relationally, not abstractly. Example shape:
//             "Kamu cocok dengan ... karena ..."
//   clash     TODO. ~20 words. Describes WHO challenges this
//             branch and WHY. Frame as growth, not threat.
//             "Mereka mempercepat ujianmu, bukan menghancurkanmu."
//
// The compatible/clash BRANCH characters themselves come from the
// chart object (chart.harmonyBranches, chart.clashBranches). The
// copy below is the narrative that surrounds those branch chips.
//
// MVP SCOPE: 12 harmony + 12 clash = 24 fragments.
// ============================================================

export const DAY_BRANCHES = {
  '子': { harmony: '', clash: '' }, // Tikus (Rat) — Water
  '丑': { harmony: '', clash: '' }, // Kerbau (Ox) — Earth
  '寅': { harmony: '', clash: '' }, // Harimau (Tiger) — Wood
  '卯': { harmony: '', clash: '' }, // Kelinci (Rabbit) — Wood
  '辰': { harmony: '', clash: '' }, // Naga (Dragon) — Earth
  '巳': { harmony: '', clash: '' }, // Ular (Snake) — Fire
  '午': { harmony: '', clash: '' }, // Kuda (Horse) — Fire
  '未': { harmony: '', clash: '' }, // Kambing (Goat) — Earth
  '申': { harmony: '', clash: '' }, // Monyet (Monkey) — Metal
  '酉': { harmony: '', clash: '' }, // Ayam (Rooster) — Metal
  '戌': { harmony: '', clash: '' }, // Anjing (Dog) — Earth
  '亥': { harmony: '', clash: '' }, // Babi (Pig) — Water
}

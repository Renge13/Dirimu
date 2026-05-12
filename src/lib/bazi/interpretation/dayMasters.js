// ============================================================
// Day Master archetypes — keyed by Heavenly Stem character
// ============================================================
// 10 entries, one per Heavenly Stem. The Day Master is the
// backbone of the BaZi reading (~80% of the user-facing copy).
//
// FIELD SCHEMA per entry:
//   name           Indonesian archetype name (already set; canonical).
//   chinese        Stem + element character (already set).
//   tagline        TODO. Max ~12 words. The shareable line on the
//                  sharecard. First person, voice of fate, not advice.
//                  Example shape: "Aku <verb>, <contrast/twist>."
//   hero           TODO. 2–3 sentences, ~50–80 words. Indonesian prose.
//                  "Who you ARE" — not a list of traits. Poetic but
//                  grounded. Validation before revelation: first sentence
//                  must make her feel seen. See voice rules in the
//                  bazi-interpreter skill.
//   identityPills  TODO. 12 short phrases (2–5 words each). The pool the
//                  composer picks 5 from (deterministically, per chart).
//                  Specific and shareable. Not single nouns.
//                  Examples of SHAPE (not content): "Tidak pernah diam",
//                  "Bekerja saat dunia tidur".
//   traits         TODO. 8–10 phrases (3–8 words each). Hyper-specific
//                  personality observations. "Kamu bisa ngobrol sama
//                  siapa pun, tapi jarang ada yang benar-benar kenal kamu"
//                  is the bar — not "Kamu mudah bergaul".
//
// VOICE NON-NEGOTIABLES (from bazi-interpreter skill):
//   - No chatbot language ("Berdasarkan analisis...", "Kamu memiliki...")
//   - Voice of fate, not advice ("Ini yang tertulis" not "Sebaiknya kamu...")
//   - Hyper-specific. Generic phrases die.
//   - Target reader: Indonesian woman 25–40 with real life-stakes.
//
// MVP SCOPE: 10 taglines + 10 heroes + 80 traits (8 per stem) = 100 fragments.
// identityPills can be left as empty arrays for v1 — composer will skip them.
// Add them later when ready to expand.
// ============================================================

export const DAY_MASTERS = {
  '甲': {
    name: 'Pohon Oak',
    chinese: '甲木',
    tagline: '',
    hero: '',
    identityPills: [],
    traits: [],
  },
  '乙': {
    name: 'Tanaman Rambat',
    chinese: '乙木',
    tagline: '',
    hero: '',
    identityPills: [],
    traits: [],
  },
  '丙': {
    name: 'Matahari',
    chinese: '丙火',
    tagline: '',
    hero: '',
    identityPills: [],
    traits: [],
  },
  '丁': {
    name: 'Lilin',
    chinese: '丁火',
    tagline: '',
    hero: '',
    identityPills: [],
    traits: [],
  },
  '戊': {
    name: 'Gunung',
    chinese: '戊土',
    tagline: '',
    hero: '',
    identityPills: [],
    traits: [],
  },
  '己': {
    name: 'Ladang',
    chinese: '己土',
    tagline: '',
    hero: '',
    identityPills: [],
    traits: [],
  },
  '庚': {
    name: 'Pedang',
    chinese: '庚金',
    tagline: '',
    hero: '',
    identityPills: [],
    traits: [],
  },
  '辛': {
    name: 'Permata',
    chinese: '辛金',
    tagline: '',
    hero: '',
    identityPills: [],
    traits: [],
  },
  '壬': {
    name: 'Samudra',
    chinese: '壬水',
    tagline: '',
    hero: '',
    identityPills: [],
    traits: [],
  },
  '癸': {
    name: 'Hujan',
    chinese: '癸水',
    tagline: '',
    hero: '',
    identityPills: [],
    traits: [],
  },
}

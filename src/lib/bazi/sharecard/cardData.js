// ============================================================
// Sharecard data — per-stem overrides for the 9:16 IG-Story card
// ============================================================
// The sharecard is a separate product from the reading. It uses
// the Bank 1 archetype names but allows shorter, screenshot-bait
// pills and an optional tagline override.
//
// FIELD SCHEMA per entry:
//   superpower    Archetype name. Canonical, pre-set.
//   shareTagline  '' = inherit canonical tagline from dayMasters.js.
//                 Non-empty = override for the sharecard ONLY.
//                 The reading still uses the canonical tagline.
//   cardPills     5 ultra-short identity pills (1–3 words each),
//                 dre-yo style. The card renders these directly.
//                 Empty array = composer falls back to pickN over
//                 the longer Bank 1 identityPills.
//
// COPYWRITER ACTION ITEMS:
//   - Optionally rewrite cardPills if a sharper phrase lands better.
//   - Optionally fill shareTagline for 壬, 辛, 癸 if the canonicals
//     don't feel punchy enough on the live card.
// ============================================================

export const CARD_DATA = {
  '甲': {
    superpower: 'Pohon Oak',
    shareTagline: '',
    cardPills: [
      'Akar dalam',
      'Tak tergoyahkan',
      'Punggung kokoh',
      'Pelindung diam',
      'Setia pada prinsip',
    ],
  },
  '乙': {
    superpower: 'Tanaman Rambat',
    shareTagline: '',
    cardPills: [
      'Lentur tak patah',
      'Mata yang awas',
      'Tumbuh di celah',
      'Strategi diam',
      'Sabar yang menang',
    ],
  },
  '丙': {
    superpower: 'Matahari',
    shareTagline: '',
    cardPills: [
      'Sinar pertama',
      'Tak teredupkan',
      'Penerang ruangan',
      'Optimisme murni',
      'Hangat alami',
    ],
  },
  '丁': {
    superpower: 'Lilin',
    shareTagline: '',
    cardPills: [
      'Cahaya yang setia',
      'Pendengar dalam',
      'Tak padam',
      'Fokus intens',
      'Penerang sudut sepi',
    ],
  },
  '戊': {
    superpower: 'Gunung',
    shareTagline: '',
    cardPills: [
      'Tak tergoyahkan',
      'Fondasi yang diam',
      'Tempat bersandar',
      'Tegak di badai',
      'Konsisten',
    ],
  },
  '己': {
    superpower: 'Ladang',
    shareTagline: '',
    cardPills: [
      'Tanah yang subur',
      'Penumbuh diam-diam',
      'Penerima tanpa syarat',
      'Tempat pulang',
      'Selalu berisi',
    ],
  },
  '庚': {
    superpower: 'Pedang',
    shareTagline: '',
    cardPills: [
      'Tajam, tak basa-basi',
      'Pemotong kebohongan',
      'Adil tanpa kompromi',
      'Tak bisa dibengkok',
      'Prinsip di atas segalanya',
    ],
  },
  '辛': {
    superpower: 'Permata',
    shareTagline: '',
    cardPills: [
      'Bernilai dalam diam',
      'Indah tanpa berusaha',
      'Selektif',
      'Tak bisa ditawar',
      'Kemewahan tenang',
    ],
  },
  '壬': {
    superpower: 'Samudra',
    shareTagline: '',
    cardPills: [
      'Tak terpetakan',
      'Kedalaman luas',
      'Arus tersembunyi',
      'Misteri yang hidup',
      'Tak bisa dimiliki',
    ],
  },
  '癸': {
    superpower: 'Hujan',
    shareTagline: '',
    cardPills: [
      'Lembut yang meresap',
      'Datang tanpa suara',
      'Penyubur diam-diam',
      'Intuisi tajam',
      'Hadir saat dibutuhkan',
    ],
  },
}

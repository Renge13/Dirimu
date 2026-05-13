// ============================================================
// Element dominance and absence — short observational notes
// ============================================================
// Triggered by the chart's elementBalance counts (which include
// hidden stem weights from each branch). The composer picks ONE
// note to surface: missing element takes priority over dominant.
//
// WHY this priority: the bazi-interpreter skill is explicit —
// "Do NOT dump all five elements' analysis on the user. Pick 2
// things: Day Master identity (who you are), and ONE dominant
// or missing element implication (what it creates RIGHT NOW)."
//
// FIELD SCHEMA per entry:
//   1–2 sentences, ~25 words, Bahasa Indonesia. What this
//   imbalance CREATES in the reader's life right now. Specific,
//   present-tense, addressed to "kamu".
// ============================================================

export const DOMINANT_ELEMENT = {
  Wood: 'Kamu terus memberi ruang untuk orang lain tumbuh sampai lupa menyisakan tanah bagi akarmu sendiri. Ambisimu adalah berkah sekaligus beban yang tak terlihat.',
  Fire: 'Kamu menyala paling terang saat dunia sedang kacau. Masalahnya kamu seringkali kehabisan napas di tengah keramaian sementara orang lain hanya sanggup melihat cahayamu.',
  Earth: 'Kamu adalah jangkar bagi semua orang di sekitarmu. Namun diam-diam kamu merasa terjebak dalam peran yang kamu bangun sendiri tanpa tahu cara melangkah keluar.',
  Metal: 'Logikamu yang presisi adalah senjata mematikan dalam karier. Namun di balik pintu tertutup kamu seringkali terluka oleh ketajaman standarmu yang tidak manusiawi itu.',
  Water: 'Kamu memahami rahasia orang lain bahkan sebelum mereka bicara. Kedalaman ini membuatmu sulit menemukan seseorang yang sanggup menyelami pikiranmu tanpa merasa tenggelam.',
}

export const MISSING_ELEMENT = {
  Wood: 'Rencanamu seringkali berhenti di atas kertas tanpa pernah sempat berakar. Ada satu dorongan untuk mulai berani mengambil risiko yang selama ini kamu hindari.',
  Fire: 'Hidupmu berjalan stabil namun tanpa binar yang membuatmu merasa hidup. Kamu butuh satu alasan kuat untuk berani menjadi pusat perhatian tanpa rasa takut.',
  Earth: 'Kamu merasa melayang tanpa pijakan yang pasti meski segalanya tampak baik. Saatnya mencari jangkar yang bisa menahanmu tetap diam saat badai keinginan datang.',
  Metal: 'Kamu kesulitan menarik garis tegas karena takut melukai perasaan orang. Padahal satu keputusan dingin bisa menyelamatkanmu dari kekacauan menahun yang terus menguras energi.',
  Water: 'Segalanya terasa kaku dan dipaksakan dalam keseharianmu saat ini. Ada cara untuk mendapatkan apa yang kamu mau tanpa harus terus melawan arus yang melelahkan.',
}

// ============================================================
// Day Branch flavor — keyed by Earthly Branch character
// ============================================================
// 12 entries, one per Earthly Branch. These drive the
// harmony/clash mechanic — the viral social hook ("kamu cocok
// sama orang yang lahir di tahun/bulan/hari 丑").
//
// FIELD SCHEMA per entry:
//   harmony   ~20 words, Bahasa Indonesia. Describes WHO
//             harmonizes with this branch and WHY. Relational
//             framing, direct voice, minimal abstract metaphor.
//   clash     ~20 words. Describes WHO challenges this branch
//             and WHY. Framed as growth, not threat.
//
// The compatible/clash BRANCH characters themselves come from the
// chart object (chart.harmonyBranches, chart.clashBranches). The
// copy below is the narrative that surrounds those branch chips.
// ============================================================

export const DAY_BRANCHES = {
  '子': {
    harmony: 'Mereka membuat pikiranmu yang ribut akhirnya tenang. Di dekat mereka, ambisimu punya jangkar.',
    clash: 'Mereka menarikmu ke permukaan saat kamu belum siap. Bukan untuk mengganggu, tapi menguji apakah kamu yakin pada apa yang kamu sembunyikan.',
  },
  '丑': {
    harmony: 'Mereka mengerti beban tanggung jawabmu tanpa kamu perlu menjelaskan. Sedikit orang yang bisa membaca diammu seperti mereka.',
    clash: 'Mereka mengguncang kemapanan yang kamu bangun. Bukan untuk menghancurkan, tapi memastikan kamu tidak nyaman di tempat yang salah.',
  },
  '寅': {
    harmony: 'Mereka memberi ruang untuk visi besarmu. Tanpa banyak bicara, mereka tahu kamu butuh kebebasan seperti udara.',
    clash: 'Mereka memangkas dahanmu yang terlalu liar. Sakit, tapi memastikan energimu tidak terbuang ke arah yang salah.',
  },
  '卯': {
    harmony: 'Mereka melindungi sisi lembutmu yang jarang kamu perlihatkan. Di dekat mereka, kamu tidak perlu selalu waspada.',
    clash: 'Ketajaman mereka sering melukai sensitivitasmu. Tapi mereka jujur tentang bagian dirimu yang selama ini terlalu rapuh.',
  },
  '辰': {
    harmony: 'Mereka mengimbangi intensitasmu tanpa merasa terancam. Bersama mereka, energi mentahmu berubah jadi sesuatu yang bernilai.',
    clash: 'Dua otoritas dalam satu ruang. Mereka menantang dominasimu, mengajarkan bahwa kekuatan sejati kadang muncul dari kemampuan mengalah.',
  },
  '巳': {
    harmony: 'Kalian berbagi bahasa rahasia yang sama. Mereka mengerti strategi di balik diammu, membuat rencanamu jauh lebih mudah dieksekusi.',
    clash: 'Mereka memprovokasi emosi yang biasanya kamu sembunyikan rapat-rapat. Ujian bagi ketenangan yang selama ini kamu banggakan.',
  },
  '午': {
    harmony: 'Mereka tempat bernaung saat apimu mulai melelahkan diri sendiri. Kesejukan mereka menjaga momentummu tetap stabil.',
    clash: 'Arus mereka berlawanan dengan gairahmu. Mereka sering menghentikan langkahmu tiba-tiba, memaksamu mengevaluasi arah sebelum terlambat.',
  },
  '未': {
    harmony: 'Kehangatan mereka melunakkan ketangguhanmu secara alami. Bersama mereka, kamu tidak perlu memikul beban dunia sendirian.',
    clash: 'Mereka merobek ketenangan yang kamu jaga susah payah. Tanda bahwa ada bagian hidupmu yang sudah harus dibongkar.',
  },
  '申': {
    harmony: 'Mereka mengasah ide-ide liarmu menjadi instrumen yang siap pakai. Sinergi yang mempertajam, bukan menumpulkan.',
    clash: 'Langkah mereka mengacaukan ritme kerjamu. Ujian bagi fleksibilitasmu saat rencana paling matang sekalipun berantakan.',
  },
  '酉': {
    harmony: 'Mereka memberi struktur pada kilauanmu. Pengakuan tulus yang membuatmu merasa divalidasi tanpa harus meminta perhatian.',
    clash: 'Kritik mereka mencabut akar kenyamananmu tiba-tiba. Memaksamu tumbuh di luar taman yang selama ini kamu batasi.',
  },
  '戌': {
    harmony: 'Hanya mereka yang diizinkan masuk ke balik dinding yang kamu bangun. Kelembutan mereka satu-satunya hal yang bisa meruntuhkan kewaspadaanmu.',
    clash: 'Mereka badai yang menghantam tembok pertahananmu. Menuntutmu jujur: apa yang kamu lindungi itu harta, atau hanya rasa takut?',
  },
  '亥': {
    harmony: 'Mereka ruang untuk pertumbuhanmu. Bersama mereka, wawasanmu meluas dan intuisimu mulai menemukan kebenaran praktis.',
    clash: 'Mereka memicu gejolak di bawah permukaan tenangmu. Menantangmu berhenti mengalir tanpa arah dan mulai punya sikap nyata.',
  },
}

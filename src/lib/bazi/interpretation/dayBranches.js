// ============================================================
// Day Branch flavor — keyed by Earthly Branch character
// ============================================================
// 12 entries, one per Earthly Branch. These drive the
// harmony/clash mechanic — the viral social hook ("kamu cocok
// sama orang yang lahir di tahun/bulan/hari 丑").
//
// FIELD SCHEMA per entry:
//   harmony   ~20 words, Bahasa Indonesia. Describes WHO
//             harmonizes with this branch and WHY — framed
//             relationally.
//   clash     ~20 words. Describes WHO challenges this branch
//             and WHY. Framed as growth, not threat.
//
// The compatible/clash BRANCH characters themselves come from the
// chart object (chart.harmonyBranches, chart.clashBranches). The
// copy below is the narrative that surrounds those branch chips.
// ============================================================

export const DAY_BRANCHES = {
  '子': {
    harmony: 'Hanya ketenangan mereka yang mampu menjinakkan arus pikiranmu yang tak pernah berhenti. Bersama mereka, ambisimu menemukan rumah dan jangkar.',
    clash: 'Kehadiran mereka adalah interupsi bagi kedalamanmu. Mereka memaksamu keluar ke permukaan sebelum kamu siap, menguji seberapa kuat integritas batinmu.',
  },
  '丑': {
    harmony: 'Ada kesepahaman sunyi di antara kalian. Mereka adalah sedikit dari orang yang tak perlu penjelasan untuk mengerti beban tanggung jawabmu.',
    clash: 'Mereka datang untuk mengguncang kemapanan yang kamu bangun. Gesekan ini bukan untuk menghancurkan, tapi memastikan kamu tidak terjebak dalam zona nyaman.',
  },
  '寅': {
    harmony: 'Mereka menyediakan nutrisi bagi visi besarmu. Tanpa banyak bicara, mereka memahami bahwa kebebasan adalah oksigen yang membuatmu tetap hidup.',
    clash: 'Mereka adalah pemangkas bagi dahanmu yang terlalu liar. Pertemuan ini menyakitkan, namun perlu agar energimu tidak terbuang sia-sia pada hal yang salah.',
  },
  '卯': {
    harmony: 'Kesetiaan mereka adalah perisai bagi sisi lembutmu yang jarang diperlihatkan. Di dekat mereka, kamu tidak perlu selalu waspada terhadap dunia.',
    clash: 'Ketajaman mereka seringkali melukai sensitivitasmu. Namun, mereka adalah cermin yang jujur tentang bagian dari dirimu yang selama ini terlalu rapuh.',
  },
  '辰': {
    harmony: 'Hanya mereka yang sanggup mengimbangi intensitasmu tanpa merasa terancam. Sebuah kemitraan yang mengubah energi mentah menjadi sesuatu yang bernilai tinggi.',
    clash: 'Dua otoritas dalam satu ruang. Mereka menantang dominasimu, memaksa kamu belajar bahwa kekuatan sejati terkadang muncul dari kemampuan untuk mengalah.',
  },
  '巳': {
    harmony: 'Kalian berbagi bahasa rahasia yang sama. Mereka memahami strategi di balik diammu, membuat eksekusi rencana besarmu terasa jauh lebih mudah.',
    clash: 'Mereka memprovokasi emosi yang biasanya kamu sembunyikan dengan rapat. Kehadiran mereka adalah ujian bagi ketenangan yang selama ini kamu banggakan.',
  },
  '午': {
    harmony: 'Mereka adalah tempat bernaung saat apimu mulai melelahkan diri sendiri. Kehadiran mereka memberikan kesejukan yang menjaga momentummu tetap stabil dan panjang.',
    clash: 'Arus mereka berlawanan dengan gairahmu. Mereka akan sering menghentikan langkahmu secara tiba-tiba, memaksa kamu mengevaluasi arah tujuan sebelum terlambat.',
  },
  '未': {
    harmony: 'Mereka memberi kehangatan yang membuat ketangguhanmu melunak secara alami. Bersama mereka, kamu tidak perlu memikul beban dunia sendirian.',
    clash: 'Mereka merobek ketenangan yang kamu jaga dengan susah payah. Konflik ini adalah cara semesta membongkar struktur hidupmu yang sudah tidak lagi relevan.',
  },
  '申': {
    harmony: 'Sinergi ini adalah tentang pemurnian. Mereka mampu menangkap ide-ide liarmu dan mengasahnya menjadi instrumen yang tajam dan siap pakai.',
    clash: 'Langkah mereka seringkali mengacaukan ritme kerjamu. Mereka adalah ujian bagi fleksibilitasmu, memaksamu beradaptasi saat rencana yang paling matang sekalipun berantakan.',
  },
  '酉': {
    harmony: 'Mereka memberikan struktur pada kilauanmu. Ada pengakuan tulus yang membuatmu merasa divalidasi tanpa harus berteriak meminta perhatian.',
    clash: 'Mereka mencabut akar kenyamananmu dengan kritik yang tak terduga. Kehadiran mereka memaksa kamu tumbuh di luar taman yang selama ini kamu batasi.',
  },
  '戌': {
    harmony: 'Di balik dinding yang kamu bangun, hanya mereka yang diizinkan masuk. Kelembutan mereka adalah satu-satunya hal yang bisa meruntuhkan kewaspadaanmu.',
    clash: 'Mereka adalah badai yang menghantam tembok pertahananmu. Pertemuan ini menuntutmu untuk jujur: apakah yang kamu lindungi itu harta, atau hanya rasa takut?',
  },
  '亥': {
    harmony: 'Mereka adalah ruang bagi pertumbuhanmu. Bersama mereka, wawasanmu meluas dan intuisi yang biasanya kamu ragukan mulai menemukan kebenaran praktisnya.',
    clash: 'Kehadiran mereka memicu gejolak di bawah permukaan tenangmu. Mereka menantangmu untuk berhenti mengalir tanpa arah dan mulai menentukan sikap yang nyata.',
  },
}

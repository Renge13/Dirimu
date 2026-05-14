// ============================================================
// Day Branch flavor — keyed by Earthly Branch character
// ============================================================
// 12 entries, one per Earthly Branch. Drives the 六合/六冲 harmony
// + clash mechanic in the Relasi Cabang reading section.
//
// Phase 8a.2: each entry elaborated from ~20 words → ~40-55 word
// paragraph. Smart-friend voice register. Each describes the
// dynamic between the reader and 'mereka' (the compatible/clash
// counterpart from the chips).
//
// The 'Bacaan Mendalam' CTA is NOT in the content — it's appended
// by App.jsx via the OpenLoopText helper after each block.
//
// FIELD SCHEMA per entry:
//   harmony   single paragraph, ~40-55 words. Reader's dynamic
//             with the compatible counterpart (六合 partner).
//   clash     single paragraph, ~40-55 words. Reader's dynamic
//             with the clash counterpart (六冲 partner).
// ============================================================

export const DAY_BRANCHES = {
  '子': {
    harmony: 'Kamu yang pikirannya lari ke mana-mana sering merasa lebih tenang di dekat mereka. Tipe Bumi yang sabar dan nggak gampang goyah ini bisa jadi jangkar buat ide-idemu yang beterbangan. Mereka bantu kamu buat berhenti, menimbang, dan memilih satu langkah yang paling realistis tanpa bikin kamu merasa dibatasi.',
    clash:   'Mereka yang penuh semangat dan suka jadi pusat perhatian kadang bikin kamu nggak nyaman karena mendorongmu keluar dari zona aman. Kamu yang suka menyimpan strategi sering dipaksa buat lebih terbuka dan cepat. Ketegangan ini bisa jadi ujian: apakah kamu cukup percaya diri untuk tampil apa adanya?',
  },
  '丑': {
    harmony: 'Mereka, tipe Air yang lincah dan banyak akal, bisa mencairkan kekakuanmu. Di dekat mereka, kamu jadi lebih fleksibel dan berani mencoba pendekatan baru. Mereka bantu kamu lihat celah yang selama ini terlewat, dan mengajakmu untuk nggak terlalu kaku sama rutinitas.',
    clash:   'Mereka tipe Bumi yang lebih lembut dan emosional kadang bikin kamu ngerasa nggak sabaran. Cara mereka yang santai dan suka mengalir sering terasa mengganggu ritme kerjamu yang pasti. Tapi sebenarnya mereka ngingetin kamu buat lebih rileks dan nggak terlalu keras sama diri sendiri.',
  },
  '寅': {
    harmony: 'Mereka, tipe Air yang intuitif dan penuh kedalaman, bisa meredam impulsifmu. Mereka bawa ketenangan dan perspektif yang bikin kamu nggak cuma bertindak cepat, tapi juga mikir panjang. Di dekat mereka, visi besarmu jadi lebih grounded tanpa kehilangan nyalanya.',
    clash:   'Mereka yang logis, tajam, dan suka memotong langsung sering bentrok sama gaya spontanmu. Kamu yang suka kebebasan bisa ngerasa terkekang oleh standar mereka yang tinggi. Gesekan ini sebenarnya bisa mengasah idemu biar lebih presisi, kalau kamu mau dengerin.',
  },
  '卯': {
    harmony: 'Mereka, tipe Bumi yang setia dan protektif, bisa jadi pelindung buat sisi sensitifmu. Kamu yang sering merasa perlu waspada dan menjaga jarak jadi lebih rileks. Mereka bawa rasa aman yang bikin kamu berani buka diri tanpa takut disalahpahami.',
    clash:   'Mereka yang perfeksionis dan teliti kadang bikin kamu ngerasa dikritik terus. Standar mereka yang tinggi bisa menyayat kelembutanmu. Tapi sebenarnya mereka cuma pengen kamu lebih kuat dan nggak gampang terluka, meski caranya mungkin terasa keras.',
  },
  '辰': {
    harmony: 'Mereka, tipe Logam yang presisi dan berkelas, bisa bikin energimu yang meledak-ledak jadi lebih terarah. Kamu yang penuh ambisi dan suka ambil alih jadi punya partner yang bisa memoles idemu jadi nyata. Mereka bawa struktur tanpa meredam semangatmu.',
    clash:   'Mereka yang punya prinsip teguh dan suka jadi penjaga aturan sering bentrok sama dominasimu. Dua otoritas bertemu, dan gesekan muncul karena kamu berdua sama-sama susah ngalah. Ini ujian buat belajar berbagi panggung dan menghargai sudut pandang lain.',
  },
  '巳': {
    harmony: 'Mereka, tipe Logam yang tajam dan cepat berpikir, bisa mengimbangi strategi licikmu. Kalian berdua sama-sama suka menganalisa, dan mereka bisa bantu idemu yang rumit jadi rencana yang rapi. Kerja sama ini sering menghasilkan solusi yang brilian.',
    clash:   'Mereka yang penuh perasaan dan cenderung mengalir kadang bikin kamu frustrasi karena dianggap nggak jelas. Kamu yang suka segala sesuatu terukur dan terencana jadi ngerasa nggak sinkron. Tapi mereka ngingetin kamu bahwa nggak semua hal bisa dikontrol dengan logika.',
  },
  '午': {
    harmony: 'Mereka, tipe Bumi yang tenang dan penuh perhatian, bisa jadi tempatmu mendingin saat energi udah di puncak. Kamu yang suka jadi pusat perhatian kadang butuh ruang redup; mereka menyediakan itu tanpa perlu banyak kata. Di dekat mereka, kamu bisa istirahat dari tuntutan untuk selalu bersinar.',
    clash:   'Mereka yang tertutup dan penuh rahasia kadang bikin kamu kesel karena susah ditebak. Kamu yang ekspresif pengen kejelasan, tapi mereka malah bikin kamu ngerasa diuji terus. Tantangan ini bisa mengajarimu bahwa nggak semua orang harus terbuka dengan caramu.',
  },
  '未': {
    harmony: 'Mereka, tipe Api yang hangat dan ekspresif, bisa melunakkan sisi keras kepalamu. Kamu yang sering memendam perasaan jadi lebih mudah terbuka di dekat mereka. Mereka bawa cahaya yang bikin kamu ngerasa lebih ringan dan nggak sendirian nanggung beban.',
    clash:   'Mereka yang pekerja keras dan disiplin kadang bikin kamu ngerasa kurang cukup. Standar mereka yang tinggi bikin kamu meragukan caramu sendiri yang lebih santai. Sebenarnya mereka cuma mau kamu lebih bertanggung jawab, tapi gesekan ini bisa jadi pelajaran buat nerima batasan.',
  },
  '申': {
    harmony: 'Mereka, tipe Api yang strategis dan penuh wawasan, bisa mengasah ide-ide liarmu. Kamu yang cepat bosan dan suka loncat-loncat jadi punya partner yang bisa menyalurkan kreativitasmu ke jalur yang tepat. Bersama mereka, kamu jadi lebih fokus tanpa kehilangan kecerdikan.',
    clash:   'Mereka yang pemberani dan suka tantangan sering mengacaukan rencana matangmu. Kamu yang suka kebebasan terstruktur ngerasa terganggu oleh spontanitas mereka. Tapi justru dari situ kamu bisa belajar fleksibilitas dan keluar dari zona nyaman intelektualmu.',
  },
  '酉': {
    harmony: 'Mereka, tipe Bumi yang ambisius dan penuh otoritas, bisa jadi panggung buat kilauanmu. Kamu yang teliti dan butuh pengakuan dihargai oleh mereka yang paham nilai presisi. Mereka beri kamu kepercayaan diri untuk tampil, bukan sekadar di belakang layar.',
    clash:   'Mereka yang lembut dan mengalah sering bikin kamu nggak sabar karena dianggap kurang tegas. Kamu yang suka standar tinggi jadi frustrasi. Tapi mereka sebenarnya bisa ngajarin kamu bahwa nggak semua harus sempurna, dan sedikit fleksibilitas nggak akan nurunin kualitasmu.',
  },
  '戌': {
    harmony: 'Mereka, tipe Kayu yang sensitif dan cinta damai, bisa jadi satu-satunya yang bisa masuk ke balik pertahananmu. Kamu yang setia dan waspada akhirnya bisa rileks karena mereka nggak mengancam. Di dekat mereka, kamu bisa jadi versi dirimu yang paling lembut tanpa takut dimanfaatkan.',
    clash:   'Mereka yang dominan dan suka memimpin sering menantang otoritasmu. Kamu yang protektif jadi ngerasa terpojok saat ide-idemu dipertanyakan. Benturan ini sebenarnya bisa membuka matamu bahwa nggak semua perubahan itu ancaman, dan kadang kamu perlu lebih terbuka pada kritik.',
  },
  '亥': {
    harmony: 'Mereka, tipe Kayu yang visioner dan penuh inisiatif, bisa bikin kamu nggak cuma mengalir. Mereka dorong kamu untuk mewujudkan intuisi jadi tindakan nyata. Di dekat mereka, kamu lebih berani ambil risiko dan keluar dari kebiasaan menunda-nunda.',
    clash:   'Mereka yang suka mengontrol dan penuh perhitungan kadang bikin kamu ngerasa dibatasi. Kamu yang bebas dan intuitif jadi nggak nyaman dengan aturan mereka. Tapi justru dari situ kamu bisa belajar disiplin dan bikin semua kepekaanmu jadi sesuatu yang konkret, bukan cuma perasaan.',
  },
}

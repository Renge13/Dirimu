// ============================================================
// Day Master archetypes — keyed by Heavenly Stem character
// ============================================================
// 10 entries, one per Heavenly Stem. The Day Master is the
// backbone of the BaZi reading.
//
// FIELD SCHEMA per entry:
//
//   Reading-page fields (existing — drive the longer prose surfaces):
//     name           Indonesian archetype name (canonical).
//     chinese        Stem + element character (e.g. '丙火').
//     tagline        Canonical first-person sharable line ("Aku ...").
//     hero           2–3 sentence Indonesian prose. Who you ARE.
//     identityPills  12 short phrases; composer picks 5 per chart.
//     traits         8 phrases; composer picks 6 per chart.
//
//   Card-surface fields (TCG-style BaziCard, watercolor canvas):
//     taglineCard          Pronoun-stripped variant ("Hadir untuk ...").
//                          NO subject (no aku/kamu/dia).
//     kekuatanDescriptors  3 noun phrases. Strengths. Per bazi-card skill.
//     bayanganDescriptors  3 noun phrases. Shadows, not softened.
//     dampakDescriptors    2–3 noun phrases. What OTHERS feel around them,
//                          NOT self-descriptors.
//     sifatPills           4–6 Gen-Z behavioral phrases for the card's
//                          SIFAT zone ("drama sebentar, move on cepet"
//                          register). Composer picks 4 per chart.
//
// Card fields ship empty for 9 archetypes; 丙 prefilled from the
// reference screenshot. Card component hides empty rows gracefully.
// ============================================================

export const DAY_MASTERS = {
  '甲': {
    name: 'Pohon Oak',
    chinese: '甲木',
    subtitle: 'Pribadi yang jadi tumpuan, meski tak pernah meminta peran itu.',
    tagline: 'Aku bukan yang paling keras, tapi aku yang paling teguh.',
    hero: 'Kamu sering menjadi orang yang ditoleh ketika situasi mulai goyah, meski kamu tidak pernah meminta peran itu. Kehadiranmu biasa membuat sekitar merasa lebih aman, seperti pohon tua yang akarnya mencengkeram tanah di bawah permukaan. Di balik ketenangan itu, ada kelelahan karena jarang ada yang bertanya apakah kamu juga butuh bersandar.',
    identityPills: [
      'Tumpuan tanpa diminta',
      'Akar yang tidak terlihat',
      'Prinsip yang tidak mudah goyah',
      'Pendengar yang menyimpan cerita',
      'Bertahan di musim kering',
      'Tempat berteduh bagi sekitar',
    ],
    traits: [
      'Kamu sering memilih diam saat kata-kata tidak lagi berarti',
      'Kamu mengakar dalam-dalam sebelum berani tumbuh ke atas',
      'Kamu menjadi pendengar yang menyimpan banyak cerita orang lain',
      'Kamu jarang tergesa, tapi langkahmu tidak pernah benar-benar berhenti',
      'Kamu sering menjadi tempat pulang bagi orang-orang di sekitarmu',
      'Kamu keras pada diri sendiri, tapi lembut pada yang kamu lindungi',
      'Kesabaranmu kadang disalahartikan sebagai keras kepala',
      'Kamu sering menepati janji bahkan yang tidak pernah diucapkan',
    ],
    taglineCard: 'Tidak selalu bersuara, tapi selalu bisa dipegang.',
    kekuatanDescriptors: [
      'bisa diandalkan dalam situasi genting',
      'memegang prinsip tanpa goyah',
    ],
    bayanganDescriptors: [
      'sulit meminta bantuan kepada orang lain',
      'kaku ketika harus berubah mendadak',
    ],
    dampakDescriptors: [
      'orang merasa lebih tenang di dekatnya',
      'menjadi tempat bertanya ketika bingung',
    ],
    sifatPills: [
      'berpikir panjang, eksekusi tetap berjalan',
      'lingkaran teman kecil tetapi loyal',
      'merencanakan jauh ke depan',
      'tidak suka drama, langsung ke inti',
      'kehadirannya membuat sekitar merasa aman',
    ],
  },
  '乙': {
    name: 'Tanaman Rambat',
    chinese: '乙木',
    subtitle: 'Sosok yang lentur dan tak mudah patah oleh keadaan.',
    tagline: 'Aku meliuk, tapi aku tidak pernah patah.',
    hero: 'Kamu biasa membaca ruangan sebelum siapa pun sempat bicara, menangkap isyarat kecil yang terlewat orang lain. Sikapmu yang lentur sering membuatmu mudah menyesuaikan diri, tapi di dalam kepala, kamu sudah memetakan banyak kemungkinan sebelum melangkah. Hanya saja, karena terlalu sering merambat ke berbagai arah, kadang kamu sendiri lupa di mana akarmu yang sesungguhnya.',
    identityPills: [
      'Pengamat di sudut ruangan',
      'Lentur tanpa kehilangan arah',
      'Strategi di balik ketenangan',
      'Penemu celah yang tak terlihat',
      'Tahu kapan harus mundur',
      'Merambat diam-diam ke depan',
    ],
    traits: [
      'Kamu sering mengubah rintangan menjadi pijakan berikutnya',
      'Kamu jarang mengumumkan rencana sebelum waktunya tiba',
      'Kamu pandai membaca emosi yang tidak terucapkan',
      'Kamu bisa bertahan dalam kondisi yang membuat orang lain menyerah',
      'Kamu memilih jalur yang tidak terlihat oleh orang lain',
      'Kesabaranmu kadang terlihat seperti sikap pasrah',
      'Kamu sering menemukan celah ketika semua pintu terasa tertutup',
      'Kamu mengingat siapa yang pernah membantu saat kamu merambat',
    ],
    taglineCard: 'Tumbuh di celah yang orang lain lewatkan.',
    kekuatanDescriptors: [
      'membaca situasi dengan cepat',
      'menyesuaikan diri di mana saja',
    ],
    bayanganDescriptors: [
      'sering sulit ditebak isinya',
      'cenderung menghindari konfrontasi',
    ],
    dampakDescriptors: [
      'membawa ketenangan di tengah kacau',
      'sering memberi solusi yang tak terduga',
    ],
    sifatPills: [
      'banyak rencana, tidak semua diumumkan',
      'tahan banting tetapi tetap tenang',
      'pandai membaca dinamika sosial',
      'jika ditolak, mencari jalan lain',
      'hadir tanpa perlu menarik perhatian',
    ],
  },
  '丙': {
    name: 'Matahari',
    chinese: '丙火',
    subtitle: 'Orang yang kehadirannya membuat sekitar terasa lebih hidup.',
    tagline: 'Aku hadir untuk menerangi, bukan untuk bersinar sendirian.',
    hero: 'Kamu sering jadi orang pertama yang bicara saat ruangan masih ragu, dan setelah itu yang lain ikut bersuara. Energimu biasa menularkan keberanian pada orang di sekitar, seolah mereka baru sadar bisa melangkah karena kamu sudah lebih dulu. Di balik itu, ada kelelahan yang jarang kamu tunjukkan, karena orang lebih sering melihat nyalamu daripada menanyakan apakah panasmu mulai surut.',
    identityPills: [
      'Pencair suasana yang alami',
      'Energi yang menular ke sekitar',
      'Pulih cepat dari konflik',
      'Kerja keras sampai lupa lelah',
      'Butuh apresiasi untuk menyala',
      'Membuat orang berani bergerak',
    ],
    traits: [
      'Kamu melihat peluang di tempat orang lain hanya melihat masalah',
      'Kamu jarang bisa menyembunyikan perasaan, dan itu justru menjadi kekuatanmu',
      'Kamu sering memberi tanpa menghitung, tapi kamu ingat siapa yang benar-benar menghargai',
      'Lelahmu jarang terlihat karena kamu jarang berhenti menyala',
      'Kamu sering dianggap kuat, sehingga jarang ditanya apakah kamu butuh istirahat',
      'Kadang kamu menghilang sejenak, lalu kembali dengan semangat yang penuh',
      'Kamu tidak ragu memutus hubungan yang sudah tidak sehat',
      'Kehangatanmu sering membuat orang lupa bahwa kamu juga bisa kehabisan tenaga',
    ],
    taglineCard: 'Menerangi ruangan tanpa perlu diminta.',
    kekuatanDescriptors: [
      'mencairkan suasana dengan mudah',
      'energinya menular ke sekitar',
    ],
    bayanganDescriptors: [
      'butuh respons agar tetap menyala',
      'mudah lelah tanpa sadar',
    ],
    dampakDescriptors: [
      'orang merasa lebih hidup di dekatnya',
      'menjadi sumber semangat untuk tim',
    ],
    sifatPills: [
      'cepat pulih dari konflik, tidak berlarut',
      'jika peduli, total sepenuhnya',
      'kerja keras sampai lupa istirahat',
      'senang ketika ada yang mengapresiasi',
      'membuat suasana menjadi lebih hangat',
    ],
  },
  '丁': {
    name: 'Lilin',
    chinese: '丁火',
    subtitle: 'Pribadi yang menerangi sudut-sudut yang orang lain lewatkan.',
    tagline: 'Cahayaku kecil, tapi aku yang membuat kamu melihat dalam gelap.',
    hero: 'Cahayamu jarang menggelegar, tapi di saat gelap, kamu sering jadi satu-satunya yang masih setia menyala. Kamu tidak perlu menerangi seluruh ruangan, cukup satu sudut yang kamu jaga dengan diam-diam. Namun, karena nyalamu kecil dan terus menyala, kadang kamu terbakar habis tanpa ada yang menyadari.',
    identityPills: [
      'Nyala kecil di sudut sepi',
      'Penerang yang tak banyak bicara',
      'Peka pada yang tak terucap',
      'Menemani, bukan memimpin',
      'Setia pada nyala sendiri',
      'Menerangi yang terdekat dulu',
    ],
    traits: [
      'Kamu sering menjadi orang yang dicari saat yang lain butuh kejelasan',
      'Kesetiaanmu diam, tapi nyalamu jarang padam',
      'Kamu biasa menerangi rahasia yang orang lain sembunyikan',
      'Kamu tahu kapan harus meredup untuk bertahan',
      'Kamu menjadi pendengar yang membuat orang berani jujur',
      'Kadang kamu diabaikan, tapi nyalamu tetap ada',
      'Kamu sering mengorbankan diri diam-diam, lalu berpura-pura tidak lelah',
      'Kamu tidak butuh sorotan karena sudah menjadi arti bagi sekelilingmu',
    ],
    taglineCard: 'Menerangi yang orang lain tak lihat, meski nyalanya kecil.',
    kekuatanDescriptors: [
      'menangkap hal yang orang lain lewatkan',
      'merasakan emosi dengan akurat',
    ],
    bayanganDescriptors: [
      'berpikir berlebihan, sulit berhenti',
      'mudah lelah karena menyerap emosi',
    ],
    dampakDescriptors: [
      'membuat orang merasa dipahami',
      'suasana menjadi lebih teduh',
    ],
    sifatPills: [
      'peka membaca yang tak terucap',
      'lebih banyak mendengar daripada bicara',
      'menyimpan perasaan tanpa perlu diumbar',
      'memperhatikan hal kecil pada orang',
      'setia dalam diam, jarang minta diakui',
    ],
  },
  '戊': {
    name: 'Gunung',
    chinese: '戊土',
    subtitle: 'Orang yang diandalkan, meski tak banyak kata.',
    tagline: 'Aku tidak bergerak, karena semua orang butuh tempat berpijak.',
    hero: 'Kamu adalah fondasi yang tidak terlihat di bawah gedung tertinggi. Semua orang mengagumi puncak, tapi hanya sedikit yang tahu bahwa di bawah sana, kamulah yang menahan semuanya. Kamu tidak bergerak oleh tren, oleh pujian, atau oleh ancaman, karena di dalam dirimu sudah ada peta yang tidak bisa diguncang.',
    identityPills: [
      'Fondasi di bawah gedung tinggi',
      'Lambat berubah, tapi pasti',
      'Penjaga yang diam',
      'Ketinggian yang tidak perlu pengakuan',
      'Berat, tapi bisa diandalkan',
      'Menyangga diam-diam',
    ],
    traits: [
      'Orang yang ditelepon ketika semuanya runtuh',
      'Menyimpan beban banyak orang tanpa mengeluh',
      'Keputusan yang lama dibuat, tapi tidak pernah diubah',
      'Tidak mencari validasi, hanya butuh ruang untuk berdiri',
      'Kesetiaan yang membosankan, tapi tidak tergantikan',
      'Tidak akan mengikutimu ke tempat yang goyah',
      'Leganya orang lain saat tahu dia masih di sana',
      'Tidak bereaksi cepat, tapi reaksinya adalah yang paling tepat',
    ],
    taglineCard: 'Diam di tempat, karena semua orang butuh tempat berpijak.',
    kekuatanDescriptors: [
      'bisa diandalkan saat semuanya goyah',
      'pikiran tenang meski sekitar kacau',
    ],
    bayanganDescriptors: [
      'cenderung menyimpan perasaan sendiri',
      'lama menimbang sebelum memutuskan',
    ],
    dampakDescriptors: [
      'orang merasa lebih aman saat dia ada',
      'jadi tempat pulang yang sunyi tapi nyaman',
    ],
    sifatPills: [
      'orang yang dicari saat semuanya berantakan',
      'jarang mengumbar perasaan, tapi perhatiannya konsisten',
      'lebih banyak menyelesaikan daripada mengumumkan',
      'tidak suka drama, hanya peduli yang penting',
      'kehadirannya membuat sekitar merasa stabil',
    ],
  },
  '己': {
    name: 'Ladang',
    chinese: '己土',
    subtitle: 'Pribadi yang tumbuh pelan, tapi menguatkan banyak orang.',
    tagline: 'Aku bukan latar belakang. Aku adalah tanahnya.',
    hero: 'Kamu adalah tanah tempat segala sesuatu bermula. Bukan kamu yang dipetik, tapi dari dirimulah semuanya tumbuh. Kamu menerima benih yang orang lain buang, lalu diam-diam mengubahnya menjadi panen. Jarang diingat, tapi tanpa kamu, tidak ada yang bisa berdiri.',
    identityPills: [
      'Menumbuhkan yang diabaikan',
      'Menerima tanpa menghakimi',
      'Melepaskan, lalu menuai',
      'Penyedia tanpa pamrih',
      'Tak mudah kosong, meski terus memberi',
      'Tempat kembali setelah lelah',
    ],
    traits: [
      'Memberi ruang untuk orang lain bertumbuh',
      'Sering diremehkan sampai hasilnya tampak',
      'Punya cadangan kekuatan yang tidak disadari',
      'Bisa membagi yang sedikit ke banyak orang',
      'Memberi banyak, tanpa merasa berkurang',
      'Terlihat biasa, tapi isinya luar biasa',
      'Mengerti bahwa memberi adalah menanam, bukan membuang',
      'Tetap ada, meski tidak ada yang mengingat',
    ],
    taglineCard: 'Bukan latar belakang. Tanahnya.',
    kekuatanDescriptors: ['Pengasuh Alami', 'Pemberi Tanpa Pamrih'],
    bayanganDescriptors: ['Lupa Diri Sendiri', 'Susah Bilang Tidak'],
    dampakDescriptors: ['Tempat Tumbuh yang Aman', 'Orang yang Selalu Ada'],
    sifatPills: [
      'rela ngalah tapi ngitungin diam-diam',
      'masak banyak biar bisa bagi-bagi',
      'curhatan temen ngalir ke dia terus',
      'belanja buat keluarga dulu baru sendiri',
    ],
  },
  '庚': {
    name: 'Pedang',
    chinese: '庚金',
    subtitle: 'Pribadi yang memotong keraguan dengan keputusan tegas.',
    tagline: 'Aku memotong karena aku peduli pada yang benar.',
    hero: 'Kamu memotong bukan karena benci, tapi karena kamu tidak bisa melihat yang salah dan diam saja. Ada ketajaman dalam caramu melihat dunia, langsung, tanpa basa-basi, dan kadang membuat orang lain gentar. Tapi justru karena ketajaman itu, kamu tidak bisa dipakai untuk hal-hal yang tidak penting.',
    identityPills: [
      'Memotong kebohongan',
      'Tidak bisa dibengkokkan',
      'Prinsip di atas segalanya',
      'Tidak punya waktu untuk basa-basi',
      'Bilah yang memisahkan benar dari nyaman',
      'Dingin, bukan kejam',
    ],
    traits: [
      'Orang yang mengatakan hal yang semua orang pikirkan tapi takut ucapkan',
      'Tidak bisa bersikap manis hanya untuk menjaga perasaan',
      'Pemotong lingkaran pertemanan yang tidak sehat',
      'Lebih memilih sendiri daripada bersama yang palsu',
      'Jujurnya membuat sakit, tapi menyembuhkan yang busuk',
      'Diamnya lebih menakutkan daripada marahnya',
      'Tidak ada abu-abu, hanya benar atau tidak benar',
      'Dihormati lebih dari disukai, dan itu cukup untuknya',
    ],
    taglineCard: 'Menyampaikan kebenaran, meski kadang terasa tajam.',
    kekuatanDescriptors: [
      'memutuskan dengan cepat dan tepat',
      'pemikiran yang logis dan tajam',
    ],
    bayanganDescriptors: [
      'terkadang menyakiti tanpa disadari',
      'sulit sabar menghadapi keraguan',
    ],
    dampakDescriptors: [
      'memberi kejelasan, meski terasa keras',
      'standarnya memaksa orang berkembang',
    ],
    sifatPills: [
      'tidak suka basa-basi, bicara langsung',
      'lingkaran kecil, tapi sangat setia',
      'memutus komunikasi jika dikhianati',
      'tidak sabar dengan ketidakjelasan',
      'jujur meskipun menyakitkan',
    ],
  },
  '辛': {
    name: 'Permata',
    chinese: '辛金',
    subtitle: 'Sosok yang teliti, menghasilkan yang langka dan bernilai.',
    tagline: 'Bukan semua orang bisa melihat nilaimu. Itu bukan masalahmu.',
    hero: 'Kamu tidak berkilau untuk semua mata. Harganya hanya bisa dibaca oleh mereka yang sudah cukup lama mencari. Di dunia yang memuja yang mencolok, kamu adalah kemewahan yang tenang, tidak butuh pengakuan, tapi nilaimu tidak berkurang sedikit pun karena diabaikan.',
    identityPills: [
      'Cahaya yang tersembunyi',
      'Tidak untuk semua orang',
      'Indah tanpa berusaha',
      'Ketajaman yang halus',
      'Ditemukan, bukan dipamerkan',
      'Harga yang tidak ditawar',
    ],
    traits: [
      'Tidak akan menjual murah, meski tidak ada yang menawar',
      'Menyembunyikan kedalaman di balik penampilan tenang',
      'Orang yang paling diremehkan sampai mereka butuh pertolongan',
      'Kecantikan yang tidak butuh validasi',
      'Kekuatan yang tidak kasar, tapi tidak bisa dihancurkan',
      'Bisa menyayat tanpa suara',
      'Memilih siapa yang boleh melihat isi sebenarnya',
      'Menunggu waktu yang tepat untuk berkilau, bukan karena tidak mampu',
    ],
    taglineCard: 'Kualitas tidak perlu diumumkan; yang mengerti tetap menemukan.',
    kekuatanDescriptors: [
      'memiliki standar yang tinggi',
      'sangat teliti dan presisi',
    ],
    bayanganDescriptors: [
      'terlalu keras pada diri sendiri',
      'sering merasa tidak cukup baik',
    ],
    dampakDescriptors: [
      'mengingatkan orang pada kualitas',
      'pengakuannya sangat berharga',
    ],
    sifatPills: [
      'tidak suka memamerkan pencapaian',
      'sangat selektif dalam memilih teman',
      'memperhatikan detail hingga kelelahan',
      'standar tinggi, baik untuk diri sendiri',
      'hanya sedikit yang bisa mendekat',
    ],
  },
  '壬': {
    name: 'Samudra',
    chinese: '壬水',
    subtitle: 'Pribadi yang melihat jauh ke depan, melampaui yang tampak.',
    tagline: 'Aku tidak bisa dijelaskan. Aku hanya bisa dirasakan.',
    hero: 'Kamu tidak bisa dijelaskan, hanya bisa dirasakan. Seperti lautan yang luas, di permukaan kamu tenang, tapi di dalam menyimpan arus yang bisa membawa siapa saja ke tempat yang tidak terduga. Kamu adalah misteri yang tidak pernah selesai diungkap, dan itu bukan kelemahan, itu kekuatan.',
    identityPills: [
      'Arus di balik permukaan',
      'Tidak bisa dipetakan',
      'Membawa, tidak menahan',
      'Tenang, tapi mematikan',
      'Tidak perlu dimengerti',
      'Mengalir tanpa henti',
    ],
    traits: [
      'Kadang kamu tidak mengerti dirimu sendiri, tapi orang lain percaya padamu',
      'Bisa menenangkan badai orang lain sambil menyimpan tsunami sendiri',
      'Berganti bentuk tanpa kehilangan volume',
      'Ditarik oleh bulan yang tidak dilihat orang lain',
      'Pendiam yang menyimpan seluruh semesta di dalam',
      'Tidak bisa dimiliki, tapi selalu dicari',
      'Menyembunyikan harta karun di kedalaman yang tidak sembarang orang selami',
      'Terlihat tidak terprediksi, padahal hanya mengikuti hukum alam yang lebih dalam',
    ],
    taglineCard: 'Sulit dipegang, karena pikirannya melampaui apa yang tampak.',
    kekuatanDescriptors: [
      'melihat gambaran besar yang orang lain lewatkan',
      'intuisinya sering tepat meski tanpa alasan jelas',
    ],
    bayanganDescriptors: [
      'suasana hatinya berubah tanpa isyarat yang jelas',
      'sering sulit dimengerti oleh orang di sekitarnya',
    ],
    dampakDescriptors: [
      'membuat orang penasaran dengan kedalaman pikirannya',
      'kehadirannya terasa misterius namun menarik',
    ],
    sifatPills: [
      'suasana hatinya berubah seperti cuaca, tanpa peringatan',
      'pikirannya terus menyelam, terutama saat sendiri',
      'seolah mengerti banyak hal, tapi jarang mengatakannya',
      'kadang menghilang, lalu kembali tanpa penjelasan',
      'membuat orang penasaran, karena sulit dipahami',
    ],
  },
  '癸': {
    name: 'Hujan',
    chinese: '癸水',
    subtitle: 'Pribadi yang meresap dalam, memahami yang tak terucap.',
    tagline: 'Aku tidak selalu terlihat, tapi aku yang membuat segalanya tumbuh.',
    hero: 'Kamu datang tanpa suara, tapi setelah kepergianmu, semuanya tumbuh. Tidak semua orang menyadari kehadiranmu sampai mereka melihat tunas yang muncul di tanah yang kemarin masih kering. Kamu adalah kelembutan yang meresap paling dalam, menyentuh bagian yang tidak bisa dijangkau oleh kekuatan apa pun.',
    identityPills: [
      'Hujan di tanah kering',
      'Datang diam-diam',
      'Menyuburkan yang layu',
      'Tidak pernah memaksa',
      'Merembes, bukan menghantam',
      'Tidak terlihat tapi terasa',
    ],
    traits: [
      'Menghilang setelah memberi, tanpa minta ucapan terima kasih',
      'Menyimpan air mata banyak orang tanpa memperlihatkan miliknya',
      'Kadang diremehkan sampai musim kemarau tiba',
      'Menyentuh hati yang paling keras dengan cara yang lembut',
      'Punya ritme sendiri yang tidak terburu-buru',
      'Menyediakan ruang tanpa mendikte apa yang harus tumbuh',
      'Tidak banyak bicara, tapi kehadirannya adalah jawaban',
      'Orang yang membuatmu merasa lebih baik tanpa kamu sadari',
    ],
    taglineCard: 'Tidak banyak bicara, tetapi kehadirannya menenangkan.',
    kekuatanDescriptors: [
      'mampu merasakan emosi orang lain dengan tepat',
      'memberi ruang aman bagi orang lain untuk terbuka',
    ],
    bayanganDescriptors: [
      'cenderung menyerap perasaan orang lain',
      'batas antara diri dan orang lain sering kabur',
    ],
    dampakDescriptors: [
      'orang merasa diterima apa adanya di dekatnya',
      'bantuannya datang tanpa diminta, diam-diam',
    ],
    sifatPills: [
      'sering merasa ikut sedih tanpa tahu sebabnya',
      'lebih nyaman mendengarkan daripada bercerita',
      'bisa membaca suasana hati orang tanpa mereka bicara',
      'butuh waktu sendiri untuk mengosongkan beban',
      'kehadirannya lembut, tapi dampaknya dalam',
    ],
  },
}

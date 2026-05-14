// ============================================================
// Element dominance and absence — pattern observation
// ============================================================
// Triggered by the chart's elementBalance counts. The composer
// picks ONE note to surface: missing element takes priority over
// dominant.
//
// Phase 8a.5: stripped the inline 'Bacaan Mendalam' CTA tail
// sentences. The consolidated Bridge section between Relasi Cabang
// and the Bacaan Mendalam CTA now handles open-loop framing for
// the entire reading page.
//
// Voice: formal Indonesian vocabulary with spoken cadence.
// 'tidak' not 'nggak'. 'membuat' not 'bikin'. 'merasa' not
// 'ngerasa'. 'sangat' not 'banget'. Conversational rhythm, not
// literary prose.
//
// FORMAT: paragraphs separated by '\n\n'. Renderer splits on this.
// ============================================================

export const DOMINANT_ELEMENT = {
  Wood:  'Kayu yang dominan membuatmu terus memulai dan merencanakan. Kamu sering menjadi orang pertama yang mengangkat tangan untuk proyek baru, tetapi di tengah jalan energimu terpecah karena kamu sudah mulai yang lain. Fokusmu sering terbagi antara yang seharusnya selesai dan yang ingin segera kamu mulai.\n\nPola ini erat kaitannya dengan arah karier dan cara kamu mengatur energi supaya tidak cepat habis. Bidang seperti apa yang bisa menjadi tempatmu bertumbuh tanpa kehabisan napas?',
  Fire:  'Api yang dominan membuatmu mudah menjadi pusat perhatian. Kamu menyala cepat dalam obrolan, presentasi, atau ide-ide spontan. Tetapi di balik itu, kamu sering merasa kehabisan bahan bakar ketika tidak ada yang merespons, atau ketika keramaian justru membuatmu merasa sendirian.\n\nIni banyak berhubungan dengan caramu bekerja dan menjaga tubuh. Bidang apa yang bisa menampung intensitasmu tanpa membuatmu padam?',
  Earth: 'Bumi yang dominan membuatmu sering menjadi tempat orang pulang. Kamu menyediakan rasa aman dan ketenangan untuk sekitar. Tetapi karena semua orang menganggapmu kokoh, kamu jarang bisa menunjukkan bahwa kamu juga butuh disandarkan, bukan hanya menjadi sandaran.\n\nPola ini berdampak pada hubungan personal dan cara kamu mengelola beban emosional. Bagaimana menjaga keseimbangan antara menjadi jangkar dan tetap bisa bergerak?',
  Metal: 'Logam yang dominan membuat standarmu tinggi dan logikamu tajam. Kamu bisa melihat kelemahan dalam sebuah rencana atau ketidakkonsistenan dalam sebuah argumen. Tetapi ketajaman ini sering berbalik ke dirimu sendiri: kamu sulit puas, dan kritik internal bisa lebih keras dari kritik siapa pun.\n\nIni erat kaitannya dengan arah karier dan caramu menjaga kesehatan mental. Profesi seperti apa yang menghargai presisimu tanpa membuatmu menjadi hakim bagi diri sendiri?',
  Water: 'Air yang dominan membuatmu sangat peka terhadap perasaan sekitar. Kamu sering sudah tahu isi hati orang lain sebelum mereka membuka mulut. Tetapi kedalaman ini juga membuatmu kesulitan menemukan orang yang bisa memahamimu dengan cara yang sama.\n\nIni banyak berhubungan dengan hubungan personal dan kepuasan batin. Bagaimana cara menyalurkan kepekaan ini tanpa tenggelam sendiri?',
}

export const MISSING_ELEMENT = {
  Wood:  'Kayu yang kurang membuatmu sering memiliki ide tetapi jarang benar-benar memulai. Rencana matang di kepala, tetapi begitu akan dieksekusi, kamu ragu atau kehilangan momentum. Akibatnya, kamu lebih sering menonton daripada menanam.\n\nIni berpengaruh pada arah karier dan kepercayaan diri dalam memulai langkah baru. Bidang apa yang cocok untukmu yang membutuhkan dorongan ekstra?',
  Fire:  'Api yang kurang membuat kehidupanmu stabil, tetapi sering terasa datar. Kamu cenderung menghindari perhatian, bahkan ketika sebenarnya layak mendapat sorotan. Ada rasa takut untuk bersinar yang membuatmu lebih sering berada di latar belakang.\n\nIni berdampak pada kepercayaan diri dan caramu tampil di dunia kerja. Bagaimana menemukan keberanian untuk terlihat tanpa merasa terancam?',
  Earth: 'Bumi yang kurang membuatmu sering merasa melayang. Kamu bisa memiliki banyak aktivitas, tetapi tidak ada yang benar-benar membuatmu merasa berpijak. Ada kerinduan akan rutinitas yang stabil, tetapi kamu tidak yakin bagaimana membangunnya tanpa merasa terkekang.\n\nPola ini erat kaitannya dengan hubungan personal dan pencarian tempat berpulang. Bagaimana menemukan jangkar yang cocok untukmu?',
  Metal: 'Logam yang kurang membuatmu sulit mengambil keputusan tegas. Kamu sering menimbang terlalu lama, khawatir melukai orang lain, atau takut membuat pilihan yang salah. Akibatnya, batas-batasmu sering kabur dan itu melelahkan secara mental.\n\nIni banyak berhubungan dengan karier dan harga diri. Bagaimana cara membangun ketegasan tanpa kehilangan kelembutanmu?',
  Water: 'Air yang kurang membuat hidupmu terasa kaku. Kamu cenderung memaksakan rencana dan sulit beradaptasi ketika keadaan berubah. Ada rasa lelah karena terus melawan arus, padahal yang kamu butuhkan justru belajar mengalir.\n\nIni berdampak pada kesehatan mental dan hubungan personal. Bagaimana melenturkan kontrol tanpa merasa kehilangan kendali?',
}

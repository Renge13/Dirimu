// ============================================================
// Element dominance and absence — directional notes with CTA
// ============================================================
// Triggered by the chart's elementBalance counts (which include
// hidden stem weights from each branch). The composer picks ONE
// note to surface: missing element takes priority over dominant.
//
// Phase 8a.1: each entry elaborated from 1 sentence → 2 paragraphs.
//   Paragraph 1: pattern observation (smart-friend register).
//   Paragraph 2: open-loop tease ending with 'Bacaan Mendalam' —
//                rendered by the app as a CTA anchor link to the
//                paid tier (Karier, Cinta, Kesehatan, Rezeki).
//
// Voice: Phase 7 'smart friend talking to you'. Statement-of-fact,
// not verb-action. Spoken cadence + standard grammar. No literary
// drift, no slang heavy.
//
// FORMAT: paragraphs separated by '\n\n'. Renderer splits on this.
// ============================================================

export const DOMINANT_ELEMENT = {
  Wood:  'Kayu yang dominan bikin kamu terus memulai dan merencanakan. Kamu sering jadi orang pertama yang angkat tangan untuk proyek baru, tapi di tengah jalan energi terpecah karena kamu juga sudah mulai yang lain. Fokusmu sering terbagi-bagi antara apa yang harusnya selesai dan apa yang segera ingin kamu mulai.\n\nPola ini erat kaitannya dengan arah karier dan cara kamu mengatur energi supaya tidak cepat habis. Bidang seperti apa yang bisa jadi tempatmu bertumbuh tanpa kehabisan napas? Itu dibahas lebih dalam di Bacaan Mendalam.',
  Fire:  'Api yang dominan bikin kamu mudah jadi pusat perhatian. Kamu menyala cepat dalam obrolan, presentasi, atau ide-ide spontan. Tapi di balik itu, kamu sering merasa kehabisan bahan bakar saat tidak ada yang merespons, atau saat keramaian justru bikin kamu merasa sendirian.\n\nIni banyak berhubungan dengan caramu bekerja dan menjaga tubuh. Bidang apa yang bisa menampung intensitasmu tanpa bikin kamu padam? Jawabannya ada di Bacaan Mendalam.',
  Earth: 'Bumi yang dominan bikin kamu sering jadi tempat orang pulang. Kamu menyediakan rasa aman dan ketenangan untuk sekitar. Tapi karena semua orang menganggapmu kokoh, kamu jarang bisa menunjukkan bahwa kamu juga butuh disandarkan, bukan cuma menjadi sandaran.\n\nPola ini punya dampak pada hubungan personal dan cara kamu mengelola beban emosional. Bagaimana menjaga keseimbangan antara menjadi jangkar dan tetap bisa bergerak? Itu dijawab di Bacaan Mendalam.',
  Metal: 'Logam yang dominan bikin standarmu tinggi dan logikamu tajam. Kamu bisa melihat kelemahan dalam sebuah rencana atau omong kosong dalam sebuah argumen. Tapi ketajaman ini sering berbalik ke dirimu sendiri: kamu sulit puas, dan kritik internal bisa lebih keras dari kritik siapa pun.\n\nIni erat kaitannya dengan arah karier dan caramu menjaga kesehatan mental. Profesi seperti apa yang menghargai presisimu tanpa membuatmu jadi hakim bagi diri sendiri? Simak di Bacaan Mendalam.',
  Water: 'Air yang dominan bikin kamu peka banget sama perasaan sekitar. Kamu sering sudah tahu isi hati orang sebelum mereka buka mulut. Tapi kedalaman ini juga bikin kamu kesulitan menemukan orang yang bisa memahami kamu dengan cara yang sama.\n\nIni banyak berhubungan dengan hubungan personal dan kepuasan batin. Bagaimana cara menyalurkan kepekaan ini tanpa tenggelam sendiri? Jawabannya ada di Bacaan Mendalam.',
}

export const MISSING_ELEMENT = {
  Wood:  'Kayu yang kurang bikin kamu sering punya ide tapi jarang benar-benar memulai. Rencana matang di kepala, tapi begitu mau dieksekusi, kamu ragu atau kehilangan momentum. Akibatnya, kamu lebih sering menonton daripada menanam.\n\nIni berpengaruh ke arah karier dan kepercayaan diri dalam memulai langkah baru. Bidang apa yang cocok buat kamu yang butuh dorongan ekstra? Itu dibahas di Bacaan Mendalam.',
  Fire:  'Api yang kurang bikin kehidupanmu stabil, tapi sering terasa datar. Kamu cenderung menghindari perhatian, bahkan ketika sebenarnya layak mendapat sorotan. Ada rasa takut untuk bersinar yang membuatmu lebih sering berada di latar belakang.\n\nIni berdampak pada kepercayaan diri dan caramu tampil di dunia kerja. Bagaimana menemukan keberanian untuk terlihat tanpa merasa terancam? Temukan di Bacaan Mendalam.',
  Earth: 'Bumi yang kurang bikin kamu sering merasa melayang. Kamu bisa punya banyak aktivitas, tapi tidak ada yang benar-benar membuatmu merasa berpijak. Ada kerinduan akan rutinitas yang stabil, tapi kamu tidak yakin bagaimana membangunnya tanpa merasa terkekang.\n\nPola ini erat kaitannya dengan hubungan personal dan pencarian tempat berpulang. Bagaimana menemukan jangkar yang cocok untukmu? Itu dijelaskan di Bacaan Mendalam.',
  Metal: 'Logam yang kurang bikin kamu susah mengambil keputusan tegas. Kamu sering menimbang terlalu lama, khawatir melukai orang lain, atau takut membuat pilihan yang salah. Akibatnya, batas-batasmu sering kabur dan itu melelahkan secara mental.\n\nIni banyak berhubungan dengan karier dan harga diri. Bagaimana cara membangun ketegasan tanpa kehilangan kelembutanmu? Simak di Bacaan Mendalam.',
  Water: 'Air yang kurang bikin hidupmu terasa kaku. Kamu cenderung memaksakan rencana dan sulit beradaptasi saat keadaan berubah. Ada rasa lelah karena terus melawan arus, padahal yang kamu butuhkan justru belajar mengalir.\n\nIni berdampak pada kesehatan mental dan hubungan personal. Bagaimana melenturkan kontrol tanpa merasa kehilangan kendali? Jawabannya di Bacaan Mendalam.',
}

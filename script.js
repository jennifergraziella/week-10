/* ==========================================================================
   Jerine Green — Full E-Commerce + QRIS Realtime Simulator (3-File Edition)
   ========================================================================== */
(function (window, document) {
  "use strict";

  /* ------------------------------------------------------------------------
     1. DATA PRODUK (Tempelkan 100 varietas dari script.js lama Anda di sini)
     ------------------------------------------------------------------------ */
  function svgPlantThumb(label, bgHex, leafHex) {
    var safeLabel = String(label || "Jerine Green").replace(/&/g, "&amp;").replace(/</g, "&lt;").slice(0, 22);
    var svg =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320">' +
      '<rect width="320" height="320" fill="' + (bgHex || "#edf7e2") + '"/>' +
      '<ellipse cx="160" cy="242" rx="68" ry="12" fill="rgba(26,81,19,0.12)"/>' +
      '<path d="M108 182 L212 182 L198 242 L122 242 Z" fill="#c7724c"/>' +
      '<rect x="102" y="172" width="116" height="16" rx="6" fill="#d9855e"/>' +
      '<g fill="' + (leafHex || "#498428") + '" stroke="#1a5113" stroke-width="2">' +
      '<ellipse cx="160" cy="128" rx="22" ry="48"/>' +
      '<ellipse cx="128" cy="144" rx="20" ry="40" transform="rotate(-35 128 144)"/>' +
      '<ellipse cx="192" cy="144" rx="20" ry="40" transform="rotate(35 192 144)"/>' +
      '<ellipse cx="108" cy="160" rx="16" ry="30" transform="rotate(-55 108 160)"/>' +
      '<ellipse cx="212" cy="160" rx="16" ry="30" transform="rotate(55 212 160)"/>' +
      '</g>' +
      '<text x="160" y="292" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#1a5113">' + safeLabel + '</text>' +
      '</svg>';
    return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
  }

  var CATEGORIES = [
    { id: "Roset", nama: "Roset", sub: "Echeveria, Graptoveria, Sempervivum", icon: "spa" },
    { id: "Mini & Berpola", nama: "Mini & Berpola", sub: "Haworthia, Gasteria, Aloe Mini", icon: "texture" },
    { id: "Gantung", nama: "Gantung", sub: "String of Pearls, Hearts, Sedum", icon: "nature" },
    { id: "Batu & Unik", nama: "Batu & Unik", sub: "Lithops, Pleiospilos, Bear's Paw", icon: "diamond" },
    { id: "Kaktus Bulat", nama: "Kaktus Bulat", sub: "Astrophytum, Gymno, Golden Barrel", icon: "trip_origin" },
    { id: "Kolom & Hutan", nama: "Kolom & Hutan", sub: "San Pedro, Euphorbia, Kaktus Natal", icon: "park" }
  ];

  /* >>> 100 VARIETAS LENGKAP — GAMBAR DISESUAIKAN DENGAN FOLDER IMAGES <<< */
  var RAW_PRODUCTS = [

    /* ---- KATEGORI 1: ROSET (Echeveria, Graptoveria, Sempervivum) ---- */
    {
      id: "aeonium-arboreum-zwartkop", nama: "Aeonium Zwartkop Black Rose", latin: "Aeonium arboreum 'Zwartkop'",
      kategori: "Roset", hargaNum: 55000, hargaLamaNum: 70000, pot: "Pot 12 cm", cahaya: "Sinar Terang",
      siram: "5–7 hari sekali", level: "Mudah", asal: "Kebun Lembang", satuan: "/ pot terakota",
      rating: 4.9, terjual: 820, stok: 7, flashSale: false, badge: "Dark Beauty",
      gambar: "images/category-1/aeonium-arboreum-zwartkop.jpg",
      deskripsi: "Roset dramatis berwarna ungu kehitaman dengan batang tegak berkayu. Sangat menawan sebagai tanaman pot indoor maupun outdoor."
    },
    {
      id: "aeonium-haworthii-kiwi", nama: "Aeonium Haworthii Kiwi", latin: "Aeonium haworthii 'Kiwi'",
      kategori: "Roset", hargaNum: 45000, hargaLamaNum: 58000, pot: "Pot 10 cm", cahaya: "Sinar Terang",
      siram: "5–7 hari sekali", level: "Mudah", asal: "Kebun Lembang", satuan: "/ pot terakota",
      rating: 4.8, terjual: 640, stok: 9, flashSale: false, badge: "Tricolor",
      gambar: "images/category-1/aeonium-haworthii-kiwi.jpg",
      deskripsi: "Roset tricolor cantik dengan gradasi hijau, kuning, dan tepi merah muda yang semakin intens di bawah sinar matahari penuh."
    },
    {
      id: "dudleya-brittonii", nama: "Dudleya Brittonii Silver", latin: "Dudleya brittonii",
      kategori: "Roset", hargaNum: 85000, hargaLamaNum: 110000, pot: "Pot 12 cm", cahaya: "Sinar Penuh",
      siram: "10–14 hari sekali", level: "Kolektor", asal: "Kebun Lembang", satuan: "/ pot terakota",
      rating: 5.0, terjual: 310, stok: 4, flashSale: false, badge: "Langka & Premium",
      gambar: "images/category-1/dudleya-brittonii.jpg",
      deskripsi: "Sukulen silver asli Baja California dengan lapisan farina putih perak tebal seperti bedak. Salah satu koleksi paling langka."
    },
    {
      id: "echeveria-agavoides", nama: "Echeveria Agavoides Lipstik", latin: "Echeveria agavoides",
      kategori: "Roset", hargaNum: 38000, hargaLamaNum: 50000, pot: "Pot 10 cm", cahaya: "Sinar Terang",
      siram: "5–7 hari sekali", level: "Mudah", asal: "Kebun Lembang", satuan: "/ pot terakota",
      rating: 4.9, terjual: 1120, stok: 11, flashSale: true, badge: "Best Seller",
      gambar: "images/category-1/echeveria-agavoides.jpg",
      deskripsi: "Roset kompak berdaun tebal runcing dengan tepi merah cerah bak lipstik. Sangat populer untuk dekorasi meja kerja."
    },
    {
      id: "echeveria-black-prince", nama: "Echeveria Black Prince", latin: "Echeveria 'Black Prince'",
      kategori: "Roset", hargaNum: 42000, hargaLamaNum: 55000, pot: "Pot 10 cm", cahaya: "Sinar Terang",
      siram: "5–7 hari sekali", level: "Mudah", asal: "Kebun Surabaya", satuan: "/ pot terakota",
      rating: 4.9, terjual: 950, stok: 8, flashSale: true, badge: "Dark Series",
      gambar: "images/category-1/echeveria-black-prince.jpg",
      deskripsi: "Roset elegan berwarna ungu gelap hampir hitam dengan rosette daun segitiga yang rapat dan simetris."
    },
    {
      id: "echeveria-chroma", nama: "Echeveria Chroma Pelangi", latin: "Echeveria 'Chroma'",
      kategori: "Roset", hargaNum: 48000, hargaLamaNum: 62000, pot: "Pot 10 cm", cahaya: "Sinar Terang",
      siram: "5–7 hari sekali", level: "Mudah", asal: "Kebun Lembang", satuan: "/ pot terakota",
      rating: 4.9, terjual: 780, stok: 6, flashSale: false, badge: "Warna-Warni",
      gambar: "images/category-1/echeveria-chroma.jpg",
      deskripsi: "Sukulen roset hibrida dengan gradasi warna spektakuler dari hijau ke merah muda dan ungu yang semakin cantik saat stress warna."
    },
    {
      id: "echeveria-elegans", nama: "Echeveria Elegans Mexican Snowball", latin: "Echeveria elegans",
      kategori: "Roset", hargaNum: 28000, hargaLamaNum: 36000, pot: "Pot 10 cm", cahaya: "Sinar Terang",
      siram: "5–7 hari sekali", level: "Mudah", asal: "Kebun Surabaya", satuan: "/ pot terakota",
      rating: 4.8, terjual: 2200, stok: 20, flashSale: false, badge: "Klasik Favorit",
      gambar: "images/category-1/echeveria-elegans.jpg",
      deskripsi: "Roset putih kebiruan bercahaya dengan tepi semi transparan. Koleksi klasik yang cocok untuk pemula dan kolektor."
    },
    {
      id: "echeveria-laui", nama: "Echeveria Laui Lilac Blush", latin: "Echeveria laui",
      kategori: "Roset", hargaNum: 65000, hargaLamaNum: 85000, pot: "Pot 10 cm", cahaya: "Sinar Terang",
      siram: "5–7 hari sekali", level: "Menengah", asal: "Kebun Lembang", satuan: "/ pot terakota",
      rating: 5.0, terjual: 430, stok: 5, flashSale: false, badge: "Premium Rare",
      gambar: "images/category-1/echeveria-laui.jpg",
      deskripsi: "Sukulen roset pucat lavender berbedak tebal dengan warna ungu lembut yang sangat fotogenik dan diminati kolektor."
    },
    {
      id: "echeveria-lilacina", nama: "Echeveria Lilacina Ghost", latin: "Echeveria lilacina",
      kategori: "Roset", hargaNum: 55000, hargaLamaNum: 72000, pot: "Pot 10 cm", cahaya: "Sinar Terang",
      siram: "5–7 hari sekali", level: "Mudah", asal: "Kebun Lembang", satuan: "/ pot terakota",
      rating: 4.9, terjual: 580, stok: 7, flashSale: false, badge: "Pastel Series",
      gambar: "images/category-1/echeveria-lilacina.jpg",
      deskripsi: "Roset pucat keunguan dengan farina pekat yang membuatnya tampak seperti ghost sukulen. Sangat menawan di cahaya matahari."
    },
    {
      id: "echeveria-perle-von-nurnberg", nama: "Echeveria Perle von Nürnberg", latin: "Echeveria 'Perle von Nürnberg'",
      kategori: "Roset", hargaNum: 45000, hargaLamaNum: 58000, pot: "Pot 10 cm", cahaya: "Sinar Terang",
      siram: "5–7 hari sekali", level: "Mudah", asal: "Kebun Surabaya", satuan: "/ pot terakota",
      rating: 5.0, terjual: 1650, stok: 12, flashSale: true, badge: "Top Rated",
      gambar: "images/category-1/echeveria-perle-von-nurnberg.jpg",
      deskripsi: "Hibrida roset terpopuler dengan warna ungu perlak memukau. Peringkat teratas koleksi Echeveria di dunia."
    },
    {
      id: "echeveria-pulidonis", nama: "Echeveria Pulidonis Red Edge", latin: "Echeveria pulidonis",
      kategori: "Roset", hargaNum: 35000, hargaLamaNum: 45000, pot: "Pot 10 cm", cahaya: "Sinar Terang",
      siram: "5–7 hari sekali", level: "Mudah", asal: "Kebun Lembang", satuan: "/ pot terakota",
      rating: 4.8, terjual: 870, stok: 10, flashSale: false, badge: "Red Tip",
      gambar: "images/category-1/echeveria-pulidonis.jpg",
      deskripsi: "Roset kompak hijau kebiruan dengan tepi merah cerah yang semakin tajam saat terkena sinar matahari penuh."
    },
    {
      id: "echeveria-runyonii-topsy-turvy", nama: "Echeveria Runyonii Topsy Turvy", latin: "Echeveria runyonii 'Topsy Turvy'",
      kategori: "Roset", hargaNum: 38000, hargaLamaNum: 48000, pot: "Pot 10 cm", cahaya: "Sinar Terang",
      siram: "5–7 hari sekali", level: "Mudah", asal: "Kebun Surabaya", satuan: "/ pot terakota",
      rating: 4.9, terjual: 720, stok: 9, flashSale: false, badge: "Unik & Langka",
      gambar: "images/category-1/echeveria-runyonii-topsy-turvy.jpg",
      deskripsi: "Roset unik dengan daun melengkung ke bawah seperti terbalik, menciptakan tampilan tiga dimensi yang sangat menarik."
    },
    {
      id: "echeveria-setosa", nama: "Echeveria Setosa Mexican Firecracker", latin: "Echeveria setosa",
      kategori: "Roset", hargaNum: 32000, hargaLamaNum: 42000, pot: "Pot 10 cm", cahaya: "Sinar Terang",
      siram: "5–7 hari sekali", level: "Mudah", asal: "Kebun Surabaya", satuan: "/ pot terakota",
      rating: 4.8, terjual: 540, stok: 14, flashSale: false, badge: "Berbulu Halus",
      gambar: "images/category-1/echeveria-setosa.jpg",
      deskripsi: "Roset ditutupi bulu-bulu halus putih lembut yang membuatnya terasa seperti beludru. Berbunga orange-kuning spektakuler."
    },
    {
      id: "graptopetalum-amethystinum", nama: "Graptopetalum Amethystinum Lavender Pebbles", latin: "Graptopetalum amethystinum",
      kategori: "Roset", hargaNum: 52000, hargaLamaNum: 68000, pot: "Pot 10 cm", cahaya: "Sinar Terang",
      siram: "7 hari sekali", level: "Mudah", asal: "Kebun Lembang", satuan: "/ pot terakota",
      rating: 4.9, terjual: 490, stok: 8, flashSale: false, badge: "Lavender Series",
      gambar: "images/category-1/graptopetalum-amethystinum.jpg",
      deskripsi: "Sukulen berbentuk bulat gemuk berwarna lavender keabu-abuan mirip kerikil batu permata ungu. Sangat unik dan kolektibel."
    },
    {
      id: "graptopetalum-paraguayense", nama: "Graptopetalum Paraguayense Ghost Plant", latin: "Graptopetalum paraguayense",
      kategori: "Roset", hargaNum: 28000, hargaLamaNum: 35000, pot: "Pot 10 cm", cahaya: "Sinar Terang",
      siram: "7 hari sekali", level: "Mudah", asal: "Kebun Lembang", satuan: "/ pot terakota",
      rating: 4.7, terjual: 1080, stok: 18, flashSale: false, badge: "Tahan Banting",
      gambar: "images/category-1/graptopetalum-paraguayense.jpg",
      deskripsi: "Sukulen roset pucat abu-abu ungu yang sangat mudah tumbuh dan beranak. Cocok untuk pemula karena sangat toleran."
    },
    {
      id: "graptoveria-debbi", nama: "Graptoveria Debbi Amethyst Blush", latin: "×Graptoveria 'Debbi'",
      kategori: "Roset", hargaNum: 45000, hargaLamaNum: 58000, pot: "Pot 10 cm", cahaya: "Sinar Terang",
      siram: "5–7 hari sekali", level: "Mudah", asal: "Kebun Lembang", satuan: "/ pot terakota",
      rating: 4.9, terjual: 760, stok: 7, flashSale: false, badge: "Pastel Cantik",
      gambar: "images/category-1/graptoveria-debbi.jpg",
      deskripsi: "Hibrida roset cantik dengan warna pink keunguan yang menawan. Daun gemuk berlapiskan farina tipis keperakan."
    },
    {
      id: "graptoveria-opalina", nama: "Graptoveria Opalina Peach Opal", latin: "×Graptoveria 'Opalina'",
      kategori: "Roset", hargaNum: 42000, hargaLamaNum: 55000, pot: "Pot 10 cm", cahaya: "Sinar Terang",
      siram: "5–7 hari sekali", level: "Mudah", asal: "Kebun Lembang", satuan: "/ pot terakota",
      rating: 4.9, terjual: 680, stok: 9, flashSale: false, badge: "Opal Series",
      gambar: "images/category-1/graptoveria-opalina.jpg",
      deskripsi: "Roset menawan berwarna peach hingga pink opal tergantung cahaya. Daun membulat sempurna dan berkilau indah."
    },
    {
      id: "pachyveria-scheideckeri", nama: "Pachyveria Scheideckeri Silver", latin: "×Pachyveria scheideckeri",
      kategori: "Roset", hargaNum: 38000, hargaLamaNum: 50000, pot: "Pot 10 cm", cahaya: "Sinar Terang",
      siram: "7 hari sekali", level: "Mudah", asal: "Kebun Surabaya", satuan: "/ pot terakota",
      rating: 4.8, terjual: 420, stok: 11, flashSale: false, badge: "Silver Dust",
      gambar: "images/category-1/pachyveria-scheideckeri.jpg",
      deskripsi: "Sukulen hibrida berbentuk bintang simetris dengan daun putih kebiruan berlapiskan bedak silver. Tampilan elegan minimalis."
    },
    {
      id: "sempervivum-arachnoideum", nama: "Sempervivum Arachnoideum Cobweb", latin: "Sempervivum arachnoideum",
      kategori: "Roset", hargaNum: 35000, hargaLamaNum: 45000, pot: "Pot 10 cm", cahaya: "Sinar Penuh",
      siram: "7 hari sekali", level: "Mudah", asal: "Kebun Lembang", satuan: "/ pot terakota",
      rating: 4.9, terjual: 580, stok: 10, flashSale: false, badge: "Jaring Laba-laba",
      gambar: "images/category-1/sempervivum-arachnoideum.jpg",
      deskripsi: "Sempervivum unik dengan benang-benang putih mirip sarang laba-laba yang menutupi rosette merah kehijauan."
    },
    {
      id: "sempervivum-tectorum", nama: "Sempervivum Tectorum Hen & Chicks", latin: "Sempervivum tectorum",
      kategori: "Roset", hargaNum: 32000, hargaLamaNum: 40000, pot: "Pot 10 cm", cahaya: "Sinar Penuh",
      siram: "7 hari sekali", level: "Mudah", asal: "Kebun Lembang", satuan: "/ pot terakota",
      rating: 4.8, terjual: 920, stok: 15, flashSale: false, badge: "Beranak Lebat",
      gambar: "images/category-1/sempervivum-tectorum.jpg",
      deskripsi: "Sukulen roset klasik yang sangat tahan banting, cepat beranak, dan berubah warna merah di musim kering."
    },

    /* ---- KATEGORI 2: MINI & BERPOLA (Haworthia, Gasteria, Aloe Mini) ---- */
    {
      id: "aloe-aristata", nama: "Aloe Aristata Lace Aloe", latin: "Aloe aristata",
      kategori: "Mini & Berpola", hargaNum: 32000, hargaLamaNum: 42000, pot: "Pot 8 cm", cahaya: "Indoor",
      siram: "7–10 hari sekali", level: "Mudah", asal: "Kebun Surabaya", satuan: "/ pot terakota",
      rating: 4.8, terjual: 760, stok: 12, flashSale: false, badge: "Indoor Favorit",
      gambar: "images/category-2/aloe-aristata.jpg",
      deskripsi: "Aloe mungil berbintik putih rapat dengan tepi bergigi halus mirip renda. Sangat cocok untuk meja indoor tanpa paparan langsung."
    },
    {
      id: "aloe-brevifolia", nama: "Aloe Brevifolia Short-Leaf Aloe", latin: "Aloe brevifolia",
      kategori: "Mini & Berpola", hargaNum: 28000, hargaLamaNum: 36000, pot: "Pot 8 cm", cahaya: "Sinar Terang",
      siram: "7–10 hari sekali", level: "Mudah", asal: "Kebun Surabaya", satuan: "/ pot terakota",
      rating: 4.7, terjual: 580, stok: 14, flashSale: false, badge: "Mini Kompak",
      gambar: "images/category-2/aloe-brevifolia.jpg",
      deskripsi: "Aloe mini kompak dengan daun biru-hijau berbintik putih dan tepi berduri halus. Beranak cepat membentuk rumpun padat."
    },
    {
      id: "aloe-juvenna", nama: "Aloe Juvenna Tiger Tooth Aloe", latin: "Aloe juvenna",
      kategori: "Mini & Berpola", hargaNum: 35000, hargaLamaNum: 45000, pot: "Pot 8 cm", cahaya: "Sinar Terang",
      siram: "7–10 hari sekali", level: "Mudah", asal: "Kebun Lembang", satuan: "/ pot terakota",
      rating: 4.9, terjual: 490, stok: 11, flashSale: false, badge: "Tiger Tooth",
      gambar: "images/category-2/aloe-juvenna.jpg",
      deskripsi: "Aloe mini kolonial hijau tua berbintik putih dengan duri tepi mirip gigi harimau. Memerah cantik di bawah sinar penuh."
    },
    {
      id: "aloe-pink-blush", nama: "Aloe Pink Blush", latin: "Aloe 'Pink Blush'",
      kategori: "Mini & Berpola", hargaNum: 45000, hargaLamaNum: 58000, pot: "Pot 8 cm", cahaya: "Indoor",
      siram: "7–10 hari sekali", level: "Mudah", asal: "Kebun Lembang", satuan: "/ pot terakota",
      rating: 4.9, terjual: 620, stok: 8, flashSale: false, badge: "Blush Pink",
      gambar: "images/category-2/aloe-pink-blush.jpg",
      deskripsi: "Aloe hibrida cantik dengan bercak putih dan tepi kemerahan. Sangat menawan saat terkena cahaya dan mudah dirawat."
    },
    {
      id: "gasteraloe-flow", nama: "Gasteraloe Flow Green Ice", latin: "×Gasteraloe 'Flow'",
      kategori: "Mini & Berpola", hargaNum: 38000, hargaLamaNum: 50000, pot: "Pot 8 cm", cahaya: "Indoor",
      siram: "7–10 hari sekali", level: "Mudah", asal: "Kebun Surabaya", satuan: "/ pot terakota",
      rating: 4.9, terjual: 540, stok: 9, flashSale: false, badge: "Green Ice",
      gambar: "images/category-2/gasteraloe-flow.jpg",
      deskripsi: "Hibrida Gasteria dan Aloe dengan bercak putih melimpah di daun hijau tua tebal. Sangat toleran sinar rendah."
    },
    {
      id: "gasteria-bicolor-var-liliputana", nama: "Gasteria Liliputana Dwarf", latin: "Gasteria bicolor var. liliputana",
      kategori: "Mini & Berpola", hargaNum: 42000, hargaLamaNum: 55000, pot: "Pot 8 cm", cahaya: "Indoor",
      siram: "7–10 hari sekali", level: "Mudah", asal: "Kebun Lembang", satuan: "/ pot terakota",
      rating: 5.0, terjual: 380, stok: 7, flashSale: false, badge: "Super Mini",
      gambar: "images/category-2/gasteria-bicolor-var-liliputana.jpg",
      deskripsi: "Gasteria terkecil — hanya 5 cm! Daun tebal berpola bintik putih menakjubkan. Cocok untuk terrarium dan koleksi mini."
    },
    {
      id: "gasteria-carinata-var-verrucosa", nama: "Gasteria Verrucosa Warty Aloe", latin: "Gasteria carinata var. verrucosa",
      kategori: "Mini & Berpola", hargaNum: 35000, hargaLamaNum: 45000, pot: "Pot 8 cm", cahaya: "Indoor",
      siram: "7–10 hari sekali", level: "Mudah", asal: "Kebun Surabaya", satuan: "/ pot terakota",
      rating: 4.8, terjual: 410, stok: 10, flashSale: false, badge: "Bertekstur Kutil",
      gambar: "images/category-2/gasteria-carinata-var-verrucosa.jpg",
      deskripsi: "Gasteria dengan tekstur tonjolan putih seperti kutil tersebar rapi di seluruh permukaan daun. Unik dan tahan di tempat gelap."
    },
    {
      id: "haworthia-cooperi-var-truncata", nama: "Haworthia Cooperi Kristal Jendela", latin: "Haworthia cooperi var. truncata",
      kategori: "Mini & Berpola", hargaNum: 55000, hargaLamaNum: 72000, pot: "Pot 8 cm", cahaya: "Indoor",
      siram: "7–10 hari sekali", level: "Mudah", asal: "Kebun Lembang", satuan: "/ pot terakota",
      rating: 4.9, terjual: 1120, stok: 5, flashSale: true, badge: "Koleksi Kristal",
      gambar: "images/category-2/haworthia-cooperi-var-truncata.jpg",
      deskripsi: "Daun bulat tembus cahaya menyerupai permata hijau bening. Ujung daun transparan memantulkan cahaya seperti kristal air."
    },
    {
      id: "haworthia-cymbiformis", nama: "Haworthia Cymbiformis Cathedral Window", latin: "Haworthia cymbiformis",
      kategori: "Mini & Berpola", hargaNum: 38000, hargaLamaNum: 48000, pot: "Pot 8 cm", cahaya: "Indoor",
      siram: "7–10 hari sekali", level: "Mudah", asal: "Kebun Surabaya", satuan: "/ pot terakota",
      rating: 4.8, terjual: 680, stok: 12, flashSale: false, badge: "Jendela Kristal",
      gambar: "images/category-2/haworthia-cymbiformis.jpg",
      deskripsi: "Sukulen mini dengan ujung daun transparan tembus cahaya yang memantulkan sinar bak jendela katedral. Sangat menawan."
    },
    {
      id: "haworthia-maughanii", nama: "Haworthia Maughanii Truncated Haworthia", latin: "Haworthia maughanii",
      kategori: "Mini & Berpola", hargaNum: 85000, hargaLamaNum: 110000, pot: "Pot 8 cm", cahaya: "Indoor",
      siram: "10–14 hari sekali", level: "Kolektor", asal: "Kebun Lembang", satuan: "/ pot terakota",
      rating: 5.0, terjual: 280, stok: 4, flashSale: false, badge: "Premium Kolektor",
      gambar: "images/category-2/haworthia-maughanii.jpg",
      deskripsi: "Haworthia langka dengan daun silindris terpotong rata di ujung bak jendela mini. Salah satu haworthia paling dicari kolektor."
    },
    {
      id: "haworthia-retusa", nama: "Haworthia Retusa Star Cactus", latin: "Haworthia retusa",
      kategori: "Mini & Berpola", hargaNum: 42000, hargaLamaNum: 55000, pot: "Pot 8 cm", cahaya: "Indoor",
      siram: "7–10 hari sekali", level: "Mudah", asal: "Kebun Surabaya", satuan: "/ pot terakota",
      rating: 4.9, terjual: 490, stok: 9, flashSale: false, badge: "Star Shape",
      gambar: "images/category-2/haworthia-retusa.jpg",
      deskripsi: "Roset bintang dengan daun melebar dan ujung transparan berpola garis hijau indah. Tampak seperti bintang laut dari kaca."
    },
    {
      id: "haworthia-truncata", nama: "Haworthia Truncata Window Haworthia", latin: "Haworthia truncata",
      kategori: "Mini & Berpola", hargaNum: 95000, hargaLamaNum: 125000, pot: "Pot 8 cm", cahaya: "Indoor",
      siram: "10–14 hari sekali", level: "Kolektor", asal: "Kebun Lembang", satuan: "/ pot terakota",
      rating: 5.0, terjual: 210, stok: 3, flashSale: false, badge: "Koleksi Langka",
      gambar: "images/category-2/haworthia-truncata.jpg",
      deskripsi: "Haworthia sangat langka dengan daun horizontal terpotong rata dan jendela transparan berpola retikular yang menakjubkan."
    },
    {
      id: "haworthiopsis-attenuata", nama: "Haworthiopsis Attenuata Zebra Mini", latin: "Haworthiopsis attenuata",
      kategori: "Mini & Berpola", hargaNum: 25000, hargaLamaNum: 32000, pot: "Pot 8 cm", cahaya: "Indoor",
      siram: "7–10 hari sekali", level: "Mudah", asal: "Kebun Surabaya", satuan: "/ pot keramik",
      rating: 4.8, terjual: 2100, stok: 25, flashSale: false, badge: "Pemula Friendly",
      gambar: "images/category-2/haworthiopsis-attenuata.jpg",
      deskripsi: "Sukulen mini berbintik putih pada permukaan daun hijau tua. Sangat mudah dirawat dan beranak cepat. Pilihan terbaik pemula."
    },
    {
      id: "haworthiopsis-fasciata", nama: "Haworthiopsis Fasciata Zebra Plant", latin: "Haworthiopsis fasciata",
      kategori: "Mini & Berpola", hargaNum: 28000, hargaLamaNum: 35000, pot: "Pot 8 cm", cahaya: "Indoor",
      siram: "7–10 hari sekali", level: "Mudah", asal: "Kebun Surabaya", satuan: "/ pot keramik",
      rating: 4.9, terjual: 1850, stok: 14, flashSale: true, badge: "Low-Light Friendly",
      gambar: "images/category-2/haworthiopsis-fasciata.jpg",
      deskripsi: "Tanaman meja tangguh dengan garis belang putih tegas di luar daun. Ideal untuk ruangan ber-AC dan meja kantor."
    },
    {
      id: "haworthiopsis-limifolia", nama: "Haworthiopsis Limifolia Fairy Washboard", latin: "Haworthiopsis limifolia",
      kategori: "Mini & Berpola", hargaNum: 38000, hargaLamaNum: 50000, pot: "Pot 8 cm", cahaya: "Indoor",
      siram: "7–10 hari sekali", level: "Mudah", asal: "Kebun Lembang", satuan: "/ pot terakota",
      rating: 4.9, terjual: 580, stok: 11, flashSale: false, badge: "Tekstur Unik",
      gambar: "images/category-2/haworthiopsis-limifolia.jpg",
      deskripsi: "Haworthia berdaun bergalur horizontal rapi seperti papan cuci. Pola tekstur uniknya sangat populer di kalangan kolektor."
    },

    /* ---- KATEGORI 3: GANTUNG (Ceropegia, Senecio, Sedum Menjuntai) ---- */
    {
      id: "ceropegia-woodii", nama: "Ceropegia Woodii String of Hearts", latin: "Ceropegia woodii",
      kategori: "Gantung", hargaNum: 42000, hargaLamaNum: 55000, pot: "Pot 10 cm", cahaya: "Sinar Terang",
      siram: "7 hari sekali", level: "Mudah", asal: "Kebun Lembang", satuan: "/ pot gantung",
      rating: 4.9, terjual: 1480, stok: 8, flashSale: true, badge: "String of Hearts",
      gambar: "images/category-3/ceropegia-woodii.jpg",
      deskripsi: "Sukulen menjuntai romantis dengan daun berbentuk hati berpola batik hijau-ungu di sulur panjang keunguan."
    },
    {
      id: "ceropegia-woodii-variegata", nama: "Ceropegia Woodii Variegata Pink Hearts", latin: "Ceropegia woodii 'Variegata'",
      kategori: "Gantung", hargaNum: 65000, hargaLamaNum: 85000, pot: "Pot 10 cm", cahaya: "Sinar Terang",
      siram: "7 hari sekali", level: "Menengah", asal: "Kebun Lembang", satuan: "/ pot gantung",
      rating: 5.0, terjual: 620, stok: 5, flashSale: false, badge: "Variegata Pink",
      gambar: "images/category-3/ceropegia-woodii-variegata.jpg",
      deskripsi: "Versi variegata langka dengan daun hati bergradasi pink-krem-hijau. Lebih jarang dan lebih cantik dari versi standar."
    },
    {
      id: "crassula-pellucida-variegata", nama: "Crassula Pellucida Calico Kitten", latin: "Crassula pellucida 'Variegata'",
      kategori: "Gantung", hargaNum: 38000, hargaLamaNum: 50000, pot: "Pot 10 cm", cahaya: "Sinar Terang",
      siram: "7 hari sekali", level: "Mudah", asal: "Kebun Surabaya", satuan: "/ pot gantung",
      rating: 4.9, terjual: 740, stok: 10, flashSale: false, badge: "Calico Kitten",
      gambar: "images/category-3/crassula-pellucida-variegata.jpg",
      deskripsi: "Sukulen menjuntai cantik dengan daun hati mini berwarna krem-pink-hijau. Sangat menawan dalam pot gantung."
    },
    {
      id: "crassula-perforata", nama: "Crassula Perforata String of Buttons", latin: "Crassula perforata",
      kategori: "Gantung", hargaNum: 32000, hargaLamaNum: 42000, pot: "Pot 10 cm", cahaya: "Sinar Terang",
      siram: "7 hari sekali", level: "Mudah", asal: "Kebun Surabaya", satuan: "/ pot gantung",
      rating: 4.8, terjual: 580, stok: 13, flashSale: false, badge: "String of Buttons",
      gambar: "images/category-3/crassula-perforata.jpg",
      deskripsi: "Sukulen batang spiral dengan pasang-dua daun yang saling memeluk batang seperti kancing bersusun indah."
    },
    {
      id: "othonna-capensis", nama: "Othonna Capensis Ruby Necklace", latin: "Othonna capensis",
      kategori: "Gantung", hargaNum: 55000, hargaLamaNum: 72000, pot: "Pot 10 cm", cahaya: "Sinar Terang",
      siram: "7 hari sekali", level: "Menengah", asal: "Kebun Lembang", satuan: "/ pot gantung",
      rating: 4.9, terjual: 820, stok: 7, flashSale: false, badge: "Ruby Necklace",
      gambar: "images/category-3/othonna-capensis.jpg",
      deskripsi: "Sukulen menjuntai spektakuler dengan daun silindris merah rubi di batang ungu tua. Berbunga kuning cantik."
    },
    {
      id: "peperomia-prostrata", nama: "Peperomia Prostrata String of Turtles", latin: "Peperomia prostrata",
      kategori: "Gantung", hargaNum: 48000, hargaLamaNum: 62000, pot: "Pot 10 cm", cahaya: "Indoor",
      siram: "7–10 hari sekali", level: "Menengah", asal: "Kebun Lembang", satuan: "/ pot gantung",
      rating: 4.9, terjual: 960, stok: 6, flashSale: false, badge: "String of Turtles",
      gambar: "images/category-3/peperomia-prostrata.jpg",
      deskripsi: "Sukulen mini langka berbentuk kura-kura mungil dengan pola urat daun mirip cangkang penyu. Sangat populer di kalangan kolektor."
    },
    {
      id: "sedum-adolphi", nama: "Sedum Adolphi Golden Glow", latin: "Sedum adolphi",
      kategori: "Gantung", hargaNum: 28000, hargaLamaNum: 36000, pot: "Pot 10 cm", cahaya: "Sinar Terang",
      siram: "7 hari sekali", level: "Mudah", asal: "Kebun Surabaya", satuan: "/ pot terakota",
      rating: 4.7, terjual: 540, stok: 16, flashSale: false, badge: "Golden Glow",
      gambar: "images/category-3/sedum-adolphi.jpg",
      deskripsi: "Sedum kompak dengan daun kuning-oranye bercahaya di ujung batang tegak. Memerah cantik saat terkena stress cahaya."
    },
    {
      id: "sedum-burrito", nama: "Sedum Burrito Baby Donkey's Tail", latin: "Sedum burrito",
      kategori: "Gantung", hargaNum: 35000, hargaLamaNum: 45000, pot: "Pot 10 cm", cahaya: "Sinar Terang",
      siram: "7 hari sekali", level: "Mudah", asal: "Kebun Lembang", satuan: "/ pot gantung",
      rating: 4.8, terjual: 870, stok: 10, flashSale: false, badge: "Baby Donkey Tail",
      gambar: "images/category-3/sedum-burrito.jpg",
      deskripsi: "Versi mini Donkey's Tail dengan daun lebih bulat gemuk dan lebih padat. Menjuntai indah dari pot tinggi."
    },
    {
      id: "sedum-makinoi-ogon", nama: "Sedum Makinoi Ogon Golden", latin: "Sedum makinoi 'Ogon'",
      kategori: "Gantung", hargaNum: 25000, hargaLamaNum: 32000, pot: "Pot 10 cm", cahaya: "Sinar Terang",
      siram: "7 hari sekali", level: "Mudah", asal: "Kebun Surabaya", satuan: "/ pot gantung",
      rating: 4.7, terjual: 460, stok: 20, flashSale: false, badge: "Ground Cover",
      gambar: "images/category-3/sedum-makinoi-ogon.jpg",
      deskripsi: "Sedum menjalar dengan daun bulat kecil berwarna kuning keemasan cerah. Cocok sebagai penutup tanah pot atau pot gantung."
    },
    {
      id: "sedum-morganianum", nama: "Sedum Morganianum Donkey's Tail", latin: "Sedum morganianum",
      kategori: "Gantung", hargaNum: 32000, hargaLamaNum: 42000, pot: "Pot 10 cm", cahaya: "Sinar Terang",
      siram: "7 hari sekali", level: "Mudah", asal: "Kebun Lembang", satuan: "/ pot terakota",
      rating: 5.0, terjual: 2100, stok: 12, flashSale: true, badge: "Rimbun Alami",
      gambar: "images/category-3/sedum-morganianum.jpg",
      deskripsi: "Untaian daun tebal menyerupai kepang hijau mint yang memukau di rak tinggi. Tanaman gantung paling populer di kebun."
    },
    {
      id: "sedum-rubrotinctum", nama: "Sedum Rubrotinctum Jelly Bean", latin: "Sedum rubrotinctum",
      kategori: "Gantung", hargaNum: 28000, hargaLamaNum: 36000, pot: "Pot 10 cm", cahaya: "Sinar Terang",
      siram: "7 hari sekali", level: "Mudah", asal: "Kebun Surabaya", satuan: "/ pot terakota",
      rating: 4.8, terjual: 980, stok: 18, flashSale: false, badge: "Jelly Bean",
      gambar: "images/category-3/sedum-rubrotinctum.jpg",
      deskripsi: "Sukulen berbentuk permen jelly kecil-kecil berwarna hijau kemerahan. Daun mudah rontok namun menjadi bibit baru."
    },
    {
      id: "senecio-herreanus", nama: "Senecio Herreanus String of Watermelons", latin: "Senecio herreanus",
      kategori: "Gantung", hargaNum: 45000, hargaLamaNum: 58000, pot: "Pot 10 cm", cahaya: "Sinar Terang",
      siram: "7 hari sekali", level: "Menengah", asal: "Kebun Lembang", satuan: "/ pot gantung",
      rating: 4.9, terjual: 650, stok: 7, flashSale: false, badge: "Watermelon String",
      gambar: "images/category-3/senecio-herreanus.jpg",
      deskripsi: "Sukulen menjuntai dengan daun lonjong bergaris seperti semangka mini. Lebih tahan dibanding String of Pearls."
    },
    {
      id: "senecio-peregrinus", nama: "Senecio Peregrinus String of Dolphins", latin: "Senecio peregrinus",
      kategori: "Gantung", hargaNum: 55000, hargaLamaNum: 72000, pot: "Pot 10 cm", cahaya: "Sinar Terang",
      siram: "7 hari sekali", level: "Menengah", asal: "Kebun Lembang", satuan: "/ pot gantung",
      rating: 5.0, terjual: 780, stok: 5, flashSale: false, badge: "String of Dolphins",
      gambar: "images/category-3/senecio-peregrinus.jpg",
      deskripsi: "Sukulen paling menggemaskan — daun berbentuk lumba-lumba kecil melompat berjejer di sepanjang sulur menjuntai."
    },
    {
      id: "senecio-radicans", nama: "Senecio Radicans String of Bananas", latin: "Senecio radicans",
      kategori: "Gantung", hargaNum: 38000, hargaLamaNum: 50000, pot: "Pot 10 cm", cahaya: "Sinar Terang",
      siram: "7 hari sekali", level: "Mudah", asal: "Kebun Surabaya", satuan: "/ pot gantung",
      rating: 4.8, terjual: 540, stok: 11, flashSale: false, badge: "String of Bananas",
      gambar: "images/category-3/senecio-radicans.jpg",
      deskripsi: "Sukulen menjuntai dengan daun melengkung mirip pisang kecil-kecil. Lebih tahan kering dari String of Pearls."
    },
    {
      id: "senecio-rowleyanus", nama: "Senecio Rowleyanus String of Pearls", latin: "Senecio rowleyanus",
      kategori: "Gantung", hargaNum: 38500, hargaLamaNum: 59000, pot: "Pot 10 cm", cahaya: "Sinar Terang",
      siram: "6–8 hari sekali", level: "Menengah", asal: "Kebun Lembang", satuan: "/ pot gantung",
      rating: 4.8, terjual: 870, stok: 6, flashSale: true, badge: "Untaian Mutiara",
      gambar: "images/category-3/senecio-rowleyanus.jpg",
      deskripsi: "Sukulen menjuntai ikonik dengan daun bulat menyerupai manik-manik mutiara hijau yang sangat populer."
    },

    /* ---- KATEGORI 4: BATU & UNIK (Lithops, Crassula, Cotyledon) ---- */
    {
      id: "conophytum-bilobum", nama: "Conophytum Bilobum Living Buttons", latin: "Conophytum bilobum",
      kategori: "Batu & Unik", hargaNum: 55000, hargaLamaNum: 72000, pot: "Pot 8 cm", cahaya: "Sinar Penuh",
      siram: "14–21 hari sekali", level: "Kolektor", asal: "Kebun Lembang", satuan: "/ pot terakota",
      rating: 4.9, terjual: 310, stok: 6, flashSale: false, badge: "Living Buttons",
      gambar: "images/category-4/conophytum-bilobum.jpg",
      deskripsi: "Sukulen mini mirip tombol batu dengan celah di tengah. Berbunga ungu atau putih dari celah daunnya yang unik."
    },
    {
      id: "cotyledon-tomentosa", nama: "Cotyledon Tomentosa Bear's Paw", latin: "Cotyledon tomentosa",
      kategori: "Batu & Unik", hargaNum: 42000, hargaLamaNum: 50000, pot: "Pot 10 cm", cahaya: "Sinar Terang",
      siram: "7 hari sekali", level: "Menengah", asal: "Kebun Lembang", satuan: "/ pot keramik",
      rating: 4.9, terjual: 760, stok: 7, flashSale: false, badge: "Favorit Kolektor",
      gambar: "images/category-4/cotyledon-tomentosa.jpg",
      deskripsi: "Daun berbulu lembut menyerupai telapak beruang mungil bercakar merah. Sangat menggemaskan dan populer."
    },
    {
      id: "crassula-capitella-campfire", nama: "Crassula Capitella Campfire", latin: "Crassula capitella 'Campfire'",
      kategori: "Batu & Unik", hargaNum: 32000, hargaLamaNum: 42000, pot: "Pot 10 cm", cahaya: "Sinar Penuh",
      siram: "7 hari sekali", level: "Mudah", asal: "Kebun Surabaya", satuan: "/ pot terakota",
      rating: 4.8, terjual: 620, stok: 14, flashSale: false, badge: "Api Merah",
      gambar: "images/category-4/crassula-capitella-campfire.jpg",
      deskripsi: "Sukulen merah menyala seperti api unggun saat terkena sinar penuh. Warna hijau berubah dramatis menjadi merah-oranye."
    },
    {
      id: "crassula-muscosa", nama: "Crassula Muscosa Watch Chain", latin: "Crassula muscosa",
      kategori: "Batu & Unik", hargaNum: 25000, hargaLamaNum: 32000, pot: "Pot 8 cm", cahaya: "Sinar Terang",
      siram: "7 hari sekali", level: "Mudah", asal: "Kebun Surabaya", satuan: "/ pot terakota",
      rating: 4.7, terjual: 480, stok: 20, flashSale: false, badge: "Watch Chain",
      gambar: "images/category-4/crassula-muscosa.jpg",
      deskripsi: "Sukulen batang berlapis daun kecil rapat seperti rantai jam saku. Sangat unik dan mudah dirawat."
    },
    {
      id: "crassula-ovata", nama: "Crassula Ovata Jade Plant", latin: "Crassula ovata",
      kategori: "Batu & Unik", hargaNum: 35000, hargaLamaNum: 45000, pot: "Pot 12 cm", cahaya: "Sinar Terang",
      siram: "7 hari sekali", level: "Mudah", asal: "Kebun Surabaya", satuan: "/ pot terakota",
      rating: 4.9, terjual: 1650, stok: 20, flashSale: false, badge: "Money Tree",
      gambar: "images/category-4/crassula-ovata.jpg",
      deskripsi: "Tanaman jade populer sebagai simbol keberuntungan dengan batang berkayu dan daun oval mengkilap hijau tua."
    },
    {
      id: "crassula-ovata-gollum", nama: "Crassula Ovata Gollum Jade", latin: "Crassula ovata 'Gollum'",
      kategori: "Batu & Unik", hargaNum: 45000, hargaLamaNum: 60000, pot: "Pot 12 cm", cahaya: "Sinar Terang",
      siram: "7 hari sekali", level: "Mudah", asal: "Kebun Surabaya", satuan: "/ pot terakota",
      rating: 4.9, terjual: 820, stok: 10, flashSale: false, badge: "Gollum Edition",
      gambar: "images/category-4/crassula-ovata-gollum.jpg",
      deskripsi: "Jade dengan daun berbentuk tabung berlubang di ujung seperti corong. Ujung daun memerah cantik di bawah sinar penuh."
    },
    {
      id: "fenestraria-rhopalophylla", nama: "Fenestraria Rhopalophylla Baby Toes", latin: "Fenestraria rhopalophylla",
      kategori: "Batu & Unik", hargaNum: 55000, hargaLamaNum: 72000, pot: "Pot 8 cm", cahaya: "Sinar Penuh",
      siram: "14 hari sekali", level: "Kolektor", asal: "Kebun Lembang", satuan: "/ pot terakota",
      rating: 5.0, terjual: 380, stok: 6, flashSale: false, badge: "Baby Toes",
      gambar: "images/category-4/fenestraria-rhopalophylla.jpg",
      deskripsi: "Sukulen berbentuk jari bayi mungil berujung kaca transparan bak jendela untuk menyerap cahaya dari bawah tanah."
    },
    {
      id: "kalanchoe-tomentosa", nama: "Kalanchoe Tomentosa Panda Plant", latin: "Kalanchoe tomentosa",
      kategori: "Batu & Unik", hargaNum: 32000, hargaLamaNum: 42000, pot: "Pot 10 cm", cahaya: "Sinar Terang",
      siram: "7 hari sekali", level: "Mudah", asal: "Kebun Surabaya", satuan: "/ pot terakota",
      rating: 4.9, terjual: 1240, stok: 15, flashSale: false, badge: "Panda Plant",
      gambar: "images/category-4/kalanchoe-tomentosa.jpg",
      deskripsi: "Sukulen berbulu lembut perak dengan bercak coklat di ujung daun menyerupai telinga panda yang lucu."
    },
    {
      id: "lithops-aucampiae", nama: "Lithops Aucampiae Living Stone Brown", latin: "Lithops aucampiae",
      kategori: "Batu & Unik", hargaNum: 45000, hargaLamaNum: 58000, pot: "Pot 8 cm", cahaya: "Sinar Penuh",
      siram: "14–21 hari sekali", level: "Kolektor", asal: "Kebun Surabaya", satuan: "/ pot isi 2 bulb",
      rating: 4.9, terjual: 480, stok: 8, flashSale: false, badge: "Living Stone",
      gambar: "images/category-4/lithops-aucampiae.jpg",
      deskripsi: "Lithops coklat kemerahan dengan pola urat gelap di permukaan. Sangat mirip batu asli, berbunga kuning di musim kering."
    },
    {
      id: "lithops-karasmontana", nama: "Lithops Karasmontana Living Stone White", latin: "Lithops karasmontana",
      kategori: "Batu & Unik", hargaNum: 48000, hargaLamaNum: 62000, pot: "Pot 8 cm", cahaya: "Sinar Penuh",
      siram: "14–21 hari sekali", level: "Kolektor", asal: "Kebun Surabaya", satuan: "/ pot isi 2 bulb",
      rating: 4.9, terjual: 390, stok: 7, flashSale: false, badge: "White Stone",
      gambar: "images/category-4/lithops-karasmontana.jpg",
      deskripsi: "Lithops putih keabu-abuan dengan pola retikular halus. Berbunga putih di antara kedua daunnya yang hampir menyatu."
    },
    {
      id: "lithops-lesliei", nama: "Lithops Lesliei Living Stones Mix", latin: "Lithops lesliei",
      kategori: "Batu & Unik", hargaNum: 45000, hargaLamaNum: 58000, pot: "Pot 10 cm", cahaya: "Sinar Penuh",
      siram: "14 hari sekali", level: "Kolektor", asal: "Kebun Surabaya", satuan: "/ pot isi 3 bulb",
      rating: 4.9, terjual: 980, stok: 9, flashSale: false, badge: "Tanaman Batu",
      gambar: "images/category-4/lithops-lesliei.jpg",
      deskripsi: "Sukulen mimikri batu gurun dengan corak alami eksotis dan siram sangat jarang. Koleksi wajib sukulentis."
    },
    {
      id: "pleiospilos-nelii", nama: "Pleiospilos Nelii Split Rock", latin: "Pleiospilos nelii",
      kategori: "Batu & Unik", hargaNum: 52000, hargaLamaNum: 68000, pot: "Pot 8 cm", cahaya: "Sinar Penuh",
      siram: "14 hari sekali", level: "Kolektor", asal: "Kebun Lembang", satuan: "/ pot terakota",
      rating: 4.9, terjual: 320, stok: 7, flashSale: false, badge: "Split Rock",
      gambar: "images/category-4/pleiospilos-nelii.jpg",
      deskripsi: "Sukulen batu besar dengan 2-4 daun bulat abu-abu hijau menyerupai batu belah. Berbunga oranye-kuning spektakuler."
    },
    {
      id: "portulacaria-afra", nama: "Portulacaria Afra Elephant Bush", latin: "Portulacaria afra",
      kategori: "Batu & Unik", hargaNum: 38000, hargaLamaNum: 50000, pot: "Pot 12 cm", cahaya: "Sinar Terang",
      siram: "7 hari sekali", level: "Mudah", asal: "Kebun Surabaya", satuan: "/ pot terakota",
      rating: 4.8, terjual: 740, stok: 16, flashSale: false, badge: "Elephant Bush",
      gambar: "images/category-4/portulacaria-afra.jpg",
      deskripsi: "Sukulen batang merah dengan daun hijau kecil oval. Sangat populer untuk bonsai sukulen karena batangnya yang berkayu."
    },
    {
      id: "portulacaria-afra-variegata", nama: "Portulacaria Afra Variegata Rainbow Elephant Bush", latin: "Portulacaria afra 'Variegata'",
      kategori: "Batu & Unik", hargaNum: 55000, hargaLamaNum: 72000, pot: "Pot 12 cm", cahaya: "Sinar Terang",
      siram: "7 hari sekali", level: "Mudah", asal: "Kebun Lembang", satuan: "/ pot terakota",
      rating: 4.9, terjual: 580, stok: 10, flashSale: false, badge: "Rainbow Variegata",
      gambar: "images/category-4/portulacaria-afra-variegata.jpg",
      deskripsi: "Versi variegata dengan daun hijau berbatas putih-kuning. Batang merah marun dan daun tricolor menjadikannya sangat menawan."
    },
    {
      id: "titanopsis-calcarea", nama: "Titanopsis Calcarea Jewel Plant", latin: "Titanopsis calcarea",
      kategori: "Batu & Unik", hargaNum: 65000, hargaLamaNum: 85000, pot: "Pot 8 cm", cahaya: "Sinar Penuh",
      siram: "14 hari sekali", level: "Kolektor", asal: "Kebun Lembang", satuan: "/ pot terakota",
      rating: 5.0, terjual: 240, stok: 5, flashSale: false, badge: "Jewel Plant",
      gambar: "images/category-4/titanopsis-calcarea.jpg",
      deskripsi: "Sukulen menyerupai bebatuan dengan ujung daun ditutupi tonjolan kalsium putih-oranye bak batu kapur permata."
    },

    /* ---- KATEGORI 5: KAKTUS BULAT (Astrophytum, Gymno, Mammillaria) ---- */
    {
      id: "astrophytum-asterias", nama: "Astrophytum Asterias Sand Dollar Cactus", latin: "Astrophytum asterias",
      kategori: "Kaktus Bulat", hargaNum: 65000, hargaLamaNum: 85000, pot: "Pot 10 cm", cahaya: "Sinar Penuh",
      siram: "10–14 hari sekali", level: "Kolektor", asal: "Kebun Surabaya", satuan: "/ pot terakota",
      rating: 5.0, terjual: 380, stok: 5, flashSale: false, badge: "Sand Dollar",
      gambar: "images/category-5/astrophytum-asterias.jpg",
      deskripsi: "Kaktus bulat pipih mirip koin bintang laut tanpa duri dengan bintik trikoma putih dan bunga kuning besar spektakuler."
    },
    {
      id: "astrophytum-capricorne", nama: "Astrophytum Capricorne Mountain Cactus", latin: "Astrophytum capricorne",
      kategori: "Kaktus Bulat", hargaNum: 55000, hargaLamaNum: 72000, pot: "Pot 10 cm", cahaya: "Sinar Penuh",
      siram: "10–14 hari sekali", level: "Mudah", asal: "Kebun Surabaya", satuan: "/ pot terakota",
      rating: 4.9, terjual: 490, stok: 7, flashSale: false, badge: "Ram Horn Spines",
      gambar: "images/category-5/astrophytum-capricorne.jpg",
      deskripsi: "Kaktus bintang dengan duri panjang meliuk seperti tanduk kambing. Bintik putih rapat di seluruh badan berwarna kehijauan."
    },
    {
      id: "astrophytum-myriostigma", nama: "Astrophytum Myriostigma Bishop's Cap", latin: "Astrophytum myriostigma",
      kategori: "Kaktus Bulat", hargaNum: 55000, hargaLamaNum: 65000, pot: "Pot 10 cm", cahaya: "Sinar Penuh",
      siram: "10–14 hari sekali", level: "Mudah", asal: "Kebun Surabaya", satuan: "/ pot terakota",
      rating: 4.9, terjual: 640, stok: 6, flashSale: false, badge: "Koleksi Rare",
      gambar: "images/category-5/astrophytum-myriostigma.jpg",
      deskripsi: "Kaktus bintang lima simetris tanpa duri tajam dengan bintik trikoma putih mewah. Koleksi favorit para kaktis."
    },
    {
      id: "astrophytum-ornatum", nama: "Astrophytum Ornatum Star Cactus", latin: "Astrophytum ornatum",
      kategori: "Kaktus Bulat", hargaNum: 48000, hargaLamaNum: 62000, pot: "Pot 10 cm", cahaya: "Sinar Penuh",
      siram: "10–14 hari sekali", level: "Mudah", asal: "Kebun Surabaya", satuan: "/ pot terakota",
      rating: 4.8, terjual: 540, stok: 8, flashSale: false, badge: "Golden Spines",
      gambar: "images/category-5/astrophytum-ornatum.jpg",
      deskripsi: "Kaktus bintang berukuran lebih besar dengan duri keemasan panjang tegak dan ban trikoma putih horizontal yang rapi."
    },
    {
      id: "coryphantha-elephantidens", nama: "Coryphantha Elephantidens Elephant Tooth", latin: "Coryphantha elephantidens",
      kategori: "Kaktus Bulat", hargaNum: 65000, hargaLamaNum: 85000, pot: "Pot 12 cm", cahaya: "Sinar Penuh",
      siram: "10–14 hari sekali", level: "Menengah", asal: "Kebun Surabaya", satuan: "/ pot terakota",
      rating: 4.9, terjual: 310, stok: 6, flashSale: false, badge: "Elephant Tooth",
      gambar: "images/category-5/coryphantha-elephantidens.jpg",
      deskripsi: "Kaktus bulat besar dengan tuberkle besar seperti gigi gajah dan duri tebal. Berbunga pink besar sangat menawan."
    },
    {
      id: "echinocactus-grusonii", nama: "Echinocactus Grusonii Golden Barrel", latin: "Echinocactus grusonii",
      kategori: "Kaktus Bulat", hargaNum: 48000, hargaLamaNum: 80000, pot: "Pot 15 cm", cahaya: "Sinar Penuh",
      siram: "10–14 hari sekali", level: "Mudah", asal: "Kebun Surabaya", satuan: "/ pot terakota",
      rating: 4.9, terjual: 1320, stok: 3, flashSale: true, badge: "Diskon Besar",
      gambar: "images/category-5/echinocactus-grusonii.jpg",
      deskripsi: "Kaktus bulat klasik berduri keemasan rapi menghiasi rusuk lurus. Ikon estetika minimalis yang timeless."
    },
    {
      id: "ferocactus-latispinus", nama: "Ferocactus Latispinus Devil's Tongue", latin: "Ferocactus latispinus",
      kategori: "Kaktus Bulat", hargaNum: 55000, hargaLamaNum: 72000, pot: "Pot 12 cm", cahaya: "Sinar Penuh",
      siram: "10–14 hari sekali", level: "Mudah", asal: "Kebun Surabaya", satuan: "/ pot terakota",
      rating: 4.8, terjual: 420, stok: 8, flashSale: false, badge: "Devil's Tongue",
      gambar: "images/category-5/ferocactus-latispinus.jpg",
      deskripsi: "Kaktus barrel dramatis dengan duri merah-merah besar melingkar, termasuk satu duri terbesar melengkung ke bawah."
    },
    {
      id: "frailea-castanea", nama: "Frailea Castanea Miniature Barrel", latin: "Frailea castanea",
      kategori: "Kaktus Bulat", hargaNum: 45000, hargaLamaNum: 58000, pot: "Pot 8 cm", cahaya: "Sinar Penuh",
      siram: "10–14 hari sekali", level: "Kolektor", asal: "Kebun Lembang", satuan: "/ pot terakota",
      rating: 4.9, terjual: 280, stok: 7, flashSale: false, badge: "Mini Langka",
      gambar: "images/category-5/frailea-castanea.jpg",
      deskripsi: "Kaktus barrel terkecil — hanya 3-5 cm! Berwarna coklat kehitaman dengan bintik kuning. Berbunga kleistogami tanpa membuka."
    },
    {
      id: "gymnocalycium-baldianum", nama: "Gymnocalycium Baldianum Spider Cactus", latin: "Gymnocalycium baldianum",
      kategori: "Kaktus Bulat", hargaNum: 38000, hargaLamaNum: 48000, pot: "Pot 10 cm", cahaya: "Sinar Terang",
      siram: "10–14 hari sekali", level: "Mudah", asal: "Kebun Surabaya", satuan: "/ pot terakota",
      rating: 4.9, terjual: 680, stok: 12, flashSale: false, badge: "Red Flower",
      gambar: "images/category-5/gymnocalycium-baldianum.jpg",
      deskripsi: "Kaktus bulat semi-flat dengan duri lurus dan bunga merah cerah kontras. Sangat mudah berbunga meski di dalam ruangan."
    },
    {
      id: "gymnocalycium-horstii", nama: "Gymnocalycium Horstii Chin Cactus", latin: "Gymnocalycium horstii",
      kategori: "Kaktus Bulat", hargaNum: 45000, hargaLamaNum: 58000, pot: "Pot 10 cm", cahaya: "Sinar Terang",
      siram: "10–14 hari sekali", level: "Mudah", asal: "Kebun Surabaya", satuan: "/ pot terakota",
      rating: 4.8, terjual: 410, stok: 9, flashSale: false, badge: "Pink Flower",
      gambar: "images/category-5/gymnocalycium-horstii.jpg",
      deskripsi: "Kaktus bulat besar bergalur lebar dengan duri melengkung dan bunga pink besar yang sering muncul di musim panas."
    },
    {
      id: "gymnocalycium-mihanovichii", nama: "Gymnocalycium Mihanovichii Moon Cactus", latin: "Gymnocalycium mihanovichii",
      kategori: "Kaktus Bulat", hargaNum: 32000, hargaLamaNum: 42000, pot: "Pot 8 cm", cahaya: "Indoor",
      siram: "10–14 hari sekali", level: "Mudah", asal: "Kebun Surabaya", satuan: "/ pot terakota",
      rating: 4.8, terjual: 920, stok: 18, flashSale: false, badge: "Moon Cactus",
      gambar: "images/category-5/gymnocalycium-mihanovichii.jpg",
      deskripsi: "Kaktus mungil kokoh bertubuh hijau bergalur dengan bunga pink cerah yang sering muncul di pucuknya."
    },
    {
      id: "gymnocalycium-mihanovichii-variegata", nama: "Gymnocalycium Mihanovichii Variegata Hibotan", latin: "Gymnocalycium mihanovichii 'Variegata'",
      kategori: "Kaktus Bulat", hargaNum: 45000, hargaLamaNum: 60000, pot: "Pot 8 cm", cahaya: "Indoor",
      siram: "10–14 hari sekali", level: "Mudah", asal: "Kebun Surabaya", satuan: "/ pot terakota",
      rating: 4.9, terjual: 1480, stok: 10, flashSale: true, badge: "Moon Cactus Merah",
      gambar: "images/category-5/gymnocalycium-mihanovichii-variegata.jpg",
      deskripsi: "Kaktus Moon merah-oranye mencolok yang dicangkok di batang Hylocereus hijau. Sangat populer sebagai hadiah dan koleksi."
    },
    {
      id: "mammillaria-bocasana", nama: "Mammillaria Bocasana Powder Puff Cactus", latin: "Mammillaria bocasana",
      kategori: "Kaktus Bulat", hargaNum: 35000, hargaLamaNum: 45000, pot: "Pot 10 cm", cahaya: "Sinar Penuh",
      siram: "10–14 hari sekali", level: "Mudah", asal: "Kebun Surabaya", satuan: "/ pot terakota",
      rating: 4.9, terjual: 760, stok: 14, flashSale: false, badge: "Powder Puff",
      gambar: "images/category-5/mammillaria-bocasana.jpg",
      deskripsi: "Kaktus berbulu halus putih seperti bola kapas lembut dengan bunga pink kecil melingkar di puncaknya."
    },
    {
      id: "mammillaria-elongata", nama: "Mammillaria Elongata Ladyfinger Cactus", latin: "Mammillaria elongata",
      kategori: "Kaktus Bulat", hargaNum: 32000, hargaLamaNum: 42000, pot: "Pot 10 cm", cahaya: "Sinar Penuh",
      siram: "10–14 hari sekali", level: "Mudah", asal: "Kebun Surabaya", satuan: "/ pot terakota",
      rating: 4.8, terjual: 980, stok: 18, flashSale: false, badge: "Gold Lace",
      gambar: "images/category-5/mammillaria-elongata.jpg",
      deskripsi: "Kaktus silinder kecil berkoloni lebat berduri emas rapat seperti renda. Sangat mudah beranakpinak dan dekoratif."
    },
    {
      id: "mammillaria-hahniana", nama: "Mammillaria Hahniana Old Lady Cactus", latin: "Mammillaria hahniana",
      kategori: "Kaktus Bulat", hargaNum: 38000, hargaLamaNum: 50000, pot: "Pot 10 cm", cahaya: "Sinar Penuh",
      siram: "10–14 hari sekali", level: "Mudah", asal: "Kebun Surabaya", satuan: "/ pot terakota",
      rating: 4.9, terjual: 620, stok: 11, flashSale: false, badge: "Old Lady",
      gambar: "images/category-5/mammillaria-hahniana.jpg",
      deskripsi: "Kaktus bulat diselimuti bulu putih panjang lembut seperti rambut nenek tua. Berbunga pink melingkar di puncaknya."
    },
    {
      id: "mammillaria-plumosa", nama: "Mammillaria Plumosa Feather Cactus", latin: "Mammillaria plumosa",
      kategori: "Kaktus Bulat", hargaNum: 42000, hargaLamaNum: 55000, pot: "Pot 10 cm", cahaya: "Sinar Penuh",
      siram: "10–14 hari sekali", level: "Mudah", asal: "Kebun Surabaya", satuan: "/ pot terakota",
      rating: 4.9, terjual: 480, stok: 10, flashSale: false, badge: "Feather Cactus",
      gambar: "images/category-5/mammillaria-plumosa.jpg",
      deskripsi: "Kaktus paling lembut — duri berbentuk bulu halus putih menutup seluruh tubuhnya seperti bola kapas berbulu."
    },
    {
      id: "melocactus-matanzanus", nama: "Melocactus Matanzanus Turk's Cap", latin: "Melocactus matanzanus",
      kategori: "Kaktus Bulat", hargaNum: 75000, hargaLamaNum: 95000, pot: "Pot 12 cm", cahaya: "Sinar Penuh",
      siram: "10–14 hari sekali", level: "Kolektor", asal: "Kebun Surabaya", satuan: "/ pot terakota",
      rating: 5.0, terjual: 320, stok: 5, flashSale: false, badge: "Turk's Cap",
      gambar: "images/category-5/melocactus-matanzanus.jpg",
      deskripsi: "Kaktus langka dengan 'topi' cephalium merah-oranye muncul di puncaknya saat dewasa. Berbunga pink kecil dari cephaliumnya."
    },
    {
      id: "parodia-leninghausii", nama: "Parodia Leninghausii Golden Tower Cactus", latin: "Parodia leninghausii",
      kategori: "Kaktus Bulat", hargaNum: 45000, hargaLamaNum: 58000, pot: "Pot 10 cm", cahaya: "Sinar Penuh",
      siram: "10–14 hari sekali", level: "Mudah", asal: "Kebun Surabaya", satuan: "/ pot terakota",
      rating: 4.8, terjual: 540, stok: 9, flashSale: false, badge: "Golden Tower",
      gambar: "images/category-5/parodia-leninghausii.jpg",
      deskripsi: "Kaktus silinder tertutup bulu emas lembut dan duri halus kuning keemasan. Berbunga kuning cerah besar di puncaknya."
    },
    {
      id: "parodia-magnifica", nama: "Parodia Magnifica Balloon Cactus", latin: "Parodia magnifica",
      kategori: "Kaktus Bulat", hargaNum: 55000, hargaLamaNum: 72000, pot: "Pot 12 cm", cahaya: "Sinar Penuh",
      siram: "10–14 hari sekali", level: "Mudah", asal: "Kebun Surabaya", satuan: "/ pot terakota",
      rating: 4.9, terjual: 480, stok: 7, flashSale: false, badge: "Balloon Cactus",
      gambar: "images/category-5/parodia-magnifica.jpg",
      deskripsi: "Kaktus bulat biru-hijau berselimut duri halus putih keemasan dengan bunga kuning besar menghias puncaknya."
    },
    {
      id: "rebutia-minuscula", nama: "Rebutia Minuscula Crown Cactus", latin: "Rebutia minuscula",
      kategori: "Kaktus Bulat", hargaNum: 32000, hargaLamaNum: 42000, pot: "Pot 8 cm", cahaya: "Sinar Penuh",
      siram: "10–14 hari sekali", level: "Mudah", asal: "Kebun Surabaya", satuan: "/ pot terakota",
      rating: 4.9, terjual: 820, stok: 15, flashSale: false, badge: "Rajin Berbunga",
      gambar: "images/category-5/rebutia-minuscula.jpg",
      deskripsi: "Kaktus mungil yang berbunga lebat di musim semi dengan bunga merah-oranye mengelilingi pangkal tubuhnya. Sangat rajin berbunga."
    },

    /* ---- KATEGORI 6: KOLOM & HUTAN (Cereus, Opuntia, Rhipsalis, Schlumbergera) ---- */
    {
      id: "cephalocereus-senilis", nama: "Cephalocereus Senilis Old Man Cactus", latin: "Cephalocereus senilis",
      kategori: "Kolom & Hutan", hargaNum: 85000, hargaLamaNum: 110000, pot: "Pot 15 cm", cahaya: "Sinar Penuh",
      siram: "10–14 hari sekali", level: "Mudah", asal: "Kebun Surabaya", satuan: "/ tinggi 25 cm",
      rating: 4.9, terjual: 480, stok: 6, flashSale: false, badge: "Old Man",
      gambar: "images/category-6/cephalocereus-senilis.jpg",
      deskripsi: "Kaktus kolom tertutup rambut putih panjang lembut seperti kakek tua berjambang. Sangat unik dan menjadi statement plant."
    },
    {
      id: "cereus-jamacaru", nama: "Cereus Jamacaru Mandacaru Column", latin: "Cereus jamacaru",
      kategori: "Kolom & Hutan", hargaNum: 65000, hargaLamaNum: 85000, pot: "Pot 15 cm", cahaya: "Sinar Penuh",
      siram: "10 hari sekali", level: "Mudah", asal: "Kebun Surabaya", satuan: "/ tinggi 30 cm",
      rating: 4.8, terjual: 540, stok: 8, flashSale: false, badge: "Kolom Klasik",
      gambar: "images/category-6/cereus-jamacaru.jpg",
      deskripsi: "Kaktus kolom bergalur biru-hijau dengan duri abu-abu panjang. Tumbuh cepat dan kokoh sebagai tanaman sudut ruangan."
    },
    {
      id: "cereus-repandus-monstrose", nama: "Cereus Repandus Monstrose Spiral Cactus", latin: "Cereus repandus 'Monstrose'",
      kategori: "Kolom & Hutan", hargaNum: 95000, hargaLamaNum: 125000, pot: "Pot 15 cm", cahaya: "Sinar Penuh",
      siram: "10 hari sekali", level: "Mudah", asal: "Kebun Surabaya", satuan: "/ tinggi 25 cm",
      rating: 5.0, terjual: 310, stok: 5, flashSale: false, badge: "Monstrose Spiral",
      gambar: "images/category-6/cereus-repandus-monstrose.jpg",
      deskripsi: "Mutasi unik Cereus dengan tubuh bergelombang tidak beraturan menciptakan bentuk pahatan 3D yang sangat artistik."
    },
    {
      id: "cleistocactus-strausii", nama: "Cleistocactus Strausii Silver Torch", latin: "Cleistocactus strausii",
      kategori: "Kolom & Hutan", hargaNum: 75000, hargaLamaNum: 95000, pot: "Pot 15 cm", cahaya: "Sinar Penuh",
      siram: "10 hari sekali", level: "Mudah", asal: "Kebun Surabaya", satuan: "/ tinggi 30 cm",
      rating: 4.9, terjual: 420, stok: 7, flashSale: false, badge: "Silver Torch",
      gambar: "images/category-6/cleistocactus-strausii.jpg",
      deskripsi: "Kaktus kolom tertutup bulu-bulu putih halus rapat seperti pilar perak. Berbunga merah dari sisi batang yang sangat indah."
    },
    {
      id: "epiphyllum-oxypetalum", nama: "Epiphyllum Oxypetalum Queen of the Night", latin: "Epiphyllum oxypetalum",
      kategori: "Kolom & Hutan", hargaNum: 55000, hargaLamaNum: 72000, pot: "Pot 15 cm", cahaya: "Indoor",
      siram: "5–7 hari sekali", level: "Menengah", asal: "Kebun Lembang", satuan: "/ pot gantung",
      rating: 4.9, terjual: 680, stok: 9, flashSale: false, badge: "Queen of Night",
      gambar: "images/category-6/epiphyllum-oxypetalum.jpg",
      deskripsi: "Kaktus epifit berdaun pipih lebar yang berbunga putih raksasa harum di malam hari. Peristiwa mekar hanya semalam!"
    },
    {
      id: "hatiora-gaertneri", nama: "Hatiora Gaertneri Easter Cactus", latin: "Hatiora gaertneri",
      kategori: "Kolom & Hutan", hargaNum: 48000, hargaLamaNum: 62000, pot: "Pot 12 cm", cahaya: "Indoor",
      siram: "5–7 hari sekali", level: "Mudah", asal: "Kebun Lembang", satuan: "/ pot gantung",
      rating: 4.8, terjual: 540, stok: 10, flashSale: false, badge: "Easter Cactus",
      gambar: "images/category-6/hatiora-gaertneri.jpg",
      deskripsi: "Kaktus hutan tropis berdaun segmen menjuntai yang berbunga merah-oranye spektakuler. Sangat mudah berbunga indoor."
    },
    {
      id: "myrtillocactus-geometrizans", nama: "Myrtillocactus Geometrizans Blue Candle", latin: "Myrtillocactus geometrizans",
      kategori: "Kolom & Hutan", hargaNum: 85000, hargaLamaNum: 110000, pot: "Pot 15 cm", cahaya: "Sinar Penuh",
      siram: "10 hari sekali", level: "Mudah", asal: "Kebun Surabaya", satuan: "/ tinggi 30 cm",
      rating: 4.9, terjual: 360, stok: 6, flashSale: false, badge: "Blue Candle",
      gambar: "images/category-6/myrtillocactus-geometrizans.jpg",
      deskripsi: "Kaktus kolom kandelabra berwarna biru-hijau keabu-abuan yang tumbuh bercabang membentuk silhouette pohon cantik."
    },
    {
      id: "opuntia-ficus-indica", nama: "Opuntia Ficus Indica Prickly Pear", latin: "Opuntia ficus-indica",
      kategori: "Kolom & Hutan", hargaNum: 45000, hargaLamaNum: 58000, pot: "Pot 15 cm", cahaya: "Sinar Penuh",
      siram: "10 hari sekali", level: "Mudah", asal: "Kebun Surabaya", satuan: "/ pot terakota",
      rating: 4.7, terjual: 580, stok: 15, flashSale: false, badge: "Prickly Pear",
      gambar: "images/category-6/opuntia-ficus-indica.jpg",
      deskripsi: "Kaktus padel ikonik dengan segmen oval lebar berduri halus glokhid. Berbunga kuning dan berbuah merah yang bisa dimakan."
    },
    {
      id: "opuntia-microdasys", nama: "Opuntia Microdasys Bunny Ears Cactus", latin: "Opuntia microdasys",
      kategori: "Kolom & Hutan", hargaNum: 38000, hargaLamaNum: 50000, pot: "Pot 12 cm", cahaya: "Sinar Penuh",
      siram: "10 hari sekali", level: "Mudah", asal: "Kebun Surabaya", satuan: "/ pot terakota",
      rating: 4.8, terjual: 920, stok: 14, flashSale: false, badge: "Bunny Ears",
      gambar: "images/category-6/opuntia-microdasys.jpg",
      deskripsi: "Kaktus padel mini berbentuk telinga kelinci lucu dengan bercak glokhid kuning atau putih. Sangat ikonik dan menggemaskan."
    },
    {
      id: "opuntia-monacantha-variegata", nama: "Opuntia Monacantha Variegata Joseph's Coat", latin: "Opuntia monacantha 'Variegata'",
      kategori: "Kolom & Hutan", hargaNum: 65000, hargaLamaNum: 85000, pot: "Pot 12 cm", cahaya: "Sinar Penuh",
      siram: "10 hari sekali", level: "Mudah", asal: "Kebun Lembang", satuan: "/ pot terakota",
      rating: 4.9, terjual: 390, stok: 7, flashSale: false, badge: "Joseph's Coat",
      gambar: "images/category-6/opuntia-monacantha-variegata.jpg",
      deskripsi: "Kaktus padel variegata langka dengan warna padel putih-merah muda kontras sangat mencolok dan dekoratif."
    },
    {
      id: "pilosocereus-pachycladus", nama: "Pilosocereus Pachycladus Blue Torch Cactus", latin: "Pilosocereus pachycladus",
      kategori: "Kolom & Hutan", hargaNum: 95000, hargaLamaNum: 125000, pot: "Pot 15 cm", cahaya: "Sinar Penuh",
      siram: "10 hari sekali", level: "Mudah", asal: "Kebun Surabaya", satuan: "/ tinggi 25 cm",
      rating: 5.0, terjual: 280, stok: 4, flashSale: false, badge: "Blue Torch",
      gambar: "images/category-6/pilosocereus-pachycladus.jpg",
      deskripsi: "Kaktus kolom paling memukau berwarna biru-turquoise cerah alami dengan bulu putih di area areole. Sangat jarang dan premium."
    },
    {
      id: "rhipsalis-baccifera", nama: "Rhipsalis Baccifera Mistletoe Cactus", latin: "Rhipsalis baccifera",
      kategori: "Kolom & Hutan", hargaNum: 42000, hargaLamaNum: 55000, pot: "Pot 12 cm", cahaya: "Indoor",
      siram: "5–7 hari sekali", level: "Mudah", asal: "Kebun Lembang", satuan: "/ pot gantung",
      rating: 4.8, terjual: 740, stok: 11, flashSale: false, badge: "Mistletoe Cactus",
      gambar: "images/category-6/rhipsalis-baccifera.jpg",
      deskripsi: "Kaktus hutan epifit berdaun batang tipis menjuntai panjang. Sangat cocok untuk pot gantung indoor dengan cahaya rendah."
    },
    {
      id: "schlumbergera-truncata", nama: "Schlumbergera Truncata Christmas Cactus", latin: "Schlumbergera truncata",
      kategori: "Kolom & Hutan", hargaNum: 48000, hargaLamaNum: 62000, pot: "Pot 12 cm", cahaya: "Indoor",
      siram: "5–7 hari sekali", level: "Mudah", asal: "Kebun Lembang", satuan: "/ pot gantung",
      rating: 4.9, terjual: 920, stok: 10, flashSale: false, badge: "Christmas Cactus",
      gambar: "images/category-6/schlumbergera-truncata.jpg",
      deskripsi: "Kaktus Natal ikonik yang berbunga merah-pink lebat menjelang akhir tahun. Sangat populer sebagai hadiah dan koleksi indoor."
    },
    {
      id: "selenicereus-anthonyanus", nama: "Selenicereus Anthonyanus Fishbone Cactus", latin: "Selenicereus anthonyanus",
      kategori: "Kolom & Hutan", hargaNum: 55000, hargaLamaNum: 72000, pot: "Pot 12 cm", cahaya: "Indoor",
      siram: "5–7 hari sekali", level: "Mudah", asal: "Kebun Lembang", satuan: "/ pot gantung",
      rating: 4.9, terjual: 680, stok: 8, flashSale: false, badge: "Fishbone Cactus",
      gambar: "images/category-6/selenicereus-anthonyanus.jpg",
      deskripsi: "Kaktus epifit berdaun bergigi zig-zag seperti tulang ikan yang menjuntai indah. Berbunga pink harum di malam hari."
    },
    {
      id: "tephrocactus-geometricus", nama: "Tephrocactus Geometricus Paper Spine Cactus", latin: "Tephrocactus geometricus",
      kategori: "Kolom & Hutan", hargaNum: 85000, hargaLamaNum: 110000, pot: "Pot 10 cm", cahaya: "Sinar Penuh",
      siram: "14 hari sekali", level: "Kolektor", asal: "Kebun Lembang", satuan: "/ pot terakota",
      rating: 5.0, terjual: 210, stok: 4, flashSale: false, badge: "Paper Spine",
      gambar: "images/category-6/tephrocactus-geometricus.jpg",
      deskripsi: "Kaktus paling aneh — segmen bola kecil berwarna merah muda berlapis duri berbentuk pipih lebar seperti kertas putih."
    },

    /* ---- AKSESORI & MEDIA TANAM ---- */
    {
      id: "media-porous-1kg", nama: "Media Tanam Porous 1 kg", latin: "Pumice, Pasir Malang & Perlite",
      kategori: "Roset", hargaNum: 15000, hargaLamaNum: 18000, pot: "Pot 10 cm", cahaya: "Sinar Terang",
      siram: "-", level: "Mudah", asal: "Formula Jerine", satuan: "/ kemasan 1 kg",
      rating: 5.0, terjual: 3200, stok: 40, flashSale: false, isAccessory: true, badge: "Wajib Punya",
      gambar: "", deskripsi: "Campuran media tanam super porous steril anti busuk akar untuk sukulen & kaktus."
    },
    {
      id: "pot-terracotta-d10", nama: "Pot Terracotta Gerabah D10", latin: "Natural Breathable Clay Pot",
      kategori: "Mini & Berpola", hargaNum: 12000, hargaLamaNum: 0, pot: "Pot 10 cm", cahaya: "Sinar Terang",
      siram: "-", level: "Mudah", asal: "Workshop Jawa Timur", satuan: "/ pot diameter 10 cm",
      rating: 4.9, terjual: 2450, stok: 50, flashSale: false, isAccessory: true, badge: "Porositas Alami",
      gambar: "", deskripsi: "Pot tanah liat berpori dengan lubang drainase ideal agar media cepat kering."
    }
  ];

  function parseHarga(val) {
    if (typeof val === "number" && !isNaN(val)) return val;
    var digits = String(val || "").replace(/[^\d]/g, "");
    return digits ? parseInt(digits, 10) : 35000;
  }

  function normalizeProduct(raw, index) {
    var nama = raw.nama || raw.name || raw.judul || ("Koleksi Sukulen #" + (index + 1));
    var hargaNum = raw.hargaNum || parseHarga(raw.harga || raw.price);
    var hargaLamaNum = raw.hargaLamaNum || (raw.hargaLama ? parseHarga(raw.hargaLama) : 0);
    var leafPalette = ["#3e7d26", "#538d22", "#6ba34a", "#2f6b24", "#71a858"];
    var fallback = svgPlantThumb(nama, "#edf7e2", leafPalette[index % leafPalette.length]);
    return {
      id: String(raw.id || ("jg-" + (index + 1))),
      nama: nama,
      latin: raw.latin || raw.namaLatin || raw.scientific || "Succulentus sp.",
      kategori: raw.kategori || raw.category || "Roset",
      hargaNum: hargaNum,
      hargaLamaNum: hargaLamaNum > hargaNum ? hargaLamaNum : 0,
      pot: raw.pot || raw.ukuran || "Pot 10 cm",
      cahaya: raw.cahaya || raw.sunlight || "Sinar Terang",
      siram: raw.siram || raw.watering || "5–7 hari sekali",
      level: raw.level || raw.perawatan || "Mudah",
      asal: raw.asal || "Kebun Surabaya",
      satuan: raw.satuan || "/ pot terakota",
      rating: raw.rating || 4.9,
      terjual: raw.terjual || (300 + index * 45),
      stok: typeof raw.stok === "number" ? raw.stok : 12,
      flashSale: Boolean(raw.flashSale),
      isAccessory: Boolean(raw.isAccessory),
      badge: raw.badge || (hargaLamaNum > hargaNum ? "Promo" : "Akar Mapan"),
      gambar: raw.gambar || raw.image || raw.img || fallback,
      fallbackSvg: fallback,
      deskripsi: raw.deskripsi || raw.desc || "Tanaman sukulen sehat berakar mapan lengkap dengan pot terakota dan panduan perawatan."
    };
  }

  var ALL_PRODUCTS = RAW_PRODUCTS.map(normalizeProduct);
  var PLANTS_ONLY = ALL_PRODUCTS.filter(function (p) { return !p.isAccessory; });

  function getProductById(id) {
    return ALL_PRODUCTS.find(function (p) { return p.id === String(id); }) || null;
  }

  function getCategoryCount(catName) {
    return PLANTS_ONLY.filter(function (p) { return p.kategori === catName; }).length;
  }

  window.jgImgErr = function (imgEl, id) {
    var p = getProductById(id);
    if (p && imgEl && imgEl.src !== p.fallbackSvg) {
      imgEl.src = p.fallbackSvg;
    }
  };

  /* ------------------------------------------------------------------------
     2. STORE, CART, PROMO, WISHLIST, ORDERS & REALTIME SYNC
     ------------------------------------------------------------------------ */
  var KEYS = {
    CART: "jerine_green_cart_v1",
    ORDERS: "jerine_green_orders_v1",
    PROMO: "jerine_green_promo_v1",
    WISHLIST: "jerine_green_wishlist_v1",
    USER: "jerine_green_user_v1"
  };

  var PROMOS = {
    "JERINESTART": { code: "JERINESTART", label: "Kupon Adopsi Perdana", discount: 10000, minSpend: 30000 },
    "SUKULENHEMAT": { code: "SUKULENHEMAT", label: "Potongan Koleksi Hijau", discount: 15000, minSpend: 50000 },
    "HIJAU15": { code: "HIJAU15", label: "Diskon Pecinta Sukulen", discount: 15000, minSpend: 50000 }
  };

  var bc = typeof BroadcastChannel !== "undefined" ? new BroadcastChannel("jerine_green_realtime_v1") : null;
  var syncCallbacks = [];

  function safeRead(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  }

  function safeWrite(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {}
  }

  function emitUpdate(type) {
    var payload = { type: type, ts: Date.now() };
    if (bc) { try { bc.postMessage(payload); } catch (e) {} }
    syncCallbacks.forEach(function (fn) { try { fn(payload); } catch (e) {} });
  }

  if (bc) {
    bc.onmessage = function (ev) {
      syncCallbacks.forEach(function (fn) { try { fn(ev.data || { type: "SYNC" }); } catch (e) {} });
    };
  }

  window.addEventListener("storage", function (ev) {
    if (ev.key && ev.key.indexOf("jerine_green_") === 0) {
      syncCallbacks.forEach(function (fn) { try { fn({ type: "STORAGE" }); } catch (e) {} });
    }
  });

  function formatRupiah(num) {
    return "Rp " + (Number(num) || 0).toLocaleString("id-ID");
  }

  function formatWaktu(iso) {
    if (!iso) return "-";
    try {
      return new Date(iso).toLocaleString("id-ID", {
        day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit"
      }) + " WIB";
    } catch (e) { return iso; }
  }

  function escapeHtml(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  }

  function showToast(msg) {
    var t = document.getElementById("jg-toast");
    if (!t) {
      t = document.createElement("div");
      t.id = "jg-toast";
      t.className = "jg-toast";
      document.body.appendChild(t);
    }
    t.innerHTML = '<span class="material-symbols-outlined text-[18px] text-secondary-fixed">check_circle</span><span>' + escapeHtml(msg) + '</span>';
    t.classList.add("show");
    clearTimeout(t._timer);
    t._timer = setTimeout(function () { t.classList.remove("show"); }, 2600);
  }

  var Store = {
    getCart: function () { return safeRead(KEYS.CART, []); },
    saveCart: function (cart) { safeWrite(KEYS.CART, cart); emitUpdate("CART"); },
    addToCart: function (productId, qty, variant) {
      var p = getProductById(productId);
      if (!p) return;
      var addQty = Math.max(1, parseInt(qty || 1, 10));
      var varLabel = variant && variant.label ? variant.label : p.pot;
      var extra = variant && variant.extraPrice ? Number(variant.extraPrice) : 0;
      var cartKey = p.id + "::" + varLabel;
      var cart = this.getCart();
      var found = cart.find(function (c) { return c.cartKey === cartKey; });
      if (found) {
        found.qty = Math.min(99, found.qty + addQty);
        found.selected = true;
      } else {
        cart.push({
          cartKey: cartKey, id: p.id, nama: p.nama, latin: p.latin, kategori: p.kategori,
          variant: varLabel, satuan: p.satuan, hargaNum: p.hargaNum + extra,
          hargaLamaNum: p.hargaLamaNum ? p.hargaLamaNum + extra : 0,
          gambar: p.gambar, qty: addQty, note: "", selected: true
        });
      }
      this.saveCart(cart);
    },
    updateQty: function (cartKey, qty) {
      var cart = this.getCart();
      var item = cart.find(function (c) { return c.cartKey === cartKey; });
      if (!item) return;
      item.qty = Math.max(1, Math.min(99, parseInt(qty, 10) || 1));
      this.saveCart(cart);
    },
    updateNote: function (cartKey, note) {
      var cart = this.getCart();
      var item = cart.find(function (c) { return c.cartKey === cartKey; });
      if (!item) return;
      item.note = String(note || "").slice(0, 140);
      this.saveCart(cart);
    },
    toggleSelect: function (cartKey, checked) {
      var cart = this.getCart();
      var item = cart.find(function (c) { return c.cartKey === cartKey; });
      if (!item) return;
      item.selected = Boolean(checked);
      this.saveCart(cart);
    },
    toggleSelectAll: function (checked) {
      var cart = this.getCart().map(function (c) { c.selected = Boolean(checked); return c; });
      this.saveCart(cart);
    },
    removeItem: function (cartKey) {
      this.saveCart(this.getCart().filter(function (c) { return c.cartKey !== cartKey; }));
    },
    removeSelected: function () {
      this.saveCart(this.getCart().filter(function (c) { return c.selected === false; }));
    },
    clearCart: function () { this.saveCart([]); },
    getCartCount: function () {
      return this.getCart().reduce(function (s, c) { return s + (c.qty || 0); }, 0);
    },
    getQtyInCart: function (productId) {
      return this.getCart().reduce(function (s, c) { return c.id === productId ? s + c.qty : s; }, 0);
    },
    getCheckoutItems: function () {
      return this.getCart().filter(function (c) { return c.selected !== false; });
    },
    getPromoCode: function () { return safeRead(KEYS.PROMO, ""); },
    setPromoCode: function (code) {
      var clean = String(code || "").trim().toUpperCase();
      if (!clean) {
        localStorage.removeItem(KEYS.PROMO);
        emitUpdate("PROMO");
        return { ok: true, promo: null };
      }
      if (!PROMOS[clean]) {
        return { ok: false, message: "Kode tidak valid. Coba: JERINESTART atau SUKULENHEMAT" };
      }
      safeWrite(KEYS.PROMO, clean);
      emitUpdate("PROMO");
      return { ok: true, promo: PROMOS[clean] };
    },
    getShippingCost: function (method, subtotal) {
      if (method === "pickup") return 0;
      if (method === "next_day") return 15000;
      return subtotal >= 100000 ? 0 : 25000;
    },
    getShippingLabel: function (method) {
      if (method === "pickup") return "Ambil di Kebun Surabaya";
      if (method === "next_day") return "Ekspedisi Next Day Antar Kota";
      return "Kurir Khusus Tanaman";
    },
    calcTotals: function (items, shippingMethod, useProtection) {
      var list = items || this.getCheckoutItems();
      var subtotal = list.reduce(function (s, it) { return s + (it.hargaNum * it.qty); }, 0);
      var qtyTotal = list.reduce(function (s, it) { return s + it.qty; }, 0);
      var code = this.getPromoCode();
      var promo = code ? PROMOS[code] : null;
      var discount = (promo && subtotal >= promo.minSpend) ? Math.min(subtotal, promo.discount) : 0;
      var ongkir = list.length ? this.getShippingCost(shippingMethod || "courier", subtotal) : 0;
      var protectionFee = (list.length && useProtection) ? 1000 : 0;
      var grandTotal = Math.max(0, subtotal - discount) + ongkir + protectionFee;
      return {
        subtotal: subtotal, qtyTotal: qtyTotal, promo: promo, discount: discount,
        ongkir: ongkir, protectionFee: protectionFee, grandTotal: grandTotal,
        progress: Math.min(100, Math.round((subtotal / 100000) * 100))
      };
    },
    getWishlist: function () { return safeRead(KEYS.WISHLIST, []); },
    isWishlisted: function (id) { return this.getWishlist().indexOf(id) !== -1; },
    toggleWishlist: function (id) {
      var list = this.getWishlist();
      var i = list.indexOf(id);
      var added = i === -1;
      if (added) list.push(id); else list.splice(i, 1);
      safeWrite(KEYS.WISHLIST, list);
      emitUpdate("WISHLIST");
      return added;
    },
    getOrders: function () { return safeRead(KEYS.ORDERS, []); },
    getOrderById: function (id) {
      return this.getOrders().find(function (o) { return o.id === id; }) || null;
    },
    createOrder: function (customer, shippingMethod, paymentMethod, useProtection) {
      var items = this.getCheckoutItems();
      if (!items.length) return null;
      var totals = this.calcTotals(items, shippingMethod, useProtection);
      var now = new Date();
      var ymd = now.toISOString().slice(0, 10).replace(/-/g, "");
      var order = {
        id: "INV-JG-" + ymd + "-" + Math.floor(1000 + Math.random() * 9000),
        createdAt: now.toISOString(),
        status: "PENDING",
        customer: customer,
        shippingKey: shippingMethod,
        shippingMethod: this.getShippingLabel(shippingMethod),
        paymentKey: paymentMethod,
        paymentMethod: paymentMethod === "va" ? "Virtual Account Bank" : paymentMethod === "cod" ? "COD (Bayar di Tempat)" : "QRIS",
        qrisRef: "QRJG" + Date.now().toString().slice(-8),
        promoCode: totals.promo && totals.discount > 0 ? totals.promo.code : "",
        items: items.map(function (it) {
          return {
            id: it.id, nama: it.nama, variant: it.variant, satuan: it.satuan,
            hargaNum: it.hargaNum, qty: it.qty, note: it.note || "", subtotal: it.hargaNum * it.qty
          };
        }),
        subtotal: totals.subtotal,
        discount: totals.discount,
        ongkir: totals.ongkir,
        protectionFee: totals.protectionFee,
        grandTotal: totals.grandTotal,
        paidAt: null, rejectedAt: null, approvalRef: null
      };
      var orders = this.getOrders();
      orders.unshift(order);
      safeWrite(KEYS.ORDERS, orders);
      safeWrite(KEYS.CART, this.getCart().filter(function (c) { return c.selected === false; }));
      localStorage.removeItem(KEYS.PROMO);
      emitUpdate("ORDER_CREATED");
      return order;
    },
    updateOrderStatus: function (orderId, status) {
      var orders = this.getOrders();
      var target = orders.find(function (o) { return o.id === orderId; });
      if (!target) return null;
      target.status = status;
      var nowIso = new Date().toISOString();
      if (status === "PAID") {
        target.paidAt = nowIso;
        target.approvalRef = "APR-" + Math.random().toString(36).substring(2, 8).toUpperCase();
      } else if (status === "REJECTED") {
        target.rejectedAt = nowIso;
      }
      safeWrite(KEYS.ORDERS, orders);
      emitUpdate("ORDER_STATUS");
      return target;
    },
    getUser: function () { return safeRead(KEYS.USER, null); },
    setUser: function (u) {
      if (!u) localStorage.removeItem(KEYS.USER);
      else safeWrite(KEYS.USER, u);
      emitUpdate("USER");
    },
    statusBadge: function (status) {
      if (status === "PAID") return '<span class="status-badge status-paid">&#10003; PAID</span>';
      if (status === "REJECTED") return '<span class="status-badge status-rejected">&#10005; DITOLAK</span>';
      return '<span class="status-badge status-pending"><span class="pulse-dot"></span> MENUNGGU</span>';
    },
    qrisSvg: function (seed) {
      var size = 21, h = 2166136261, s = String(seed || "JERINE-GREEN");
      for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
      function finder(r, c) {
        var tl = r < 7 && c < 7, tr = r < 7 && c >= size - 7, bl = r >= size - 7 && c < 7;
        if (!tl && !tr && !bl) return null;
        var lr = bl ? r - (size - 7) : r, lc = tr ? c - (size - 7) : c;
        return (lr === 0 || lr === 6 || lc === 0 || lc === 6) || (lr >= 2 && lr <= 4 && lc >= 2 && lc <= 4);
      }
      var rects = [];
      for (var r = 0; r < size; r++) {
        for (var c = 0; c < size; c++) {
          var f = finder(r, c), dark = false;
          if (f !== null) dark = f;
          else if ((r === 6 || c === 6) && (r + c) % 2 === 0) dark = true;
          else { h ^= (r * 31 + c * 17); h = Math.imul(h, 16777619); dark = ((h >>> 0) % 10) > 4; }
          if (dark) rects.push('<rect x="' + (c + 1) + '" y="' + (r + 1) + '" width="1" height="1" fill="#161e11"/>');
        }
      }
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" class="w-48 h-48 mx-auto rounded-lg bg-white p-1">' +
        '<rect width="23" height="23" fill="#ffffff"/>' + rects.join("") + '</svg>';
    }
  };

  /* ------------------------------------------------------------------------
     3. ROUTER & HEADER SYNC
     ------------------------------------------------------------------------ */
  var mainEl = document.getElementById("main-content");
  var activeTimers = [];
  var state = {
    homeFilter: "ALL",
    catFilter: [],
    careFilter: "ALL",
    potFilter: ["Pot 8 cm", "Pot 10 cm", "Pot 15 cm"],
    maxPrice: 200000,
    sortBy: "relevant",
    searchQ: "",
    onlyFav: false,
    detailVariant: "terakota",
    detailQty: 1,
    editingNoteKey: null,
    shippingMethod: "courier",
    paymentMethod: "qris",
    useProtection: true,
    historyFilter: "ALL",
    paymentLastStatus: null,
    paymentOrderId: null,
    redirectTimer: null,
    authMode: "login"
  };

  function clearPageTimers() {
    activeTimers.forEach(clearInterval);
    activeTimers = [];
    if (state.redirectTimer) {
      clearInterval(state.redirectTimer);
      state.redirectTimer = null;
    }
  }

  function parseRoute() {
    var raw = (window.location.hash || "#beranda").slice(1);
    var parts = raw.split("?");
    var path = (parts[0] || "beranda").toLowerCase();
    var params = new URLSearchParams(parts[1] || "");
    return { path: path, params: params };
  }

  function go(hash) {
    if (window.location.hash === hash) {
      renderCurrentRoute();
    } else {
      window.location.hash = hash;
    }
  }

  function syncHeaderUI(activePath) {
    var count = Store.getCartCount();
    var elCart = document.getElementById("header-cart-count");
    var elMob = document.getElementById("mobile-cart-count");
    if (elCart) elCart.textContent = count + " Tanaman";
    if (elMob) elMob.textContent = String(count);

    var wishCount = Store.getWishlist().length;
    var elWish = document.getElementById("header-wish-badge");
    if (elWish) {
      elWish.textContent = String(wishCount);
      elWish.classList.toggle("hidden", wishCount === 0);
      elWish.classList.toggle("flex", wishCount > 0);
    }

    var user = Store.getUser();
    var elUser = document.getElementById("header-user-name");
    if (elUser) elUser.textContent = user && user.nama ? user.nama.split(" ")[0] : "Akun";

    document.querySelectorAll("[data-nav]").forEach(function (a) {
      var target = a.getAttribute("data-nav");
      var isAct = target === activePath || (activePath === "detail" && target === "katalog") ||
                  (activePath === "checkout" && target === "keranjang") ||
                  ((activePath === "payment" || activePath === "thank-you") && target === "riwayat");
      a.classList.toggle("active", isAct);
    });
  }

  function renderTicker() {
    var el = document.getElementById("ticker-track");
    if (!el) return;
    var words = CATEGORIES.map(function (c) { return c.nama; }).concat(["Pot Terakota", "Media Porous", "Garansi Hidup 100%", "Packing Aman Berlapis"]);
    el.innerHTML = words.concat(words).map(function (w) {
      return '<span class="ticker-item"><span class="material-symbols-outlined text-[15px]">eco</span>' + escapeHtml(w) + '</span>';
    }).join("");
  }

  /* ------------------------------------------------------------------------
     4. VIEWS RENDERERS
     ------------------------------------------------------------------------ */
  function productCardHtml(p, compactMode) {
    var inCart = Store.getQtyInCart(p.id);
    var wished = Store.isWishlisted(p.id);
    var disc = p.hargaLamaNum ? Math.round(((p.hargaLamaNum - p.hargaNum) / p.hargaLamaNum) * 100) : 0;
    return (
      '<div class="group rounded-[1.75rem] bg-surface-container-lowest p-4 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between border border-surface-container-highest/60">' +
      '  <div>' +
      '    <div class="relative w-full aspect-square rounded-2xl overflow-hidden bg-surface-container mb-3">' +
      '      <a href="#detail?id=' + encodeURIComponent(p.id) + '" class="block w-full h-full">' +
      '        <img src="' + escapeHtml(p.gambar) + '" alt="' + escapeHtml(p.nama) + '" onerror="jgImgErr(this,\'' + escapeHtml(p.id) + '\')" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />' +
      '      </a>' +
      (disc > 0
        ? '<span class="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-primary text-on-primary text-[10px] font-extrabold">-' + disc + '%</span>'
        : '<span class="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-surface-container-lowest/90 text-primary text-[10px] font-bold">' + escapeHtml(p.kategori) + '</span>') +
      '      <button type="button" data-wish="' + escapeHtml(p.id) + '" class="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-surface-container-lowest/90 flex items-center justify-center ' + (wished ? 'text-error' : 'text-outline hover:text-error') + ' cursor-pointer">' +
      '        <span class="material-symbols-outlined text-[18px]">' + (wished ? 'favorite' : 'favorite_border') + '</span>' +
      '      </button>' +
      '      <span class="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-on-surface/70 text-surface text-[10px] flex items-center gap-1">' +
      '        <span class="material-symbols-outlined text-secondary-fixed text-[12px]">wb_sunny</span>' + escapeHtml(p.cahaya) +
      '      </span>' +
      '    </div>' +
      '    <div class="flex items-center justify-between text-[11px] text-outline mb-0.5">' +
      '      <span>' + escapeHtml(p.pot) + '</span>' +
      '      <span class="text-amber-600 font-bold">&#9733; ' + p.rating + '</span>' +
      '    </div>' +
      '    <a href="#detail?id=' + encodeURIComponent(p.id) + '" class="block text-sm text-on-surface font-bold hover:text-primary line-clamp-1">' + escapeHtml(p.nama) + '</a>' +
      '    <p class="text-[11px] italic text-outline truncate mb-2">' + escapeHtml(p.latin) + '</p>' +
      '    <div class="flex items-baseline gap-2">' +
      '      <span class="text-base font-extrabold text-primary">' + formatRupiah(p.hargaNum) + '</span>' +
      (p.hargaLamaNum ? '<span class="text-xs text-outline line-through">' + formatRupiah(p.hargaLamaNum) + '</span>' : '') +
      '    </div>' +
      '  </div>' +
      '  <div class="mt-3 pt-3 border-t border-surface-container flex items-center gap-2">' +
      '    <button type="button" data-add="' + escapeHtml(p.id) + '" class="flex-1 py-2.5 px-3 rounded-full bg-secondary-container hover:bg-primary text-on-secondary-container hover:text-on-primary text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer">' +
      '      <span class="material-symbols-outlined text-[16px]">add_shopping_cart</span>' +
      '      <span>' + (inCart > 0 ? '+ Lagi (' + inCart + ')' : '+ Keranjang') + '</span>' +
      '    </button>' +
      (compactMode ? '' :
        '<button type="button" data-buy="' + escapeHtml(p.id) + '" title="Beli Langsung" class="w-9 h-9 rounded-full bg-primary text-on-primary hover:bg-primary-container flex items-center justify-center shrink-0 cursor-pointer">' +
        '  <span class="material-symbols-outlined text-[17px]">flash_on</span>' +
        '</button>') +
      '  </div>' +
      '</div>'
    );
  }

  /* ---------- VIEW: BERANDA ---------- */
  function renderHome() {
    var flashItems = PLANTS_ONLY.filter(function (p) { return p.flashSale; }).slice(0, 5);
    var recItems = PLANTS_ONLY.filter(function (p) {
      if (state.homeFilter === "ALL") return true;
      if (state.homeFilter === "Mudah") return p.level === "Mudah";
      return p.kategori === state.homeFilter;
    }).slice(0, 10);

    mainEl.innerHTML =
      '<section class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-8 pb-10">' +
      '  <div class="grid grid-cols-1 xl:grid-cols-12 gap-6 items-stretch">' +
      '    <div class="xl:col-span-8 relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-surface-container via-surface-container-lowest to-surface-container p-7 lg:p-11 shadow-sm border border-surface-container-highest/60 flex flex-col justify-between min-h-[410px]">' +
      '      <div class="flex flex-wrap items-center gap-3">' +
      '        <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary text-on-primary text-xs font-bold uppercase tracking-wider"><span class="material-symbols-outlined text-[16px]">spa</span> Koleksi Nursery Unggulan</span>' +
      '        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-secondary text-xs font-semibold border border-outline-variant/30"><span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span> Garansi 100% Tiba Hidup</span>' +
      '      </div>' +
      '      <div class="my-6 max-w-xl">' +
      '        <h1 class="text-3xl lg:text-[40px] font-extrabold tracking-tight text-on-surface leading-[1.18]">Sukulen &amp; Kaktus Eksotis <br/><span class="text-primary underline decoration-secondary-fixed decoration-wavy decoration-2">Berakar Sehat</span>, Estetik untuk Ruang Anda!</h1>' +
      '        <p class="text-sm lg:text-base text-on-surface-variant mt-3 leading-relaxed">Dipelihara di kebun Lembang &amp; Surabaya dengan media porous steril lengkap dengan pot terakota. Siap dipajang dan dikirim aman ke seluruh Indonesia.</p>' +
      '      </div>' +
      '      <div class="flex flex-wrap items-center gap-3.5">' +
      '        <a href="#katalog" class="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-on-primary text-sm font-bold shadow-md hover:bg-primary-container transition-all"><span>Pilih Koleksi Sukulen</span><span class="material-symbols-outlined text-[18px]">arrow_forward</span></a>' +
      '        <button type="button" onclick="document.getElementById(\'flash-sale-box\').scrollIntoView({behavior:\'smooth\'})" class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-surface-container text-on-surface text-sm font-semibold border border-outline-variant/40 cursor-pointer"><span class="material-symbols-outlined text-primary text-[18px]">yard</span><span>Promo Adopsi Hari Ini</span></button>' +
      '      </div>' +
      '    </div>' +
      '    <div class="xl:col-span-4 flex flex-col gap-4">' +
      '      <div class="flex-1 p-5 rounded-[2rem] bg-white shadow-sm border border-surface-container-highest/60 flex items-start gap-4"><div class="w-12 h-12 rounded-2xl bg-secondary-container text-primary flex items-center justify-center shrink-0"><span class="material-symbols-outlined text-[26px]">inventory_2</span></div><div><h3 class="text-base font-bold">Packing Aman Berlapis</h3><p class="text-xs text-on-surface-variant mt-1">Dikemas khusus agar tanaman &amp; pot terakota tetap utuh selama ekspedisi.</p></div></div>' +
      '      <div class="flex-1 p-5 rounded-[2rem] bg-white shadow-sm border border-surface-container-highest/60 flex items-start gap-4"><div class="w-12 h-12 rounded-2xl bg-secondary-container text-primary flex items-center justify-center shrink-0"><span class="material-symbols-outlined text-[26px]">verified</span></div><div><h3 class="text-base font-bold">Tanaman Sehat Terawat</h3><p class="text-xs text-on-surface-variant mt-1">Berakar kuat hasil budidaya kebun Lembang &amp; Surabaya, garansi ganti baru.</p></div></div>' +
      '      <div class="flex-1 p-5 rounded-[2rem] bg-white shadow-sm border border-surface-container-highest/60 flex items-start gap-4"><div class="w-12 h-12 rounded-2xl bg-secondary-container text-primary flex items-center justify-center shrink-0"><span class="material-symbols-outlined text-[26px]">volunteer_activism</span></div><div><h3 class="text-base font-bold">Panduan Perawatan Lengkap</h3><p class="text-xs text-on-surface-variant mt-1">Informasi cahaya &amp; jadwal siram tersedia lengkap di tiap detail varietas.</p></div></div>' +
      '    </div>' +
      '  </div>' +
      '</section>' +
      '<section class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-6">' +
      '  <div class="flex items-center justify-between mb-6 flex-wrap gap-2"><div><span class="text-xs text-primary font-bold uppercase tracking-wider">Eksplorasi Taksonomi</span><h2 class="text-2xl font-bold mt-0.5">6 Kategori Tanaman Pilihan</h2></div><a href="#katalog" class="text-xs text-primary font-bold bg-surface-container-low px-4 py-2 rounded-full border border-surface-container-highest">Katalog Lengkap &rarr;</a></div>' +
      '  <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">' +
           CATEGORIES.map(function (c) {
             return '<a href="#katalog?kategori=' + encodeURIComponent(c.nama) + '" class="group flex flex-col items-center p-5 rounded-[1.75rem] bg-white hover:bg-secondary-container/30 transition-all shadow-sm text-center border border-surface-container-highest/60">' +
               '<div class="w-14 h-14 rounded-2xl bg-secondary-container group-hover:bg-primary group-hover:text-white text-primary flex items-center justify-center transition-colors mb-3"><span class="material-symbols-outlined text-[28px]">' + c.icon + '</span></div>' +
               '<span class="text-sm font-bold">' + escapeHtml(c.nama) + '</span>' +
               '<span class="text-[11px] text-outline mt-1">' + getCategoryCount(c.nama) + ' varietas</span></a>';
           }).join("") +
      '  </div>' +
      '</section>' +
      '<section id="flash-sale-box" class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8">' +
      '  <div class="rounded-[2.5rem] bg-surface-container-low p-6 lg:p-8 border border-surface-container-highest">' +
      '    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-surface-container-highest/70">' +
      '      <div class="flex flex-wrap items-center gap-4"><div class="w-10 h-10 rounded-2xl bg-tertiary-container text-white flex items-center justify-center"><span class="material-symbols-outlined">flash_on</span></div><div><h2 class="text-xl lg:text-2xl font-bold">Promo Adopsi Kilat Minggu Ini</h2><p class="text-xs text-on-surface-variant">Stok sortir nursery siap kirim hari ini</p></div><div class="flex items-center gap-1.5 bg-white px-4 py-2 rounded-full border border-surface-container-highest text-xs font-extrabold"><span id="fs-h">01</span>:<span id="fs-m">38</span>:<span id="fs-s" class="px-1.5 py-0.5 rounded bg-primary text-white">45</span></div></div>' +
      '      <a href="#katalog" class="px-5 py-2.5 rounded-full bg-white text-primary text-xs font-bold border border-outline-variant/40 self-start">Lihat Semua &rarr;</a>' +
      '    </div>' +
      '    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 pt-6">' +
             flashItems.map(function (p) { return productCardHtml(p, true); }).join("") +
      '    </div>' +
      '  </div>' +
      '</section>' +
      '<section class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4">' +
      '  <div class="rounded-[2.5rem] bg-gradient-to-r from-primary via-primary-container to-secondary p-8 text-on-primary flex flex-col lg:flex-row items-center justify-between gap-6 shadow-lg">' +
      '    <div class="flex items-center gap-5"><div class="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center shrink-0"><span class="material-symbols-outlined text-secondary-fixed text-[32px]">potted_plant</span></div><div><span class="px-3 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-[11px] font-extrabold uppercase">Kupon Adopsi Perdana</span><h3 class="text-xl lg:text-2xl font-extrabold mt-1">Potongan Rp 10.000 &amp; Bonus Kartu Rawat</h3><p class="text-xs text-surface-container mt-0.5">Minimal belanja Rp 30.000 di keranjang.</p></div></div>' +
      '    <div class="flex items-center gap-3"><div class="px-5 py-2.5 rounded-full bg-white/15 border border-dashed border-white/40 font-mono font-extrabold text-secondary-fixed">JERINESTART</div><button id="btn-claim-coupon" type="button" class="px-6 py-3 rounded-full bg-white text-primary hover:bg-secondary-fixed text-xs font-bold cursor-pointer">Klaim &amp; Pasang</button></div>' +
      '  </div>' +
      '</section>' +
      '<section class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10">' +
      '  <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-7">' +
      '    <div><span class="text-xs text-primary font-bold uppercase tracking-wider">Pilihan Favorit Nursery</span><h2 class="text-2xl font-bold mt-0.5">Rekomendasi Tanaman Terlaris</h2></div>' +
      '    <div class="flex flex-wrap gap-2">' +
             ["ALL", "Roset", "Kaktus Bulat", "Mudah"].map(function (f) {
               var label = f === "ALL" ? "Semua Koleksi" : f === "Mudah" ? "Mudah Dirawat" : f;
               var act = state.homeFilter === f;
               return '<button type="button" data-home-filter="' + f + '" class="px-4 py-2 rounded-full text-xs font-bold cursor-pointer ' + (act ? 'bg-primary text-white shadow-sm' : 'bg-white text-on-surface-variant border border-surface-container-highest') + '">' + label + '</button>';
             }).join("") +
      '    </div>' +
      '  </div>' +
      '  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">' +
           recItems.map(function (p) { return productCardHtml(p, true); }).join("") +
      '  </div>' +
      '</section>';

    var sec = 5805;
    activeTimers.push(setInterval(function () {
      var h = document.getElementById("fs-h"), m = document.getElementById("fs-m"), s = document.getElementById("fs-s");
      if (!h || !m || !s || sec <= 0) return;
      sec--;
      h.textContent = String(Math.floor(sec / 3600)).padStart(2, "0");
      m.textContent = String(Math.floor((sec % 3600) / 60)).padStart(2, "0");
      s.textContent = String(sec % 60).padStart(2, "0");
    }, 1000));
  }

  /* ---------- VIEW: KATALOG & FILTER ---------- */
  function getCatalogFiltered() {
    var q = state.searchQ.toLowerCase();
    var list = PLANTS_ONLY.filter(function (p) {
      if (state.onlyFav && !Store.isWishlisted(p.id)) return false;
      if (state.catFilter.length && state.catFilter.indexOf(p.kategori) === -1) return false;
      if (state.potFilter.length && state.potFilter.indexOf(p.pot) === -1) return false;
      if (state.careFilter !== "ALL" && p.level !== state.careFilter) return false;
      if (p.hargaNum > state.maxPrice) return false;
      if (q && (p.nama + " " + p.latin + " " + p.kategori + " " + p.deskripsi).toLowerCase().indexOf(q) === -1) return false;
      return true;
    });
    if (state.sortBy === "price-asc") list.sort(function (a, b) { return a.hargaNum - b.hargaNum; });
    else if (state.sortBy === "price-desc") list.sort(function (a, b) { return b.hargaNum - a.hargaNum; });
    else if (state.sortBy === "discount") list.sort(function (a, b) { return (b.hargaLamaNum - b.hargaNum) - (a.hargaLamaNum - a.hargaNum); });
    return list;
  }

  function updateCatalogResultsOnly() {
    var grid = document.getElementById("cat-results-grid");
    var cnt = document.getElementById("cat-results-count");
    if (!grid || !cnt) return;
    var list = getCatalogFiltered();
    var info = "Menampilkan <strong>" + list.length + "</strong> spesimen pilihan";
    if (state.searchQ) info += ' untuk "' + escapeHtml(state.searchQ) + '"';
    if (state.onlyFav) info += " (Daftar Favorit)";
    cnt.innerHTML = info;
    grid.innerHTML = list.length
      ? list.map(function (p) { return productCardHtml(p, false); }).join("")
      : '<div class="col-span-full p-12 rounded-3xl bg-white border border-surface-container text-center"><span class="material-symbols-outlined text-[42px] text-outline">search_off</span><h3 class="font-bold text-lg mt-2">Tidak ada tanaman yang cocok</h3><p class="text-xs text-outline mt-1">Klik Reset Semua untuk melihat seluruh koleksi.</p></div>';
  }

  function renderCatalog() {
    mainEl.innerHTML =
      '<div class="w-full bg-white border-b border-surface-container"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-3 flex flex-wrap items-center justify-between gap-2 text-xs"><div class="flex items-center gap-2 text-on-surface-variant"><a href="#beranda" class="hover:text-primary">Jerine Green</a><span>/</span><span class="text-primary font-bold uppercase">Katalog Sukulen &amp; Kaktus</span></div><span class="text-secondary font-semibold">Garansi Akar Sehat &amp; Packing Aman Berlapis</span></div></div>' +
      '<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 flex flex-col lg:flex-row gap-8 items-start">' +
      '  <aside class="w-full lg:w-[270px] shrink-0 lg:sticky lg:top-24 bg-white rounded-2xl border border-surface-container shadow-sm p-5 space-y-5">' +
      '    <div class="flex items-center justify-between pb-3 border-b border-surface-container"><span class="font-bold flex items-center gap-1.5"><span class="material-symbols-outlined text-primary text-[20px]">filter_vintage</span> Filter Tanaman</span><button type="button" id="btn-reset-cat" class="text-xs text-primary font-bold hover:underline cursor-pointer">Reset Semua</button></div>' +
      '    <div class="space-y-2 text-sm"><span class="font-bold block">Kategori</span>' +
             CATEGORIES.map(function (c) {
               var chk = state.catFilter.length === 0 || state.catFilter.indexOf(c.nama) !== -1;
               return '<label class="flex items-center justify-between cursor-pointer"><span class="flex items-center gap-2"><input type="checkbox" class="f-cat accent-primary rounded" value="' + escapeHtml(c.nama) + '" ' + (chk ? 'checked' : '') + '/><span>' + escapeHtml(c.nama) + '</span></span><span class="text-xs font-bold px-2 py-0.5 rounded-full bg-surface-container">' + getCategoryCount(c.nama) + '</span></label>';
             }).join("") +
      '    </div>' +
      '    <div class="space-y-2 pt-4 border-t border-surface-container text-sm"><span class="font-bold block">Perawatan</span>' +
             ["ALL", "Mudah", "Menengah", "Kolektor"].map(function (lv) {
               return '<label class="flex items-center gap-2 cursor-pointer"><input type="radio" name="f-care" value="' + lv + '" ' + (state.careFilter === lv ? 'checked' : '') + ' class="accent-primary"/><span>' + (lv === "ALL" ? "Semua Level" : lv) + '</span></label>';
             }).join("") +
      '    </div>' +
      '    <div class="space-y-2 pt-4 border-t border-surface-container text-xs"><span class="text-sm font-bold block">Ukuran Pot</span><div class="grid grid-cols-3 gap-2">' +
             ["Pot 8 cm", "Pot 10 cm", "Pot 15 cm"].map(function (pt) {
               var chk = state.potFilter.indexOf(pt) !== -1;
               return '<label class="p-2 rounded-xl bg-surface-container-low text-center cursor-pointer"><input type="checkbox" class="f-pot accent-primary mb-1" value="' + pt + '" ' + (chk ? 'checked' : '') + '/><div class="font-bold">' + pt.replace("Pot ", "") + '</div></label>';
             }).join("") +
      '    </div></div>' +
      '    <div class="space-y-2 pt-4 border-t border-surface-container"><span class="text-sm font-bold block">Maksimal Harga</span><input id="f-price" type="range" min="15000" max="200000" step="5000" value="' + state.maxPrice + '" class="w-full accent-primary cursor-pointer"/><div class="flex justify-between text-xs font-bold text-primary"><span>Rp 15.000</span><span id="f-price-lbl">' + formatRupiah(state.maxPrice) + '</span></div></div>' +
      '  </aside>' +
      '  <div class="flex-1 w-full min-w-0 space-y-5">' +
      '    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-white border border-surface-container shadow-sm">' +
      '      <div><h1 class="text-xl lg:text-2xl font-bold">Katalog Sukulen &amp; Kaktus Koleksi</h1><p id="cat-results-count" class="text-xs text-on-surface-variant mt-1"></p></div>' +
      '      <select id="f-sort" class="rounded-xl bg-surface-container-low border-none text-xs font-bold px-3 py-2 cursor-pointer">' +
      '        <option value="relevant" ' + (state.sortBy === "relevant" ? "selected" : "") + '>Paling Favorit</option>' +
      '        <option value="price-asc" ' + (state.sortBy === "price-asc" ? "selected" : "") + '>Harga Terendah</option>' +
      '        <option value="price-desc" ' + (state.sortBy === "price-desc" ? "selected" : "") + '>Harga Tertinggi</option>' +
      '        <option value="discount" ' + (state.sortBy === "discount" ? "selected" : "") + '>Diskon Terbesar</option>' +
      '      </select>' +
      '    </div>' +
      '    <div id="cat-results-grid" class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5"></div>' +
      '  </div>' +
      '</div>';

    updateCatalogResultsOnly();

    mainEl.querySelectorAll(".f-cat, .f-pot, input[name='f-care']").forEach(function (el) {
      el.addEventListener("change", function () {
        state.catFilter = Array.from(mainEl.querySelectorAll(".f-cat:checked")).map(function (c) { return c.value; });
        state.potFilter = Array.from(mainEl.querySelectorAll(".f-pot:checked")).map(function (c) { return c.value; });
        state.careFilter = mainEl.querySelector("input[name='f-care']:checked").value;
        updateCatalogResultsOnly();
      });
    });

    var priceEl = document.getElementById("f-price");
    if (priceEl) {
      priceEl.addEventListener("input", function (e) {
        state.maxPrice = parseInt(e.target.value, 10);
        document.getElementById("f-price-lbl").textContent = formatRupiah(state.maxPrice);
        updateCatalogResultsOnly();
      });
    }

    var sortEl = document.getElementById("f-sort");
    if (sortEl) {
      sortEl.addEventListener("change", function (e) {
        state.sortBy = e.target.value;
        updateCatalogResultsOnly();
      });
    }

    var resetBtn = document.getElementById("btn-reset-cat");
    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        state.catFilter = [];
        state.potFilter = ["Pot 8 cm", "Pot 10 cm", "Pot 15 cm"];
        state.careFilter = "ALL";
        state.maxPrice = 200000;
        state.searchQ = "";
        state.onlyFav = false;
        renderCatalog();
      });
    }
  }

  /* ---------- VIEW: DETAIL TANAMAN ---------- */
  function renderDetail(id) {
    var p = getProductById(id) || PLANTS_ONLY[0];
    var variants = [
      { key: "terakota", label: p.pot + " (Pot Terakota)", extraPrice: 0 },
      { key: "keramik", label: p.pot + " (Pot Keramik Pastel)", extraPrice: 12000 },
      { key: "bareroot", label: "Bare Root (Tanpa Pot)", extraPrice: 0 }
    ];
    var sel = variants.find(function (v) { return v.key === state.detailVariant; }) || variants[0];
    var finalPrice = p.hargaNum + sel.extraPrice;

    mainEl.innerHTML =
      '<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8">' +
      '  <nav class="flex items-center gap-2 text-xs text-on-surface-variant mb-6"><a href="#beranda" class="hover:text-primary">Beranda</a><span>/</span><a href="#katalog?kategori=' + encodeURIComponent(p.kategori) + '" class="hover:text-primary">' + escapeHtml(p.kategori) + '</a><span>/</span><span class="text-primary font-bold">' + escapeHtml(p.nama) + '</span></nav>' +
      '  <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">' +
      '    <div class="lg:col-span-5 space-y-4">' +
      '      <div class="aspect-square rounded-[2rem] overflow-hidden bg-white border border-surface-container shadow-sm p-4">' +
      '        <img src="' + escapeHtml(p.gambar) + '" alt="' + escapeHtml(p.nama) + '" onerror="jgImgErr(this,\'' + escapeHtml(p.id) + '\')" class="w-full h-full object-cover rounded-2xl"/>' +
      '      </div>' +
      '      <div class="grid grid-cols-3 gap-3">' +
      '        <div class="p-3 rounded-2xl bg-white border border-surface-container text-center"><span class="text-[11px] text-outline block">Cahaya</span><strong class="text-xs">' + escapeHtml(p.cahaya) + '</strong></div>' +
      '        <div class="p-3 rounded-2xl bg-white border border-surface-container text-center"><span class="text-[11px] text-outline block">Siram</span><strong class="text-xs">' + escapeHtml(p.siram) + '</strong></div>' +
      '        <div class="p-3 rounded-2xl bg-white border border-surface-container text-center"><span class="text-[11px] text-outline block">Perawatan</span><strong class="text-xs text-primary">' + escapeHtml(p.level) + '</strong></div>' +
      '      </div>' +
      '    </div>' +
      '    <div class="lg:col-span-7 bg-white rounded-[2rem] p-6 sm:p-8 border border-surface-container shadow-sm space-y-5">' +
      '      <div class="flex flex-wrap items-center gap-2"><span class="px-3 py-1 rounded-full bg-secondary-container text-primary text-xs font-bold">' + escapeHtml(p.kategori) + '</span><span class="px-3 py-1 rounded-full bg-surface-container text-xs font-semibold">Stok: ' + p.stok + ' • ' + escapeHtml(p.asal) + '</span></div>' +
      '      <div><h1 class="text-2xl sm:text-3xl font-extrabold">' + escapeHtml(p.nama) + '</h1><p class="text-sm italic text-outline mt-1">' + escapeHtml(p.latin) + '</p></div>' +
      '      <div class="flex items-baseline gap-3 pb-4 border-b border-surface-container"><span class="text-3xl font-extrabold text-primary">' + formatRupiah(finalPrice) + '</span>' + (p.hargaLamaNum ? '<span class="text-base text-outline line-through">' + formatRupiah(p.hargaLamaNum + sel.extraPrice) + '</span>' : '') + '</div>' +
      '      <p class="text-sm text-on-surface-variant leading-relaxed">' + escapeHtml(p.deskripsi) + '</p>' +
      '      <div><span class="text-xs font-bold uppercase tracking-wider block mb-2">Pilih Kemasan Pot</span><div class="flex flex-wrap gap-2">' +
               variants.map(function (v) {
                 var act = v.key === sel.key;
                 return '<button type="button" data-dvar="' + v.key + '" class="px-4 py-2 rounded-full text-xs font-bold border cursor-pointer ' + (act ? 'bg-primary text-white border-primary' : 'bg-surface-container-low border-outline-variant/40') + '">' + escapeHtml(v.label) + (v.extraPrice ? ' (+Rp ' + v.extraPrice.toLocaleString("id-ID") + ')' : '') + '</button>';
               }).join("") +
      '      </div></div>' +
      '      <div class="flex flex-wrap items-center gap-3 pt-2">' +
      '        <div class="flex items-center rounded-full bg-surface-container-low p-1 border border-outline-variant/30"><button type="button" id="d-dec" class="w-9 h-9 rounded-full bg-white font-bold cursor-pointer">-</button><span class="w-10 text-center font-extrabold">' + state.detailQty + '</span><button type="button" id="d-inc" class="w-9 h-9 rounded-full bg-white font-bold cursor-pointer">+</button></div>' +
      '        <button type="button" id="d-add" class="flex-1 h-12 px-6 rounded-full bg-primary hover:bg-primary-container text-white text-sm font-bold flex items-center justify-center gap-2 shadow-md cursor-pointer"><span class="material-symbols-outlined text-[20px]">add_shopping_cart</span><span>+ Tambah ke Keranjang</span></button>' +
      '        <button type="button" id="d-buy" class="h-12 px-6 rounded-full bg-secondary-container hover:bg-secondary-fixed text-on-secondary-fixed text-sm font-bold cursor-pointer">Beli Langsung</button>' +
      '      </div>' +
      '      <div class="p-4 rounded-2xl bg-secondary-container/40 border border-secondary-fixed text-xs text-on-secondary-fixed space-y-1">' +
      '        <div class="font-bold">Panduan Perawatan Singkat</div>' +
      '        <p>&bull; Siram saat media tanam benar-benar kering (' + escapeHtml(p.siram) + ').</p>' +
      '        <p>&bull; Penempatan ideal: ' + escapeHtml(p.cahaya) + ' dengan sirkulasi udara baik.</p>' +
      '      </div>' +
      '    </div>' +
      '  </div>' +
      '</div>';

    mainEl.querySelectorAll("[data-dvar]").forEach(function (b) {
      b.addEventListener("click", function () { state.detailVariant = b.getAttribute("data-dvar"); renderDetail(p.id); });
    });
    document.getElementById("d-dec").addEventListener("click", function () { state.detailQty = Math.max(1, state.detailQty - 1); renderDetail(p.id); });
    document.getElementById("d-inc").addEventListener("click", function () { state.detailQty = Math.min(99, state.detailQty + 1); renderDetail(p.id); });
    document.getElementById("d-add").addEventListener("click", function () { Store.addToCart(p.id, state.detailQty, sel); showToast(p.nama + " masuk keranjang!"); });
    document.getElementById("d-buy").addEventListener("click", function () { Store.addToCart(p.id, state.detailQty, sel); go("#checkout"); });
  }

  /* ---------- VIEW: KERANJANG BELANJA ---------- */
  function renderCart() {
    var cart = Store.getCart();
    if (!cart.length) {
      mainEl.innerHTML =
        '<div class="max-w-2xl mx-auto px-4 py-12"><div class="bg-white rounded-3xl p-12 text-center border border-outline-variant/30 shadow-sm">' +
        '  <div class="w-16 h-16 rounded-2xl bg-secondary-container text-primary flex items-center justify-center mx-auto mb-4"><span class="material-symbols-outlined text-[34px]">shopping_bag</span></div>' +
        '  <h2 class="text-xl font-bold">Keranjang Belanja Masih Kosong</h2>' +
        '  <p class="text-sm text-outline mt-1 mb-6">Silakan pilih koleksi sukulen atau kaktus favorit Anda terlebih dahulu.</p>' +
        '  <a href="#katalog" class="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-white text-sm font-bold shadow-md">Buka Katalog Tanaman</a>' +
        '</div></div>';
      return;
    }

    var selected = Store.getCheckoutItems();
    var totals = Store.calcTotals(selected, "courier", false);
    var allChecked = cart.every(function (c) { return c.selected !== false; });
    var remFree = Math.max(0, 100000 - totals.subtotal);
    var accList = ALL_PRODUCTS.filter(function (p) { return p.isAccessory; });

    mainEl.innerHTML =
      '<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 space-y-6">' +
      '  <div class="bg-secondary-container/85 border border-secondary-fixed rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">' +
      '    <div class="flex items-center gap-4"><div class="w-11 h-11 rounded-2xl bg-primary text-white flex items-center justify-center shrink-0"><span class="material-symbols-outlined">local_shipping</span></div><div><div class="font-bold text-on-secondary-fixed">' + (remFree === 0 ? 'Gratis Ongkir Box Botani Aktif!' : 'Tambah ' + formatRupiah(remFree) + ' lagi untuk Gratis Ongkir!') + '</div><p class="text-xs text-on-secondary-container">Gratis ongkir box bersekat &amp; dakron untuk minimal belanja Rp 100.000.</p></div></div>' +
      '    <div class="w-full md:w-60"><div class="flex justify-between text-xs font-bold mb-1"><span>Target</span><span>' + totals.progress + '%</span></div><div class="w-full h-2.5 bg-white rounded-full overflow-hidden p-0.5"><div class="h-full bg-primary rounded-full" style="width:' + totals.progress + '%"></div></div></div>' +
      '  </div>' +
      '  <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">' +
      '    <div class="lg:col-span-8 space-y-4">' +
      '      <div class="bg-white rounded-2xl p-4 shadow-sm border border-outline-variant/30 flex flex-wrap items-center justify-between gap-2">' +
      '        <label class="flex items-center gap-3 cursor-pointer"><input id="c-sel-all" type="checkbox" ' + (allChecked ? 'checked' : '') + ' class="w-5 h-5 rounded accent-primary"/><span class="text-sm font-bold">Pilih Semua Koleksi (' + cart.length + ')</span></label>' +
      '        <div class="flex items-center gap-2"><button id="c-del-sel" type="button" class="text-xs font-bold text-outline hover:text-error px-3 py-1 rounded-full hover:bg-error-container/40 cursor-pointer">Hapus Dipilih</button><button id="c-clear" type="button" class="text-xs font-bold text-error px-3 py-1 rounded-full hover:bg-error-container/40 cursor-pointer">Kosongkan</button></div>' +
      '      </div>' +
             cart.map(function (it) {
               var editing = state.editingNoteKey === it.cartKey;
               return (
                 '<div class="bg-white rounded-2xl p-5 shadow-sm border border-outline-variant/30 space-y-3">' +
                 '  <div class="flex items-start gap-4">' +
                 '    <input type="checkbox" data-cchk="' + escapeHtml(it.cartKey) + '" ' + (it.selected !== false ? 'checked' : '') + ' class="mt-2 w-5 h-5 rounded accent-primary cursor-pointer"/>' +
                 '    <a href="#detail?id=' + encodeURIComponent(it.id) + '" class="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-surface-container-low shrink-0 border border-outline-variant/40"><img src="' + escapeHtml(it.gambar) + '" alt="' + escapeHtml(it.nama) + '" onerror="jgImgErr(this,\'' + escapeHtml(it.id) + '\')" class="w-full h-full object-cover"/></a>' +
                 '    <div class="flex-1 min-w-0">' +
                 '      <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-1">' +
                 '        <div><span class="text-[10px] font-bold uppercase bg-secondary-container text-primary px-2 py-0.5 rounded-full">' + escapeHtml(it.kategori) + '</span><a href="#detail?id=' + encodeURIComponent(it.id) + '" class="block font-bold hover:text-primary mt-1">' + escapeHtml(it.nama) + '</a><p class="text-xs text-outline">' + escapeHtml(it.variant) + ' ' + escapeHtml(it.satuan) + '</p></div>' +
                 '        <div class="sm:text-right"><div class="font-extrabold text-primary">' + formatRupiah(it.hargaNum * it.qty) + '</div><span class="text-[11px] text-outline">' + formatRupiah(it.hargaNum) + '/pcs</span></div>' +
                 '      </div>' +
                 '      <div class="flex items-center justify-between gap-3 pt-3">' +
                 '        <button type="button" data-crem="' + escapeHtml(it.cartKey) + '" class="text-xs text-outline hover:text-error flex items-center gap-1 cursor-pointer"><span class="material-symbols-outlined text-[18px]">delete_outline</span> Hapus</button>' +
                 '        <div class="flex items-center rounded-full bg-surface-container-low p-1 gap-1 border border-outline-variant/30">' +
                 '          <button type="button" data-cdec="' + escapeHtml(it.cartKey) + '" class="w-8 h-8 rounded-full bg-white font-bold cursor-pointer">-</button>' +
                 '          <input type="number" min="1" max="99" value="' + it.qty + '" data-cqty="' + escapeHtml(it.cartKey) + '" class="w-11 text-center bg-transparent border-none text-sm font-extrabold focus:ring-0 p-0"/>' +
                 '          <button type="button" data-cinc="' + escapeHtml(it.cartKey) + '" class="w-8 h-8 rounded-full bg-white font-bold cursor-pointer">+</button>' +
                 '        </div>' +
                 '      </div>' +
                 '    </div>' +
                 '  </div>' +
                 '  <div class="pt-3 border-t border-surface-container flex items-center gap-2 text-xs">' +
                 '    <span class="material-symbols-outlined text-primary text-[18px]">edit_note</span>' +
                 (editing
                   ? '<input id="c-note-inp" type="text" value="' + escapeHtml(it.note || "") + '" placeholder="Catatan untuk nursery/kurir..." class="flex-1 bg-surface-container-low rounded-xl px-3 py-1.5 text-xs border border-outline-variant/40"/><button type="button" data-csavenote="' + escapeHtml(it.cartKey) + '" class="px-3 py-1.5 rounded-xl bg-primary text-white font-bold cursor-pointer">Simpan</button>'
                   : '<div class="flex-1 bg-surface-container-low rounded-xl px-3 py-1.5 flex items-center justify-between"><span class="italic text-on-surface-variant truncate">' + (it.note ? '"' + escapeHtml(it.note) + '"' : 'Belum ada catatan') + '</span><button type="button" data-ceditnote="' + escapeHtml(it.cartKey) + '" class="text-primary font-bold hover:underline ml-2 cursor-pointer">Ubah Catatan</button></div>') +
                 '  </div>' +
                 '</div>'
               );
             }).join("") +
      '      <div class="bg-white rounded-2xl p-5 shadow-sm border border-outline-variant/30 space-y-3">' +
      '        <h4 class="font-bold flex items-center gap-2"><span class="material-symbols-outlined text-primary">recommend</span> Sering Dibeli Bersama</h4>' +
      '        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">' +
                 accList.map(function (a) {
                   return '<div class="bg-surface-container-low rounded-2xl p-3 flex items-center gap-3"><img src="' + escapeHtml(a.gambar) + '" onerror="jgImgErr(this,\'' + escapeHtml(a.id) + '\')" class="w-14 h-14 rounded-xl object-cover shrink-0"/><div class="flex-1 min-w-0"><div class="text-sm font-bold truncate">' + escapeHtml(a.nama) + '</div><div class="text-xs font-extrabold text-primary">' + formatRupiah(a.hargaNum) + '</div></div><button type="button" data-add="' + escapeHtml(a.id) + '" class="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center shrink-0 cursor-pointer"><span class="material-symbols-outlined text-[20px]">add</span></button></div>';
                 }).join("") +
      '        </div>' +
      '      </div>' +
      '    </div>' +
      '    <aside class="lg:col-span-4 lg:sticky lg:top-24 space-y-5">' +
      '      <div class="bg-white rounded-2xl p-5 shadow-sm border border-outline-variant/30 space-y-3">' +
      '        <div class="font-bold flex items-center gap-2"><span class="material-symbols-outlined text-primary">sell</span> Voucher &amp; Promo</div>' +
      (totals.promo ? '<div class="bg-secondary-container/80 border border-secondary-fixed rounded-xl p-3 flex items-center justify-between"><div><div class="text-xs font-extrabold">' + totals.promo.code + '</div><div class="text-[11px] text-on-secondary-container">' + (totals.discount > 0 ? 'Diskon ' + formatRupiah(totals.discount) : 'Min. belanja ' + formatRupiah(totals.promo.minSpend)) + '</div></div><button type="button" id="c-rem-promo" class="text-outline hover:text-error cursor-pointer"><span class="material-symbols-outlined text-[18px]">close</span></button></div>' : '') +
      '        <div class="flex gap-2"><input id="c-promo-inp" type="text" placeholder="Ketik JERINESTART / SUKULENHEMAT" class="flex-1 bg-surface-container-low text-xs px-3.5 py-2.5 rounded-full border border-outline-variant/30"/><button type="button" id="c-apply-promo" class="px-4 py-2 rounded-full bg-surface-container text-xs font-bold hover:bg-primary hover:text-white cursor-pointer">Terapkan</button></div>' +
      '      </div>' +
      '      <div class="bg-white rounded-2xl p-6 shadow-sm border border-outline-variant/30 space-y-4">' +
      '        <h3 class="text-lg font-bold">Ringkasan Belanja</h3>' +
      '        <div class="space-y-2.5 text-sm text-on-surface-variant">' +
      '          <div class="flex justify-between"><span>Subtotal (' + totals.qtyTotal + ' item)</span><strong class="text-on-surface">' + formatRupiah(totals.subtotal) + '</strong></div>' +
      (totals.discount > 0 ? '<div class="flex justify-between"><span>Diskon Promo</span><strong class="text-primary">-' + formatRupiah(totals.discount) + '</strong></div>' : '') +
      '          <div class="flex justify-between"><span>Estimasi Ongkir Box Botani</span><strong class="text-primary">' + (totals.ongkir === 0 ? 'Gratis' : formatRupiah(totals.ongkir)) + '</strong></div>' +
      '        </div>' +
      '        <div class="pt-4 border-t border-surface-container flex items-baseline justify-between"><span class="text-xs text-outline">Total Tagihan</span><span class="text-2xl font-extrabold text-primary">' + formatRupiah(totals.grandTotal) + '</span></div>' +
      '        <button type="button" id="c-go-checkout" class="w-full h-12 rounded-full bg-primary hover:bg-primary-container text-white text-sm font-bold flex items-center justify-center gap-2 shadow-md cursor-pointer"><span>Lanjut ke Checkout (' + totals.qtyTotal + ')</span><span class="material-symbols-outlined text-[18px]">arrow_forward</span></button>' +
      '        <a href="#katalog" class="block text-center text-xs font-bold text-primary hover:underline">+ Tambah Tanaman Lainnya</a>' +
      '      </div>' +
      '    </aside>' +
      '  </div>' +
      '</div>';

    document.getElementById("c-sel-all").addEventListener("change", function (e) { Store.toggleSelectAll(e.target.checked); renderCart(); });
    document.getElementById("c-del-sel").addEventListener("click", function () { Store.removeSelected(); showToast("Item terpilih dihapus"); renderCart(); });
    document.getElementById("c-clear").addEventListener("click", function () { Store.clearCart(); showToast("Keranjang dikosongkan"); renderCart(); });
    mainEl.querySelectorAll("[data-cchk]").forEach(function (el) {
      el.addEventListener("change", function () { Store.toggleSelect(el.getAttribute("data-cchk"), el.checked); renderCart(); });
    });
    mainEl.querySelectorAll("[data-cdec]").forEach(function (b) {
      b.addEventListener("click", function () {
        var k = b.getAttribute("data-cdec"), it = Store.getCart().find(function (c) { return c.cartKey === k; });
        if (!it) return;
        if (it.qty <= 1) Store.removeItem(k); else Store.updateQty(k, it.qty - 1);
        renderCart();
      });
    });
    mainEl.querySelectorAll("[data-cinc]").forEach(function (b) {
      b.addEventListener("click", function () {
        var k = b.getAttribute("data-cinc"), it = Store.getCart().find(function (c) { return c.cartKey === k; });
        if (it) { Store.updateQty(k, it.qty + 1); renderCart(); }
      });
    });
    mainEl.querySelectorAll("[data-cqty]").forEach(function (inp) {
      inp.addEventListener("change", function () { Store.updateQty(inp.getAttribute("data-cqty"), inp.value); renderCart(); });
    });
    mainEl.querySelectorAll("[data-crem]").forEach(function (b) {
      b.addEventListener("click", function () { Store.removeItem(b.getAttribute("data-crem")); showToast("Item dihapus"); renderCart(); });
    });
    mainEl.querySelectorAll("[data-ceditnote]").forEach(function (b) {
      b.addEventListener("click", function () { state.editingNoteKey = b.getAttribute("data-ceditnote"); renderCart(); var ni = document.getElementById("c-note-inp"); if (ni) ni.focus(); });
    });
    mainEl.querySelectorAll("[data-csavenote]").forEach(function (b) {
      b.addEventListener("click", function () { Store.updateNote(b.getAttribute("data-csavenote"), document.getElementById("c-note-inp").value); state.editingNoteKey = null; showToast("Catatan disimpan"); renderCart(); });
    });
    var remP = document.getElementById("c-rem-promo");
    if (remP) remP.addEventListener("click", function () { Store.setPromoCode(""); renderCart(); });
    document.getElementById("c-apply-promo").addEventListener("click", function () {
      var res = Store.setPromoCode(document.getElementById("c-promo-inp").value);
      showToast(res.ok ? "Voucher " + res.promo.code + " diterapkan!" : res.message);
      renderCart();
    });
    document.getElementById("c-go-checkout").addEventListener("click", function () {
      if (!Store.getCheckoutItems().length) { showToast("Centang minimal 1 tanaman untuk checkout"); return; }
      go("#checkout");
    });
  }

  /* ---------- VIEW: CHECKOUT ---------- */
  function renderCheckout() {
    var items = Store.getCheckoutItems();
    if (!items.length) {
      mainEl.innerHTML =
        '<div class="max-w-2xl mx-auto px-4 py-12"><div class="bg-white rounded-3xl p-12 text-center border border-outline-variant/30 shadow-sm">' +
        '  <h2 class="text-xl font-bold">Belum Ada Item untuk Di-checkout</h2>' +
        '  <p class="text-sm text-outline mt-1 mb-6">Silakan pilih tanaman di katalog atau centang item di keranjang.</p>' +
        '  <a href="#katalog" class="inline-flex px-7 py-3 rounded-full bg-primary text-white text-sm font-bold">Buka Katalog</a>' +
        '</div></div>';
      return;
    }

    var user = Store.getUser();
    var lastOrder = Store.getOrders()[0];
    var defName = (user && user.nama) || (lastOrder && lastOrder.customer.nama) || "";
    var defTel = (user && user.telepon) || (lastOrder && lastOrder.customer.telepon) || "";
    var defKota = (lastOrder && lastOrder.customer.kota) || "";
    var defAlamat = (lastOrder && lastOrder.customer.alamat) || "";
    var totals = Store.calcTotals(items, state.shippingMethod, state.useProtection);

    mainEl.innerHTML =
      '<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8">' +
      '  <div class="bg-white rounded-3xl shadow-sm border border-outline-variant/30 p-5 mb-8">' +
      '    <div class="max-w-3xl mx-auto flex items-center justify-between text-xs sm:text-sm">' +
      '      <div class="flex items-center gap-2 text-primary font-bold"><span class="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">1</span><span>Keranjang</span></div>' +
      '      <div class="flex-1 h-1 bg-primary mx-3 rounded"></div>' +
      '      <div class="flex items-center gap-2 text-primary font-extrabold"><span class="w-8 h-8 rounded-full bg-primary-container text-white ring-4 ring-secondary-container flex items-center justify-center">2</span><span>Data &amp; Pembayaran</span></div>' +
      '      <div class="flex-1 h-1 bg-surface-container mx-3 rounded"></div>' +
      '      <div class="flex items-center gap-2 text-outline"><span class="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center font-bold">3</span><span>Bayar QRIS</span></div>' +
      '    </div>' +
      '  </div>' +
      '  <form id="co-form" class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">' +
      '    <div class="lg:col-span-7 xl:col-span-8 space-y-6">' +
      '      <section class="bg-white rounded-3xl p-6 shadow-sm border border-outline-variant/30 space-y-4">' +
      '        <h2 class="text-lg font-bold flex items-center gap-2"><span class="material-symbols-outlined text-primary">location_on</span> Data Penerima &amp; Alamat Pengiriman</h2>' +
      '        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">' +
      '          <div><label class="text-xs font-bold block mb-1">Nama Lengkap *</label><input id="co-nama" type="text" required value="' + escapeHtml(defName) + '" placeholder="Contoh: Rian Pratama" class="w-full rounded-2xl bg-surface-container-low border-outline-variant/40 text-sm"/></div>' +
      '          <div><label class="text-xs font-bold block mb-1">No. WhatsApp / Telepon *</label><input id="co-tel" type="tel" required value="' + escapeHtml(defTel) + '" placeholder="0812-xxxx-xxxx" class="w-full rounded-2xl bg-surface-container-low border-outline-variant/40 text-sm"/></div>' +
      '        </div>' +
      '        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">' +
      '          <div><label class="text-xs font-bold block mb-1">Kota / Kabupaten *</label><input id="co-kota" type="text" required value="' + escapeHtml(defKota) + '" placeholder="Contoh: Surabaya" class="w-full rounded-2xl bg-surface-container-low border-outline-variant/40 text-sm"/></div>' +
      '          <div><label class="text-xs font-bold block mb-1">Catatan Pengiriman (Opsional)</label><input id="co-catatan" type="text" placeholder="Contoh: Kirim pagi hari / packing ekstra" class="w-full rounded-2xl bg-surface-container-low border-outline-variant/40 text-sm"/></div>' +
      '        </div>' +
      '        <div><label class="text-xs font-bold block mb-1">Alamat Lengkap *</label><textarea id="co-alamat" rows="2" required placeholder="Nama jalan, nomor rumah, RT/RW, kecamatan, kode pos" class="w-full rounded-2xl bg-surface-container-low border-outline-variant/40 text-sm">' + escapeHtml(defAlamat) + '</textarea></div>' +
      '      </section>' +
      '      <section class="bg-white rounded-3xl p-6 shadow-sm border border-outline-variant/30 space-y-4">' +
      '        <h2 class="text-lg font-bold flex items-center gap-2"><span class="material-symbols-outlined text-primary">local_shipping</span> Pilihan Pengiriman Tanaman</h2>' +
      '        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">' +
                 [
                   { k: "courier", title: "Kurir Khusus Tanaman", desc: "Box berventilasi & cup pot anti tumpah", price: totals.subtotal >= 100000 ? "Gratis" : "Rp 25.000" },
                   { k: "next_day", title: "Next Day Antar Kota", desc: "Bare root kering + dakron tebal", price: "Rp 15.000" },
                   { k: "pickup", title: "Ambil di Kebun Surabaya", desc: "Jl. Ngagel Jaya Tengah No.73-77", price: "Gratis" }
                 ].map(function (sh) {
                   var act = state.shippingMethod === sh.k;
                   return '<label class="p-4 rounded-2xl cursor-pointer border-2 transition-all ' + (act ? 'bg-secondary-container/30 border-primary' : 'bg-surface-container-low border-transparent') + '"><input type="radio" name="co_ship" value="' + sh.k + '" ' + (act ? 'checked' : '') + ' class="hidden"/><div class="font-bold text-sm">' + sh.title + '</div><p class="text-[11px] text-on-surface-variant mt-1">' + sh.desc + '</p><div class="text-sm font-extrabold text-primary mt-2">' + sh.price + '</div></label>';
                 }).join("") +
      '        </div>' +
      '        <label class="flex items-start gap-3 p-4 rounded-2xl bg-surface-container-low cursor-pointer"><input id="co-prot" type="checkbox" ' + (state.useProtection ? 'checked' : '') + ' class="mt-0.5 w-5 h-5 rounded accent-primary"/><div class="flex-1"><div class="text-sm font-bold">Proteksi Keselamatan Tanaman Jerine Green <span class="ml-1 px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed text-[11px]">+Rp 1.000</span></div><p class="text-xs text-on-surface-variant mt-0.5">Garansi penggantian penuh 100% jika tanaman patah atau busuk selama perjalanan.</p></div></label>' +
      '      </section>' +
      '      <section class="bg-white rounded-3xl p-6 shadow-sm border border-outline-variant/30 space-y-3">' +
      '        <h2 class="text-lg font-bold flex items-center gap-2"><span class="material-symbols-outlined text-primary">account_balance_wallet</span> Metode Pembayaran</h2>' +
               [
                 { k: "qris", title: "QRIS & E-Wallet Instan", sub: "Scan QRIS BCA, GoPay, OVO, DANA (Verifikasi Realtime)", badge: "Aktif • Bebas Admin" },
                 { k: "va", title: "Virtual Account Bank", sub: "BCA, Mandiri, BRI, BNI (Konfirmasi Simulator)", badge: "Real-Time" },
                 { k: "cod", title: "Bayar di Tempat (COD)", sub: "Cek kesegaran tanaman saat serah terima kurir", badge: "Khusus Surabaya" }
               ].map(function (pm) {
                 var act = state.paymentMethod === pm.k;
                 return '<label class="flex items-center justify-between p-4 rounded-2xl cursor-pointer border ' + (act ? 'bg-secondary-container/30 border-primary' : 'bg-surface-container-low border-outline-variant/40') + '"><div class="flex items-center gap-3"><input type="radio" name="co_pay" value="' + pm.k + '" ' + (act ? 'checked' : '') + ' class="w-4 h-4 accent-primary"/><div><div class="font-bold text-sm">' + pm.title + ' <span class="ml-1 px-2 py-0.5 rounded-full bg-primary-fixed text-[10px] font-bold">' + pm.badge + '</span></div><p class="text-xs text-on-surface-variant">' + pm.sub + '</p></div></div></label>';
               }).join("") +
      '      </section>' +
      '    </div>' +
      '    <aside class="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-24 bg-white rounded-3xl p-6 shadow-sm border border-outline-variant/30 space-y-4">' +
      '      <div class="flex justify-between items-center pb-3 border-b border-surface-container"><h3 class="font-bold text-lg">Ringkasan Tanaman</h3><span class="px-3 py-0.5 rounded-full bg-secondary-container text-xs font-bold">' + totals.qtyTotal + ' item</span></div>' +
      '      <div class="space-y-3 max-h-60 overflow-y-auto pr-1">' +
               items.map(function (it) {
                 return '<div class="flex justify-between gap-2 text-xs"><div><div class="font-bold text-on-surface">' + escapeHtml(it.nama) + ' <span class="text-outline">&times;' + it.qty + '</span></div><div class="text-outline">' + escapeHtml(it.variant) + '</div></div><strong class="shrink-0">' + formatRupiah(it.hargaNum * it.qty) + '</strong></div>';
               }).join("") +
      '      </div>' +
      '      <div class="pt-3 border-t border-surface-container space-y-2 text-sm text-on-surface-variant">' +
      '        <div class="flex justify-between"><span>Subtotal</span><strong class="text-on-surface">' + formatRupiah(totals.subtotal) + '</strong></div>' +
      (totals.discount > 0 ? '<div class="flex justify-between"><span>Diskon (' + totals.promo.code + ')</span><strong class="text-primary">-' + formatRupiah(totals.discount) + '</strong></div>' : '') +
      '        <div class="flex justify-between"><span>Ongkos Kirim</span><strong class="text-primary">' + (totals.ongkir === 0 ? 'Gratis' : formatRupiah(totals.ongkir)) + '</strong></div>' +
      '        <div class="flex justify-between"><span>Proteksi Tanaman</span><strong>' + formatRupiah(totals.protectionFee) + '</strong></div>' +
      '      </div>' +
      '      <div class="bg-surface-container-low rounded-2xl p-4 flex items-center justify-between"><span class="text-xs font-semibold">Total Pembayaran</span><span id="co-total-lbl" class="text-2xl font-extrabold text-primary">' + formatRupiah(totals.grandTotal) + '</span></div>' +
      '      <button type="submit" class="w-full py-3.5 rounded-full bg-primary hover:bg-primary-container text-white text-sm font-bold flex items-center justify-center gap-2 shadow-lg cursor-pointer"><span class="material-symbols-outlined text-[18px]">lock</span><span>Buat Pesanan &amp; Bayar</span></button>' +
      '      <a href="#keranjang" class="block text-center text-xs font-bold text-primary hover:underline">&larr; Kembali ke Keranjang</a>' +
      '    </aside>' +
      '  </form>' +
      '</div>';

    mainEl.querySelectorAll("input[name='co_ship']").forEach(function (r) {
      r.addEventListener("change", function () { state.shippingMethod = r.value; renderCheckout(); });
    });
    mainEl.querySelectorAll("input[name='co_pay']").forEach(function (r) {
      r.addEventListener("change", function () { state.paymentMethod = r.value; renderCheckout(); });
    });
    document.getElementById("co-prot").addEventListener("change", function (e) { state.useProtection = e.target.checked; renderCheckout(); });

    document.getElementById("co-form").addEventListener("submit", function (e) {
      e.preventDefault();
      var customer = {
        nama: document.getElementById("co-nama").value.trim(),
        telepon: document.getElementById("co-tel").value.trim(),
        kota: document.getElementById("co-kota").value.trim(),
        alamat: document.getElementById("co-alamat").value.trim(),
        catatan: document.getElementById("co-catatan").value.trim()
      };
      var order = Store.createOrder(customer, state.shippingMethod, state.paymentMethod, state.useProtection);
      if (order) {
        if (state.paymentMethod === "cod") go("#thank-you?order=" + encodeURIComponent(order.id));
        else go("#payment?order=" + encodeURIComponent(order.id));
      }
    });
  }

  /* ---------- VIEW: PEMBAYARAN QRIS REALTIME ---------- */
  function renderPayment(orderId, isSync) {
    var orders = Store.getOrders();
    var id = orderId || (orders[0] && orders[0].id);
    var order = id ? Store.getOrderById(id) : null;

    if (!order) {
      mainEl.innerHTML = '<div class="max-w-xl mx-auto px-4 py-12"><div class="bg-white rounded-3xl p-10 text-center border border-outline-variant/30"><h2 class="text-xl font-bold">Transaksi Tidak Ditemukan</h2><p class="text-sm text-outline mt-1 mb-5">Belum ada pesanan yang perlu dibayar.</p><a href="#katalog" class="inline-flex px-6 py-2.5 rounded-full bg-primary text-white text-sm font-bold">Buka Katalog</a></div></div>';
      return;
    }

    if (isSync && state.paymentOrderId === order.id && state.paymentLastStatus === order.status) return;
    var prevStatus = (state.paymentOrderId === order.id) ? state.paymentLastStatus : null;
    state.paymentOrderId = order.id;
    state.paymentLastStatus = order.status;

    var banner = "";
    if (order.status === "PAID") {
      banner =
        '<div class="p-4 rounded-2xl bg-secondary-container/70 border border-secondary-fixed text-sm text-on-secondary-fixed text-left space-y-1">' +
        '  <div class="font-extrabold">&#10003; Pembayaran Berhasil (PAID)</div>' +
        '  <div class="text-xs">Ref Approval: <code>' + escapeHtml(order.approvalRef || "-") + '</code> &bull; ' + escapeHtml(formatWaktu(order.paidAt)) + '</div>' +
        (prevStatus === "PENDING" ? '<div class="text-xs font-bold pt-1">Mengalihkan otomatis ke struk dalam <span id="redir-sec">3</span> detik...</div>' : '') +
        '</div>' +
        '<div class="flex flex-wrap justify-center gap-3 pt-2"><a href="#thank-you?order=' + encodeURIComponent(order.id) + '" class="px-6 py-2.5 rounded-full bg-primary text-white text-xs font-bold">Lihat Struk Pesanan</a><a href="#riwayat" class="px-6 py-2.5 rounded-full bg-surface-container text-xs font-bold">Riwayat Transaksi</a></div>';
    } else if (order.status === "REJECTED") {
      banner =
        '<div class="p-4 rounded-2xl bg-error-container text-on-error-container text-sm text-left"><strong>&#10005; Pembayaran Ditolak</strong><div class="text-xs mt-0.5">' + escapeHtml(formatWaktu(order.rejectedAt)) + '</div></div>' +
        '<div class="flex justify-center gap-3 pt-2"><a href="#katalog" class="px-6 py-2.5 rounded-full bg-primary text-white text-xs font-bold">Pesan Ulang</a><a href="#riwayat" class="px-6 py-2.5 rounded-full bg-surface-container text-xs font-bold">Riwayat</a></div>';
    } else {
      banner =
        '<div class="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/30 text-xs text-on-surface-variant text-left">' +
        '  <strong class="text-on-surface block mb-1">Menunggu Konfirmasi Pembayaran QRIS (Live Sync)</strong>' +
        '  Buka simulator QRIS di tab baru lalu klik <strong>Approve (PAID)</strong>, maka halaman ini akan otomatis berubah menjadi lunas.' +
        '</div>' +
        '<div class="flex flex-wrap justify-center gap-3 pt-2">' +
        '  <a href="#qris-approve" target="_blank" class="px-6 py-2.5 rounded-full bg-primary hover:bg-primary-container text-white text-xs font-bold flex items-center gap-1.5 shadow-sm"><span class="material-symbols-outlined text-[16px]">open_in_new</span> Buka QRIS Approve Simulator</a>' +
        '  <a href="#riwayat" class="px-5 py-2.5 rounded-full bg-surface-container text-xs font-bold">Lihat Riwayat</a>' +
        '</div>';
    }

    mainEl.innerHTML =
      '<div class="max-w-3xl mx-auto px-4 py-8">' +
      '  <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-outline-variant/30 space-y-6">' +
      '    <div class="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-surface-container">' +
      '      <div><span class="text-xs text-outline block">Invoice Pesanan</span><strong class="font-mono text-primary">' + escapeHtml(order.id) + '</strong></div>' +
             Store.statusBadge(order.status) +
      '    </div>' +
      '    <div class="text-center space-y-4 max-w-md mx-auto">' +
      '      <div><div class="text-xs text-outline">Total Pembayaran (' + escapeHtml(order.paymentMethod) + ')</div><div class="text-3xl font-extrabold text-primary">' + formatRupiah(order.grandTotal) + '</div></div>' +
      '      <div class="inline-block p-5 rounded-3xl bg-white border border-outline-variant/40 shadow-sm">' +
      '        <div class="flex justify-between items-center pb-2 mb-3 border-b border-surface-container text-xs"><strong class="tracking-widest text-base">QRIS</strong><span class="text-primary font-bold">Jerine Green</span></div>' +
               Store.qrisSvg(order.id + "|" + order.grandTotal + "|" + order.qrisRef) +
      '        <div class="text-[11px] font-mono text-outline mt-2">NMID: ID1026000849210 &bull; ' + escapeHtml(order.qrisRef) + '</div>' +
      '      </div>' +
             banner +
      '    </div>' +
      '    <div class="pt-4 border-t border-surface-container space-y-2 text-sm">' +
      '      <h3 class="font-bold mb-2">Rincian Item</h3>' +
             order.items.map(function (it) {
               return '<div class="flex justify-between text-on-surface-variant"><span>' + escapeHtml(it.nama) + ' &times; ' + it.qty + '</span><strong class="text-on-surface">' + formatRupiah(it.subtotal) + '</strong></div>';
             }).join("") +
      '      <div class="flex justify-between pt-2 border-t border-surface-container text-on-surface-variant"><span>Ongkir (' + escapeHtml(order.shippingMethod) + ')</span><strong>' + (order.ongkir === 0 ? 'Gratis' : formatRupiah(order.ongkir)) + '</strong></div>' +
      '      <div class="flex justify-between font-extrabold text-primary text-base pt-1"><span>Grand Total</span><span>' + formatRupiah(order.grandTotal) + '</span></div>' +
      '    </div>' +
      '  </div>' +
      '</div>';

    if (order.status === "PAID" && prevStatus === "PENDING" && !state.redirectTimer) {
      showToast("Pembayaran QRIS berhasil diverifikasi (PAID)!");
      var cnt = 3;
      state.redirectTimer = setInterval(function () {
        cnt--;
        var secEl = document.getElementById("redir-sec");
        if (secEl) secEl.textContent = String(Math.max(0, cnt));
        if (cnt <= 0) {
          clearInterval(state.redirectTimer);
          state.redirectTimer = null;
          go("#thank-you?order=" + encodeURIComponent(order.id));
        }
      }, 1000);
    }
  }

  /* ---------- VIEW: STRUK / TERIMA KASIH ---------- */
  function renderThankYou(orderId) {
    var orders = Store.getOrders();
    var id = orderId || (orders[0] && orders[0].id);
    var order = id ? Store.getOrderById(id) : null;
    if (!order) {
      mainEl.innerHTML = '<div class="max-w-xl mx-auto px-4 py-12"><div class="bg-white rounded-3xl p-10 text-center"><h2 class="text-xl font-bold">Struk Tidak Ditemukan</h2><a href="#riwayat" class="inline-flex mt-4 px-6 py-2.5 rounded-full bg-primary text-white text-sm font-bold">Lihat Riwayat</a></div></div>';
      return;
    }

    var infoBanner = order.status === "PAID"
      ? '<div class="p-4 rounded-2xl bg-secondary-container/70 border border-secondary-fixed text-xs text-on-secondary-fixed"><strong>&#10003; Pembayaran Lunas (PAID)</strong><br/>Terima kasih, <strong>' + escapeHtml(order.customer.nama) + '</strong>! Verifikasi: ' + escapeHtml(formatWaktu(order.paidAt)) + ' (Ref: <code>' + escapeHtml(order.approvalRef || "-") + '</code>).</div>'
      : order.status === "REJECTED"
      ? '<div class="p-4 rounded-2xl bg-error-container text-on-error-container text-xs"><strong>&#10005; Pembayaran Ditolak</strong> pada ' + escapeHtml(formatWaktu(order.rejectedAt)) + '.</div>'
      : '<div class="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/30 text-xs"><strong>Menunggu Pembayaran</strong> — <a href="#payment?order=' + encodeURIComponent(order.id) + '" class="text-primary font-bold underline">Kembali ke Halaman QRIS</a></div>';

    mainEl.innerHTML =
      '<div class="max-w-3xl mx-auto px-4 py-8">' +
      '  <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-outline-variant/30 space-y-6 print-clean">' +
      '    <div class="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-surface-container">' +
      '      <div><span class="text-xs text-outline block">Struk Pesanan Resmi Jerine Green</span><h1 class="text-xl font-extrabold text-primary font-mono">' + escapeHtml(order.id) + '</h1></div>' +
             Store.statusBadge(order.status) +
      '    </div>' +
           infoBanner +
      '    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs bg-surface-container-low p-4 rounded-2xl">' +
      '      <div><div class="uppercase font-bold text-outline mb-1">Data Penerima</div><div class="font-bold text-sm">' + escapeHtml(order.customer.nama) + '</div><div>' + escapeHtml(order.customer.telepon) + '</div><div>' + escapeHtml(order.customer.alamat) + ', ' + escapeHtml(order.customer.kota) + '</div>' + (order.customer.catatan ? '<div class="italic mt-1">Catatan: ' + escapeHtml(order.customer.catatan) + '</div>' : '') + '</div>' +
      '      <div><div class="uppercase font-bold text-outline mb-1">Info Transaksi</div><div>Tanggal: ' + escapeHtml(formatWaktu(order.createdAt)) + '</div><div>Metode: <strong>' + escapeHtml(order.paymentMethod) + '</strong> (' + escapeHtml(order.qrisRef) + ')</div><div>Pengiriman: ' + escapeHtml(order.shippingMethod) + '</div></div>' +
      '    </div>' +
      '    <div class="overflow-x-auto"><table class="w-full text-sm text-left"><thead class="text-xs uppercase text-outline border-b border-surface-container"><tr><th class="py-2">Tanaman</th><th class="py-2 text-center">Qty</th><th class="py-2 text-right">Subtotal</th></tr></thead><tbody class="divide-y divide-surface-container">' +
             order.items.map(function (it) {
               return '<tr><td class="py-3"><strong>' + escapeHtml(it.nama) + '</strong><div class="text-xs text-outline">' + escapeHtml(it.variant) + ' &bull; ' + formatRupiah(it.hargaNum) + '</div></td><td class="py-3 text-center font-bold">' + it.qty + '</td><td class="py-3 text-right font-bold">' + formatRupiah(it.subtotal) + '</td></tr>';
             }).join("") +
      '    </tbody></table></div>' +
      '    <div class="max-w-xs ml-auto space-y-1.5 text-sm pt-2 border-t border-surface-container">' +
      '      <div class="flex justify-between text-on-surface-variant"><span>Subtotal</span><strong>' + formatRupiah(order.subtotal) + '</strong></div>' +
      (order.discount > 0 ? '<div class="flex justify-between text-primary"><span>Diskon</span><strong>-' + formatRupiah(order.discount) + '</strong></div>' : '') +
      '      <div class="flex justify-between text-on-surface-variant"><span>Ongkos Kirim</span><strong>' + (order.ongkir === 0 ? 'Gratis' : formatRupiah(order.ongkir)) + '</strong></div>' +
      (order.protectionFee > 0 ? '<div class="flex justify-between text-on-surface-variant"><span>Proteksi</span><strong>' + formatRupiah(order.protectionFee) + '</strong></div>' : '') +
      '      <div class="flex justify-between text-lg font-extrabold text-primary pt-2 border-t border-surface-container"><span>Grand Total</span><span>' + formatRupiah(order.grandTotal) + '</span></div>' +
      '    </div>' +
      '    <div class="no-print flex flex-wrap gap-3 pt-4 border-t border-surface-container">' +
      '      <a href="#riwayat" class="px-6 py-2.5 rounded-full bg-primary text-white text-xs font-bold">Lihat Riwayat Transaksi</a>' +
      '      <a href="#katalog" class="px-6 py-2.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold">Belanja Lagi</a>' +
      '      <button type="button" onclick="window.print()" class="px-6 py-2.5 rounded-full bg-surface-container text-xs font-bold cursor-pointer">Cetak Struk</button>' +
      '    </div>' +
      '  </div>' +
      '</div>';
  }

  /* ---------- VIEW: RIWAYAT TRANSAKSI ---------- */
  function renderHistory() {
    var orders = Store.getOrders();
    if (!orders.length) {
      mainEl.innerHTML = '<div class="max-w-2xl mx-auto px-4 py-12"><div class="bg-white rounded-3xl p-12 text-center border border-outline-variant/30"><h2 class="text-xl font-bold">Belum Ada Riwayat Transaksi</h2><p class="text-sm text-outline mt-1 mb-6">Pesanan yang Anda buat akan tampil di sini secara realtime.</p><a href="#katalog" class="inline-flex px-7 py-3 rounded-full bg-primary text-white text-sm font-bold">Mulai Belanja</a></div></div>';
      return;
    }

    var counts = {
      ALL: orders.length,
      PENDING: orders.filter(function (o) { return o.status === "PENDING"; }).length,
      PAID: orders.filter(function (o) { return o.status === "PAID"; }).length,
      REJECTED: orders.filter(function (o) { return o.status === "REJECTED"; }).length
    };
    var filtered = orders.filter(function (o) { return state.historyFilter === "ALL" || o.status === state.historyFilter; });

    mainEl.innerHTML =
      '<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-8 space-y-6">' +
      '  <div class="flex flex-wrap items-center justify-between gap-4"><div><h1 class="text-2xl font-bold">Riwayat Transaksi</h1><p class="text-xs text-outline">Pantau seluruh pesanan &amp; status pembayaran QRIS secara realtime.</p></div><a href="#qris-approve" target="_blank" class="px-4 py-2 rounded-full bg-secondary-container text-primary text-xs font-bold">Buka Simulator QRIS &rarr;</a></div>' +
      '  <div class="bg-white rounded-3xl p-6 shadow-sm border border-outline-variant/30 space-y-5">' +
      '    <div class="flex flex-wrap gap-2">' +
             [["ALL", "Semua"], ["PENDING", "Menunggu"], ["PAID", "Paid"], ["REJECTED", "Ditolak"]].map(function (f) {
               var act = state.historyFilter === f[0];
               return '<button type="button" data-hfilter="' + f[0] + '" class="px-4 py-2 rounded-full text-xs font-bold cursor-pointer ' + (act ? 'bg-primary text-white' : 'bg-surface-container text-on-surface') + '">' + f[1] + ' (' + counts[f[0]] + ')</button>';
             }).join("") +
      '    </div>' +
      '    <div class="overflow-x-auto"><table class="w-full text-sm text-left"><thead class="text-xs uppercase text-outline border-b border-surface-container"><tr><th class="py-3">Invoice</th><th class="py-3">Penerima</th><th class="py-3">Item</th><th class="py-3">Total</th><th class="py-3">Status</th><th class="py-3">Aksi</th></tr></thead><tbody class="divide-y divide-surface-container">' +
             (filtered.length
               ? filtered.map(function (o) {
                   var itemsTxt = o.items.map(function (it) { return escapeHtml(it.nama) + " &times;" + it.qty; }).join(", ");
                   var actions = o.status === "PENDING"
                     ? '<a href="#payment?order=' + encodeURIComponent(o.id) + '" class="px-3.5 py-1.5 rounded-full bg-primary text-white text-xs font-bold">Bayar QRIS</a>'
                     : '<a href="#thank-you?order=' + encodeURIComponent(o.id) + '" class="px-3.5 py-1.5 rounded-full bg-surface-container text-xs font-bold">Lihat Struk</a>';
                   return '<tr><td class="py-3.5 pr-3"><strong class="font-mono text-xs text-primary">' + escapeHtml(o.id) + '</strong><div class="text-[11px] text-outline">' + escapeHtml(formatWaktu(o.createdAt)) + '</div></td><td class="py-3.5 pr-3"><strong>' + escapeHtml(o.customer.nama) + '</strong><div class="text-xs text-outline">' + escapeHtml(o.customer.kota) + '</div></td><td class="py-3.5 pr-3 max-w-xs text-xs">' + itemsTxt + '</td><td class="py-3.5 pr-3 font-extrabold text-primary whitespace-nowrap">' + formatRupiah(o.grandTotal) + '</td><td class="py-3.5 pr-3">' + Store.statusBadge(o.status) + '</td><td class="py-3.5 whitespace-nowrap">' + actions + '</td></tr>';
                 }).join("")
               : '<tr><td colspan="6" class="py-8 text-center text-outline text-xs">Tidak ada transaksi pada filter ini.</td></tr>') +
      '    </tbody></table></div>' +
      '  </div>' +
      '</div>';

    mainEl.querySelectorAll("[data-hfilter]").forEach(function (b) {
      b.addEventListener("click", function () { state.historyFilter = b.getAttribute("data-hfilter"); renderHistory(); });
    });
  }

  /* ---------- VIEW: SIMULATOR QRIS APPROVE ---------- */
  function renderQrisApprove() {
    var orders = Store.getOrders();
    var pending = orders.filter(function (o) { return o.status === "PENDING"; });
    var done = orders.filter(function (o) { return o.status !== "PENDING"; });

    mainEl.innerHTML =
      '<div class="max-w-3xl mx-auto px-4 py-8 space-y-6">' +
      '  <div class="bg-white rounded-3xl p-6 border border-outline-variant/30 shadow-sm flex flex-wrap items-center justify-between gap-4">' +
      '    <div><h1 class="text-xl font-extrabold text-primary">QRIS Payment Simulator</h1><p class="text-xs text-outline">Approve atau tolak transaksi QRIS Jerine Green secara realtime lintas tab.</p></div>' +
      '    <span class="status-badge status-paid"><span class="pulse-dot"></span> LIVE SYNC</span>' +
      '  </div>' +
      '  <div class="space-y-3"><h2 class="text-xs font-bold uppercase tracking-wider text-outline">Menunggu Persetujuan (' + pending.length + ')</h2>' +
           (pending.length
             ? pending.map(function (o, idx) {
                 return '<div class="bg-white rounded-2xl p-5 border ' + (idx === 0 ? 'border-primary shadow-md' : 'border-outline-variant/40') + ' flex flex-col sm:flex-row sm:items-center justify-between gap-4">' +
                   '<div><div class="flex items-center gap-2"><span class="font-mono text-xs font-extrabold text-primary">' + escapeHtml(o.id) + '</span>' + Store.statusBadge(o.status) + '</div><div class="text-sm font-bold mt-1">' + escapeHtml(o.customer.nama) + ' <span class="font-normal text-outline">&bull; ' + escapeHtml(o.customer.kota) + ' &bull; ' + escapeHtml(o.qrisRef) + '</span></div><div class="text-lg font-extrabold text-primary mt-1">' + formatRupiah(o.grandTotal) + '</div></div>' +
                   '<div class="flex gap-2"><button type="button" data-sim-act="PAID" data-sim-id="' + escapeHtml(o.id) + '" class="px-4 py-2.5 rounded-full bg-primary hover:bg-primary-container text-white text-xs font-bold cursor-pointer">&#10003; Approve (PAID)</button><button type="button" data-sim-act="REJECTED" data-sim-id="' + escapeHtml(o.id) + '" class="px-4 py-2.5 rounded-full bg-error-container text-on-error-container text-xs font-bold cursor-pointer">Tolak</button></div></div>';
               }).join("")
             : '<div class="p-8 rounded-2xl bg-white border border-dashed border-outline-variant text-center text-sm text-outline">Belum ada transaksi PENDING. Silakan checkout terlebih dahulu.</div>') +
      '  </div>' +
      '  <div class="space-y-2.5"><h2 class="text-xs font-bold uppercase tracking-wider text-outline">Sudah Diproses (' + done.length + ')</h2>' +
           (done.length
             ? done.map(function (o) {
                 return '<div class="bg-white rounded-2xl p-4 border border-outline-variant/30 flex items-center justify-between gap-3"><div><div class="font-mono text-xs font-bold">' + escapeHtml(o.id) + '</div><div class="text-xs text-outline">' + escapeHtml(o.customer.nama) + ' &bull; ' + formatRupiah(o.grandTotal) + '</div></div><div class="flex items-center gap-3">' + Store.statusBadge(o.status) + '<a href="#thank-you?order=' + encodeURIComponent(o.id) + '" class="text-xs font-bold text-primary hover:underline">Struk</a></div></div>';
               }).join("")
             : '<div class="p-6 rounded-2xl bg-surface-container-low text-center text-xs text-outline">Belum ada riwayat approval.</div>') +
      '  </div>' +
      '</div>';

    mainEl.querySelectorAll("[data-sim-act]").forEach(function (b) {
      b.addEventListener("click", function () {
        var id = b.getAttribute("data-sim-id");
        var act = b.getAttribute("data-sim-act");
        Store.updateOrderStatus(id, act);
        showToast("Transaksi " + id + " diubah ke " + act);
        renderQrisApprove();
      });
    });
  }

  /* ---------- VIEW: MASUK / DAFTAR AKUN ---------- */
  function renderAuth() {
    var user = Store.getUser();
    if (user) {
      mainEl.innerHTML =
        '<div class="max-w-xl mx-auto px-4 py-12"><div class="bg-white rounded-3xl p-8 border border-outline-variant/30 shadow-sm text-center space-y-4">' +
        '  <div class="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto"><span class="material-symbols-outlined text-[32px]">person</span></div>' +
        '  <h1 class="text-2xl font-extrabold text-primary">Halo, ' + escapeHtml(user.nama) + '!</h1>' +
        '  <p class="text-sm text-on-surface-variant">Akun Member Jerine Green (' + escapeHtml(user.identifier) + ')</p>' +
        '  <div class="flex flex-wrap justify-center gap-3 pt-3"><a href="#riwayat" class="px-6 py-2.5 rounded-full bg-primary text-white text-xs font-bold">Pesanan Saya</a><button type="button" id="btn-logout" class="px-6 py-2.5 rounded-full bg-error-container text-on-error-container text-xs font-bold cursor-pointer">Keluar Akun</button></div>' +
        '</div></div>';
      document.getElementById("btn-logout").addEventListener("click", function () { Store.setUser(null); showToast("Berhasil keluar akun"); renderAuth(); });
      return;
    }

    var isLogin = state.authMode === "login";
    mainEl.innerHTML =
      '<div class="max-w-5xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">' +
      '  <div class="lg:col-span-6 bg-surface-container-low rounded-3xl p-8 space-y-5 border border-surface-container">' +
      '    <span class="px-3 py-1 rounded-full bg-tertiary-fixed text-xs font-bold">Jerine Green Member</span>' +
      '    <h1 class="text-3xl font-extrabold leading-tight">Koleksi Sukulen Sehat &amp; Kaktus Eksotis untuk Hunian Asri Anda</h1>' +
      '    <p class="text-sm text-on-surface-variant">Masuk untuk menyimpan data pengiriman otomatis saat checkout, memantau riwayat pembayaran QRIS, dan mengakses daftar favorit.</p>' +
      '    <div class="grid grid-cols-3 gap-3 pt-2 text-center"><div class="p-3 rounded-2xl bg-white"><strong class="text-xs block text-primary">Garansi 100%</strong><span class="text-[11px] text-outline">Tiba Segar</span></div><div class="p-3 rounded-2xl bg-white"><strong class="text-xs block text-primary">Packing Aman</strong><span class="text-[11px] text-outline">Berlapis</span></div><div class="p-3 rounded-2xl bg-white"><strong class="text-xs block text-primary">QRIS Live</strong><span class="text-[11px] text-outline">Instan</span></div></div>' +
      '  </div>' +
      '  <div class="lg:col-span-6 bg-white rounded-3xl p-8 shadow-lg border border-outline-variant/30">' +
      '    <div class="p-1 rounded-full bg-surface-container flex mb-6">' +
      '      <button type="button" id="tab-login" class="w-1/2 py-2.5 rounded-full text-sm font-bold cursor-pointer ' + (isLogin ? 'bg-primary text-white' : 'text-on-surface-variant') + '">Masuk Akun</button>' +
      '      <button type="button" id="tab-reg" class="w-1/2 py-2.5 rounded-full text-sm font-bold cursor-pointer ' + (!isLogin ? 'bg-primary text-white' : 'text-on-surface-variant') + '">Daftar Baru</button>' +
      '    </div>' +
      '    <form id="auth-form" class="space-y-4">' +
      (!isLogin ? '<div><label class="text-xs font-bold block mb-1">Nama Lengkap *</label><input id="au-nama" type="text" required placeholder="Nama lengkap Anda" class="w-full rounded-full bg-surface-container-low border-outline-variant/40 text-sm px-4"/></div>' : '') +
      '      <div><label class="text-xs font-bold block mb-1">Email atau No. WhatsApp *</label><input id="au-id" type="text" required placeholder="nama@email.com atau 0812..." class="w-full rounded-full bg-surface-container-low border-outline-variant/40 text-sm px-4"/></div>' +
      '      <div><label class="text-xs font-bold block mb-1">Kata Sandi *</label><input id="au-pw" type="password" required placeholder="Minimal 6 karakter" class="w-full rounded-full bg-surface-container-low border-outline-variant/40 text-sm px-4"/></div>' +
      '      <button type="submit" class="w-full h-12 rounded-full bg-primary hover:bg-primary-container text-white text-sm font-bold cursor-pointer">' + (isLogin ? 'Masuk Sekarang' : 'Daftar Akun Baru') + '</button>' +
      '    </form>' +
      '  </div>' +
      '</div>';

    document.getElementById("tab-login").addEventListener("click", function () { state.authMode = "login"; renderAuth(); });
    document.getElementById("tab-reg").addEventListener("click", function () { state.authMode = "register"; renderAuth(); });
    document.getElementById("auth-form").addEventListener("submit", function (e) {
      e.preventDefault();
      var idVal = document.getElementById("au-id").value.trim();
      var namaEl = document.getElementById("au-nama");
      var namaVal = namaEl ? namaEl.value.trim() : (idVal.split("@")[0] || "Member");
      Store.setUser({ nama: namaVal, identifier: idVal, telepon: /^\d/.test(idVal) ? idVal : "" });
      showToast("Selamat datang di Jerine Green, " + namaVal + "!");
      go("#beranda");
    });
  }

  /* ------------------------------------------------------------------------
     5. DISPATCHER & GLOBAL EVENTS
     ------------------------------------------------------------------------ */
  function renderCurrentRoute(isSync) {
    var r = parseRoute();
    if (!isSync) clearPageTimers();
    syncHeaderUI(r.path);

    if (r.path === "katalog") {
      if (!isSync) {
        var k = r.params.get("kategori");
        state.catFilter = k ? [k] : [];
        state.searchQ = r.params.get("q") || "";
        state.onlyFav = r.params.get("favorit") === "1";
        var gs = document.getElementById("global-search-input");
        if (gs) gs.value = state.searchQ;
        renderCatalog();
      }
    } else if (r.path === "detail") {
      if (!isSync) { state.detailQty = 1; renderDetail(r.params.get("id")); }
    } else if (r.path === "keranjang") {
      renderCart();
    } else if (r.path === "checkout") {
      if (!isSync) renderCheckout();
    } else if (r.path === "payment") {
      renderPayment(r.params.get("order"), isSync);
    } else if (r.path === "thank-you") {
      renderThankYou(r.params.get("order"));
    } else if (r.path === "riwayat") {
      renderHistory();
    } else if (r.path === "qris-approve") {
      renderQrisApprove();
    } else if (r.path === "akun") {
      renderAuth();
    } else {
      renderHome();
    }

    if (!isSync) window.scrollTo(0, 0);
  }

  // Global delegation for Add to Cart, Buy Now, Wishlist, Home Filter, Claim Coupon
  document.addEventListener("click", function (e) {
    var addB = e.target.closest("[data-add]");
    if (addB) {
      var id = addB.getAttribute("data-add");
      var p = getProductById(id);
      if (p) { Store.addToCart(id, 1); showToast(p.nama + " masuk ke keranjang!"); }
      return;
    }
    var buyB = e.target.closest("[data-buy]");
    if (buyB) {
      Store.addToCart(buyB.getAttribute("data-buy"), 1);
      go("#checkout");
      return;
    }
    var wishB = e.target.closest("[data-wish]");
    if (wishB) {
      var added = Store.toggleWishlist(wishB.getAttribute("data-wish"));
      showToast(added ? "Disimpan ke favorit" : "Dihapus dari favorit");
      return;
    }
    var hfB = e.target.closest("[data-home-filter]");
    if (hfB) {
      state.homeFilter = hfB.getAttribute("data-home-filter");
      renderHome();
      return;
    }
    if (e.target.closest("#btn-claim-coupon")) {
      Store.setPromoCode("JERINESTART");
      if (navigator.clipboard) navigator.clipboard.writeText("JERINESTART").catch(function () {});
      showToast("Kupon JERINESTART aktif & tersalin!");
    }
  });

  // Global search bar
  var searchForm = document.getElementById("global-search-form");
  if (searchForm) {
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var q = document.getElementById("global-search-input").value.trim();
      go(q ? "#katalog?q=" + encodeURIComponent(q) : "#katalog");
    });
  }

  // Realtime sync across tabs & fallback polling
  syncCallbacks.push(function () {
    var r = parseRoute();
    syncHeaderUI(r.path);
    if (["beranda", "keranjang", "payment", "thank-you", "riwayat", "qris-approve"].indexOf(r.path) !== -1) {
      renderCurrentRoute(true);
    } else if (r.path === "katalog") {
      updateCatalogResultsOnly();
    }
  });

  setInterval(function () {
    var r = parseRoute();
    if (["payment", "thank-you", "riwayat", "qris-approve"].indexOf(r.path) !== -1) {
      renderCurrentRoute(true);
    }
  }, 1000);

  window.addEventListener("hashchange", function () { renderCurrentRoute(false); });
  renderTicker();
  renderCurrentRoute(false);
})(window, document);

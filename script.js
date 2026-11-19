// Data lengkap 6 Kategori dan 100 Jenis Tanaman Sukulen & Kaktus
// Isi kolom gambar (index ke-6) dengan path foto Anda di folder images/, misalnya "images/baby-toes.jpg".
const daftarKategori = [
  {
    id: "kategori-1",
    nomor: "Kategori 1",
    namaNav: "Roset",
    judul: "Sukulen Roset (Rosette Succulents)",
    subjudul: "Suvenir & Dekorasi Estetik",
    ciriKhas:
      "Daun tersusun melingkar menyerupai kelopak bunga mawar. Paling populer untuk suvenir dan dekorasi estetik.",
    cahayaDefault: "Matahari Pagi",
    siramDefault: "7 hari sekali",
    potDefault: "10 cm Terakota",
    tanaman: [
      [
        1,
        "Echeveria elegans",
        "Mexican Snowball",
        "#7FB5AA",
        "rosette",
        35000,
        "images/category-1/echeveria-elegans.jpg",
      ],
      [
        2,
        "Echeveria agavoides",
        "Lipstick Echeveria",
        "#689F5E",
        "rosette-tip",
        40000,
        "images/category-1/echeveria-agavoides.jpg",
      ],
      [
        3,
        "Echeveria laui",
        "Lau's Echeveria (Bedak Putih)",
        "#BFD4D6",
        "rosette",
        75000,
        "images/category-1/echeveria-laui.jpg",
      ],
      [
        4,
        "Echeveria 'Perle von Nurnberg'",
        "PVN (Sukulen Ungu)",
        "#A47E9E",
        "rosette",
        38000,
        "images/category-1/echeveria-perle-von-nurnberg.jpg",
      ],
      [
        5,
        "Echeveria pulidonis",
        "Pulido's Echeveria",
        "#76A873",
        "rosette-tip",
        42000,
        "images/category-1/echeveria-pulidonis.jpg",
      ],
      [
        6,
        "Echeveria lilacina",
        "Ghost Echeveria",
        "#B5B2C2",
        "rosette",
        45000,
        "images/category-1/echeveria-lilacina.jpg",
      ],
      [
        7,
        "Echeveria setosa",
        "Mexican Firecracker",
        "#6C9D66",
        "rosette",
        44000,
        "images/category-1/echeveria-setosa.jpg",
      ],
      [
        8,
        "Echeveria runyonii 'Topsy Turvy'",
        "Topsy Turvy",
        "#8AB7B1",
        "rosette",
        38000,
        "images/category-1/echeveria-runyonii-topsy-turvy.jpg",
      ],
      [
        9,
        "Echeveria 'Chroma'",
        "Chroma Echeveria",
        "#9E5C5E",
        "rosette",
        46000,
        "images/category-1/echeveria-chroma.jpg",
      ],
      [
        10,
        "Echeveria 'Black Prince'",
        "Black Prince",
        "#4A3238",
        "rosette",
        45000,
        "images/category-1/echeveria-black-prince.jpg",
      ],
      [
        11,
        "Graptopetalum paraguayense",
        "Ghost Plant",
        "#B2B7BE",
        "rosette",
        32000,
        "images/category-1/graptopetalum-paraguayense.jpg",
      ],
      [
        12,
        "Graptopetalum amethystinum",
        "Pink Moonstone",
        "#C89CA8",
        "rosette",
        55000,
        "images/category-1/graptopetalum-amethystinum.jpg",
      ],
      [
        13,
        "Graptoveria 'Debbi'",
        "Debbi Sukulen",
        "#B58AA2",
        "rosette",
        42000,
        "images/category-1/graptoveria-debbi.jpg",
      ],
      [
        14,
        "Graptoveria 'Opalina'",
        "Opalina",
        "#9AB7B5",
        "rosette-tip",
        44000,
        "images/category-1/graptoveria-opalina.jpg",
      ],
      [
        15,
        "Pachyveria 'Scheideckeri'",
        "Jeweled Crown",
        "#8BB3A3",
        "rosette",
        36000,
        "images/category-1/pachyveria-scheideckeri.jpg",
      ],
      [
        16,
        "Aeonium arboreum 'Zwartkop'",
        "Black Rose (Mawar Hitam)",
        "#422731",
        "aeonium",
        68000,
        "images/category-1/aeonium-arboreum-zwartkop.jpg",
      ],
      [
        17,
        "Aeonium haworthii 'Kiwi'",
        "Kiwi Aeonium",
        "#99BA6A",
        "rosette-tip",
        45000,
        "images/category-1/aeonium-haworthii-kiwi.jpg",
      ],
      [
        18,
        "Sempervivum tectorum",
        "Hens and Chicks",
        "#5D8753",
        "rosette-tip",
        35000,
        "images/category-1/sempervivum-tectorum.jpg",
      ],
      [
        19,
        "Sempervivum arachnoideum",
        "Cobweb Houseleek",
        "#789E6E",
        "rosette",
        48000,
        "images/category-1/sempervivum-arachnoideum.jpg",
      ],
      [
        20,
        "Dudleya brittonii",
        "Giant Chalk Dudleya",
        "#CFE0DE",
        "rosette",
        85000,
        "images/category-1/dudleya-brittonii.jpg",
      ],
    ],
  },
  {
    id: "kategori-2",
    nomor: "Kategori 2",
    namaNav: "Mini & Berpola",
    judul: "Sukulen Mini, Transparan & Berpola",
    subjudul: "Haworthia, Gasteria & Aloe Hias",
    ciriKhas:
      "Ukuran kompak, daun bergaris/berbintik atau ujungnya bening seperti kaca. Sangat tahan di dalam ruangan (indoor-friendly).",
    cahayaDefault: "Teduh Terang",
    siramDefault: "7–10 hari sekali",
    potDefault: "9 cm Terakota",
    tanaman: [
      [
        21,
        "Haworthiopsis attenuata",
        "Zebra Plant",
        "#2E5E44",
        "zebra",
        32000,
        "images/category-2/haworthiopsis-attenuata.jpg",
      ],
      [
        22,
        "Haworthiopsis fasciata",
        "Zebra Haworthia",
        "#376B4E",
        "zebra",
        34000,
        "images/category-2/haworthiopsis-fasciata.jpg",
      ],
      [
        23,
        "Haworthia cooperi var. truncata",
        "Alien Eggs (Sukulen Bening)",
        "#87BFA1",
        "cooperi",
        55000,
        "images/category-2/haworthia-cooperi-var-truncata.jpg",
      ],
      [
        24,
        "Haworthia cymbiformis",
        "Cathedral Window",
        "#7BB578",
        "cooperi",
        38000,
        "images/category-2/haworthia-cymbiformis.jpg",
      ],
      [25, "Haworthia retusa", "Star Cactus", "#5B8E5D", "cooperi", 40000, "images/category-2/haworthia-retusa.jpg"],
      [
        26,
        "Haworthia truncata",
        "Horse's Teeth",
        "#4B6952",
        "truncata",
        75000,
        "images/category-2/haworthia-truncata.jpg",
      ],
      [
        27,
        "Haworthia maughanii",
        "Maughanii",
        "#5E7B64",
        "truncata",
        85000,
        "images/category-2/haworthia-maughanii.jpg",
      ],
      [
        28,
        "Haworthiopsis limifolia",
        "Fairy Washboard",
        "#3E6B4B",
        "zebra",
        42000,
        "images/category-2/haworthiopsis-limifolia.jpg",
      ],
      [
        29,
        "Gasteria bicolor var. liliputana",
        "Ox Tongue (Lidah Sapi Mini)",
        "#355E42",
        "gasteria",
        35000,
        "images/category-2/gasteria-bicolor-var-liliputana.jpg",
      ],
      [
        30,
        "Gasteria carinata var. verrucosa",
        "Warty Gasteria",
        "#3D6A4A",
        "gasteria",
        38000,
        "images/category-2/gasteria-carinata-var-verrucosa.jpg",
      ],
      [31, "Gasteraloe 'Flow'", "Gasteraloe", "#467554", "gasteria", 40000, "images/category-2/gasteraloe-flow.jpg"],
      [32, "Aloe aristata", "Lace Aloe", "#477D59", "aloe", 35000, "images/category-2/aloe-aristata.jpg"],
      [
        33,
        "Aloe brevifolia",
        "Short-Leaved Aloe",
        "#5C916D",
        "aloe",
        36000,
        "images/category-2/aloe-brevifolia.jpg",
      ],
      [34, "Aloe juvenna", "Tiger Tooth Aloe", "#4F8757", "aloe", 34000, "images/category-2/aloe-juvenna.jpg"],
      [
        35,
        "Aloe 'Pink Blush'",
        "Pink Blush Aloe",
        "#6B9670",
        "aloe",
        52000,
        "images/category-2/aloe-pink-blush.jpg",
      ],
    ],
  },
  {
    id: "kategori-3",
    nomor: "Kategori 3",
    namaNav: "Gantung",
    judul: "Sukulen Merambat & Gantung",
    subjudul: "Trailing & Hanging Succulents",
    ciriKhas:
      "Batang menjuntai panjang ke bawah, ideal untuk pot gantung atau diletakkan di rak tinggi.",
    cahayaDefault: "Terang Tidak Langsung",
    siramDefault: "7 hari sekali",
    potDefault: "12 cm Terakota",
    tanaman: [
      [
        36,
        "Senecio rowleyanus (Curio rowleyanus)",
        "String of Pearls (Tasbih)",
        "#64A369",
        "pearls",
        55000,
        "images/category-3/senecio-rowleyanus.jpg",
      ],
      [
        37,
        "Senecio herreanus (Curio herreanus)",
        "String of Watermelons",
        "#5E9B63",
        "pearls",
        58000,
        "images/category-3/senecio-herreanus.jpg",
      ],
      [
        38,
        "Senecio radicans (Curio radicans)",
        "String of Bananas",
        "#6EA86C",
        "tail",
        45000,
        "images/category-3/senecio-radicans.jpg",
      ],
      [
        39,
        "Senecio peregrinus (Curio peregrinus)",
        "String of Dolphins",
        "#609D78",
        "tail",
        65000,
        "images/category-3/senecio-peregrinus.jpg",
      ],
      [
        40,
        "Ceropegia woodii",
        "String of Hearts",
        "#597A64",
        "hearts",
        50000,
        "images/category-3/ceropegia-woodii.jpg",
      ],
      [
        41,
        "Ceropegia woodii 'Variegata'",
        "Variegated String of Hearts",
        "#C99EA8",
        "hearts",
        75000,
        "images/category-3/ceropegia-woodii-variegata.jpg",
      ],
      [
        42,
        "Peperomia prostrata",
        "String of Turtles",
        "#4D7C57",
        "hearts",
        62000,
        "images/category-3/peperomia-prostrata.jpg",
      ],
      [
        43,
        "Sedum morganianum",
        "Burro's Tail (Ekor Keledai)",
        "#7EB396",
        "tail",
        48000,
        "images/category-3/sedum-morganianum.jpg",
      ],
      [44, "Sedum burrito", "Baby Burro's Tail", "#84BA9C", "tail", 48000, "images/category-3/sedum-burrito.jpg"],
      [
        45,
        "Sedum rubrotinctum",
        "Jelly Bean Plant",
        "#6E9E5D",
        "tail",
        35000,
        "images/category-3/sedum-rubrotinctum.jpg",
      ],
      [46, "Sedum adolphi", "Golden Sedum", "#B7A652", "tail", 36000, "images/category-3/sedum-adolphi.jpg"],
      [
        47,
        "Sedum makinoi 'Ogon'",
        "Golden Japanese Sedum",
        "#C4B956",
        "pearls",
        38000,
        "images/category-3/sedum-makinoi-ogon.jpg",
      ],
      [
        48,
        "Crassula perforata",
        "String of Buttons",
        "#73A17B",
        "tail",
        40000,
        "images/category-3/crassula-perforata.jpg",
      ],
      [
        49,
        "Crassula pellucida 'Variegata'",
        "Calico Kitten",
        "#B48D9A",
        "hearts",
        44000,
        "images/category-3/crassula-pellucida-variegata.jpg",
      ],
      [50, "Othonna capensis", "Ruby Necklace", "#7E4C63", "pearls", 42000, "images/category-3/othonna-capensis.jpg"],
    ],
  },
  {
    id: "kategori-4",
    nomor: "Kategori 4",
    namaNav: "Batu & Unik",
    judul: "Sukulen Batu Hidup, Pohon Mini & Unik",
    subjudul: "Mesembs & Novelty Succulents",
    ciriKhas:
      "Bentuk menyerupai batu kerikil, telapak kaki hewan, atau bonsai mini. Sangat dicari kolektor.",
    cahayaDefault: "Terang Pagi Hari",
    siramDefault: "10–14 hari sekali",
    potDefault: "8–10 cm Terakota",
    tanaman: [
      [
        51,
        "Lithops aucampiae",
        "Living Stones (Kaktus Batu)",
        "#9E7E67",
        "lithops",
        60000,
        "images/category-4/lithops-aucampiae.jpg",
      ],
      [
        52,
        "Lithops karasmontana",
        "Karas Mountains Lithops",
        "#A68B78",
        "lithops",
        65000,
        "images/category-4/lithops-karasmontana.jpg",
      ],
      [
        53,
        "Lithops lesliei",
        "Leslie's Lithops",
        "#8E8768",
        "lithops",
        62000,
        "images/category-4/lithops-lesliei.jpg",
      ],
      [
        54,
        "Pleiospilos nelii",
        "Split Rock (Batu Belah)",
        "#7E947A",
        "lithops",
        68000,
        "images/category-4/pleiospilos-nelii.jpg",
      ],
      [
        55,
        "Conophytum bilobum",
        "Bunny Ears Mesemb",
        "#88B07B",
        "conophytum",
        70000,
        "images/category-4/conophytum-bilobum.jpg",
      ],
      [
        56,
        "Fenestraria rhopalophylla",
        "Baby Toes",
        "#84AC8D",
        "baby-toes",
        52000,
        "images/category-4/fenestraria-rhopalophylla.jpg",
      ],
      [
        57,
        "Titanopsis calcarea",
        "Concrete Leaf",
        "#8A9C88",
        "lithops",
        64000,
        "images/category-4/titanopsis-calcarea.jpg",
      ],
      [
        58,
        "Crassula ovata",
        "Jade Plant (Pohon Dolar)",
        "#4C8757",
        "jade",
        42000,
        "images/category-4/crassula-ovata.jpg",
      ],
      [
        59,
        "Crassula ovata 'Gollum'",
        "Shrek Ears (Telinga Shrek)",
        "#558F57",
        "gollum",
        45000,
        "images/category-4/crassula-ovata-gollum.jpg",
      ],
      [
        60,
        "Crassula muscosa",
        "Watch Chain (Rantai Jam)",
        "#67965B",
        "gollum",
        34000,
        "images/category-4/crassula-muscosa.jpg",
      ],
      [
        61,
        "Crassula capitella 'Campfire'",
        "Campfire Crassula",
        "#B84C42",
        "jade",
        38000,
        "images/category-4/crassula-capitella-campfire.jpg",
      ],
      [
        62,
        "Portulacaria afra",
        "Elephant Bush (Mini Jade)",
        "#5B945E",
        "jade",
        36000,
        "images/category-4/portulacaria-afra.jpg",
      ],
      [
        63,
        "Portulacaria afra 'Variegata'",
        "Rainbow Bush",
        "#9BB88A",
        "jade",
        45000,
        "images/category-4/portulacaria-afra-variegata.jpg",
      ],
      [
        64,
        "Kalanchoe tomentosa",
        "Panda Plant (Kaktus Panda)",
        "#8FA695",
        "panda",
        35000,
        "images/category-4/kalanchoe-tomentosa.jpg",
      ],
      [
        65,
        "Cotyledon tomentosa",
        "Bear's Paw (Kaki Beruang)",
        "#7BA378",
        "panda",
        55000,
        "images/category-4/cotyledon-tomentosa.jpg",
      ],
    ],
  },
  {
    id: "kategori-5",
    nomor: "Kategori 5",
    namaNav: "Kaktus Bulat",
    judul: "Kaktus Bulat, Berusuk & Kolektor",
    subjudul: "Globular & Ribbed Cacti",
    ciriKhas:
      "Batang membulat atau silinder pendek dengan rusuk tegas, banyak yang memiliki warna variegata atau bunga mencolok.",
    cahayaDefault: "Matahari Penuh",
    siramDefault: "10–14 hari sekali",
    potDefault: "10 cm Terakota",
    tanaman: [
      [
        66,
        "Gymnocalycium mihanovichii",
        "Moon Cactus / Kaktus Warna",
        "#D9523E",
        "moon-cactus",
        38000,
        "images/category-5/gymnocalycium-mihanovichii.jpg",
      ],
      [
        67,
        "Gymnocalycium mihanovichii 'Variegata'",
        "Gymno Variegata",
        "#B85952",
        "cactus-round",
        85000,
        "images/category-5/gymnocalycium-mihanovichii-variegata.jpg",
      ],
      [
        68,
        "Gymnocalycium baldianum",
        "Dwarf Chin Cactus",
        "#4B7A54",
        "cactus-round",
        45000,
        "images/category-5/gymnocalycium-baldianum.jpg",
      ],
      [
        69,
        "Gymnocalycium horstii",
        "Horst's Chin Cactus",
        "#5B8E5E",
        "cactus-round",
        55000,
        "images/category-5/gymnocalycium-horstii.jpg",
      ],
      [
        70,
        "Astrophytum asterias",
        "Sand Dollar Cactus",
        "#66826C",
        "cactus-star",
        75000,
        "images/category-5/astrophytum-asterias.jpg",
      ],
      [
        71,
        "Astrophytum myriostigma",
        "Bishop's Cap (Topi Uskup)",
        "#748F78",
        "cactus-star",
        65000,
        "images/category-5/astrophytum-myriostigma.jpg",
      ],
      [
        72,
        "Astrophytum capricorne",
        "Goat's Horn Cactus",
        "#5B785F",
        "cactus-star",
        78000,
        "images/category-5/astrophytum-capricorne.jpg",
      ],
      [
        73,
        "Astrophytum ornatum",
        "Monk's Hood Cactus",
        "#5A855C",
        "cactus-star",
        70000,
        "images/category-5/astrophytum-ornatum.jpg",
      ],
      [
        74,
        "Echinocactus grusonii",
        "Golden Barrel (Tong Emas)",
        "#467D47",
        "golden-barrel",
        50000,
        "images/category-5/echinocactus-grusonii.jpg",
      ],
      [
        75,
        "Ferocactus latispinus",
        "Devil's Tongue Barrel",
        "#4B7D4E",
        "golden-barrel",
        62000,
        "images/category-5/ferocactus-latispinus.jpg",
      ],
      [
        76,
        "Mammillaria elongata",
        "Ladyfinger Cactus",
        "#6C9154",
        "cactus-round",
        35000,
        "images/category-5/mammillaria-elongata.jpg",
      ],
      [
        77,
        "Mammillaria plumosa",
        "Feather Cactus (Kaktus Bulu)",
        "#D7DDD6",
        "cactus-round",
        65000,
        "images/category-5/mammillaria-plumosa.jpg",
      ],
      [
        78,
        "Mammillaria hahniana",
        "Old Lady Cactus",
        "#739975",
        "cactus-round",
        48000,
        "images/category-5/mammillaria-hahniana.jpg",
      ],
      [
        79,
        "Mammillaria bocasana",
        "Powder Puff Cactus",
        "#8DA88E",
        "cactus-round",
        46000,
        "images/category-5/mammillaria-bocasana.jpg",
      ],
      [
        80,
        "Parodia magnifica",
        "Balloon Cactus",
        "#598C5E",
        "golden-barrel",
        52000,
        "images/category-5/parodia-magnifica.jpg",
      ],
      [
        81,
        "Parodia leninghausii",
        "Yellow Tower Cactus",
        "#6B9654",
        "golden-barrel",
        45000,
        "images/category-5/parodia-leninghausii.jpg",
      ],
      [
        82,
        "Melocactus matanzanus",
        "Turk's Cap Cactus",
        "#4B804E",
        "moon-cactus",
        80000,
        "images/category-5/melocactus-matanzanus.jpg",
      ],
      [
        83,
        "Coryphantha elephantidens",
        "Elephant Tooth Cactus",
        "#4C7D53",
        "cactus-round",
        72000,
        "images/category-5/coryphantha-elephantidens.jpg",
      ],
      [
        84,
        "Frailea castanea",
        "Kaktus Mini Cokelat",
        "#6B574A",
        "cactus-star",
        68000,
        "images/category-5/frailea-castanea.jpg",
      ],
      [
        85,
        "Rebutia minuscula",
        "Crown Cactus",
        "#5A8A58",
        "cactus-round",
        42000,
        "images/category-5/rebutia-minuscula.jpg",
      ],
    ],
  },
  {
    id: "kategori-6",
    nomor: "Kategori 6",
    namaNav: "Kolom & Hutan",
    judul: "Kaktus Kolom, Centong & Kaktus Hutan",
    subjudul: "Columnar, Paddle & Epiphytic Cacti",
    ciriKhas:
      "Tumbuh menjulang tinggi seperti pilar, berbentuk pipih seperti centong/telinga kelinci, serta kaktus hutan tanpa duri tajam.",
    cahayaDefault: "Terang / Teduh Terang",
    siramDefault: "7–10 hari sekali",
    potDefault: "12 cm Terakota",
    tanaman: [
      [
        86,
        "Opuntia microdasys",
        "Bunny Ears Cactus",
        "#6D9963",
        "bunny-ear",
        38000,
        "images/category-6/opuntia-microdasys.jpg",
      ],
      [
        87,
        "Tephrocactus geometricus",
        "Snowman / Pinecone Cactus",
        "#7C9182",
        "bunny-ear",
        95000,
        "images/category-6/tephrocactus-geometricus.jpg",
      ],
      [
        88,
        "Opuntia monacantha 'Variegata'",
        "Joseph's Coat Cactus",
        "#8DB37B",
        "bunny-ear",
        42000,
        "images/category-6/opuntia-monacantha-variegata.jpg",
      ],
      [
        89,
        "Opuntia ficus-indica",
        "Prickly Pear (Kaktus Centong)",
        "#5A8C55",
        "bunny-ear",
        40000,
        "images/category-6/opuntia-ficus-indica.jpg",
      ],
      [
        90,
        "Cereus repandus 'Monstrose'",
        "Kaktus Batu Karang",
        "#52825B",
        "column",
        55000,
        "images/category-6/cereus-repandus-monstrose.jpg",
      ],
      [
        91,
        "Cereus jamacaru",
        "Mandacaru (Kaktus Koboi)",
        "#497A53",
        "column",
        65000,
        "images/category-6/cereus-jamacaru.jpg",
      ],
      [
        92,
        "Pilosocereus pachycladus",
        "Blue Torch Cactus",
        "#5E9196",
        "column",
        60000,
        "images/category-6/pilosocereus-pachycladus.jpg",
      ],
      [
        93,
        "Cephalocereus senilis",
        "Old Man Cactus",
        "#BFC7C1",
        "column",
        75000,
        "images/category-6/cephalocereus-senilis.jpg",
      ],
      [
        94,
        "Cleistocactus strausii",
        "Silver Torch Cactus",
        "#9DB0A5",
        "column",
        58000,
        "images/category-6/cleistocactus-strausii.jpg",
      ],
      [
        95,
        "Myrtillocactus geometrizans",
        "Blue Myrtle Cactus",
        "#588A8E",
        "column",
        62000,
        "images/category-6/myrtillocactus-geometrizans.jpg",
      ],
      [
        96,
        "Selenicereus anthonyanus",
        "Fishbone Cactus",
        "#558C56",
        "epiphyte",
        55000,
        "images/category-6/selenicereus-anthonyanus.jpg",
      ],
      [
        97,
        "Schlumbergera truncata",
        "Christmas Cactus (Kepiting)",
        "#4F8750",
        "epiphyte",
        45000,
        "images/category-6/schlumbergera-truncata.jpg",
      ],
      [
        98,
        "Hatiora gaertneri",
        "Easter Cactus",
        "#5B9459",
        "epiphyte",
        48000,
        "images/category-6/hatiora-gaertneri.jpg",
      ],
      [
        99,
        "Epiphyllum oxypetalum",
        "Wijayakusuma",
        "#4C824D",
        "epiphyte",
        50000,
        "images/category-6/epiphyllum-oxypetalum.jpg",
      ],
      [
        100,
        "Rhipsalis baccifera",
        "Mistletoe Cactus",
        "#6EA368",
        "epiphyte",
        44000,
        "images/category-6/rhipsalis-baccifera.jpg",
      ],
    ],
  },
];

const idBarangPopuler = [
  1, 3, 4, 10, 11, 16, 18, 21, 23, 29, 36, 39, 40, 43, 45, 51, 54, 56, 58, 59,
  64, 65, 66, 67, 70, 71, 74, 77, 86, 87, 92, 96, 99,
];

function formatRupiah(angka) {
  return "Rp " + angka.toLocaleString("id-ID");
}

function acakArray(arrayAsli) {
  const salinan = arrayAsli.slice();
  for (let i = salinan.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const sementara = salinan[i];
    salinan[i] = salinan[j];
    salinan[j] = sementara;
  }
  return salinan;
}

function ambilSemuaTanaman() {
  const hasil = [];
  daftarKategori.forEach(function (kat) {
    kat.tanaman.forEach(function (item) {
      const populer = idBarangPopuler.indexOf(item[0]) !== -1;
      hasil.push({
        id: item[0],
        namaLatin: item[1],
        namaPopuler: item[2],
        warna: item[3],
        bentuk: item[4],
        harga: item[5],
        hargaAsli: populer ? item[5] + 10000 : null,
        gambar: item[6],
        populer: populer,
        rating: populer ? "4.9" : "4.8",
        kategoriId: kat.id,
        kategoriNomor: kat.nomor,
        kategoriJudul: kat.judul,
        kategoriSingkat: kat.namaNav,
        ciriKhas: kat.ciriKhas,
        pot: kat.potDefault,
        cahaya: kat.cahayaDefault,
        siram: kat.siramDefault,
      });
    });
  });
  return hasil;
}

function buatIlustrasiSVG(tipe, warna, ukuran) {
  const w = ukuran || 155;
  const h = ukuran ? Math.round(ukuran * 0.94) : 145;
  const pot = `
    <path d="M58 118 L122 118 L113 158 L67 158 Z" fill="#C97352"/>
    <rect x="54" y="110" width="72" height="10" rx="3" fill="#D88363"/>
    <ellipse cx="90" cy="110" rx="32" ry="4" fill="#6F5643"/>
  `;

  let bentuk = "";

  switch (tipe) {
    case "rosette":
    case "rosette-tip":
      bentuk = `
        <g>
          <ellipse cx="64" cy="96" rx="22" ry="11" transform="rotate(-22 64 96)" fill="${warna}"/>
          <ellipse cx="116" cy="96" rx="22" ry="11" transform="rotate(22 116 96)" fill="${warna}"/>
          <ellipse cx="90" cy="80" rx="13" ry="24" fill="${warna}" opacity="0.92"/>
          <ellipse cx="73" cy="88" rx="15" ry="19" transform="rotate(-36 73 88)" fill="${warna}" opacity="0.88"/>
          <ellipse cx="107" cy="88" rx="15" ry="19" transform="rotate(36 107 88)" fill="${warna}" opacity="0.88"/>
          <circle cx="90" cy="92" r="14" fill="#FFFFFF" opacity="0.16"/>
          <circle cx="90" cy="94" r="8" fill="${warna}"/>
          ${tipe === "rosette-tip" ? `<circle cx="90" cy="56" r="2.2" fill="#A64444"/><circle cx="63" cy="72" r="2.2" fill="#A64444"/><circle cx="117" cy="72" r="2.2" fill="#A64444"/>` : ""}
        </g>
      `;
      break;
    case "aeonium":
      bentuk = `
        <g>
          <rect x="86" y="76" width="8" height="35" fill="#786A5E"/>
          <circle cx="90" cy="64" r="26" fill="${warna}"/>
          <circle cx="90" cy="64" r="16" fill="#2A1820"/>
          <circle cx="90" cy="64" r="6" fill="#4E7548"/>
        </g>
      `;
      break;
    case "zebra":
      bentuk = `
        <g>
          <path d="M90 108 L54 58 L74 108 Z" fill="${warna}"/>
          <path d="M90 108 L126 58 L106 108 Z" fill="${warna}"/>
          <path d="M90 108 L73 42 L89 108 Z" fill="${warna}"/>
          <path d="M90 108 L107 42 L91 108 Z" fill="${warna}"/>
          <path d="M90 110 L90 36 L99 110 Z" fill="${warna}"/>
          <path d="M64 72 L74 70 M68 82 L78 80 M84 56 L96 56 M83 68 L97 68 M106 72 L116 70" stroke="#ECF4EE" stroke-width="2.2" stroke-linecap="round"/>
        </g>
      `;
      break;
    case "cooperi":
    case "truncata":
      bentuk = `
        <g>
          <ellipse cx="70" cy="95" rx="11" ry="15" transform="rotate(-18 70 95)" fill="${warna}"/>
          <ellipse cx="110" cy="95" rx="11" ry="15" transform="rotate(18 110 95)" fill="${warna}"/>
          <ellipse cx="82" cy="86" rx="10" ry="16" fill="${warna}"/>
          <ellipse cx="98" cy="86" rx="10" ry="16" fill="${warna}"/>
          <ellipse cx="90" cy="92" rx="10" ry="14" fill="#CBE8D4" opacity="0.55"/>
        </g>
      `;
      break;
    case "gasteria":
    case "aloe":
      bentuk = `
        <g>
          <path d="M90 108 Q64 78 52 58 Q72 74 88 108 Z" fill="${warna}"/>
          <path d="M90 108 Q116 78 128 58 Q108 74 92 108 Z" fill="${warna}"/>
          <path d="M90 108 Q74 68 70 44 Q82 68 90 108 Z" fill="${warna}"/>
          <path d="M90 108 Q106 68 110 44 Q98 68 90 108 Z" fill="${warna}"/>
          <path d="M90 108 Q86 60 90 38 Q94 60 90 108 Z" fill="${warna}"/>
          <circle cx="72" cy="80" r="1.8" fill="#E6F2E9"/>
          <circle cx="108" cy="80" r="1.8" fill="#E6F2E9"/>
          <circle cx="90" cy="68" r="2" fill="#E6F2E9"/>
        </g>
      `;
      break;
    case "pearls":
    case "hearts":
    case "tail":
      bentuk = `
        <g>
          <path d="M72 112 Q60 128 62 146" fill="none" stroke="#4D7E59" stroke-width="2"/>
          <path d="M90 112 Q92 132 88 152" fill="none" stroke="#4D7E59" stroke-width="2"/>
          <path d="M108 112 Q118 128 115 145" fill="none" stroke="#4D7E59" stroke-width="2"/>
          <circle cx="72" cy="105" r="8" fill="${warna}"/>
          <circle cx="88" cy="101" r="9" fill="${warna}"/>
          <circle cx="104" cy="105" r="8" fill="${warna}"/>
          <circle cx="80" cy="93" r="8" fill="${warna}"/>
          <circle cx="96" cy="93" r="8" fill="${warna}"/>
          <circle cx="64" cy="122" r="5.5" fill="${warna}"/>
          <circle cx="61" cy="134" r="5" fill="${warna}"/>
          <circle cx="90" cy="124" r="6" fill="${warna}"/>
          <circle cx="90" cy="137" r="5.5" fill="${warna}"/>
          <circle cx="114" cy="122" r="5.5" fill="${warna}"/>
          <circle cx="116" cy="134" r="5" fill="${warna}"/>
        </g>
      `;
      break;
    case "lithops":
    case "conophytum":
    case "baby-toes":
      bentuk = `
        <g>
          <path d="M68 110 C64 88, 86 88, 84 110 Z" fill="${warna}"/>
          <ellipse cx="75" cy="93" rx="10" ry="5" fill="#D4C2B0" opacity="0.65"/>
          <path d="M92 110 C88 82, 118 82, 114 110 Z" fill="${warna}"/>
          <ellipse cx="103" cy="88" rx="12" ry="5.5" fill="#D4C2B0" opacity="0.65"/>
          <path d="M94 88 L112 88" stroke="#4A3F35" stroke-width="2"/>
        </g>
      `;
      break;
    case "jade":
    case "gollum":
    case "panda":
      bentuk = `
        <g>
          <path d="M90 110 L90 72" stroke="#7A5C43" stroke-width="6" stroke-linecap="round"/>
          <path d="M90 88 L72 74" stroke="#7A5C43" stroke-width="4.5" stroke-linecap="round"/>
          <path d="M90 86 L108 72" stroke="#7A5C43" stroke-width="4.5" stroke-linecap="round"/>
          <ellipse cx="66" cy="68" rx="12" ry="8" transform="rotate(-25 66 68)" fill="${warna}"/>
          <ellipse cx="114" cy="66" rx="12" ry="8" transform="rotate(25 114 66)" fill="${warna}"/>
          <ellipse cx="82" cy="58" rx="11" ry="8" transform="rotate(-15 82 58)" fill="${warna}"/>
          <ellipse cx="98" cy="56" rx="11" ry="8" transform="rotate(15 98 56)" fill="${warna}"/>
          <ellipse cx="90" cy="46" rx="9" ry="11" fill="${warna}"/>
        </g>
      `;
      break;
    case "moon-cactus":
      bentuk = `
        <g>
          <rect x="78" y="68" width="24" height="42" rx="4" fill="#4E8550"/>
          <circle cx="90" cy="54" r="20" fill="${warna}"/>
          <path d="M90 34 L90 74 M76 42 L76 66 M104 42 L104 66" stroke="#FFFFFF" stroke-width="1" stroke-dasharray="2 3" opacity="0.7"/>
        </g>
      `;
      break;
    case "cactus-round":
    case "cactus-star":
    case "golden-barrel":
      bentuk = `
        <g>
          <circle cx="90" cy="82" r="29" fill="${warna}"/>
          <ellipse cx="90" cy="82" rx="18" ry="29" fill="none" stroke="#FFFFFF" stroke-width="1.2" opacity="0.35"/>
          <ellipse cx="90" cy="82" rx="8" ry="29" fill="none" stroke="#FFFFFF" stroke-width="1.2" opacity="0.35"/>
          <circle cx="90" cy="55" r="7" fill="#F2E2B6" opacity="0.8"/>
          ${tipe === "golden-barrel" ? `<circle cx="90" cy="82" r="30" fill="none" stroke="#E8C65B" stroke-width="2" stroke-dasharray="2 4"/>` : ""}
        </g>
      `;
      break;
    case "bunny-ear":
      bentuk = `
        <g>
          <ellipse cx="90" cy="95" rx="16" ry="18" fill="${warna}"/>
          <ellipse cx="72" cy="70" rx="12" ry="18" transform="rotate(-18 72 70)" fill="${warna}"/>
          <ellipse cx="108" cy="70" rx="12" ry="18" transform="rotate(18 108 70)" fill="${warna}"/>
          <circle cx="70" cy="64" r="1.5" fill="#F7EBD2"/>
          <circle cx="75" cy="74" r="1.5" fill="#F7EBD2"/>
          <circle cx="106" cy="64" r="1.5" fill="#F7EBD2"/>
          <circle cx="110" cy="74" r="1.5" fill="#F7EBD2"/>
        </g>
      `;
      break;
    case "column":
      bentuk = `
        <g>
          <rect x="78" y="34" width="24" height="78" rx="12" fill="${warna}"/>
          <rect x="62" y="56" width="12" height="32" rx="6" fill="${warna}"/>
          <rect x="62" y="78" width="20" height="10" rx="5" fill="${warna}"/>
          <line x1="86" y1="38" x2="86" y2="108" stroke="#FFFFFF" stroke-width="1.2" opacity="0.3"/>
          <line x1="94" y1="38" x2="94" y2="108" stroke="#FFFFFF" stroke-width="1.2" opacity="0.3"/>
        </g>
      `;
      break;
    case "epiphyte":
      bentuk = `
        <g>
          <path d="M90 110 Q75 82 54 62 Q72 76 88 108 Z" fill="${warna}"/>
          <path d="M90 110 Q105 82 126 62 Q108 76 92 108 Z" fill="${warna}"/>
          <path d="M90 110 Q84 74 88 42 Q94 74 90 110 Z" fill="${warna}"/>
          <circle cx="56" cy="62" r="5" fill="#E37B96"/>
          <circle cx="124" cy="62" r="5" fill="#E37B96"/>
        </g>
      `;
      break;
    default:
      bentuk = `<circle cx="90" cy="84" r="24" fill="${warna}"/>`;
  }

  return `
    <svg viewBox="0 0 180 170" width="${w}" height="${h}" aria-hidden="true">
      ${bentuk}
      ${pot}
    </svg>
  `;
}

function renderMediaProduk(produk, ukuranSVG) {
  if (produk.gambar && produk.gambar.trim() !== "") {
    return `<img class="product-image" src="${produk.gambar}" alt="${produk.namaPopuler} (${produk.namaLatin})" loading="lazy">`;
  }
  return buatIlustrasiSVG(produk.bentuk, produk.warna, ukuranSVG);
}

// Kartu produk gaya modern minimalis (klik kartu membuka halaman detail produk)
function buatKartuModernHTML(produk, teksPill, pakaiKuning) {
  const noUrut = "#" + String(produk.id).padStart(3, "0");
  const kelasPill = pakaiKuning
    ? "card-pill-left card-pill-yellow"
    : "card-pill-left";
  const hargaCoret = produk.hargaAsli
    ? `<span class="card-old-price">${formatRupiah(produk.hargaAsli)}</span>`
    : "";

  return `
    <a class="product-card" href="index.html?produk=${produk.id}">
      <div class="product-media">
        <span class="${kelasPill}">${teksPill}</span>
        <span class="card-num-right">${noUrut}</span>
        ${renderMediaProduk(produk, 175)}
      </div>
      <div class="product-info">
        <div class="card-meta-row">
          <span class="card-cat-name">${produk.kategoriSingkat}</span>
          <span class="card-rating"><span class="star-yellow">&#9733;</span> ${produk.rating}</span>
        </div>
        <h3 class="card-title">${produk.namaPopuler}</h3>
        <p class="card-latin">${produk.namaLatin}</p>
        <div class="card-price-row">
          <span class="card-price">${formatRupiah(produk.harga)}</span>
          ${hargaCoret}
        </div>
      </div>
    </a>
  `;
}

// 1. Render Halaman Utama (Bersih, Fresh, Modern — Plant Shop Reference Style)
function renderBeranda(container) {
  const semuaTanaman = ambilSemuaTanaman();
  const kolamPopuler = semuaTanaman.filter(function (t) {
    return t.populer;
  });
  const populerAcak = acakArray(kolamPopuler).slice(0, 8);
  const spotlight = populerAcak[0];

  const idSudah = populerAcak.map(function (t) { return t.id; });
  const sisa = semuaTanaman.filter(function (t) {
    return idSudah.indexOf(t.id) === -1;
  });
  const freshAcak = acakArray(sisa).slice(0, 4);

  // --- Circle category cards (reference style) ---
  const kategoriCircleHTML = daftarKategori
    .map(function (kat) {
      const svgRandom = kat.tanaman[Math.floor(Math.random() * Math.min(3, kat.tanaman.length))];
      const mediaSVG = buatIlustrasiSVG(svgRandom[4], svgRandom[3], 90);
      return `
        <a class="cat-circle-item" href="index.html?kategori=${kat.id}">
          <div class="cat-circle-img">
            <div class="cat-circle-svg">${mediaSVG}</div>
          </div>
          <div class="cat-circle-name">${kat.namaNav}</div>
          <div class="cat-circle-count">${kat.tanaman.length} Jenis</div>
        </a>
      `;
    })
    .join("");

  const populerHTML = populerAcak
    .map(function (p) { return buatKartuModernHTML(p, "Populer", false); })
    .join("");

  const freshHTML = freshAcak
    .map(function (p) { return buatKartuModernHTML(p, "Fresh Pick", true); })
    .join("");

  container.innerHTML = `
    <section class="hero-modern">
      <div class="container">
        <div class="hero-card">
          <div>
            <div class="hero-badge">
              <span class="hero-badge-dot"></span>
              Toko Tanaman Sukulen &amp; Kaktus Terbaik
            </div>
            <h2 class="hero-title">Koleksi <span>Sukulen &amp; Kaktus</span><br>untuk Rumah Lebih Segar</h2>
            <p class="hero-desc">
              Jelajahi 100 varietas pilihan yang telah dikelompokkan dalam 6 kategori praktis. Klik salah satu kategori atau produk di bawah untuk melihat detail perawatannya.
            </p>
            <div class="hero-actions">
              <a class="btn-primary" href="#kategori-section">
                Belanja Sekarang
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
              <a class="btn-ghost" href="index.html">
                Lihat Semua Produk
              </a>
            </div>
            <div class="hero-stats">
              <div class="stat-item">
                <strong>100</strong>
                <span>Jenis Tanaman</span>
              </div>
              <div class="stat-item">
                <strong>6</strong>
                <span>Kategori Rapi</span>
              </div>
              <div class="stat-item">
                <strong>Terakota</strong>
                <span>Termasuk Pot Asli</span>
              </div>
            </div>
          </div>

          <div>
            <a class="hero-spotlight" href="index.html?produk=${spotlight.id}">
              <span class="spotlight-label">Sorotan Populer Hari Ini</span>
              <div class="spotlight-media">
                ${renderMediaProduk(spotlight, 160)}
              </div>
              <div class="spotlight-name">${spotlight.namaPopuler}</div>
              <div class="spotlight-price">${formatRupiah(spotlight.harga)}</div>
            </a>
            <div class="hero-float-badge">
              <span class="hero-float-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
              Pengiriman Aman Berlapis
            </div>
            <div class="hero-float-badge" style="margin-top:8px;">
              <span class="hero-float-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </span>
              Pembayaran Aman &amp; Terpercaya
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-block" id="kategori-section">
      <div class="container">
        <div class="section-head-centered">
          <span class="section-eyebrow">Kategori Kami</span>
          <h2 class="section-heading">Belanja Berdasarkan <span>Kategori</span></h2>
        </div>
        <div class="category-circle-grid">
          ${kategoriCircleHTML}
        </div>
      </div>
    </section>

    <section class="section-block" style="background-color:var(--bg-soft); padding-top:60px; padding-bottom:60px;">
      <div class="container">
        <div class="section-head-flex">
          <div>
            <span class="section-eyebrow" style="display:inline-block; margin-bottom:8px;">Terlaris</span>
            <h2 class="section-heading">Barang <span>Populer Pilihan</span></h2>
            <p class="section-sub">8 tanaman paling diminati yang diacak setiap kali halaman dibuka.</p>
          </div>
          <span class="section-pill">8 Produk Acak Populer</span>
        </div>
        <div class="product-grid">
          ${populerHTML}
        </div>
      </div>
    </section>

    <section class="section-block">
      <div class="container">
        <div class="section-head-flex">
          <div>
            <span class="section-eyebrow" style="display:inline-block; margin-bottom:8px;">Koleksi Baru</span>
            <h2 class="section-heading">Eksplorasi <span>Koleksi Acak</span></h2>
            <p class="section-sub">4 pilihan menarik lainnya untuk variasi rak tanaman Anda.</p>
          </div>
          <span class="section-pill">4 Produk Fresh</span>
        </div>
        <div class="product-grid">
          ${freshHTML}
        </div>
      </div>
    </section>
  `;
}

// 2. Render Halaman Khusus Satu Kategori
function renderHalamanKategori(container, kategoriObj) {
  const daftarProduk = ambilSemuaTanaman().filter(function (t) {
    return t.kategoriId === kategoriObj.id;
  });

  const kartuHTML = daftarProduk
    .map(function (p) {
      return buatKartuModernHTML(
        p,
        p.populer ? "Populer" : kategoriObj.namaNav,
        false,
      );
    })
    .join("");

  document.title = kategoriObj.judul + " — SukulenLoka";

  container.innerHTML = `
    <section class="page-banner">
      <div class="container">
        <h2 class="page-banner-title">${kategoriObj.judul}</h2>
        <div class="breadcrumb">
          <a href="index.html">Beranda</a>
          <span>/</span>
          <span>${kategoriObj.nomor}</span>
          <span>/</span>
          <span>${kategoriObj.namaNav}</span>
        </div>
      </div>
    </section>

    <section class="section-block">
      <div class="container">
        <div class="cat-intro-box">
          <p><strong>Ciri khas ${kategoriObj.nomor}:</strong> ${kategoriObj.ciriKhas}</p>
          <span class="section-pill">${daftarProduk.length} Jenis Tersedia</span>
        </div>

        <div class="product-grid">
          ${kartuHTML}
        </div>
      </div>
    </section>
  `;
}

// 3. Render Halaman Detail Produk (Seperti Referensi Gambar Utama Anda)
function renderHalamanProduk(container, produk) {
  const semua = ambilSemuaTanaman();
  const terkait = acakArray(
    semua.filter(function (t) {
      return t.kategoriId === produk.kategoriId && t.id !== produk.id;
    }),
  ).slice(0, 4);

  const terkaitHTML = terkait
    .map(function (p) {
      return buatKartuModernHTML(
        p,
        p.populer ? "Populer" : p.kategoriSingkat,
        false,
      );
    })
    .join("");

  const sku =
    "SKL-" +
    String(produk.id).padStart(3, "0") +
    "-" +
    produk.kategoriId.toUpperCase();
  const hargaCoretHTML = produk.hargaAsli
    ? `<span class="detail-old-price">${formatRupiah(produk.hargaAsli)}</span>`
    : "";

  document.title = produk.namaPopuler + " — SukulenLoka";

  container.innerHTML = `
    <section class="page-banner">
      <div class="container">
        <h2 class="page-banner-title">Detail Tanaman</h2>
        <div class="breadcrumb">
          <a href="index.html">Beranda</a>
          <span>/</span>
          <a href="index.html?kategori=${produk.kategoriId}">${produk.kategoriSingkat}</a>
          <span>/</span>
          <span>${produk.namaPopuler}</span>
        </div>
      </div>
    </section>

    <section class="detail-section">
      <div class="container">
        <div class="detail-grid">
          <div>
            <div class="detail-gallery-box">
              ${renderMediaProduk(produk, 270)}
            </div>
            <div class="detail-thumbs">
              <div class="thumb-info-box">
                <span>Pot Bawaan</span>
                <strong>${produk.pot}</strong>
              </div>
              <div class="thumb-info-box">
                <span>Cahaya</span>
                <strong>${produk.cahaya}</strong>
              </div>
              <div class="thumb-info-box">
                <span>Penyiraman</span>
                <strong>${produk.siram}</strong>
              </div>
            </div>
          </div>

          <div>
            <p class="detail-cat-label">${produk.kategoriJudul}</p>
            <div class="detail-title-row">
              <h2 class="detail-title">${produk.namaPopuler}</h2>
              <span class="stock-badge">Tersedia</span>
            </div>

            <div class="detail-rating-row">
              <span class="star-yellow">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              <strong>${produk.rating}</strong>
              <span>(Koleksi Terverifikasi Kebun Lembang)</span>
            </div>

            <div class="detail-price-row">
              <span class="detail-price">${formatRupiah(produk.harga)}</span>
              ${hargaCoretHTML}
            </div>

            <p class="detail-desc">
              <strong>${produk.namaLatin}</strong> — ${produk.ciriKhas} Cocok sebagai koleksi pribadi, dekorasi meja kerja, maupun hadiah tanaman hidup yang tahan lama.
            </p>

            <div class="spec-group">
              <span class="spec-group-label">Ukuran Pot Katalog</span>
              <div class="chip-row">
                <span class="chip chip-active">${produk.pot}</span>
                <span class="chip">Termasuk Media Porous</span>
                <span class="chip">Batu Hias Atas</span>
              </div>
            </div>

            <div class="spec-group">
              <span class="spec-group-label">Karakter Perawatan</span>
              <div class="chip-row">
                <span class="chip">Cahaya: ${produk.cahaya}</span>
                <span class="chip">Siram: ${produk.siram}</span>
              </div>
            </div>

            <div class="detail-notice-box">
              Halaman ini merupakan <strong>katalog produk resmi</strong>. Untuk melihat koleksi sejenis lainnya, silakan pilih dari kategori <strong>${produk.kategoriJudul}</strong>.
            </div>

            <div class="detail-meta-list">
              <div><strong>SKU:</strong> ${sku}</div>
              <div><strong>Nama Botani:</strong> <em>${produk.namaLatin}</em></div>
              <div><strong>Kategori:</strong> ${produk.kategoriNomor} (${produk.kategoriJudul})</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="detail-tabs-section">
      <div class="container">
        <div class="tabs-header">
          <span class="tab-label">Deskripsi &amp; Perawatan</span>
          <span class="tab-label-muted">Informasi Tambahan</span>
        </div>

        <div class="desc-content">
          <p class="desc-paragraph">
            Setiap tanaman <strong>${produk.namaPopuler}</strong> (<em>${produk.namaLatin}</em>) dirawat langsung di kebun dataran tinggi Lembang agar memiliki warna daun yang cerah, batang kokoh, dan perakaran yang mapan sebelum dikirim dalam paket pot terakota.
          </p>
          <ul class="checklist">
            <li><span class="check-dot">&#10003;</span> Pastikan mendapat pencahayaan <strong>${produk.cahaya}</strong> agar bentuk daun tetap kompak.</li>
            <li><span class="check-dot">&#10003;</span> Lakukan penyiraman terukur sekitar <strong>${produk.siram}</strong> saat media tanam benar-benar kering.</li>
            <li><span class="check-dot">&#10003;</span> Gunakan pot berlubang drainase (seperti terakota) agar sirkulasi akar tetap sehat.</li>
            <li><span class="check-dot">&#10003;</span> Sudah lengkap dengan media tanam porous dan taburan kerikil hias rapi.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section-block">
      <div class="container">
        <div class="section-head-centered">
          <span class="section-eyebrow">Produk Terkait</span>
          <h2 class="section-heading">Eksplorasi <span>Tanaman Sejenis</span></h2>
        </div>
        <div class="product-grid">
          ${terkaitHTML}
        </div>
      </div>
    </section>
  `;
}

// Inisialisasi Halaman
document.addEventListener("DOMContentLoaded", function () {
  const navContainer = document.getElementById("top-nav");
  const mainContent = document.getElementById("main-content");
  const copyrightElement = document.getElementById("copyright-text");
  const tickerTrack = document.getElementById("ticker-track");

  const params = new URLSearchParams(window.location.search);
  const kategoriId = params.get("kategori");
  const produkId = parseInt(params.get("produk"), 10);

  const semuaTanaman = ambilSemuaTanaman();
  const produkAktif = !isNaN(produkId)
    ? semuaTanaman.find(function (t) { return t.id === produkId; })
    : null;

  const kategoriAktif = produkAktif
    ? daftarKategori.find(function (k) { return k.id === produkAktif.kategoriId; })
    : daftarKategori.find(function (k) { return k.id === kategoriId; });

  if (copyrightElement) {
    const tahun = new Date().getFullYear();
    copyrightElement.innerHTML =
      "&copy; " + tahun + " SukulenLoka. Katalog Tanaman Sukulen &amp; Kaktus.";
  }

  // --- Ticker / Marquee Strip ---
  if (tickerTrack) {
    const tickerItems = daftarKategori
      .map(function (kat) {
        return `<span class="ticker-item">${kat.namaNav} <span class="ticker-sep">🌿</span></span>`;
      })
      .join("");
    // Duplikat untuk seamless loop
    tickerTrack.innerHTML = tickerItems + tickerItems;
  }

  // --- Navbar ---
  if (navContainer) {
    const berandaClass = !kategoriAktif && !produkAktif ? "nav-link active" : "nav-link";
    const linkBeranda = `<a class="${berandaClass}" href="index.html">Beranda</a>`;
    const linkKategori = daftarKategori
      .map(function (kat) {
        const aktif = kategoriAktif && kategoriAktif.id === kat.id ? "nav-link active" : "nav-link";
        return `<a class="${aktif}" href="index.html?kategori=${kat.id}">${kat.namaNav}</a>`;
      })
      .join("");
    navContainer.innerHTML = linkBeranda + linkKategori;
  }

  if (mainContent) {
    if (produkAktif) {
      renderHalamanProduk(mainContent, produkAktif);
    } else if (kategoriAktif) {
      renderHalamanKategori(mainContent, kategoriAktif);
    } else {
      renderBeranda(mainContent);
    }
  }
});






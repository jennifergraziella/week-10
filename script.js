// Data lengkap 23 produk sukulen dan kaktus sesuai gambar pada folder images/
const katalogSukulen = [
  {
    id: 1,
    nama: "Baby Toes",
    namaLatin: "Fenestraria rhopalophylla",
    kategori: "Unik",
    status: "Koleksi Langka",
    statusKelas: "badge-rare",
    deskripsi: "Sukulen mungil berdaun silinder tegak dengan ujung transparan menyerupai jari-jari bayi yang menggemaskan.",
    ukuranPot: "9 cm (Terakota)",
    cahaya: "Terang Pagi Hari",
    penyiraman: "10–14 hari sekali",
    harga: 52000,
    gambar: "images/01-baby-toes.jpg"
  },
  {
    id: 2,
    nama: "Kaktus Bintang (Bishop's Cap)",
    namaLatin: "Astrophytum myriostigma",
    kategori: "Kaktus",
    status: "Koleksi Langka",
    statusKelas: "badge-rare",
    deskripsi: "Kaktus lima rusuk berbentuk bintang tanpa duri tajam dengan corak bintik putih halus yang sangat simetris.",
    ukuranPot: "9 cm (Terakota)",
    cahaya: "Terang Maksimal",
    penyiraman: "2 minggu sekali",
    harga: 65000,
    gambar: "images/02-bishops-cap.jpg"
  },
  {
    id: 3,
    nama: "Kaktus Telinga Kelinci",
    namaLatin: "Opuntia microdasys",
    kategori: "Kaktus",
    status: "Favorit",
    statusKelas: "badge-popular",
    deskripsi: "Memiliki bantalan daun pipih yang tumbuh berpasangan layaknya telinga kelinci dengan bintik halus berwarna krem.",
    ukuranPot: "10 cm (Terakota)",
    cahaya: "Matahari Penuh",
    penyiraman: "10–14 hari sekali",
    harga: 38000,
    gambar: "images/03-bunny-ear.jpg"
  },
  {
    id: 4,
    nama: "Sedum Ekor Keledai",
    namaLatin: "Sedum morganianum",
    kategori: "Gantung",
    status: "Favorit",
    statusKelas: "badge-popular",
    deskripsi: "Batang menjuntai rimbun yang dipenuhi daun gemuk berwarna hijau kebiruan, cocok untuk rak tinggi atau sudut jendela.",
    ukuranPot: "12 cm (Terakota)",
    cahaya: "Terang Tidak Langsung",
    penyiraman: "7–10 hari sekali",
    harga: 48000,
    gambar: "images/04-burros-tail.jpg"
  },
  {
    id: 5,
    nama: "String of Hearts",
    namaLatin: "Ceropegia woodii",
    kategori: "Gantung",
    status: "Favorit",
    statusKelas: "badge-popular",
    deskripsi: "Tanaman rambat menjuntai dengan helaian daun mungil berbentuk hati bermotif perak dan bagian bawah berwarna ungu lembut.",
    ukuranPot: "10 cm (Terakota)",
    cahaya: "Teduh Terang",
    penyiraman: "7 hari sekali",
    harga: 50000,
    gambar: "images/05-string-of-hearts.jpg"
  },
  {
    id: 6,
    nama: "Cocoon Plant (Senecio Wol)",
    namaLatin: "Senecio haworthii",
    kategori: "Unik",
    status: "Koleksi Langka",
    statusKelas: "badge-rare",
    deskripsi: "Sukulen berpenampilan eksotis karena seluruh daunnya terselimuti lapisan serabut putih lembut menyerupai kapas atau kepompong.",
    ukuranPot: "9 cm (Terakota)",
    cahaya: "Terang Pagi Hari",
    penyiraman: "10 hari sekali",
    harga: 58000,
    gambar: "images/06-cocoon-plant.jpg"
  },
  {
    id: 7,
    nama: "Jade Gollum (Jari Shrek)",
    namaLatin: "Crassula ovata 'Gollum'",
    kategori: "Klasik",
    status: "Tersedia",
    statusKelas: "badge-available",
    deskripsi: "Varietas tanaman giok unik dengan daun berbentuk tabung memanjang yang ujungnya berlekuk kemerahan saat cukup sinar matahari.",
    ukuranPot: "11 cm (Terakota)",
    cahaya: "Matahari Pagi",
    penyiraman: "7 hari sekali",
    harga: 42000,
    gambar: "images/07-gollum-jade.jpg"
  },
  {
    id: 8,
    nama: "Adenium / Kamboja Jepang",
    namaLatin: "Adenium obesum",
    kategori: "Berbunga",
    status: "Favorit",
    statusKelas: "badge-popular",
    deskripsi: "Sukulen berbatang bonggol kokoh layaknya bonsai alami dengan mahkota bunga merah muda cerah yang bermekaran.",
    ukuranPot: "14 cm (Terakota)",
    cahaya: "Matahari Penuh",
    penyiraman: "5–7 hari sekali",
    harga: 75000,
    gambar: "images/08-adenium.jpg"
  },
  {
    id: 9,
    nama: "String of Nickels",
    namaLatin: "Dischidia nummularia",
    kategori: "Gantung",
    status: "Tersedia",
    statusKelas: "badge-available",
    deskripsi: "Daun bulat pipih tersusun berpasangan di sepanjang sulur ramping, menghadirkan kesan minimalis dan asri di dalam ruangan.",
    ukuranPot: "11 cm (Terakota)",
    cahaya: "Teduh Terang",
    penyiraman: "5–7 hari sekali",
    harga: 45000,
    gambar: "images/09-string-of-nickels.jpg"
  },
  {
    id: 10,
    nama: "Gasteria Lidah Sapi",
    namaLatin: "Gasteria bicolor",
    kategori: "Mini",
    status: "Tersedia",
    statusKelas: "badge-available",
    deskripsi: "Berdaun tebal dan kokoh dengan tekstur bintik putih alami. Sangat toleran terhadap pencahayaan dalam ruangan.",
    ukuranPot: "10 cm (Terakota)",
    cahaya: "Teduh Terang",
    penyiraman: "7–10 hari sekali",
    harga: 35000,
    gambar: "images/10-gasteria.jpg"
  },
  {
    id: 11,
    nama: "Ghost Plant",
    namaLatin: "Graptopetalum paraguayense",
    kategori: "Roset",
    status: "Tersedia",
    statusKelas: "badge-available",
    deskripsi: "Roset elegan berwarna abu-abu keperakan dengan semburat ungu pastel yang mudah beranak dan tampak menawan.",
    ukuranPot: "10 cm (Terakota)",
    cahaya: "Terang Tidak Langsung",
    penyiraman: "7 hari sekali",
    harga: 34000,
    gambar: "images/11-ghost-plant.jpg"
  },
  {
    id: 12,
    nama: "Kaktus Tong Emas",
    namaLatin: "Echinocactus grusonii",
    kategori: "Kaktus",
    status: "Favorit",
    statusKelas: "badge-popular",
    deskripsi: "Kaktus berbentuk bulat simetris yang dibalut duri-duri kuning keemasan cerah dan mahkota berbulu halus di puncaknya.",
    ukuranPot: "11 cm (Terakota)",
    cahaya: "Matahari Penuh",
    penyiraman: "2 minggu sekali",
    harga: 49000,
    gambar: "images/12-golden-barrel.jpg"
  },
  {
    id: 13,
    nama: "Tanaman Giok (Jade Plant)",
    namaLatin: "Crassula ovata",
    kategori: "Klasik",
    status: "Tersedia",
    statusKelas: "badge-available",
    deskripsi: "Simbol keteduhan di meja kerja dengan batang berkayu seperti pohon mini serta daun oval hijau tua mengilap.",
    ukuranPot: "11 cm (Terakota)",
    cahaya: "Terang Tidak Langsung",
    penyiraman: "7 hari sekali",
    harga: 42000,
    gambar: "images/13-jade-plant.jpg"
  },
  {
    id: 14,
    nama: "Moon Cactus Merah",
    namaLatin: "Gymnocalycium mihanovichii",
    kategori: "Kaktus",
    status: "Tersedia",
    statusKelas: "badge-available",
    deskripsi: "Perpaduan kaktus bulat berwarna merah menyala di bagian atas yang disambung pada batang hijau segar yang kokoh.",
    ukuranPot: "9 cm (Terakota)",
    cahaya: "Terang Tidak Langsung",
    penyiraman: "7–10 hari sekali",
    harga: 36000,
    gambar: "images/14-moon-cactus.jpg"
  },
  {
    id: 15,
    nama: "Panda Plant",
    namaLatin: "Kalanchoe tomentosa",
    kategori: "Mini",
    status: "Tersedia",
    statusKelas: "badge-available",
    deskripsi: "Daun bertekstur beludru halus berwarna hijau keperakan dengan deretan titik cokelat tua di tepian daunnya.",
    ukuranPot: "10 cm (Terakota)",
    cahaya: "Terang Pagi Hari",
    penyiraman: "7 hari sekali",
    harga: 33000,
    gambar: "images/15-panda-plant.jpg"
  },
  {
    id: 16,
    nama: "Aeonium Mawar Hitam",
    namaLatin: "Aeonium arboreum 'Zwartkop'",
    kategori: "Roset",
    status: "Koleksi Langka",
    statusKelas: "badge-rare",
    deskripsi: "Tampil dramatis dengan susunan daun roset berwarna ungu kehitaman pekat dan titik tengah hijau segar di atas batang tegak.",
    ukuranPot: "12 cm (Terakota)",
    cahaya: "Matahari Pagi",
    penyiraman: "7 hari sekali",
    harga: 68000,
    gambar: "images/16-aeonium-zwartkop.jpg"
  },
  {
    id: 17,
    nama: "Sukulen Hati (Conophytum)",
    namaLatin: "Conophytum bilobum",
    kategori: "Unik",
    status: "Koleksi Langka",
    statusKelas: "badge-rare",
    deskripsi: "Sukulen mini berbentuk belahan hati gemuk dengan semburat garis kemerahan di ujung puncaknya.",
    ukuranPot: "8 cm (Terakota)",
    cahaya: "Terang Tidak Langsung",
    penyiraman: "2 minggu sekali",
    harga: 70000,
    gambar: "images/17-conophytum-bilobum.jpg"
  },
  {
    id: 18,
    nama: "Batu Hidup (Lithops)",
    namaLatin: "Lithops karasmontana",
    kategori: "Unik",
    status: "Koleksi Langka",
    statusKelas: "badge-rare",
    deskripsi: "Menyerupai batu kerikil terbelah dengan pola corak alami di bagian atasnya. Sangat ringkas dan super hemat air.",
    ukuranPot: "8 cm (Terakota)",
    cahaya: "Terang Maksimal",
    penyiraman: "2–3 minggu sekali",
    harga: 62000,
    gambar: "images/18-lithops.jpg"
  },
  {
    id: 19,
    nama: "Lidah Buaya (Aloe Vera)",
    namaLatin: "Aloe vera",
    kategori: "Klasik",
    status: "Tersedia",
    statusKelas: "badge-available",
    deskripsi: "Sukulen serbaguna berdaun tegak berisi gel alami, tampil bersih dan segar untuk teras maupun meja dapur.",
    ukuranPot: "12 cm (Terakota)",
    cahaya: "Terang Tidak Langsung",
    penyiraman: "7 hari sekali",
    harga: 30000,
    gambar: "images/19-aloe-vera.jpg"
  },
  {
    id: 20,
    nama: "Sempervivum Roset",
    namaLatin: "Sempervivum tectorum",
    kategori: "Roset",
    status: "Tersedia",
    statusKelas: "badge-available",
    deskripsi: "Roset rapat berdaun runcing dengan gradasi merah marun di ujungnya dan disertai tunas anakan di sekeliling induk.",
    ukuranPot: "10 cm (Terakota)",
    cahaya: "Matahari Penuh",
    penyiraman: "7 hari sekali",
    harga: 38000,
    gambar: "images/20-sempervivum.jpg"
  },
  {
    id: 21,
    nama: "Haworthia Zebra",
    namaLatin: "Haworthiopsis attenuata",
    kategori: "Mini",
    status: "Favorit",
    statusKelas: "badge-popular",
    deskripsi: "Sukulen tangguh berdaun runcing hijau tua dengan garis putih melintang yang tegas. Ideal untuk meja belajar atau kantor.",
    ukuranPot: "9 cm (Terakota)",
    cahaya: "Teduh Terang",
    penyiraman: "7–10 hari sekali",
    harga: 32000,
    gambar: "images/21-haworthia-zebra.jpg"
  },
  {
    id: 22,
    nama: "String of Pearls",
    namaLatin: "Curio rowleyanus",
    kategori: "Gantung",
    status: "Favorit",
    statusKelas: "badge-popular",
    deskripsi: "Untaian batang tipis berhiaskan daun bulat hijau menyerupai butiran mutiara yang menjuntai anggun dari tepi pot.",
    ukuranPot: "12 cm (Terakota)",
    cahaya: "Terang Pagi Hari",
    penyiraman: "7 hari sekali",
    harga: 55000,
    gambar: "images/22-string-of-pearls.jpg"
  },
  {
    id: 23,
    nama: "Agave Ratu Victoria",
    namaLatin: "Agave victoriae-reginae",
    kategori: "Roset",
    status: "Koleksi Langka",
    statusKelas: "badge-rare",
    deskripsi: "Agave kompak berbentuk bola simetris dengan daun hijau pekat berhias garis tepi geometris putih yang sangat artistik.",
    ukuranPot: "14 cm (Mangkuk Terakota)",
    cahaya: "Matahari Penuh",
    penyiraman: "10–14 hari sekali",
    harga: 85000,
    gambar: "images/23-agave-victoria.jpg"
  }
];

// Fungsi format angka ke mata uang Rupiah
function formatRupiah(nominal) {
  return "Rp " + nominal.toLocaleString("id-ID");
}

// Merender seluruh kartu katalog saat halaman selesai dimuat
document.addEventListener("DOMContentLoaded", function () {
  const gridContainer = document.getElementById("product-grid");
  const countElement = document.getElementById("catalog-count");
  const copyrightElement = document.getElementById("copyright-text");

  // Update jumlah total produk di katalog
  if (countElement) {
    countElement.textContent = "Menampilkan " + katalogSukulen.length + " Produk Pilihan";
  }

  // Update tahun otomatis pada footer
  if (copyrightElement) {
    const tahunSekarang = new Date().getFullYear();
    copyrightElement.innerHTML = "&copy; " + tahunSekarang + " SukulenLoka. Katalog Online Tanaman Sukulen.";
  }

  // Render tiap produk ke dalam grid katalog
  if (gridContainer) {
    const htmlKartu = katalogSukulen.map(function (produk) {
      return `
        <article class="product-card">
          <div class="product-media">
            <span class="product-badge ${produk.statusKelas}">${produk.status}</span>
            <span class="product-category">${produk.kategori}</span>
            <img
              class="product-image"
              src="${produk.gambar}"
              alt="${produk.nama} (${produk.namaLatin})"
              loading="lazy"
            >
          </div>
          <div class="product-body">
            <h3 class="product-name">${produk.nama}</h3>
            <p class="product-latin">${produk.namaLatin}</p>
            <p class="product-desc">${produk.deskripsi}</p>

            <div class="product-specs">
              <div class="spec-item">
                <span class="spec-label">Ukuran Pot</span>
                <span class="spec-value">${produk.ukuranPot}</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Cahaya</span>
                <span class="spec-value">${produk.cahaya}</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Penyiraman</span>
                <span class="spec-value">${produk.penyiraman}</span>
              </div>
              <div class="spec-item">
                <span class="spec-label">Pengiriman</span>
                <span class="spec-value">Tanaman + Pot</span>
              </div>
            </div>

            <div class="product-footer">
              <span class="price-label">Harga Katalog</span>
              <span class="product-price">${formatRupiah(produk.harga)}</span>
            </div>
          </div>
        </article>
      `;
    }).join("");

    gridContainer.innerHTML = htmlKartu;
  }
});

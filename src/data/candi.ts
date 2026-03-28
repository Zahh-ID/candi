export type Agama = "Hindu" | "Buddha" | "Hindu-Buddha" | "Islam" | "Megalitik";
export type Pulau = "Jawa" | "Sumatera" | "Bali" | "Kalimantan" | "Sulawesi" | "NTT" | "Papua";
export type StatusWarisan = "UNESCO" | "Nasional" | "Lokal";

// Wikimedia Commons images (CC BY-SA licensed)
const IMG = {
  borobudur: "/images/borobudur.jpg",
  prambanan: "/images/prambanan.jpg",
  sewu: "/images/sewu.jpg",
  mendut: "/images/mendut.jpg",
  plaosan: "/images/plaosan.jpg",
  sukuh: "/images/sukuh.jpg",
  singosari: "/images/singosari.jpg",
  kidal: "/images/kidal.jpg",
  tikus: "/images/tikus.jpg",
  muaroJambi: "/images/muaro-jambi.jpg",
  bahal: "/images/bahal.jpg",
};

export interface Candi {
  slug: string;
  nama: string;
  namaLain?: string;
  lokasi: string;
  provinsi: string;
  pulau: Pulau;
  agama: Agama;
  dinasti: string;
  tahunDibangun: string;
  abadDibangun: number;
  deskripsiSingkat: string;
  deskripsiLengkap: string;
  fungsi: string;
  arsitektur: string;
  reliefUtama?: string;
  dimensi?: {
    tinggi?: string;
    luas?: string;
  };
  statusWarisan: StatusWarisan;
  unescoTahun?: number;
  sketchfabId: string;
  sketchfabCredit: string;
  thumbnail: string;
  galeri: string[];
  koordinat: {
    lat: number;
    lng: number;
  };
  tiketMasuk?: string;
  jamBuka?: string;
  tips?: string;
  faktaUnik: string[];
  candiTerkait: string[];
}

export const dataCandi: Candi[] = [
  // ── JAWA TENGAH & YOGYAKARTA ──
  {
    slug: "borobudur",
    nama: "Candi Borobudur",
    lokasi: "Magelang, Jawa Tengah",
    provinsi: "Jawa Tengah",
    pulau: "Jawa",
    agama: "Buddha",
    dinasti: "Dinasti Syailendra",
    tahunDibangun: "~780 - 840 M",
    abadDibangun: 8,
    deskripsiSingkat: "Mahakarya Buddha terbesar di dunia, monumen mandala raksasa yang melambangkan alam semesta dalam ajaran Buddha Mahayana.",
    deskripsiLengkap: "Borobudur adalah monumen Buddha terbesar di dunia yang dibangun oleh Dinasti Syailendra antara tahun 780 hingga 840 Masehi. Struktur megah ini dirancang sebagai mandala raksasa yang mencerminkan kosmologi Buddha, membimbing peziarah melalui tiga tingkatan spiritual: Kamadhatu (dunia keinginan), Rupadhatu (dunia bentuk), dan Arupadhatu (dunia tanpa wujud). Dengan lebih dari 2.600 panel relief yang menceritakan Lalitavistara hingga Jataka, serta 504 arca Buddha, Borobudur bukan sekadar tempat ibadah, melainkan ensiklopedia visual ajaran Dharma yang dipahat di atas batu andesit.\n\nSetelah sempat terlupakan dan terkubur abu vulkanik selama berabad-abad, candi ini ditemukan kembali oleh Sir Thomas Stamford Raffles pada tahun 1814. Restorasi besar-besaran oleh UNESCO pada tahun 1970-an mengukuhkan statusnya sebagai Situs Warisan Dunia. Hingga kini, Borobudur tetap menjadi pusat ziarah spiritual paling suci, terutama saat perayaan Waisak yang menarik ribuan umat dari seluruh penjuru dunia.",
    fungsi: "Tempat ziarah spiritual, meditasi, dan pusat pendidikan Dharma",
    arsitektur: "Mandala 3D — melambangkan alam semesta dalam kosmologi Buddha",
    reliefUtama: "Lalitavistara, Jataka, Avadana",
    dimensi: { tinggi: "35 meter", luas: "123 x 123 meter" },
    statusWarisan: "UNESCO",
    unescoTahun: 1991,
    sketchfabId: "9b7a5910dc814ec59145d9723b68c769",
    sketchfabCredit: "Andria Wahyudi",
    thumbnail: IMG.borobudur,
    galeri: [
      "https://placehold.co/800x600/1A1510/E8C97A?text=Relief+Borobudur",
      "https://placehold.co/800x600/1A1510/E8C97A?text=Stupa+Borobudur"
    ],
    koordinat: { lat: -7.6079, lng: 110.2038 },
    tiketMasuk: "Rp 50.000 (domestik)",
    jamBuka: "06.00 - 17.00 WIB",
    tips: "Datang saat sunrise untuk pemandangan terbaik",
    faktaUnik: [
      "Menggunakan 2 juta balok batu andesit tanpa semen",
      "Sempat terkubur abu vulkanik selama berabad-abad",
      "Panel relief terpanjang di dunia jika direntangkan (6 km)"
    ],
    candiTerkait: ["mendut", "prambanan", "sewu"]
  },
  {
    slug: "prambanan",
    nama: "Candi Prambanan",
    namaLain: "Rara Jonggrang",
    lokasi: "Sleman, DI Yogyakarta",
    provinsi: "DI Yogyakarta",
    pulau: "Jawa",
    agama: "Hindu",
    dinasti: "Dinasti Sanjaya / Mataram Kuno",
    tahunDibangun: "~850 M",
    abadDibangun: 9,
    deskripsiSingkat: "Kompleks candi Hindu termegah di Indonesia, simbol kejayaan Mataram Kuno yang didedikasikan untuk Trimurti.",
    deskripsiLengkap: "Candi Prambanan, atau dikenal juga sebagai Candi Rara Jonggrang, merupakan kompleks candi Hindu terbesar di Indonesia yang dibangun pada abad ke-9 oleh Rakai Pikatan. Didedikasikan untuk Trimurti (Siwa, Wisnu, dan Brahma), arsitektur candi ini mengikuti tradisi Vastu Shastra dengan menara-menara runcing yang menjulang tinggi, melambangkan Gunung Meru sebagai hunian para dewa. Candi Siwa, sebagai bangunan utama di tengah, berdiri setinggi 47 meter dan menyimpan arca Siwa Mahadewa yang megah.\n\nPembangunan Prambanan sering dianggap sebagai pernyataan politik untuk menandai kembalinya kekuasaan dinasti Hindu (Sanjaya) di Jawa Tengah setelah dominasi panjang dinasti Buddha (Syailendra). Relief yang terpahat di dinding-dinding candi menceritakan epik Ramayana dan Krishnayana secara detail, menjadikannya salah satu karya seni naratif terbaik di Asia Tenggara. Meskipun sempat mengalami kerusakan parah akibat gempa bumi di masa lampau, restorasi intensif telah mengembalikan kemegahan arsitektur klasiknya yang memukau dunia.",
    fungsi: "Pemujaan Trimurti dan pusat ritual Hindu kerajaan",
    arsitektur: "Gaya Jawa Tengah klasik dengan puncak runcing (sikhara)",
    reliefUtama: "Ramayana & Krishnayana",
    dimensi: { tinggi: "47 meter (candi utama)" },
    statusWarisan: "UNESCO",
    unescoTahun: 1991,
    sketchfabId: "fa4acc5d73fb46cba22c95caf8c96c06",
    sketchfabCredit: "Andria Wahyudi",
    thumbnail: IMG.prambanan,
    galeri: [
      "https://placehold.co/800x600/1A1510/E8C97A?text=Arca+Siwa",
      "https://placehold.co/800x600/1A1510/E8C97A?text=Relief+Ramayana"
    ],
    koordinat: { lat: -7.7520, lng: 110.4914 },
    tiketMasuk: "Rp 50.000 (domestik)",
    jamBuka: "06.00 - 17.00 WIB",
    faktaUnik: [
      "Komplek asli terdiri dari 240 candi",
      "Candi Siwa adalah yang tertinggi setinggi 47 meter",
      "Rusak parah akibat gempa bumi abad ke-10"
    ],
    candiTerkait: ["borobudur", "sewu", "plaosan"]
  },
  {
    slug: "sewu",
    nama: "Candi Sewu",
    lokasi: "Klaten, Jawa Tengah",
    provinsi: "Jawa Tengah",
    pulau: "Jawa",
    agama: "Buddha",
    dinasti: "Dinasti Syailendra",
    tahunDibangun: "~792 M",
    abadDibangun: 8,
    deskripsiSingkat: "Kompleks candi Buddha raksasa yang melambangkan harmoni dan toleransi beragama di masa Mataram Kuno.",
    deskripsiLengkap: "Candi Sewu, yang secara historis bernama Manjusrigrha (Rumah Manjusri), adalah kompleks percandian Buddha terbesar kedua di Jawa Tengah setelah Borobudur. Dibangun pada abad ke-8 oleh Rakai Panangkaran, candi ini merupakan bukti nyata toleransi beragama yang luar biasa, di mana seorang raja Hindu memfasilitasi pembangunan pusat ibadah Buddha yang sangat megah. Nama 'Sewu' yang berarti seribu merujuk pada banyaknya bangunan di kompleks ini, meski secara aktual terdiri dari 249 bangunan.\n\nTata letak Candi Sewu mengikuti pola mandala yang ketat, dengan satu candi utama yang dikelilingi oleh empat baris candi perwara yang tersusun secara konsentris. Penjaga pintu masuk kompleks ini adalah sepasang arca Dwarapala raksasa yang memegang gada, memberikan kesan mistis namun agung. Keberadaan kompleks seluas ini, yang jaraknya hanya sekitar 800 meter dari Candi Prambanan, menunjukkan betapa harmonisnya kehidupan antara penganut Hindu dan Buddha di masa Kerajaan Medang.",
    fungsi: "Pusat pemujaan Buddha Mahayana dan komunitas biksu",
    arsitektur: "Mandala — candi utama dikelilingi candi perwara konsentris",
    statusWarisan: "Nasional",
    sketchfabId: "76a8cf4d863d44bd9988b98b79b13111",
    sketchfabCredit: "fadilah a",
    thumbnail: IMG.sewu,
    galeri: [
      "https://placehold.co/800x600/1A1510/E8C97A?text=Arca+Dwarapala"
    ],
    koordinat: { lat: -7.7441, lng: 110.4925 },
    faktaUnik: [
      "Nama 'Sewu' berarti seribu dalam bahasa Jawa",
      "Dulunya bernama Manjusrigrha",
      "Terdapat arca Dwarapala (penjaga pintu) setinggi 2 meter"
    ],
    candiTerkait: ["prambanan", "plaosan"]
  },
  {
    slug: "mendut",
    nama: "Candi Mendut",
    lokasi: "Magelang, Jawa Tengah",
    provinsi: "Jawa Tengah",
    pulau: "Jawa",
    agama: "Buddha",
    dinasti: "Dinasti Syailendra",
    tahunDibangun: "~824 M",
    abadDibangun: 9,
    deskripsiSingkat: "Candi Buddha tertua di poros Borobudur, rumah bagi tiga arca raksasa yang memancarkan ketenangan spiritual.",
    deskripsiLengkap: "Candi Mendut merupakan bagian tak terpisahkan dari poros spiritual Mendut-Pawon-Borobudur yang dibangun pada awal abad ke-9 oleh Dinasti Syailendra. Lebih tua dari Borobudur, candi ini menyimpan harta karun seni Buddha yang luar biasa: tiga arca batu berukuran masif yang masih utuh di dalam bilik utamanya. Arca tengah adalah Buddha Vairocana dalam posisi duduk gaya Eropa, diapit oleh Bodhisatwa Avalokitesvara dan Vajrapani, menciptakan atmosfer sakral yang telah bertahan selama lebih dari seribu tahun.\n\nDinding luar Candi Mendut dihiasi dengan relief Jataka dan Pancatantra yang menceritakan fabel moral Buddhis melalui pahatan binatang dan manusia yang artistik. Sebagai titik awal prosesi tahunan hari raya Waisak, Candi Mendut tetap menjadi mercusuar spiritual bagi umat Buddha. Arsitekturnya yang kokoh dengan atap stupa bertingkat mencerminkan filosofi pembebasan dari samsara, menjadikannya salah satu peninggalan paling khidmat di lembah Progo.",
    fungsi: "Kuil ibadah Buddha Mahayana dan titik awal ritual Waisak",
    arsitektur: "Atap bertingkat tiga berhiaskan stupa-stupa kecil",
    reliefUtama: "Bodhisattva & Tara",
    statusWarisan: "Nasional",
    sketchfabId: "bb0cda8a7a574abb8590a24fa44c35a8",
    sketchfabCredit: "imanboer",
    thumbnail: IMG.mendut,
    galeri: [],
    koordinat: { lat: -7.6048, lng: 110.2280 },
    faktaUnik: [
      "Bagian dari poros ritual Waisak yang lurus ke Borobudur",
      "Umurnya dipercaya lebih tua dari Candi Borobudur",
      "Arca Buddha di dalamnya terbuat dari batu andesit utuh"
    ],
    candiTerkait: ["borobudur"]
  },
  {
    slug: "plaosan",
    nama: "Candi Plaosan",
    lokasi: "Klaten, Jawa Tengah",
    provinsi: "Jawa Tengah",
    pulau: "Jawa",
    agama: "Buddha",
    dinasti: "Mataram Kuno",
    tahunDibangun: "~Abad 9 M",
    abadDibangun: 9,
    deskripsiSingkat: "Monumen cinta abadi antara raja Hindu dan ratu Buddha, simbol harmoni dua wangsa besar Jawa.",
    deskripsiLengkap: "Candi Plaosan, atau yang sering dijuluki 'Candi Kembar', adalah mahakarya arsitektur yang lahir dari persatuan cinta antara Rakai Pikatan dari Dinasti Sanjaya (Hindu) dan Pramodawardhani dari Dinasti Syailendra (Buddha). Dibangun pada pertengahan abad ke-9, kompleks ini dibagi menjadi dua bagian utama: Plaosan Lor dan Plaosan Kidul. Keunikan utama candi ini terletak pada fusi arsitekturnya, di mana stupa-stupa Buddha berdiri berdampingan dengan puncak-puncak lancip khas Hindu, menciptakan simfoni visual yang harmonis.\n\nSetiap detail di Plaosan menceritakan kisah pengabdian; dindingnya penuh dengan relief tokoh-tokoh bangsawan dan Bodhisatwa yang dipahat dengan tingkat kehalusan sangat tinggi. Di dalam candi utama, pengunjung dapat menemukan arca-arca Bodhisatwa berbahan perunggu yang meskipun sebagian telah tiada, jejak spiritualitas dan romantisismenya masih terasa sangat kuat. Candi Plaosan bukan sekadar bangunan batu, melainkan saksi bisu masa keemasan Nusantara di mana perbedaan keyakinan bukan menjadi penghalang bagi persatuan dan keindahan.",
    fungsi: "Vihara Buddha dan monumen peringatan persatuan wangsa",
    arsitektur: "Kombinasi menara corak Hindu dengan stupa Buddha",
    statusWarisan: "Nasional",
    sketchfabId: "acce871dc0444d0fbda1e47d9251b92e",
    sketchfabCredit: "Kebudayaan Indonesia",
    thumbnail: IMG.plaosan,
    galeri: [],
    koordinat: { lat: -7.7408, lng: 110.5042 },
    faktaUnik: [
      "Sering disebut candi kembar",
      "Menjadi perlambang toleransi dua agama dan dinasti",
      "Pahatan relief di candi ini dinilai sangat halus"
    ],
    candiTerkait: ["sewu", "prambanan"]
  },
  {
    slug: "sukuh",
    nama: "Candi Sukuh",
    lokasi: "Karanganyar, Jawa Tengah",
    provinsi: "Jawa Tengah",
    pulau: "Jawa",
    agama: "Hindu",
    dinasti: "Kerajaan Majapahit",
    tahunDibangun: "~1437 M",
    abadDibangun: 15,
    deskripsiSingkat: "Candi misterius di lereng Gunung Lawu dengan arsitektur piramida mirip peradaban Amerika Tengah.",
    deskripsiLengkap: "Candi Sukuh berdiri anggun di lereng barat Gunung Lawu sebagai salah satu peninggalan paling enigmatik dari akhir masa Kerajaan Majapahit (abad ke-15). Berbeda jauh dengan pakem arsitektur Hindu-Jawa pada umumnya, Sukuh mengadopsi bentuk punden berundak atau piramida terpancung yang secara visual sangat mirip dengan struktur kuno suku Maya di Amerika Tengah. Candi ini dibangun pada masa ketika pengaruh Hindu-India mulai memudar dan masyarakat kembali ke akar kepercayaan lokal yang memuja roh leluhur dan kekuatan alam.\n\nCandi ini juga dikenal karena keberaniannya menampilkan simbol-simbol fertilitas dalam relief lingga dan yoni secara eksplisit, yang melambangkan penyucian diri dan kelahiran kembali. Atmosfer mistis di Candi Sukuh diperkuat dengan letaknya yang sering diselimuti kabut pegunungan, menciptakan nuansa 'ruwatan' atau pelepasan kutukan yang menjadi fungsi utama candi ini. Sukuh adalah representasi dari 'Renaissance' Jawa, sebuah periode transisi unik yang menandai berakhirnya era klasik Nusantara.",
    fungsi: "Tempat upacara ruwatan (penyucian) dan pemujaan kesuburan",
    arsitektur: "Punden berundak (mirip arsitektur Maya)",
    reliefUtama: "Sudamala & Bimasuci",
    statusWarisan: "Nasional",
    sketchfabId: "be20b20d645249f7a19343cf988e0720",
    sketchfabCredit: "Abim Project",
    thumbnail: IMG.sukuh,
    galeri: [],
    koordinat: { lat: -7.6276, lng: 111.1311 },
    faktaUnik: [
      "Arsitektur sama persis dengan Kuil Maya di Meksiko",
      "Memiliki relief lingga-yoni (alat kelamin pria dan wanita) secara eksplisit",
      "Dipergunakan untuk ritual ruwatan (penyucian)"
    ],
    candiTerkait: ["singosari", "kidal"]
  },

  // ── JAWA TIMUR ──
  {
    slug: "singosari",
    nama: "Candi Singosari",
    lokasi: "Malang, Jawa Timur",
    provinsi: "Jawa Timur",
    pulau: "Jawa",
    agama: "Hindu-Buddha",
    dinasti: "Kerajaan Singhasari",
    tahunDibangun: "~1304 M",
    abadDibangun: 14,
    deskripsiSingkat: "Monumen agung Kerajaan Singhasari yang memadukan spiritualitas Hindu-Buddha untuk sang raja besar, Kertanegara.",
    deskripsiLengkap: "Candi Singosari merupakan peninggalan bersejarah dari tahun 1300-an yang didedikasikan sebagai tempat pendharmaan bagi Raja Kertanegara, penguasa terakhir sekaligus terbesar dari Kerajaan Singhasari. Candi ini memiliki struktur yang unik karena letak bilik-bilik arca berada di kaki candi, bukan di badan candi seperti pada umumnya. Meskipun terlihat tidak pernah sepenuhnya selesai—terlihat dari beberapa bagian relief yang hanya dipahat garis besarnya saja—Singosari tetap memancarkan kemegahan gaya arsitektur Jawa Timur awal yang kokoh dan berani.\n\nSalah satu daya tarik utama candi ini adalah keberadaan dua arca Dwarapala (penjaga gerbang) raksasa setinggi 3,7 meter yang terletak tak jauh dari kompleks utama. Tubuh candi yang ramping namun kuat mencerminkan sinkretisme agama Siwa-Buddha yang dianut oleh sang raja, sebuah konsep spiritualitas yang nantinya akan mencapai puncaknya di era Majapahit. Berdiri di tengah pemukiman modern Malang, Candi Singosari tetap menjadi pengingat bisu akan kejayaan wangsa Rajasa yang pernah menyatukan wilayah-wilayah Nusantara.",
    fungsi: "Tempat pemuliaan (pendharmaan) Raja Kertanegara",
    arsitektur: "Gaya Jawa Timur — kaki candi tinggi, ornamen kala-makara",
    statusWarisan: "Nasional",
    sketchfabId: "31ec6763ed7b440d8929a815d2ee777a",
    sketchfabCredit: "Om Husnul",
    thumbnail: IMG.singosari,
    galeri: [],
    koordinat: { lat: -7.9113, lng: 112.6672 },
    faktaUnik: [
      "Berdiri di pusat kota Singosari, Malang",
      "Arca Dwarapala-nya adalah yang terbesar di Jawa",
      "Bangunan utama tidak pernah selesai dibangun"
    ],
    candiTerkait: ["kidal", "tikus"]
  },
  {
    slug: "kidal",
    nama: "Candi Kidal",
    lokasi: "Malang, Jawa Timur",
    provinsi: "Jawa Timur",
    pulau: "Jawa",
    agama: "Hindu",
    dinasti: "Kerajaan Singhasari",
    tahunDibangun: "~1248 M",
    abadDibangun: 13,
    deskripsiSingkat: "Candi Hindu yang memuat relief mitologi Garudeya, lambang pembebasan dan pengabdian anak pada ibu.",
    deskripsiLengkap: "Candi Kidal adalah salah satu peninggalan terpenting dari masa Kerajaan Singhasari yang dibangun pada tahun 1248 Masehi. Candi ini didirikan sebagai bentuk penghormatan dan tempat pendharmaan bagi Raja Anusapati, raja kedua Singhasari. Keunikan utama Kidal terletak pada pahatan relief Garudeya yang sangat mendetail di kaki candi, menceritakan kisah epik Garuda yang berjuang mencari air suci Amrita untuk membebaskan ibunya dari perbudakan—sebuah kiasan tentang pengabdian Anusapati kepada ibunda tercinta, Ken Dedes.\n\nSecara arsitektural, Candi Kidal menampilkan ciri khas transisi dari gaya Jawa Tengah ke gaya Jawa Timur yang lebih ramping dan menjulang tinggi. Menara candinya dihiasi dengan kepala Kala yang tampak garang namun artistik, berfungsi sebagai penjaga spiritual bangunan suci tersebut. Terletak di lembah hijau Tumpang, Malang, Candi Kidal bukan hanya monumen batu, melainkan mahakarya seni pahat yang merangkum nilai-nilai kesetiaan dan mitologi luhur bangsa Indonesia.",
    fungsi: "Tempat pendharmaan Raja Anusapati",
    arsitektur: "Gaya Jawa Timur awal — ramping, tinggi, ornamen kala di pintu",
    reliefUtama: "Garudeya (pembebasan Winata)",
    statusWarisan: "Nasional",
    sketchfabId: "cc6596143946485aa7b3123adf08c994",
    sketchfabCredit: "bondhan.rio",
    thumbnail: IMG.kidal,
    galeri: [],
    koordinat: { lat: -8.0378, lng: 112.7228 },
    faktaUnik: [
      "Relief Garudeya adalah yang paling detail di Jawa Timur",
      "Ukurannya kecil namun proporsi sangat sempurna",
      "Menjadi inspirasi lambang negara Garuda Pancasila"
    ],
    candiTerkait: ["singosari", "tikus"]
  },
  {
    slug: "tikus",
    nama: "Candi Tikus",
    lokasi: "Mojokerto, Jawa Timur",
    provinsi: "Jawa Timur",
    pulau: "Jawa",
    agama: "Hindu",
    dinasti: "Kerajaan Majapahit",
    tahunDibangun: "~Abad 13-14 M",
    abadDibangun: 13,
    deskripsiSingkat: "Situs pemandian suci peninggalan Majapahit yang melambangkan kemurnian air dari puncak Gunung Meru.",
    deskripsiLengkap: "Candi Tikus adalah sebuah 'petirtaan' atau pemandian suci peninggalan Kerajaan Majapahit yang sangat unik karena strukturnya terletak di bawah permukaan tanah. Ditemukan kembali pada tahun 1914 di dalam sebuah gundukan tanah yang menjadi sarang tikus (basis namanya), situs ini dibangun sepenuhnya menggunakan bata merah berkualitas tinggi khas Majapahit. Arsitekturnya dirancang menyerupai miniatur Gunung Mahameru, tempat bersemayamnya para dewa, dengan pancuran-pancuran air yang melambangkan kesucian tiada henti.\n\nTata letak air di Candi Tikus menggunakan sistem hidrolika kuno yang canggih, mengalirkan air ke kolam-kolam pemandian untuk ritual penyucian para bangsawan Majapahit. Di tengah kolam terdapat menara utama yang dikelilingi oleh menara-menara lebih kecil, menciptakan lanskap kosmologi Hindu-Buddha yang indah dalam bentuk elemen air. Situs ini menjadi bukti kecerdasan insinyur masa lampau dalam mengintegrasikan fungsi tata kota, estetika, dan spiritualitas dalam satu kompleks bangunan.",
    fungsi: "Petirtaan (pemandian suci) dan tempat pemujaan",
    arsitektur: "Kolam dengan menara pancuran air berbentuk bunga teratai",
    statusWarisan: "Nasional",
    sketchfabId: "b63157b58c4848dda104a5d542616431",
    sketchfabCredit: "Om Husnul",
    thumbnail: IMG.tikus,
    galeri: [],
    koordinat: { lat: -7.5580, lng: 112.4378 },
    faktaUnik: [
      "Ditemukan saat penggalian karena banyak tikus yang keluar",
      "Berfungsi sebagai pemandian ritual keluarga kerajaan",
      "Air masih mengalir dari pancuran hingga saat ini"
    ],
    candiTerkait: ["singosari", "kidal"]
  },

  // ── SUMATERA ──
  {
    slug: "muaro-jambi",
    nama: "Situs Muaro Jambi",
    lokasi: "Muaro Jambi, Jambi",
    provinsi: "Jambi",
    pulau: "Sumatera",
    agama: "Buddha",
    dinasti: "Kedatuan Sriwijaya",
    tahunDibangun: "~Abad 7-12 M",
    abadDibangun: 7,
    deskripsiSingkat: "Kompleks percandian bata merah terluas di Asia Tenggara, pusat pembelajaran Buddha dunia di masa Srivijaya.",
    deskripsiLengkap: "Kompleks Candi Muaro Jambi adalah situs arkeologi Buddha terluas di Asia Tenggara, membentang sepanjang 7,5 kilometer di tepian Sungai Batanghari. Dibangun antara abad ke-7 hingga ke-14 Masehi, tempat ini merupakan pusat keagamaan dan pendidikan (Mahavihara) yang sangat berpengaruh pada masa Kerajaan Srivijaya dan Melayu. Ribuan sarjana dari penjuru Asia, termasuk biksu terkenal I-Tsing, dipercaya pernah belajar di universitas kuno ini untuk mendalami filosofi Buddha dan sains.\n\nTerdiri dari puluhan bangunan bata merah (menapo) yang dikelilingi oleh pagar tembok besar, Muaro Jambi menunjukkan adaptasi arsitektur yang cerdas terhadap lingkungan sungai. Candi-candi utama seperti Gumpung, Tinggi, dan Kedaton dibangun dengan tata letak yang luas dan terbuka, mencerminkan kejayaan maritim dan keterbukaan budaya Nusantara di masa lampau. Kini, situs ini sedang dalam proses pengajuan sebagai Situs Warisan Dunia UNESCO sebagai bukti nyata kebesaran peradaban luhur di pulau Sumatera.",
    fungsi: "Pusat pendidikan Buddha (Mahavihara) dan ibadah",
    arsitektur: "Komplek menapo (gundukan candi) dari bata merah",
    statusWarisan: "UNESCO",
    sketchfabId: "6e91df639a684766a9bb8c1efefc419e",
    sketchfabCredit: "Geomatica3D",
    thumbnail: IMG.muaroJambi,
    galeri: [],
    koordinat: { lat: -1.4717, lng: 103.6614 },
    faktaUnik: [
      "Terdiri dari 82 menapo (gundukan candi) tersebar di 2.600 hektar",
      "Diduga pusat universitas Buddha pada masanya",
      "Pernah dikunjungi biksu Tiongkok I-Tsing pada abad ke-7"
    ],
    candiTerkait: ["bahal"]
  },
  {
    slug: "bahal",
    nama: "Candi Bahal",
    namaLain: "Candi Portibi",
    lokasi: "Padang Lawas, Sumatera Utara",
    provinsi: "Sumatera Utara",
    pulau: "Sumatera",
    agama: "Buddha",
    dinasti: "Kerajaan Pannai / Sriwijaya",
    tahunDibangun: "~Abad 11 M",
    abadDibangun: 11,
    deskripsiSingkat: "Rangkaian candi bata merah sakral di Sumatera Utara, sisa kejayaan Kerajaan Pannai.",
    deskripsiLengkap: "Candi Bahal atau Biaro Bahal adalah rangkaian tiga bangunan suci Buddha beraliran Tantrayana yang terletak di Padang Lawas, Sumatera Utara. Dibangun pada abad ke-11 oleh Kerajaan Pannai yang berada di bawah pengaruh Srivijaya, candi ini menjadi salah satu peninggalan bata merah paling ikonik di wilayah utara Sumatera. Arsitekturnya yang dipengaruhi gaya Jawa Timur menunjukkan adanya pertukaran budaya dan seni yang dinamis antar pulau di Nusantara pada masa lampau.\n\nKetiga candi (Bahal I, II, dan III) dikelilingi oleh tembok bata tebal dan dihiasi dengan ukiran figuratif yang unik, termasuk relief singa yang menari dan tokoh-tokoh mitologi Tantrik. Penggunaan material bata merah yang dipadukan dengan ukiran batu andesit memberikan karakter warna yang hangat dan kuat di tengah lanskap Padang Lawas. Situs ini bukan sekadar bangunan tua, melainkan simbol kedaulatan dan kedalaman spiritualitas masyarakat Sumatera Utara di era klasik.",
    fungsi: "Vihara Vajrayana",
    arsitektur: "Struktur dari bata merah khas India Selatan",
    statusWarisan: "Nasional",
    sketchfabId: "9155a1e5cfee4c3ab61f2d7a33aa7f90",
    sketchfabCredit: "fadilah a",
    thumbnail: IMG.bahal,
    galeri: [],
    koordinat: { lat: 1.4018, lng: 99.7289 },
    faktaUnik: [
      "Terdapat tiga candi berjejer (Bahal I, II, dan III)",
      "Berkaitan erat dengan peninggalan prasasti berbahasa Tamil",
      "Letaknya di padang sabana luas"
    ],
    candiTerkait: ["muaro-jambi"]
  },
];

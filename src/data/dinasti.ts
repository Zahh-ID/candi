export interface Dinasti {
  id: string;
  nama: string;
  periode: string;
  deskripsi: string;
  pusatKekuasaan: string;
  thumbnail?: string;
}

export const dataDinasti: Dinasti[] = [
  { 
    id: "syailendra", 
    nama: "Dinasti Syailendra", 
    periode: "Abad ke-8 - 9 M", 
    deskripsi: "Dinasti bercorak Buddha penganut Mahayana yang berpengaruh besar dalam pembangunan monumen megah seperti Borobudur.", 
    pusatKekuasaan: "Jawa Tengah" 
  },
  { 
    id: "sanjaya", 
    nama: "Dinasti Sanjaya (Mataram Kuno)", 
    periode: "Abad ke-8 - 10 M", 
    deskripsi: "Dinasti bercorak Hindu Siwa yang berkuasa di Jawa Tengah bagian utara, membangun kompleks Prambanan yang megah.", 
    pusatKekuasaan: "Jawa Tengah" 
  },
  { 
    id: "singhasari", 
    nama: "Kerajaan Singhasari", 
    periode: "1222 - 1292 M", 
    deskripsi: "Kerajaan era Jawa Timur yang didirikan oleh Ken Arok. Memiliki gaya seni percandian yang ramping dengan ornamen makara yang khas.", 
    pusatKekuasaan: "Jawa Timur" 
  },
  { 
    id: "majapahit", 
    nama: "Kerajaan Majapahit", 
    periode: "1293 - 1527 M", 
    deskripsi: "Kemaharajaan terbesar di Nusantara. Arsitekturnya banyak menggunakan bata merah dengan bentuk menara ramping meninggi.", 
    pusatKekuasaan: "Jawa Timur" 
  },
  { 
    id: "sriwijaya", 
    nama: "Kedatuan Sriwijaya", 
    periode: "Abad ke-7 - 13 M", 
    deskripsi: "Pusat perdagangan dan pendidikan agama Buddha terbesar di Asia Tenggara pada masanya yang berpusat di Sumatera.", 
    pusatKekuasaan: "Sumatera" 
  },
  { 
    id: "bali", 
    nama: "Kerajaan Bali", 
    periode: "Abad ke-10 - 19 M", 
    deskripsi: "Kumpulan kerajaan yang melestarikan kebudayaan Hindu-Buddha yang berpadu selaras dengan kepercayaan adat lokal.", 
    pusatKekuasaan: "Bali" 
  }
];

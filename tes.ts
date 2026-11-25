// ============================================================================
// FINAL PROJECT: SMK TASK TRACKER (5 ANGGOTA KELOMPOK)
// Setiap anggota bertanggung jawab menyelesaikan 1 TODO sesuai nama masing-masing!
// ============================================================================

// ----------------------------------------------------------------------------
// BAGIAN 1: STRUKTUR DATA UTAMA (TIDAK PERLU DIUBAH)
// ----------------------------------------------------------------------------
type Prioritas = "Rendah" | "Sedang" | "Tinggi";

type Tugas = {
  id: number;
  judul: string;
  mapel: string;
  prioritas: Prioritas;
  isSelesai: boolean;
};

// Database penyimpanan di memori (Array of Objects)
let daftarTugas: Tugas[] = [
  {
    id: 1,
    judul: "Membuat ERD Basis Data",
    mapel: "Basis Data",
    prioritas: "Tinggi",
    isSelesai: false,
  },
  {
    id: 2,
    judul: "Latihan Arrow Function",
    mapel: "Pemrograman Web",
    prioritas: "Sedang",
    isSelesai: true,
  },
  {
    id: 3,
    judul: "Konfigurasi IP Address",
    mapel: "Komputer Dasar",
    prioritas: "Rendah",
    isSelesai: false,
  },
];

let nextId: number = 4;

// ----------------------------------------------------------------------------
// BAGIAN 2: MODUL TUGAS KELOMPOK (5 TODO)
// ----------------------------------------------------------------------------

/**
 * TODO 1: DIKERJAKAN OLEH ANGGOTA 1
 * Fitur: Menambahkan tugas baru ke dalam sistem
 * Parameter:
 * - judul (string)
 * - mapel (string)
 * - prioritas (Prioritas, default: "Sedang")
 */
function tambahTugas(judul: string, mapel: string, prioritas: Prioritas = "Sedang"): void {
  // [ANGGOTA 1 - INSTRUKSI]:
  // 1. Buat object tugas baru bertipe 'Tugas' dengan:
  //    - id diambil dari variabel nextId, lalu naikkan nilainya (nextId++)
  //    - judul, mapel, prioritas sesuai parameter
  //    - isSelesai bernilai default false
  // 2. Masukkan object tersebut ke dalam array 'daftarTugas' menggunakan .push()
  // 3. Cetak pesan ke console: `[+] Berhasil menambahkan tugas: ${judul}`
}

/**
 * TODO 2: DIKERJAKAN OLEH ANGGOTA 2
 * Fitur: Menampilkan seluruh daftar tugas ke terminal dengan format rapi
 */
function tampilkanSemua(): void {
  console.log("\n=======================================================");
  console.log("                  DAFTAR SELURUH TUGAS                 ");
  console.log("=======================================================");

  // [ANGGOTA 2 - INSTRUKSI]:
  // 1. Cek apakah daftarTugas kosong. Jika kosong, cetak "(Tidak ada tugas)"
  // 2. Jika ada, lakukan looping pada daftarTugas (bisa pakai for..of atau .forEach)
  // 3. Siapkan tanda status:
  //    - Jika isSelesai === true, status = "[x]"
  //    - Jika isSelesai === false, status = "[ ]"
  // 4. Cetak dengan format:
  //    `${status} ID: ${tugas.id} | [${tugas.mapel}] ${tugas.judul} (Prioritas: ${tugas.prioritas})`
}

/**
 * TODO 3: DIKERJAKAN OLEH ANGGOTA 3
 * Fitur: Mengubah status tugas menjadi selesai
 * Parameter:
 * - idTarget (number): ID tugas yang ingin diselesaikan
 */
function selesaikanTugas(idTarget: number): void {
  // [ANGGOTA 3 - INSTRUKSI]:
  // 1. Cari tugas di array 'daftarTugas' berdasarkan idTarget menggunakan method .find()
  // 2. Jika tugas DITEMUKAN:
  //    - Ubah nilai isSelesai menjadi true
  //    - Cetak: `[✓] Tugas ID ${idTarget} ("${tugas.judul}") berhasil diselesaikan!`
  // 3. Jika tugas TIDAK DITEMUKAN:
  //    - Cetak pesan peringatan: `[!] Error: Tugas dengan ID ${idTarget} tidak ditemukan.`
}

/**
 * TODO 4: DIKERJAKAN OLEH ANGGOTA 4
 * Fitur: Menyaring dan menampilkan tugas berdasarkan tingkat prioritas tertentu
 * Parameter:
 * - filterPrioritas (Prioritas): "Rendah" | "Sedang" | "Tinggi"
 */
function filterByPrioritas(filterPrioritas: Prioritas): void {
  console.log(`\n--- TUGAS DENGAN PRIORITAS: ${filterPrioritas.toUpperCase()} ---`);

  // [ANGGOTA 4 - INSTRUKSI]:
  // 1. Gunakan method .filter() pada daftarTugas untuk mengambil tugas
  //    yang memiliki prioritas === filterPrioritas
  // 2. Jika hasil filter kosong, cetak: "(Tidak ada tugas pada kategori ini)"
  // 3. Jika ada, looping hasil filter tersebut dan tampilkan nama tugas beserta mapelnya
}

/**
 * TODO 5: DIKERJAKAN OLEH ANGGOTA 5
 * Fitur: Menghitung persentase progres dan statistik tugas
 * Return: string ringkasan statistik
 */
function hitungStatistikProgres(): string {
  // [ANGGOTA 5 - INSTRUKSI]:
  // 1. Hitung total seluruh tugas yang ada di array daftarTugas
  // 2. Jika total tugas adalah 0, kembalikan string: "Belum ada data tugas."
  // 3. Hitung jumlah tugas yang sudah selesai (isSelesai === true)
  //    (Petunjuk: bisa gunakan .filter() lalu cek .length, atau gunakan .reduce())
  // 4. Hitung persentase: (jumlahSelesai / totalTugas) * 100
  // 5. Kembalikan (return) string dengan format:
  //    `Statistik: ${persen.toFixed(1)}% tuntas (${jumlahSelesai}/${totalTugas} tugas selesai)`
}

// ----------------------------------------------------------------------------
// BAGIAN 3: SIMULASI PENGUJIAN (TEST SUITE KELOMPOK)
// Jalankan via: npx tsx task_tracker_group.ts
// ----------------------------------------------------------------------------
console.log("=== MEMULAI INTEGRASI PROYEK TIM TASK TRACKER ===");

// Uji Anggota 2: Tampilkan data awal
tampilkanSemua();

// Uji Anggota 1: Tambah data baru
console.log("\n>>> [UJI ANGGOTA 1]: Menambahkan Tugas Baru...");
tambahTugas("Membuat Mockup UI Figma", "Desain Grafis", "Tinggi");

// Uji Anggota 3: Selesaikan salah satu tugas
console.log("\n>>> [UJI ANGGOTA 3]: Menyelesaikan Tugas...");
selesaikanTugas(1); // Selesaikan ID 1 yang valid
selesaikanTugas(99); // Cek proteksi ID 99 yang tidak ada

// Uji Anggota 4: Saring data prioritas Tinggi
console.log("\n>>> [UJI ANGGOTA 4]: Filter Kategori Prioritas...");
filterByPrioritas("Tinggi");

// Uji Anggota 2 lagi: Tampilkan perubahan setelah ditambah & diselesaikan
tampilkanSemua();

// Uji Anggota 5: Cek statistik akhir proyek
console.log("\n>>> [UJI ANGGOTA 5]: Menghitung Ringkasan Progres...");
const laporan = hitungStatistikProgres();
console.log(laporan);
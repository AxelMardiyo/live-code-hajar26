// =============================================================================
// PERTEMUAN 2: ARRAY (BAB 5)
// File    : 04_filter-demo.ts (Ref: Slide 23)
// Topik   : Method filter() - Menyaring Koleksi Menjadi Array Baru
// Kaitan  : Logika utama yang digunakan Anggota 4 (filterByPrioritas)
//           dan Anggota 5 (hitungStatistikProgres) di Final Project.
// =============================================================================

const nilaiSiswa: number[] = [65, 80, 92, 70, 85, 58, 90]

console.log("=== DEMO METHOD .filter() ===")
console.log("Semua Nilai Siswa :", nilaiSiswa)

// 1. Menyaring siswa yang lulus KKM (nilai >= 75)
const lulus = nilaiSiswa.filter((n) => n >= 75)
console.log("Nilai Siswa Lulus :", lulus)

// 2. Menyaring siswa yang perlu remedial (nilai < 75)
const remedial = nilaiSiswa.filter((n) => n < 75)
console.log("Nilai Remedial    :", remedial)

// 3. Bukti sifat Immutable: Array asli TIDAK berubah sama sekali!
console.log("Array Asli Utuh   :", nilaiSiswa)

// 4. Contoh simulasi filter data tugas berdasarkan status
type Tugas = { id: number; judul: string; prioritas: "Tinggi" | "Sedang" | "Rendah" }

const semuaTugas: Tugas[] = [
  { id: 1, judul: "Perbaiki bug login", prioritas: "Tinggi" },
  { id: 2, judul: "Bikin dokumentasi", prioritas: "Rendah" },
  { id: 3, judul: "Refactor kode", prioritas: "Sedang" },
  { id: 4, judul: "Deploy ke server", prioritas: "Tinggi" }
]

const tugasPrioritasTinggi = semuaTugas.filter((t) => t.prioritas === "Tinggi")
console.log("\n=== SIMULASI TODO 4 FINAL PROJECT: FILTER BY PRIORITAS ===")
console.log("Tugas Prioritas Tinggi:", tugasPrioritasTinggi)

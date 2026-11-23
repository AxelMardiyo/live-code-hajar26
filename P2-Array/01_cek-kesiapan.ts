// =============================================================================
// PERTEMUAN 2: ARRAY (BAB 5)
// File    : 01_cek-kesiapan.ts (Ref: Slide 04)
// Topik   : Cek Kesiapan - Array Pertamamu
// Kaitan  : Pemanasan cepat tipe data array eksplisit (tipe[]) dan aturan zero-indexed.
//           Menjadi dasar pemahaman untuk deklarasi array database di Final Project.
// =============================================================================

// Deklarasi array string eksplisit
const daftarSiswa: string[] = ["Andi", "Budi", "Putra"]

console.log("=== CEK KESIAPAN: ARRAY DI TYPESCRIPT ===")

// Menampilkan seluruh isi array
console.log("Isi Array Lengkap :", daftarSiswa)

// Mengakses elemen berdasarkan indeks (Zero-Indexed: dimulai dari 0)
console.log("Elemen Indeks ke-0:", daftarSiswa[0]) // Andi
console.log("Elemen Indeks ke-1:", daftarSiswa[1]) // Budi
console.log("Elemen Indeks ke-2:", daftarSiswa[2]) // Putra

// Properti bawaan .length untuk mengetahui jumlah data
console.log("Jumlah Elemen     :", daftarSiswa.length, "siswa")

// Akses elemen terakhir secara dinamis
console.log("Siswa Terakhir    :", daftarSiswa[daftarSiswa.length - 1])

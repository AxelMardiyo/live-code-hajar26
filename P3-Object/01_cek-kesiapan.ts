// =============================================================================
// PERTEMUAN 3: OBJECT (BAB 6)
// File    : 01_cek-kesiapan.ts (Ref: Slide 04)
// Topik   : Cek Kesiapan - Object Pertamamu
// Kaitan  : Pemanasan struktur key-value pair dan verifikasi kompilasi di terminal.
//           Dasar sebelum memodelkan entitas Tugas di Final Project.
// =============================================================================

// Membuat object literal pertama
const siswa = {
  nama: "Putra Ramadhan",
  umur: 17,
  kelas: "XI RPL 1",
  jurusan: "Rekayasa Perangkat Lunak"
}

console.log("=== CEK KESIAPAN: STRUKTUR DATA OBJECT ===")

// 1. Menampilkan seluruh object
console.log("Objek Lengkap:", siswa)

// 2. Mengakses properti individual menggunakan Dot Notation (.)
console.log("\nAkses Nilai Properti:")
console.log("- Nama Siswa   :", siswa.nama)
console.log("- Umur         :", siswa.umur, "tahun")
console.log("- Kelas        :", siswa.kelas)
console.log("- Jurusan      :", siswa.jurusan)

console.log("\n✓ [OK] Satu variabel menampung banyak data karakteristik yang saling berhubungan!")

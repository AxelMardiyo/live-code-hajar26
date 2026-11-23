// =============================================================================
// PERTEMUAN 3: OBJECT (BAB 6)
// File    : 03_mengubah-property.ts (Ref: Slide 11)
// Topik   : Mengubah Property & Mutabilitas pada Variabel 'const'
// Kaitan  : Mencegah kebingungan siswa saat mengubah status
//           'tugas.isSelesai = true' di TODO 3 Final Project.
// =============================================================================

type Siswa = {
  nama: string
  kelas: string
  nilai: number
  isAktif: boolean
}

// Variabel dideklarasikan dengan 'const'
const siswaA: Siswa = {
  nama: "Putra",
  kelas: "X RPL 1",
  nilai: 72,
  isAktif: false
}

console.log("=== DEMO MUTABILITAS PROPERTI PADA CONST OBJECT ===")
console.log("Data Awal Siswa:", siswaA)

// 1. Mengubah properti dengan Dot Notation
siswaA.kelas = "XI RPL 1"
siswaA.nilai = 88
siswaA.isAktif = true

console.log("\nData Setelah Dimutasi:", siswaA)

console.log("\n💡 Pertanyaan Penting Pemula:")
console.log("Tanya: 'Kenapa variabel const isinya masih bisa diubah?'")
console.log("Jawab: 'const mengunci wadah/referensi memori agar tidak diganti objek lain sama sekali.")
console.log("        Tetapi isi properti di dalam wadah tersebut tetap bebas diubah!'")
console.log("\nDi TODO 3 Final Project, kita akan mengubah 'tugasTarget.isSelesai = true' dengan prinsip ini.")

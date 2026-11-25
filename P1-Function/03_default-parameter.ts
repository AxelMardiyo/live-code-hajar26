// =============================================================================
// PERTEMUAN 1: FUNCTION (BAB 4)
// File    : 03_default-parameter.ts (Ref: Slide 11)
// Topik   : Default Parameter - Menyiapkan Nilai Cadangan Otomatis
// Kaitan  : Digunakan persis pada TODO 1 Final Project:
//           tambahTugas(judul: string, prioritas: Prioritas = "Sedang")
// =============================================================================

/**
 * Fungsi kalkulator sederhana dengan default parameter pada argumen ketiga.
 * Jika parameter 'operasi' tidak dikirimkan, otomatis bernilai 'tambah'.
 */
function hitung(
  angka1: number,
  angka2: number,
  operasi: string = "tambah"
): number {
  if (operasi === "tambah") return angka1 + angka2
  if (operasi === "kurang") return angka1 - angka2
  if (operasi === "kali") return angka1 * angka2
  if (operasi === "bagi" && angka2 !== 0) return angka1 / angka2
  return 0
}

/**
 * Fungsi verifikasi nilai dengan batas KKM default 75.
 */
function cetakStatusSiswa(
  nama: string,
  nilai: number,
  batasLulus: number = 75
): void {
  const status = nilai >= batasLulus ? "LULUS" : "REMEDIAL"
  console.log(`- ${nama.padEnd(8)}: Nilai ${nilai} -> [${status}] (Batas KKM: ${batasLulus})`)
}

console.log("=== DEMO DEFAULT PARAMETER ===")

// 1. Memanggil tanpa argument ketiga -> otomatis memakai default "tambah"
console.log("hitung(10, 5)          =", hitung(10, 5))

// 2. Memanggil dengan argument ketiga eksplisit
console.log("hitung(10, 5, 'kali')  =", hitung(10, 5, "kali"))
console.log("hitung(10, 5, 'kurang')=", hitung(10, 5, "kurang"))
console.log("hitung(10, 5, 'bagi')  =", hitung(10, 5, "bagi"))

console.log("\n=== CONTOH PENERAPAN DI KELAS ===")
cetakStatusSiswa("Andi", 80)      // Memakai batas default 75
cetakStatusSiswa("Budi", 70)      // Memakai batas default 75
cetakStatusSiswa("Citra", 70, 65) // Override batas menjadi 65

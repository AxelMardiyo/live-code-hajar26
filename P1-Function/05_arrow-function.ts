// =============================================================================
// PERTEMUAN 1: FUNCTION (BAB 4)
// File    : 05_arrow-function.ts (Ref: Slide 14)
// Topik   : Modern Arrow Function (=>)
// Kaitan  : Fondasi wajib untuk callback method array (find, filter, map, forEach)
//           di Pertemuan 2 & 3 serta Final Project.
// =============================================================================

// 1. Bentuk Blok Lengkap (Multi-line dengan kurung kurawal & return eksplisit)
const hitungPajak = (penghasilan: number): number => {
  if (penghasilan > 10_000_000) {
    return penghasilan * 0.15
  }
  return penghasilan * 0.05
}

// 2. Bentuk Ringkas (Implicit Return 1 baris tanpa {} dan tanpa kata kunci return)
const kuadrat = (n: number): number => n * n

const sapa = (nama: string): string => `Halo, ${nama}! Selamat datang.`

const cekLulus = (nilai: number): boolean => nilai >= 75

console.log("=== DEMO MODERN ARROW FUNCTION (=>) ===")

console.log("1. Blok Lengkap (Pajak Rp12.000.000): Rp" + hitungPajak(12_000_000))
console.log("   Blok Lengkap (Pajak Rp8.000.000) : Rp" + hitungPajak(8_000_000))

console.log("2. Implicit Return kuadrat(7)       :", kuadrat(7))
console.log("3. Implicit Return sapa('Putra')    :", sapa("Putra"))
console.log("4. Predikat Nilai cekLulus(82)      :", cekLulus(82))
console.log("   Predikat Nilai cekLulus(68)      :", cekLulus(68))

console.log("\n💡 Kenapa Arrow Function Sangat Penting?")
console.log("Di Pertemuan 2, sintaks callback seperti '.filter((n) => n >= 75)' ditulis menggunakan gaya ini!")

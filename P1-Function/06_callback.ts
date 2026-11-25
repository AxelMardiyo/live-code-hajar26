// =============================================================================
// PERTEMUAN 1: FUNCTION (BAB 4)
// File    : 06_callback.ts (Ref: Slide 15)
// Topik   : Callback Function - Fungsi sebagai Parameter (First-Class Citizen)
// Kaitan  : Fondasi mutlak untuk memahami method array modern (.forEach, .map, .filter)
//           di Pertemuan 2 serta event handler di Final Project.
// =============================================================================

/**
 * ANALOGI: PENDELEGASIAN TUGAS / NOMOR ANTREAN
 * Kamu memesan kopi di kafe dan memberikan nomor telepon/pesanan (callback).
 * Saat kopi selesai diracik, barista memanggil nomor pesananmu.
 * Di TypeScript, fungsi bisa dikirimkan sebagai argumen ke fungsi lain!
 */

// 1. Tipe Callback Sederhana: Mengubah angka menjadi teks
type PemformatAngka = (nilai: number) => string

function prosesAngka(angka: number, pemformat: PemformatAngka): string {
  // Fungsi prosesAngka mendelegasikan tugas pemformatan ke callback
  return pemformat(angka)
}

// 2. Fungsi Mengolah Daftar Data dengan Callback Formatter
function prosesDaftar(
  daftarNama: string[],
  polaFormat: (nama: string, indeks: number) => string
): void {
  for (let i = 0; i < daftarNama.length; i++) {
    const hasil = polaFormat(daftarNama[i], i)
    console.log(hasil)
  }
}

// 3. Kalkulator Fleksibel Berbasis Callback
function hitungFleksibel(
  a: number,
  b: number,
  operasiLogika: (x: number, y: number) => number
): number {
  return operasiLogika(a, b)
}

// =============================================================================
// EKSEKUSI LIVE CODING BERSAMA
// =============================================================================

console.log("=== DEMO 1: DELEGASI PEMFORMATAN ANGKA ===")
const rupiah = prosesAngka(50000, (n) => `Rp${n.toLocaleString("id-ID")}`)
const persen = prosesAngka(0.85, (n) => `${(n * 100).toFixed(0)}% Diskon`)
const tagihan = prosesAngka(125000, (n) => `[TAGIHAN: IDR ${n}]`)

console.log("Format 1 :", rupiah)
console.log("Format 2 :", persen)
console.log("Format 3 :", tagihan)

console.log("\n=== DEMO 2: MENGOLAH DAFTAR SISWA (MIRIP .forEach DI P2) ===")
const siswaKelas: string[] = ["Andi Pratama", "Budi Santoso", "Citra Dewi"]

console.log("-- Format 1: Nomor Urut Formal --")
prosesDaftar(siswaKelas, (nama, i) => `${i + 1}. Bpk/Ibu ${nama}`)

console.log("\n-- Format 2: Tag Akun Gamer / Username --")
prosesDaftar(siswaKelas, (nama) => `@${nama.toLowerCase().replace(" ", "_")}_rpl`)

console.log("\n=== DEMO 3: KALKULASI FLEKSIBEL MENGGUNAKAN ARROW CALLBACK ===")
const tambah = hitungFleksibel(10, 5, (x, y) => x + y)
const pangkat = hitungFleksibel(2, 8, (x, y) => x ** y)
const modulo = hitungFleksibel(17, 5, (x, y) => x % y)

console.log("10 + 5    =", tambah)
console.log("2 ^ 8     =", pangkat)
console.log("17 mod 5  =", modulo)

console.log("\n✓ Kesimpulan Pembelajaran:")
console.log("  Callback memungkinkan kita membuat fungsi yang sangat fleksibel:")
console.log("  Alur eksekusi tetap sama, tetapi instruksi spesifiknya bisa diganti-ganti!")

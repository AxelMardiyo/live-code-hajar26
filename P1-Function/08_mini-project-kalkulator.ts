// =============================================================================
// PERTEMUAN 1: FUNCTION (BAB 4)
// File    : 08_mini-project-kalkulator.ts (Ref: Slide 18)
// Topik   : Mini Project - Arsitektur Aplikasi Kalkulator Terminal Modular
// Kaitan  : Integrasi menyeluruh seluruh konsep Bab 4 (parameter, return value,
//           guard clause, rest parameter, arrow function, dan prinsip SRP/DRY).
// =============================================================================

// =============================================================================
// MODUL 1: OPERASI ARITMETIKA MURNI (Pure Functions - Bebas I/O)
// =============================================================================

const tambah = (a: number, b: number): number => a + b
const kurang = (a: number, b: number): number => a - b
const kali = (a: number, b: number): number => a * b
const pangkat = (basis: number, eksponen: number): number => basis ** eksponen
const akarKuadrat = (n: number): number => Math.sqrt(n)

// Operasi bagi dengan penanganan aman (Guard Clause)
function bagi(a: number, b: number): number | null {
  if (b === 0) {
    return null // Mengembalikan null jika ada upaya pembagian nol
  }
  return a / b
}

// =============================================================================
// MODUL 2: OPERASI STATISTIK DINAMIS (Rest Parameter)
// =============================================================================

function hitungTotal(...angka: number[]): number {
  let total = 0
  for (const n of angka) {
    total += n
  }
  return total
}

function hitungRataRata(...angka: number[]): number {
  if (angka.length === 0) return 0
  return hitungTotal(...angka) / angka.length
}

function cariMaksimum(...angka: number[]): number {
  if (angka.length === 0) return 0
  return Math.max(...angka)
}

function cariMinimum(...angka: number[]): number {
  if (angka.length === 0) return 0
  return Math.min(...angka)
}

// =============================================================================
// MODUL 3: TAMPILAN & UI TERMINAL (Single Responsibility: Hanya Mencetak)
// =============================================================================

function cetakHeader(): void {
  console.log("╔═══════════════════════════════════════════════╗")
  console.log("║     KALKULATOR TERMINAL MODULAR TYPESCRIPT    ║")
  console.log("║    Praktik Arsitektur Single Responsibility   ║")
  console.log("╚═══════════════════════════════════════════════╝")
}

function cetakOperasiBiner(namaOperasi: string, a: number, b: number, hasil: number | null): void {
  const tampilanHasil = hasil === null ? "ERROR (Tidak bisa bagi nol!)" : hasil.toString()
  console.log(`│ [${namaOperasi.padEnd(12)}] : ${a} dan ${b} => ${tampilanHasil}`)
}

function cetakStatistik(keterangan: string, daftar: number[]): void {
  console.log("├───────────────────────────────────────────────┤")
  console.log(`│ Kumpulan Data : [ ${daftar.join(", ")} ]`)
  console.log(`│ • Total       : ${hitungTotal(...daftar)}`)
  console.log(`│ • Rata-rata   : ${hitungRataRata(...daftar).toFixed(2)}`)
  console.log(`│ • Maksimum    : ${cariMaksimum(...daftar)}`)
  console.log(`│ • Minimum     : ${cariMinimum(...daftar)}`)
}

// =============================================================================
// MODUL 4: PROGRAM UTAMA / ORKESTRATOR
// =============================================================================

function jalankanDemoKalkulator(): void {
  cetakHeader()
  console.log("┌───────────────────────────────────────────────┐")
  console.log("│ 1. DEMO ARITMETIKA DASAR & GUARD CLAUSE       │")
  console.log("├───────────────────────────────────────────────┤")

  cetakOperasiBiner("TAMBAH", 45, 15, tambah(45, 15))
  cetakOperasiBiner("KURANG", 100, 37, kurang(100, 37))
  cetakOperasiBiner("KALI", 8, 12, kali(8, 12))
  cetakOperasiBiner("BAGI NORMAL", 144, 12, bagi(144, 12))
  cetakOperasiBiner("BAGI NOL", 50, 0, bagi(50, 0)) // Membuktikan Guard Clause!
  cetakOperasiBiner("PANGKAT", 2, 8, pangkat(2, 8))
  cetakOperasiBiner("AKAR KUADRAT", 81, 0, akarKuadrat(81))

  console.log("├───────────────────────────────────────────────┤")
  console.log("│ 2. DEMO STATISTIK DINAMIS (REST PARAMETER)    │")
  
  const nilaiSiswa = [80, 75, 90, 85, 95, 70]
  cetakStatistik("Nilai Tugas Siswa", nilaiSiswa)

  console.log("└───────────────────────────────────────────────┘")
  console.log("\n✓ PELAJARAN UTAMA HARI INI:")
  console.log("  1. Fungsi kecil yang fokus (SRP) sangat mudah diuji dan bebas bug.")
  console.log("  2. Program kompleks dibangun dari susunan balok lego fungsi-fungsi kecil.")
  console.log("  3. Ini adalah pondasi mutlak sebelum masuk ke manipulasi Array di Pertemuan 2!")
}

// Eksekusi program
jalankanDemoKalkulator()

// =============================================================================
// PERTEMUAN 1: FUNCTION (BAB 4)
// File    : 05_studi-kasus-nilai.ts (Ref: Slide 26)
// Topik   : Implementasi & Laporan Sistem Nilai Modular
// Kaitan  : Orkestrasi beberapa fungsi modular yang saling berinteraksi (SRP),
//           menjadi jembatan berpikir sebelum masuk ke mini project & final project.
// =============================================================================

// 1. Fungsi Menghitung Total Nilai (Menggunakan Rest Parameter)
function hitungTotal(...daftarNilai: number[]): number {
  let total = 0
  for (const n of daftarNilai) {
    total += n
  }
  return total
}

// 2. Fungsi Menghitung Rata-rata
function hitungRataRata(total: number, jumlahMapel: number): number {
  if (jumlahMapel <= 0) return 0
  return parseFloat((total / jumlahMapel).toFixed(2))
}

// 3. Fungsi Menentukan Grade Huruf
function tentukanGrade(rataRata: number): string {
  if (rataRata >= 90) return "A"
  if (rataRata >= 80) return "B"
  if (rataRata >= 70) return "C"
  if (rataRata >= 60) return "D"
  return "E"
}

// 4. Fungsi Orkestrator: Menampilkan Kartu Laporan ke Terminal
function tampilkanLaporan(
  nama: string,
  kelas: string,
  nilaiMatematika: number,
  nilaiIndonesia: number,
  nilaiPemrograman: number
): void {
  const total = hitungTotal(nilaiMatematika, nilaiIndonesia, nilaiPemrograman)
  const rataRata = hitungRataRata(total, 3)
  const grade = tentukanGrade(rataRata)
  const status = rataRata >= 75 ? "LULUS" : "REMEDIAL"

  console.log("┌───────────────────────────────────────────────┐")
  console.log("│         KARTU LAPORAN HASIL BELAJAR           │")
  console.log("├───────────────────────────────────────────────┤")
  console.log(`│ Nama Siswa    : ${nama.padEnd(30)}│`)
  console.log(`│ Kelas         : ${kelas.padEnd(30)}│`)
  console.log("├───────────────────────────────────────────────┤")
  console.log(`│ Matematika    : ${nilaiMatematika.toString().padEnd(30)}│`)
  console.log(`│ B. Indonesia  : ${nilaiIndonesia.toString().padEnd(30)}│`)
  console.log(`│ Pemrograman TS: ${nilaiPemrograman.toString().padEnd(30)}│`)
  console.log("├───────────────────────────────────────────────┤")
  console.log(`│ Total Nilai   : ${total.toString().padEnd(30)}│`)
  console.log(`│ Rata-rata     : ${rataRata.toString().padEnd(30)}│`)
  console.log(`│ Predikat Grade: ${grade.padEnd(30)}│`)
  console.log(`│ Status Akhir  : [${status}]`.padEnd(48) + "│")
  console.log("└───────────────────────────────────────────────┘")
}

// Eksekusi Live Coding Bersama
console.log("=== DEMO ORKESTRASI FUNGSI MODULAR ===")
tampilkanLaporan("Putra Ramadhan", "XI RPL 1", 85, 90, 95)
tampilkanLaporan("Budi Santoso", "XI RPL 1", 70, 65, 72)

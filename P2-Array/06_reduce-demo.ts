// =============================================================================
// PERTEMUAN 2: ARRAY (BAB 5)
// File    : 06_reduce-demo.ts (Ref: Slide 25 - Opsional / Pengayaan)
// Topik   : Method reduce() - Akumulasi Nilai Menjadi Satu Hasil
// Kaitan  : Memberikan alternatif bagi siswa yang ingin menyelesaikan
//           perhitungan statistik progres di TODO 5 secara ringkas.
// =============================================================================

const nilaiTugas: number[] = [80, 85, 90, 75, 95]

console.log("=== DEMO METHOD .reduce() ===")
console.log("Nilai Tugas:", nilaiTugas)

// 1. Menjumlahkan seluruh elemen array
// accumulator (acc): celengan penampung akumulasi nilai
// current (curr)   : elemen array yang sedang diproses
const totalNilai = nilaiTugas.reduce((acc, curr) => acc + curr, 0)
const rataRata = totalNilai / nilaiTugas.length

console.log(`Total Nilai Akumulasi : ${totalNilai}`)
console.log(`Rata-rata Nilai       : ${rataRata.toFixed(1)}`)

// 2. Simulasi Pengayaan: Menghitung jumlah tugas yang sudah selesai
type TugasSimple = { id: number; judul: string; isSelesai: boolean }

const daftar: TugasSimple[] = [
  { id: 1, judul: "Tugas 1", isSelesai: true },
  { id: 2, judul: "Tugas 2", isSelesai: false },
  { id: 3, judul: "Tugas 3", isSelesai: true },
  { id: 4, judul: "Tugas 4", isSelesai: true }
]

// Menghitung jumlah yang selesai dengan reduce
const jumlahSelesai = daftar.reduce((acc, curr) => curr.isSelesai ? acc + 1 : acc, 0)
const persentase = (jumlahSelesai / daftar.length) * 100

console.log("\n=== SIMULASI STATISTIK TODO 5 DENGAN REDUCE ===")
console.log(`Total Tugas : ${daftar.length}`)
console.log(`Selesai     : ${jumlahSelesai} tugas`)
console.log(`Progres     : ${persentase.toFixed(0)}%`)

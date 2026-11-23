// =============================================================================
// PERTEMUAN 3: OBJECT (BAB 6)
// File    : 04_array-of-object.ts (Ref: Slide 18)
// Topik   : Array of Objects - Pola Data Standar Industri
// Kaitan  : SLIDE PALING KRUSIAL! Strukturnya 100% identik dengan database
//           'daftarTugas: Tugas[]' dan fungsi 'tampilkanSemua()' di Final Project.
// =============================================================================

type Siswa = {
  id: number
  nama: string
  kelas: string
  nilai: number
}

// Koleksi data: Array yang setiap elemennya adalah sebuah Object Siswa
const databaseSiswa: Siswa[] = [
  { id: 1, nama: "Andi Pratama", kelas: "XI RPL 1", nilai: 82 },
  { id: 2, nama: "Budi Santoso", kelas: "XI RPL 2", nilai: 68 },
  { id: 3, nama: "Citra Lestari", kelas: "XI RPL 1", nilai: 94 },
  { id: 4, nama: "Dian Permata", kelas: "XI RPL 1", nilai: 75 }
]

console.log("=== DEMO ARRAY OF OBJECTS (DATABASE DI MEMORI) ===")

// 1. Menampilkan data dengan perulangan for...of
console.log("\n--- Menampilkan dengan loop for...of ---")
for (const s of databaseSiswa) {
  const status = s.nilai >= 75 ? "LULUS" : "REMEDIAL"
  console.log(`[ID ${s.id}] ${s.nama.padEnd(15)} | Kelas: ${s.kelas} | Nilai: ${s.nilai} [${status}]`)
}

// 2. Menampilkan data dengan .forEach()
console.log("\n--- Menampilkan dengan method .forEach() ---")
databaseSiswa.forEach((s, idx) => {
  console.log(`${idx + 1}. ${s.nama} (${s.kelas}) -> Skor: ${s.nilai}`)
})

console.log("\n💡 Catatan Final Project:")
console.log("Di Pertemuan 4, 'daftarTugas: Tugas[]' disimpan dan ditampilkan persis seperti cara di atas!")

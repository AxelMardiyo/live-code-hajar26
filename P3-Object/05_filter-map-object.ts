// =============================================================================
// PERTEMUAN 3: OBJECT (BAB 6)
// File    : 05_filter-map-object.ts (Ref: Slide 19)
// Topik   : Pemrosesan Koleksi - Kombinasi filter() dan map() pada Objek
// Kaitan  : Menghubungkan materi Array P2 dengan Object P3.
//           Langsung terpakai pada TODO 4 (filter prioritas) & TODO 5 (statistik progres).
// =============================================================================

type Siswa = {
  id: number
  nama: string
  nilai: number
  jurusan: string
}

const dataSiswa: Siswa[] = [
  { id: 1, nama: "Andi", nilai: 85, jurusan: "RPL" },
  { id: 2, nama: "Budi", nilai: 68, jurusan: "TKJ" },
  { id: 3, nama: "Citra", nilai: 92, jurusan: "RPL" },
  { id: 4, nama: "Dian", nilai: 74, jurusan: "DKV" },
  { id: 5, nama: "Eko", nilai: 88, jurusan: "RPL" }
]

console.log("=== DEMO FILTER & MAP PADA ARRAY OF OBJECTS ===")

// 1. FILTER: Menyaring hanya siswa dengan nilai >= 80 (Siswa Berprestasi)
const siswaBerprestasi = dataSiswa.filter((s) => s.nilai >= 80)
console.log("1. Siswa dengan nilai >= 80:")
siswaBerprestasi.forEach((s) => {
  console.log(`   - ${s.nama} (${s.jurusan}): Nilai ${s.nilai}`)
})

// 2. FILTER: Menyaring berdasarkan jurusan RPL
const anakRPL = dataSiswa.filter((s) => s.jurusan === "RPL")
console.log(`\n2. Jumlah siswa jurusan RPL: ${anakRPL.length} siswa`)

// 3. MAP: Mengekstrak daftar nama saja (Transformasi Objek -> String Array)
const daftarNamaSaja = dataSiswa.map((s) => s.nama)
console.log("\n3. Daftar nama saja (.map):", daftarNamaSaja)

// 4. PIPELINE FILTER + MAP: Nama siswa berprestasi saja
const namaBerprestasi = dataSiswa
  .filter((s) => s.nilai >= 80)
  .map((s) => s.nama)

console.log("4. Pipeline filter + map  :", namaBerprestasi)

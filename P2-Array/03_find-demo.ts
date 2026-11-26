// =============================================================================
// PERTEMUAN 2: ARRAY (BAB 5)
// File    : 03_find-demo.ts (Ref: Slide 15)
// Topik   : Method find() - Mencari Data Pertama yang Cocok
// Kaitan  : Logika utama yang digunakan Anggota 3 pada fungsi
//           selesaikanTugas(idTarget) beserta penanganan jika ID tidak ditemukan.
// =============================================================================

// 1. Mencari pada Array Angka
const daftarNilai: number[] = [65, 72, 85, 92, 78]

// Mencari nilai pertama yang di atas 80
const nilaiPertamaDiatas80 = daftarNilai.find((n) => n > 80)
console.log("=== DEMO METHOD .find() PADA ARRAY ===")
console.log("Daftar Nilai       :", daftarNilai)
console.log("Nilai pertama > 80 :", nilaiPertamaDiatas80) // 85 (92 diabaikan karena berhenti di temuan pertama)

// 2. Mencari pada Array of Object (Simulasi Database)
type ItemTugas = {
  id: number
  judul: string
  isSelesai: boolean
}

const listTugas: ItemTugas[] = [
  { id: 1, judul: "Setup project TypeScript", isSelesai: true },
  { id: 2, judul: "Membuat fungsi modular", isSelesai: false },
  { id: 3, judul: "Testing di terminal", isSelesai: false }
]

function cariTugasBerdasarkanId(idTarget: number): void {
  // .find() mengembalikan objek jika cocok, atau undefined jika tidak ditemukan
  const tugasDitemukan = listTugas.find((t) => t.id === idTarget)

  if (!tugasDitemukan) {
    console.log(`✗ [ERROR] Tugas dengan ID ${idTarget} tidak ditemukan!`)
    return
  }

  console.log(`✓ [DITEMUKAN] ID ${idTarget}: "${tugasDitemukan.judul}" | Status Selesai: ${tugasDitemukan.isSelesai}`)
}

console.log("\n=== PENCARIAN OBJECT DENGAN PENANGANAN UNDEFINED ===")
cariTugasBerdasarkanId(2) // Ada
cariTugasBerdasarkanId(9) // Tidak ada (undefined dicegah dengan guard clause!)

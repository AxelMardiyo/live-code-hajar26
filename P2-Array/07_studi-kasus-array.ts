// =============================================================================
// PERTEMUAN 2: ARRAY (BAB 5)
// File    : 07_studi-kasus-array.ts (Ref: Slide 20)
// Topik   : Studi Kasus - Arsitektur Pengolah Data Siswa & Pipeline Nilai
// Kaitan  : Puncak integrasi Function (P1) + Method Array (P2):
//           includes(), push(), indexOf(), splice(), filter(), slice().sort(),
//           map(), reduce(), dan iterasi for...of.
// =============================================================================

// =============================================================================
// BAGIAN 1: DATABASE NAMA SISWA (CRUD & PENCARIAN TERSTRUKTUR)
// =============================================================================

const databaseSiswa: string[] = ["Budi", "Andi", "Citra", "Dian", "Eko"]

// 1. TAMBAH DATA: Cek duplikasi dengan includes() + push()
function tambahSiswa(nama: string): void {
  const namaBersih = nama.trim()
  if (!namaBersih) {
    console.log("✗ [GAGAL] Nama siswa tidak boleh kosong!")
    return
  }
  if (databaseSiswa.includes(namaBersih)) {
    console.log(`✗ [DUPLIKAT] "${namaBersih}" sudah terdaftar di database.`)
    return
  }
  databaseSiswa.push(namaBersih)
  console.log(`✓ [TAMBAH] "${namaBersih}" berhasil masuk ke database.`)
}

// 2. HAPUS DATA: Cari posisi dengan indexOf() + hapus dengan splice()
function hapusSiswa(nama: string): void {
  const posisi = databaseSiswa.indexOf(nama)
  if (posisi === -1) {
    console.log(`✗ [TIDAK ADA] "${nama}" tidak ditemukan di database.`)
    return
  }
  databaseSiswa.splice(posisi, 1)
  console.log(`✓ [HAPUS] "${nama}" dihapus dari indeks ke-${posisi}.`)
}

// 3. PENCARIAN: filter() + includes() secara case-insensitive
function cariSiswa(kataKunci: string): string[] {
  const query = kataKunci.toLowerCase()
  return databaseSiswa.filter((nama) => nama.toLowerCase().includes(query))
}

// 4. URUTKAN A-Z: Kloning dengan slice() agar database asli aman (Immutable!)
function urutkanAbjad(): string[] {
  return databaseSiswa.slice().sort()
}

// =============================================================================
// BAGIAN 2: PIPELINE PENGOLAH NILAI UJIAN (FILTER, SORT, REDUCE, MAP)
// =============================================================================

function prosesLaporanNilai(daftarNilai: number[]): void {
  if (daftarNilai.length === 0) {
    console.log("Belum ada data nilai untuk diproses.")
    return
  }

  // Langkah 1: Filter siswa yang lulus KKM (>= 75)
  const nilaiLulus = daftarNilai.filter((n) => n >= 75)

  // Langkah 2: Cari nilai tertinggi dengan kloning + sort descending
  const nilaiTertinggi = [...daftarNilai].sort((a, b) => b - a)[0]

  // Langkah 3: Hitung total & rata-rata kelas menggunakan reduce()
  const totalNilai = daftarNilai.reduce((total, n) => total + n, 0)
  const rataRata = totalNilai / daftarNilai.length

  // Langkah 4: Format laporan tiap siswa dengan map() lalu cetak dengan for...of
  const barisLaporan = daftarNilai.map((nilai, idx) => {
    const status = nilai >= 75 ? "LULUS" : "REMEDI"
    return `  Siswa #${idx + 1}: Nilai ${nilai.toString().padStart(3)} [${status}]`
  })

  console.log("\n=== LAPORAN STATISTIK NILAI KELAS ===")
  for (const baris of barisLaporan) {
    console.log(baris)
  }
  console.log("-------------------------------------")
  console.log(`• Jumlah Lulus   : ${nilaiLulus.length} dari ${daftarNilai.length} siswa`)
  console.log(`• Nilai Tertinggi: ${nilaiTertinggi}`)
  console.log(`• Rata-rata Kelas: ${rataRata.toFixed(2)}`)
}

// =============================================================================
// EKSEKUSI LIVE CODING BERSAMA
// =============================================================================

console.log("=== DEMO 1: MANAJEMEN DATABASE SISWA ===")
console.log("Database Awal :", databaseSiswa)

tambahSiswa("  Farah  ")
tambahSiswa("Andi") // Ditolak karena duplikat!
hapusSiswa("Dian")
hapusSiswa("Zaki")  // Ditolak karena tidak ada!

console.log("\nHasil Cari ('an') :", cariSiswa("an"))
console.log("Urutan A-Z (Salinan):", urutkanAbjad())
console.log("Database Asli Aman :", databaseSiswa) // Urutan asli tetap terjaga!

// Jalankan Pipeline Nilai
const nilaiKelas: number[] = [85, 92, 58, 70, 64, 95, 88, 73]
prosesLaporanNilai(nilaiKelas)

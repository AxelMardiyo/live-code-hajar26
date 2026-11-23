// =============================================================================
// PERTEMUAN 3: OBJECT (BAB 6)
// File    : 06_crud-siswa.ts (Ref: Slide 29)
// Topik   : Mini Project - Fungsi Inti Operasi CRUD
// Kaitan  : JEMBATAN PALING MULUS MENUJU FINAL PROJECT PERTEMUAN 4!
//           Pola 'nextId++', 'daftarSiswa.push()', 'filter()', dan update objek
//           sama persis 100% dengan starter code Task Tracker.
// =============================================================================

// 1. Blueprint Entitas Siswa
type Siswa = {
  id: number
  nama: string
  jurusan: string
  nilai: number
}

// 2. Database di Memori (In-Memory Array of Objects)
let databaseSiswa: Siswa[] = []

// 3. Variable Auto-Increment ID (Pola yang sama persis di Final Project!)
let nextId = 1

// --- OPERASI 1: CREATE (Menambah Data dengan ID Otomatis) ---
function tambahSiswa(nama: string, jurusan: string, nilai: number): void {
  const siswaBaru: Siswa = {
    id: nextId++, // Pakai nilai nextId sekarang, lalu otomatis bertambah 1
    nama: nama,
    jurusan: jurusan,
    nilai: nilai
  }
  databaseSiswa.push(siswaBaru)
  console.log(`✓ [CREATE] Berhasil menambah: "${nama}" dengan ID: ${siswaBaru.id}`)
}

// --- OPERASI 2: READ (Menampilkan Seluruh Data) ---
function tampilkanSemua(): void {
  console.log("\n" + "=".repeat(50))
  console.log("            DAFTAR SISWA TERDAFTAR")
  console.log("=".repeat(50))

  if (databaseSiswa.length === 0) {
    console.log("  (Belum ada data siswa yang tersimpan)")
    console.log("=".repeat(50) + "\n")
    return
  }

  databaseSiswa.forEach((s) => {
    const status = s.nilai >= 75 ? "LULUS" : "REMEDIAL"
    console.log(`  [ID ${s.id}] ${s.nama.padEnd(14)} | ${s.jurusan.padEnd(6)} | Nilai: ${s.nilai} [${status}]`)
  })
  console.log(`  Total: ${databaseSiswa.length} siswa terdaftar`)
  console.log("=".repeat(50) + "\n")
}

// --- OPERASI 3: UPDATE (Memperbarui Nilai Berdasarkan ID) ---
function updateNilai(idTarget: number, nilaiBaru: number): void {
  const siswaTarget = databaseSiswa.find((s) => s.id === idTarget)

  if (!siswaTarget) {
    console.log(`✗ [UPDATE GAGAL] Siswa dengan ID ${idTarget} tidak ditemukan!`)
    return
  }

  const nilaiLama = siswaTarget.nilai
  siswaTarget.nilai = nilaiBaru
  console.log(`✓ [UPDATE] ID ${idTarget} (${siswaTarget.nama}): Nilai diubah dari ${nilaiLama} -> ${nilaiBaru}`)
}

// --- OPERASI 4: DELETE (Menghapus Data Berdasarkan ID dengan filter) ---
function hapusSiswa(idTarget: number): void {
  const adaSiswa = databaseSiswa.some((s) => s.id === idTarget)
  if (!adaSiswa) {
    console.log(`✗ [DELETE GAGAL] Siswa dengan ID ${idTarget} tidak ditemukan!`)
    return
  }

  // Saring semua siswa KECUALI yang memiliki ID target
  databaseSiswa = databaseSiswa.filter((s) => s.id !== idTarget)
  console.log(`✓ [DELETE] Siswa dengan ID ${idTarget} berhasil dihapus dari database.`)
}

// =============================================================================
// SIMULASI LIVE CODING OPERASI CRUD
// =============================================================================
console.log("=== SIMULASI APLIKASI MINI CRUD SISWA ===")

// 1. Tambah Data Baru
tambahSiswa("Andi Pratama", "RPL", 82)
tambahSiswa("Budi Santoso", "TKJ", 68)
tambahSiswa("Citra Lestari", "RPL", 94)

// 2. Tampilkan Semua
tampilkanSemua()

// 3. Update Nilai Budi (Remedial -> Lulus)
updateNilai(2, 80)

// 4. Hapus Siswa ID 1 (Andi)
hapusSiswa(1)

// 5. Tampilkan Hasil Akhir
tampilkanSemua()

console.log("🎉 SELAMAT! Kamu telah menguasai seluruh konsep yang dibutuhkan untuk Final Project Task Tracker di Pertemuan 4!")

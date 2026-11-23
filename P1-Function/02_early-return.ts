// =============================================================================
// PERTEMUAN 1: FUNCTION (BAB 4)
// File    : 02_early-return.ts (Ref: Slide 10)
// Topik   : Return Value & Pola Guard Clause (Early Return)
// Kaitan  : Melatih menghentikan eksekusi di awal saat kondisi tidak valid.
//           Langsung terpakai di TODO 5 Final Project saat validasi data kosong.
// =============================================================================

/**
 * Menghitung diskon belanja menggunakan teknik Guard Clause.
 * Menghentikan fungsi di baris-baris awal jika data tidak memenuhi syarat,
 * sehingga logika utama di bawahnya tetap bersih tanpa sarang nested if-else.
 */
function hitungDiskonMember(belanja: number, isVIP: boolean): number {
  // 1. Guard Clause: Jika nilai belanja tidak valid (<= 0), langsung keluar!
  if (belanja <= 0) {
    return 0
  }

  // 2. Guard Clause: Jika bukan member VIP, berikan diskon reguler 5%
  if (!isVIP) {
    return belanja * 0.05
  }

  // 3. Logika Utama: Member VIP berhak mendapatkan diskon spesial 20%
  return belanja * 0.20
}

console.log("=== DEMO POLA GUARD CLAUSE (EARLY RETURN) ===")

// Kasus 1: Input tidak valid
const diskon1 = hitungDiskonMember(0, true)
console.log(`Belanja Rp0 (VIP)          -> Diskon: Rp${diskon1}`)

// Kasus 2: Member reguler
const diskon2 = hitungDiskonMember(100_000, false)
console.log(`Belanja Rp100.000 (Reguler)-> Diskon: Rp${diskon2} (5%)`)

// Kasus 3: Member VIP
const diskon3 = hitungDiskonMember(100_000, true)
console.log(`Belanja Rp100.000 (VIP)    -> Diskon: Rp${diskon3} (20%)`)

console.log("\n💡 Catatan Final Project:")
console.log("Pola 'if (daftarTugas.length === 0) return;' di Final Project menggunakan teknik yang persis sama!")

// =============================================================================
// PERTEMUAN 1: FUNCTION (BAB 4)
// File    : 01_cek-kesiapan.ts (Ref: Slide 04)
// Topik   : Cek Kesiapan - Kode Function Pertamamu
// Kaitan  : Pemanasan wajib runtime tsx & konsep "tulis sekali, panggil berkali-kali"
// =============================================================================

/**
 * Mendefinisikan fungsi sapaan sederhana dengan parameter bertipe string
 * dan tidak mengembalikan nilai (return type: void).
 */
function sapa(nama: string): void {
  console.log(`Halo, ${nama}! Selamat datang di pembelajaran TypeScript.`)
}

console.log("=== CEK KESIAPAN: RUNTIME TYPESCRIPT TSX ===")

// Memanggil fungsi sapa sebanyak 3 kali dengan argumen yang berbeda
sapa("Andi")
sapa("Budi")
sapa("Citra")

console.log("\n✓ [OK] Runtime tsx berjalan normal.")
console.log("✓ Konsep dasar terbukti: 1 fungsi dipakai berkali-kali tanpa duplikasi kode!")

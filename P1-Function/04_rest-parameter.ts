// =============================================================================
// PERTEMUAN 1: FUNCTION (BAB 4)
// File    : 04_rest-parameter.ts (Ref: Slide 13)
// Topik   : Rest Parameter (...) - Menampung Argumen Dinamis Tanpa Batas
// Kaitan  : Menjadi fondasi untuk mengolah daftar data fleksibel sebelum masuk
//           ke manipulasi Array di Pertemuan 2.
// =============================================================================

/**
 * ANALOGI: TROLI BELANJA SERBAGUNA
 * Troli bisa menampung berapapun barang yang dimasukkan pembeli.
 * Kompiler TypeScript secara otomatis membungkus semua argumen menjadi Array!
 */

// 1. Fungsi Menghitung Total Belanja dengan Rest Parameter
function hitungTotalBelanja(...daftarHarga: number[]): number {
  let total = 0
  for (const harga of daftarHarga) {
    total += harga
  }
  return total
}

// 2. Fungsi Menggabungkan Kata (Rest Parameter Wajib di Posisi Terakhir!)
function gabungKata(pemisah: string, ...daftarKata: string[]): string {
  return daftarKata.join(pemisah)
}

// 3. Fungsi Menghitung Rata-rata Dinamis
function rataRataNilai(namaSiswa: string, ...nilai: number[]): string {
  if (nilai.length === 0) {
    return `Siswa ${namaSiswa} belum memiliki nilai.`
  }
  const total = hitungTotalBelanja(...nilai)
  const rata = total / nilai.length
  return `Siswa ${namaSiswa} | Total: ${total} | Rata-rata: ${rata.toFixed(1)}`
}

// =============================================================================
// EKSEKUSI LIVE CODING BERSAMA
// =============================================================================

console.log("=== DEMO 1: HITUNG TOTAL DENGAN JUMLAH ITEM BERBEDA ===")
// Belanja 2 barang
const belanja1 = hitungTotalBelanja(15000, 25000)
console.log("Belanja 2 Item : Rp" + belanja1.toLocaleString("id-ID"))

// Belanja 5 barang sekaligus
const belanja2 = hitungTotalBelanja(5000, 12000, 20000, 35000, 8000)
console.log("Belanja 5 Item : Rp" + belanja2.toLocaleString("id-ID"))

// Belanja 0 barang (aman, mengembalikan 0)
const belanja3 = hitungTotalBelanja()
console.log("Belanja Kosong : Rp" + belanja3.toLocaleString("id-ID"))

console.log("\n=== DEMO 2: PARAMETER BIASA + REST PARAMETER ===")
const kalimat1 = gabungKata(" - ", "TypeScript", "Function", "Array", "Object")
console.log("Hasil Gabung 1 :", kalimat1)

const kalimat2 = gabungKata(" / ", "Home", "User", "Project", "Setting")
console.log("Hasil Gabung 2 :", kalimat2)

console.log("\n=== DEMO 3: KALKULASI NILAI DINAMIS SISWA ===")
console.log(rataRataNilai("Andi Pratama", 80, 85, 90, 75)) // 4 nilai
console.log(rataRataNilai("Citra Dewi", 95, 90))           // 2 nilai
console.log(rataRataNilai("Dedi Gunawan"))                 // 0 nilai

console.log("\n✓ 3 Aturan Emas Rest Parameter Terbukti:")
console.log("  1. Diawali tiga titik (...)")
console.log("  2. Tipe datanya selalu Array (misal: number[])")
console.log("  3. Wajib berada di posisi parameter paling akhir!")

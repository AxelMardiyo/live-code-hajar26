// =============================================================================
// PERTEMUAN 2: ARRAY (BAB 5)
// File    : 05_looping-array.ts (Ref: Slide 27)
// Topik   : 3 Cara Looping Elemen Array (for Klasik, for..of, dan forEach)
// Kaitan  : Digunakan langsung oleh Anggota 2 (tampilkanSemua) dan Anggota 4
//           untuk mencetak daftar tugas ke terminal di Final Project.
// =============================================================================

const daftarSiswa: string[] = ["Andi", "Budi", "Citra", "Dian"]

console.log("=== 1. FOR KLASIK (Cocok jika butuh kontrol indeks presisi) ===")
for (let i = 0; i < daftarSiswa.length; i++) {
  console.log(`Siswa urutan ke-${i + 1}: ${daftarSiswa[i]}`)
}

console.log("\n=== 2. FOR...OF (Paling bersih jika hanya butuh nilai datanya) ===")
for (const nama of daftarSiswa) {
  console.log(`Halo, siswa teladan: ${nama}`)
}

console.log("\n=== 3. METHOD .forEach() (Gaya deklaratif modern dengan callback) ===")
daftarSiswa.forEach((nama, indeks) => {
  console.log(`[Item #${indeks + 1}] Nama: ${nama}`)
})

console.log("\n💡 Rekomendasi Final Project:")
console.log("Untuk fungsi tampilkanSemua(), gunakan 'for...of' atau '.forEach()' agar kodingan rapi dan bersih!")

// =============================================================================
// PERTEMUAN 2: ARRAY (BAB 5)
// File    : 02_push-pop.ts (Ref: Slide 13)
// Topik   : Operasi Belakang - push() & pop()
// Kaitan  : Operasi inti yang langsung digunakan Anggota 1 pada fungsi
//           tambahTugas() di Final Project Task Tracker!
// =============================================================================

const daftarTugas: string[] = ["Belajar HTML", "Belajar CSS"]

console.log("=== DEMO OPERASI PUSH & POP ===")
console.log("Kondisi Awal       :", daftarTugas)

// 1. push() -> Menambahkan satu atau lebih elemen baru ke ujung akhir array
daftarTugas.push("Belajar JavaScript")
console.log("Setelah push(1)    :", daftarTugas)

daftarTugas.push("Belajar TypeScript", "Mengerjakan Final Project")
console.log("Setelah push(multi):", daftarTugas)

// 2. pop() -> Menghapus dan mengembalikan elemen paling terakhir
const tugasTerakhir = daftarTugas.pop()
console.log("\nElemen yang di-pop :", tugasTerakhir)
console.log("Array Setelah pop  :", daftarTugas)

console.log("\n💡 Catatan Final Project:")
console.log("Pada fungsi tambahTugas(), kita akan memakai 'daftarTugas.push(tugasBaru)'.")

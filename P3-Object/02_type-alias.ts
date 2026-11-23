// =============================================================================
// PERTEMUAN 3: OBJECT (BAB 6)
// File    : 02_type-alias.ts (Ref: Slide 07)
// Topik   : Blueprint Data - Type Alias vs Object Literal
// Kaitan  : Konsep wajib untuk memahami deklarasi 'type Prioritas' dan
//           'type Tugas' yang menjadi inti struktur data Final Project Task Tracker!
// =============================================================================

// 1. Type Union untuk membatasi opsi string yang valid
type Prioritas = "Tinggi" | "Sedang" | "Rendah"

// 2. Blueprint Type Alias untuk sebuah entitas Tugas
type ItemTugas = {
  id: number
  judul: string
  prioritas: Prioritas
  isSelesai: boolean
}

// 3. Membuat objek nyata yang mematuhi kontrak Type Alias
const tugas1: ItemTugas = {
  id: 1,
  judul: "Mempelajari sintaks TypeScript",
  prioritas: "Tinggi",
  isSelesai: true
}

const tugas2: ItemTugas = {
  id: 2,
  judul: "Mengerjakan latihan LKPD",
  prioritas: "Sedang",
  isSelesai: false
}

console.log("=== DEMO TYPE ALIAS SEBAGAI BLUEPRINT DATA ===")
console.log("Tugas 1:", tugas1)
console.log("Tugas 2:", tugas2)

console.log("\n💡 Manfaat Type Alias:")
console.log("Jika ada salah ketik key (misal 'judoel') atau nilai prioritas di luar opsi, TypeScript akan langsung memberi tahu saat coding!")

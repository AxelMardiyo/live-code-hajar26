# LEMBAR KERJA PESERTA DIDIK (LKPD)
## TANTANGAN PRAKTIK MANDIRI: BAB 5 — ARRAY DI TYPESCRIPT

---

### 📋 IDENTITAS SISWA & LEMBAR JAWAB

| Data Siswa | Kolom Pengisian |
|:---|:---|
| **Nama Lengkap** | ................................................................................ |
| **Nomor Presensi / NIS** | ................................................................................ |
| **Kelas / Konsentrasi Keahlian** | X RPL ............. / Rekayasa Perangkat Lunak |
| **Paket Soal yang Dikerjakan** | `[  ]` Paket A (Baris Kiri) &nbsp;&nbsp;&nbsp; `[  ]` Paket B (Baris Tengah) &nbsp;&nbsp;&nbsp; `[  ]` Paket C (Baris Kanan) |
| **Pilihan Tingkat Kesulitan** | `[  ]` Opsi 1: Tingkat Menengah (15 Menit) &nbsp;&nbsp;&nbsp; `[  ]` Opsi 2: Tingkat Dasar (10 Menit) |
| **Tanggal Pelaksanaan** | ................................................................................ |

---

### 🎯 PETUNJUK UMUM PENGERJAAN

1. **Prinsip Kejujuran:** Kerjakan soal paket yang sesuai dengan posisi baris meja kalian.
2. **Ruang Kerja (Environment):**
   - Buat file TypeScript baru di folder `src/challenge/`, contoh: `src/challenge/array-paket-a.ts`.
   - Jalankan program via terminal:
     ```bash
     npx tsx src/challenge/array-paket-a.ts
     ```
3. **Ketentuan Kode TypeScript:**
   - Wajib mendeklarasikan tipe array secara jelas, contoh: `number[]`, `string[]`, atau `Array<T>`.
   - Perhatikan konsep **Mutable** (mengubah array asli) vs **Immutable** (menghasilkan array baru).
   - Dilarang keras menggunakan tipe `any`.
4. **Kriteria Penilaian & Poin Keaktifan:**
   - **30 Poin:** Deklarasi tipe data array dan callback function yang tepat.
   - **40 Poin:** Ketepatan logika method array dan kesesuaian output.
   - **30 Poin:** Kerapian kode dan penggunaan nama variabel deskriptif.
   - **🌟 Bonus +25 Poin Keaktifan:** Untuk 3 siswa tercepat yang berhasil mendemonstrasikan hasil tanpa error.

---

## 🅰️ OPSI 1: TANTANGAN TINGKAT MENENGAH (WAKTU: 15 MENIT)
> *Fokus pada penggunaan Higher-Order Method Fungsional Array modern (`filter`, `map`, `find`).*

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ ATURAN DISTRIBUSI SOAL BERDASARKAN BARIS MEJA KELAS:                                   │
│ • Baris 1 / Sisi Kiri Kelas    ──► PAKET A: Saring Nilai Lulus KKM (.filter())         │
│ • Baris 2 / Sisi Tengah Kelas  ──► PAKET B: Transformasi Harga Produk (.map())         │
│ • Baris 3 / Sisi Kanan Kelas   ──► PAKET C: Pencarian Kontak Pertama (.find())         │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

### 🔍 PAKET A — MEJA BARIS 1 (KIRI)
**Topik: Penyaringan Data Siswa Lulus KKM (`.filter()`)**

#### 1. Skenario Masalah
Guru memiliki daftar nilai ujian akhir 10 siswa yang disimpan dalam sebuah array angka. Guru ingin menyaring siapa saja siswa yang berhasil lulus KKM (nilai $\ge 75$) tanpa mengubah data nilai aslinya, serta menghitung berapa banyak siswa yang lulus.

#### 2. Instruksi Tugas
1. Buat array `nilaiUjian: number[]` berisi 10 nilai acak: `[65, 80, 92, 58, 75, 88, 70, 95, 60, 84]`.
2. Gunakan method **`.filter()`** dengan callback predicate untuk menyaring nilai yang $\ge 75$. Simpan hasilnya ke dalam variabel baru `siswaLulus`.
3. Tampilkan daftar nilai yang lulus dan hitung jumlah total siswa yang lulus menggunakan property `.length`.

#### 3. Kerangka Kode (*Starter Code*)
```typescript
// ==========================================
// TANTANGAN ARRAY MENENGAH - PAKET A: FILTER
// Nama Siswa : .............................
// ==========================================

const nilaiUjian: number[] = [65, 80, 92, 58, 75, 88, 70, 95, 60, 84];

// TODO: Gunakan .filter() untuk menyaring nilai >= 75
const siswaLulus: number[] = nilaiUjian.filter((nilai: number) => {
  // Tulis kondisi boolean di sini
});

console.log("=== HASIL SELEKSI KELULUSAN ===");
console.log("Semua Nilai Siswa :", nilaiUjian);
console.log("Nilai yang Lulus  :", siswaLulus);
console.log("Jumlah Siswa Lulus:", siswaLulus.length, "orang");
```

#### 4. Target Output Terminal
```text
=== HASIL SELEKSI KELULUSAN ===
Semua Nilai Siswa : [ 65, 80, 92, 58, 75, 88, 70, 95, 60, 84 ]
Nilai yang Lulus  : [ 80, 92, 75, 88, 95, 84 ]
Jumlah Siswa Lulus: 6 orang
```

---

### 🏷️ PAKET B — MEJA BARIS 2 (TENGAH)
**Topik: Transformasi Harga & Diskon Toko (`.map()`)**

#### 1. Skenario Masalah
Sebuah supermarket sedang mengadakan promo diskon kilat sebesar 10% untuk semua produk kategori elektronik. Manajer toko meminta dibuatkan program yang dapat mentransformasi seluruh harga produk asli menjadi harga setelah diskon, sekaligus mengubahnya menjadi format string Rupiah.

#### 2. Instruksi Tugas
1. Buat array `daftarHarga: number[]` berisi 5 harga produk: `[50000, 120000, 250000, 80000, 150000]`.
2. Gunakan method **`.map()`** untuk menghasilkan array baru bertipe `string[]` di mana setiap harga dipotong diskon 10% dan diformat menjadi `"Rp..."`.
3. Tampilkan perbandingan array harga asli dengan array harga promo di terminal.

#### 3. Kerangka Kode (*Starter Code*)
```typescript
// ==========================================
// TANTANGAN ARRAY MENENGAH - PAKET B: MAP
// Nama Siswa : .............................
// ==========================================

const daftarHarga: number[] = [50000, 120000, 250000, 80000, 150000];

// TODO: Gunakan .map() untuk menghitung harga diskon 10% dan format Rupiah
const hargaPromo: string[] = daftarHarga.map((harga: number) => {
  const hargaDiskon = harga - (harga * 0.10);
  return `Rp${hargaDiskon.toLocaleString("id-ID")}`;
});

console.log("=== DAFTAR PROMO DISKON 10% ===");
console.log("Harga Normal :", daftarHarga);
console.log("Harga Promo  :", hargaPromo);
```

#### 4. Target Output Terminal
```text
=== DAFTAR PROMO DISKON 10% ===
Harga Normal : [ 50000, 120000, 250000, 80000, 150000 ]
Harga Promo  : [ 'Rp45.000', 'Rp108.000', 'Rp225.000', 'Rp72.000', 'Rp135.000' ]
```

---

### 👤 PAKET C — MEJA BARIS 3 (KANAN)
**Topik: Pencarian Kontak Kriteria Spesifik (`.find()`)**

#### 1. Skenario Masalah
Aplikasi kontak buku telepon menyimpan daftar nama teman. Pengguna ingin mencari kontak pertama yang namanya berawalan huruf tertentu (misalnya huruf `"M"`).

#### 2. Instruksi Tugas
1. Buat array `daftarNama: string[]` berisi 6 nama teman: `["Andi", "Budi", "Mega", "Doni", "Maya", "Eko"]`.
2. Gunakan method **`.find()`** untuk mencari nama pertama yang berawalan huruf `"M"` (`nama.startsWith("M")`).
3. Lakukan penanganan nilai aman: jika nama ditemukan, tampilkan pesan sukses; jika tidak ditemukan (`undefined`), tampilkan pesan tidak ada.

#### 3. Kerangka Kode (*Starter Code*)
```typescript
// ==========================================
// TANTANGAN ARRAY MENENGAH - PAKET C: FIND
// Nama Siswa : .............................
// ==========================================

const daftarNama: string[] = ["Andi", "Budi", "Mega", "Doni", "Maya", "Eko"];

// TODO: Gunakan .find() untuk mencari nama pertama berawalan "M"
const kontakDitemukan = daftarNama.find((nama: string) => {
  return nama.startsWith("M");
});

console.log("=== PENCARIAN BUKU KONTAK ===");
if (kontakDitemukan) {
  console.log(`Kontak pertama berawalan 'M': ${kontakDitemukan}`);
} else {
  console.log("Kontak tidak ditemukan!");
}
```

#### 4. Target Output Terminal
```text
=== PENCARIAN BUKU KONTAK ===
Kontak pertama berawalan 'M': Mega
```

---

## 🅱️ OPSI 2: TANTANGAN TINGKAT DASAR (WAKTU: 10 MENIT)
> *Fokus pada manipulasi dasar array (tambah ujung, hapus ujung, pencarian posisi).*

---

### 🛒 PAKET A — MEJA BARIS 1 (KIRI)
**Topik: Tambah Ujung Belakang & Depan (`push` & `unshift`)**
1. Buat array `daftarBelanja: string[] = ["Beras", "Minyak", "Gula"]`.
2. Tambahkan `"Telur"` ke bagian **paling belakang** menggunakan `push()`.
3. Tambahkan `"Kopi"` ke bagian **paling depan** menggunakan `unshift()`.
4. Cetak array hasil akhir dan total jumlah barang (`.length`).
*Target Output: `[ 'Kopi', 'Beras', 'Minyak', 'Gula', 'Telur' ]` (Total: 5 barang)*

---

### 👥 PAKET B — MEJA BARIS 2 (TENGAH)
**Topik: Hapus Ujung Depan & Belakang (`shift` & `pop`)**
1. Buat array `antreanSiswa: string[] = ["Andi", "Budi", "Citra", "Dian", "Eko"]`.
2. Siswa pertama dipanggil masuk kelas: keluarkan menggunakan `shift()` dan simpan namanya.
3. Siswa terakhir batal mengantre: keluarkan menggunakan `pop()` dan simpan namanya.
4. Tampilkan siswa yang dilayani, siswa yang batal, dan sisa antrean yang ada.
*Target Output: Dilayani: Andi | Batal: Eko | Sisa Antrean: `[ 'Budi', 'Citra', 'Dian' ]`*

---

### 📋 PAKET C — MEJA BARIS 3 (KANAN)
**Topik: Pengecekan Absensi Siswa (`includes` & `indexOf`)**
1. Buat array `absenHadir: string[] = ["Rafi", "Siti", "Dimas", "Aulia", "Fajar"]`.
2. Cek apakah `"Siti"` hadir menggunakan method `includes()`.
3. Cari tahu `"Dimas"` berada di nomor indeks berapa menggunakan `indexOf()`.
4. Cetak kedua hasil informasi tersebut dengan kalimat yang rapi dan informatif!
*Target Output: Siti hadir: true | Dimas berada di indeks ke-2*

---

### 📝 LEMBAR CATATAN PENILAIAN PENGARAH / GURU

| Aspek Penilaian | Skor Maksimal | Skor Siswa | Catatan Guru |
|:---|:---:|:---:|:---|
| **Kesesuaian Tipe Data Array & Parameter Callback** | 30 | ...... | |
| **Logika Method Array & Ketepatan Output Terminal** | 40 | ...... | |
| **Kerapian Kode, Penamaan Variabel & Pemahaman Mutasi** | 30 | ...... | |
| **Bonus Poin Keaktifan Siswa Tercepat** | +25 | ...... | |
| **TOTAL SKOR AKHIR** | **100 (+25)** | ...... | |

**Tanda Tangan Pengajar:** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **Tanggal Diperiksa:**  
<br><br>
( ............................................................ ) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ( ........................................ )

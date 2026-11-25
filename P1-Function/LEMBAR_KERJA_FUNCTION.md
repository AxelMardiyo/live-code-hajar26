# LEMBAR KERJA PESERTA DIDIK (LKPD)
## TANTANGAN PRAKTIK MANDIRI: BAB 4 — FUNCTION DI TYPESCRIPT

---

### 📋 IDENTITAS SISWA & LEMBAR JAWAB

| Data Siswa | Kolom Pengisian |
|:---|:---|
| **Nama Lengkap** | ................................................................................ |
| **Nomor Presensi / NIS** | ................................................................................ |
| **Kelas / Konsentrasi Keahlian** | X RPL ............. / Rekayasa Perangkat Lunak |
| **Paket Soal yang Dikerjakan** | `[  ]` Paket A (Baris Kiri) &nbsp;&nbsp;&nbsp; `[  ]` Paket B (Baris Tengah) &nbsp;&nbsp;&nbsp; `[  ]` Paket C (Baris Kanan) |
| **Pilihan Tingkat Kesulitan** | `[  ]` Opsi 1: Tingkat Menengah (15–20 Menit) &nbsp;&nbsp;&nbsp; `[  ]` Opsi 2: Tingkat Dasar (10–12 Menit) |
| **Tanggal Pelaksanaan** | ................................................................................ |

---

### 🎯 PETUNJUK UMUM PENGERJAAN

1. **Prinsip Kejujuran & Anti-Contek:** Setiap siswa wajib mengerjakan paket soal yang sesuai dengan baris tempat duduknya. Dilarang menyontek atau menyalin kode teman sebangku.
2. **Ruang Kerja (Environment):**
   - Buka VS Code di folder latihan kelas kalian.
   - Buat file TypeScript baru di folder `src/challenge/`, contoh: `src/challenge/paket-a.ts`.
   - Jalankan program secara mandiri melalui terminal terintegrasi (`Ctrl + ~`) menggunakan perintah:
     ```bash
     npx tsx src/challenge/paket-a.ts
     ```
3. **Ketentuan Kode TypeScript:**
   - Wajib menerapkan **Strict Typing**: setiap parameter dan return value wajib memiliki tipe data eksplisit (`number`, `string`, `boolean`, `void`).
   - **DILARANG** menggunakan tipe `any`.
   - Gunakan gaya penamaan fungsi dan variabel standar industri (*camelCase*).
4. **Kriteria Penilaian & Poin Keaktifan:**
   - **30 Poin:** Ketepatan tipe data parameter dan return value.
   - **40 Poin:** Kebenaran logika dan kesesuaian output terminal.
   - **30 Poin:** Kerapian struktur kode dan pemisahan tugas (*Single Responsibility*).
   - **🌟 Bonus +25 Poin Keaktifan:** Diberikan kepada 3 siswa tercepat yang berhasil menyelesaikan tantangan tanpa error dan mendemonstrasikannya di depan kelas.

---

## 🅰️ OPSI 1: TANTANGAN TINGKAT MENENGAH (WAKTU: 15–20 MENIT)
> *Gunakan opsi ini jika Anda ingin menguji integrasi modularitas, arrow function, atau rest parameter.*

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ ATURAN DISTRIBUSI SOAL BERDASARKAN BARIS MEJA KELAS:                                   │
│ • Baris 1 / Sisi Kiri Kelas    ──► PAKET A: Sistem Kasir Toko (Arrow Function)         │
│ • Baris 2 / Sisi Tengah Kelas  ──► PAKET B: Raport Siswa Modular (Prinsip SRP)         │
│ • Baris 3 / Sisi Kanan Kelas   ──► PAKET C: Ekspedisi & Resi Paket (Rest Parameter)    │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

### 🛒 PAKET A — MEJA BARIS 1 (KIRI)
**Topik: Sistem Kasir Toko Modern (Arrow Function Berantai)**

#### 1. Skenario Masalah
Sebuah toko retail modern membutuhkan sistem kasir otomatis yang ringkas. Kasir memerlukan alur komputasi harga yang terdiri dari penambahan pajak pertambahan nilai (PPN 11%), pemformatan angka menjadi mata uang Rupiah, serta fungsi utama yang menggabungkan keduanya.

#### 2. Spesifikasi Fungsi yang Harus Dibuat
Buatlah **3 arrow function** (`const namaFungsi = (...) => ...`):

1. **`tambahPajak`**:
   - Parameter: `harga: number`
   - Return type: `number`
   - Logika: Mengembalikan nilai harga setelah ditambah pajak 11% (`harga + (harga * 0.11)`).
2. **`formatRupiah`**:
   - Parameter: `nominal: number`
   - Return type: `string`
   - Logika: Mengubah angka menjadi format teks mata uang Rupiah, contoh: `"Rp" + nominal.toLocaleString("id-ID")`.
3. **`hargaAkhir`**:
   - Parameter: `harga: number`
   - Return type: `string`
   - Logika: **Memanggil fungsi `tambahPajak` terlebih dahulu**, kemudian mengoper hasil kalkulasinya ke dalam fungsi **`formatRupiah`**.

#### 3. Kerangka Kode Awal (*Starter Code*)
```typescript
// ==========================================
// TANTANGAN MENENGAH - PAKET A: KASIR TOKO
// Nama Siswa : .............................
// ==========================================

// TODO 1: Buat arrow function tambahPajak
const tambahPajak = (harga: number): number => {
  // Tulis kodemu di sini
};

// TODO 2: Buat arrow function formatRupiah
const formatRupiah = (nominal: number): string => {
  // Tulis kodemu di sini
};

// TODO 3: Buat arrow function hargaAkhir yang memanggil kedua fungsi di atas
const hargaAkhir = (harga: number): string => {
  // Tulis kodemu di sini
};

// --- DATA PENGUJIAN ---
console.log("=== SISTEM KASIR TOKO ===");
console.log("Harga Asli: Rp50.000  -> Total Bayar:", hargaAkhir(50000));
console.log("Harga Asli: Rp120.000 -> Total Bayar:", hargaAkhir(120000));
```

#### 4. Target Output Terminal
```text
=== SISTEM KASIR TOKO ===
Harga Asli: Rp50.000  -> Total Bayar: Rp55.500
Harga Asli: Rp120.000 -> Total Bayar: Rp133.200
```

---

### 🎓 PAKET B — MEJA BARIS 2 (TENGAH)
**Topik: Pengolah Raport Akademik Modular (Prinsip Single Responsibility)**

#### 1. Skenario Masalah
Wali kelas ingin mengolah nilai siswa secara teratur tanpa membuat satu fungsi raksasa yang membingungkan. Setiap tahapan perhitungan nilai harus dipecah menjadi fungsi kecil yang mandiri (prinsip Single Responsibility).

#### 2. Spesifikasi Fungsi yang Harus Dibuat
Buatlah **3 fungsi modular**:

1. **`hitungRataRata`**:
   - Parameter: `n1: number, n2: number, n3: number`
   - Return type: `number`
   - Logika: Menghitung nilai rata-rata dari ketiga angka `(n1 + n2 + n3) / 3`.
2. **`tentukanGrade`**:
   - Parameter: `rataRata: number`
   - Return type: `string`
   - Logika: Mengembalikan predikat huruf dengan aturan:
     - `>= 85` $\rightarrow$ `"A"`
     - `>= 70` $\rightarrow$ `"B"`
     - `>= 60` $\rightarrow$ `"C"`
     - `>= 50` $\rightarrow$ `"D"`
     - `< 50`  $\rightarrow$ `"E"`
3. **`buatLaporan`**:
   - Parameter: `nama: string, n1: number, n2: number, n3: number`
   - Return type: `void`
   - Logika: Memanggil `hitungRataRata`, lalu memanggil `tentukanGrade`, dan mencetak kartu laporan ringkas menggunakan `console.log`.

#### 3. Kerangka Kode Awal (*Starter Code*)
```typescript
// ==========================================
// TANTANGAN MENENGAH - PAKET B: RAPORT SISWA
// Nama Siswa : .............................
// ==========================================

// TODO 1: Buat function hitungRataRata
function hitungRataRata(n1: number, n2: number, n3: number): number {
  // Tulis kodemu di sini
}

// TODO 2: Buat function tentukanGrade
function tentukanGrade(rataRata: number): string {
  // Tulis kodemu di sini
}

// TODO 3: Buat function buatLaporan yang memanggil hitungRataRata & tentukanGrade
function buatLaporan(nama: string, n1: number, n2: number, n3: number): void {
  // Tulis kodemu di sini
}

// --- DATA PENGUJIAN ---
console.log("=== LAPORAN HASIL BELAJAR SISWA ===");
buatLaporan("Andi Pratama", 80, 85, 90);
buatLaporan("Budi Santoso", 65, 70, 75);
```

#### 4. Target Output Terminal
```text
=== LAPORAN HASIL BELAJAR SISWA ===
Siswa: Andi Pratama | Rata-rata: 85 | Grade: A
Siswa: Budi Santoso | Rata-rata: 70 | Grade: B
```

---

### 📦 PAKET C — MEJA BARIS 3 (KANAN)
**Topik: Sistem Ekspedisi Logistik & Resi (Rest Parameter)**

#### 1. Skenario Masalah
Perusahaan ekspedisi logistik menerima paket dari pelanggan dengan jumlah koli/barang yang tidak pasti (bisa 2 paket, 4 paket, atau lebih). Sistem membutuhkan fungsi fleksibel yang mampu menampung banyak data berat barang sekaligus, menghitung total ongkir, dan mencetak resi pengiriman.

#### 2. Spesifikasi Fungsi yang Harus Dibuat
Buatlah **3 fungsi kalkulasi logistik**:

1. **`hitungTotalBerat`**:
   - Parameter: `...berat: number[]` (*Rest Parameter*)
   - Return type: `number`
   - Logika: Menjumlahkan seluruh angka berat barang yang dikirimkan.
2. **`hitungOngkir`**:
   - Parameter: `totalBerat: number, tarifPerKg: number = 10000` (*Default Parameter*)
   - Return type: `number`
   - Logika: Mengalikan `totalBerat * tarifPerKg`.
3. **`cetakResi`**:
   - Parameter: `noResi: string, totalBerat: number, totalOngkir: number`
   - Return type: `void`
   - Logika: Mencetak struk informasi resi, total beban timbangan, dan tagihan ongkir ke terminal.

#### 3. Kerangka Kode Awal (*Starter Code*)
```typescript
// ==========================================
// TANTANGAN MENENGAH - PAKET C: EKSPEDISI RESI
// Nama Siswa : .............................
// ==========================================

// TODO 1: Buat function hitungTotalBerat dengan rest parameter (...berat)
function hitungTotalBerat(...berat: number[]): number {
  // Tulis kodemu di sini (gunakan loop for atau for...of)
}

// TODO 2: Buat function hitungOngkir dengan default parameter tarif
function hitungOngkir(totalBerat: number, tarifPerKg: number = 10000): number {
  // Tulis kodemu di sini
}

// TODO 3: Buat function cetakResi
function cetakResi(noResi: string, totalBerat: number, totalOngkir: number): void {
  // Tulis kodemu di sini
}

// --- DATA PENGUJIAN ---
console.log("=== SISTEM RESI EKSPEDISI KILAT ===");
const beratPaket1 = hitungTotalBerat(1.5, 2.0, 0.5, 3.0); // 4 paket = 7 kg
const ongkirPaket1 = hitungOngkir(beratPaket1, 12000);     // tarif 12rb/kg
cetakResi("EXP-2026-001", beratPaket1, ongkirPaket1);
```

#### 4. Target Output Terminal
```text
=== SISTEM RESI EKSPEDISI KILAT ===
No. Resi     : EXP-2026-001
Total Berat  : 7 Kg
Total Ongkir : Rp84.000
Status       : SIAP DIKIRIM
```

---

## 🅱️ OPSI 2: TANTANGAN TINGKAT DASAR (WAKTU: 10–12 MENIT)
> *Gunakan opsi ini untuk kuis kilat menguji kecepatan menulis sintaks fungsi dasar ber-tipe (parameter dan return).*

---

### 🔢 PAKET A — MEJA BARIS 1 (KIRI)
**Topik: Kalkulator 4 Operasi Aritmetika Dasar**

#### 1. Instruksi Tugas
Buatlah 4 fungsi terpisah di TypeScript:
1. `tambah(a: number, b: number): number` $\rightarrow$ mengembalikan `a + b`.
2. `kurang(a: number, b: number): number` $\rightarrow$ mengembalikan `a - b`.
3. `kali(a: number, b: number): number` $\rightarrow$ mengembalikan `a * b`.
4. `bagi(a: number, b: number): number` $\rightarrow$ mengembalikan `a / b`.

#### 2. Data Pengujian & Target Output
Uji keempat fungsi tersebut di terminal dengan nilai `a = 20` dan `b = 4`:
```typescript
console.log("20 + 4 =", tambah(20, 4)); // Output: 24
console.log("20 - 4 =", kurang(20, 4)); // Output: 16
console.log("20 * 4 =", kali(20, 4));   // Output: 80
console.log("20 / 4 =", bagi(20, 4));   // Output: 5
```

---

### 🌡️ PAKET B — MEJA BARIS 2 (TENGAH)
**Topik: Konverter Suhu 3 Skala Modular**

#### 1. Instruksi Tugas
Buatlah 3 fungsi konversi suhu dengan parameter dan return type `number`:
1. `celsiusKeFahrenheit(c: number): number` $\rightarrow$ rumus: `(c * 9/5) + 32`.
2. `celsiusKeKelvin(c: number): number` $\rightarrow$ rumus: `c + 273.15`.
3. `fahrenheitKeCelsius(f: number): number` $\rightarrow$ rumus: `(f - 32) * 5/9`.

#### 2. Data Pengujian & Target Output
Uji fungsi untuk mengonversi suhu tubuh manusia sehat sebesar `36.5°C`:
```typescript
const f = celsiusKeFahrenheit(36.5);
const k = celsiusKeKelvin(36.5);
console.log(`Suhu 36.5°C = ${f.toFixed(1)}°F | ${k.toFixed(2)} K`);
// Output: Suhu 36.5°C = 97.7°F | 309.65 K
```

---

### 🪪 PAKET C — MEJA BARIS 3 (KANAN)
**Topik: Generator Kartu Siswa (Optional Parameter)**

#### 1. Instruksi Tugas
Buatlah fungsi `buatKartuSiswa` dengan spesifikasi:
- Parameter:
  - `nama: string` (wajib)
  - `kelas: string` (wajib)
  - `jurusan: string` (wajib)
  - `hobi?: string` (opsional, gunakan tanda tanya `?`)
- Return type: `string`
- Logika: Jika argumen `hobi` tidak diisi saat pemanggilan fungsi, otomatis ganti dengan teks `"Tidak disebutkan"`.

#### 2. Data Pengujian & Target Output
Panggil fungsi sebanyak 2 kali (satu kali membawa hobi, satu kali tanpa membawa hobi):
```typescript
console.log(buatKartuSiswa("Ahmad Dani", "X-A", "RPL", "Bermain Futsal"));
console.log(buatKartuSiswa("Citra Dewi", "X-B", "RPL"));

// Target Output:
// Siswa: Ahmad Dani | Kelas: X-A RPL | Hobi: Bermain Futsal
// Siswa: Citra Dewi | Kelas: X-B RPL | Hobi: Tidak disebutkan
```

---

### 📝 LEMBAR CATATAN PENILAIAN PENGARAH / GURU

| Aspek Penilaian | Skor Maksimal | Skor Siswa | Catatan Guru |
|:---|:---:|:---:|:---|
| **Kesesuaian Tipe Data (Strict Typing, No Any)** | 30 | ...... | |
| **Logika Algoritma & Keberhasilan Output Terminal** | 40 | ...... | |
| **Kerapian Kode, Penamaan Variabel & Struktur Modular** | 30 | ...... | |
| **Bonus Poin Keaktifan Siswa Tercepat** | +25 | ...... | |
| **TOTAL SKOR AKHIR** | **100 (+25)** | ...... | |

**Tanda Tangan Pengajar:** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **Tanggal Diperiksa:**  
<br><br>
( ............................................................ ) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ( ........................................ )

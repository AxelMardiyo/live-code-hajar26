# Panduan Materi Live Coding Kelas TypeScript (P1 - P3)

Direktori ini berisi seluruh program TypeScript pilihan yang paling krusial untuk dipraktikkan bersama (*live coding*) di kelas. Pemilihan materi ini dirancang secara berjenjang agar sintaks yang dipelajari **langsung terpakai secara konkret** pada **Final Project: Task Tracker** di Pertemuan 4.

---

## Struktur Folder

```text
live-code/
├── P1-Function/              # Pertemuan 1: Modularitas Kode & Fungsi
│   ├── 01_cek-kesiapan.ts    # Cek kesiapan runtime tsx (Slide 04)
│   ├── 02_early-return.ts    # Guard clause & return value (Slide 10)
│   ├── 03_default-parameter.ts # Nilai default parameter (Slide 14)
│   ├── 04_arrow-function.ts  # Modern arrow function (Slide 19)
│   └── 05_studi-kasus-nilai.ts # Orkestrasi fungsi modular (Slide 26)
│
├── P2-Array/                 # Pertemuan 2: Koleksi & Manipulasi Data
│   ├── 01_cek-kesiapan.ts    # Tipe array & zero-indexed (Slide 04)
│   ├── 02_push-pop.ts        # Operasi push() & pop() (Slide 13)
│   ├── 03_find-demo.ts       # Pencarian data dengan find() (Slide 22)
│   ├── 04_filter-demo.ts     # Penyaringan data dengan filter() (Slide 23)
│   ├── 05_looping-array.ts   # 3 Gaya perulangan array (Slide 27)
│   └── 06_reduce-demo.ts     # Akumulasi nilai dengan reduce() (Slide 25)
│
└── P3-Object/                # Pertemuan 3: Entitas & Array of Objects
    ├── 01_cek-kesiapan.ts    # Key-value pair & dot notation (Slide 04)
    ├── 02_type-alias.ts      # Blueprint data Type Alias (Slide 07)
    ├── 03_mengubah-property.ts # Mutabilitas properti const (Slide 11)
    ├── 04_array-of-object.ts # Koleksi Array of Objects (Slide 18)
    ├── 05_filter-map-object.ts # Filter & map koleksi objek (Slide 19)
    └── 06_crud-siswa.ts      # Mini project CRUD in-memory (Slide 29)
```

---

## Cara Menjalankan Kode

Pastikan Node.js sudah terinstal di komputer. Gunakan `tsx` atau `npx tsx` untuk mengeksekusi file TypeScript secara langsung:

```bash
# Jalankan contoh di Pertemuan 1 (Function)
npx tsx live-code/P1-Function/01_cek-kesiapan.ts
npx tsx live-code/P1-Function/02_early-return.ts

# Jalankan contoh di Pertemuan 2 (Array)
npx tsx live-code/P2-Array/02_push-pop.ts
npx tsx live-code/P2-Array/03_find-demo.ts

# Jalankan contoh di Pertemuan 3 (Object)
npx tsx live-code/P3-Object/04_array-of-object.ts
npx tsx live-code/P3-Object/06_crud-siswa.ts
```

---

## Pemetaan Sintaks ke Final Project (Pertemuan 4: Task Tracker)

| Fitur di Final Project | Materi Pembelajaran | File Live Code Rujukan |
|---|---|---|
| **Struktur Data `Tugas`** | P3: Type Alias & Union Type | `P3-Object/02_type-alias.ts` |
| **Database `daftarTugas`** | P3: Array of Objects | `P3-Object/04_array-of-object.ts` |
| **TODO 1: `tambahTugas()`** | P1: Default Param + P2: `push()` + P3: `nextId++` | `P1-Function/03_default-parameter.ts`, `P2-Array/02_push-pop.ts`, `P3-Object/06_crud-siswa.ts` |
| **TODO 2: `tampilkanSemua()`** | P2: `for...of` / `.forEach()` | `P2-Array/05_looping-array.ts`, `P3-Object/04_array-of-object.ts` |
| **TODO 3: `selesaikanTugas()`** | P2: `.find()` + P3: Mutabilitas `const` | `P2-Array/03_find-demo.ts`, `P3-Object/03_mengubah-property.ts` |
| **TODO 4: `filterByPrioritas()`** | P2: `.filter()` pada Array of Objects | `P2-Array/04_filter-demo.ts`, `P3-Object/05_filter-map-object.ts` |
| **TODO 5: `hitungStatistik()`** | P1: Early Return + P2: `.filter()` / `.reduce()` | `P1-Function/02_early-return.ts`, `P2-Array/06_reduce-demo.ts` |

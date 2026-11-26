function hitungTotal(...daftarNilai: number[]): number {
    let total = 0
    for (const n of daftarNilai) {
        total += n
    }
    return total
}

function hitungRataRata(total: number, jumlahMapel: number): number {
    if (jumlahMapel <= 0) return 0
    return parseFloat((total / jumlahMapel).toFixed(2))
}

function tentukanGrade(rataRata: number): string {
    if (rataRata >= 90) return "A"
    if (rataRata >= 80) return "B"
    if (rataRata >= 70) return "C"
    if (rataRata >= 60) return "D"
    return "E"
}

function tampilkanLaporan(nama: string, kelas: string, nilaiMatematika: number, nilaiIndonesia: number, nilaiPemrograman: number): void {
    const total = hitungTotal(nilaiMatematika, nilaiIndonesia, nilaiPemrograman)
    const rataRata = hitungRataRata(total, 3)
    const grade = tentukanGrade(rataRata)
    const status = rataRata >= 75 ? "LULUS" : "REMEDIAL"

    console.log("=============== KARTU LAPORAN HASIL BELAJAR ===============")
    console.log(`Nama Siswa         : ${nama.padEnd(30)}`)
    console.log(`Kelas              : ${kelas.padEnd(30)}`)
    console.log("-----------------------------------------------------------")
    console.log(`Matematika         : ${nilaiMatematika.toString().padEnd(30)}`)
    console.log(`B. Indo            : ${nilaiIndonesia.toString().padEnd(30)}`)
    console.log(`Pemrograman TS     : ${nilaiPemrograman.toString().padEnd(30)}`)
}

tampilkanLaporan("Axel Pratama", "XI RPL 1", 85, 90, 95)
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
    if(rataRata >= 90) return 'A'
    if(rataRata >= 80) return 'B'
    if(rataRata >= 70) return 'C'
    if(rataRata >= 60) return 'D'
    return 'E'
}

function tampilkanLaporan(
    nama:string, 
    kelas: string, 
    nilaiMTK: number, 
    nilaiInggris: number
): void {
    const total = hitungTotal(nilaiInggris, nilaiMTK)
    const rataRata = hitungRataRata(total, 2)
    const grade = tentukanGrade(rataRata)
    const status = rataRata >= 75 ? "LULUS" : "REMEDIAL"

    console.log(nama)
    console.log(kelas)
    console.log(total)
    console.log(rataRata)
    console.log(grade)
    console.log(status)
}


tampilkanLaporan("Budi", "X RPL", 70, 75)

const nilaiTukar = {
    MYR: 3300,
    USD: 15500,
    JPY: 110,
};

export function konversiKeRupiah(mataUang, nominal) {
    if (!nilaiTukar.hasOwnProperty(mataUang)) {
        throw new Error(`Mata uang "${mataUang}" tidak dikenali.`);
    }
    if (isNaN(nominal) || nominal < 0) {
        throw new Error("Nominal tidak valid. Masukkan angka positif.");
    }
    return nominal * nilaiTukar[mataUang];
}

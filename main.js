import { konversiKeRupiah } from './utils.js';

const daftarTransaksi = [
    { mataUang: 'MYR', nominal: 100 },
    { mataUang: 'USD', nominal: 50 },
    { mataUang: 'JPY', nominal: 10000 },
    { mataUang: 'EUR', nominal: 100 },
    { mataUang: 'USD', nominal: -20 },
];

daftarTransaksi.forEach(({ mataUang, nominal }, indeks) => {
    try {
        const hasil = konversiKeRupiah(mataUang, nominal);
        console.log(`Transaksi ${indeks + 1}: ${nominal} ${mataUang} = Rp${hasil.toLocaleString('id-ID')}`);
    } catch (error) {
        console.error(`Transaksi ${indeks + 1} Gagal: ${error.message}`);
    }
});

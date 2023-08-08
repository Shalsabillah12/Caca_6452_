// ChartAt
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan sebuah kalimat: ", (inputString) => {
    rl.question("Masukkan indeks yang ingin anda cek: ", (index) =>{
        // Konversi nilai index ke tipe number
        index = Number(index);
        // Periksa apakah index valid (berada dalam rentang string)
        if (index >= 0 && index < inputString.length) {
            // Gunakan method charAt untuk memndapatkan karakter para indeks yang diminta
            const character = inputString.charAt(index);
            console.log(`Karakter pada indeks ${index}: ${character}`); 
        } else {
            console.log("Indeks tidka valid!");
        }
        rl.close();
    });
});
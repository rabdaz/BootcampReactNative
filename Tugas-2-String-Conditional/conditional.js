//Soal If-else game warewolf

//Ayo Bermain warewolf
//Masukan Nama dan Peran mu!
console.log("Soal If Else1 =========")
var nama = "";
var peran = "";

if(nama == "" && peran == ""){
    console.log("Nama dan Peran Harus diisi!");
}
else if(nama != "" && peran == "" ){
    console.log("Hallo "+nama+ ", Pilih peranmu untuk memulai game!");
}
else if(nama != ""){
    if(peran == "penyihir"){
        console.log('Selamat datang di Dunia Werewolf,'+nama+'\nHalo '+peran+' '+nama+', Kamu dapat melihat siapa yang menjadi warewolf!');
    }
    else if(peran == "guard"){
        console.log('Selamat datang di Dunia Werewolf,'+nama+'\nHalo '+peran+' '+nama+', Kamu akan membantu melindungi temanmu dari serangan warewolf!');
    }
    else if(peran == "warewolf"){
        console.log('Selamat datang di Dunia Werewolf,'+nama+'\nHalo '+peran+' '+nama+', Kamu akan memakan mangsa setiap malam!');
    }
}

console.log("\nSoal If Else2 =========")
var nama = "John";
var peran = "";

if(nama == "" && peran == ""){
    console.log("Nama dan Peran Harus diisi!");
}
else if(nama != "" && peran == "" ){
    console.log("Hallo "+nama+ ", Pilih peranmu untuk memulai game!");
}
else if(nama != ""){
    if(peran == "penyihir"){
        console.log('Selamat datang di Dunia Werewolf,'+nama+'\nHalo '+peran+' '+nama+', Kamu dapat melihat siapa yang menjadi warewolf!');
    }
    else if(peran == "guard"){
        console.log('Selamat datang di Dunia Werewolf,'+nama+'\nHalo '+peran+' '+nama+', Kamu akan membantu melindungi temanmu dari serangan warewolf!');
    }
    else if(peran == "warewolf"){
        console.log('Selamat datang di Dunia Werewolf,'+nama+'\nHalo '+peran+' '+nama+', Kamu akan memakan mangsa setiap malam!');
    }
}

console.log("\nSoal If Else3 =========")
var nama = "Jane";
var peran = "penyihir";

if(nama == "" && peran == ""){
    console.log("Nama dan Peran Harus diisi!");
}
else if(nama != "" && peran == "" ){
    console.log("Hallo "+nama+ ", Pilih peranmu untuk memulai game!");
}
else if(nama != ""){
    if(peran == "penyihir"){
        console.log('Selamat datang di Dunia Werewolf,'+nama+'\nHalo '+peran+' '+nama+', Kamu dapat melihat siapa yang menjadi warewolf!');
    }
    else if(peran == "guard"){
        console.log('Selamat datang di Dunia Werewolf,'+nama+'\nHalo '+peran+' '+nama+', Kamu akan membantu melindungi temanmu dari serangan warewolf!');
    }
    else if(peran == "warewolf"){
        console.log('Selamat datang di Dunia Werewolf,'+nama+'\nHalo '+peran+' '+nama+', Kamu akan memakan mangsa setiap malam!');
    }
}

console.log("\nSoal If Else4 =========")
var nama = "Jenita";
var peran = "guard";

if(nama == "" && peran == ""){
    console.log("Nama dan Peran Harus diisi!");
}
else if(nama != "" && peran == "" ){
    console.log("Hallo "+nama+ ", Pilih peranmu untuk memulai game!");
}
else if(nama != ""){
    if(peran == "penyihir"){
        console.log('Selamat datang di Dunia Werewolf,'+nama+'\nHalo '+peran+' '+nama+', Kamu dapat melihat siapa yang menjadi warewolf!');
    }
    else if(peran == "guard"){
        console.log('Selamat datang di Dunia Werewolf,'+nama+'\nHalo '+peran+' '+nama+', Kamu akan membantu melindungi temanmu dari serangan warewolf!');
    }
    else if(peran == "warewolf"){
        console.log('Selamat datang di Dunia Werewolf,'+nama+'\nHalo '+peran+' '+nama+', Kamu akan memakan mangsa setiap malam!');
    }
}

console.log("\nSoal If Else5 =========")
var nama = "Junaedi";
var peran = "warewolf";

if(nama == "" && peran == ""){
    console.log("Nama dan Peran Harus diisi!");
}
else if(nama != "" && peran == "" ){
    console.log("Hallo "+nama+ ", Pilih peranmu untuk memulai game!");
}
else if(nama != ""){
    if(peran == "penyihir"){
        console.log('Selamat datang di Dunia Werewolf,'+nama+'\nHalo '+peran+' '+nama+', Kamu dapat melihat siapa yang menjadi warewolf!');
    }
    else if(peran == "guard"){
        console.log('Selamat datang di Dunia Werewolf,'+nama+'\nHalo '+peran+' '+nama+', Kamu akan membantu melindungi temanmu dari serangan warewolf!');
    }
    else if(peran == "warewolf"){
        console.log('Selamat datang di Dunia Werewolf,'+nama+'\nHalo '+peran+' '+nama+', Kamu akan memakan mangsa setiap malam!');
    }
}

//Soal Switch Case
var tanggal =1;
var bulan =1;
var tahun =1945;

console.log("\nSoal Switch Case");
switch (true){
    case( tanggal < 1 || tanggal > 31):{
        console.log('Data Error, range tanggal tidak tepat');
        break;
    }
    case( tahun < 1900 || tahun > 2200):{
        console.log('Data Error, range tahun tidak tepat');
        break;
    }
    case( bulan > 12 || bulan <1):{
        console.log('Data Error, range bulan tidak tepat');
        break;
    }
    default:{
        switch(bulan){
            case 1:
                console.log(tanggal+" Januari "+tahun);
                break;
            case 2:
                console.log(tanggal+" Februari "+tahun);
                break;
            case 3:
                console.log(tanggal+" Maret "+tahun);
                break;
            case 4:
                console.log(tanggal+" April "+tahun);
                break;
            case 5:
                console.log(tanggal+" Mei "+tahun);
                break;
            case 6:
                console.log(tanggal+" Juni "+tahun);
                break;
            case 7:
                console.log(tanggal+" Juli "+tahun);
                break;
            case 8:
                console.log(tanggal+" Agustus "+tahun);
                break;
            case 9:
                console.log(tanggal+" September "+tahun);
                break;
            case 10:
                console.log(tanggal+" Oktober "+tahun);
                break;
            case 11:
                console.log(tanggal+" November "+tahun);
                break;
            case 12: 
                console.log(tanggal+" Desember "+tahun);
                break;
        }
    }
}
// if(tanggal >= 1&& tanggal <= 31){
//     if(bulan >= 1 && bulan <= 12){
//         if(tahun >= 1900 && tahun <= 2200){
            
//         }else{
//             console.log("Data Error, range tanggal/bulan/tahun tidak tepat");
//         }
//     }else{
//         console.log("Data Error, range tanggal/bulan/tahun tidak tepat");
//     }

// }else{
//     console.log("Data Error, range tanggal/bulan/tahun tidak tepat");
// }


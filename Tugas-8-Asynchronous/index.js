console.log("================");
console.log("     Tugas 1    ");
console.log("================");

var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

let banyakWaktu = 10000;
let j = 0;
function baca(){
    readBooks(banyakWaktu, books[j], function(sisaWaktu){
        banyakWaktu = sisaWaktu;
        j++;
        if(banyakWaktu <= 1000){
            console.log('waktu saya habis');
        }
        if(j < books.length)
        baca();
    });
};


baca();
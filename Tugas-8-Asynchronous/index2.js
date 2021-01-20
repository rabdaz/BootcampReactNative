var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

var banyakWaktu = 10000;

async function baca(){
    for(let j = 0; j< books.length; j++){
        banyakWaktu = await readBooksPromise(banyakWaktu, books[j])
            .then(function(sisaWaktu){
                return sisaWaktu;
            })
            .catch(function(error){
                console.log("Terjadi Kesalahan");
            })
    }
}

baca();





// readBooksPromise(banyakWaktu, books[0])
// .then(function(time) {
//     readBooksPromise(time, books[1])
//         .then(function(time) {
//             readBooksPromise(time, books[2])
//             .then(function(time) {})
//             .catch(function(error) {
//                 console.log('terjadi kesalahan');
//             })
//         })
//         .catch(function (error) {
//             console.log('terjadi kesalahan');
//         })
// })
// .catch(function(error) {
//     console.log('terjadi kesalahan');
// })

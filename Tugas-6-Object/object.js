console.log("================");
console.log("     Tugas 1    ");
console.log("================");

var now = new Date();
var thisYear = now.getFullYear()

var people = [ ["Bruce", "Banner", "male", 1975], ["Natasha","Romanoff", "female"] ];
arrayToObject(people);

var people2 = [ ["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023] ]
arrayToObject(people2); 

function arrayToObject(arr) {

    var data = {
         firstName:"",
         lastName:"",
         gender:"",
         age:""
     }
     
     for(var x = 0; x < arr.length; x++ ){
         var j = arr[x].length;
         data.firstName = arr[x][0];
         data.lastName = arr[x][1];
         data.gender = arr[x][2];
         data.age = arr[x][3] == null || arr[x][3]>thisYear? "Invalid Birth Year": thisYear - arr[x][3];

         console.log(data.firstName, data.lastName);
         console.log(data);
     }
     return data;
}

console.log("================");
console.log("     Tugas 2    ");
console.log("================");

function shoppingTime(memberId, money){
    var info ="";
    var barang= [{
        nama:'Stacattu', harga:1500000},{
        nama:'Zoro', harga:500000},
        {nama:'HN', harga: 250000},
        {nama:'Uniklooh', harga: 175000},
        {nama:'CasingHandphone', harga: 50000}
    ]
    var data ={
        memberId:memberId,
        money:money,
        listPurchased:[],
        changeMoney:0
    }
    barang.sort((a,b) => (a.harga < b.harga)? 1:-1)
    if(memberId == null || memberId == ""){
        info ="Mohon maaf, toko X hanya berlaku untuk member saja";
        return info;
    } else if( money < 50000){
        info ="Mohon maaf, uang tidak cukup";
        return info;
    } else {
        for(var x = 0; x < barang.length; x++){
            if (money >= barang[x].harga){
                money = money - barang[x].harga;
                data.listPurchased.push(barang[x].nama); 
            }
        }
        data.changeMoney = money;
        return data;
    }
    
}

console.log(shoppingTime('1820RzKrnWn08', 2475000));
console.log(shoppingTime('82Ku8Ma742', 170000));
console.log(shoppingTime('', 2475000));
console.log(shoppingTime('234JdhweRxa53', 15000));
console.log(shoppingTime());


console.log("================");
console.log("     Tugas 3    ");
console.log("================");

function naikAngkot(listPenumpang){
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var kosong = [];
    var data = [];

    if(listPenumpang == null || listPenumpang ==""){
        return kosong;
    } else if(listPenumpang !=null){
        listPenumpang.forEach(function(item,index){
            var dari = rute.indexOf(item[1]);
            var tujuan = rute.indexOf(item[2]);
            var jumlahRute = parseInt(tujuan - dari);

            data.push({
                    penumpang: item[0],
                    naikdari: item[1],
                    tujuan: item[2],
                    bayar: parseInt(jumlahRute)*2000
                    }
                )

            }
        )
        return data;
    }
}



console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
console.log(naikAngkot([]));
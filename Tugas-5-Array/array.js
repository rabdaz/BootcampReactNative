console.log("================");
console.log("     Tugas 1    ");
console.log("================");


function range(startnum, finishnum){
    var num = [];
    if(startnum < finishnum){
        for(var x = startnum; x<= finishnum; x++){
            num.push(x);
        }
    } else if(startnum > finishnum) {
        for(var x = startnum; x>= finishnum; x--){
            num.push(x);
        }
    }
    else {
        num.push(-1);
    }
    return num;

}
console.log(range(1, 10)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1)) // -1
console.log(range(11,18)) // [11, 12, 13, 14, 15, 16, 17, 18]
console.log(range(54, 50)) // [54, 53, 52, 51, 50]
console.log(range()) // -1 

console.log("================");
console.log("     Tugas 2    ");
console.log("================");

function rangeWithStep(startnum, finishnum, step){
    var num = [];
    var index = startnum;
    if(startnum < finishnum){
        while(index <= finishnum){
            num.push(index);
            index += step;
        }
    } else if(startnum > finishnum) {
        while(index >= finishnum){
            num.push(index);
            index -= step;
        }
    } else if(!startnum || !finishnum){
        return -1;
    } //else {
    //     num.push(0);
    // }
    return num;
}
console.log(rangeWithStep(1, 10, 2)) // [1, 3, 5, 7, 9]
console.log(rangeWithStep(11, 23, 3)) // [11, 14, 17, 20, 23]
console.log(rangeWithStep(5, 2, 1)) // [5, 4, 3, 2]
console.log(rangeWithStep(29, 2, 4)) // [29, 25, 21, 17, 13, 9, 5] 

console.log("================");
console.log("     Tugas 3    ");
console.log("================");

function sum(awalDeret,akhirDeret,step){
    var num = [ ];
    var step1;
    let jumlah = 0;
    var index = awalDeret;
    
    if(!step){
        step1 = 1;
    }
    else {
        step1 = step;
    }

    if(awalDeret < akhirDeret){
        while(index <= akhirDeret){
            num.push(index);
            index += step1;
        }
    } else if(awalDeret > akhirDeret) {
        while(index >= akhirDeret){
            num.push(index);
            index -= step1;
        }
    }else if(!awalDeret && !akhirDeret && !step){
        return 0;
    }else if(awalDeret){
        return awalDeret;
    }

    for(var x =0; x < num.length; x++){
        jumlah = jumlah + num[x];
    }
    return jumlah;
}
console.log(sum(1,10)) // 55
console.log(sum(5, 50, 2)) // 621
console.log(sum(15,10)) // 75
console.log(sum(20, 10, 2)) // 90
console.log(sum(1)) // 1
console.log(sum()) // 0 

console.log("================");
console.log("     Tugas 4    ");
console.log("================");

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
] 

function dataHandLing(input){
    var size =input.length;
    
    for(var x= 0; x<size; x++){
        var id = "Nomor ID: " + input[x][0];
        var name = "Nama Lengkap: " +input[x][1];
        var lahir = "TTL: " +input[x][2];
        var hobi = "Hobi: " +input[x][3];

        //print all data
        console.log(id);
        console.log(name);
        console.log(lahir);
        console.log(hobi);
        console.log("\n");
    }
}

dataHandLing(input);

console.log("================");
console.log("     Tugas 5    ");
console.log("================");

function balikKata(input){
    var size = input.length;
    var data = "";
    for(var x = size-1; x>=0; x--){
        data = data + input[x];
    }
    return data;
}

console.log(balikKata("Kasur Rusak")) // kasuR rusaK
console.log(balikKata("SanberCode")) // edoCrebnaS
console.log(balikKata("Haji Ijah")) // hajI ijaH
console.log(balikKata("racecar")) // racecar
console.log(balikKata("I am Sanbers")) // srebnaS ma I 

console.log("================");
console.log("     Tugas 6    ");
console.log("================");

var data = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]
//["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"] 
function dataHandLing2(input){
    var newData = input;
    var name = input[1] + " Elsharawy";
    var kota = "Provinsi" +input[2];
    var gender = "Pria";
    var lahir = input[3];
    var sekolah = "SMA Internasional Metro";
    newData.splice(1,1,name);
    newData.splice(2,1,kota);
    newData.splice(4,1,gender,sekolah);
    
    console.log(newData);
    var tanggal = lahir.split("/");
    var bulan= tanggal[1];
    var namaBulan;
    
    switch(bulan){
        case "01":{
            namaBulan = "Januari"
            break;
        }
        case "02":{
            namaBulan = "Februari"
            break;
        }
        case "03":{
            namaBulan = "Maret"
            break;
        }
        case "04":{
            namaBulan = "April"
            break;
        }case "05":{
            namaBulan = "Mei"
            break;
        }
        case "06":{
            namaBulan = "Juni"
            break;
        }
        case "07":{
            namaBulan = "Juli"
            break;
        }
        case "08":{
            namaBulan = "Agustus"
            break;
        }
        case "09":{
            namaBulan = "September"
            break;
        }
        case "010":{
            namaBulan = "Oktober"
            break;
        }
        case "011":{
            namaBulan = "November"
            break;
        }
        case "012":{
            namaBulan = "Desember"
            break;
        }

    }
    var newTanggal = tanggal.sort(function(value1, value2){return value2 - value1});
    var newformat = tanggal.join("-");
    var newname = name.slice(0,15);
    console.log(namaBulan);
    console.log(newTanggal);
    console.log(newformat);
    console.log(newname);


}
dataHandLing2(data);
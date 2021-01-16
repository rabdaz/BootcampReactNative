

console.log("=========================");
console.log("  TUGAS 1 LOOPING WHILE");
console.log("=========================");

console.log("LOOPING PERTAMA");
var x = 1;
while(x <= 20){
    if(x % 2 == 0){
        console.log( x +" - I love coding");
    };
    x++;
}

console.log("LOOPING KEDUA");
while(x >= 1){
    if(x % 2 == 0){
        console.log( x +" - I will become a mobile developer");
    };
    x--;
}

console.log("=========================");
console.log("   TUGAS 2 LOOPING FOR  ");
console.log("=========================");

for(var x = 1; x <=20; x++){
    if(x % 3 == 0 && x % 2 == 1){
        console.log(x +" - I love coding");
    }
    else if(x % 2 == 0){
        console.log(x +" - Berkualitas");
    }
    else if(x % 2 == 1){
        console.log(x +" - Santai");
    } 
}

console.log("=========================");
console.log("TUGAS 3 # PERSEGI PANJANG");
console.log("=========================");

var p = 9;
var l = 5;
var pagar = "";

for(var x = 1; x<l; x++){
    for(var y = 1; y<p; y++){
        pagar+="#";
    };
    pagar+="\n";  
}
console.log(pagar);

console.log("=========================");
console.log("TUGAS 4 # MEMBUAT TANGGA");
console.log("=========================");

var p = 7;
let isi = "#";

for(var y = 0; y<=p; y++){
    console.log(isi.repeat(y));
};

console.log("=========================");
console.log(" TUGAS 5 # MEMBUAT CATUR");
console.log("=========================");

var board ="";
var sisi = 8;

for(var x = 0; x < sisi; x++){
    if(x % 2 == 0){
        for(var y = 0; y < sisi; y++){
            if(y % 2 == 1){
                board+="1";
            }
            else{
                board+=" ";
            }
        }
    }
    else {
        for(var y = 0; y < sisi; y++){
            if(y % 2 ==0){
                board+="1";
            }
            else{
                board+=" ";
            }
        }
    }
    board+="\n";
}
console.log(board);
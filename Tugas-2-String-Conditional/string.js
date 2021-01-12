var sayhello = "Hello World!";
var dream = "\nI am gonna be React Native Developer";
console.log (sayhello, dream);

//Soal No.1 Membuat Kalimat

var word = "JavaScript";
var second = "is";
var third = "awesome";
var fourth = "and";
var fifth = "I";
var sixth = "love";
var seventh = "it!";
var space = " ";

var y = [word, second, third, fourth, fifth, sixth, seventh];
let x;
var sentence1 = [];

for(x = 0; x < 7; x ++){
    // console.log(y[x]);
    sentence1 += y[x];
    sentence1 += space; 
};

console.log("\nSoal No. 1");
console.log(sentence1);

//Soal No.2 (Akses karakter dalam string)

var sentence = "I am going to be React Native Developer";

var exampleFirstWord = sentence[0] ; 
var secondWord = sentence[2] + sentence[3]  ; 
var thirdWord = sentence.substr(5,5); // lakukan sendiri 
var fourthWord = sentence.substr(11,2); // lakukan sendiri 
var fifthWord= sentence.substr(14,2); // lakukan sendiri 
var sixthWord= sentence.substr(17,5); // lakukan sendiri 
var seventhWord = sentence.substr(23,6); // lakukan sendiri 
var eighthWord = sentence.substr(30,9); // lakukan sendiri 

console.log("\nSoal No. 2");
console.log('First Word: ' + exampleFirstWord); 
console.log('Second Word: ' + secondWord); 
console.log('Third Word: ' + thirdWord); 
console.log('Fourth Word: ' + fourthWord); 
console.log('Fifth Word: ' + fifthWord); 
console.log('Sixth Word: ' + sixthWord); 
console.log('Seventh Word: ' + seventhWord); 
console.log('Eighth Word: ' + eighthWord);

//Soal No.3 Mengurai Kalimat (Substring)

var sentence2 = 'wow JavaScript is so cool'; 

var exampleFirstWord2 = sentence2.substring(0, 3); 
var secondWord2 = sentence2.substr(4,10); // do your own! 
var thirdWord2 = sentence2.substr(15,2); // do your own! 
var fourthWord2 = sentence2.substr(18,2); // do your own! 
var fifthWord2 = sentence2.substr(21,4); // do your own! 

console.log("\nSoal No. 3");
console.log('First Word: ' + exampleFirstWord2); 
console.log('Second Word: ' + secondWord2); 
console.log('Third Word: ' + thirdWord2); 
console.log('Fourth Word: ' + fourthWord2); 
console.log('Fifth Word: ' + fifthWord2);

//Soal No.4 Mengurai Kalimat dan Menentukan Panjang String

var sentence3 = 'wow JavaScript is so cool'; 

var exampleFirstWord3 = sentence3.substring(0, 3); 
var secondWord3 = sentence3.substring(4,14); // do your own! 
var thirdWord3 = sentence3.substring(15,17); // do your own! 
var fourthWord3 = sentence3.substring(18,20); // do your own! 
var fifthWord3 = sentence3.substring(21,25); // do your own! 

var firstWordLength = exampleFirstWord3.length
var l2 = secondWord3.length
var l3 = thirdWord3.length
var l4 = fourthWord3.length
var l5 = fifthWord3.length   
// lanjutkan buat variable lagi di bawah ini 
console.log("\nSoal No. 4");
console.log('First Word: ' + exampleFirstWord3 + ', with length: ' + firstWordLength); 
console.log('Second Word: ' + secondWord3 +', with length: ' + l2); 
console.log('Third Word: ' + thirdWord3 +', with length: ' + l3); 
console.log('Fourth Word: ' + fourthWord3 +', with length: ' + l4); 
console.log('Fifth Word: ' + fifthWord3 +', with length: ' + l5); 
console.log("================");
console.log("     Tugas 1    ");
console.log("================");

console.log("ES6");
golden = () => {
    console.log("this is golden!!")
};

golden();

console.log("================");
console.log("     Tugas 2    ");
console.log("================");

const newFunction = function literal(firstName, lastName){
    return{
        fullName: () => console.log(`${firstName} faris ${lastName}`)
  }
};

newFunction("William", "Imoh").fullName();

console.log("================");
console.log("     Tugas 3    ");
console.log("================");

const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}

const{firstName, lastName, destination, occupation} = newObject;

console.log(firstName, lastName, destination, occupation);

console.log("================");
console.log("     Tugas 4    ");
console.log("================");

const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];

const combined = [west, east];

console.log(combined);

console.log("================");
console.log("     Tugas 5    ");
console.log("================");

const planet = "earth";
const view = "glass";

const before = `Lorem ${view} dolor sit amet ${planet} consectetur adipiscing elit do eiusmod tempor ncididunt ut labore et dolore magna aliqua. Ut enim  ad minim veniam` 
// Driver Code
console.log(before) 
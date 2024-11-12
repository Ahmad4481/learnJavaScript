// Assign One 

let userName = "Elzero";
console.log(userName[0]); // e
console.log(userName.slice(0,1)); // e
console.log(userName.charAt(0)); // e
console.log(userName.substr(0,1)); // e
console.log(userName.substring(0,1)); // e
console.log(userName.charAt(0).repeat(3)); // eee

// Assign Two

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterE)); // True
console.log(word.includes(letterZ)); // True
console.log(word.includes(letterO.toLowerCase())); // True
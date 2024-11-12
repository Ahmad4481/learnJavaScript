let myFriends = ["Ahmad", "Nawaf", "Fahad"];

console.log(myFriends.at(0).charAt(0).toLowerCase());
console.log(myFriends[0].charAt(0).toLowerCase());

myFriends[0] = "Ali";

myFriends[8] = "Fasil";
console.log(myFriends);
console.log(Array.isArray(myFriends));
myFriends.length = 3;
console.log(myFriends);

let lastNmae = myFriends.pop()
console.log(myFriends)
myFriends.push('Osama','Eman')
console.log(myFriends)
myFriends.unshift('samah','fasil')
myFriends.shift()
console.log(myFriends)

console.log(myFriends.indexOf('Osama'))
myFriends.splice(0,2)
console.log(['fasil'].concat(myFriends))
console.log(myFriends.join(' '))


/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here
my.pop()
my.pop()

console.log(my.reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];
my = my.slice(++zero,counter)
console.log(my); // ["Elham", "Mazero"]

console.log(my.at(--zero).slice(zero,--counter)+my.at(++zero).slice(counter++)); // "Elzero"
console.log(my.at(zero).charAt(++counter)+my.at(zero).charAt(++counter).toUpperCase()); // "rO"
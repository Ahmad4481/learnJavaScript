let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
// console.log(myFriends.pop()); // ["Ahmed", "Elham", "Osama"];

// Method 2

myFriends.splice(num);
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.pop(), friends.shift();
console.log(friends); // ["Eman", "Osama"]

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code

console.log(finalArr.concat(arrOne, arrTwo).sort().reverse()); // ["Z", "X", "D", "C", "B", "A"]

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words.at(website.length).at(0).slice(website.length).toUpperCase()); // ZERO

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

if (haystack.includes(needle) === true) {
  console.log("found");
}
if (haystack.indexOf(needle) !== -1) {
  console.log("found");
}
if (haystack.lastIndexOf(needle) !== -1) {
  console.log("found");
}

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs = allArrs
  .concat(arr1, arr2)
  .sort()
  .slice(arr2.length)
  .join("")
  .toLowerCase();
console.log(allArrs); // fxy

let start = 10;
let end = 100;
let exclude = 40;

function sort(arr) {
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    let min = Math.min(...arr);
    arr1.push(min);
    arr[arr.indexOf(min)] = Infinity;
  }
  return arr1;
}

// تجربة الدالة


console.log(sort([3, 8, 1, 4, 10, 5,5,8474,7473,88,43,8,99])); // [1, 3, 4, 5, 8, 10]




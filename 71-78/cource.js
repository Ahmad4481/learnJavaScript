let sum = [0, 7, 5, 4, 7, 8, 2, 1, 44, 56, 2]
  .map((el, i, arr) => (arr[0] += el))
  .at(-1);
console.log(sum);

// let adSelf = (arr) => {
//   sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// };

// console.log(adSelf([0, 7, 5, 4, 7, 8, 2, 1, 44, 56, 2]));

let Name = "eLZerO";
let invertedNumber = [1, -10, -20, 15, 100, -30];
let ignoreNumber = "E1lz4e2ro56";
sw = Name.split("")
  .map((el) => (el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()))
  .join("");
console.log(sw);

// let inverted = (arr,i) => {
//   return -arr
// };

// let inv = invertedNumber.map(inverted);
let inv = invertedNumber.map((el) => {
  return -el;
});

console.log(inv);

let ign = Number(
  ignoreNumber
    .split("")
    .map((el) => (Number.isNaN(Number(el)) ? "" : el))
    .join("")
);

console.log(ign);

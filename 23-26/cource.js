console.log(1_000_000); //1000000
console.log(10 ** 6);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);

console.log((100).toString());
console.log(String(100));
console.log((953.85445).toFixed(2)); // 953.85
console.log((953.85545).toFixed(2)); // 953.86
console.log(parseInt("53osoma")); // 53
console.log(parseInt("53.80osoma")); // 53
console.log(parseFloat("53.80")); // 53.8
console.log(Number.isInteger(99)); // true
console.log(Number.isNaN(99)); // false

console.log(Math.round(9.5)); // 10
console.log(Math.floor(9.2)); //10
console.log(Math.ceil(9.9)); // 9
console.log(Math.max(9, 45949, 332, 334, 9293, 9924, 222, 0, -4929, -333)); // 45949
console.log(Math.min(9, 45949, 332, 334, 9293, 9924, 222, 0, -4929, -333)); // 4929
console.log(Math.pow(4, 4)); // 4 *4 * 4 * 4
console.log(Math.random());
console.log(Math.trunc(84.5843)); // 84

// function parseInt(int) {
//   let num = "";
//   for (let i = 0; i <= int.length; i++) {
//     let intNum = Number(int[i]);
//     if (Number.isNaN(intNum) == false) {
//       num += int[i];
//     }
//   }
//   return Number(num);
// }
// console.log(parseInt("osama999fjaj999"));

let a = 1_00,
  b = 2_00.5,
  c = 1e2,
  d = 2.4;
// Chalng One
console.log(Math.trunc(Math.max(a, b, c, d)));
console.log(Number.parseInt(Math.max(a, b, c, d)));
// Chalng Tow

console.log(a ** Math.trunc(d));
console.log(a ** Number.parseInt(d));

// Chalng Three

console.log(Math.round(d));
console.log(Math.floor(d));
console.log(Math.trunc(d));
console.log(Number.parseInt(d));

// Chalng Four

console.log((Math.floor(b)/Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(Math.round(Math.floor(b)/Math.ceil(d))); // 67 => Number

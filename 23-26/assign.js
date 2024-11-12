// Assign One
console.log(1e4*10); // 100000
console.log(10**5); // 100000
console.log(50000+50000); // 100000
console.log(10000*10); // 100000
console.log(1e1**5); // 100000
console.log(5e4*2); // 100000
console.log(50000*2); // 100000
console.log(1e6-9e5); // 100000
console.log(1000000-900000); // 100000
console.log(1e5/1); // 100000

// Assign Two
console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991

// Assign Three
console.log(Number.MAX_SAFE_INTEGER.toString().length) // 16
console.log(`${Number.MAX_SAFE_INTEGER}`.length) // 16

// Assign Four

let myVar = "100.56789 Views";

console.log(Number(parseInt(myVar))); // 100
console.log(Number(parseFloat(myVar).toFixed(2))); // 100.57

// Assign Five

let num = 10;

console.log(Number.isInteger(num)+Number.isInteger(num)); // 2

// Assign Six

let flt = 10.4;

console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(Number(flt.toFixed(0))); // 10
console.log(Math.trunc(flt)); // 10

// Assign Seven

console.log(Math.floor(Math.random()*5)); // 0 || 1 || 2 || 3 || 4
console.log(10 * 20 * 15 % 3 * 190 * 10 * 400); // 0
console.log(((10 + 20 * 15 % 3 * 190) - 10) * 400)

let num = 3;

// Solution One
console.log(num + true + true + true); // 6

// Solution Two
console.log(num * (true + true)); // 6

// Soultion Three
console.log(num + num); // 6

// Soultion Four
console.log((num / 3) * num + num); // 6

// Solution Five
console.log(num * --num); // 6

// Solution Six
console.log(num++ * num);
console.log(num ** num / num - num);
console.log((--num) ** (num ** num) / num - num);
//--------------------
//------------------------
num = "10";

// Solution One
console.log(+num + +num); // 20

// Solution Two
console.log(+num + --num + --num - --num); // 20

// Solution Three
console.log(num + num + --num); // 20

// Solution Four
console.log(num + ++num + num); // 20
// Solution Five
console.log(((num * num) % ++num) + ++num + ++num);

let points = 10;

// Write Your Code Here
points += 3;
console.log(points); // 13

// Write Your Code Here
points -= 5;
console.log(points); // 8;
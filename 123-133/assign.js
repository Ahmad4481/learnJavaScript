let set = new Set([10, 20, 2]);

console.log(set);
set.delete(2);
console.log(set.size);
// Needed Output
// Set(3) {10, 20, 2}
// 2

let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

console.log(new Set(myFriends.sort()));

// Needed Output
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']

let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

let mapInfo = new Map(Object.entries(myInfo));
console.log(mapInfo);
console.log(mapInfo.size);
console.log(mapInfo.has("username"));
// console.log(mapInfo)

// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true

let theNumber = 100020003000;

console.log(
  +[...new Set([...theNumber.toString()])].sort().slice(true).join("")
);

// Needed Output
123;

let theName = "Elzero";

console.log([...theName]);
console.log(Array.from(theName));
console.log(theName.split(""));
console.log(Object.assign([], theName));
console.log([...new Set(theName)]);

// Needed Output
// ["E", "l", "z", "e", "r", "o"];

let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
// chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
chars = chars.sort().map((el) => (typeof el === "number" ? null : el));
console.log(chars);
console.log(
  chars.copyWithin(
    0,
    chars.lastIndexOf(null) + 1,
    (chars.lastIndexOf(null) + 1) * 2
  )
);

// Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']

let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

console.log([...numsOne, ...numsTwo]);
console.log(numsOne.concat(numsTwo));
numsOne.push(...numsTwo);
// Needed Output
// [1, 2, 3, 4, 5, 6]

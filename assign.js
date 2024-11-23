let date = Date.now() / 1000 - new Date("2004-6-25").getTime() / 1000;
console.log(parseInt(date) + " Seconds");
console.log(parseInt(date / 60) + " Minutes");
console.log(parseInt(date / 60 / 60) + " Hours");
console.log(parseInt(date / 60 / 60 / 24) + " Days");
console.log(parseInt(date / 60 / 60 / 24 / 30) + " Months");
console.log(parseInt(date / 60 / 60 / 24 / 365.25) + " Years");
// Needed Output

("1247939400 Seconds");
("20798990 Minutes");
("346650 Hours");
("14444 Days");
("481 Months");
("40 Years");

let time = new Date(0);
time.setFullYear(1980);
time.setMinutes(0, 1);

console.log(time);

// Needed Output

("Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)");

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let oneMonthBe = new Date();
oneMonthBe.setDate(-1);
console.log(oneMonthBe);
console.log(
  `Previous Month Is ${
    months[oneMonthBe.getMonth()]
  } And Last Day Is ${oneMonthBe.getDay()}`
);
// Needed Output

("Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)");
("Previous Month Is April And Last Day Is 30");

let myBirth = new Date("2010-10-14");
console.log(myBirth);
myBirth = new Date("2010-10-14T00:00:00Z");
console.log(myBirth);
myBirth = new Date(Date.parse("Oct 14 2010"));
console.log(myBirth);

// Needed Output

// ("Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)");
// ("Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)");
// ("Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)");

for (let i = 1; i <= 99999; i++) {
  // console.log(i)
}
console.log(`Loop Took ${parseInt(performance.now())} Milliseconds.`);

// Needed Output

// ("Loop Took 1921 Milliseconds.");

// Write Your Generator Function Here
function* gen() {
  yield* [14, 154, 494, 1034, 1774, 2714, 3854, 5194, 6734];
  yield 8
}

let generator = gen();

console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}


function* genNumbers() {
  yield* [1, 2, 2, 2, 3, 4, 5];
}
function* genLetters() {
  yield* ["A", "B", "B", "B", "C", "D"];
}


// Write Your Generator Function Here

function* genAll() {
  yield* new Set(genNumbers())
  yield* new Set(genLetters())
}
generator = genAll();

console.log(generator.next()); // {value: 1, done: false}
console.log(generator.next()); // {value: 2, done: false}
console.log(generator.next()); // {value: 3, done: false}
console.log(generator.next()); // {value: 4, done: false}
console.log(generator.next()); // {value: 5, done: false}
console.log(generator.next()); // {value: "A", done: false}
console.log(generator.next()); // {value: "B", done: false}
console.log(generator.next()); // {value: "C", done: false}
console.log(generator.next()); // {value: "D", done: false}

import calc,* as modOne from './mod-two.js';
console.log(modOne)
// main.js File
console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60


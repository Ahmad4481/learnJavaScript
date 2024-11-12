let start = 10;
let end = 100;
let exclude = 40;

for (let i = start; i <= end; i += 10) {
  if (i === exclude) continue;
  console.log(i);
}

// Output
10;
20;
30;
50;
60;
70;
80;
90;
100;

start = 10;
end = 0;
let stop = 3;

for (let i = start; i >= stop; i--) console.log(i);

start = 1;
end = 6;
let breaker = 2;

for (let i = start; i <= end; i++) {
  console.log(i);
  for (let j = breaker; j < end; j += breaker) {
    console.log(`-- ${j}`);
  }
}

// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4

let index = 10;
let jump = 2;

for (;;) {
  if (index == jump) break;
  console.log(index);
  index -= jump;
}

// Output
// 10
// 8
// 6
// 4

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

let a = letter.length;
for (let i = letter.length - letter.length; i < friends.length; i++) {
  if (friends[i].toLowerCase().startsWith(letter) === true) continue;
  console.log(`${a} => ${friends[i]}`);
  a++;
}

// Output
("1 => Sayed");
("2 => Eman");
("3 => Mahmoud");
("4 => Osama");
("5 => Sameh");

start = 0;
let swappedName = "elZerO";
a = "";
for (i = start; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName.toLowerCase()[i]) {
    a += swappedName.toUpperCase()[i];
  } else if (swappedName.toUpperCase()[i] == swappedName[i]) {
    a += swappedName.toLowerCase()[i];
  }
}
console.log(a);

// Output
("ELzERo");

start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];
for (let i = start + mix[0]; i < mix.length; i++) {
  if (typeof mix[i] === "number") {
    console.log(mix[i]);
  }
}

// Output
2;
3;
4;


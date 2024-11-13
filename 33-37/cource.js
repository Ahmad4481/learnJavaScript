let price = 0;

console.log(`price is ${price || 200}`); // any falsy value
console.log(`price is ${price ?? 200}`); // null and undefined
let age = 13;
console.log(
  `${(ageGroup =
    age > 0 && age <= 12 ? "beby" : age > 12 && age < 45 ? "Young" : "older")}`
);

/*
  If Condition Challenge
*/

let a = 10;

if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 To 40");
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}
a < 10
  ? console.log(10)
  : a >= 10 && a <= 40
  ? console.log("10 To 40")
  : console.log("Unknown");
// Write Previous Condition With Ternary If Syntax

let st = "Elzero Web School";
if (String(st.length * 2) === "34") {
  console.log("Good");
}

// W Position May Change
if (
  st.charAt(st.toLocaleLowerCase().indexOf("w")).toLocaleLowerCase() === "w"
) {
  console.log("Good");
}

if (typeof st.length !== "string") {
  console.log("Good");
}

if (typeof st.length === "number") {
  console.log("Good");
}
if (
  st.slice(0, st.toLocaleLowerCase().indexOf("o") + 1).repeat(2) ===
  "ElzeroElzero"
) {
  console.log("Good");
}

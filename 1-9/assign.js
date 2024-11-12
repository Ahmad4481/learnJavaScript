// color: blue;
// font-size: 80px;
// font-weight: bold;
// text-align: center;
// font-family: Arial

document.write("<h1>Elzero</h1>");
document.querySelector("h1").style.color = "blue";
document.querySelector("h1").style.fontSize = "80px";
document.querySelector("h1").style.fontWeight = "bold";
document.querySelector("h1").style.textAlign = "center";
document.querySelector("h1").style.fontFamily = "Arial,sans-serif";
console.log(
  "%cElzero %cWeb %cSchool",
  "font-size:40px; color:red",
  "font-size:40px;color:green;font-weight:bold;",
  "font-size:40px; background-color: blue; color:white"
);

console.group("Group 1");
console.log("Message 1");
console.log("Message 2");
console.group("Child Group");
console.log("Message 1");
console.log("Message 2");
console.group("Grand Child Group");
console.log("Message 1");
console.log("Message 2");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group 2");
console.log("Message 1");
console.log("Message 2");
console.groupEnd();
console.table(["elzero", "ahmad", "sameh", "Gamal", "Aya"]);
// console.log("Iam In Console");
// document.write("Iam In Page");
/*console.log("Iam In Console");
document.write("Iam In Page");*/

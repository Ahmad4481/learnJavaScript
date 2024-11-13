function sayHello(num1, num2) {
  return num1 + num2;
}

let hello = sayHello(10, 30);
console.log(hello + 100);

function age(name, age = "Unkown") {
  age = age || "Unkown";
  return `Hello ${name} your Age ${age}`;
}

console.log(age("Nawaf", 0));

function calc(num, ...numbers) {
  let sumNum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sumNum += numbers[i] ** num;
  }
  return sumNum;
}
console.log(calc(2, 10, 20, 10, 60, 40, 30));

/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/

function showDetails(...args) {
  for (let i = 0; i < args.length; i++) {
    typeof args[i] === "string"
      ? (Name = args[i])
      : typeof args[i] === "number"
      ? (Age = args[i])
      : args[i] === false ? Status=" Not" : Status="";
  }
  console.log(
    `Hello ${Name}, Your Age Is ${Age}, You Are${Status} Available For Hire`
  );
}

showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

function sayHello(theName, theGender = "") {
  console.log(
    `Hello ${
      theGender === "Male" ? "Mr " : theGender === "Female" ? "Miss " : ""
    }${theName}`
  );
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

function calculate(firstNum, secondNum, operation = "add") {
  if (secondNum === undefined) console.log("Second Number Not Found");
  else if (operation == "add") {
    console.log(firstNum + secondNum);
  } else if (operation == "subtract") {
    console.log(firstNum - secondNum);
  } else if (operation == "multiply") {
    console.log(firstNum * secondNum);
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

function ageInTime(theAge) {
  if (theAge < 10 || theAge > 100) console.log("Age Out Of Range");
  else {
    console.log(`Months Example => ${theAge * 12} Months 
Week Example => ${theAge * 52} Week
Days Example => ${theAge * 52 * 7}  Days
Hours Example => ${theAge * 52 * 7 * 24}  Hours
inute Example => ${theAge * 52 * 7 * 24 * 60} Minutes
Second Example => ${theAge * 52 * 7 * 24 * 60 * 60} Second`);
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

function checkStatus(a, b, c) {
  typeof a === "string"
    ? (Name = a)
    : typeof a === "number"
    ? (Age = a)
    : a === false
    ? (Status = " Not")
    : (Status = "");
  typeof b === "string"
    ? (Name = b)
    : typeof b === "number"
    ? (Age = b)
    : b === false
    ? (Status = " Not")
    : (Status = "");
  typeof c === "string"
    ? (Name = c)
    : typeof c === "number"
    ? (Age = c)
    : c === false
    ? (Status = " Not")
    : (Status = "");
  console.log(
    `Hello ${Name}, Your Age Is ${Age}, You Are${Status} Available For Hire`
  );
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

function createSelectBox(startYear, endYear) {
  document.write(`<select style="width: 150px;">`);
  for (let i = startYear; i <= endYear; i++) {
    document.write(`<option value="${i}">${i}</option>`);
  }
  document.write("</select>");
}
createSelectBox(2000, 2021);

function multiply(...number) {
  let sum = 1;
  for (let i = 0; i < number.length; i++)
    if (typeof number[i] === "number") sum *= Number.parseInt(number[i]);
  console.log(sum);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000



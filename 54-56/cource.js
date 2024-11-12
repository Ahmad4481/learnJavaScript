/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar",
];
myAdmins = myAdmins.slice(0, myAdmins.indexOf("Stop"));
myEmployees = myEmployees.slice(0, myEmployees.indexOf("Stop"));

document.write(`<div>We Have ${myAdmins.length} Admins</div>`);
document.write(`<hr>`);

for (let i = 0; i < myAdmins.length; i++) {
  document.write(`<div>`);
  document.write(`The Admin For Team ${i + 1} is ${myAdmins[i]}
    <h3>Team Member:</h3>`);
  let nth = 1;
  for (let j = 0; j < myEmployees.length; j++) {
    if (myAdmins[i][0] === myEmployees[j][0]) {
      document.write(`<p>- ${nth} ${myEmployees[j]}</p>`);
      nth++;
    }
  }
  document.write(`</div>
    <hr>`);
}

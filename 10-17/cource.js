console.log(typeof "Nawaf Fahad");
console.log(typeof 99);
console.log(typeof 99.99);
console.log(typeof [1, 4, 5]);
console.log(typeof { name: "nawaf", age: 14 });
console.log(`${typeof true}\n${typeof false}`);
console.log(typeof undefined);
console.log(typeof null);
// Best practis
let userName = 9;
let title = "elzero";
let discription = "elzero web school";
let markUp = `
  <div class='page'>
    <div class ='container'>
      <h3>${title}</h3>
      <p>${discription}</p>
    </div>
  </div>
`;

document.write(markUp);
// chalng
let Title = "Elzero",
  Discription = "elzero web school",
  data = "25/10";
document.write(`
  <div>
    <h3>${Title}</h3>
    <p>${Discription}</p>
    <span>${data}</span>
  </div>
`)
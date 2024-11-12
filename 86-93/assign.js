console.log(document.querySelector("div"));
console.log(document.querySelector(".element"));
console.log(document.querySelector("#elzero"));
console.log(document.querySelector("[name = 'js']"));
console.log(document.querySelectorAll("div")[0]);
console.log(document.querySelectorAll(".element")[0]);
console.log(document.querySelectorAll("#elzero")[0]);
console.log(document.querySelectorAll("[name = 'js']")[0]);
console.log(document.getElementsByName("js"));
console.log(document.getElementById("elzero"));
console.log(document.getElementsByClassName("element"));
console.log(document.getElementsByTagName("div"));
console.log(document.body.children[0]);
console.log(document.body.firstElementChild);
console.log(document.body.childNodes[1]);

let imgs = document.querySelectorAll("div img");
for (let i = 0; i < imgs.length; i++) {
  imgs.src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
  imgs.alt = "Elzero Logo";
}
document.getElementsByName("dollar")[0].oninput = function () {
  document.querySelector(".result").innerHTML = `{${
    this.value
  }} USD Dollar = {${this.value * 15.6}} Egyptian Pound`;
};

const one = document.querySelector(".one");
const two = document.querySelector(".two");

one.title = one.className;
one.innerHTML = one.className;
two.title = two.className;
two.textContent = `${two.className} ${two.attributes.length}`;
let images = document.querySelectorAll("body>img")
for (let i = 0;i<images.length;i++) {
  images[i].alt = images[i].hasAttribute('alt')?'Old':"Elzero New"
}

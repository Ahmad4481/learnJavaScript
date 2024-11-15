let msg = prompt('Print Number From – To','exemple 5-20')
let num = msg.split('-')

for (let i = Math.min(...num);i<=Math.max(...num);i++) {
  console.log(i)
}
function popup() {
  document.querySelector("div").remove();
}

document
  .querySelector("button")
  .addEventListener("click", () => setTimeout(popup, 5000));

let i = document.querySelector(".counter").innerHTML;

let counter = setInterval(() => {
  console.log(i);
  if (i === 5) {
    open("https://elzero.org", "_blank", "width=400 height=400");
  }
  if (i === 1) {
    open("https://elzero.org");
    clearInterval(counter);
  }
  i--;
}, 1000);
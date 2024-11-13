let classes = document.querySelector(".classes-list div");
function update() {
  if (this.value === "") return;
  document.querySelectorAll("span").forEach((el) => el.remove());
  this.value
    .split(" ")
    .sort()
    .forEach((element) => {
      if (document.querySelector(".classes-to-add"))
        classes.classList.remove(element.trim().toLowerCase());
      else classes.classList.add(element.trim().toLowerCase());
    });
  classes.classList.forEach((el) => {
    let span = document.createElement("span");
    span.innerHTML = el;
    classes.appendChild(span);
  });
  this.value = "";
}
// add.addEventListener("blur", update);
// remove.addEventListener("blur", update);

let ourElement = document.querySelector(".our-element");
const start = document.createElement("div");
start.className = "start";
start.title = "Start Element";
start.setAttribute("data-value", "Start");
start.innerHTML = "Start";
const end = document.createElement("div");
end.className = "end";
end.title = "End Element";
end.setAttribute("data-value", "End");
end.innerHTML = "End";
ourElement.nextElementSibling.remove();
ourElement.before(start);
ourElement.after(end);
console.log(
  document.querySelector("div span").parentElement.lastChild.nodeValue.trim()
);

[...document.body.children].forEach((el) => {
  el.onclick = _ => {
    console.log(`This is ${el.localName}`)
  };
});
document.addEventListener('click',(e)=>{
  console.log(e.target)
})

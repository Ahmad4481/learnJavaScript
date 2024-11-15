let selects = document.querySelectorAll("div label+select");
if (!localStorage.color && !localStorage.font && !localStorage.size) {
  localStorage.setItem("color", color.value);
  localStorage.setItem("font", font.value);
  localStorage.setItem("size", size.value);
}
selects.forEach((el) => {
  document.body.style.cssText = `color: ${localStorage.color}; font-family: ${localStorage.font}; font-size: ${localStorage.size};`;
  el.value = localStorage.getItem(el.id);
  el.addEventListener("input", function () {
    localStorage.setItem(this.id, this.value);
    document.body.style.cssText = `color: ${localStorage.color}; font-family: ${localStorage.font}; font-size: ${localStorage.size};`;
  });
});

[one, two, three, select].forEach((el) => {
  el.value = sessionStorage[el.getAttribute("storge")] ?? "";
  el.addEventListener("input", function () {
    sessionStorage.setItem(el.getAttribute("storge"), this.value);
  });
});

document.querySelector("#submit").addEventListener("click", function (event) {
  [one, two, three, select].forEach((el) => {
    sessionStorage.removeItem(el.getAttribute("storge"));
  });
  document.querySelector("form").remove();
  event.preventDefault();
});

let list = document.querySelectorAll("li");
if (!localStorage.getItem("color")) {
  localStorage.color = "red";
} else {
  list.forEach((el) => {
    el.classList.remove("active");
  });
  document
    .querySelector(`[data-color="${localStorage.color}"]`)
    .classList.add("active");
  document.querySelector(".experiment").style.backgroundColor =
    localStorage.color;
}
list.forEach((el) => {
  el.addEventListener("click", function () {
    list.forEach((el) => {
      el.classList.remove("active");
    });
    el.classList.add("active");
    localStorage.color = el.getAttribute("data-color");
    document.querySelector(".experiment").style.backgroundColor =
      localStorage.color;
  });
});



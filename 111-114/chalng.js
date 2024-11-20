let input = document.querySelector(".input");
let add = document.querySelector(".add");
let tasks = document.querySelector(".tasks");
let tksObj = JSON.parse(localStorage.getItem("tasks")) ?? [];
function del() {
  document.querySelectorAll(".delete").forEach((el) => {
    el.addEventListener("click", function () {
      tksObj = tksObj.filter((task) => task.id !== this.parentElement.id);
      localStorage.setItem("tasks", JSON.stringify(tksObj));
      this.parentElement.remove();
    });
  });
}
if (Object.hasOwn(localStorage, "tasks")) {
  tksObj = JSON.parse(localStorage.tasks);
  JSON.parse(localStorage.tasks).forEach((el) => {
    let task = document.createElement("div");
    task.className = "task";
    task.id = el.id;
    task.innerHTML = `${el.title} <span class='delete'>Delete</span>`;
    tasks.appendChild(task);
  });
  del();
}
add.addEventListener("click", function (event) {
  let task = document.createElement("div");
  task.className = "task";
  for (let i = 0; i < 13; i++) {
    task.id += Number(`${Math.ceil(Math.random() * 10)}`);
  }
  task.innerHTML = `${input.value} <span class='delete'>Delete</span>`;
  tasks.appendChild(task);
  event.preventDefault();
  input.value = "";
  tksObj.push({ id: task.id, title: task.innerText.split("\n")[0] });
  localStorage.setItem("tasks", JSON.stringify(tksObj));
  del();
});

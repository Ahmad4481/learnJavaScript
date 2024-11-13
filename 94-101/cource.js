document.body.style.cssText =
  "background-color:rgb(236 236 236);margin:0;font-family: Tahoma, Arial, sans-serif;";
let header = document.createElement("header");
header.style.cssText =
  "display:flex;padding:20px;background-color:white;justify-content:space-between;align-items:center;";
header.className = "website-head";
document.body.prepend(header);
let logo = document.createElement("div");
logo.classList = "logo";
logo.title = "Websit Logo";
logo.style.cssText = `font-weight: bold;color: rgb(35, 160, 110);font-size: 26px;`;
logo.innerHTML = "Elzero";
const menu = document.createElement("ul");
menu.className = "menu";
menu.style.cssText =
  "padding:0px;margin:0;display:flex;list-style:none;gap:10px;";
header.appendChild(logo);
header.appendChild(menu);
for (let i = 0; i < 4; i++) {
  let list = document.createElement("li");
  list.className = `list-${i + 1}`;
  list.style = "color:#777;";
  menu.appendChild(list);
}
document.querySelector(".list-1").innerHTML = "Home";
document.querySelector(".list-2").innerHTML = "About";
document.querySelector(".list-3").innerHTML = "Service";
document.querySelector(".list-4").innerHTML = "Contact";

const content = document.createElement("div");
content.className = "content";
content.style.cssText = `
display: flex;
padding: 20px;
flex-wrap: wrap;
justify-content: center;
gap: 20px;
min-height: calc(100vh - 142px);
box-sizing: border-box;`;
header.after(content);
for (let i = 0; i < 15; i++) {
  let product = document.createElement("div");
  product.className = "product";
  product.style.cssText =
    "padding:20px;background-color:white;border:1px solid rgb(221 221 221);width: calc((100% - 40px) / 3);box-sizing:border-box;text-align: center;color:rgb(136 136 136)border-radius:6px;";
  let number = document.createElement("span");
  number.style.cssText = `
  font-size: 40px;
  color: black;
  font-weight: normal;
  display: block;
  margin: 10px;`;
  number.innerHTML = i+1
  product.appendChild(number)
  product.append('product')
  content.appendChild(product)
}
const footer = document.createElement('footer')
footer.className = 'footer'
footer.style.cssText = `background-color:rgb(25 169 110);font-size:26px;text-align:center;padding:20px;color:white;`
footer.textContent = 'Copyright 2024'
content.after(footer)

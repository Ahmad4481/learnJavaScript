// let req = new XMLHttpRequest();
// req.open("GET", "articles.json");
// req.send();
// console.log(req);

// req.onreadystatechange = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     console.log(this.responseText);
//     setTimeout(() => {
//       console.log("Data Loaded");
//     }, 0);
//   }
// };

const requset = new XMLHttpRequest();
requset.open("GET", "articles.json");
requset.send();
requset.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let mainData = JSON.parse(this.responseText);
    for (let i of mainData) {
      i.category = "Ali";
    }
    let UpdatedData = JSON.stringify(mainData);
    for (let i of JSON.parse(UpdatedData)) {
      document.write(
        `<div><h2>Title ${i.title}</h2><p>Article ${i.article}</p><p>Author: ${i.author}</p><p>Category: ${i.category}</p></div>`
      );
    }
  }
};
// mainData Variable Content
//   // UpdatedData Variable Content
//   "JSON Object Content Here"

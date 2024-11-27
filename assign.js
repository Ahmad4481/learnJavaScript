const getData = async () => {
  return new Promise((resolve, reject) => {
    let req = new XMLHttpRequest();
    req.onload = function () {
      if (this.status === 200 && this.readyState === 4) {
        resolve(JSON.parse(this.responseText));
      }
    };
    req.open("GET", "articles.json");
    req.send();
  });
};

getData()
  .then(async () => {
    return (await getData()).slice(0, 5);
  })
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      document.write(
        `<div><h3>${data[i].title}</h3><p>${data[i].description}</p></div>`
      );
    }
  });

fetch("articles.json")
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    data.length = 5;
    return data;
  })
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      document.write(
        `<div><h3>${data[i].title}</h3><p>${data[i].description}</p></div>`
      );
    }
  });

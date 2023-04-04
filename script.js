"user strict";

let btn = document.querySelector("#switch button");

btn.addEventListener("click", function (item){
  item.preventDefault();
  let html = document.documentElement;
  let img = document.querySelector(".avatar img");
  html.classList.toggle("light");
});

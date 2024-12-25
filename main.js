let btn2 = document.querySelector(".btn2");
let body = document.querySelector("body");
let form = document.querySelector("form");
let input = document.querySelector(".input");

let arr = [];
form.addEventListener("submit", function (stop) {
  stop.preventDefault();
  let inputvale = input.value;
  console.log(inputvale);
  arr.push(inputvale);
  console.log(arr);
  input.value = "";

  arr.forEach((e) => {
    let ul = document.querySelector("ul");
    let li = document.createElement("li");
    ul.append(li);
    li.innerHTML = e;
    arr.pop();
    

    li.addEventListener("click", () => {
      ul.removeChild(li);
    });

    btn2.addEventListener("click", () => {
      body.classList.toggle('dark')
    });
  });
});

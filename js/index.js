let button = document.querySelector("#button");
let button2 = document.querySelector("#button2");
let text = document.querySelector(".button2 > p");

button.addEventListener("click", () => {
  window.location = "seemore.html";
});

button2.addEventListener("click", () => {
  text.style.display = "block";
});

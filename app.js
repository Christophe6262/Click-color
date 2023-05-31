const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector(".btn");
const body = document.querySelector("body");
const color = document.querySelector(".color");

function getRandomColor() {
  let computerSelection = Math.floor(Math.random() * colors.length);
  color.textContent = colors[computerSelection];
  body.style.backgroundColor = colors[computerSelection];
}
btn.addEventListener("click", getRandomColor);

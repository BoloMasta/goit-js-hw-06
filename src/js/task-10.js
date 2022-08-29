function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const amount = document.querySelector(".input").value;
const boxes = document.getElementById("boxes");
const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');

console.log(destroy);

function createBoxes(amount) {
  console.log(amount);
  for (let i = 0; i < amount; i++) {
    console.log("dsds");
  }
  const box = document.createElement("div");
  box.style.backgroundColor = "red";
  boxes.append(box);
};

create.addEventListener("click", createBoxes(amount));


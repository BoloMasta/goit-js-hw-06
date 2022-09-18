// FUNKCJA LOSOWANIA KOLORU
const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

// ZMIENNE
var boxSize = "30px";
var amount = document.querySelector(".input");
const boxes = document.getElementById("boxes");
const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");

// FUNKCJA DO ZWIĘKSZANIA KWADRATÓW
const increaseBox = () => {
  let newBoxSize = Number(boxSize.slice(0, boxSize.length - 2)) + 10;
  boxSize = newBoxSize + "px";
};

// FUNKCJA DO TWORZENIA KWADRATÓW
const createBoxes = (amount) => {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = boxSize;
    box.style.height = boxSize;
    box.classList.add("box");
    boxes.append(box);
    increaseBox(boxSize);
  }
};

// FUNKCJA DO KASOWANIA KWADRATÓW
const destroyBoxes = () => {
  boxes.innerHTML = "";
  boxSize = "30px";
};

// NASŁUCHIWANIE
amount.addEventListener("input", (event) => {
  amount = event.currentTarget.value;
});

create.addEventListener("click", () => {
  createBoxes(amount);
});

destroy.addEventListener("click", () => {
  destroyBoxes();
});

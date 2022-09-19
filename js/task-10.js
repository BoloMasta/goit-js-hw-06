// FUNKCJA LOSOWANIA KOLORU
const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

// ZMIENNE
var amount = document.querySelector(".input");
const boxes = document.getElementById("boxes");
const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");

// FUNKCJA DO TWORZENIA KWADRATÓW
const createBoxes = (amount) => {
  let boxSize = "30px";
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = boxSize;
    box.style.height = boxSize;
    box.classList.add("box");
    boxes.append(box);

    // ZWIĘKSZANIE KWADRATÓW
    let newBoxSize = Number(boxSize.slice(0, boxSize.length - 2)) + 10;
    boxSize = newBoxSize + "px";
  }
};

// FUNKCJA DO KASOWANIA KWADRATÓW
const destroyBoxes = () => {
  boxes.innerHTML = "";
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

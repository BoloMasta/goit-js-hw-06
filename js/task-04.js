// PRZYPISANIE PRZYCISKÓW DO ZMIENNYCH
const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
const score = document.getElementById("value");

let counterValue = 0;

// ODEJMOWANIE
decrement.addEventListener("click", () => {
  counterValue -= 1;
  score.innerHTML = `${counterValue}`;
});

// DODAWANIE
increment.addEventListener("click", () => {
  counterValue += 1;
  score.innerHTML = `${counterValue}`;
});

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// PRZYPISANIE KONTENERA DO ZMNIENNEJ 
const listContainer = document.getElementById("ingredients");

// ITERACJA PO TABLICY I DODAWANIE ELEMENTÓW DO KONTENERA
for (const ingredient of ingredients) {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("item");
  listContainer.append(item);
}

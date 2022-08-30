const numberOfCategories = document.querySelectorAll("li.item");

console.log(`Number of categories: ${numberOfCategories.length}`);

for (const category of numberOfCategories) {
  console.log(`Category: ${category.querySelector("h2").textContent}`);
  console.log(`Elements: ${category.querySelectorAll("ul li").length}`);
}

const categories = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categories.length}`);

for (const category of categories) {
  console.log(`Category: ${category.querySelector("h2").textContent}`);
  console.log(`Elements: ${category.querySelectorAll("li").length}`);
}


//  DRUGA WERSJA Z UŻYCIEM forEach


// categories.forEach((el, index) => {
//   console.log(`Category: ${categories[index].querySelector("h2").textContent}`);
//   console.log(`Elements: ${categories[index].querySelectorAll("li").length}`);;
// });



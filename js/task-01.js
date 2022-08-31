// PRZYPISANIE DO ZMIENNEJ TABLICY SZUKANYCH ELEMENTÓW
const categories = document.querySelectorAll("li.item");

// WYŚWIETLENIE W KONSOLI LICZBY WSZYSTKICH KATEGORII
console.log(`Number of categories: ${categories.length}`);

// WYŚWIETLENIE W KONSOLI POSZCZEGÓLNYCH KATEGORII
for (const category of categories) {
  console.log(`Category: ${category.querySelector("h2").textContent}`);
  console.log(`Elements: ${category.querySelectorAll("li").length}`);
}


//  DRUGA WERSJA Z UŻYCIEM forEach


// categories.forEach((el, index) => {
//   console.log(`Category: ${categories[index].querySelector("h2").textContent}`);
//   console.log(`Elements: ${categories[index].querySelectorAll("li").length}`);;
// });



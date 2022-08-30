const input = document.getElementById("validation-input");

input.addEventListener("blur", () => {
  if (input.value.length <= input.dataset.length) {
    input.classList.add("invalid");
    input.classList.remove("valid");
  } else {
    input.classList.add("valid");
    input.classList.remove("invalid");
  }
});

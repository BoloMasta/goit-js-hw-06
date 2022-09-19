const form = document.querySelector(".login-form");

const handleSubmit = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Wszystkie pola powinny zostać wypełnione!");
  }

  const result = {
    Email: email.value,
    Password: password.value,
  };

  console.log(result);
  event.currentTarget.reset();
};

form.addEventListener("submit", handleSubmit);

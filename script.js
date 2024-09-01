document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form");
  const emailInput = document.querySelector(".email-input");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Your form has been submitted, Thank you");
    emailInput.value = "";
  });
});

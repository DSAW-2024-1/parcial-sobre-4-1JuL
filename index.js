const form = document.querySelector("form");
const card_1 = document.querySelector(".sign-up-container");
const card_2 = document.querySelector(".success-container");
const emailInput = document.getElementById('email');
const confirmationMessage = document.getElementById('confirmation-msg');
const userEmailSpan = document.getElementById('user-email');
const backButton = document.getElementById("backButton");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  card_1.classList.add("hide");
  card_2.classList.remove("hide");
});

emailInput.addEventListener('input', function () {
  const newEmail = emailInput.value;
  userEmailSpan.textContent = newEmail;
});

backButton.addEventListener("click", () => {
  card_2.classList.add("hide");
  card_1.classList.remove("hide");
  const forms = document.querySelectorAll('form');
  forms.forEach(form => form.reset());
  userEmailSpan.textContent = "ash@loremcompany.com";
});

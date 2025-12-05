const form = document.getElementById("regForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const success = document.getElementById("success");

// Validation functions
function validateName() {
  if(nameInput.value.trim() === "") {
    nameInput.classList.add("error");
    nameError.style.display = "block";
    return false;
  } else {
    nameInput.classList.remove("error");
    nameError.style.display = "none";
    return true;
  }
}

function validateEmail() {
  if(!emailInput.value.includes("@")) {
    emailInput.classList.add("error");
    emailError.style.display = "block";
    return false;
  } else {
    emailInput.classList.remove("error");
    emailError.style.display = "none";
    return true;
  }
}

function validatePassword() {
  if(passwordInput.value.length < 6) {
    passwordInput.classList.add("error");
    passwordError.style.display = "block";
    return false;
  } else {
    passwordInput.classList.remove("error");
    passwordError.style.display = "none";
    return true;
  }
}

// Real-time input validation
[nameInput, emailInput, passwordInput].forEach(input => {
  input.addEventListener("input", () => {
    validateName();
    validateEmail();
    validatePassword();
  });
});

// Form submit handler
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();

  if(isNameValid && isEmailValid && isPasswordValid) {
    success.style.display = "block";
    form.reset();
  } else {
    success.style.display = "none";
  }
});

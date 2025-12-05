const steps = document.querySelectorAll(".form-step");
let currentStep = 0;

const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const summaryDiv = document.getElementById("summary");

// Utility functions
function showStep(index) {
  steps.forEach((step, i) => step.classList.toggle("active", i === index));
  summaryDiv.textContent = "";
}

function validateStep(index) {
  let valid = true;
  if(index === 0 && nameInput.value.trim() === "") {
    nameInput.classList.add("error");
    valid = false;
  } else if(index === 0) nameInput.classList.remove("error");

  if(index === 1) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(emailInput.value.trim())) {
      emailInput.classList.add("error");
      valid = false;
    } else emailInput.classList.remove("error");
  }

  if(index === 2 && passwordInput.value.length < 6) {
    passwordInput.classList.add("error");
    valid = false;
  } else if(index === 2) passwordInput.classList.remove("error");

  return valid;
}

// Step 1 Next
document.getElementById("next1").addEventListener("click", () => {
  if(validateStep(0)) {
    currentStep = 1;
    showStep(currentStep);
  }
});

// Step 2 Back & Next
document.getElementById("back2").addEventListener("click", () => {
  currentStep = 0;
  showStep(currentStep);
});

document.getElementById("next2").addEventListener("click", () => {
  if(validateStep(1)) {
    currentStep = 2;
    showStep(currentStep);
  }
});

// Step 3 Back & Submit
document.getElementById("back3").addEventListener("click", () => {
  currentStep = 1;
  showStep(currentStep);
});

document.getElementById("submitBtn").addEventListener("click", () => {
  if(validateStep(2)) {
    summaryDiv.innerHTML = `
      <p>Name: ${nameInput.value}</p>
      <p>Email: ${emailInput.value}</p>
      <p>Password: ${"*".repeat(passwordInput.value.length)}</p>
      <p>Registration Completed!</p>
    `;
  }
});

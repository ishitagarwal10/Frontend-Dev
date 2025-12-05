const dropdown = document.getElementById("myDropdown");
const btn = document.getElementById("dropdownBtn");
const options = document.getElementById("dropdownOptions");

// Toggle dropdown on button click
btn.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent document click from closing immediately
  options.style.display = options.style.display === "block" ? "none" : "block";
});

// Update button text on option click
options.addEventListener("click", (e) => {
  if(e.target.tagName === "DIV") {
    btn.textContent = e.target.textContent;
    options.style.display = "none";
  }
});

// Close dropdown when clicking outside (capturing phase)
document.addEventListener("click", () => {
  options.style.display = "none";
}, true);

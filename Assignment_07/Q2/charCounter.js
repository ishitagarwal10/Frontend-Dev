const textInput = document.getElementById("textInput");
const counter = document.getElementById("counter");
const resetBtn = document.getElementById("resetBtn");

const MAX_CHARS = 100;
const WARNING_THRESHOLD = 20;

textInput.addEventListener("keydown", (e) => {
  const currentLength = textInput.value.length;

  // Prevent typing beyond max
  if(currentLength >= MAX_CHARS && e.key !== "Backspace" && e.key !== "Delete" && !e.ctrlKey) {
    e.preventDefault();
  }
});

textInput.addEventListener("input", () => {
  const remaining = MAX_CHARS - textInput.value.length;
  counter.textContent = `Remaining: ${remaining}`;

  if(remaining <= 0) {
    counter.className = "danger";
  } else if(remaining <= WARNING_THRESHOLD) {
    counter.className = "warning";
  } else {
    counter.className = "normal";
  }
});

resetBtn.addEventListener("click", () => {
  textInput.value = "";
  counter.textContent = `Remaining: ${MAX_CHARS}`;
  counter.className = "normal";
  textInput.focus();
});

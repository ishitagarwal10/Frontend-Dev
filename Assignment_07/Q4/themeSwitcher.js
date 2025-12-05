const body = document.body;
const currentThemeDiv = document.getElementById("currentTheme");

function setTheme(theme) {
  // Remove all theme classes
  body.className = "";
  // Add new theme class
  body.setAttribute("class", theme);
  // Save current theme in data-theme attribute
  body.setAttribute("data-theme", theme);
  // Update display
  currentThemeDiv.textContent = `Current Theme: ${theme.charAt(0).toUpperCase() + theme.slice(1)}`;
}

// Event listeners for buttons
document.getElementById("lightBtn").addEventListener("click", () => setTheme("light"));
document.getElementById("darkBtn").addEventListener("click", () => setTheme("dark"));
document.getElementById("blueBtn").addEventListener("click", () => setTheme("blue"));

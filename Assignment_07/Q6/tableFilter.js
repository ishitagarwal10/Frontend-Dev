const searchInput = document.getElementById("searchInput");
const table = document.getElementById("studentTable");
const tbody = table.tBodies[0];
const noResults = document.getElementById("noResults");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  let visibleCount = 0;

  Array.from(tbody.rows).forEach(row => {
    const rowText = Array.from(row.cells).map(cell => cell.textContent.toLowerCase()).join(" ");
    if(rowText.includes(query)) {
      row.classList.remove("hidden");
      visibleCount++;
    } else {
      row.classList.add("hidden");
    }
  });

  noResults.style.display = visibleCount === 0 ? "block" : "none";
});

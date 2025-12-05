// Select DOM elements
const productInput = document.getElementById("productInput");
const addBtn = document.getElementById("addBtn");
const productList = document.getElementById("productList");

// Function to create a new product item
function createProductItem(productName) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = productName;
  li.appendChild(span);

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "editBtn";
  li.appendChild(editBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "deleteBtn";
  li.appendChild(deleteBtn);

  return li;
}

// Add product to list
addBtn.addEventListener("click", () => {
  const productName = productInput.value.trim();
  if(productName === "") return;

  const li = createProductItem(productName);
  productList.appendChild(li);
  productInput.value = "";
});

// Event delegation for Edit and Delete buttons
productList.addEventListener("click", (e) => {
  const target = e.target;
  const li = target.closest("li");
  if(!li) return;

  if(target.classList.contains("deleteBtn")) {
    li.remove();
  }

  if(target.classList.contains("editBtn")) {
    const span = li.querySelector("span");

    // Prevent multiple inputs
    if(li.querySelector("input")) return;

    const input = document.createElement("input");
    input.type = "text";
    input.value = span.textContent;
    input.className = "editInput";

    li.insertBefore(input, span);
    span.style.display = "none";
    input.focus();

    // Save changes on Enter key
    input.addEventListener("keydown", (event) => {
      if(event.key === "Enter") {
        saveEdit();
      }
    });

    // Function to save edit
    function saveEdit() {
      const newValue = input.value.trim();
      if(newValue !== "") {
        span.textContent = newValue;
      }
      li.removeChild(input);
      span.style.display = "";
    }

    // Save edit if clicked outside
    document.addEventListener("click", function clickOutside(event) {
      if(event.target !== input && event.target !== target) {
        saveEdit();
        document.removeEventListener("click", clickOutside);
      }
    });
  }
});

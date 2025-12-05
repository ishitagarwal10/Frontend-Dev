const box = document.getElementById("box");
const coords = document.getElementById("coords");

// Track mouse movement inside the box
box.addEventListener("mousemove", (e) => {
  const rect = box.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  coords.textContent = `X: ${x}, Y: ${y}`;
});

// Drop a red dot on double-click
box.addEventListener("dblclick", (e) => {
  const rect = box.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const dot = document.createElement("div");
  dot.classList.add("dot");
  dot.style.left = `${x}px`;
  dot.style.top = `${y}px`;
  box.appendChild(dot);
});

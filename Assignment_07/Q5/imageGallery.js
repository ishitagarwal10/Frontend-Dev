const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const modalImg = document.getElementById("modalImg");

// Click on any image in gallery
gallery.addEventListener("click", (e) => {
  if(e.target.tagName === "IMG") {
    modalImg.src = e.target.src.replace('/200/150', '/600/400'); // bigger image
    modal.style.display = "flex";
  }
});

// Clicking outside modalContent closes modal
modal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Prevent closing when clicking inside modalContent
modalContent.addEventListener("click", (e) => {
  e.stopPropagation();
});

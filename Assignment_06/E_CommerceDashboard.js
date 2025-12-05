// eCommerceDashboard.js

// Async/Await version
async function fetchProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) throw new Error("Network response was not ok");
    const products = await response.json();

    products.forEach(product => {
      console.log(`Product: ${product.title}`);
      console.log(`Price: $${product.price}`);
      console.log(`Image: ${product.image}`);
      console.log("---------------------------");

      // Bonus: create HTML cards dynamically
      const card = document.createElement("div");
      card.style.border = "1px solid #ccc";
      card.style.padding = "10px";
      card.style.margin = "10px";
      card.style.width = "200px";
      card.style.display = "inline-block";
      card.style.verticalAlign = "top";

      const img = document.createElement("img");
      img.src = product.image;
      img.alt = product.title;
      img.style.width = "100%";

      const title = document.createElement("h4");
      title.textContent = product.title;
      title.style.fontSize = "14px";

      const price = document.createElement("p");
      price.textContent = `$${product.price}`;
      price.style.fontWeight = "bold";

      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(price);

      document.body.appendChild(card);
    });
  } catch (error) {
    console.error("Failed to load products. Please try again.", error);
  }
}

// Call the function
fetchProducts();

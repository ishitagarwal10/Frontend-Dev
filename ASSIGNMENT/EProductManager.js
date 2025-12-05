"use strict";

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percent) {
        this.price -= this.price * (percent / 100);
    }

    display() {
        return `ID: ${this.id}, Name: ${this.name}, Price: ${this.price.toFixed(2)}, Category: ${this.category}`;
    }
}

const products = [
    new Product(1, "Laptop", 50000, "Electronics"),
    new Product(2, "Headphones", 800, "Electronics"),
    new Product(3, "Shoes", 1500, "Fashion")
];

// Apply discount 10% to all products
products.forEach(p => p.applyDiscount(10));

const expensiveProducts = products.filter(p => p.price > 1000);

let output = "Products with price > 1000:\n";
expensiveProducts.forEach(p => output += p.display() + "\n");

document.getElementById("output").textContent = output;

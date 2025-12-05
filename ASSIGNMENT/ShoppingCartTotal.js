"use strict";

class Cart {
    constructor() { this.items = []; }
    addItem(name, price, qty){ this.items.push({name, price, qty}); }
    getTotal(){ return this.items.reduce((sum,i)=> sum+i.price*i.qty,0); }
    applyCoupon(coupon){
        if(!/^(SAVE|DISC)\d+$/.test(coupon)) throw "Invalid coupon";
        let percent = parseInt(coupon.replace(/\D/g,''),10);
        return this.getTotal() * (1 - percent/100);
    }
}

const cart = new Cart();
cart.addItem("Laptop", 40000, 1);
cart.addItem("Book", 500, 2);
cart.addItem("Shoes", 2000, 1);

let output = `Cart Total: ${cart.getTotal()}\n`;

try {
    const finalTotal = cart.applyCoupon("SAVE10");
    output += `Final Total after coupon: ${finalTotal}`;
} catch(err) {
    output += `Coupon Error: ${err}`;
}

document.getElementById("output").textContent = output;

// Predefined account
let balance = 5000;

// Hoisting Example
console.log(x);  // undefined
var x = 10;

try {
    console.log(y);  
} catch (err) {
    console.log("Hoisting Example (let):", err.message);
}

// Readline for Node.js input
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

// ATM withdraw logic
function atmWithdraw() {
    readline.question("Enter withdrawal amount: ", (input) => {
        let amount = Number(input);

        try {
            if (isNaN(amount)) throw new Error("Amount must be a number.");
            if (amount % 100 !== 0) throw new Error("Amount must be divisible by 100.");
            if (amount > balance) throw new Error("Insufficient balance!");

            // TypeError example
            try {
                let a = 10;
                a.toUpperCase(); 
            } catch (err) {
                console.log("TypeError Example:", err.message);
            }

            if (amount > 3000) console.warn("High withdrawal alert!");

            balance -= amount;
            console.log(`Withdrawal successful! New balance: ${balance}`);

            readline.close();
        } catch (error) {
            console.error("Error:", error.message);
            atmWithdraw();  // ask again
        }
    });
}

atmWithdraw();

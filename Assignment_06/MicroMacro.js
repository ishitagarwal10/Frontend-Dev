console.log("Start");

// Macrotask (goes to task queue)
setTimeout(() => {
    console.log("Macrotask: setTimeout callback");
}, 0);

// Microtask (goes to microtask queue)
Promise.resolve().then(() => {
    console.log("Microtask: Promise.then callback");
});

// Synchronous log
console.log("Synchronous log");

// End log
console.log("End");

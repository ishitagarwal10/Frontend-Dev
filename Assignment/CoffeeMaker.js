
function simulateAsync(task) {
    return new Promise((resolve, reject) => {
        const time = Math.floor(Math.random() * 1000) + 1000; 
        setTimeout(() => {
            if (Math.random() < 0.8) {   
                console.log(task + " completed.");
                resolve();
            } else {
                reject(task + " failed!");
            }
        }, time);
    });
}

function boilWater() {
    console.log("Boiling water...");
    return simulateAsync("Boiling water");
}

function brewCoffee() {
    console.log("Brewing coffee...");
    return simulateAsync("Brewing coffee");
}

function pourCoffee() {
    console.log("Pouring coffee into cup...");
    return simulateAsync("Pouring coffee");
}

boilWater()
    .then(brewCoffee)
    .then(pourCoffee)
    .then(() => console.log("Coffee ready for the team!"))
    .catch(err => console.error("Error:", err));

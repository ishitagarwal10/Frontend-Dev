// Promise-based version of the old callback function
function getBugs() {
    return new Promise((resolve, reject) => {
        const apiFailed = Math.random() < 0.3; // 30% chance failure

        setTimeout(() => {
            if (apiFailed) {
                reject("API Error: Failed to fetch bugs.");
            } else {
                resolve(["UI glitch", "API timeout", "Login failure"]);
            }
        }, 1000);
    });
}

// Using the promise
getBugs()
    .then(bugs => {
        console.log("Fetched Bugs:");
        console.table(bugs);  // Display results in table format
    })
    .catch(err => {
        console.error("Error:", err);
    });

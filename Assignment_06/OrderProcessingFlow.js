// orderProcessing.js

function submitOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.5 ? reject("Order submission failed") : resolve("Order submitted successfully");
    }, 500);
  });
}

async function processOrder() {
  const maxAttempts = 3;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const result = await submitOrder();
      console.log(`Attempt ${attempt}: Success`);
      return result;
    } catch (err) {
      console.log(`Attempt ${attempt}: Failed`);
      if (attempt === maxAttempts) {
        throw new Error("Order could not be processed");
      }
    }
  }
}

// Execute with final error handling
(async () => {
  try {
    const result = await processOrder();
    console.log(result);
  } catch (err) {
    console.error(err.message);
  }
})();

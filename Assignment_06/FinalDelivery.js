// asyncDeliveryPipeline.js

// Utility function to simulate async steps with random delay and random failure
function asyncStep(stepName) {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 1000) + 1000; // 1–2s
    setTimeout(() => {
      if (Math.random() < 0.2) { // 20% chance of failure
        reject(`${stepName} failed`);
      } else {
        resolve(`${stepName} completed`);
      }
    }, delay);
  });
}

// Define each step
function takeOrder() { return asyncStep("Order taken"); }
function prepare() { return asyncStep("Food prepared"); }
function pack() { return asyncStep("Package ready"); }
function dispatch() { return asyncStep("Out for delivery"); }
function deliver() { return asyncStep("Delivery completed"); }

// Run the delivery pipeline
async function runPipeline() {
  console.log("Start Pipeline");

  try {
    const step1 = await takeOrder();
    console.log("Step 1:", step1);

    const step2 = await prepare();
    console.log("Step 2:", step2);

    const step3 = await pack();
    console.log("Step 3:", step3);

    const step4 = await dispatch();
    console.log("Step 4:", step4);

    const step5 = await deliver();
    console.log(step5);

    console.log("Pipeline completed successfully!");
  } catch (error) {
    // If any step rejects, control jumps here
    console.error("Pipeline failed!", error);
  }
}

// Execute the pipeline
runPipeline();

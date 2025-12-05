// frontendRush.js

// --- Callback Hell Version ---
function design(cb) {
  setTimeout(() => {
    console.log("Design completed");
    cb();
  }, 1000);
}

function build(cb) {
  setTimeout(() => {
    console.log("Build completed");
    cb();
  }, 1000);
}

function test(cb) {
  setTimeout(() => {
    console.log("Test completed");
    cb();
  }, 1000);
}

function deploy(cb) {
  setTimeout(() => {
    console.log("Deploy completed");
    cb();
  }, 1000);
}

function celebrate(cb) {
  setTimeout(() => {
    console.log("Celebrate! 🎉");
    if(cb) cb();
  }, 1000);
}

// Executing nested callbacks (Callback Hell)
design(() => {
  build(() => {
    test(() => {
      deploy(() => {
        celebrate();
      });
    });
  });
});

// --- Async/Await Version ---
function stage(name) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`${name} completed`);
      resolve();
    }, 1000);
  });
}

async function runPipeline() {
  await stage("Design");
  await stage("Build");
  await stage("Test");
  await stage("Deploy");
  await stage("Celebrate 🎉");
}

// runPipeline();

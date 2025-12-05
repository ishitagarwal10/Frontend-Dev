// lazyLoader.js

function loadProfile() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.2 ? reject("Profile failed") : resolve("Profile Loaded");
    }, 2000);
  });
}

function loadPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.2 ? reject("Posts failed") : resolve("Posts Loaded");
    }, 1500);
  });
}

function loadMessages() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.2 ? reject("Messages failed") : resolve("Messages Loaded");
    }, 1000);
  });
}

async function loadDashboard() {
  const startTime = Date.now();

  const results = await Promise.allSettled([loadProfile(), loadPosts(), loadMessages()]);

  results.forEach((result, index) => {
    const moduleName = ["Profile", "Posts", "Messages"][index];
    if (result.status === "fulfilled") {
      console.log(`${moduleName} succeeded: ${result.value}`);
    } else {
      console.log(`${moduleName} failed: ${result.reason}`);
    }
  });

  const endTime = Date.now();
  console.log(`Total time taken: ${(endTime - startTime) / 1000} seconds`);
}

loadDashboard();

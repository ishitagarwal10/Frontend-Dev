// devOpsDelay.js

function deployServer(name, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject(`${name} deployment failed`);
      } else {
        resolve(`${name} deployed successfully`);
      }
    }, delay);
  });
}

const serverA = deployServer("Server A", 2000);
const serverB = deployServer("Server B", 3000);

// Track all servers
Promise.all([serverA, serverB])
  .then(results => {
    console.log("Deployment completed for all servers");
    results.forEach(res => console.log(res));
  })
  .catch(error => {
    console.error("Error during deployment:", error);
  });

// Track fastest server
Promise.race([serverA, serverB])
  .then(fastest => {
    console.log("Fastest response:", fastest);
  })
  .catch(error => {
    console.error("Fastest deployment failed:", error);
  });

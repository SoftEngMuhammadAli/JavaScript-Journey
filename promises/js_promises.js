// Create a new promise
let myPromise = new Promise((resolve, reject) => {
  let condition = true;

  if (condition) {
    resolve("Promise resolved successfully!");
  } else {
    reject("Promise rejected.");
  }
});

// Handle the promise
myPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

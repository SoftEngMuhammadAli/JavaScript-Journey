// Create a new promise
let myPromise = new Promise((resolve, reject) => {
    let condition = true; // Change this to false to see the reject case

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
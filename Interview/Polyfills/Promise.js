let promise = new Promise(function (resolve, reject) {
  resolve("I am Resolved");
});

promise
  .then((result) => {
    console.log(result); // This won't run if the promise is rejected
  })
  .catch((error) => {
    console.error(error); // Output: Something went wrong!
  });

let rejectPromise = new Promise(function (resolve, reject) {
  reject("Hey I am rejected");
});

rejectPromise
  .then((result) => {
    console.log(result); // This won't run if the promise is rejected
  })
  .catch((error) => {
    console.error(error); // Output: Something went wrong!
  });

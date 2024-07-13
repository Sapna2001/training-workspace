let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(console.log("Value 1")), 1000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(console.log("Value 2")), 1000);
});

let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Error 3")), 1000);
});

Promise.all([promise1, promise2, promise3])
  .then(() => console.log("Success"))
  .catch(console.log("Failure"));

// Promise.race([promise1, promise2, promise3])
//   .then(() => console.log("Success"))
//   .catch(console.log);

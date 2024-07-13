// const products = [
//   {
//     id: 1,
//     name: "Iphone 15",
//     price: 86789.5,
//   },
//   {
//     id: 2,
//     name: "Oneplus 11R",
//     price: 45789.5,
//   },
//   {
//     id: 3,
//     name: "Google Pixel",
//     price: 55789.5,
//   },
// ];

let products;
const filterProductAsync = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (products) {
        resolve(products.filter((p) => p.price >= 50000));
      } else {
        reject(new Error("Products is empty."));
      }
    }, 1000);
  });
};

const promise = filterProductAsync();

promise
  .then((result) => console.log(result))
  .catch((reason) => console.log(reason))
  .finally(() => console.log("inside finally"));

console.log("After Timeout");


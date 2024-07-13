const products = [
  {
    id: 1,
    name: "Iphone 15",
    price: 86789.5,
  },
  {
    id: 2,
    name: "Oneplus 11R",
    price: 45789.5,
  },
  {
    id: 3,
    name: "Google Pixel",
    price: 55789.5,
  },
];

const filterProductAsync = (callback) => {
  setTimeout(() => {
    const res = products.filter((p) => p.price >= 50000);
    callback(res);
  }, 1000);
};

filterProductAsync((filteredProducts) => {
  console.log(filteredProducts);
});

console.log("After Timeout");

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

var sortProductsByPrice = function (callback) {
  return products.sort(callback);
};

var sortProducts = function (p1, p2) {
  return p1.price - p2.price;
};

var sortProductsArrow = (p1, p2) => p1.price - p2.price;

var result = sortProductsByPrice(sortProductsArrow);

var resultArray = [];
var sum = 0;

console.log(
  products
    .filter((p) => p.price >= 50000)
    .map((p) => p.price)
    .reduce((accumulator, nextValue) => (accumulator += nextValue))
);

for (let element in products) {
  if (products[element].price >= 50000) {
    resultArray.push(products[element]);
    sum += products[element].price;
  }
}

console.log("Products with price greater than to or equal to 50000: ");
console.log(resultArray);
console.log("Sum: " + sum);

var answer = products
  .filter(function (p) {
    return p.price >= 50000;
  })
  .map(function (p) {
    return p.price;
  })
  .reduce(function (accumulator, nextValue) {
    return (accumulator += nextValue);
  });

console.log("Using normal function: " + answer);




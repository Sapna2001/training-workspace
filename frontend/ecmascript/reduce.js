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

var sum = 0,
  n = 0,
  min = products[0].price,
  max = products[0].price;

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

var avg = sum / n;
console.log("Sum: " + sum);
console.log("Avg: " + avg);

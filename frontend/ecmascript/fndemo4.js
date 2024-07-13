const prices = [4000.5, 3400.65, 7645.9];

const higherOrderFn = function (callBack) {
  return prices.sort(callBack);
};

const sortArray = function (a, b) {
  return b - a;
};

var result1 = higherOrderFn(sortArray);
console.log(result1);

var result2 = higherOrderFn(function (a, b) {
  return a - b;
});
console.log(result2);

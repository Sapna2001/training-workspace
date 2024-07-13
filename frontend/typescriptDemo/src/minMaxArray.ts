const numberArray: Array<number> = [234, 456, 678, 231, 888, 432];

const stringArray: Array<string> = ["a", "w", "s", "g", "f", "l"];

function minValue<T>(array: T[]): T | number {
  if (array.length === 0) {
    return 0;
  }

  let minVal: T = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < minVal) {
      minVal = array[i];
    }
  }
  return minVal;
}

function maxValue<T>(array: T[]): T | number {
  if (array.length === 0) {
    return 0;
  }

  let maxVal: T = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > maxVal) {
      maxVal = array[i];
    }
  }
  return maxVal;
}

console.log(minValue(numberArray));
console.log(maxValue(numberArray));
console.log(minValue(stringArray));
console.log(maxValue(stringArray));

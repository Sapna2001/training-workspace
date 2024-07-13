let a = 10;
let b = 20;

// Array destructuring
[a, b] = [b, a];

console.log(a);
console.log(b);

let products = ["Iphone","OnePlus","Google Pixel"];

let [product1, ,product2] = products;

console.log(product1);
console.log(product2);

// rest operator
const loadProducts = (...product) => {
    // spread operator
    const [newProducts] = [...product];
    console.log(newProducts.length)
} 

loadProducts("Iphone","OnePlus","Google Pixel")
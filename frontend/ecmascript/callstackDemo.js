const foo = (x) => {
    return 2 * x;
}

const bar = (y) => {
    return foo(y+5)-10;
}

console.log(bar(15))
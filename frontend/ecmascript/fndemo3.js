var outer = function(x) {
    return function(y) {
        return x + y;
    }
}

// var result = outer(5)(3); 
// console.log(result);

var returnFun = outer(80);
var result = returnFun(20);
console.log(result);
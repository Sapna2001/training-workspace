// anonymous fn -> works
// var printOrder = function() {
//     console.log("Printing order.");
// }

// printOrder();

// works and helps during debugging
var printOrder = function printOrder() {
    console.log("Printing order.");
}

printOrder();

// does not work
// printOrder();
// var printOrder = function() {
//     console.log("Printing order.");
// }





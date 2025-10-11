var _ = require("lodash");

console.log("NPM CLI DEMO (Nelson)");

// console.log(_);

// Demo Codes
var numbers = [1, 2, 3, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(typeof numbers);

console.log("before ...");
console.log(numbers);

numbers = _.without(numbers, 3);

console.log("after ...");
console.log(numbers);

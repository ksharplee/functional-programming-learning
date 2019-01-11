import R from "ramda";

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let getEven = function(arr) {
//   return arr.filter(x => x % 2 === 0);
// }

// console.log(getEven(nums));

let sum = function(a, b) {
  return a + b;
};

//recursion + spread operator + rest operator
// let sumAll = function(a, ...rest) {
//   if (!a) return 0;
//   if (!rest) return a;
//   return sum(a, sumAll(...rest));
// }

// let sumAll = function(arr) {
//   if (!arr) return 0;
//   return arr.reduce(sum);
// }

// console.log(sumAll(nums));

// let add = function(x, y) {
//   return x + y;
// }

// let add_c = R.curry(add);

// console.log(add_c(1, 2));

// var add = function(x, y) { return x + y };
// var multiply = function(x, y) { return x * y };

// var x = 4;
// var y = 2;
// var z = 0;

// var result = multiply(y, add(x, x));

// console.log(result)

// var hi = function(name) {
//   return 'Hi ' + name;
// }

// var greeting = hi;

// console.log(greeting('Lee'));

var memoize = function(f) {
  var cache = {};

  return function() {
    var arg_str = JSON.stringify(arguments);
    cache[arg_str] = cache[arg_str] || f.apply(f, arguments);
    return cache[arg_str];
  };
};

var squareNumber = memoize(x => x * x);

var pureHttpCall = memoize(function(url, params) {
  return function() {
    return $.getJSON(url, params);
  };
});

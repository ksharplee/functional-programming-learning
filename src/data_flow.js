
// let ender = function(ending) {
//   return function(input) {
//     return input + ending;
//   }
// }

let ender = ending => input => input + ending;

let adore = ender(' rocks');
let announce = ender(', y\'all');
let exclaim = ender('!');

// let hypeup = function(x) {
//   return exclaim(announce(adore(x)));
// }

let hypeup = x => exclaim(announce(adore(x)));

console.log(hypeup('JS'));
console.log(hypeup('FP'));
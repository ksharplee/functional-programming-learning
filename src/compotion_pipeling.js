
const R = require('ramda');

let ender = ending => input => input + ending;

let adore = ender(' rocks');
let announce = ender(', y\'all');
let exclaim = ender('!');

let rtlHype = R.compose(adore, announce, exclaim);
console.log(rtlHype('FP'));

let ltrHype = R.pipe(adore, announce, exclaim);
console.log(ltrHype('FP'));
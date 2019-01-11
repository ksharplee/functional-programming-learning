
const array = [100, 200, 300, 400, 500];

let sum = array.reduce((sum, item) => sum + item);
// let sum = array.reduce((sum, item) => sum + item, 0);

console.log(sum);
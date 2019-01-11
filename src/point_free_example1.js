
import R from 'Ramda';

let str = 'Lorem ipsum dolor sit amet consectetur adipiscing elit';

// 以空格分割单词
let splitBySpace = s => s.split(' ');

// 每个单词的长度
let getLength = w => w.length;

// // 词的数组转换成长度的数组
// let getLengthArr = arr => R.map(getLength, arr);

// // 返回较大的数字
// let getBiggerNumber = (a, b) => a > b ? a : b;

// // 返回最大的一个数字
// let findBiggestNumber = arr => R.reduce(getBiggerNumber, 0, arr);

// let getLongestWordLength = R.pipe(
//   splitBySpace,
//   getLengthArr,
//   findBiggestNumber
// );

// console.log(getLongestWordLength(str));

let getLongestWordLength = R.pipe(
  R.split(' '),
  R.map(R.length),
  R.reduce(R.max, 0)
);

console.log(getLongestWordLength(str));

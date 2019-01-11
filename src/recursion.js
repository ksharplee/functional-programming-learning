
// function sum(numbers) {
//   if(numbers.length === 1) return numbers[0];
//   return numbers[0] + sum(numbers.splice(1));
// }

// console.log(sum([1, 2, 3, 4]));

let categories = [
  { id: 'animals', 'parent': null },
  { id: 'mammals', 'parent': 'animals' },
  { id: 'cats', 'parent': 'mammals' },
  { id: 'dogs', 'parent': 'mammals' },
  { id: 'chihuahua', 'parent': 'dogs' },
  { id: 'labrador', 'parent': 'dogs' },
  { id: 'persian', 'parent': 'cats' },
  { id: 'siamese', 'parent': 'cats' },
];

let makeTree = (categories, parent) => {
  let node = {};
  categories
    // 按照传入的parent筛选，返回parent属性值为传入parent值的对象数组
    .filter(c => c.parent === parent)
    // 针对返回的数组取得数组元素（对象）的id属性的值，把值传入函数递归调用
    .forEach(c => node[c.id] = makeTree(categories, c.id));
  return node;
};

console.log(JSON.stringify(makeTree(categories, null), null, 2));
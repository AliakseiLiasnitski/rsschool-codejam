function recursion(...arg) {
  const masP = [];
  const masC = [];
  if (arg.length === 0) return [];
  Array.from(arg).forEach((item) => {
    masP.push(item.value);
    if (item.left !== undefined) masC.push(item.left);
    if (item.right !== undefined) masC.push(item.right);
  });
  return [masP, ...recursion(...masC)];
}

const tree = {
  value: 100,
  left: {
    value: 90,
    left: { value: 70 },
    right: { value: 99 },
  },
  right: {
    value: 120,
    left: { value: 110 },
    right: { value: 130 },
  },
};

const array = recursion(tree);
console.log(array);

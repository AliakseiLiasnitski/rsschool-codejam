module.exports = function recursion(...arg) {
  const masP = [];
  const masC = [];
  if (arg.length === 0) return [];
  Array.from(arg).forEach((item) => {
    masP.push(item.value);
    if (item.left !== undefined) masC.push(item.left);
    if (item.right !== undefined) masC.push(item.right);
  });
  return [masP, ...recursion(...masC)];
};

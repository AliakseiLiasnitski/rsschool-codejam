module.exports = function sumOfOther(arr) {
  const sym = arr.reduce((acc, item) => acc + item);
  return arr.map(item => sym - item);
};

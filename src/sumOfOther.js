function sumOfOther(arr) {
  const sym = arr.reduce((acc, item) => acc + item);
  return arr.map(item => sym - item);
}

console.log(sumOfOther([2, 3, 4, 1]));

module.exports = function make(...temp) {
  const masElem = [];
  const foo = function (...arg) {
    if (typeof arg[0] === 'function') {
      const fun = arg[0];
      return masElem.reduce((acc, item) => {
        const a = fun(acc, item);
        return a;
      });
    }
    masElem.push(...arg);
    return foo;
  };
  return foo(...temp);
};

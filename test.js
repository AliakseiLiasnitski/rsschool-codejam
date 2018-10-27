const assert = require('assert');
Object.freeze(assert);
const getSumOfOther = require('./src/sumOfOther');
const getMake = require('./src/make');
const getRecursion = require('./src/recursion');

describe('SumOfOther', () => {
    it('0', () => {
      const sumOfOther = getSumOfOther([2, 3, 4, 1]);
      assert.deepEqual(sumOfOther, [8, 7, 6, 9]);
    });
  
    it('2', () => {
      const sumOfOther = getSumOfOther([32, 12, 5, 2, 18, 19]);
      assert.deepEqual(sumOfOther, [56, 76, 83, 86, 70, 69]);
    });
  
    it('3', () => {
      const sumOfOther = getSumOfOther([56, 76, 3]);
      assert.deepEqual(sumOfOther, [79, 59, 132]);
    });
});

describe('Make', () => {
  it('0', () => {
    const make = getMake(15)(34, 21, 666)(41)(sum);
    assert.equal(make, 777);
  });

  it('2', () => {
    const make = getMake(34, 21, 6)(41, 4)(sum);
    assert.equal(make, 106);
  });

  it('3', () => {
    const make = getMake(-12)(0)(67, 82, 1, 10)(16)(sum);
    assert.equal(make, 164);
  });
});

function sum(a, b) {
  return a + b;
}

describe('Recursion', () => {
  it('0', () => {
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
    const recursion = getRecursion(tree);
    assert.deepEqual(recursion, [[100], [90, 120], [70, 99, 110, 130]]);
  });

  it('2', () => {
    const tree = {
      value: 100,
      left: {
        value: 90,
        left: { value: 70 },
        right: { value: 99 },
      },
      right: {
        value: 120,
        left: {
          value: 110,
          left: { value: 109}
        }
      },
    };
    const recursion = getRecursion(tree);
    assert.deepEqual(recursion, [[100], [90, 120], [70, 99, 110], [109]]);
  });

  it('3', () => {
    const tree = {
      value: 100,
      left: {
        value: 90,
        left: { value: 70 },
        right: {
          value: 99,
          left: {
            value: 91,
            right: { value: 95 }
          }
        },
      },
      right: {
        value: 120,
        left: {
          value: 110,
          left: { value: 109}
        }
      },
    };
    const recursion = getRecursion(tree);
    assert.deepEqual(recursion, [[100], [90, 120], [70, 99, 110], [91, 109], [95]]);
  });
});
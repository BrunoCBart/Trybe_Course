const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

const actual = myRemoveWithoutCopy([1, 2, 3, 4], 5)

assert.deepStrictEqual(actual, [1, 2, 3, 4])
// assert.notDeepEqual(actual, [1, 2, 3, 4])

// implemente seus testes aqui
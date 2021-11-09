const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

const actual = myRemove([1, 2, 3, 4], 5)

assert.deepEqual(actual, [1, 2, 3, 4])
assert.notDeepEqual(actual, [1, 2, 3, 4, 5])
// implemente seus testes aqui
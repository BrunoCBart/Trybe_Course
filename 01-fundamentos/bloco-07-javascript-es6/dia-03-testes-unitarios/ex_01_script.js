const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

const actual = sum(4, 5)

assert.strictEqual(actual, 9)
assert.throws(() => {
  sum(4, '5')
})

assert.throws(() => {
  sum(4, '5');
}, /^Error: parameters must be numbers$/);


// implemente seus testes aqui
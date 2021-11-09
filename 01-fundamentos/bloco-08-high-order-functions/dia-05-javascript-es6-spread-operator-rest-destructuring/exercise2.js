const assert = require('assert');

// escreva sum abaixo

function sum(...args) {
  if (args.length === 0) return 0
  return args.reduce((acc, num) => {
    return acc + num
  })
}

assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);
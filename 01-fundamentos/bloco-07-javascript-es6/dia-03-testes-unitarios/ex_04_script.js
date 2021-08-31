const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

const actual = myFizzBuzz(15)

const actual2 = myFizzBuzz(9)

const actual3 = myFizzBuzz(10)

const actual4 = myFizzBuzz('string')

assert.strictEqual(actual, 'fizzbuzz')
assert.strictEqual(actual2, 'fizz')
assert.strictEqual(actual3, 'buzz')
assert.strictEqual(actual4, false)

// implemente seus testes aqui
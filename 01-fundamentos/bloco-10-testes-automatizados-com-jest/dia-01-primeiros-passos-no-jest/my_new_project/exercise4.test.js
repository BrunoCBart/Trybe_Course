const myFizzBuzz = require('./exercise4')


it('Testa função myFizzBuzz', () => {
  expect(myFizzBuzz(15)).toBe('fizzbuzz')
  expect(myFizzBuzz(3)).toBe('fizz')
  expect(myFizzBuzz(5)).toBe('buzz')
  expect(myFizzBuzz('a')).toBe(false)
})
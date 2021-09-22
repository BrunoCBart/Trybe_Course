const myRemove = require('./exercise2')


it('Testa função myRemove', () => {
  expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
  expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
  expect(myRemove([1, 2, 3, 4])).toEqual([1, 2, 3, 4])
  expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
})
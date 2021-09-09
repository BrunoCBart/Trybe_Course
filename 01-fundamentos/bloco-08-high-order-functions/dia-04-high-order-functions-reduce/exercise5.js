const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];


// const regex = /(a)/gi
// console.log('Aanemarie'.match(regex).length)

// function containsA() {
//   return names.reduce((acc, name) => {
//     const regex = /(a)/gi
//     return acc += name.match(regex).length
//   }, 0)
// }

function containsA() {
  return names.reduce((acc, name) => {
    return acc + name.split('').reduce((accumulator, letter) => {
      if (letter === 'a' || letter === 'A') accumulator += 1
      return accumulator
    }, 0)
  }, 0)
}


assert.deepStrictEqual(containsA(), 20);
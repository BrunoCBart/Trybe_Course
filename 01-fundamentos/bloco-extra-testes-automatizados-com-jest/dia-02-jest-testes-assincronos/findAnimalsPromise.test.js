const resolve = require('resolve');

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => {
  return Animals.find((animal) => animal.name === name)
};

const findAnimalByAge = (age) => {
  return Animals.filter((animal) => animal.age === age)
}

const getAnimal = (name) => {
  return new Promise((resolve, reject) => {
    const animal = findAnimalByName(name);
    if (animal) resolve(animal);
    return reject('Nenhum animal com esse nome!');
  })
};
// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

test('Testa função findAnimalByAge', () => {
  expect(findAnimalByAge(1)).toEqual([{ name: 'Dorminhoco', age: 1, type: 'Dog' }])
})
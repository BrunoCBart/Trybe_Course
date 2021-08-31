const person = {
  name: 'Alberto',
  lastName: 'Gomes',
  age: 20,
};

const info = {
  age: 23,
  job: 'engenheiro',
};

const family = {
  children: ['Maria', 'João'],
  wife: 'Ana',
};

const newOBj = Object.assign({}, info, family)
console.log(newOBj)

/* Output
  { name: 'Alberto',
  lastName: 'Gomes',
  age: 23,
  job: 'engenheiro',
  children: [ 'Maria', 'João' ],
  wife: 'Ana'
  } */


const person2 = {
  name: 'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const clone = Object.assign({}, person2, lastName);
person2.lastName = 'Otávio'
console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
console.log(person2); // { name: 'Roberto', lastName: 'Silva' }

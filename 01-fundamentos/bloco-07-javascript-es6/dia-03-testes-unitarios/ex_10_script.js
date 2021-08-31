const assert = require('assert');

const greetPeople = (people) => {
  let greeting = [];

  for (const person in people) {
    greeting.push('Hello ' + people[person]);
  }
  return greeting;
};


const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];


const actual = greetPeople(parameter)

assert.deepStrictEqual(actual, result)
const romanos = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function numerosRomanos(romanNum) {
  let total = 0;
  let array = romanNum.split("");
  for (let i = 0; i < array.length; i++) {
    if (romanos[array[i]] < romanos[array[i + 1]]) {
      total -= romanos[array[i]];
    } else {
      total += romanos[array[i]];
    }
  }
  return total;
}

console.log(numerosRomanos("IX"));

console.log("########");

function searchEven(arr) {
  evens = [];
  for (let i in arr) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] % 2 === 0) {
        evens.push(arr[i][j]);
      }
    }
  }
  return evens;
}

console.log("########");

console.log(
  searchEven([
    [1, 2],
    [3, 4, 5, 6],
    [7, 8, 9, 10],
  ])
);

console.log("########");

const basket = [
  "Melancia",
  "Abacate",
  "Melancia",
  "Melancia",
  "Uva",
  "Laranja",
  "Jaca",
  "Pera",
  "Melancia",
  "Uva",
  "Laranja",
  "Melancia",
  "Banana",
  "Uva",
  "Pera",
  "Abacate",
  "Laranja",
  "Abacate",
  "Banana",
  "Melancia",
  "Laranja",
  "Laranja",
  "Jaca",
  "Uva",
  "Banana",
  "Uva",
  "Laranja",
  "Pera",
  "Melancia",
  "Uva",
  "Jaca",
  "Banana",
  "Pera",
  "Abacate",
  "Melancia",
  "Melancia",
  "Laranja",
  "Pera",
  "Banana",
  "Jaca",
  "Laranja",
  "Melancia",
  "Abacate",
  "Abacate",
  "Pera",
  "Melancia",
  "Banana",
  "Banana",
  "Abacate",
  "Uva",
  "Laranja",
  "Banana",
  "Abacate",
  "Uva",
  "Uva",
  "Abacate",
  "Abacate",
  "Melancia",
  "Uva",
  "Jaca",
  "Uva",
  "Banana",
  "Abacate",
  "Banana",
  "Uva",
  "Banana",
  "Laranja",
  "Laranja",
  "Jaca",
  "Jaca",
  "Abacate",
  "Jaca",
  "Laranja",
  "Melancia",
  "Pera",
  "Jaca",
  "Melancia",
  "Uva",
  "Abacate",
  "Jaca",
  "Jaca",
  "Abacate",
  "Uva",
  "Laranja",
  "Pera",
  "Melancia",
  "Jaca",
  "Pera",
  "Laranja",
  "Jaca",
  "Pera",
  "Melancia",
  "Jaca",
  "Banana",
  "Laranja",
  "Jaca",
  "Banana",
  "Pera",
  "Abacate",
  "Uva",
];

function fruitBasket(arr) {
  const fruitBasket = [];
  for (let fruit of basket) {
    if (!fruitBasket[fruit]) {
      fruitBasket[fruit] = 1;
    } else {
      fruitBasket[fruit]++;
    }
  }
  return fruitBasket;
}

console.log(
  fruitBasket(["Melancia", "Abacate", "Melancia", "Melancia", "Uva"])
);

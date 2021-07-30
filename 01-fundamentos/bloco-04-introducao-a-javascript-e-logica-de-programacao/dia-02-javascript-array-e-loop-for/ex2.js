let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sum = 0;

for (let num of numbers) {
  console.log(num);
  sum += num;
}
console.log("---------Ex2-------");

console.log(sum);

console.log("--------Ex3--------");

console.log(sum / numbers.length);

console.log("--------Ex4--------");

let maiorquevinte = sum / numbers.length;

if (maiorquevinte > 20) {
  console.log("valor maior que vinte");
} else {
  console.log("valor menor ou igual vinte");
}

console.log("--------Ex5--------");

let maximum = numbers[0];

for (let num of numbers) {
  if (maximum < num) maximum = num;
}

console.log(maximum);

console.log("--------Ex6--------");

let count = 0;
for (let num of numbers) {
  if (num % 2 === 1) {
    count++;
  }
}
console.log(count);

if (count === 0) console.log("Nenhum valor ímpar");

console.log("--------Ex7--------");

let minimum = numbers[0];

for (let num of numbers) {
  if (minimum > num) minimum = num;
}
console.log(minimum);

console.log("--------Ex8--------");

const arr = [];

for (let i = 1; i < 26; i++) {
  arr.push(i / 2);
}
console.log(arr);

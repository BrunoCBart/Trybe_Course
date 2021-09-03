
const sum = (num, num2) => num + num2

const sub = (num, num2) => num - num2

const mult = (num, num2) => num * num2

const div = (num, num2) => num / num2

const calculator = (operation) => operation(10, 5)

console.log(calculator(sum))
console.log(calculator(sub))
console.log(calculator(mult))
console.log(calculator(div))
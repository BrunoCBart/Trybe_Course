const readline = require('readline-sync')

const inputWeigth = readline.questionInt("Qual o seu peso? (em kg)")
const inputHeight = readline.questionInt("Qual a sua altura? (em metros)")

const calcImc =  (weight = 58, height = 1.69) => weight / height * 2;
console.log(calcImc(inputWeigth, inputHeight))
//ex 1 a 4

var a = 15;
var b = 7;
var c = 33;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

if (a > b) {
  console.log(a);
} else {
  console.log(b);
}

if (a > b && a > c) {
  console.log(a);
} else if (b > a && b > c) {
  console.log(b);
} else {
  console.log(c);
}

//ex 5

var ang = 40;
var ang2 = 50;
var ang3 = 90;

var angSoma = ang + ang2 + ang3;

if (angSoma === 180) {
  console.log(true);
} else if (angSoma < 0) {
  console.log("angulo inválido");
} else {
  console.log(false);
}

//ex 6

var pecaXadrez = "rei";

switch (pecaXadrez.toLowerCase()) {
  case "peao":
    console.log("Uma casa para frente");
    break;
  case "bispo":
    console.log("Diagonal");
    break;
  case "cavalo":
    console.log("L");
    break;
  case "torre":
    console.log("Pra frente e pros lados");
    break;
  case "rainha":
    console.log("Para frente para os lados e em diagonal");
    break;
  case "rei":
    console.log("Uma casa para qualquer lado");
}

//ex 7

var nota = Math.random() * 100 + 1;

if (nota >= 90) {
  console.log("A");
} else if (nota >= 80) {
  console.log("B");
} else if (nota >= 70) {
  console.log("C");
} else if (nota >= 60) {
  console.log("D");
} else if (nota >= 50) {
  console.log("E");
} else if (nota < 50) {
  console.log("F");
} else if (nota < 0 || nota > 100) {
  console.log("Nota inválida");
}

//ex 8

var num1 = 3;
var num2 = 4;
var num3 = 6;

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
  console.log(true);
} else {
  console.log(false);
}

//ex 9

var num1 = 4;
var num2 = 2;
var num3 = 6;

if (num1 % 2 === 1 || num2 % 2 === 1 || num3 % 2 === 1) {
  console.log(true);
} else {
  console.log(false);
}

//ex 10

var valor = 60;
var valorVenda = 90;

var imposto = (valor / 100) * 20;

var valorCustoTotal = valor + imposto;
var lucro = valorVenda - valorCustoTotal;

console.log(lucro * 1000);

//ex 11

var salario = Number(Math.random() * 10000 + 1).toFixed(2);
console.log(salario);

var salarioInss;

if (salario <= 1556.94) {
  salarioInss = salario - (salario / 100) * 8;
} else if (salario >= 1556.95 && salario <= 2594.92) {
  salarioInss = salario - (salario / 100) * 9;
} else if (salario >= 2594.93 && salario <= 5189.82) {
  salarioInss = salario - (salario / 100) * 11;
} else if (salario > 5189.82) {
  salarioInss = salario - 570.88;
}
console.log(salarioInss);
var salarioFinal;

if (salario <= 1903.98) {
  salarioFinal = salarioInss;
  console.log(salarioFinal);
} else if (salarioInss >= 1903.99 && salarioInss <= 2826.65) {
  salarioFinal = salarioInss - ((salarioInss / 100) * 7.5 - 142.8);
  console.log(salarioFinal);
} else if (salarioInss >= 2826.66 && salarioInss <= 3751.05) {
  salarioFinal = salarioInss - ((salarioInss / 100) * 15 - 354.8);
  console.log(salarioFinal);
} else if (salarioInss >= 3751.06 && salarioInss <= 4664.68) {
  salarioFinal = salarioInss - ((salarioInss / 100) * 22.5 - 636.13);
  console.log(salarioFinal);
} else if (salarioInss > 4664.68) {
  salarioFinal = salarioInss - ((salarioInss / 100) * 27.5 - 869.36);
  console.log(salarioFinal);
}

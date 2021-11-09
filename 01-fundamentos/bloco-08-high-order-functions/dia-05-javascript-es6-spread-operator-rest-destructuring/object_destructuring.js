const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};


// for (let [key, val] of Object.entries(product)) {
//   console.log(val)
// }

// const { name, price, seller } = product
// console.log(name)
// console.log(price)
// console.log(seller)


const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

const { a: name, b: classAssigned, c: subject } = student;

console.log(name); // Maria
console.log(classAssigned); // Turma B
console.log(subject); // Matemática
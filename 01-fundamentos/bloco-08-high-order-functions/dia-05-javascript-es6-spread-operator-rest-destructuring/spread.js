// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Apple', 'Banana', 'Pear'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Strawberry', 'Coconut', 'Watermelon'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));
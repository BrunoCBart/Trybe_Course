
const positiveOrNegative = (num) => {
  return num > 0 ?
   'positivo' : num < 0 ?
    'negativo' : num === 0 ?
     'neutro' : 'o valor deve ser um número'
}


module.exports = positiveOrNegative
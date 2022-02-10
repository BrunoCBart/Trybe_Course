const func = (a, b ,c) => {
  return new Promise((resolve, reject) => {
    if(typeof a !== 'number' 
    || typeof b !== 'number'
    || typeof c !== 'number') reject("Informe apenas números")
    const result = (a + b) * c
    result < 50 ? "Valor muito baixo": resolve(result)
  })
}
module.exports = func
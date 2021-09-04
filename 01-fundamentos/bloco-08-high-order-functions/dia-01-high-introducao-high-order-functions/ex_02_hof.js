
const check = (luckyNumber, num) => {
  if (luckyNumber === num) {
    return "Parabéns você ganhou"
  } else {
    return 'Tente novamente'
  }
}


const gameOfLuck = (num, func) => {
  const luckyNumber = Math.floor(Math.random() * 5 + 1)
  return func(luckyNumber, num)
}

const result = gameOfLuck(5, check)
console.log(result)


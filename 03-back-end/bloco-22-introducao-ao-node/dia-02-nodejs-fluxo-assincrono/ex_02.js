const func = require('./ex_01')

const randomNumber = () => Math.floor(Math.random() * 100 + 1)

const num1 = randomNumber()
const num2 = randomNumber()
const num3 = randomNumber()

func(num1, num2, num3)
  .then((r) => console.log(r))
  .catch(err => console.log(err))


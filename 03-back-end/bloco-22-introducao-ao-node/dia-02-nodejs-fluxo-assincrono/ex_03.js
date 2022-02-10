const func = require('./ex_01')

const randomNumber = () => Math.floor(Math.random() * 100 + 1)

const num1 = randomNumber()
const num2 = randomNumber()
const num3 = randomNumber()

const asyncAwait = async () => {
  try {
  const r = await func(num1, num2, num3)
  console.log(r)
  } catch (err) {
    console.log(err)
  }
}
asyncAwait()
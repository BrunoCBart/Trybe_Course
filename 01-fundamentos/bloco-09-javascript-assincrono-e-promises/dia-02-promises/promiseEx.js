const randomNumber = () => Math.floor(Math.random() * 50 + 1)

const smt = () => {
  return new Promise((resolve, reject) => {
    const numbers = []
    for (let i = 0; i < 10; i++) {
      numbers.push(randomNumber() ** 2)
    }
    const sum = numbers.reduce((acc, num) => acc + num)
    if (sum < 8000) {
      const divisors = [2, 3, 5, 10]
      const arr = divisors.map((div) => {
        return sum / div
      })

      resolve(arr)
    } else {
      reject(sum)
    }
  })
}

smt()
  .then(arr => console.log(arr.reduce((acc, num) => acc + num)))
  .catch((sum) => console.log('É mais de oito mil! ' + sum))
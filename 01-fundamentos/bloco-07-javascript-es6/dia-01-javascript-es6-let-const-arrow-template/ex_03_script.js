const fatorial = (num) => {

  return (num === 1 || num === 0) ? 1 : num * fatorial(num - 1);
  // if (num === 0) return 1

  // let result = 1
  // while (num > 0) {
  //   result *= num
  //   num -= 1
  // }
  // return result
}

console.log(fatorial(5))
function basePyramid(n) {
  let pyramid = "";
  for (let i = 1; i <= n; i += 2) {
    for (let j = 0; j < Math.ceil((n - i) / 2); j++) {
      pyramid += " ";
    }

    for (let k = 0; k < i; k++) {
      if (k == 0 || k == i - 1 || i == n) {
        pyramid += "*";
      } else {
        pyramid += " ";
      }
    }
    for (let j = 0; j < Math.ceil((n - i) / 2); j++) {
      pyramid += " ";
    }

    pyramid += "\n";
  }
  console.log(pyramid);
}

basePyramid(5);

function isPrime(num) {
  let mark = 0;
  for (let n = 1; n <= num; n++) {
    if (num % n === 0) {
      mark++;
    }
  }
  if (mark === 2) {
    console.log(`${num} é primo`);
  } else {
    console.log(`${num} não é primo`);
  }
}

isPrime(50);

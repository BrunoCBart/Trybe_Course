function isPalindrome(str) {
  const reverse = str.split("").reverse().join("");
  return str === reverse;
}

console.log(isPalindrome("araraa"));

console.log("######");

function maxValue(arr) {
  return arr.reduce(function (prev, current) {
    return current > prev ? current : prev;
  });
}

console.log(maxValue([2, 3, 12, 7, 10, 1]));

console.log("######");

function minValue(arr) {
  return arr.reduce(function (prev, current) {
    return current < prev ? current : prev;
  });
}

console.log(minValue([2, 4, 6, 7, 10, 0, -3]));

console.log("######");

function biggestName(arr) {
  return arr.reduce(function (prev, current) {
    return prev.length > current.length ? prev : current;
  });
}

console.log(
  biggestName(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"])
);

console.log("######");

function repeatInteger(arr) {
  let count = 0;
  let save = 0;
  let val = 0;
  for (let i in arr) {
    for (let j in arr) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count > save) {
      save = count;
      val = arr[i];
    }
    count = 0;
  }
  return val;
}

console.log(repeatInteger([2, 3, 2, 5, 8, 2, 3]));

console.log("######");

function somaN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(somaN(5));

console.log("######");

function finalString(str, strend) {
  const endLength = strend.length;
  const strSlice = str.slice(0, -endLength);
  const newString = strSlice + strend;
  return newString === str;
}

console.log(finalString("trybe", "be"));

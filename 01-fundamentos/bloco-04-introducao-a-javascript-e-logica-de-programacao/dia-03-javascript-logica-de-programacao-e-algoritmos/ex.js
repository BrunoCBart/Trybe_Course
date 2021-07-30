function squareAsterisk(n) {
  let square = "";
  for (let i = n; i > 0; i--) {
    for (let j = n; j > 0; j--) {
      square += "*";
    }
    square += "\n";
  }
  console.log(square);
}

squareAsterisk(5);

function triangleAsterisk(n) {
  let triangle = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      triangle += "*";
    }
    triangle += "\n";
  }
  console.log(triangle);
}

triangleAsterisk(5);

function invertedTriangleAsterisk(n) {
  let triangle = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n - i; j++) {
      triangle += " ";
    }
    for (let k = 0; k < i; k++) {
      triangle += "*";
    }
    triangle += "\n";
  }
  console.log(triangle);
}

invertedTriangleAsterisk(5);

function trianglePyramid(n) {
  let pyramid = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      pyramid += " ";
    }

    for (let k = 0; k < 2 * i - 1; k++) {
      pyramid += "*";
    }
    for (let q = 1; q <= n - i; q++) {
      pyramid += " ";
    }
    pyramid += "\n";
  }
  console.log(pyramid);
}

trianglePyramid(5);

function basePyramid(n) {
  let pyramid = "";
  for (let i = 1; i <= n; i += 2) {
    for (let j = 0; j < Math.ceil((n - i) / 2); j++) {
      pyramid += " ";
    }

    for (let k = 0; k < i; k++) {
      pyramid += "*";
    }
    for (let j = 0; j < Math.ceil((n - i) / 2); j++) {
      pyramid += " ";
    }

    pyramid += "\n";
  }
  console.log(pyramid);
}

basePyramid(5);

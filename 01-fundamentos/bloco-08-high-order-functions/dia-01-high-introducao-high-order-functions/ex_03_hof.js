const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const makeGrade = (answers, test) => {
  let grade = 0;
  STUDENT_ANSWERS.forEach((ans, i) => {
    if (ans === RIGHT_ANSWERS[i]) {
      grade += 1
    } else if (ans !== 'N.A') {
      grade -= 0.5
    }
  })
  return grade
}

const testGrade = (answers, test, func) => {
  return func(answers, test)
}

console.log(testGrade(RIGHT_ANSWERS, STUDENT_ANSWERS, makeGrade))


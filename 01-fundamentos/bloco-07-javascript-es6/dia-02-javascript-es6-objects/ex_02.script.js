const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};


function addMorningClass(lesson, key, val) {
  return lesson[key] = val
}

addMorningClass(lesson2, 'turno', 'manhã')

// console.log(lesson2)


function listObjKeys(obj) {
  return Object.keys(obj)
}

// console.log(listObjKeys(lesson1))

function objLength(obj) {
  return listObjKeys(obj).length
}

// console.log(objLength(lesson1))

function objValues(obj) {
  return Object.values(obj)
}

// console.log(objValues(lesson3))

const allLessons = { lesson1: lesson1, lesson2: lesson2, lesson3: lesson3 }
// console.log(allLessons)


function studentsCount(obj) {
  let count = 0
  for (let lesson in obj) {
    count += obj[lesson].numeroEstudantes
  }
  return count
}

// console.log(studentsCount(allLessons))

function getObjectValue(obj, i) {
  const values = Object.values(obj)
  return values[i]
}

console.log(getObjectValue(lesson3, 1))

function verifyPair(obj, key, value) {
  if (!obj[key]) return false
  return obj[key] === value ? true : false;
}

console.log(verifyPair(lesson3, 'materia', 'Matemática'))
const findX = (x) => {
  const str = 'Tryber x aqui!'
  return str.split(' ').map((word) => word === 'x' ? x : word).join(' ')

}

const mySkills = ['Html', 'CSS', 'JavaScript', 'Calisthenics', 'Osu']

const concatSkills = (str) => {
  str = str.split(' ')
  mySkills.forEach(skill => str.push(skill))
  return str.join(' ')
}

console.log(concatSkills(findX('Tryber x aqui!')))
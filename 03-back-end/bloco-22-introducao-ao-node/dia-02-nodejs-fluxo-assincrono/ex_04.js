const fs = require('fs');

const result = JSON.parse(fs.readFileSync('simpsons.json'))

const charactersLog = () => {
  result.forEach(({id, name}) => {
  console.log(id, '-', name);
})
}
// charactersLog()

const findCharacter = (idp) => {
  return new Promise((resolve, reject) => {
    const character = result.find(({id}) => id === String(idp))
    character ? resolve(character) : reject("id não encontrado")
  })
}

// findCharacter(10)
//   .then(c => console.log(c))
//   .catch(err => console.log(err))

const removeCharacters = () => {
  const newCharacters = result.filter((p) => 
  p.id === '6' || p.id === '10' ?
  false : true
  )
  console.log(newCharacters)
  fs.writeFileSync('simpsons.json', JSON.stringify(newCharacters))
}

// removeCharacters()

const writeNewCharactersFile = () => {
  const character = result.slice(0, 4)
  fs.writeFileSync('simpsonFamily.json', JSON.stringify(character))
} 

// writeNewCharactersFile()

const addNelsonMuntz = () => {
  const resultFamily = JSON.parse(fs.readFileSync('simpsonFamily.json'))
  resultFamily.push({id: '5', name: 'Nelson Muntz'})
  fs.writeFileSync('simpsonFamily.json', JSON.stringify(resultFamily))
}

// addNelsonMuntz()


const changeNelsonMuntz = () => {
  const resultFamily = JSON.parse(fs.readFileSync('simpsonFamily.json'))
  resultFamily[4] = {id:5, name:'Maggie Simpson'}
  fs.writeFileSync('simpsonFamily.json', JSON.stringify(resultFamily))
}

// changeNelsonMuntz()
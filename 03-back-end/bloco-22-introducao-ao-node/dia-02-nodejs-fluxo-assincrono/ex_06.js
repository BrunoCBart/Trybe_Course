const fs = require('fs').promises;
const readLine = require('readline-sync')

const archive = readLine.question('Qual arquvio você quer ler?')

const choosenArchive = async (path) => {
  try {
    const file = await fs.readFile(path, 'utf-8')
    console.log(file)
  } catch {
    console.log('arquivo inexistente')
  }
}

choosenArchive(archive)
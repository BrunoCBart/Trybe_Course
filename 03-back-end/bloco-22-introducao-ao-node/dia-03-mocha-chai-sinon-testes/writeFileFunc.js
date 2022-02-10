const fs = require('fs');

const writeFileFunc = (path, content) => {
  
  try {
    fs.writeFileSync(path, content)
    return 'ok'
  } catch (err) {
    return `erro: diretório ou conteudo inválido`
  }
}

module.exports = writeFileFunc
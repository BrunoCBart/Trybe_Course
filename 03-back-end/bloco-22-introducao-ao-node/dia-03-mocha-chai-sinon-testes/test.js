

const positiveOrNegative = require('./positiveOrNegative')
const writeFileFunc = require('./writeFileFunc')
const { expect } = require('chai')

describe('testa função que verifica se numéro é positivo ou negativo', () => {
  describe('número positivo ou negativo', () => {
    it('número positivo', () => {
      const resposta = positiveOrNegative(5)

      expect(resposta).to.be.equals('positivo')
      
    }) 

    it('número negativo', () => {
      const resposta = positiveOrNegative(-4)

      expect(resposta).to.be.equals('negativo')
    })
  })
  describe('número neutro', () => {
    it('numero neutro', () => {
      const resposta = positiveOrNegative(0)

      expect(resposta).to.be.equals('neutro')
    })
  })

  describe('caso seja passado uma string', () => {
    it('passado uma string', () => {
      const resposta = positiveOrNegative('sickcunt')

      expect(resposta).to.be.equals('o valor deve ser um número')
    })
  })
})

describe('testa função que escreve arquivos', () => {
  describe('escreve conteúdo em um arquivo', () => {
    it('espera resposta ok', () => {
      const response = writeFileFunc('file.txt', 'Sou o conteúdo')

      expect(response).to.be.equals('ok')
    })

    it('espera resposta falha', () => {
      const response = writeFileFunc('./dir/file.txt', '')
      expect(response).to.be.equals('erro: diretório ou conteudo inválido')
    })
  })
})
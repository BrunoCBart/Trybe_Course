const express = require('express')

const CepService = require('../service/Cep')

const Router = express.Router()

Router.get('/', async (req, res) => {
  const allCeps = await CepService.getAll()
  return res.status(200).json({...allCeps})
})

Router.get('/:cep',  async (req, res) => {
  const {cep} = req.params
  
  const cepError = await CepService.isCepFormatValid(cep)

  if(cepError.error) return res.status(cepError.status).json(cepError)

  const cepResult = await CepService.getCep(cep)

  return res.status(200).json({...cepResult})

})

Router.post('/', async (req, res) => {
  const {cep, logradouro, bairro  , localidade, uf} = req.body

  const newCep = {cep, logradouro, bairro, localidade, uf}

  const cepError = await CepService.validatePostCep(cep)
  
  const newCepValidation = await CepService.isNewCepValid(newCep)
  if(newCepValidation) {
    return res.status(newCepValidation.status).json(newCepValidation.error)
  }
  
  if(cepError.error) return res.status(cepError.status).json(cepError)

  CepService.addCep(newCep)


  return res.status(201).json(newCep)

})

module.exports = Router
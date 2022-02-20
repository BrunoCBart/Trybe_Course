const Cep = require('../models/Cep')
const axios = require('axios')
const Joi = require('joi');

const Schema = Joi.object({
  cep: Joi.string()
  .min(9)
  .max(9)
  .required(),
  logradouro: Joi.string()
  .required(),
  bairro: Joi.string()
  .required(),
  localidade: Joi.string()
  .required(),
  uf: Joi.string()
  .pattern(new RegExp(/[A-Z]{2}/))
  .required(),
})

const getAll = async () => {
  const cepResult = await Cep.getAll()
  return cepResult
}

const isNewCepValid = async ({cep, logradouro, bairro, localidade, uf}) => {
  try {
    const newCep = await Schema.validateAsync(
      { cep, logradouro, bairro, localidade, uf});
      Cep.addCep(newCep)
  } catch (err) {
    return { error: { code: 'invalidData', message: err.message}, status: 400 }
  }

}

const isCepFormatValid = (cep) => {
  const cepRegex = /^\d{5}-\d{3}$/;
  if (!cep.match(cepRegex)) return { error: { code: 'invalidData', message: 'CEP inválido'}, status: 400 }
  return true
}

const getCep = async (cep) => {
  const cepResult = await Cep.getCep(cep)
  if (!cepResult) {
    const errorMessage = { error: { code: "notFound", message: "CEP não encontrado" }, status: 404}
   return await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    .then(({data}) => {
      const newCep = {cep: data.cep, logradouro: data.logradouro,
         bairro: data.bairro, localidade: data.localidade, uf: data.uf}
      console.log('didnt find in db')
      addCep(newCep)
      return newCep
    })
    .catch(() => errorMessage)
  }
  return cepResult
}

const addCep = (cep) => {
  return Cep.addCep(cep)
}

const validatePostCep = async (cep) => {
  const cepResult = await getCep(cep)
  if (cepResult) return { error: { code: "alreadyExists", message: "CEP já existente" }, status: 409 }
  return true
}



module.exports = {isCepFormatValid, 
  getCep, addCep, isNewCepValid, validatePostCep, getAll}
const connection = require('./connection')


const getAll = async () => {
  const [result] = await connection.execute('SELECT * FROM cep_lookup.ceps')
  return result
}

const getCep = async (cep) => {
  const [result] = await connection.execute(
    'SELECT * FROM cep_lookup.ceps WHERE cep=?',
    [cep]
  )
  return result[0]
}

const addCep = async ({cep, logradouro, bairro, localidade, uf}) => {
  const [result] = await connection.execute(
    'INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf) VALUES(?, ?, ?, ?, ?)',
    [cep, logradouro, bairro  , localidade, uf]
  )
  return result[0]
}

module.exports = {getCep, addCep, getAll}

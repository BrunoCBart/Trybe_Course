const express = require('express');
const fs = require('fs')
const simpsonsUtils = require('./simpsons-utils');
const crypto = require('crypto');

const app = express()

app.use(express.json())

// const simpsonsArr = JSON.parse(fs.readFileSync('simpsons.json').toString())

app.get('/simpsons', async (req, res) => {
  const token = req.headers.authorization
  if (!token || token.length !== 16) return res.status(401).json({message: 'Token inválido'})
  const simpsons = await simpsonsUtils.getSimpsons()
  res.status(200).json(simpsons)
})

//test
app.get('/simpsons/:id', async (req, res) => {
  const token = req.headers.authorization
  if (!token || token.length !== 16) return res.status(401).json({message: 'Token inválido'})
  const { id } = req.params
  const simpsons = await simpsonsUtils.getSimpsons()
  const character = simpsons.find((simp) => simp.id === id)
  if (!character) return res.status(404).json({ message: 'simpson not found' })
  res.status(200).json(character)
})

app.post('/simpsons', async (req, res) => {
  const token = req.headers.authorization;
  if (!token || token.length !== 16) return res.status(401).json({message: 'Token inválido'})
  const { id, name} = req.body
  const simpsons = await simpsonsUtils.getSimpsons()
  const characterExists = simpsons.find((simp) => simp.id === id)
  if (characterExists) return res.status(409).json({message:'id alredy exists'})
  simpsons.push({id, name})
  await simpsonsUtils.setSimpsons(simpsons)
  res.status(204).end()
})

function generateToken() {
  return crypto.randomBytes(8).toString('hex');
}


app.post('/signup', (req, res) => {
  const {email, password, firstName, phone} = req.body

  if (!email || !password || !firstName || !phone) {
    return res.status(401).json({message: 'missing fileds'})
  }

  const token = generateToken()

  res.status(200).json(token)
})


app.listen(2000, () => {
  console.log('listening on port 2000')
}) 


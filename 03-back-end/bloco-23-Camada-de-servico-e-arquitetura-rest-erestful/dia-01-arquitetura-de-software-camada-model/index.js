const express = require('express');

const app = express();

const User = require('./models/User')

app.use(express.json())

app.post('/user', async (req, res) => {
  const {firstName, lastName, email, password} = req.body;
  const isUserValid = User.isValid(firstName, lastName, email, password)
  if (!isUserValid) return res.status(404).json({message: 'Invalid inputs'})
  await User.add(firstName, lastName, email, password)
  return res.status(200).json({message: 'Usuário adicionado com sucesso'})
})

app.put('/user/:id', async (req, res) => {
  const {id} = req.params
  const {firstName, lastName, email, password} = req.body
  await User.update(id, firstName, lastName, email, password)
  res.status(200).json({message: 'Usuário atualizado'})
})

app.listen(3001, () =>{
  console.log('Port 3001')
})



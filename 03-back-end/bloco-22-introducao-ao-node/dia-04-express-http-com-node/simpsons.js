const express = require('express');
const fs = require('fs')

const app = express()

const simpsonsArr = JSON.parse(fs.readFileSync('simpsons.json').toString())

app.get('/simpsons', (req, res) => {
  res.status(200).json(simpsonsArr)
})

app.get('/simpsons/:id', (req, res) => {
  const { id } = req.params
  const character = simpsonsArr.find((simp) => simp.id === id)
  if (!character) return res.status(404).json({ message: 'simpson not found' })
  res.status(200).json(character)
})

app.listen(2000, () => {
  console.log('listening on port 2000')
}) 
const express = require('express')

const app = express()

app.use(express.json())


app.get('/ping', (req, res) => {
  res.status(200).json({message: 'pong'})
})

app.post('/hello', (req, res) => {
  const { name } = req.body
  res.status(200).json({message: `Hello ${name}`})

})

app.post('/gretings', (req, res) => {
  const { name, age } = req.body
  if (age > 17) return req.status(200).json({message: `Hello, ${name}!`})
  req.status(401).json({ message: 'Unauthorized'})
})


app.listen(5000, () => {
  console.log('listening on port 5000')
}) 
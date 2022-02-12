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

app.listen(5000, () => {
  console.log('listening on port 5000')
}) 
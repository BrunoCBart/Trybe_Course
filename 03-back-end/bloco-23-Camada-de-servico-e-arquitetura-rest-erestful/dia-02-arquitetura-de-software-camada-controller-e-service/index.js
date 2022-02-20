const express = require('express')

const cepRouter = require('./controllers/Cep')

const app = express()

app.use(express.json())

const PORT = 3002;


app.use('/cep', cepRouter)

app.get('/ping', (req, res) => {
  return res.status(200).json({message: 'pong'});
})

app.listen(PORT, () => console.log('Ouvindo na porta', PORT));

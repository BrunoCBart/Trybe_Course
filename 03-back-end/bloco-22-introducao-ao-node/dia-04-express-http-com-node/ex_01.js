const express = require('express')

const app = express()


app.get('/ping', (req, res) => {
  res.status(200).json({message: 'pong'})
})

app.listen(5000, () => {
  console.log('listening on port 5000')
}) 
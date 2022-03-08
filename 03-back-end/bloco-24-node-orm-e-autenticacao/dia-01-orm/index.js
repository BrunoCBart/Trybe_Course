const express = require('express');

const app = express();

const PORT = 3000;

const booksController = require('./controllers/booksController');

app.use(express.json());

app.use('/books', booksController);

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});

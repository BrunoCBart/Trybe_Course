const express = require('express');
const { Book } = require('../models/index');

const booksRouter = express.Router();

booksRouter.get('/', async (req, res) => {
  try {
    const books = await Book.findAll();
    return res.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    res.status(500).json('Algo deu errado');
  }
});

booksRouter.get('/:id', async (req, res) => {
  const {id}  = req.params
  try {
    const book = await Book.findOne({where: {id} })
    if (!book) return res.status(404).json({message: 'book not found'})
    return res.status(200).json(book)
    
  } catch (error) {
    console.log(error.message);
    res.status(500).json('Algo deu errado');
  }
})

booksRouter.post('/', async (req, res) => {
  const {title, pageQuantity} = req.body
  const date = Date.now()

  try {
    const newBook = await Book.create({title, pageQuantity, createdAt: date})
    return res.status(201).json(newBook)
  } catch (error) {
    console.log(error.message);
    res.status(500).json('Algo deu errado');
  }
})

booksRouter.put('/:id', async (req, res) => {
  const {id} = req.params
  const {title, pageQuantity} = req.body
  const date = Date.now()
  try {
    const updatedBook = await Book.update({title, pageQuantity, createdAt: date}, {where: {id}})
    return res.status(204).json(updatedBook)
  } catch (error) {
    console.log(error.message);
    res.status(500).json('Algo deu errado');
  }
})

booksRouter.delete('/:id', async (req, res) => {
  const {id} = req.params
  try {
    const deletedBook = await Book.destroy({where: {id}})
    return res.status(204).json(deletedBook);
    
  } catch (error) {
    console.log(error.message);
    res.status(500).json('Algo deu errado');
  }
})

module.exports = booksRouter;

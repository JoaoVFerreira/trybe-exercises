const express = require('express');

const { Book } = require('../models');

const router = express.Router();
const mayDayERROR = { message: 'Mayday ERRROR!!!' };

router.get('/', async (_req, res) => {
  try {
    const allBooks = await Book.findAll({ order: [
      ['id', 'DESC']
    ]});
    return res.status(200).json(allBooks);
  } catch (error) {
    console.log(error);
    return res.status(500).json(mayDayERROR)
  }
});

router.get('/search', async (req, res) => {
  try {
    const { name } = req.query;
    console.log(typeof name);
    const searchByAuthor = await Book.findAll({ where: { author: 'Tanjiro Slayer' } })
    return res.status(200).json(searchByAuthor);
  } catch (error) {
    console.log(error);
    return res.status(500).json(mayDayERROR);
  }
})

router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    return res.status(200).json(book);
  } catch (error) {
    console.log(error);
    return res.status(500).json(mayDayERROR)
  }
});

router.post('/', async (req, res) => {
  try {
    const insertBook = await Book.create(req.body)
    return res.status(200).json(insertBook)
  } catch (error) {
    console.log(error);
    return res.status(500).json(mayDayERROR)
  }
})

router.post('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updateBook = await Book.update(req.body, {where: { id }});
    return res.status(200).json(updateBook)
  } catch (error) {
    console.log(error);
    return res.status(500).json(mayDayERROR)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.destroy({where: {
      id
    }})
    return res.status(204).json(deletedBook);
  } catch (error) {
    console.log(error);
    return res.status(500).json(mayDayERROR);
  }
})

module.exports = router;
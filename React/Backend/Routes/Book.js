const express = require('express');
const Book = require('../Models/Book');


const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const books = await Book.find().lean();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

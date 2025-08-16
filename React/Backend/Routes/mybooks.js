const express = require('express');
const MyBook = require('../Models/Mybook');
const Book = require('../Models/Book');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) => {
  try {
    const items = await MyBook.find({ userId: req.user._id }).populate('bookId').lean();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/:bookId', async (req, res) => {
  try {
    const { bookId } = req.params;
    const exists = await MyBook.findOne({ userId: req.user._id, bookId });
    if (exists) return res.status(400).json({ message: 'Already in My Books' });
    const book = await Book.findById(bookId);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    const myBook = await MyBook.create({ userId: req.user._id, bookId });
    res.json(myBook);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.patch('/:bookId/status', async (req, res) => {
  try {
    const { bookId } = req.params;
    const { status } = req.body;
    const item = await MyBook.findOneAndUpdate(
      { userId: req.user._id, bookId },
      { status },
      { new: true }
    );
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.patch('/:bookId/rating', async (req, res) => {
  try {
    const { bookId } = req.params;
    const { rating } = req.body;
    const item = await MyBook.findOneAndUpdate(
      { userId: req.user._id, bookId },
      { rating },
      { new: true }
    );
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

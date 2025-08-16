require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const connectDB = require('./config/db');

const authRoutes = require('./routes/auth');
const booksRoutes = require('./routes/books');
const mybooksRoutes = require('./routes/mybooks');

const app = express();
const PORT = process.env.PORT || 5000;

connectDB(process.env.MONGO_URI);

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true
}));

app.use('/api/auth', authRoutes);
app.use('/api/books', booksRoutes);
app.use('/api/mybooks', mybooksRoutes);

app.get('/', (req, res) => res.send('My Library API is running'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

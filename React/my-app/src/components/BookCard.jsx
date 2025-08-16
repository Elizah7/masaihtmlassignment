import React, { useContext } from 'react';
import axios from '../api/axiosInstance';
import { AuthContext } from '../context/AuthContext';

const BookCard = ({ book, onAdded }) => {
  const { user } = useContext(AuthContext);

  const handleAdd = async () => {
    if (!user) {
      alert('Please login to add book to My Books');
      return;
    }
    try {
      await axios.post(`/mybooks/${book._id}`);
      alert('Added to My Books');
      if (onAdded) onAdded();
    } catch (err) {
      alert(err.response?.data?.message || 'Error adding book');
    }
  };

  return (
    <div className="book-card">
      <img src={book.coverImage} alt={book.title} />
      <h3>{book.title}</h3>
      <p><em>{book.author}</em></p>
      <div className="card-footer">
        <span>{book.availability ? 'Available' : 'Not available'}</span>
        <button onClick={handleAdd}>Want to Read</button>
      </div>
    </div>
  );
};

export default BookCard;

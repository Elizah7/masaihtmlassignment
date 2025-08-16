import React from 'react';
import axios from '../api/axiosInstance';

const MyBookCard = ({ item, onUpdated }) => {
  const { bookId: book, status, rating } = item;

  const handleStatusChange = async (e) => {
    try {
      await axios.patch(`/mybooks/${book._id}/status`, { status: e.target.value });
      if (onUpdated) onUpdated();
    } catch (err) {
      alert('Error updating status');
    }
  };

  const handleRating = async (newRating) => {
    try {
      await axios.patch(`/mybooks/${book._id}/rating`, { rating: newRating });
      if (onUpdated) onUpdated();
    } catch (err) {
      alert('Error updating rating');
    }
  };

  return (
    <div className="mybook-card">
      <img src={book.coverImage} alt={book.title} />
      <div>
        <h4>{book.title}</h4>
        <p>{book.author}</p>
        <select value={status} onChange={handleStatusChange}>
          <option>Want to Read</option>
          <option>Currently Reading</option>
          <option>Read</option>
        </select>
        <div className="rating">
          {[1,2,3,4,5].map(n => (
            <button key={n} onClick={() => handleRating(n)} className={n === rating ? 'active' : ''}>
              {n}★
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyBookCard;

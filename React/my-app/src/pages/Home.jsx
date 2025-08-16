import React, { useEffect, useState } from 'react';
import axios from '../api/axiosInstance';
import BookCard from '../components/BookCard';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const res = await axios.get('/books');
      setBooks(res.data);
    } catch (err) {
      alert('Failed to fetch books');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchBooks(); }, []);

  return (
    <div>
      <h2>All Books</h2>
      {loading ? <p>Loading books...</p> : (
        <div className="grid">
          {books.map(b => <BookCard key={b._id} book={b} onAdded={fetchBooks} />)}
        </div>
      )}
    </div>
  );
};

export default Home;

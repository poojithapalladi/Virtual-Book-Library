import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import booksData from '../data/books.json'; 

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredBooks = booksData.books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm) ||
    book.author.toLowerCase().includes(searchTerm) ||
    book.genre.toLowerCase().includes(searchTerm)
  );

  return (
    <div>
      <h1>Book Library</h1>
      <input
        type="text"
        placeholder="Search by title, author, genre..."
        onChange={handleSearch}
      />
      <div className="book-list">
        {filteredBooks.map((book) => (
          <div key={book.id} className="book-card">
            <Link to={`/book/${book.id}`}>
              <h2>{book.title}</h2>
              <p>{book.author}</p>
              <p>{book.genre}</p>
              <p>Rating: {book.rating}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

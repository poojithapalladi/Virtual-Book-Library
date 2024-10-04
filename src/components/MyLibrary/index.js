import React, { useContext } from 'react';
import { LibraryContext } from '../context/LibraryContext';

const MyLibrary = () => {
  const { library, removeFromLibrary } = useContext(LibraryContext);

  return (
    <div>
      <h1>My Library</h1>
      <div className="library-list">
        {library.map((book) => (
          <div key={book.id} className="book-card">
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.genre}</p>
            <button onClick={() => removeFromLibrary(book.id)}>
              Remove from Library
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyLibrary;

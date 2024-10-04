import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import booksData from '../data/books.json';
import { LibraryContext } from '../context/LibraryContext';

const BookDetails = () => {
  const { id } = useParams();
  const book = booksData.books.find((book) => book.id === parseInt(id));
  const { addToLibrary } = useContext(LibraryContext);

  return (
    <div>
      <h1>{book.title}</h1>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Rating: {book.rating}</p>
      <p>Description: {book.description}</p>
      <p>Publication Year: {book.publication_year}</p>
      <button onClick={() => addToLibrary(book)}>Add to My Library</button>
    </div>
  );
};

export default BookDetails;

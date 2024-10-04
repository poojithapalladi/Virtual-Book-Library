import React from 'react';
import { LibraryProvider } from './context/LibraryContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import BookDetails from './components/BookDetails';
import MyLibrary from './components/MyLibrary';

const App = () => {
  return (
    <LibraryProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/my-library" element={<MyLibrary />} />
      </Routes>
    </Router>
  </LibraryProvider>
   );
};

export default App;

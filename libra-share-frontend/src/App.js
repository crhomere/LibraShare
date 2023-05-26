import  { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import EntryPage from './pages/LandingPage/LandingPage';
import HomePage from './pages/HomePage/HomePage';
import Register from './pages/Register/Register';
import Navbar from './components/Navbar/Navbar';
import Cart from './components/Cart/Cart';
import BookList from './components/BookList/BookList';
import BookDetails from './components/BookDetails/BookDetails';
import ReviewForm from './components/ReviewForm/ReviewForm';
import UserBooks from './components/UserBooks/UserBooks';
import UserProfile from './components/UserProfile/UserProfile';
import SearchBar from './components/SearchBar/SearchBar';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<EntryPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<HomePage />} />

          <Route path="*" element={<ErrorPage />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/library" element={<BookList />} />
          <Route path="/books/:bookId" element={<BookDetails />} />
          <Route path="/books/:bookId/review" element={<ReviewForm />} />
          <Route path="/user/books" element={<UserBooks />} />
          <Route path="/user-profile/:userId" element={<UserProfile />} />
          <Route path="/search" element={<SearchBar />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

import  { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import LoginForm from './components/LoginForm/LoginForm';
import SignupForm from './components/SignupForm/SignupForm';
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
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/library" element={<BookList />} />
          <Route path="/books/:bookId" element={<BookDetails />} />
          <Route path="/books/:bookId/review" element={<ReviewForm />} />
          <Route path="/user/books" element={<UserBooks />} />
          <Route path="/user/profile" element={<UserProfile />} />
          <Route path="/search" element={<SearchBar />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

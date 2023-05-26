import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import EntryPage from './pages/EntryPage/EntryPage';
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
import ErrorPage from './pages/ErrorPage/ErrorPage';

const App = () => {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath === '/' || currentPath === '/register') {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, []);

  return (
    <div className="app">
      <Router>
        {showNavbar && <Navbar />}
        <Routes>
          <Route path="/" element={<EntryPage />} />
          <Route path="/register" element={<Register  setShowNavbar={setShowNavbar} />} />
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

import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import './App.css';

import EntryPage from './pages/EntryPage/EntryPage';
import Dash from './pages/Dash/Dash';
import Register from './pages/Register/Register';
import Navbar from './components/Navbar/Navbar';
import Cart from './components/Cart/Cart';
import BookList from './components/BookList/BookList';
import BookDetails from './components/BookDetails/BookDetails';
import ReviewForm from './components/ReviewForm/ReviewForm';
import SearchBar from './components/SearchBar/SearchBar';
import ErrorPage from './pages/ErrorPage/ErrorPage';

import { useSelector } from 'react-redux';

const PrivateRoute = ({ element }) => {
  const { user } = useSelector((store) => store.user);

  return user ? <>{element}</> : <Navigate to="/" />;
};

const App = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const { user } = useSelector((store) => store.user);
  const isLoggedIn = !!user;

  return (
    <div className="app">
      <Router>
        {showNavbar && isLoggedIn && <Navbar setShowNavbar={setShowNavbar} />}
        <Routes>
          <Route path="/" element={<EntryPage />} />
          <Route
            path="/register"
            element={<Register setShowNavbar={setShowNavbar} />}
          />

          <Route path="/dash/*" element={<PrivateRoute element={<Dash />} />} />

          <Route path="/cart" element={<PrivateRoute element={<Cart />} />} />
          <Route
            path="/library"
            element={<PrivateRoute element={<BookList />} />}
          />
          <Route
            path="/books/:bookId"
            element={<PrivateRoute element={<BookDetails />} />}
          />
          <Route
            path="/books/:bookId/review"
            element={<PrivateRoute element={<ReviewForm />} />}
          />
          <Route
            path="/search"
            element={<PrivateRoute element={<SearchBar />} />}
          />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

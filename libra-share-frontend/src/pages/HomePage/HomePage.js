import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllBooks } from '../../features/book/bookSlice';
import SearchBar from '../../components/SearchBar/SearchBar';
import BookCard from '../../components/BookCard/BookCard';
import { Row, Col } from 'react-bootstrap';

const HomePage = () => {
  const dispatch = useDispatch();
  const { books, loading, error } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchAllBooks());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Library Books</h1>
      <SearchBar />
      <Row>
        {books.map((book) => (
          <Col key={book.id} sm={4}>
            <BookCard {...book} genre={book.genre[0]} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomePage;

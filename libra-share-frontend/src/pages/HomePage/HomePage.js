import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllBooks } from '../../features/book/bookSlice';
import SearchBar from '../../components/SearchBar/SearchBar';
import BookCard from '../../components/BookCard/BookCard';
import { Row, Col } from 'react-bootstrap';

const HomePage = () => {
  const [ratingUpdated, setRatingUpdated] = useState(false);
  const dispatch = useDispatch();
  const { books, loading, error } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchAllBooks());
  }, [dispatch, ratingUpdated]);

  console.log('books', books);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleRatingUpdate = () => {
    setRatingUpdated(!ratingUpdated); // Toggle the ratingUpdated state
  };

  return (
    <div>
      <h1>Library Books</h1>
      <SearchBar />
      <Row>
        {books.map((book) => (
          <Col key={book.id} sm={4}>
            <BookCard
              {...book}
              genre={book.genre[0]}
              onUpdateRating={handleRatingUpdate}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomePage;

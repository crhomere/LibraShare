import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllBooks } from '../../features/book/bookSlice';
import SearchBar from '../../components/SearchBar/SearchBar';
import BookCard from '../../components/BookCard/BookCard';
import { exchangeBook } from '../../features/book/bookSlice';
import { Row, Col } from 'react-bootstrap';

const HomePage = () => {
  const [ratingUpdated, setRatingUpdated] = useState(false);
  const dispatch = useDispatch();
  const { books, loading, error } = useSelector((state) => state.books);
  const { user } = useSelector((store) => store.user);
  const [disabledBooksMap, setDisabledBooksMap] = useState({});

  useEffect(() => {
    dispatch(fetchAllBooks());
  }, [dispatch, ratingUpdated]);

  useEffect(() => {
    const userOwnedBooksMap = {};

    books.forEach((book) => {
      console.log('book?.userDto?.id', book?.userDto?.id);
      console.log('user.id ', user.id);
      if (book?.userDto?.id === user.id) {
        userOwnedBooksMap[book.bookDto?.title] = true;
      }
    });

    setDisabledBooksMap(userOwnedBooksMap);
  }, [books, user.id]);

  console.log(disabledBooksMap);

  const handleRatingUpdate = () => {
    setRatingUpdated(!ratingUpdated);
  };

  const handleExchangeBook = (fromUserId, bookId, toUserId) => {
    dispatch(exchangeBook({ fromUserId, bookId, toUserId }));
  };

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
        {books.map((book) => {
          // const isOwnedByLoggedInUser = book.userDto?.id === user.id;
          const disableExchange = disabledBooksMap[book.bookDto?.title];

          return (
            <Col key={book.id} sm={4}>
              <BookCard
                book={book}
                {...book.bookDto}
                {...book.userDto}
                genre={book.bookDto?.genre[0]}
                onUpdateRating={handleRatingUpdate}
                onExchangeBook={handleExchangeBook}
                disableExchange={disableExchange}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default HomePage;

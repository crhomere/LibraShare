import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllBooks } from '../../features/book/bookSlice';
import SearchBar from '../../components/SearchBar/SearchBar';
import BookCard from '../../components/BookCard/BookCard';
import { exchangeBook } from '../../features/book/bookSlice';
import { Row, Col } from 'react-bootstrap';

const HomePage = () => {
  const [ratingUpdated, setRatingUpdated] = useState(false);
  const [zipcode, setZipcode] = useState('');
  const [searchedZipCode, setSearchedZipCode] = useState('');
  const [showMap, setshowMap] = useState(true);
  const dispatch = useDispatch();
  const { books, loading, error } = useSelector((state) => state.books);
  const { user } = useSelector((store) => store.user);
  const [disabledBooksMap, setDisabledBooksMap] = useState({});
  const [bookLocations, setBookLocations] = useState({});
  const [bookLocationCopy, setBookLocationCopy] = useState({});

  useEffect(() => {
    dispatch(fetchAllBooks());
  }, [dispatch, ratingUpdated]);

  useEffect(() => {
    const userOwnedBooksMap = {};

    books.forEach((book) => {
      if (book?.userDto?.id === user.id) {
        userOwnedBooksMap[book.bookDto.title] = true;
      }
    });

    let booksOwned = [];
    books.forEach((book) => {
      if (book.userDto) {
        booksOwned.push({
          zipcode: book.userDto.zipcode,
          name: book.userDto.firstName,
          position: { lat: +book.userDto.latitude, lng: +book.userDto.longitude }
        });
      }
    });

    setBookLocations(booksOwned);
    setBookLocationCopy(booksOwned);
    setDisabledBooksMap(userOwnedBooksMap);

  }, [books, user.id]);

  useEffect(() => {
    setshowMap(true);
  }, [searchedZipCode]);

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

  const handleZipcodeChange = (e) => {
    setZipcode(e.target.value);
  };

  const handleZipcodeSubmit = (e) => {
    e.preventDefault();
    setSearchedZipCode(zipcode);
    resetBookLocations();
  };

  const resetBookLocations = () => {
    setBookLocations(bookLocationCopy);
  }

  return (
    <div>
      <h1>Library Books</h1>
      <SearchBar
        onZipcodeChange={handleZipcodeChange}
        onZipcodeSubmit={handleZipcodeSubmit}
        userZipcode={user.zipcode}
        showMap={showMap}
        setshowMap={setshowMap}
        bookLocations={bookLocations}
        setBookLocations={setBookLocations}
      />
      <Row>
        {books.map((book) => {
          const isOwnedByLoggedInUser = book.userDto?.id === user.id;
          const disableExchange = disabledBooksMap[book.bookDto.title];

          return !searchedZipCode || searchedZipCode == book.userDto?.zipcode ? (
            <Col key={book.id} sm={4}>
              <BookCard
                book={book}
                {...book.bookDto}
                {...book.userDto}
                genre={book.bookDto.genre[0]}
                onUpdateRating={handleRatingUpdate}
                onExchangeBook={handleExchangeBook}
                disableExchange={disableExchange}
              />
            </Col>
          ) : null
        })}
      </Row>
    </div>
  );
};

export default HomePage;

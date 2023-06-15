import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { renderRatingStars } from '../../utils/renderRatingStars';
import { Card, Button } from 'react-bootstrap';
import BookDetailsModal from '../BookDetailsModal/BookDetailsModal';

import './BookCard.css';

const BookCard = ({
  book,
  bookId,
  title,
  description,
  image,
  author,
  isbn,
  genre,
  rating,
  onUpdateRating,
  id,
  firstName,
  lastName,
  city,
  state,
  zipcode,
  onExchangeBook,
  disableExchange,
  distance
}) => {
  const [showModal, setShowModal] = useState(false);
  const { user } = useSelector((store) => store.user);

  const handleOpenModal = (event) => {
    event.stopPropagation();
    setShowModal(true);
  };

  const handleCloseModal = (event) => {
    event.stopPropagation();
    setShowModal(false);
    onUpdateRating();
  };

  const handleExchange = (event) => {
    event.stopPropagation();
    if (id !== undefined) {
      onExchangeBook(id, bookId, user.id);
    }
  };

  return (
    <div className="book-card-container" onClick={handleOpenModal}>
      <Card className="book-card">
        <Card.Img variant="top" src={image} className="book-card-image" />
        <div className="rating-stars center">{renderRatingStars(rating)}</div>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>Author: {author}</Card.Text>
          <Card.Text>Genre: {genre}</Card.Text>
          <Card.Text>
            Owner: {firstName} {lastName}
          </Card.Text>
          <Card.Text>
            Location: {city || ''}{city && state ? ', ' : ''} {state || ''} {zipcode || ''}
          </Card.Text>
          {/* <Card.Text>
            Distance: {distance ? distance.text : ''}
          </Card.Text> */}
        </Card.Body>
        <Button
          variant="primary"
          onClick={handleExchange}
          disabled={disableExchange}
        >
          Exchange
        </Button>
      </Card>
      <BookDetailsModal
        book={{
          bookId,
          title,
          description,
          image,
          author,
          isbn,
          genre,
          rating,
        }}
        showModal={showModal}
        handleCloseModal={handleCloseModal}
      />
    </div>
  );
};

export default BookCard;
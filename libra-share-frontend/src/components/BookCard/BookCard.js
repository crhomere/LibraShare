import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { renderRatingStars } from '../../utils/renderRatingStars';
import { Card } from 'react-bootstrap';
import BookDetailsModal from '../BookDetailsModal/BookDetailsModal';
import StyledButton from '../StyledButton/StyledButton';

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
  onExchangeBook,
  disableExchange,
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
    <div>
      <div className="book-card-container" onClick={handleOpenModal}>
        <Card className="book-card">
          <Card.Img variant="top" src={image} className="book-card-image" />

          <Card.Body>
            <Card.Title>{renderRatingStars(rating)}</Card.Title>
            <Card.Title>{title}</Card.Title>
            <Card.Text>Author: {author}</Card.Text>
            <Card.Text>Genre: {genre}</Card.Text>
            <Card.Text>
              <span className="book-owner-title">Owner:</span> {firstName}{' '}
              {lastName}
            </Card.Text>
          </Card.Body>
          <div className="book-card-bt-container">
            <StyledButton onClick={handleExchange} disabled={disableExchange}>
              Exchange
            </StyledButton>
            <StyledButton onClick={handleExchange}>Wish list</StyledButton>
          </div>
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
    </div>
  );
};

export default BookCard;

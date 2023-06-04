import { useState } from 'react';
import { renderRatingStars } from '../../utils/renderRatingStars';
import { Card } from 'react-bootstrap';
import BookDetailsModal from '../BookDetailsModal/BookDetailsModal';

import './BookCard.css';

const BookCard = ({
  bookId,
  title,
  description,
  image,
  author,
  isbn,
  genre,
  rating,
  onUpdateRating,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = (event) => {
    event.stopPropagation();
    setShowModal(true);
  };

  const handleCloseModal = (event) => {
    event.stopPropagation();
    setShowModal(false);
    onUpdateRating();
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
        </Card.Body>
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

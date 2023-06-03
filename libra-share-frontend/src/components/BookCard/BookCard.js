import { useState } from 'react';
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
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = (event) => {
    event.stopPropagation();
    setShowModal(false);
  };

  return (
    <div className="book-card-container" onClick={handleOpenModal}>
      <Card className="book-card">
        <Card.Img variant="top" src={image} className="book-card-image" />
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
        }}
        showModal={showModal}
        handleCloseModal={handleCloseModal}
      />
    </div>
  );
};

export default BookCard;

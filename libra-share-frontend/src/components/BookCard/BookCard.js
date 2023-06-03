import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from 'react-bootstrap';
import BookDetailsModal from '../BookDetailsModal/BookDetailsModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar as solidStar,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { getRating } from '../../features/rating/ratingSlice';

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
  const { rating } = useSelector((state) => state.rating);
  const [showModal, setShowModal] = useState(false);

  console.log("rating", rating);

  const dispatch = useDispatch();

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = (event) => {
    event.stopPropagation();
    setShowModal(false);
  };

  useEffect(() => {
    dispatch(getRating(bookId));
  }, []);

  const renderRatingStars = () => {
    const starCount = 5;
    const filledStars = Math.round(rating);
    const stars = [];

    for (let i = 1; i <= starCount; i++) {
      const starIcon = i <= filledStars ? solidStar : regularStar;

      stars.push(
        <FontAwesomeIcon key={i} icon={starIcon} className="star-icon" />
      );
    }

    return stars;
  };

  return (
    <div className="book-card-container" onClick={handleOpenModal}>
      <Card className="book-card">
        <Card.Img variant="top" src={image} className="book-card-image" />
        <div className="rating-stars center">{renderRatingStars()}</div>
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

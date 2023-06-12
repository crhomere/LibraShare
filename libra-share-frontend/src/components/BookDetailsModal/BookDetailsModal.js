import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { renderRatingStars } from '../../utils/renderRatingStars';
import { Modal, Button, Form } from 'react-bootstrap';
import { addRating } from '../../features/rating/ratingSlice';
import StyledButton from '../StyledButton/StyledButton';

import './BookDetailsModal.css';

const BookDetailsModal = ({
  book,
  showModal,
  handleCloseModal,
}) => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleAddReview = (event) => {
    event.preventDefault();

    console.log('comment', comment);
    console.log('rating', rating);
    const ratingDto = {
      comment,
      rating,
    };
    console.log('user.id', user.id);
    console.log('book.bookId', book.bookId);
    dispatch(addRating({ userId: user.id, bookId: book.bookId, ratingDto }));
    setRating(0);
    setComment('');
  };

  const isSubmitDisabled = rating === 0 || comment.trim().length < 10;

  return (
    <Modal
      show={showModal}
      onHide={handleCloseModal}
      className="book-modal-container"
    >
      <Modal.Header>
        <Modal.Title>{book.title}</Modal.Title>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
      </Modal.Header>
      <Modal.Body>
        <div className="img-section">
          <img src={book.image} alt={book.title} />
          <p className="rating-stars center">
            {renderRatingStars(book.rating)}
          </p>
        </div>

        <div className="info-section">
          <p>
            <span className="header">Author:</span> {book.author}
          </p>
          <p>
            <span className="header">Title:</span> {book.title}
          </p>
          <p>
            <span className="header">Genre:</span> {book.genre}
          </p>
          <p>
            <span className="header">Description:</span> {book.description}
          </p>
          <p>
            <span className="header">ISBN:</span> {book.isbn}
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>

      <Form onSubmit={handleAddReview} className='rating-container'>
        <Form.Group controlId="rating">
          <Form.Label>Rating:</Form.Label>
          <Form.Control
            as="select"
            value={rating}
            onChange={(e) => setRating(parseInt(e.target.value))}
            defaultValue={0}
          >
            <option value={0} disabled hidden>
              Select rating
            </option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="comment">
          <Form.Label>Comment:</Form.Label>
          <p className="text-note">*Put at least 10 words to submit.</p>
          <Form.Control
            as="textarea"
            rows={5}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </Form.Group>
        <Button className='submit-review-btn' variant="secondary" type="submit" disabled={isSubmitDisabled}>
          Submit Review
        </Button>
      </Form>
    </Modal>
  );
};

export default BookDetailsModal;

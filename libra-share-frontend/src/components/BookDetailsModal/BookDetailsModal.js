import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button, Form } from 'react-bootstrap';
import { addRating } from '../../features/rating/ratingSlice';

import './BookDetailsModal.css';

const BookDetailsModal = ({ book, showModal, handleCloseModal }) => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [showReviewForm, setShowReviewForm] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleAddReviewClick = () => {
    setShowReviewForm(true);
  };

  const handleAddReview = (event) => {
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
    setShowReviewForm(false);
  };

  return (
    <Modal
      show={showModal}
      onHide={handleCloseModal}
      className="book-modal-container"
    >
      <Modal.Header>
        <Modal.Title>{book.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="img-section">
          <img src={book.image} alt={book.title} />
        </div>
        <div className="info-section">
          <p>
            <span className="header">Author:</span> {book.author}
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
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
        {!showReviewForm && (
          <Button variant="secondary" onClick={handleAddReviewClick}>
            Add Review
          </Button>
        )}
        {showReviewForm && (
          <>
            <Form.Group>
              <Form.Label>Rating:</Form.Label>
              <Form.Control
                as="select"
                value={rating}
                onChange={(e) => setRating(parseInt(e.target.value))}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Comment:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </Form.Group>
            <Button variant="secondary" onClick={handleAddReview}>
              Submit Review
            </Button>
          </>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default BookDetailsModal;

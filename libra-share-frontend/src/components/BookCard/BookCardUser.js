import { useState } from 'react';
import { useDispatch } from 'react-redux';

import BookDetailsModal from '../BookDetailsModal/BookDetailsModal';
import { renderRatingStars } from '../../utils/renderRatingStars';

import { Card, Button, Container, Modal, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrashAlt,
  faEdit,
  faStar as solidStar,
} from '@fortawesome/free-solid-svg-icons';
import { updateBook } from '../../features/book/bookSlice';

import './BookCardUser.css';

const BookCardUser = ({
  bookId,
  title,
  image,
  author,
  description,
  genre,
  isbn,
  rating,
  onDelete,
}) => {
  const [showAddRating, setShowAddRating] = useState(true);
  const [showUpdateBookModal, setUpdateBookModal] = useState(false);
  const [showRateBookModal, setShowRateBookModal] = useState(false);
  const [descriptionUpdate, setDescriptionUpdate] = useState(description);
  const [authorUpdate, setAuthorUpdate] = useState(author);
  const [genreUpdate, setGenreUpdate] = useState(genre[0]);

  const dispatch = useDispatch();

  const handleUpdate = () => {
    setUpdateBookModal(true);
  };

  const handleDelete = () => {
    onDelete(bookId);
  };

  const handleModalClose = () => {
    setUpdateBookModal(false);
  };

  const handleRateModalClose = () => {
    setShowRateBookModal(false);
  };
  const handleRateModalOpen = () => {
    setShowRateBookModal(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const updatedBook = {
      author: authorUpdate,
      description: descriptionUpdate,
      genre: [genreUpdate],
    };

    dispatch(updateBook({ bookId: bookId, bookDto: updatedBook }));

    setUpdateBookModal(false);
  };

  return (
    <Container className="book-card-container">
      <div className="book-info">
        <Card className="book-card">
          <Card.Img variant="top" src={image} className="book-card-image" />
        </Card>
      </div>
      <div className="book-title">
        <div className="rating-stars">{renderRatingStars(rating)}</div>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {' '}
          <span className="author-header">Author:</span> {author}{' '}
        </Card.Text>
        <Card.Text>
          <span className="description-header">Description:</span> {description}
        </Card.Text>
      </div>
      <div className="actions">
        <Button className="edit-book-btn" onClick={handleUpdate}>
          <FontAwesomeIcon icon={faEdit} />
        </Button>
        <Button className="rate-book-btn" onClick={handleRateModalOpen}>
          <FontAwesomeIcon icon={solidStar} />
        </Button>
        <Button className="delete-book-btn" onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </Button>
      </div>

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
        showAddRatingOnUserDash={showAddRating}
        showModal={showRateBookModal}
        handleCloseModal={handleRateModalClose}
      />

      <Modal show={showUpdateBookModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                value={descriptionUpdate}
                onChange={(e) => setDescriptionUpdate(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="author">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                value={authorUpdate}
                onChange={(e) => setAuthorUpdate(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="genre">
              <Form.Label>Genre</Form.Label>
              <Form.Control
                type="text"
                value={genreUpdate}
                onChange={(e) => setGenreUpdate(e.target.value)}
              />
            </Form.Group>
            <Button variant="secondary" type="submit" className="mt-3">
              Update
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default BookCardUser;

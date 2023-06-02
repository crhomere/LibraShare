import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Card, Button, Container, Modal, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import { updateBook } from '../../features/book/bookSlice';

import './BookCardUser.css';

const BookCardUser = ({ bookId, title, image, author, description, genre }) => {
  const [showModal, setShowModal] = useState(false);
  const [descriptionUpdate, setDescriptionUpdate] = useState(description);
  const [authorUpdate, setAuthorUpdate] = useState(author);
  const [genreUpdate, setGenreUpdate] = useState(genre[0]);

  console.log(bookId)

  const dispatch = useDispatch();

  const handleDelete = () => {};

  const handleUpdate = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const updatedBook = {
      author: authorUpdate,
      description: descriptionUpdate,
      genre: [genreUpdate],
    };

    dispatch(updateBook({ bookId: bookId, bookDto: updatedBook }));

    setShowModal(false);
  };

  return (
    <Container className="book-card-container">
      <div className="book-info">
        <Card className="book-card">
          <Card.Img variant="top" src={image} className="book-card-image" />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>Author: {author}</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="actions">
        <Button variant="danger" onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </Button>
        <Button variant="primary" onClick={handleUpdate}>
          <FontAwesomeIcon icon={faEdit} />
        </Button>
      </div>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
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
            <Button variant="primary" type="submit">
              Update
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default BookCardUser;

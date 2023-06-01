import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import './BookCardUser.css';

const BookCardUser = ({ title, image, author }) => {
  const handleDelete = () => {};

  const handleUpdate = () => {};

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
    </Container>
  );
};

export default BookCardUser;

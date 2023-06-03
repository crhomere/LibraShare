import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './BookDetailsModal.css';

const BookDetailsModal = ({ book, showModal, handleCloseModal }) => {
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
            {' '}
            <span className="header">Author:</span> {book.author}
          </p>
          <p>
            {' '}
            <span className="header"> Genre:</span> {book.genre}
          </p>
          <p>
            {' '}
            <span className="header"> Description:</span> {book.description}
          </p>
          <p>
            {' '}
            <span className="header">ISBN:</span> {book.isbn}
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BookDetailsModal;

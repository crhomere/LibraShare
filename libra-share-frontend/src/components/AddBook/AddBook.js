import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createBook } from '../../features/book/bookSlice';
import { Container, Form, Button } from 'react-bootstrap';
import './AddBook.css';

const AddBook = () => {
  const dispatch = useDispatch();
  const [isbn, setIsbn] = useState('');
  const { user } = useSelector((store) => store.user);

  const handleAddBook = () => {
    const userId = user.id;
    const bookDto = { isbn };
    dispatch(createBook({ userId, bookDto }));
    setIsbn('');
  };

  return (
    <Container className="add-book-container">
      <div className="add-book">
        <h1 className="text-center">Add Book</h1>
        <p className="text-center">
          To add a book to your collection, please enter the ISBN <br />
          (International Standard Book Number) of the book below:
        </p>
        <Form className="text-center">
          <Form.Group controlId="isbn">
            <Form.Label>ISBN:</Form.Label>
            <Form.Control
              type="text"
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
              className="custom-input"
            />
          </Form.Group>
          <Button onClick={handleAddBook} className="add-book-btn">
            Add Book
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default AddBook;

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createBook } from '../../features/book/bookSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const [isbn, setIsbn] = useState('');
  const { user } = useSelector((store) => store.user);

  const handleAddBook = () => {
    const userId = user.id;
    const bookDto = { isbn };
    console.log('Dispatching createBook action');
    console.log(user.id);
    console.log(bookDto);
    dispatch(createBook({ userId, bookDto }));
    setIsbn('');
  };

  return (
    <div>
      <h1 className="text-center">Add a book</h1>
      <form>
        <div>
          <label htmlFor="isbn">ISBN:</label>
          <input
            type="text"
            id="isbn"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleAddBook}>
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;

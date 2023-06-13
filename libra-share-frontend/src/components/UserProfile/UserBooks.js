import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooksByUser } from '../../features/book/bookSlice';
import BookCardUser from '../../components/BookCard/BookCardUser';
import { deleteBook } from '../../features/book/bookSlice';


import './UserBooks.css';

const UserBooks = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const { userBooks, loading, error } = useSelector((state) => state.books);

  const handleDelete = async (bookId) => {
    try {
      await dispatch(deleteBook({ userId: user.id, bookId }));
      await dispatch(fetchBooksByUser(user.id));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(
    () => {
      dispatch(fetchBooksByUser(user.id));
    },
    [dispatch, user.id]
  );

  console.log(userBooks);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="my-book-container">
      {userBooks?.map((book) => (
        <BookCardUser
          key={book.bookDto.bookId}
          onDelete={handleDelete}
          {...book.bookDto}
        />
      ))}
    </div>
  );
};

export default UserBooks;

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooksByUser } from '../../features/book/bookSlice';
import BookCardUser from '../../components/BookCard/BookCardUser';

const UserBooks = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const { userBooks, loading, error } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooksByUser(user.id));
  }, [dispatch, user.id]);

  console.log(userBooks);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>UserBooks</h1>
      {userBooks?.map((book) => (
        <BookCardUser key={book.bookDto.bookId} {...book.bookDto} />
      ))}
    </div>
  );
};

export default UserBooks;

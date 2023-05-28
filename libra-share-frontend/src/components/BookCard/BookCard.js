import { Card } from 'react-bootstrap';
import './BookCard.css';

const BookCard = ({
  bookId,
  title,
  description,
  image,
  author,
  isbn,
  genre,
}) => {
  return (
    <div className="book-card-container">
    <Card className="book-card" style={{ width: '11rem' }}>
      <Card.Img variant="top" src={image} className="book-card-image" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Author: {author}</Card.Text>
        <Card.Text>Genre: {genre}</Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
};

export default BookCard;

import React from 'react';
import { removeBookFromCart } from '../../../features/cart/cartSlice';
import { useDispatch } from 'react-redux';

const BookCard = ({ id, img, title, author }) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-book">
      <img src={img} alt={title} 
      style = {{height: '200px'}}
      />
      <div>
        <h4>{title}</h4>
        <h4 className="book-title">{title}</h4>
        <button
          className="borrow-btn"
          
        >
          borrow
        </button>
        <button
          className="remove-btn"
          onClick={() => dispatch(removeBookFromCart(id))}
        >
          remove
        </button>
      </div>
      <div></div>
    </article>
  );
};

export default BookCard;

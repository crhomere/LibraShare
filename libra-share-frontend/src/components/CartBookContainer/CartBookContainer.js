import { useEffect } from 'react';

import CartBook from '../CartBook/CartBook';

import { useSelector, useDispatch } from 'react-redux';
import { calculateTotals, getCartBooks } from '../../features/cart/cartSlice';

import ModalRemoveAll from '../ModalRemoveAll/ModalRemoveAll';
import { openModal } from '../../features/modalRemoveAll/modalRemoveAllSlice';

const CartBookContainer = () => {
  const { cartItems, total, isLoading } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modalRemoveAll);
  console.log(isOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartBooks());
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (total < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your cart</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {isOpen && <ModalRemoveAll />}

      <header>
        <h2> Your cart</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartBook key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <div className="cart-total">
          <hr />
          <h4>
            total <span>{total} books</span>
          </h4>
        </div>
        <button
          className="btn clear-btn"
          onClick={() => {
            dispatch(openModal());
          }}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartBookContainer;

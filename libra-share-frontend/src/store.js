import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import modalRemoveAllReducer from './features/modalRemoveAll/modalRemoveAllSlice';
import userSlice from './features/user/userSlice';
import bookSlice from './features/book/bookSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modalRemoveAll: modalRemoveAllReducer,
    user: userSlice,
    books: bookSlice,
  },
});

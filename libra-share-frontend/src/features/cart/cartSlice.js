import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://course-api.com/react-useReducer-cart-project';

const initialState = {
  cartItems: [],
  total: 0,
  isLoading: true,
};

export const getCartBooks = createAsyncThunk('cart/getCartBooks', async () => {
  try {
    const response = await axios(url);
    return response.data;
  } catch (error) {
    throw error;
  }
});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeBookFromCart: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    calculateTotals: (state) => {
      let total = 0;
      state.cartItems.forEach((item) => {
        total += 1;
      });
      state.total = total;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getCartBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload;
      })
      .addCase(getCartBooks.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const { clearCart, removeBookFromCart, calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;

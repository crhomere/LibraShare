import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';




const BASE_URL_BOOKS = 'http://localhost:8080/api/v1/librashare/books';
const endpointAllBooks = '/all';
const endpointUserBooks = '/user/';

export const fetchAllBooks = createAsyncThunk(
  'books/fetchAllBooks',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL_BOOKS}${endpointAllBooks}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchBooksByUser = createAsyncThunk('books/fetchBooksByUser', async (userId, thunkAPI) => {
  try {
    const response = await axios.get(`${BASE_URL_BOOKS}${endpointUserBooks}${userId}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});


export const createBook = createAsyncThunk('books/createBook', async ({ userId, bookDto }, thunkAPI) => {
  try {
    const response = await axios.post(`${BASE_URL_BOOKS}/${userId}/add`, bookDto);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});


const bookSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    userBooks: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllBooks.fulfilled, (state, action) => {
        state.books = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchAllBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchBooksByUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBooksByUser.fulfilled, (state, action) => {
        state.userBooks = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchBooksByUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createBook.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createBook.fulfilled, (state, action) => {
        // Update state with the newly created book
        state.books.push(action.payload);
        state.loading = false;
        state.error = null;
      })
      .addCase(createBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
  },
});

export default bookSlice.reducer;

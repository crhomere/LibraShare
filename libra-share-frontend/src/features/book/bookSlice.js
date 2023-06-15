import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL_BOOKS = 'http://localhost:8080/api/v1/librashare/books';
const endpointAllBooks = '/all';
const endpointAllBooksByZipcode = '/zipcode/';
const endpointUserBooks = '/user/';
const endpointExchangeBook = '/exchange';

export const fetchAllBooks = createAsyncThunk(
  'books/fetchAllBooks',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL_BOOKS}${endpointAllBooks}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchBookByZipcode = createAsyncThunk(
  'books/fetchBookByZipcode',
  async (zipcode, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL_BOOKS}${endpointAllBooksByZipcode}${zipcode}`)
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const fetchBooksByUser = createAsyncThunk(
  'books/fetchBooksByUser',
  async (userId, thunkAPI) => {
    try {
      const response = await axios.get(
        `${BASE_URL_BOOKS}${endpointUserBooks}${userId}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createBook = createAsyncThunk(
  'books/createBook',
  async ({ userId, bookDto }, thunkAPI) => {
    try {
      const response = await axios.post(
        `${BASE_URL_BOOKS}/${userId}/add`,
        bookDto
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateBook = createAsyncThunk(
  'books/updateBook',
  async ({ bookId, bookDto }, thunkAPI) => {
    console.log(bookId);
    console.log(bookDto);
    try {
      const response = await axios.put(`${BASE_URL_BOOKS}/${bookId}`, bookDto);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteBook = createAsyncThunk(
  'books/deleteBook',
  async ({ userId, bookId }, thunkAPI) => {
    try {
      const response = await axios.delete(
        `${BASE_URL_BOOKS}/${userId}/${bookId}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const exchangeBook = createAsyncThunk(
  'books/exchangeBook',
  async ({ fromUserId, bookId, toUserId }, thunkAPI) => {
    try {
      const response = await axios.put(
        `${BASE_URL_BOOKS}${endpointExchangeBook}/${fromUserId}/${bookId}/${toUserId}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

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
        state.userBooks = action.payload.map((item) => ({
          userDto: item.userDto,
          bookDto: item.bookDto,
          exchangeReady: item.exchangeReady,
        }));
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchAllBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchBookByZipcode.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBookByZipcode.fulfilled, (state, action) => {
        state.books = action.payload.map(book => ({
          ...book.bookDto,
          currentOwner: {
            firstName: book.userDto.firstName,
            lastName: book.userDto.lastName
          },
          currentLocation: {
            city: book.userDto.city,
            state: book.userDto.state,
            longitude: book.userDto.longitude,
            latitude: book.userDto.latitude
          }
        }));
        state.userBooks = action.payload.map((item) => ({
          userDto: item.userDto,
          bookDto: item.bookDto,
          exchangeReady: item.exchangeReady,
        }));
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchBookByZipcode.rejected, (state, action) => {
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
        state.books.push(action.payload);
        state.loading = false;
        state.error = null;
      })
      .addCase(createBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateBook.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateBook.fulfilled, (state, action) => {
        console.log();
        const updatedBook = action.payload;
        const index = state.books.findIndex(
          (book) => book.bookId === updatedBook.bookId
        );
        if (index !== -1) {
          state.books[index] = updatedBook;
        }
        state.loading = false;
        state.error = null;
      })
      .addCase(updateBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteBook.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.books = state.books.filter(
          (book) => book.bookId !== action.payload
        );
        state.loading = false;
        state.error = null;
      })
      .addCase(deleteBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(exchangeBook.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(exchangeBook.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(exchangeBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default bookSlice.reducer;

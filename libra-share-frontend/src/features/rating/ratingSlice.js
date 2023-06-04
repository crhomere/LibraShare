import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  error: null,
  rating: 1.1,
};

const BASE_URL_RATINGS = 'http://localhost:8080/api/v1/librashare/ratings';

export const addRating = createAsyncThunk(
  'ratings/addRating',
  async ({ userId, bookId, ratingDto }, thunkAPI) => {
    try {
      const response = await axios.post(
        `${BASE_URL_RATINGS}/${userId}/${bookId}/add`,
        ratingDto
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);



export const getRating = createAsyncThunk(
  'ratings/getRating',
  async (bookId, thunkAPI) => {
    try {
      const response = await axios.get(
        `${BASE_URL_RATINGS}/book/${bookId}/rating`
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


const ratingSlice = createSlice({
  name: 'ratings',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addRating.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addRating.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(addRating.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getRating.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRating.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.rating = action.payload;
      })
      .addCase(getRating.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default ratingSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL_RATINGS = 'http://localhost:8080/api/v1/librashare/ratings';

export const addRating = createAsyncThunk(
  'ratings/addRating',
  async ({ userId, bookId, ratingDto }, thunkAPI) => {
    try {
      const response = await axios.post(
        `${BASE_URL_RATINGS}/${userId}/${bookId}/add`,
        ratingDto
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
  initialState: {
    loading: false,
    error: null,
  },
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
      });
  },
});

export default ratingSlice.reducer;

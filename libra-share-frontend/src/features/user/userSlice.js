import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import {
  getUserFromLocalStorage,
  addUserToLocalStorage,
  removeUserFromLocalStorage,
} from '../../utils/localStorage';

const initialUser = getUserFromLocalStorage();
const BASE_URL_USERS = 'http://localhost:8080/api/v1/librashare/users';
const endpointRegister = '/register';
const endpointLogin = '/login';

const initialState = {
  isLoading: false,
  user: initialUser !== undefined ? initialUser : null,
};
console.log('Initial State:', initialState);

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (user, thunkAPI) => {
    try {
      const resp = await fetch(`${BASE_URL_USERS}${endpointRegister}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (!resp.ok) {
        const errorData = await resp.json();
        return thunkAPI.rejectWithValue(errorData.msg);
      }
      console.log(user);
      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (user, thunkAPI) => {
    try {
      const resp = await fetch(`${BASE_URL_USERS}${endpointLogin}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (!resp.ok) {
        const errorData = await resp.json();
        return thunkAPI.rejectWithValue(errorData.msg);
      }

      const data = await resp.json();
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'user/logoutUser',
  async (_, thunkAPI) => {
    try {
      removeUserFromLocalStorage();
      return null;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
        addUserToLocalStorage(state.user);
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const [id, username] = payload;
        state.isLoading = false;
        state.user = {
          id: id,
          username: username,
        };
        addUserToLocalStorage(state.user);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
      })
      .addCase(logoutUser.rejected, (state, { payload }) => {
        state.isLoading = false;
      });
  },
});

export default userSlice.reducer;

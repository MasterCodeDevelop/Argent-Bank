import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setMessage } from './message';
import * as AuthService from '../services/auth.service';

const token = localStorage.getItem('token');

/**
 * Create new user
 */
export const register = createAsyncThunk(
  'auth/register',
  async ({ firstName, lastName, email, password }, thunkAPI) => {
    try {
      const response = await AuthService.register(
        firstName,
        lastName,
        email,
        password
      );
      thunkAPI.dispatch(setMessage(response.data.message));
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

/**
 * Logs the user into the application
 */
export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const data = await AuthService.login(email, password);
      return { token: data.body.token };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async () => {
  await AuthService.logout();
});

const initialState = token
  ? { isLoggedIn: true, token }
  : { isLoggedIn: false, token };

// Create slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled]: (state) => {
      state.isLoggedIn = false;
    },
    [register.rejected]: (state) => {
      state.isLoggedIn = false;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload.token;
    },
    [login.rejected]: (state) => {
      state.isLoggedIn = false;
      state.token = null;
    },
    [logout.fulfilled]: (state) => {
      state.isLoggedIn = false;
      state.token = null;
    },
  },
});

const { reducer } = authSlice;
export default reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setMessage } from './message';
import * as AuthService from '../services/auth.service';

const user = JSON.parse(localStorage.getItem('user'));

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

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

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
  },
});

const { reducer } = authSlice;
export default reducer;

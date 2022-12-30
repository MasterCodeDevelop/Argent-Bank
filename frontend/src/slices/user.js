import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as userService from '../services/user.service';

import { logout } from './auth';
/**
 * get user data
 */
export const getUser = createAsyncThunk('user', async ({ token }, thunkAPI) => {
  try {
    const data = await userService.getUser(token);
    return { user: data.data.body };
  } catch (error) {
    thunkAPI.dispatch(logout());
    return thunkAPI.rejectWithValue();
  }
});

const initialState = { user: null };

// Create slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [getUser.fulfilled]: (state, action) => {
      state.user = action.payload.user;
    },
    [getUser.rejected]: (state) => {
      state.user = null;
    },
  },
});

const { reducer } = userSlice;
export default reducer;

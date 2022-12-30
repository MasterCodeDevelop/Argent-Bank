import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUser } from '../services/user.service';
import { logout } from './auth';
/**
 * get user data
 */
export const updateUser = createAsyncThunk(
  'user',
  async ({ token }, thunkAPI) => {
    try {
      const data = await getUser(token);
      return { user: data.data.body };
    } catch (error) {
      thunkAPI.dispatch(logout());
      return thunkAPI.rejectWithValue();
    }
  }
);

const initialState = { user: null };

// Create slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [updateUser.fulfilled]: (state, action) => {
      state.user = action.payload.user;
    },
    [updateUser.rejected]: (state) => {
      state.user = null;
    },
  },
});

const { reducer } = userSlice;
export default reducer;

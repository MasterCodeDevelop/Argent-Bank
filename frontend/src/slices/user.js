import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUser } from '../services/user.service';

/**
 * get user data
 */
export const updateUser = createAsyncThunk('user', async ({ token }) => {
  try {
    const data = await getUser(token);
    return { user: data.data.body };
  } catch (error) {
    console.log(error);
  }
});

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

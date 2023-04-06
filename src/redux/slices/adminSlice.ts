import { getCookie } from '../../utils/cookie';
import { getApiErrorMessage } from '../../utils/utils';
import { getAllUsers } from '../../api/adminApi';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: '',
};

 const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {},
});

export default adminSlice.reducer;

export const getAllUserThunk = createAsyncThunk(
  'admin/users',
  async ( _, {rejectWithValue }) => {
    try {
      const response = await getAllUsers();
      console.log('response2', response);
        getCookie(
          'token'
        );
        return response.data
    } catch (err) {
      return rejectWithValue(getApiErrorMessage(err));
    }
  }
);


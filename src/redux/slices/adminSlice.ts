import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: '',
};

const adminUserSlice = createSlice({
  name: 'adminUser',
  initialState,
  reducers: {},
});

export const getAllUsers = createAsyncThunk(
  'adminUser/getAllUsers',
  async (adminUser: { rejectWithValue }) => {
    try {
      const response = await getAllUsers();
      return response.data;
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }
);

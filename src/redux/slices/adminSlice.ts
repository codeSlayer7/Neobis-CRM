import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCookie, setCookie } from '../../utils/cookie';
import { getApiErrorMessage } from '../../utils/utils';
import { getAllUsers } from '../../api/adminApi';
import { UserData } from '../types/adminTypes';
import { Api } from '../../api/base';
import axiosInteceptor from '../../api/base/interceptor';
import { StatusType } from '../../types/global';

const initialState = {
  users: [],
  loading: false,
  error: '',
};


export const getAllUserThunk = createAsyncThunk(
  'users/getAllUserThunk',
  async (_,{rejectWithValue}) => {
    try{
      const response: any = await getAllUsers()
      return response.data
    }catch(err){
      return rejectWithValue(getApiErrorMessage(err));
    }
  }

);

const adminSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllUserThunk.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(
        getAllUserThunk.fulfilled,
        (state, { payload }: PayloadAction<any>) => {
          state.loading = false;
          state.users = payload;
        }
      ),
      builder.addCase(
        getAllUserThunk.rejected,
        (state, { payload }: PayloadAction<any>) => {
          state.loading = false;
          state.error = payload;
        }
      );
  },
});

export default adminSlice.reducer;

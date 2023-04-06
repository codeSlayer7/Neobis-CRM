import { UserRole } from './../types/userTypes';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getApiErrorMessage } from '../../utils/utils';
import {
  UserData,
  UserForgotPassword,
  UserConfirmCode,
  UserResetPassword,
} from '../types/userTypes';
import { BaseResponse } from '../../types/global';
import {
  confirmCode,
  forgotPassword,
  LoginResponse,
  loginUser,
  resetPassword,
} from '../../api/userApi';

import { Status } from '../../constants/global';
import { setCookie } from '../../utils/cookie';

const initialState = {
  accessToken: '',
  refreshToken: '',
  firstName: '',
  lastName: '',
  role: '',
  loading: false,
  error: '',
};

export const loginUserThunk = createAsyncThunk(
  'user/auth',
  async (user: UserData, { rejectWithValue }) => {
    try {
      const response = await loginUser(user);
      console.log('response', response);
      console.warn(response.data.result_code === Status.SUCCESS);

      if (response.data.result_code === Status.SUCCESS) {
        setCookie(
          'token',
          response.data.result.authenticationResponse.jwtToken,
          4
        );
        return response.data.result;
      }else{
        return rejectWithValue(response.data.details);
      }
    } catch (err) {
      return rejectWithValue(getApiErrorMessage(err));
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loginUserThunk.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(
        loginUserThunk.fulfilled,
        (state, { payload }: PayloadAction<any>) => {
          console.log('4', payload);
          state.loading = false;
          state.accessToken = payload.authenticationResponse.jwtToken;
          state.refreshToken = payload.authenticationResponse.refreshToken;
          state.role = payload.role;
          state.firstName = payload.firstName;
          state.lastName = payload.lastName;
        }
      ),
      builder.addCase(
        loginUserThunk.rejected,
        (state, { payload }: PayloadAction<any>) => {
          state.loading = false;
          state.error = payload;
        }
      );
  },
});

export const { setAccessToken } = userSlice.actions;

export default userSlice.reducer;

export const forgotPasswordThunk = createAsyncThunk(
  'user/forgotPassword',
  async (user: UserForgotPassword, { rejectWithValue }) => {
    try {
      const response = await forgotPassword(user);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }
);

export const confirmCodeThunk = createAsyncThunk(
  'user/confirmCode',
  async (code: UserConfirmCode, { rejectWithValue }) => {
    try {
      const response = await confirmCode(code);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }
);

export const resetPasswordThunk = createAsyncThunk(
  'user/resetPassword',
  async (code: UserResetPassword, { rejectWithValue }) => {
    try {
      const response = await resetPassword(code);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }
);

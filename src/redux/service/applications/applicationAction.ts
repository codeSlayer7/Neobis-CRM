import { createAsyncThunk } from '@reduxjs/toolkit';
import { getApiErrorMessage } from '../../../utils/utils';
import {
  ApplicationPost,
  getAllApplicatins,
  getSortedApplication,
  IApplicationPost,
  postAppliction,
} from './applications';

export const getAllAppThunk = createAsyncThunk(
  '/getAllApplications',
  async (_data, { rejectWithValue }) => {
    try {
      const response = await getAllApplicatins();
      return response;
    } catch (err) {
      return rejectWithValue(getApiErrorMessage(err));
    }
  }
);

export const getAppIdThunk = createAsyncThunk(
  '/getAllApplications',
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await getAllApplicatins(id);
      return response;
    } catch (err) {
      return rejectWithValue(getApiErrorMessage(err));
    }
  }
);

export const getSortedThunk = createAsyncThunk(
  '/getSortedApplications',
  async (_data, { rejectWithValue }) => {
    try {
      const response = await getSortedApplication();
      console.log(response, 'sorted data')
      return response.data;
    } catch (err) {
      return rejectWithValue(getApiErrorMessage(err));
    }
  }
);

export const postAppThunk = createAsyncThunk(
  '/postApplications',
  async (data: IApplicationPost, { rejectWithValue }) => {
    try {
      const response = await postAppliction(data);
      console.log(response, 'post app response here');
      return response;
    } catch (err) {
      return rejectWithValue(getApiErrorMessage(err));
    }
  }
);

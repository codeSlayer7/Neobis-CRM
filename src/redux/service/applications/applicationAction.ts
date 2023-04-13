import { createAsyncThunk } from '@reduxjs/toolkit';
import { getApiErrorMessage } from '../../../utils/utils';
import {
  getAllApplicatins,
  getSortedApplication,
} from './applications';

export const getAllAppThunk = createAsyncThunk(
  '/getAllApplications',
  async (_data, { rejectWithValue }) => {
    try {
      const response = await getSortedApplication();
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
      return response;
    } catch (err) {
      return rejectWithValue(getApiErrorMessage(err));
    }
  }
);

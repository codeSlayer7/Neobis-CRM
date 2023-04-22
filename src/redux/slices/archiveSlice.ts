import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getApiErrorMessage } from '../../utils/utils';
import { getAllMentorsArchive, getAllStudentsArchive, getAllUsersArchive } from '../../api/archive';

const initialState = {
  mentors: [],
  students: [],
  users: [],
  archive:{},
  loading: false,
  error: '',
};

export const getAllMentorsArchiveThunk = createAsyncThunk(
  'archive/getAllMentorsArchive',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllMentorsArchive();
      return response.data.result;
    } catch (err) {
      return rejectWithValue(getApiErrorMessage(err));
    }
  }
);

export const getAllStudentsArchiveThunk = createAsyncThunk(
  'archive/getAllStudentsArchive',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllStudentsArchive();
      return response.data;
    } catch (err) {
      return rejectWithValue(getApiErrorMessage(err));
    }
  }
);

export const getAllUsersArchiveThunk = createAsyncThunk(
  'archive/getAllUsersArchive',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllUsersArchive();
      return response.data;
    } catch (err) {
      return rejectWithValue(getApiErrorMessage(err));
    }
  }
);

const archiveSlice = createSlice({
  name: 'archive', // Исправлено на 'archive'
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllMentorsArchiveThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllMentorsArchiveThunk.fulfilled, (state, { payload }: PayloadAction<any>) => {
        state.loading = false;
        state.mentors = payload;
      })
      .addCase(getAllMentorsArchiveThunk.rejected, (state, { payload }: PayloadAction<any>) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getAllStudentsArchiveThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllStudentsArchiveThunk.fulfilled, (state, { payload }: PayloadAction<any>) => {
        state.loading = false;
        state.students = payload;
      })
      .addCase(getAllStudentsArchiveThunk.rejected, (state, { payload }: PayloadAction<any>) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getAllUsersArchiveThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllUsersArchiveThunk.fulfilled, (state, { payload }: PayloadAction<any>) => {
        state.loading = false;
        state.users = payload;
      })
      .addCase(getAllUsersArchiveThunk.rejected, (state, { payload }: PayloadAction<any>) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default archiveSlice.reducer;

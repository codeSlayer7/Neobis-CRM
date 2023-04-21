import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getApiErrorMessage } from '../../../utils/utils';
import { getAllCourses } from './courses';

const initialState = {
  course: [],
  loading: false,
  error: '',
};

export const getAllCoursesThunk = createAsyncThunk(
  'courses/getAllCoursesThunk',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllCourses();
      console.log('response2', response);
      return response
    } catch (err) {
      return rejectWithValue(getApiErrorMessage(err));
    }
  }
);

const coursesAction = createSlice({
  name: 'course',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCoursesThunk.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(
        getAllCoursesThunk.fulfilled,
        (state, { payload }: PayloadAction<any>) => {
          console.log('8', payload);
          state.loading = false;
          state.course = payload;
        }
      ),
      builder.addCase(
        getAllCoursesThunk.rejected,
        (state, { payload }: PayloadAction<any>) => {
          state.loading = false;
          state.error = payload;
        }
      );
  },
});

export default coursesAction.reducer;

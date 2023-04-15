import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getApiErrorMessage } from '../../../utils/utils';
import { getAllCourses } from './courses';

const initialState = {
  courses: [],
  course: {},
  loading: false,
  error: '',
};

export const getAllCoursesThunk = createAsyncThunk(
  'course/getAllCourses',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllCourses();
      return response.data;
    } catch (err) {
      return rejectWithValue(getApiErrorMessage(err));
    }
  }
);
// console.log('data', data)

const coursesAction = createSlice({
  name: 'courses',
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
          state.courses = payload;
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

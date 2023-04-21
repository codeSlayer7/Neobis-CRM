import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getApiErrorMessage } from '../../../utils/utils';
import { addNewCourse, getAllCourses, getCourseById } from './courses';
// import id from 'date-fns/esm/locale/id/index';

const initialState = {
  courses: [],
  course: {},
  students: [],
  // courseId: {},
  loading: false,
  error: '',
};

// get all courses
export const getAllCoursesThunk = createAsyncThunk(
  'courses/getAllCourses',
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

// get course by id
export const getCourseByIdThunk = createAsyncThunk(
  'courses/getCourseById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await getCourseById(id);
      const array = response.data.groups.map((item) => item.students);
      const data = { course: response.data, students: array.flat() };
      return data;
    } catch (err) {
      return rejectWithValue(getApiErrorMessage(err));
    }
  }
);

// create course
export const addNewCourseThunk = createAsyncThunk(
  'courses/addNewCourse',
  async ({ values, formData }, { rejectWithValue }) => {
    try {
      const response = await addNewCourse({ values, formData });
      console.log (response.data, 'oooo')
      return response.data;
    } catch (err) {
      return rejectWithValue(getApiErrorMessage(err));
    }
  }
);

//edit course
// export const 

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
          // console.log('8', payload);
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

    builder.addCase(getCourseByIdThunk.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(
        getCourseByIdThunk.fulfilled,
        (state, { payload }: PayloadAction<any>) => {
          // console.log('8', payload);
          state.students = payload.students;
          state.loading = false;
          state.course = payload.course;
        }
      ),
      builder.addCase(
        getCourseByIdThunk.rejected,
        (state, { payload }: PayloadAction<any>) => {
          state.loading = false;
          state.error = payload;
        }
      );

    builder.addCase(addNewCourseThunk.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(
        addNewCourseThunk.fulfilled,
        (state, { payload }: PayloadAction<any>) => {
          console.log('8create', payload);
          state.loading = false;
          state.course = payload;
        }
      ),
      builder.addCase(
        addNewCourseThunk.rejected,
        (state, { payload }: PayloadAction<any>) => {
          state.loading = false;
          state.error = payload;
        }
      );
  },
});

export default coursesAction.reducer;

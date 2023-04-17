import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getApiErrorMessage } from '../../../utils/utils';
import { getAllMentors, getMentorById } from './mentors';

const initialState = {
  mentors: [],
  mentor: {},
  loading: false,
  error: '',
};

export const getAllMentorsThunk = createAsyncThunk(
  'mentors/getAllMentors',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllMentors();
      // console.log('response2', response);
      return response.data.result;
    } catch (err) {
      return rejectWithValue(getApiErrorMessage(err));
    }
  }
);

export const getMentorByIdThunk = createAsyncThunk(
  'mentors/getMentorById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await getMentorById(id);
      // console.log('response2', response);
      return response.data.result;

    } catch (err) {
      return rejectWithValue(getApiErrorMessage(err));
    }
  }
);


const mentorsAction = createSlice({
  name: 'mentors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllMentorsThunk.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(
        getAllMentorsThunk.fulfilled,
        (state, { payload }: PayloadAction<any>) => {
           state.loading = false;
          state.mentors = payload;
        }
      ),
      builder.addCase(
        getAllMentorsThunk.rejected,
        (state, { payload }: PayloadAction<any>) => {
          state.loading = false;
          state.error = payload;
        }
      );


      builder.addCase(getMentorByIdThunk.pending, (state) => {
        state.loading = true;
      }),
        builder.addCase(
          getMentorByIdThunk.fulfilled,
          (state, {payload}: PayloadAction<any>) => {
            console.log('8', payload);
            state.loading = false;
            state.mentor = payload;
          }
        ),
        builder.addCase(
          getMentorByIdThunk.rejected,
          (state, {payload}: PayloadAction<any>) => {
            state.loading = false;
            state.error = payload;
          }
        );
  },
});

export default mentorsAction.reducer;

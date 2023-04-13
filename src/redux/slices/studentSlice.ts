import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllStudents } from "../../api/studentApi";
import { getApiErrorMessage } from "../../utils/utils";


const initialState = {
    students: [],
    loading: false,
    error: '',
  };

export const getAllStudentsThunk = createAsyncThunk(
    'users/getAllStudents',
    async (_, { rejectWithValue }) => {
      try {
        const response = await getAllStudents();
        return response.data;
      } catch (err) {
        return rejectWithValue(getApiErrorMessage(err));
      }
    }
  );


  const studentSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(getAllStudentsThunk.pending, (state) => {
        state.loading = true;
      }),
        builder.addCase(
          getAllStudentsThunk.fulfilled,
          (state, { payload }: PayloadAction<any>) => {
            state.loading = false;
            state.students = payload;
          }
        ),
        builder.addCase(
          getAllStudentsThunk.rejected,
          (state, { payload }: PayloadAction<any>) => {
            state.loading = false;
            state.error = payload;
          }
        );
    },
  });


  export default studentSlice.reducer;
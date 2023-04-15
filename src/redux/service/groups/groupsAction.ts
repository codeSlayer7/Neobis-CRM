import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getApiErrorMessage } from '../../../utils/utils';
import { getAllGroups } from './groups';

const initialState = {
  groups: [],
  loading: false,
  error: '',
};

export const getAllGroupsThunk = createAsyncThunk(
  'group/getAllGroups',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllGroups();
      return response.data;
    } catch (err) {
      return rejectWithValue(getApiErrorMessage(err));
    }
  }
);
// console.log('data', data)

const groupsAction = createSlice({
  name: 'groups',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllGroupsThunk.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(
        getAllGroupsThunk.fulfilled,
        (state, { payload }: PayloadAction<any>) => {
          console.log('8', payload);
          state.loading = false;
          state.groups = payload;
        }
      ),
      builder.addCase(
        getAllGroupsThunk.rejected,
        (state, { payload }: PayloadAction<any>) => {
          state.loading = false;
          state.error = payload;
        }
      );
  },
});

export default groupsAction.reducer;

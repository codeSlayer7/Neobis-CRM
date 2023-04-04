import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = { toggle: false };

const toggleSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    toggleStore: (state, action) => {
      return { ...state, toggle: action.payload.sidebar };
    },
  },
});

export const { toggleStore } = toggleSlice.actions;

export default toggleSlice.reducer;

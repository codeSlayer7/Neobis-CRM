import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todoSlice from '../slices/todoSlice';
import toggleSidebar from '../slices/toggleSidebar';
import userSlice from '../slices/userSlice';
import adminSlice from '../slices/adminSlice';
import coursesAction from '../service/courses/coursesAction';
import mentorsAction from '../service/mentors/mentorsAction';
import studentSlice from '../slices/studentSlice';
import { loadState, saveState } from '../../api/localStorage';
import archiveSlice from '../slices/archiveSlice';

export const reducer = combineReducers({
  user: userSlice,
  trello: todoSlice,
  toggle: toggleSidebar,
  admin: adminSlice,
  courses: coursesAction,
  student: studentSlice,
  mentors: mentorsAction,
  archive: archiveSlice,
});

export const store = configureStore({
  reducer,
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState(store.getState());
});

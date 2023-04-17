import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todoSlice from '../slices/todoSlice';
import toggleSidebar from '../slices/toggleSidebar';
import userSlice from '../slices/userSlice';
import adminSlice from '../slices/adminSlice';
import coursesAction from '../service/courses/coursesAction';
import mentorsAction from '../service/mentors/mentorsAction';
import studentSlice from '../slices/studentSlice';

export const reducer = combineReducers({
  user: userSlice,
  trello: todoSlice,
  toggle: toggleSidebar,
  admin: adminSlice,
  courses: coursesAction,
  mentors: mentorsAction,
  students: studentSlice,
});

export const store = configureStore({
  reducer,
});

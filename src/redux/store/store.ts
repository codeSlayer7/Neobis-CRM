import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoSlice from "../slices/todoSlice";
import toggleSidebar from "../slices/toggleSidebar";
import userSlice from "../slices/userSlice";
import  adminSlice  from "../slices/adminSlice";
import studentSlice from "../slices/studentSlice";

export const reducer = combineReducers({
    user: userSlice,
    trello: todoSlice,
    toggle: toggleSidebar,
    admin: adminSlice,
    student: studentSlice
});


export const store = configureStore({
    reducer: reducer
})
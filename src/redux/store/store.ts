import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoSlice from "../slices/todoSlice";
import toggleSidebar from "../slices/toggleSidebar";
import userSlice from "../slices/userSlice";
import  adminSlice  from "../slices/adminSlice";

export const reducer = combineReducers({
    user: userSlice,
    trello: todoSlice,
    toggle: toggleSidebar,
    admin: adminSlice,
});


export const store = configureStore({
    reducer: reducer
})
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoSlice from "../slices/todoSlice";
import toggleSidebar from "../slices/toggleSidebar";
import userSlice from "../slices/userSlice";

export const reducer = combineReducers({
    user: userSlice,
    trello: todoSlice,
    toggle: toggleSidebar,
});


export const store = configureStore({
    reducer: reducer
})
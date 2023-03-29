import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoSlice from "../slices/todoSlice";
import userSlice from "../slices/userSlice";

export const reducer = combineReducers({
    user: userSlice,
    trello: todoSlice,
});


export const store = configureStore({
    reducer: reducer
})
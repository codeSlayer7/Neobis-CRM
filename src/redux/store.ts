import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/userSlice";

export const reducer = combineReducers({
    user: userSlice.reducer
});


const store = configureStore({
    reducer: reducer
})
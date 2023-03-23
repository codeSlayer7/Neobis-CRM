import { confirmCode, forgotPassword, loginUser, resetPassword,  } from './../../api/userApi';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {UserData, UserForgotPassword, UserConfirmCode, UserResetPassword} from '../types/userTypes'

const initialState = {
    accessToken: '',
    refreshToken: ''
}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    }
})


export const loginUserThunk = createAsyncThunk ('user/auth', async ( user: UserData, {rejectWithValue}) => {
    try{
        const response = await loginUser(user)
        console.log(response);
    }catch(err){
        console.log(err);
    }
})


export const forgotPasswordThunk = createAsyncThunk ('user/forgotPassword', async ( user: UserForgotPassword, {rejectWithValue}) => {
    try{
        const response = await forgotPassword(user)
        console.log(response);
        
    }catch(err){
        console.log(err);
    }
})

export const confirmCodeThunk = createAsyncThunk ('user/confirmCode', async ( code: UserConfirmCode, {rejectWithValue}) => {
    try{
        const response = await confirmCode(code)
        console.log(response);
        
    }catch(err){
        console.log(err);
    }
})


export const resetPasswordThunk = createAsyncThunk ('user/resetPassword', async ( code: UserResetPassword, {rejectWithValue}) => {
    try{
        const response = await resetPassword(code)
        console.log(response);
        
    }catch(err){
        console.log(err);
    }
})
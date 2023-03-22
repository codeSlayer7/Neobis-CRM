import { loginUser } from './../../api/userApi';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {UserData} from '../types/userTypes'

const initialState = {
    accessToken: '',
    refreshToken: ''
}


const userSlice = createSlice({
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

import { BaseResponse } from './../types/global';
import { UserData, UserForgotPassword, UserConfirmCode, UserResetPassword, UserRole } from './../redux/types/userTypes';
import axios, { AxiosInstance } from 'axios'; 

import { NullableString } from '../types/global';
import { Status } from '../constants/global';

export interface LoginResponse{
    authenticationResponse:{
        "jwtToken": string,
        "dateExpiredAccessToken": number,
        "dateExpiredRefreshToken": number,
        "refreshToken": string
    },
    role:UserRole
}


const baseURL : string = 'http://68.183.88.191:8080' 


export const userApi : AxiosInstance = axios.create({
    baseURL,
    headers: {
        'content-type': 'application/json'
    }
}) 


export const loginUser = (data  : UserData ) => {
return (
    userApi.post<BaseResponse<LoginResponse>>('/user/auth', data)
)
} 


export const forgotPassword = (data  : UserForgotPassword ) => {
    return (
        userApi.post('/user/forgot-password', data)
    )
} 


export const confirmCode = (data  : UserConfirmCode ) => {
    return (
        userApi.post('/user/confirm-code', data)
    )
} 

export const resetPassword = (data  : UserResetPassword ) => {
    return (
        userApi.post('/user/reset-password', data)
    )
} 
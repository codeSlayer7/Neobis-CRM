import { UserData } from './../redux/types/userTypes';
import axios, { AxiosInstance } from 'axios'; 


const baseURL : string = 'http://68.183.88.191:8080' 


export const userApi : AxiosInstance = axios.create({
    baseURL,
    headers: {
        'content-type': 'application/json'
    }
}) 


export const loginUser = (data  : UserData ) => {
return (
    userApi.post('/user/auth', data)
)
} 
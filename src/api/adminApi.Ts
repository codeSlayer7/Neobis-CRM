import axios, { AxiosInstance } from 'axios';
import { UserData } from "../redux/types/adminTypes";
import axiosInteceptor from './base/interceptor';



export const getAllUsers = () => {
    return axiosInteceptor.get('/api/v1/admin/users');   
};


export const createUser = (user: UserData) => {
  return axiosInteceptor.post('/api/v1/admin/registration',user)
} 


export const editUser = (user: UserData) => {
  return axiosInteceptor.put('/api/v1/admin/update/{id}', user)
}

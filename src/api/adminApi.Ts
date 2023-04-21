import { UserData } from "../redux/types/adminTypes";
import { StatusType } from "../types/global";
import axiosInteceptor from './base/interceptor';



export const getAllUsers = () => {
    return axiosInteceptor.get('/api/v1/admin/users');   

};

export const getUser = (id: number) => {
  return axiosInteceptor.get(`/api/v1/admin/users/${id}`);   
};

export const createUser = (user: UserData) => {
  return axiosInteceptor.post('/api/v1/admin/registration',user)
} 


export const updateUser = (id: any, user: any) => {
  return axiosInteceptor.put(`/api/v1/admin/update/${id}`, user)
}

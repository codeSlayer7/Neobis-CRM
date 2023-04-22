import { Api } from './base/index';
import { UserData } from "../redux/types/adminTypes";
import axiosInteceptor from './interceptor';


export const getAllUsers = () => {
    return axiosInteceptor.get('/api/v1/admin/users');   
};
   

export const createUser = (user: UserData) => {
  return axiosInteceptor.post('/api/v1/admin/registration',{email: user.data.email, password: user.data.password,
    firstName: user.data.firstName, lastName: user.data.lastName, phoneNumber: user.data.phoneNumber})
} 


export const editUser = (user: UserData) => {
  return axiosInteceptor.put('/api/v1/admin/update/{id}', user)
}

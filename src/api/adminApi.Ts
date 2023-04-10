import { Api } from './base/index';
import { UserData } from "../redux/types/adminTypes";


export const getAllUsers = () => {
    return Api.get('/api/v1/admin/users');   
};
   

export const createUser = (user: UserData) => {
  return Api.post('/api/v1/admin/registration',{email: user.data.email, password: user.data.password,
    firstName: user.data.firstName, lastName: user.data.lastName, phoneNumber: user.data.phoneNumber})
} 


export const editUser = (user: UserData) => {
  return Api.put('/api/v1/admin/update/{id}', user)
}

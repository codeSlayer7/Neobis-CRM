import {userApi} from "./userApi";


export const getAllUsers = () => {
    return userApi.get('/admin/users');   

  };
   
import axios, { AxiosInstance } from 'axios';
import { UserData } from '../redux/types/userTypes';

const baseURL = 'http://68.183.88.191:8080';

export const userApi: AxiosInstance = axios.create({
  baseURL,
  headers: {
    'content-type': 'application/json',
  },
});

export const loginUser = (data: UserData) => {
  return userApi.post('/user/auth', data);
};


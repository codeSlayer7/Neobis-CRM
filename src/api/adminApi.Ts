import axios, { AxiosInstance } from "axios";
import { getCookie } from "../utils/cookie";

const baseURL = 'http://68.183.88.191:8080/api/v1/admin/';

const token = getCookie('token')

export const adminApi : AxiosInstance = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-type': 'application/json'
  }
}) 


export const getAllUsers = () => {
    return adminApi.get('users');   
  };
   
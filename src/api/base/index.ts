import axios, { AxiosInstance } from "axios";
import { getCookie } from "../../utils/cookie";

export const baseURL = 'http://68.183.88.191:8080';


const token = getCookie('token')


export const Api : AxiosInstance = axios.create({
    baseURL,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-type': 'application/json'
    }
  }) 
import { getCookie, setCookie, removeCookie } from '../utils/cookie';
import axios, { AxiosRequestConfig } from 'axios';

const axiosInteceptor = axios.create({
  baseURL: 'http://68.183.88.191:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInteceptor.interceptors.request.use(
  (config) => {
    const token = getCookie('token');
    console.log(token, 'access token');
    if (token) {
      // config.headers["Authorization"] = 'Bearer ' + token;  // for Spring Boot back-end
      config.headers['Authorization'] = 'Bearer ' + token; // for Node.js Express back-end
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInteceptor.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;

    if (originalConfig.url !== '/api/v1/admin/registration' && err.response) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;

        try {
          // const cokie = getCookie('refresh');
          // console.log('refreh token', cokie);

          const { data } = await axiosInteceptor
            .post('/user/refresh')
            .catch(function (error) {
              console.log(error);
            });

          console.log(data.result.jwtToken, 'tokeniji');
          const accessToken = data.result.jwtToken;

          // console.log(cookie2)
          removeCookie('token');
          setCookie('token', accessToken, 4);

          return axiosInteceptor(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }

    return Promise.reject(err);
  }
);

export default axiosInteceptor;

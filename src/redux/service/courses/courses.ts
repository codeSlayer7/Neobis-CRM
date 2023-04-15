// import { AxiosRequestConfig } from 'axios';
import axiosInteceptor from '../../../api/base/interceptor';
import { Endpoints } from '../../../interfaces/enum/index';

export const getAllCourses = async () => {
  const data = await axiosInteceptor.get(`${Endpoints.CourseGetAll}`);
  return data;
  // console.log(data, 'getall');
};

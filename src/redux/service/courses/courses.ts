import { AxiosRequestConfig } from 'axios';
import axiosInteceptor from '../../../api/interceptor';
import { Endpoints } from '../../../interfaces/enum';

export const getAllCourses = async () => {
  const data = await axiosInteceptor.get(`${Endpoints.CourseGetAll}`);
  console.log(data, 'getall');
};

//   export const createCourse = async () => {
//     let course = await axiosInteceptor.post(`${Endpoints.CourseCreate}`);
//     console.log(course,'create')
//  };

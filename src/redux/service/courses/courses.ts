// import { AxiosRequestConfig } from 'axios';
import axiosInteceptor from '../../../api/base/interceptor';
import { Endpoints } from '../../../interfaces/enum/index';

// get all courses
export const getAllCourses = async () => {
  const data = await axiosInteceptor.get(`${Endpoints.CourseAPI}`);
  return data;
};

// get course by id
export const getCourseById = async (id) => {
  const data = await axiosInteceptor.get(`${Endpoints.CourseAPI}/${id}`);
  // console.log('getbyid', data);
  return data;
};

// add new course
// export const addNewCourse = async ({ courseData, formData }) => {
//   const response = await axiosInteceptor.post(
//     `${Endpoints.CourseAPI}`,
//     courseData
//   );
//   const result = await axiosInteceptor.post(
//     `${Endpoints.CourseCreate}/${id}/${response.data}`,
//     formdata,
//     {
//       headers: {
//         'Content-Type': `multipart/form-data`,
//       },
//     }
//   );
//   return result.data;
// };

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
  return data;
};

// add new course
export const addNewCourse = async ({ values, formData }) => {
  const response = await axiosInteceptor.post(`${Endpoints.CourseAPI}`, values);

  const result = await axiosInteceptor.post(
    `${Endpoints.CourseCreate}/${response.data.id}`,
    formData,
    {
      headers: {
        'Content-Type': `multipart/form-data`,
      },
    }
  );
  return result.data;
};

//update course
export const updateCourse = async({values, formData}) =>{
  const response = await axiosInteceptor.put(`${Endpoints.CourseAPI}`, values);

  const result = await axiosInteceptor.put(
    `${Endpoints.CourseAPI}/${values.id}`,
    formData,
    {
      headers: {
        'Content-Type': `multipart/form-data`,
      },
    }
  )
  return result.data;
}
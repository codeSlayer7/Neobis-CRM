// import { AxiosRequestConfig } from 'axios';
import axiosInteceptor from '../../../api/base/interceptor';
import { Endpoints } from '../../../interfaces/enum/index';
import { getApiErrorMessage } from '../../../utils/utils';

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

// add new course ApplicationsArchiveWithId
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
  return axiosInteceptor.put(`${Endpoints.CourseAPI}/${values.id}`, values)
    .then(res => {
      if(res.status === 200 && typeof formData !== 'string') {
        axiosInteceptor.post(
          `${Endpoints.CourseCreate}/${values.id}`,
          formData,
          {
            headers: {
              'Content-Type': `multipart/form-data`,
            },
          }
        );
      }
    })
}

export const archiveCourse = (id: number) => {
  return axiosInteceptor.put(`${Endpoints.CourseAPI}/archive?courseId=${id}`, { reason: 'kurs govno' })
}
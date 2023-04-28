// import { AxiosRequestConfig } from 'axios';
import axiosInteceptor from '../../../api/base/interceptor';
import { Endpoints } from '../../../interfaces/enum/index';

// get all mentors
export const getAllMentors = async () => {
  const data = await axiosInteceptor.get(`${Endpoints.MentorsGetAll}`);
  return data;
};

// get mentor by id
export const getMentorById = async (id) => {
  const data = await axiosInteceptor.get(`${Endpoints.MentorAPI}/${id}`);
  return data;
};

// add a new mentor
export const addNewMentor = async ({ values, formData }) => {
  const response = await axiosInteceptor.post(`${Endpoints.MentorAPI}`, values);
  const result = await axiosInteceptor.post(
    `${Endpoints.MentorCreate}/${response.data.result.id}`,
    formData,
    {
      headers: {
        'Content-Type': `multipart/form-data`,
      },
    }
  );
  return result.data;
};

//update mentor
export const updateMentor = async ({ values, formData }) => {
  return axiosInteceptor
    .put(`${Endpoints.MentorUpdate}/${values.id}`, values)
    .then((res) => {
      if (res.status === 200 && typeof formData !== 'string') {
        axiosInteceptor.post(
          `${Endpoints.MentorCreate}/${values.id}`,
          formData,
          {
            headers: {
              'Content-Type': `multipart/form-data`,
            },
          }
        );
      }
    });
};

export const archiveMentor = (id: number) => {
  return axiosInteceptor.put(`${Endpoints.MentorAPI}/archive?courseId=${id}`, {
    reason: 'kurs',
  });
};

// import { AxiosRequestConfig } from 'axios';
import axiosInteceptor from '../../../api/base/interceptor';
import { Endpoints } from '../../../interfaces/enum/index';

export const getAllMentors = async () => {
  const data = await axiosInteceptor.get(`${Endpoints.MentorsGetAll}`);
  // console.log(data, 'getallmentors');
  return data;
};

export const getMentorById = async (id) => {
  const data = await axiosInteceptor.get(`${Endpoints.MentorGetById}/${id}`);
  // console.log(data, 'getmentorbyid');
  return data;
};

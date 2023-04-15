// import { AxiosRequestConfig } from 'axios';
import axiosInteceptor from '../../../api/base/interceptor';
import { Endpoints } from '../../../interfaces/enum/index';

export const getAllMentors = async () => {
  const data = await axiosInteceptor.get(`${Endpoints.MentorsGetAll}`);
  // console.log(data, 'getallmentors');
  return data;
};

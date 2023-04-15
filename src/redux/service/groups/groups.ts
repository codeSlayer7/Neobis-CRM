import axiosInteceptor from '../../../api/base/interceptor';
import { Endpoints } from '../../../interfaces/enum/index';

export const getAllGroups = async () => {
  const data = await axiosInteceptor.get(`${Endpoints.GroupGetAll}`);
  console.log(data, 'getall');

  return data;
};
import { AxiosRequestConfig } from 'axios';
import axiosInteceptor from '../../../api/interceptor';
import { ColumnName } from '../../../interfaces/enum';
import {
  ApplicationStatusType,
  EducationType,
  Endpoints,
  GenderType,
  MarketingStrategyType,
  StateStatusType,
} from '../../../interfaces/enum';

interface IRegestBase<Data> {
  data: Data;
}

export interface IApplication {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  gender: GenderType;
  hasLaptop: true;
  marketingStrategy: MarketingStrategyType;
  department: {
    id: number;
    name: string;
    status: StateStatusType;
  };
  isArchived: true;
  reason: string;
  applicationStatusName: ApplicationStatusType;
  applicationStatusNum: number;
  applicationStatusUpdateDate: string;
  applicationStatusUpdateTime: string;
  creationDate: string;
  updateDate: string;
  education: EducationType;
  isUrgent: true;
}

export interface IApplicationPost {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  gender: GenderType | '';
  hasLaptop: boolean;
  marketingStrategy: MarketingStrategyType | '';
  department: {
    name: string;
    status: StateStatusType | '';
  };
  departmentId?: number;
  reason: string;
  applicationInitialStatusNum?: number;
  education: EducationType | '';
}

export const getAllApplicatins = async (): Promise<
  IApplication[] | IApplication | undefined
> => {
  try {
    const res = await axiosInteceptor.get(`/api/v1/applications`);
    console.log(res);
    const { data }: IApplication[] | IApplication = res;
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
  return undefined;
};

export const getSortedApplication = async (): Promise<
  IRegestBase<IApplication[]>
> => {
  try {
    return await axiosInteceptor.get(`${Endpoints.ApplicationsSorted}`);
  } catch (e) {
    throw new Error(e.message);
  }
};

export const postAppliction = async (data: IApplicationPost) => {
  try {
    return await axiosInteceptor.post(`${Endpoints.Applicatins}`, data);
  } catch (e) {
    throw new Error(e.message);
  }
};

export const updateApplication = async (
  id: string,
  data: AxiosRequestConfig<IApplicationPost>
) => {
  try {
    return await axiosInteceptor.put(`${Endpoints.Applicatins}/${id}`, data);
  } catch (e) {
    throw new Error(e.message);
  }
};

export const archiveApplication = async (id: string) => {
  await axiosInteceptor.put(`${Endpoints.ApplicationsArchiveWithId}/${id}`);
};

export const unArchiveApplication = async (id: string) => {
  await axiosInteceptor.put(`${Endpoints.ApplicationsUnArchiveWithId}/${id}`);
};

export const changeStatusApplication = async (id: string) => {
  await axiosInteceptor.put(`${Endpoints.ApplicationsStatusId}/${id}`);
};

export const addToGroup = async (id: string) => {
  await axiosInteceptor.put(`${Endpoints.ApplicationsConvert}/${id}`);
};

// const signUp = async (
//   user: Pick<User, 'email' | 'name' | 'password'>
// ): Promise<User> => {
//   return await client.post(auth.SIGN_UP, JSON.stringify({ user: { ...user } }));
// };

// const logout = async (sessionData: SessionDataType) => {
//   const config = { headers: { ...sessionData } };
//   await client.delete(auth.LOG_OUT, config);
// };

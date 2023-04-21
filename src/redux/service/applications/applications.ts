import { AxiosRequestConfig } from 'axios';
import axiosInteceptor from '../../../api/base/interceptor';
import { ColumnName } from '../../../interfaces/enum';
import {
  ApplicationStatusType,
  EducationType,
  Endpoints,
  GenderType,
  MarketingStrategyType,
  StateStatusType,
} from '../../../interfaces/enum';

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

export const getAllApplicatins = async (
  id?: number
): Promise<IApplication[] | IApplication | undefined> => {
  try {
    if (typeof id === 'number') {
      const res = await axiosInteceptor.get(
        `/api/v1/applications${id.toString()}`
      );
      console.log(res);
      const data: IApplication[] | IApplication = res.data;
      return data;
    }
    return await axiosInteceptor.get('/api/v1/applications');
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
  return undefined;
};

export const getSortedApplication = async (): Promise<IApplication[]> => {
  try {
    return await axiosInteceptor.get(`${Endpoints.ApplicationsSorted}`);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch sorted applications"); 
  }
};


export const postAppliction = async (
  data: AxiosRequestConfig<IApplicationPost>
) => {
  try {
    await axiosInteceptor.get(`${Endpoints.Applicatins}`, data);
  } catch (e) {
    throw new Error("Failed to post application")
  }
};

export const updateApplication = async (
  id: string,
  data: AxiosRequestConfig<IApplicationPost>
) => {
  try {
    return await axiosInteceptor.put(`${Endpoints.Applicatins}/${id}`, data);
  } catch (e) {
    throw new Error('Failed to update application with id ${id}');
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

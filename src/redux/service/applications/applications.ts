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
  courseCardDto: {
    id: number;
    name: string;
    cost: number;
    durationInMonth: number;
    numberOfLessons: number;
  };
  isArchived: true;
  reason: string;
  applicationStatus: ApplicationStatusType;
  applicationStatusNum: number;
  applicationStatusUpdateDate: string;
  applicationStatusUpdateTime: string;
  creationDate: string;
  updateDate: string;
  status?: string;
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
  marketingStrategyEnum: MarketingStrategyType | '';
  courseId?: number;
  reason: string;
  applicationStatusInitialNum: number | '';
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
    const res = await axiosInteceptor.post(`${Endpoints.Applicatins}`, data);
    console.log(res, 'poijiojio');
    return res;
  } catch (e) {
    throw new Error(e.message);
  }
};
export const archiveAppliction = async ({ id, reason }) => {
  try {
    const res = await axiosInteceptor.post(
      `${Endpoints.ApplicationsArchiveWithId}/${id}`,
      reason
    );
    return res;
  } catch (e) {
    throw new Error(e.message);
  }
};
export const unArchiveAppliction = async ({ id }) => {
  try {
    const res = await axiosInteceptor.post(
      `${Endpoints.ApplicationsUnArchiveWithId}/${id}`
    );
    return res;
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

export const changeStatusApplication = async (data) => {
  let requests = [];

  for (const [key, value] of Object.entries(data)) {
    console.log(data[key].items, 'items'); //www.google.com

    for (let y = 0; y < data[key].items.length; y++) {
      let application = data[key].items[y];

      console.log(application, 'one app');

      const statusObj = {
        WAITING_FOR_CALL: 1,
        CALL_RECEIVED: 2,
        APPLIED_FOR_TRIAL: 3,
        ATTENDED_TRIAL: 4,
      };
      if (application.status) {
        requests.push(
          axiosInteceptor.put(
            `${Endpoints.ApplicationsStatusId}?application_id=${
              application.id
            }&new_status=${statusObj[application.status]}`
          )
        );
      }
    }
  }
  console.log('Left For Loop');

  // wait until all requests are done!
  await Promise.all(requests).then((results) => {
    // here we have all the results
    console.log('all requests finished!', results);
    for (let i = 0; i < requests.length; i++) {
      console.log(i, 'request resultet in', results[i]);
    }
  });
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

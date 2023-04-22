import { StudentData } from '../redux/types/adminTypes';
import axiosInteceptor from './base/interceptor';
export interface SearchStudentParams{
  string?: string | null;
  status?: string | null
  groupId?: number | null;
}


export const getAllStudents = () => {
  return axiosInteceptor.get('/api/v1/students?size=10000');
};

export const createStudent = (student: StudentData) => {
  return axiosInteceptor.post('/api/v1/students', student)
}

export const updateStudent = (id: any,student: any) => {
  return axiosInteceptor.put(`/api/v1/students/${id}`, student)
}

export const searchStudent = (params?: SearchStudentParams) => {
  // const query = new URLSearchParams(params).toString();
  return axiosInteceptor.get(`/api/v1/students/find`,{params});
};


// export const filterStudent = () => {
//   return axiosInteceptor.get('/api/v1/students/filter?')
// }

export const archiveStudent = (reason: string, id: number) => {
  const params = {studentId: id}
  return axiosInteceptor.put('/api/v1/students/archive', {reason}, {params})
}
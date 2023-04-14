import { StudentData } from '../redux/types/adminTypes';
import axiosInteceptor from './base/interceptor';

export const getAllStudents = () => {
  return axiosInteceptor.get('/api/v1/students');
};

export const createStudent = (student: StudentData) => {
  return axiosInteceptor.post('/api/v1/students', student)
}
import { Api } from "./base";

export const getAllStudents = () => {
    return Api.get('/api/v1/students');   
};

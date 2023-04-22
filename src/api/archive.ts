import axiosInteceptor from "./base/interceptor";

export const getAllMentorsArchive = () => {
    return axiosInteceptor.get('/api/v1/mentors/cards/filter?status=ARCHIVED');   
};


export const getAllStudentsArchive = () => {
    return axiosInteceptor.get('/api/v1/students/filter?status=ARCHIVED');   
};

export const getAllUsersArchive = () => {
    return axiosInteceptor.get('/api/v1/admin/users/filter?status=ARCHIVED');   
};

export const getAllGroupsArchive = () => {
    return axiosInteceptor.get('/api/v1/groups?status=ARCHIVED');   
};
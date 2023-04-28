export interface UserData{
        email: string,
        password?: string,
        phoneNumber: string,
        firstName?: string,
        lastName: string
}

export interface StudentData{
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    gender: string,
    enrollmentGroupId: string;
}


export interface UpdateData{
    id : string;
    user: string;
}
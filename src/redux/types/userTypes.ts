export interface UserData{
    email : string;
    password: string;
}

export interface UserForgotPassword{
    email : string;
}

export interface UserConfirmCode{
    code : string;
}

export interface UserResetPassword{
    code : string;
    newPassword : string;
    confirmPassword: string;
}
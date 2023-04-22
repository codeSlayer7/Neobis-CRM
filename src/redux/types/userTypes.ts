export interface UserData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface UserForgotPassword {
  email: string;
}

export interface UserConfirmCode {
  code: string;
}

export interface UserResetPassword {
  code: string;
  newPassword: string;
  confirmPassword: string;
}
export type UserRole = 'ROLE_ADMIN' | 'ROLE_MANAGER';

import * as yup from 'yup';
import React, { useEffect } from 'react';
import Auth from '../../../icons/auth';
import EmailInput from '../../../components/Inputs/EmailInput';
import PasswordInput from '../../../components/Inputs/PasswordInput';
import LogInButton from '../../../components/Buttons/LogInButton';
import CheckBox from '../../../components/CheckBox';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { UserData } from '../../../../redux/types/userTypes';
import { loginUserThunk } from '../../../../redux/slices/userSlice';
import { useAppDispatch } from '../../../../types/global';

export interface ILoginForm {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .required('Укажите логин !')
    .email('Неверный email. Проверьте, правильно ли введён email'),
  password: yup
    .string()
    .required('Укажите пароль !')
    .min(6, 'Пароль должен быть неменьше 6 символов')
    .max(40, 'Пароль должен быть небольше 40 символов'),
});

const initialValues = {
  email: '',
  password: '',
};

export const LogIn: React.FC = () => {
  const dispatch = useAppDispatch();

  const onSubmit = (values: UserData) => {
    dispatch(loginUserThunk(values));
  };

  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit,
  });

  return (
    <div className="flex h-screen items-center justify-around">
      <div className="mt-[55px] ">
        <Auth />
      </div>
      <form onSubmit={formik.handleSubmit} className="flex flex-col">
        <p className="mb-[60px] text-center text-[36px] font-semibold">Вход</p>
        <EmailInput
          value={formik.values.email}
          name="email"
          onChange={formik.handleChange}
          error={Boolean(formik.touched.email && formik.errors.email)}
          helperText={formik.errors.email}
        />
        <PasswordInput
          name="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={Boolean(formik.touched.password && formik.errors.password)}
          helperText={formik.errors.password}
        />
        <LogInButton />
        <CheckBox />
      </form>
    </div>
  );
};

export default LogIn;

import * as yup from 'yup';
import React, { useEffect } from 'react';
import Auth from '../../../icons/auth';
import EmailInput from '../../../components/Inputs/EmailInput';
import PasswordInput from '../../../components/Inputs/PasswordInput';
import CheckBox from '../../../components/CheckBox';
import { useFormik } from 'formik';
import { UserData } from '../../../../redux/types/userTypes';
import { loginUserThunk } from '../../../../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../components/Buttons/Button';
import { useAppDispatch, useAppSelector } from '../../../../constants/global';
// import { toast } from 'react-toastify';
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export interface ILoginForm {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().required('Укажите логин !').email('Неверный email!'),
  password: yup
    .string()
    .required('Укажите пароль !')
    .min(6, 'Пароль должен быть не меньше 6 символов')
    .max(40, 'Пароль должен быть не больше 40 символов'),
});

const initialValues = {
  email: '',
  password: '',
};

export const LogIn: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { role, error } = useAppSelector((state) => {
    return state.user;
  });

  const onSubmit = (values: UserData) => {
    dispatch(loginUserThunk(values));
  };

  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit,
  });

  useEffect(() => {
    if (role) {
      role === 'ROLE_ADMIN' && navigate('/admin');
      role === 'ROLE_MANAGER' && navigate('/');
    }
  }, [role]);

  return (
    <div className="flex h-screen items-center justify-around">
      <div className="mt-[55px]">
        <Auth />
      </div>
      <form onSubmit={formik.handleSubmit} className="flex flex-col">
        <p className="mb-[60px] text-center text-[36px] font-semibold">Вход</p>
        <EmailInput
          value={formik.values.email}
          name="email"
          onChange={formik.handleChange}
          error={Boolean(formik.touched.email || formik.errors.email)}
          helperText={formik.errors.email}
        />
        <PasswordInput
          name="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={Boolean(formik.touched.password || formik.errors.password)}
          helperText={formik.errors.password}
        />
        <div>
          {/* <ToastContainer /> */}
          <Button label="Войти" />
        </div>
        <CheckBox />
      </form>
    </div>
  );
};

export default LogIn;

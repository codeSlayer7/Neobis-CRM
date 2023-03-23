import { useFormik } from 'formik';
import { Button } from '../../../components/Buttons/Button';
import EmailInput from '../../../components/Inputs/EmailInput';
import Auth from '../../../icons/auth';
import * as yup from 'yup';
import { useAppDispatch } from '../../../../types/global';
import { useNavigate } from 'react-router-dom';
import { UserForgotPassword } from '../../../../redux/types/userTypes';
import { forgotPasswordThunk } from '../../../../redux/slices/userSlice';
import { useState } from 'react';

const schema = yup.object().shape({
  email: yup
    .string()
    .required('Укажите логин !')
    .email('Неверный email. Проверьте, правильно ли введён email'),
});

const initialValues = {
  email: '',
};

export default function ForgotPassword() {
  const [code, setCode] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = (values: UserForgotPassword) => {
    dispatch(forgotPasswordThunk(values));

    navigate('/confirmation', { state: { code: code } });
  };

  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit,
  });

  return (
    <div className="flex justify-around h-screen items-center">
      <div className="mt-[86px]">
        <Auth />
      </div>
      <form className="flex flex-col" onSubmit={formik.handleSubmit}>
        <div className="mb-[36px] text-center text-[36px] font-semibold">
          Забыли пароль
        </div>
        <p className="mb-[60px] w-[450px] text-[20px] font-normal">
          Введите адрес электронной почты для сброса пароля
        </p>
        <EmailInput
          value={formik.values.email}
          name="email"
          onChange={formik.handleChange}
          error={Boolean(formik.touched.email && formik.errors.email)}
          helperText={formik.errors.email}
        />
        <Button label="Отправить" />
      </form>
    </div>
  );
}

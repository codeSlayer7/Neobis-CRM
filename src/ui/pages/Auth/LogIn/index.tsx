import * as yup from 'yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
// import { yupResolver } from '@hook'
import Auth from '../../../icons/auth';
import EmailInput from '../../../components/Inputs/EmailInput';
import PasswordInput from '../../../components/Inputs/PasswordInput';
import LogInButton from '../../../components/Buttons/LogInButton';
import CheckBox from '../../../components/CheckBox';

export interface ILoginForm {
  email: string;
  password: string;
  type: string;
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

export const LogIn: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<ILoginForm>({ resolver: yupResolver(schema) });

  const onSubmit = (data: ILoginForm) => {
    console.log(data);
    reset();
  };

  console.log(watch('email'));

  return (
    <div className="flex h-screen items-center justify-around">
      <div className="mt-[55px] ">
        <Auth />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <p className="mb-[60px] text-center text-[36px] font-semibold">Вход</p>
        <EmailInput
          type="text"
          {...register('email', {
            required: true,
            // validate: {},
          })}
          // error={errors?.email && <span>This field is required</span>}
        />
        <PasswordInput
          type="password"
          {...register('password', {
            required: true,
            validate: {},
          })}
          // error={errors.password && <span>This field is required</span>}
        />
        <LogInButton />
        <CheckBox />
      </form>
    </div>
  );
};

export default LogIn;

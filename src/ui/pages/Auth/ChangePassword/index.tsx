import ChangeInput from '../../../components/Inputs/ChangeInput';
import Auth from '../../../icons/auth';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useAppDispatch } from '../../../../types/global';
import { useLocation, useNavigate } from 'react-router-dom';
import { resetPasswordThunk } from '../../../../redux/slices/userSlice';
import { UserResetPassword } from '../../../../redux/types/userTypes';
import { Button } from '../../../components/Buttons/Button';

const schema = yup.object().shape({
  newPassword: yup
    .string()
    .required('Укажите пароль !')
    .min(6, 'Пароль должен быть неменьше 6 символов')
    .max(40, 'Пароль должен быть небольше 40 символов'),
  confirmPassword: yup
    .string()
    .required('Укажите пароль !')
    .min(6, 'Пароль должен быть неменьше 6 символов')
    .max(40, 'Пароль должен быть небольше 40 символов'),
  code: yup.string(),
});

export default function ChangePassword() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const code = location?.state.code;

  const initialValues = {
    newPassword: '',
    confirmPassword: '',
    code: code,
  };
  const onSubmit = (values: UserResetPassword) => {
    console.log('here');

    if (formik.values.newPassword !== formik.values.confirmPassword) {
      <div className="bg-red-100 text-red-800 p-2 mb-4">
        Пароли не совпадают !
      </div>;
    }
    dispatch(resetPasswordThunk(values));
  };

  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit,
  });
  console.log('formik', formik);

  return (
    <div className="flex h-screen items-center justify-around">
      <div className="mt-[86px]">
        <Auth />
      </div>
      <form onSubmit={formik.handleSubmit} className="flex flex-col">
        <div className="mb-[36px] text-center text-[36px] font-semibold">
          Изменить пароль
        </div>
        <div className="mb-[20px] text-[20px] font-medium">Новый пароль</div>
        <ChangeInput
          name="newPassword"
          type="password"
          value={formik.values.newPassword}
          onChange={formik.handleChange}
          error={Boolean(
            formik.touched.newPassword && formik.errors.newPassword
          )}
          helperText={formik.errors.newPassword}
        />
        <div className="mb-[20px] text-[20px] font-medium">
          Повторить пароль
        </div>
        <ChangeInput
          name="confirmPassword"
          type="password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          error={Boolean(
            formik.touched.confirmPassword && formik.errors.confirmPassword
          )}
          helperText={formik.errors.confirmPassword}
        />
        <Button label="Изменить пароль" />
      </form>
    </div>
  );
}

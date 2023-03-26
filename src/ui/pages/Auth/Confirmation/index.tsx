import { useFormik } from 'formik';
import ConfirmationInput from '../../../components/Inputs/Confirmation';
import Auth from '../../../icons/auth';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { UserConfirmCode } from '../../../../redux/types/userTypes';
import { confirmCodeThunk } from '../../../../redux/slices/userSlice';
import { Button } from '../../../components/Buttons/Button';
import { useAppDispatch } from '../../../../constants/global';

const schema = yup.object().shape({
  code: yup
    .string()
    .required('Укажите код !')
    .min(6, 'Код должен быть неменьше 6 символов')
    .max(20, 'Код должен быть небольше 20 символов'),
});

const initialValues = {
  code: '',
};

export default function Confirmation() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = (values: UserConfirmCode) => {
    dispatch(confirmCodeThunk(values));
    navigate('/change-password', { state: { code: values } });
  };

  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit,
  });

  return (
    <div className="flex h-screen items-center justify-around">
      <div className="mt-[86px]">
        <Auth />
      </div>
      <form onSubmit={formik.handleSubmit} className="flex flex-col">
        <div className="mb-[36px] text-center text-[36px] font-semibold">
          Код подтверждения
        </div>
        <p className="mb-[60px] text-center text-[20px] font-normal">
          Введите код отправленный вам на почту
        </p>
        <ConfirmationInput
          name="code"
          type="code"
          value={formik.values.code}
          onChange={formik.handleChange}
          error={Boolean(formik.touched.code && formik.errors.code)}
          helperText={formik.errors.code}
        />
        <Button label="Отправить" />
      </form>
    </div>
  );
}

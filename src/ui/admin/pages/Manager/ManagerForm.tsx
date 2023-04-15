import { useFormik } from 'formik';
import { schema } from '../../../../utils/schema';
import InputField from '../../components/Input/InputField';
import { createUser } from '../../../../api/adminApi';
import { UserData } from '../../../../redux/types/adminTypes';
import SendButton from '../../components/Button';
import { getAllStudentsThunk } from '../../../../redux/slices/studentSlice';
import { useAppDispatch } from '../../../../constants/global';

const initialValues = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  password: '',
};

function ManagerForm() {
  // const dispatch = useAppDispatch()
  const onSubmit = (data: UserData) => {
    console.log('in onsubmit', data);

    createUser(data)
      .then((res) => {
        // dispatch(getAllStudentsThunk())
        console.log('hhere', res);
        /// add popup
        // handleClose
      })
      .catch((error) => {
        // add popup
        console.log('error', error);
      });
  };

  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit,
  });

  //   log

  return (
    <form onSubmit={formik.handleSubmit} className="mt-10">
      <InputField
        name="firstName"
        value={formik.values.firstName}
        onChange={formik.handleChange}
        label="Имя"
      />
      <InputField
        name="lastName"
        value={formik.values.lastName}
        onChange={formik.handleChange}
        label="Фамилия"
      />
      <InputField
        type="number"
        name="phoneNumber"
        value={formik.values.phoneNumber}
        onChange={formik.handleChange}
        label="Номер телефона"
      />
      <InputField
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        label="Почта"
      />
      <InputField
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        label="Пароль"
      />
      <SendButton name="Создать" />
    </form>
  );
}

export default ManagerForm;

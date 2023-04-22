import { useFormik } from 'formik';
import InputField from '../../components/Input/InputField';
import SendButton from '../../components/Button';
import { useAppDispatch } from '../../../../constants/global';
import { getAllUserThunk } from '../../../../redux/slices/adminSlice';
import { updateUser } from '../../../../api/adminApi';
import { UserData } from '../../../../redux/types/adminTypes';
import { schemaUpdate } from '../../../../utils/schema';

const UpdateManagerForm = ({ onClose, user : oldUser }: any) => {
  const {lastVisitDate, lastVisitTime, ...user  } = oldUser;;
  

  const dispatch = useAppDispatch();
  const onSubmit = (data: UserData) => {
    updateUser(user.id, data)
      .then((res) => {
        dispatch(getAllUserThunk());
        onClose();
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  const formik = useFormik({
    initialValues: user,
    validationSchema: schemaUpdate,
    validateOnChange: false,
    onSubmit,
  });

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
      <SendButton name={'Изменить'} />
    </form>
  );
};

export default UpdateManagerForm;

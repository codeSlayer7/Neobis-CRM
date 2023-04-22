import { useFormik } from 'formik';
import { createStudent } from '../../../../api/studentApi';
import { StudentData } from '../../../../redux/types/adminTypes';
import InputField from '../../components/Input/InputField';
import SendButton from '../../components/Button';
import { useAppDispatch } from '../../../../constants/global';
import { getAllStudentsThunk } from '../../../../redux/slices/studentSlice';
import { schemaCreate } from '../../../../utils/schema';
import GroupField, { array } from '../../components/AdminDropDown/GroupField';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  gender: '',
  enrollmentGroupId: '',
};

export const StudentForm = ({ onClose }: any) => {
  const dispatch = useAppDispatch();
  const onSubmit = (data: StudentData) => {
    createStudent(data)
      .then((res) => {
        dispatch(getAllStudentsThunk());
        /// add popup
        onClose();
      })
      .catch((error) => {
        // add popup
        console.log('error', error);
      });
  };

  const formik = useFormik({
    initialValues,
    validationSchema: schemaCreate,
    validateOnChange: false,
    onSubmit,
  });

  console.log("3", formik);
  
  return (
    <form className="mt-6" onSubmit={formik.handleSubmit}>
      <InputField
        label="Имя"
        name="firstName"
        value={formik.values.firstName}
        onChange={formik.handleChange}
      />
      <InputField
        label="Фамилия"
        name="lastName"
        value={formik.values.lastName}
        onChange={formik.handleChange}
      />
      <InputField
        label="Пол"
        name="gender"
        value={formik.values.gender}
        onChange={formik.handleChange}
      />
      <InputField
        label="Почта"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <InputField
        label="Номер телефона"
        type="number"
        name="phoneNumber"
        value={formik.values.phoneNumber}
        onChange={formik.handleChange}
      />
      <label className="mb-3 block text-lg font-semibold text-gray-900">
        Группа
      </label>
      <GroupField
      name="enrollmentGroupId"
      onChange={(e)=> formik.setFieldValue("enrollmentGroupId", e.target.value)}
      value={formik.values.enrollmentGroupId}
      options={array}
      />
      <SendButton name="Добавить" />
    </form>
  );
};

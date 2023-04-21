import { useFormik } from 'formik';
import { StudentData } from '../../../../redux/types/adminTypes';
import InputField from '../../components/Input/InputField';
import SendButton from '../../components/Button';
import { useAppDispatch } from '../../../../constants/global';
import { getAllStudentsThunk } from '../../../../redux/slices/studentSlice';
import { schemaCreate } from '../../../../utils/schema';
import { updateStudent } from '../../../../api/studentApi';
import GroupField, { array } from '../../components/AdminDropDown/GroupField';


export const UpdateStudentForm = ({ onClose, student }: any) => {
  const dispatch = useAppDispatch();
  const onSubmit = (data: StudentData) => {
    updateStudent(student.id,data)
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
    initialValues: student,
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
        label="Почта"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <InputField
        label="Номер телефона"
        name="phoneNumber"
        value={formik.values.phoneNumber}
        onChange={formik.handleChange}
      />
      {/* <label className="mb-3 block text-lg font-semibold text-gray-900">
        Группа
      </label>
      <GroupField
      name="enrollmentGroupId"
      onChange={(e)=> formik.setFieldValue("enrollmentGroupId", e.target.value)}
      value={formik.values.enrollmentGroupId}
      options={array}
      /> */}
      <SendButton name="Изменить" />
    </form>
  );
};

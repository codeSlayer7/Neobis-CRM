import { useFormik } from "formik";
import { createStudent } from "../../../../api/studentApi";
import { StudentData } from "../../../../redux/types/adminTypes";
import InputField from "../../components/Input/InputField";
import { schema } from "../../../../utils/schema";


  const initialValues = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    gender: '',
    status: '',
    enrollmentGroupId: ''
  };

export const StudentForm =  () => {
  const onSubmit = (data: StudentData ) => {
    console.log('in onsubmit', data);

    createStudent(data)
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
  return (
    <div className="my-5 ml-[30%] ">
        <form className="mt-6">
          <InputField label="Имя"        
           name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange} />
          <InputField label="Фамилия"/>
          <InputField label="Почта"/>
          <InputField label="Номер телефона"/>
          <InputField label="Пол"/>
          <select
            id="cars"
            name="cars"
            className="mb-2 block h-[40px] w-[377px] rounded-sm border border-slate-300 bg-white p-2.5 text-sm "
          >
            <option value="js">JavaScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="ui8">UI8</option>
          </select>

          <button
            type="button"
            className="mt-4 h-[47px] w-[377px] rounded-lg border border-none bg-[#4588C6] text-lg text-white transition duration-150 hover:scale-95"
          >
            Добавить
          </button>
        </form>
      </div>
  );
}


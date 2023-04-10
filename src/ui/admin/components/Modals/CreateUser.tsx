import { GrFormClose } from 'react-icons/gr';
import { useState } from 'react';
import { useFormik } from 'formik';
import { Status, useAppDispatch } from '../../../../constants/global';
import { schema } from '../../../../utils/schema';
import { adminCreateUser } from '../../../../redux/slices/adminSlice';
import { setCookie } from '../../../../utils/cookie';



const initialValues = {
  email: '',
  password: '',
  phoneNumber: '',
  firstName: '',
  lastName: '',
};

interface handleClose{
  handleClose: () => void;
}


function CreateUser({handleClose}: handleClose) {
  const dispatch = useAppDispatch()


  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: (data) => {
      const object = {handleClose, data}
      dispatch(adminCreateUser(object))
    },
  });

  return (
    <div className="m-auto my-24 ">
      <div className="relative flex h-[656px] w-[598px] flex-col items-center rounded-lg border-2 bg-[#DADADA]">
        <h3 className="mt-6 text-3xl font-bold ">Создать менеджера</h3>
        <button type="button">
          <GrFormClose className="absolute left-[550px] top-3 text-3xl " />
        </button>

        <form onSubmit={formik.handleSubmit} className="mt-10">
          <label className="mb-3 block text-lg font-semibold text-gray-900">
            Имя
          </label>
          <input
            name="firstName"
            onChange={formik.handleChange}
            className="mb-3 block h-[40px] w-[377px] rounded-sm border border-black bg-white p-2.5 text-sm"
          />

          <label className="mb-3 block text-lg font-semibold text-gray-900">
            Фамилия
          </label>
          <input
            name="lastName"
            onChange={formik.handleChange}
            className="mb-3 block h-[40px] w-[377px] rounded-sm border border-black bg-white p-2.5 text-sm"
          />

          <label className="mb-3 block text-lg font-semibold text-gray-900">
            Почта
          </label>
          <input
            name="email"
            onChange={formik.handleChange}
            className="mb-3 block h-[40px] w-[377px] rounded-sm border border-black bg-white p-2.5 text-sm"
          />
          <label className="mb-3 block text-lg font-semibold text-gray-900">
            Номер телефона
          </label>

          <input
            name="phoneNumber"
            onChange={formik.handleChange}
            className="mb-3 block h-[40px] w-[377px] rounded-sm border border-black bg-white p-2.5 text-sm"
          />
          <label className="mb-3 block text-lg font-semibold text-gray-900">
            Пароль
          </label>

          <input
            name="password"
            onChange={formik.handleChange}
            className="mb-3 block h-[40px] w-[377px] rounded-sm border border-black bg-white p-2.5 text-sm"
          />
          <button
            type="submit"
            className="mt-4 h-[47px] w-[377px] rounded-lg border border-black bg-black text-lg text-white transition duration-150 hover:scale-95"
          >
            Создать
          </button>
        </form>
      </div>
    </div>
  );
}
export default CreateUser;

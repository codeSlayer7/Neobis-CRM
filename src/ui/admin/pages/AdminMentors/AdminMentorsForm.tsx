import { FiUpload } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { MdDeleteOutline } from 'react-icons/md';
import React, { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import FormData from 'form-data';
import { useAppDispatch } from '../../../../constants/global';
import {
  addNewMentorThunk,
  getAllMentorsThunk,
} from '../../../../redux/service/mentors/mentorsAction';
import { MentorData } from '../../../../redux/types/mentorTypes';
import { updateMentor } from '../../../../redux/service/mentors/mentors';

export type MentorType = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  courseId: number;
  imageUrl: string;
};
type Props = {
  handleClose: () => void;
  type: 'edit' | 'create';
  editingMentor?: MentorType;
};

function AdminMentorsForm({ handleClose, type, editingMentor }: Props) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [formValues, setFormValues] = useState<MentorData>({
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    courseId: 0,
  });
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (type === 'edit' && editingMentor) {
      setSelectedImage(editingMentor.imageUrl);
    }
  }, [editingMentor, type]);

  const onSubmit = (values: any) => {
    if (type === 'create') {
      const formData = new FormData();
      formData.append('multipartFile', selectedImage as Blob);
      dispatch(addNewMentorThunk({ formData, values }));
      handleClose();
    } else if (type === 'edit') {
      const formData = new FormData();
      formData.append('multipartFile', selectedImage as Blob);
      updateMentor({ values: { ...values, id: editingMentor.id } })
      
        .then((res) => {
          dispatch(getAllMentorsThunk());
          handleClose();
        })
        .catch((err) => alert('Произошла ошибка!'));
    }
  };

  return (
    <div className="mx-auto my-5 h-[690px] w-[1000px] rounded-lg border-2 border-slate-200 bg-white shadow-lg ">
      <div className="flex h-14 w-full items-center justify-between rounded-t-lg border-2 bg-[#4588C6]">
        <h1 className="ml-5 text-left text-3xl  font-semibold text-white">
          Добавить преподавателя
        </h1>
        <button onClick={handleClose} type="button">
          <IoClose className="mr-5 text-3xl text-white" />
        </button>
      </div>
      <div className="flex">
        <div className=" ml-20 mt-[63px] w-[50%]">
          <div className="mt-5 flex h-72 w-80 flex-col items-center rounded-lg border-2 border-dashed border-slate-400 bg-[#f1f1f1]  text-center ">
            <FiUpload className={selectedImage ? 'hidden' : 'mt-20 text-5xl'} />

            {selectedImage && (
              <div className="mb-5  h-72 w-80 ">
                <img
                  alt="not found"
                  className="w-[100%]"
                  src={
                    typeof selectedImage !== 'string'
                      ? URL.createObjectURL(selectedImage)
                      : selectedImage
                  }
                />
              </div>
            )}
          </div>
          <div className="mt-[113px] flex h-11 w-[400px] items-center  justify-between">
            <input
              type="file"
              name="file"
              onChange={(event) => {
                setSelectedImage(event.target.files[0]);
              }}
              className="  h-11 w-[330px] rounded-lg border bg-[#4588C6]  p-1 text-lg text-white transition duration-150 hover:scale-95"
            />
            <button
              type="button"
              className={
                selectedImage
                  ? 'mr-5 text-4xl text-[#4588C6]'
                  : 'mt-[172px] hidden'
              }
              onClick={() => setSelectedImage(null)}
            >
              <MdDeleteOutline />
            </button>
          </div>
        </div>
        <Formik
          initialValues={{
            email: type === 'create' ? '' : editingMentor?.email,
            firstName: type === 'create' ? '' : editingMentor?.firstName,
            lastName: type === 'create' ? '' : editingMentor?.lastName,
            phoneNumber: type === 'create' ? '' : editingMentor?.phoneNumber,
            courseId: type === 0 ? '' : editingMentor?.courseId,
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .min(2, 'Name must be at least 2 characters')
              .required('This field is required'),
            firstName: Yup.string()
              .min(2, 'Name must be at least 2 characters')
              .required('This field is required'),
            lastName: Yup.string()
              .min(2, 'Name must be at least 2 characters')
              .required('This field is required'),
            phoneNumber: Yup.string()
              .min(6, 'Must be number')
              .required('This field is required'),
            courseId: Yup.string()
              .min(1, 'Must be number')
              .required('This field is required'),
          })}
          onSubmit={onSubmit}
        >
          {({ values }) => (
            <Form className="mt-10 ml-10 mr-20 flex flex-col">
              <Field
                name="firstName"
                id="firstName"
                type="text"
                placeholder="Имя"
                className="my-5 h-10 w-[330px] rounded-lg border border-slate-300 p-2 "
                required
              />

              <Field
                id="lastName"
                placeholder="Фамилия   "
                name="lastName"
                type="text"
                className="my-5 h-10 w-[330px] rounded-lg border border-slate-300 p-2 "
                required
              />

              <Field
                id="email"
                placeholder="Почта"
                type="text"
                name="email"
                className="my-5 h-10 w-[330px] rounded-lg border border-slate-300 p-2"
                required
              />

              <Field
                id="phoneNumber"
                placeholder="Номер телефона"
                name="phoneNumber"
                type="text"
                className="my-5 h-10 w-[330px] rounded-lg border border-slate-300 p-2"
                required
              />
              <Field
                type="number"
                placeholder="Направление"
                id="courseId"
                name="courseId"
                className="my-5 h-10 w-[330px] rounded-lg border border-slate-300 p-2"
              />

              {/* <option value="js">JavaScript</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
                <option value="ui8">UI8</option> */}

              <ErrorMessage className="error" name="lessons" component="div" />

              <button
                type="submit"
                className="mt-11 h-11 w-[330px] rounded-lg border bg-[#4588C6] text-lg text-white transition duration-150 hover:scale-95 "
              >
                Сохранить
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default AdminMentorsForm;

import { IoClose } from 'react-icons/io5';
import { FiUpload } from 'react-icons/fi';
import { useState } from 'react';
import { MdDeleteOutline } from 'react-icons/md';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import FormData from 'form-data';
import { useAppDispatch } from '../../../../constants/global';
import { addNewCourseThunk } from '../../../../redux/service/courses/coursesAction';

function CreateCourse({ handleClose }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useAppDispatch();

  const onSubmit = (values) => {
    const formData = new FormData();
    formData.append('multipartFile', selectedImage as Blob);
    dispatch(addNewCourseThunk({ formData ,values}));
    handleClose();
  };

  return (
    <div className=" h-[100vh] w-[100%]">
      <div className="mx-auto my-20 h-[620px] w-[990px] rounded-lg border-2 border-slate-200 bg-white shadow-lg ">
        <div className="flex h-14 w-full items-center justify-between rounded-t-lg border-2 bg-[#4588C6]">
          <h1 className="ml-5 text-left text-3xl  font-semibold text-white">
            Создать новый курс
          </h1>
          <button type="button" onClick={handleClose}>
            <IoClose className="mr-5 text-3xl text-white" />
          </button>
        </div>
        <div className="flex w-full p-5">
          <div className=" ml-20 mt-[60px] w-[50%]">
            <div className="flex h-[280px] w-80 flex-col items-center rounded-lg border-2 border-dashed border-slate-300 bg-[#f1f1f1]  text-center ">
              <FiUpload
                className={selectedImage ? 'hidden' : 'mt-20 text-5xl'}
              />

              {selectedImage && (
                <div className="mb-5  h-72 w-80 ">
                  <img
                    alt="not found"
                    className="w-[100%] rounded-xl border p-1"
                    src={URL.createObjectURL(selectedImage)}
                  />
                </div>
              )}
            </div>
            <div className="mt-[64px] flex h-11 w-[400px] items-center  justify-between">
              <input
                type="file"
                name="file"
                onChange={(event) => {
                  setSelectedImage(event.target.files[0]);
                }}
                className=" :selected-bg-red h-11 w-80 rounded-lg border bg-[#4588C6] p-1 text-lg text-white transition duration-150 hover:scale-95"
              />
              <button
                type="button"
                className={
                  selectedImage
                    ? 'mr-5 text-4xl text-[#4588C6]'
                    : ' hidden border border-blue-700'
                }
                onClick={() => setSelectedImage(null)}
              >
                <MdDeleteOutline />
              </button>
            </div>
          </div>
          <div>
            <Formik
              initialValues={{
                name: '',
                cost: '',
                durationInMonth: '',
                numberOfLessons: '',
                // numberOfGroups: '',
              }}
              validationSchema={Yup.object({
                name: Yup.string()
                  .min(2, 'Name must be at least 2 characters')
                  .required('This field is required'),
                cost: Yup.string()
                  .min(1, 'Cost must be number')
                  .required('This field is required'),
                durationInMonth: Yup.string()
                  .min(1, 'Must be number')
                  .required('This field is required'),
                numberOfLessons: Yup.string()
                  .min(1, 'Must be number')
                  .required('This field is required'),
               })}
              onSubmit={onSubmit}
            >
              {({ values }) => (
                <Form className="mt-10 ml-10 mr-20 flex flex-col">
                  <Field
                    name="name"
                    id="name"
                    type="text"
                    placeholder=" Название курса"
                    className="my-5 h-10 w-[330px] rounded-lg border border-slate-300 p-2 "
                    required
                  />

                  <Field
                    id="month"
                    placeholder="Длительность курса                "
                    name="durationInMonth"
                    type="text"
                    className="my-5 h-10 w-[330px] rounded-lg border border-slate-300 p-2 "
                    required
                  />

                  <Field
                    id="cost"
                    placeholder="Стоимость курса"
                    type="text"
                    name="cost"
                    className="my-5 h-10 w-[330px] rounded-lg border border-slate-300 p-2"
                    required
                  />

                  <Field
                    id="lessons"
                    placeholder="Количество занятий"
                    name="numberOfLessons"
                    type="text"
                    className="my-5 h-10 w-[330px] rounded-lg border border-slate-300 p-2"
                    required
                  />
                  {/* <Field
                    id="groups"
                    placeholder="Количество групп"
                    name="numberOfGroups"
                    type="text"
                    className="my-5 h-10 w-[330px] rounded-lg border border-slate-300 p-2"
                    required
                  /> */}
                  <ErrorMessage
                    className="error"
                    name="lessons"
                    component="div"
                  />
                  {/* <ErrorMessage className="error" name="text" component="div" /> */}

                  <button
                    type="submit"
                    className="mt-11 h-11 w-[330px] rounded-lg border bg-[#4588C6] text-lg text-white transition duration-150 hover:scale-95 "
                  >
                    Сохранить
                  </button>
                  {/* <SendButton name="Сохранить" type="submit" /> */}
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateCourse;

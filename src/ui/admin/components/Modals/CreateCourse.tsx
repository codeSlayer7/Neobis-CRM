import { IoClose } from 'react-icons/io5';
import { FiUpload } from 'react-icons/fi';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdDeleteOutline } from 'react-icons/md';
import { useAppDispatch } from '../../../../constants/global';

function CreateCourse({ handleClose }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  function onSubmit(values) {
    const formData = new FormData();
    formData.append('multipartFile', selectedImage);

    // const { title, description, subtitle, text } = values;
    // const articleData = {
    //   title,
    //   description,
    //   subtitle,
    //   text,
    // };

    dispatch(addNewArticle({ articleData, formData }));
  }

  return (
    <div className=" h-[100vh] w-[100%]">
      <div className="mx-auto my-20 h-[620px] w-[990px] rounded-lg border-2 border-slate-200 bg-white shadow-lg ">
        <div className="flex h-14 w-full items-center justify-between rounded-t-lg border-2 bg-[#4588C6]">
          <h1 className="ml-5 text-left text-3xl  font-semibold text-white">
            Создать новый курс
          </h1>
          <button onClick={handleClose}>
            <IoClose className="mr-5 text-3xl text-white" />
          </button>
        </div>
        <div className="flex w-full p-5">
          <div className=" ml-20 mt-[60px] w-[50%]">
            <div className="flex h-72 w-80 flex-col items-center rounded-lg border-2 border-dashed border-black bg-[#f1f1f1]  text-center ">
              <FiUpload className={selectedImage ? 'hidden' : 'text-5xl mt-20'} />

              {selectedImage && (
                <div className="mb-5  h-72 w-80 ">
                  <img
                    alt="not fount"
                    className='w-[100%]'                    
                    src={URL.createObjectURL(selectedImage)}
                  />
                </div>
              )}
            </div>
            <div className='w-[400px] flex items-center justify-between h-11  mt-[72px]'>
            <input
              type="file"
              name="file"
              onChange={(event) => {
                setSelectedImage(event.target.files[0]);
              }}
              className=" h-11 w-80 rounded-lg border bg-[#4588C6] p-1 text-lg text-white "
            />
            <button
              type="button"
              className={
                // selectedImage ? 'image-remove' : 'image-remove disabled-btn '
                selectedImage ? 'text-[#4588C6] text-4xl mr-5' : 'hidden border border-blue-700 mt-[72px]'
              }
              onClick={() => setSelectedImage(null)}
            >
              <MdDeleteOutline />
            </button>
            </div>
            
          </div>

          <div className=" mt-5 flex w-[50%] flex-col">
            <label className="mb-3 text-lg  font-semibold">
              Название курса
            </label>
            <input
              type="text"
              className="h-10 w-80 rounded-lg border border-slate-300 "
            />
            <label className="my-3 text-lg  font-semibold">
              Длительность курса
            </label>
            <input
              type="text"
              className="h-10 w-80 rounded-lg border border-slate-300 "
            />
            <label className="my-3 text-lg font-semibold">
              Стоимость курса
            </label>
            <input
              type="text"
              className="h-10 w-80 rounded-lg border border-slate-300"
            />
            <label className="my-3 text-lg font-semibold">
              Количество занятий
            </label>
            <input
              type="text"
              className="h-10 w-80 rounded-lg border border-slate-300"
            />
            <button
              type="button"
              className="mt-11 h-11 w-96 rounded-lg border bg-[#4588C6] text-lg text-white "
            >
              Сохранить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CreateCourse;

import { IoClose } from 'react-icons/io5';
import { FiUpload } from 'react-icons/fi';
import { useState } from 'react';

function CreateCourse() {
  const [file, setFile] = useState();
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen;

  function handleFile(event) {
    setFile(event.target.files[0]);
  }
  return (
    <div className="h-[100vh] w-[100%] ">
      <div className="mx-auto my-20 h-[520px] w-[990px] rounded-lg border-2 border-slate-200 bg-white shadow-lg ">
        <div className="flex h-14 w-full items-center justify-between rounded-t-lg border-2 bg-[#4588C6]">
          <h1 className="ml-5 text-left text-3xl  font-semibold text-white">
            Создать новый курс
          </h1>
          <IoClose onClick={handleClose} className="mr-5 text-3xl text-white" />
        </div>
        <div className="flex w-full p-5">
          <div className=" ml-20 mt-5 w-[50%]">
            <div className="flex h-72 w-80 flex-col items-center rounded-lg border-2 border-dashed border-black bg-[#f1f1f1] pt-20 text-center ">
              <FiUpload className="text-5xl" />

              <h2 className="text-center text-2xl font-semibold">
                Перетащите сюда файл
              </h2>
            </div>
            <input
              type="file"
              name="file"
              onChange={handleFile}
              className="mt-5 h-11 w-80 rounded-lg border bg-[#4588C6] text-lg text-white "
            />
          </div>

          <div className=" mt-5 flex w-[50%] flex-col">
            <label className="mb-3 text-lg  font-semibold">
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
              className="mt-11 h-11 w-80 rounded-lg border bg-[#4588C6] text-lg text-white "
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

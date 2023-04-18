import { FiUpload } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { MdDeleteOutline } from 'react-icons/md';
import { useState } from 'react';
import InputField from '../../components/Input/InputField';
import SendButton from '../../components/Button';

function AdminMentorsForm({ handleClose }) {
  const [selectedImage, setSelectedImage] = useState(null);
  function onSubmit(values) {
    const formData = new FormData();
    formData.append('multipartFile', selectedImage);
  }
  return (
    <div className="mx-auto my-5 h-[690px] w-[1000px] rounded-lg border-2 border-slate-200 bg-white shadow-lg ">
      <div className="flex h-14 w-full items-center justify-between rounded-t-lg border-2 bg-[#4588C6]">
        <h1 className="ml-5 text-left text-3xl  font-semibold text-white">
          Добавить преподавателя
        </h1>
        <button onClick={handleClose}>
          <IoClose className="mr-5 text-3xl text-white" />
        </button>
      </div>
      <div className="flex">
        <div className=" ml-20 mt-[130px] w-[50%]">
          <div className="flex h-72 w-80 flex-col items-center rounded-lg border-2 border-dashed border-black bg-[#f1f1f1]  text-center ">
            <FiUpload className={selectedImage ? 'hidden' : 'mt-20 text-5xl'} />

            {selectedImage && (
              <div className="mb-5  h-72 w-80 ">
                <img
                  alt="not fount"
                  className="w-[100%]"
                  src={URL.createObjectURL(selectedImage)}
                />
              </div>
            )}
          </div>
          <div className="mt-[133px] flex h-11 w-[400px] items-center  justify-between">
            <input
              type="file"
              name="file"
              onChange={(event) => {
                setSelectedImage(event.target.files[0]);
              }}
              className=" h-[47px] w-[377px] rounded-lg border bg-[#4588C6]  p-1 text-lg text-white transition duration-150 hover:scale-95"
            />
            <button
              type="button"
              className={
                // selectedImage ? 'image-remove' : 'image-remove disabled-btn '
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

        <form className=" mt-2  w-[50%]">
          <InputField label="Имя" />
          <InputField label="Фамилия" />
          <InputField label="Номер телефона" />

          <InputField label="Почта" />
          <InputField label="Пароль" />
          <label className="mb-2 block text-lg font-semibold text-gray-900">
            Направление
          </label>
          <select
            id="department"
            name="department"
            className="mb-2 block h-[40px] w-[377px] rounded-sm border border-slate-300 bg-white p-2.5 text-sm "
          >
            <option value="js">JavaScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="ui8">UI8</option>
          </select>
          <SendButton name="Создать" />
        </form>
      </div>
    </div>
  );
}


export default AdminMentorsForm;

import { GrFormClose } from 'react-icons/gr';
// import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function CreateUser() {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(!open);

  // const navigate = useNavigate();
  return (
    <div className="m-auto my-24 ">
      <div className="relative flex h-[656px] w-[598px] flex-col items-center rounded-lg border-2 bg-[#DADADA]">
        <h3 className="mt-6 text-3xl font-bold ">Создать менеджера</h3>
        <button type="button"  onClick={handleClose}>
          <GrFormClose className="absolute left-[550px] top-3 text-3xl "/>
        </button>

        <form className="mt-10">
          <label className="mb-3 block text-lg font-semibold text-gray-900">
            Имя
          </label>
          <input
            type="name"
            id="name"
            className="mb-3 block h-[40px] w-[377px] rounded-sm border border-black bg-white p-2.5 text-sm"
            required
          />

          <label className="mb-3 block text-lg font-semibold text-gray-900">
            Фамилия
          </label>
          <input
            type="lastName"
            id="lastName"
            className="mb-3 block h-[40px] w-[377px] rounded-sm border border-black bg-white p-2.5 text-sm"
            required
          />

          <label className="mb-3 block text-lg font-semibold text-gray-900">
            Почта
          </label>
          <input
            type="email"
            id="email"
            className="mb-3 block h-[40px] w-[377px] rounded-sm border border-black bg-white p-2.5 text-sm"
            required
          />
          <label className="mb-3 block text-lg font-semibold text-gray-900">
            Номер телефона
          </label>

          <input
            type="phoneNumber"
            id="phoneNumber"
            className="mb-3 block h-[40px] w-[377px] rounded-sm border border-black bg-white p-2.5 text-sm"
            required
          />
          <label className="mb-3 block text-lg font-semibold text-gray-900">
            Пароль
          </label>

          <input
            type="password"
            id="password"
            className="mb-3 block h-[40px] w-[377px] rounded-sm border border-black bg-white p-2.5 text-sm"
            required
          />
          <button
            onClick={handleClose}
            type="button"
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

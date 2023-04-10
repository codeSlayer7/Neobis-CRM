import { GrFormClose } from 'react-icons/gr';

function AdminMentorsForm({ open, onClose }) {
  return (
    <div className="my-5 ml-[30%] ">
      <div className="relative flex h-[756px] w-[598px] flex-col items-center rounded-lg border-2 bg-[#f1f1f1]">
        <h3 className="mt-6 text-3xl font-bold ">Добавить преподавателя</h3>
        <button type="button" onClick={onClose}>
          <GrFormClose className="absolute left-[550px] top-3 text-3xl " />
        </button>

        <form className="mt-6">
          <label className="mb-2 block text-lg font-semibold text-gray-900">
            Имя
          </label>
          <input
            type="name"
            id="name"
            className="mb-2 block h-[40px] w-[377px] rounded-sm border border-slate-300 bg-white p-2.5 text-sm"
            required
          />

          <label className="mb-2 block text-lg font-semibold text-gray-900">
            Фамилия
          </label>
          <input
            type="lastName"
            id="lastName"
            className="mb-2 block h-[40px] w-[377px] rounded-sm border border-slate-300 bg-white p-2.5 text-sm"
            required
          />

          <label className="mb-2 block text-lg font-semibold text-gray-900">
            Почта
          </label>
          <input
            type="email"
            id="email"
            className="mb-2 block h-[40px] w-[377px] rounded-sm border border-slate-300 bg-white p-2.5 text-sm"
            required
          />
          <label className="mb-2 block text-lg font-semibold text-gray-900">
            Номер телефона
          </label>

          <input
            type="phoneNumber"
            id="phoneNumber"
            className="mb-3 block h-[40px] w-[377px] rounded-sm border border-slate-300 bg-white p-2.5 text-sm"
            required
          />
          <label className="mb-2 block text-lg font-semibold text-gray-900">
            Пароль
          </label>

          <input
            type="password"
            id="password"
            className="mb-2 block h-[40px] w-[377px] rounded-sm border border-slate-300 bg-white p-2.5 text-sm"
            required
          />
          <label className="mb-2 block text-lg font-semibold text-gray-900">
            Направление
          </label>

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
            onClick={onClose}
            type="button"
            className="mt-4 h-[47px] w-[377px] rounded-lg border border-none bg-[#4588C6] text-lg text-white transition duration-150 hover:scale-95"
          >
            Добавить
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminMentorsForm;

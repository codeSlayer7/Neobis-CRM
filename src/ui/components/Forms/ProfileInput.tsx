function ProfileInput() {
  return (
    <div className="mt-16 flex">
      <div>
        <form>
          <label
            htmlFor="name"
            className="mb-3 block text-lg font-normal text-gray-900"
          >
            Имя
          </label>

          <input
            type="name"
            id="name"
            className="mb-3 block h-[45px] w-[292px] rounded-lg border border-black bg-white p-2.5 text-sm"
            required
          />

          <label
            htmlFor="email"
            className="mb-3 block text-lg font-normal text-gray-900"
          >
            Электронная почта
          </label>

          <input
            type="email"
            id="email"
            className="mb-3 block h-[45px] w-[292px] rounded-lg border border-black bg-white p-2.5 text-sm"
            required
          />
          <label
            htmlFor="adress"
            className="mb-3 block text-lg font-normal text-gray-900"
          >
            Адрес
          </label>

          <input
            type="adress"
            id="adress"
            className="mb-3 block h-[45px] w-[292px] rounded-lg border border-black bg-white p-2.5 text-sm"
            required
          />
          <label
            htmlFor="date"
            className="mb-3 block text-lg font-normal text-gray-900"
          >
            Дата рождения
          </label>

          <input
            type="date"
            id="date"
            className="mb-3 block h-[45px] w-[292px] rounded-lg border border-black bg-white p-2.5 text-sm"
            required
          />
        </form>
      </div>
      <div className="ml-16">
        <form>
          <label
            htmlFor="secondName"
            className="mb-3 block text-lg font-normal text-gray-900"
          >
            Фамилия
          </label>

          <input
            type="secondName"
            id="secondName"
            className="mb-3 block h-[45px] w-[292px] rounded-lg border border-black bg-white p-2.5 text-sm"
            required
          />

          <label
            htmlFor="phone"
            className="mb-3 block text-lg font-normal text-gray-900"
          >
            Номер телефона
          </label>

          <input
            type="phone"
            id="phone"
            className="mb-3 block h-[45px] w-[292px] rounded-lg border border-black bg-white p-2.5 text-sm"
            required
          />
          <label
            htmlFor="gender"
            className="mb-3 block text-lg font-normal text-gray-900"
          >
            Пол
          </label>

          <input
            type="gender"
            id="gender"
            className="mb-3 block h-[45px] w-[292px] rounded-lg border border-black bg-white p-2.5 text-sm"
            required
          />
        </form>
      </div>
    </div>
  );
}
export default ProfileInput;

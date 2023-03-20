import Edit from '../../icons/Edit';
import Photo from '../../images/photo.png';

function Profile() {
  return (
    <div className="flex h-auto w-full items-center justify-center mx-auto">
      <div className="my-10 h-[798px] w-[886px] mx-auto">
        <div className="flex">
          <div>
            <img src={Photo} alt="#" />
          </div>
          <div className="ml-7">
            <h2 className="text-3xl font-bold">Джулия Робертс</h2>
            <div className="mt-10">
              <button
                type="button"
                className="inline-flex h-[43px] w-[212px] items-center justify-around rounded-lg border border-[#E2E2E2] text-xl font-normal"
              >
                Редактировать
                <Edit />
              </button>
              <button
                type="button"
                className="ml-5 h-[43px] w-[212px] rounded-lg border text-xl font-normal"
              >
                Изменить пароль
              </button>
            </div>
          </div>
        </div>
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
                htmlFor="name"
                className="mb-3 block text-lg font-normal text-gray-900"
              >
                Фамилия
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
                Номер телефона
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
                Пол
              </label>

              <input
                type="adress"
                id="adress"
                className="mb-3 block h-[45px] w-[292px] rounded-lg border border-black bg-white p-2.5 text-sm"
                required
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;

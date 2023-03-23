import More from '../../icons/More';

function CreateCard() {
  return (
    <div className="flex h-auto w-full items-center justify-center">
      <div className="my-10 h-[798px] w-[886px] rounded-lg  border bg-[#FAFAFA] ">
        <div className="mt-5 ml-[820px]">
          <More />
        </div>
        <h2 className="ml-6 mt-4 text-3xl font-bold">Создать карту</h2>
        <div className="mt-10 ml-6 mr-[56px] flex justify-between">
          <div>
            <form>
              <label
                htmlFor="name"
                className="mb-3 block text-lg font-semibold text-gray-900"
              >
                ФИО
              </label>

              <input
                type="name"
                id="name"
                className="mb-3 block h-[40px] w-[377px] rounded-sm border border-black bg-white p-2.5 text-sm"
                required
              />

              <label
                htmlFor="department"
                className="mb-3 block text-lg font-semibold text-gray-900"
              >
                Направление
              </label>

              <input
                type="department"
                id="department"
                className="mb-3 block h-[40px] w-[377px] rounded-sm border border-black bg-white p-2.5 text-sm"
                required
              />
              <label
                htmlFor="status"
                className="mb-3 block text-lg font-semibold text-gray-900"
              >
                Статус
              </label>

              <input
                type="status"
                id="status"
                className="mb-3 block h-[40px] w-[377px] rounded-sm border border-black bg-white p-2.5 text-sm"
                required
              />
              <label
                htmlFor="date"
                className="mb-3 block text-lg font-semibold text-gray-900"
              >
                Дата заявки
              </label>

              <input
                type="date"
                id="date"
                className="mb-3 block h-[40px] w-[377px] rounded-sm border border-black bg-white p-2.5 text-sm"
                required
              />
              <label
                htmlFor="payment"
                className="mb-3 block text-lg font-semibold text-gray-900"
              >
                Способ оплаты
              </label>

              <input
                type="payment"
                id="payment"
                className="mb-3 block h-[40px] w-[377px] rounded-sm border border-black bg-white p-2.5 text-sm"
                required
              />
            </form>
          </div>
          <div>
            <form>
              <label
                htmlFor="phone"
                className="mb-3 block text-lg font-semibold text-gray-900"
              >
                Номер телефона
              </label>

              <input
                type="phone"
                id="phone"
                className="mb-3 block h-[40px] w-[377px] rounded-sm border border-black bg-white p-2.5 text-sm"
                required
              />

              <label
                htmlFor="group"
                className="mb-3 block text-lg font-semibold text-gray-900"
              >
                Группа
              </label>

              <input
                type="group"
                id="group"
                className="mb-3 block h-[40px] w-[377px] rounded-sm border border-black bg-white p-2.5 text-sm"
                required
              />
              <label
                htmlFor="laptop"
                className="mb-3 block text-lg font-semibold text-gray-900"
              >
                Ноутбук
              </label>

              <input
                type="laptop"
                id="laptop"
                className="mb-3 block h-[40px] w-[377px] rounded-sm border border-black bg-white p-2.5 text-sm"
                required
              />
              <label
                htmlFor="signup"
                className="mb-3 block text-lg font-semibold text-gray-900"
              >
                Откуда записался
              </label>

              <input
                type="signup"
                id="signup"
                className="mb-3 block h-[40px] w-[377px] rounded-sm border border-black bg-white p-2.5 text-sm"
                required
              />
              <label
                htmlFor="notes"
                className="mb-3 block text-lg font-semibold text-gray-900"
              >
                Заметки
              </label>

              <textarea
                type="notes"
                id="notes"
                className="mb-3 block h-[162px] w-[377px] rounded-sm border border-black bg-white p-2.5 text-sm"
                required
              />
              <button
                type="submit"
                className="bg-neobis-bg-green h-[47px] w-[377px] rounded-lg text-lg text-white transition duration-150 hover:scale-95"
              >
                Создать карточку
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CreateCard;

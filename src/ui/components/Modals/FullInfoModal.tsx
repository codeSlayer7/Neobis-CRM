import More from '../../icons/More';
import Phone from '../../icons/Phone';
import SmsEdit from '../../icons/SmsEdit';
import userProfile from '../../images/UserProfile.png';

function FullInfoModal() {
  return (
    <div className="flex h-auto w-full items-center justify-center">
      <div className="my-10 h-[870px] w-[669px] rounded-lg  border bg-[#FAFAFA] ">
        <div className="mt-5 ml-[600px]">
          <More />
        </div>
        <div className="m-auto h-[97px] w-[102px] rounded-full border">
          <img src={userProfile} alt="#" />
        </div>
        <div className="m-auto mt-3 w-full text-center">
          <h3 className="text-[28px] font-bold">Antonio Lorenzo</h3>
          <p className="text-lg font-normal">
            последний раз взаимодействовал: 5 ч назад
          </p>
          <div className="mt-[24px] flex  items-center justify-between ">
            <button
              type="button"
              className="ml-[146px] inline-flex h-[41px] w-[192px] items-center rounded-[10px] border border-black bg-white p-2 text-right text-lg font-normal ring-slate-600 focus:outline-none focus:ring-1 "
            >
              <SmsEdit />
              Написать Email
            </button>
            <button
              type="button"
              className="mr-[146px] inline-flex h-[41px] w-[154px] items-center rounded-[10px] border border-black bg-white p-2 text-right text-lg font-normal ring-slate-600 focus:outline-none focus:ring-1"
            >
              <Phone />
              Позвонить
            </button>
          </div>
        </div>
        <div className="m-auto mt-[69px]  flex justify-between px-10">
          <ul>
            <li className="text-lg font-semibold">ФИО</li>
            <li className="text-lg font-normal">Антонио Лоренцо</li>
          </ul>
          <ul>
            <li className="text-lg font-semibold">Телефон</li>
            <li className="text-lg font-normal">+996 551 123 321</li>
          </ul>
          <ul className="mr-5">
            <li className="text-lg font-semibold">Направление</li>
            <li className="text-lg font-normal">Java Script</li>
          </ul>
        </div>
        <div className="mt-[30px] flex  justify-between px-10">
          <ul>
            <li className="text-lg font-semibold">Группа</li>
            <li className="text-lg font-normal">Javascript</li>
          </ul>
          <ul className="ml-2">
            <li className="text-lg font-semibold">Статус</li>
            <li className="text-lg font-normal">Обучается</li>
          </ul>
          <ul className="mr-[60px]">
            <li className="text-lg font-semibold">Ноутбук</li>
            <li className="text-lg font-normal">Есть</li>
          </ul>
        </div>
        <div className="mt-[30px] flex  justify-between px-10">
          <ul>
            <li className="text-lg font-semibold">Дата заявки</li>
            <li className="text-lg font-normal">24/04/2023</li>
          </ul>
          <ul className="ml-[48px]">
            <li className="text-lg font-semibold">Откуда записался</li>
            <li className="text-lg font-normal">Instagram</li>
          </ul>
          <ul>
            <li className="text-lg font-semibold">Способ оплаты</li>
            <li className="text-lg font-normal">Наличными</li>
          </ul>
        </div>
        <div className="mx-10 mt-[30px]">
          <label className="mb-3 block text-lg font-semibold">Заметки</label>
          <textarea
            id="message"
            className="h-[115px] block w-full rounded-lg border border-black bg-white p-2.5 text-sm text-gray-900 ring-slate-600"
            placeholder="Спрашивает есть ли скидка для тех кто живет в регионах."
          />

          <button
            type="button"
            className="bg-neobis-bg-green mt-3 h-[47px] w-[590px] rounded-md border text-lg font-normal text-white transition duration-150 hover:scale-95"
          >
            Сохранить
          </button>
        </div>
      </div>
    </div>
  );
}
export default FullInfoModal;

import { Link } from 'react-router-dom';
import More from '../../icons/More';
import Phone from '../../icons/Phone';
import SmsEdit from '../../icons/SmsEdit';
import userProfile from '../../images/UserProfile.png';

function InfoModal() {
  return (
    <div className="flex h-[100vh] w-full items-center justify-center">
      <div className=" h-[528px] w-[669px] rounded-lg  border bg-slate-50 ">
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
              className="ml-[146px] inline-flex h-[41px] w-[192px] items-center rounded-[10px] border border-black bg-white p-2 text-center text-right text-lg font-normal ring-slate-600 focus:outline-none focus:ring-1 "
            >
              <SmsEdit />
              Написать Email
            </button>
            <button className="mr-[146px] inline-flex h-[41px] w-[154px] items-center rounded-[10px] border border-black bg-white p-2 text-center text-right text-lg font-normal ring-slate-600 focus:outline-none focus:ring-1">
              <Phone />
              Позвонить
            </button>
          </div>
        </div>
        <div className="mt-[69px] ml-[42px] mr-[50px] flex justify-between">
          <span>
            <h3 className="text-lg font-semibold">ФИО</h3>
            <p>Антонио Лоренцо</p>
          </span>
          <span>
            <h3 className="text-lg font-semibold">Телефон</h3>
            <p>+996 551 123 321</p>
          </span>
          <span>
            <h3 className="text-lg font-semibold">Направление</h3>
            <p>Java Script</p>
          </span>
        </div>
        <div className="mt-[30px]  ml-4 flex justify-between mr-[25px] ml-[42px]">
          <span>
            <h3 className="text-lg font-semibold">Группа</h3>
            <p>Javascript</p>
          </span>
          <span>
            <h3 className="text-lg font-semibold">Статус</h3>
            <p>Обучается</p>
          </span>
          <span>
            <Link to="/fullinfomodal">
            <button className="inline-flex h-[41px] w-[141px] pt-1 pl-3 rounded-[10px] border border-black bg-white  text-center text-right text-lg font-normal ring-slate-600 focus:outline-none focus:ring-1">
              Подробнее
            </button>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
export default InfoModal;

import { Link, useNavigate } from 'react-router-dom';
import Attention from '../../icons/Attention';

function RejectionReason() {
  const navigate = useNavigate();

  return (
    <div className="flex h-[100vh] w-full items-center justify-center bg-purple-100">
      <div className="h-[551px] w-[512px] rounded-lg  border-slate-900 bg-white">
        <div className="flex h-[68px] w-[512px] items-center justify-center rounded-t-lg bg-black text-white">
          <p className="mr-5 text-3xl font-semibold">Внимание</p>
          <Attention />
        </div>
        <p className="mt-[47px] pl-10 text-left text-xl font-semibold">
          Напишите причину, почему клиент не захотел записываться на курс ?
        </p>
        <div className="mt-4 ml-9  ">
          <input
            type="text"
            className="h-[262px] w-[440px] break-all border border-gray-800"
            placeholder="Введите текст"
          />
          <Link to="/">
            <button
              type="submit"
              className="hover:easy-in bg-neobis-bg-green mt-4 ml-5 h-[42px] w-[400px] rounded-lg border text-white transition duration-150 hover:scale-110"
            >
              Сохранить
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default RejectionReason;

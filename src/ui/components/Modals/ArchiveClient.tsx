import { useNavigate } from 'react-router-dom';
import Attention from '../../icons/Attention';

function ArchiveClient() {
  const navigate = useNavigate();

  return (
    <div className="flex w-full items-center justify-center bg-purple-100">
      <div className="h-[266px] w-[512px] rounded-lg  border-slate-900 bg-white">
        <div className="flex h-[68px] w-[512px] items-center justify-center rounded-t-lg bg-black text-white">
          <p className="mr-5 text-3xl font-semibold">Внимание</p>
          <Attention />
        </div>
        <p className="mt-[47px] text-center text-xl font-semibold">
          Вы уверены, что хотите архивировать клиента ?
        </p>
        <div className="mt-12 ml-5 ">
          <button className="h-[42px] w-[98px] rounded-lg border bg-red-500 text-white">
            Да
          </button>
          <button
            className="ml-5 h-[42px] w-[98px] rounded-lg border bg-gray-400 text-white"
            onClick={() => navigate(-1)}
          >
            Нет
          </button>
        </div>
      </div>
    </div>
  );
}
export default ArchiveClient;

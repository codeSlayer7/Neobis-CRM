import { Link, useNavigate } from 'react-router-dom';
import Attention from '../../icons/Attention';

function EnrollClient() {
  const navigate = useNavigate();

  return (
    <div className="flex h-[100vh] w-full items-center justify-center bg-purple-100">
      <div className="h-[266px] w-[512px] rounded-lg  border-slate-900 bg-white">
        <div className="flex h-[68px] w-[512px] items-center justify-center rounded-t-lg bg-black text-white">
          <p className="mr-5 text-3xl font-semibold">Внимание</p>
          <Attention />
        </div>
        <p className="mt-[47px] text-center text-xl font-semibold">
          Вы уверены, что хотите зачислить клиента ?
        </p>
        <div className="mt-12 ml-5 ">
          <Link to="/groups">
            <button className="bg-neobis-bg-green hover:easy-in h-[42px] w-[98px] rounded-lg border text-white transition duration-150 hover:scale-110">
              Да
            </button>
          </Link>
          <button
            className="hover:easy-in ml-5 h-[42px] w-[98px] rounded-lg border bg-gray-400 text-white transition duration-150 hover:scale-110"
            onClick={() => navigate(-1)}
          >
            Нет
          </button>
        </div>
      </div>
    </div>
  );
}
export default EnrollClient;

import { Link } from 'react-router-dom';
import Attention from '../../../icons/Attention';

function MentorArchive() {
  return (
    <div className="flex h-[100vh] w-full items-center justify-center bg-[#FAFAFA]">
      <div className="h-[551px] w-[512px] rounded-lg border-2 border-gray-400 bg-white  shadow-lg">
        <div className="justify-left flex h-[68px] w-[512px] items-center rounded-t-lg bg-[#4588C6] text-white">
          <p className="mx-5 text-3xl font-semibold">Внимание</p>
          <Attention />
        </div>
        <p className="mt-[47px] pl-10 text-left text-xl font-semibold">
          Напишите причину, почему вы решили архивировать данного преподавателя
          ?
        </p>
        <div className="mt-4 ml-9  ">
          <textarea
            className="h-[262px] w-[440px] rounded-lg border border-gray-800 p-2"
            placeholder="Введите текст"
          />
          <Link to="/admin/archive">
            <button
              type="submit"
              className="hover:easy-in mt-4 h-[42px] w-[440px] rounded-lg border bg-[#4588C6] text-lg text-white transition duration-150 hover:scale-95"
            >
              Сохранить
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default MentorArchive;

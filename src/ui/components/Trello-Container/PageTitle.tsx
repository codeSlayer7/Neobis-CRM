import { Link } from 'react-router-dom';

function PageTitle() {
  return (
    <div className="w-[99%] pl-[2vw] pb-8 pt-8">
      <div className="flex justify-between">
        <h3 className="block text-3xl font-bold text-black xl:text-4xl">
          Заявки
        </h3>
        <Link to="/createcard">
          <button
            type="button"
            className="bg-neobis-bg-green rounded-lg px-4 py-[8px] text-lg font-semibold text-white transition duration-150 hover:scale-110 hover:opacity-90 xl:text-xl"
          >
            Создать карточку
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PageTitle;

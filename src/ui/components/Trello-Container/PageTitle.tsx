import { Link } from 'react-router-dom';

function PageTitle() {
  return (
    <div className="w-[100%] px-[2vw] pb-8 pt-12">
      <div className="flex justify-between">
        <h3 className="block text-4xl font-bold text-black">Заявки</h3>
        <Link to="/createcard">
          <button
            type="button"
            className="bg-neobis-bg-green rounded-lg px-4 py-[8px] text-xl font-semibold text-white transition duration-150 hover:scale-110 hover:opacity-90"
          >
            Создать карточку
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PageTitle;

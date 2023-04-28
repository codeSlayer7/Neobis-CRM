import { Link } from 'react-router-dom';

const CheckBox = () => {
  return (
    <div className="flex items-start mt-[15px]">
      <div className="flex items-center">
        <input
          id="remember"
          type="checkbox"
          value=""
          className="w-5 h-5 border border-gray-300 text-[#70BF44] rounded bg-[#70BF44]-50 focus:ring-3 focus:ring-blue-300
    dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-[#70BF44] dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
        />
        <label className="ml-[16px] text-[18px] font-normal">
          Запомнить меня
        </label>
      </div>
      <Link to="/forgot">
        <div className="ml-[65px] text-[18px] text-[#70BF44] font-normal cursor-pointer">
          Забыли пароль ?
        </div>
      </Link>
    </div>
  );
};

export default CheckBox;

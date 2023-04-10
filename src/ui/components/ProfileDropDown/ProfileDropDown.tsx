import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiUser, BiHistory, BiExit } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { useAppSelector } from '../../../constants/global';
import { removeCookie } from '../../../utils/cookie';

function ProfileDropDown() {
  const navigate = useNavigate();
  const [openProfile, setOpenProfile] = useState(false);

  const { firstName, lastName } = useAppSelector((state) => {
    return state.user;
  });

  const handleClick = () => {
    setOpenProfile(false);
    removeCookie('token');
    navigate('/login');
  };

  return (
    <div>
      <div
        className="relative left-10  h-10 w-10 rounded-full bg-white flex justify-center items-center border-2 border-gray-400"
        onClick={() => setOpenProfile((prev) => !prev)}
      >
        <CgProfile className="absolute text-3xl   " />
      </div>
      {openProfile && (
        <div className=" absolute  right-[52px] z-40 mt-3  h-44 w-52 rounded-lg border-4 border-[#D9BFFF] bg-white">
          <div className="absolute top-[-0.7rem] right-[1.1rem] h-5 w-5 rotate-45 border-4 border-b-0 border-r-0 border-[#D9BFFF] bg-white before:content-['']" />
          <h5 className="my-2 border-b-4 text-center text-lg font-normal">
            {firstName} {lastName}
          </h5>
          <ul className=" text-left text-lg">
            <Link to="/profile">
              <li className="mt-2 inline-flex w-full items-center justify-start hover:text-[#A062F7]">
                <BiUser className="mx-2" />
                Мой профиль
              </li>
            </Link>
            <Link to="/history">
              <li className="mt-2 inline-flex w-full items-center justify-start hover:text-[#A062F7]">
                <BiHistory className="mx-2" />
                История операции
              </li>
            </Link>
            <button
              type="button"
              className="mt-2 inline-flex w-full items-center justify-start hover:text-[#A062F7]"
              onClick={handleClick}
            >
              <BiExit className="mx-2" />
              Выход
            </button>
          </ul>
        </div>
      )}
    </div>
  );
}
export default ProfileDropDown;

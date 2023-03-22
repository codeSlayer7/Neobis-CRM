import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiUser, BiHistory, BiExit } from 'react-icons/bi';
import Profile from '../../icons/Profile';

function ProfileDropDown() {
  const [openProfile, setOenProfile] = useState(false);

  return (
    <div>
      <div className="relative" onClick={() => setOenProfile((prev) => !prev)}>
        <Profile />
      </div>
      {openProfile && (
        <div className=" absolute  right-[52px] z-40 mt-3  h-44 w-52 rounded-lg border-4 border-[#D9BFFF] bg-white">
          <div className="absolute top-[-0.7rem] right-[1.1rem] h-5 w-5 rotate-45 border-4 border-b-0 border-r-0 border-[#D9BFFF] bg-white before:content-['']" />
          <h5 className="my-2 border-b-4 text-center text-lg font-normal">
            Джулия Робертс
          </h5>
          <ul className=" text-left text-lg">
            <Link to="/profile">
              <li className="mt-2 inline-flex w-full items-center justify-start hover:text-[#A062F7]">
                <BiUser className="mx-2" />
                Мой профиль
              </li>
            </Link>
            <li className="mt-2 inline-flex w-full items-center justify-start hover:text-[#A062F7]">
              <BiHistory className="mx-2" />
              История операции
            </li>

            <button
              type="button"
              className="mt-2 inline-flex w-full items-center justify-start hover:text-[#A062F7]"
              onClick={() => setOenProfile(false)}
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
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { BiUser, BiHistory, BiExit } from 'react-icons/bi';
import { useAppDispatch, useAppSelector } from '../../../constants/global';
import { removeCookie } from '../../../utils/cookie';
import { logout } from '../../../redux/slices/userSlice';

function ProfileDropDown() {
  const navigate = useNavigate();
  const [openProfile, setOpenProfile] = useState(false);
  const dispatch = useAppDispatch();

  const { firstName, lastName } = useAppSelector((state) => {
    return state.user;
  });

  const handleClick = () => {
    setOpenProfile(false);
    removeCookie('token');
    dispatch(logout());
    navigate('/login');
  };

  return (
    <>
      <div
        className="relative h-10 ml-[165px]"
        onClick={() => setOpenProfile((prev) => !prev)}
      >
        <CgProfile size='35px' color='#8874C8' className="absolute text-3xl" />
      </div>
      {openProfile ? (
        <div className=" absolute  ml-[10px] z-10 mt-10  h-44 w-52 rounded-lg border-4 border-[#8874C8] bg-white">
          <div className="absolute top-[-0.7rem] right-[0.4rem] h-5 w-5 rotate-45 border-4 border-b-0 border-r-0 border-[#8874C8] bg-white before:content-['']" />
          <h5 className="my-2 border-b-4 border-[#8874C8]  text-center text-lg font-normal">
            {firstName} {lastName}
          </h5>
          <ul className=" text-left text-lg">
            <Link to="/profile">
              <li className="mt-2 inline-flex w-full items-center justify-start hover:text-[#bc8cff]">
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
      ) : ""}
      </>
  );
}
export default ProfileDropDown;

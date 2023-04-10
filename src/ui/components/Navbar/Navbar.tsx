import { Link } from 'react-router-dom';
import Logo from '../../icons/image 9.svg';
import ProfileDropDown from '../ProfileDropDown/ProfileDropDown';

function Navbar() {
  return (
    <div className=" flex  h-16 items-center justify-between rounded-sm border border-inherit bg-[#D9BFFF]">
      <div className="ml-6 flex w-56 justify-between ">
        <Link to="/">
          <img
            src={Logo}
            alt="#"
            className="rounded-xl border-2 border-[#A062F7]"
          />
        </Link>
      </div>
      <div className="mr-6 flex w-60 justify-around">
        <ProfileDropDown  />
      </div>
    </div>
  );
}
export default Navbar;

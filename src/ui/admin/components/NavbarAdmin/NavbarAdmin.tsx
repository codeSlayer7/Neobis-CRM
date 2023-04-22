import { Link } from 'react-router-dom';
import ProfileDropDown from '../../../components/ProfileDropDown/ProfileDropDown';
import Logo from '../../../icons/image 9.svg';

function NavbarAdmin() {
  return (
    <div className="flex h-16  items-center justify-between rounded-sm border border-inherit bg-[#B4D9FF]">
      <div className="ml-6 flex w-56 justify-between">
        <Link to="/admin">
          <img
            src={Logo}
            alt="#"
            className="rounded-xl"
          />
        </Link>
      </div>
      <div className="mr-6 flex w-60 justify-around">
        <ProfileDropDown />
      </div>
    </div>
  );
}
export default NavbarAdmin;

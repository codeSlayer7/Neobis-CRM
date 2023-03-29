import { Link } from 'react-router-dom';
import Logo from '../../icons/Logo';
import SearchIcon from '../../icons/SearchIcon';
import ProfileDropDown from '../../components/ProfileDropDown/ProfileDropDown';

function NavbarAdmin() {
  return (
    <div className="flex h-16  items-center justify-between rounded-sm border border-inherit">
      <div className="ml-6 flex w-56 justify-between">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="flex w-[420px] items-center justify-between">
        <input
          className="placeholder:regular absolute block w-[420px] rounded-md border  border-slate-300 bg-white py-2 pl-9 pr-3 shadow-sm placeholder:text-slate-400 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 sm:text-sm"
          placeholder="Поиск..."
          type="text"
          name="search"
        />
        <span className="relative left-[350px]">
          <SearchIcon />
        </span>
      </div>
      <div className="mr-6 flex w-60 justify-around">
        <ProfileDropDown />
      </div>
    </div>
  );
}
export default NavbarAdmin;

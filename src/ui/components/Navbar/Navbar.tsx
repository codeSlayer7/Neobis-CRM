import React from 'react';
import logo from '../../icons/logo.svg';
import search from '../../icons/search.svg';
import notification from '../../icons/notification.svg';
import profile from '../../icons/profile-circle.svg';

function Navbar() {
  return (
    <div className="flex h-16 items-center justify-between rounded-sm border border-inherit">
      <div className="ml-6 flex w-56 justify-between">
        <img src={logo} alt="#" />
      </div>
      <div className="flex w-[420px] items-center justify-between">
        <input
          className="placeholder:regular absolute block w-[420px] rounded-md border  border-slate-300 bg-white py-2 pl-9 pr-3 shadow-sm placeholder:text-slate-400 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 sm:text-sm"
          placeholder="Поиск..."
          type="text"
          name="search"
        />
        <span className="relative left-[350px]">
          <img src={search} alt="#" />
        </span>
      </div>
      <div className="mr-6 flex w-56 justify-around">
        <img src={notification} alt="#" />
        <img src={profile} alt="#" />
      </div>
    </div>
  );
}
export default Navbar;

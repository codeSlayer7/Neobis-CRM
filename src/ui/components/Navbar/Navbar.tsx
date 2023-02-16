import React from 'react';
import logo from '../../icons/logo.svg';
import arrow from '../../icons/arrow.svg';
import search from '../../icons/search.svg';
import notification from '../../icons/notification.svg';
import profile from '../../icons/profile-circle.svg';

function Navbar() {
  return (
    <div className='flex justify-between items-center h-16 border border-inherit rounded-sm'>
      <div className='flex ml-6 w-56 justify-between'>
        <img src={logo} alt="#" />
        <img src={arrow} alt="#" />
      </div>
      <div className="w-1/3 flex items-center justify-between">
        <input className="w-1/3 absolute placeholder:regular placeholder:text-slate-400 block bg-white  border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Поиск..." type="text" name="search"/>
        <span className="relative left-[460px]">
          <img src={search} alt="#" />
        </span>
      </div>
      <div className="flex w-56 justify-around mr-6">
        <img src={notification} alt="#" />
        <img src={profile} alt="#" />
      </div>
    </div>
  );
}
export default Navbar;
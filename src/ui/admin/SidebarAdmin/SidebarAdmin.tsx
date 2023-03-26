import { NavLink } from 'react-router-dom';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import React, { useState } from 'react';
import StudentIcon from '../../icons/StudentIcon';
import User from '../../icons/User';
// import StudentIcon from '../../icons/StudentIcon';
// import ArchiveIcon from '../../icons/ArchiveIcon';
// import MentorsIcon from '../../icons/MentorsIcon';
// import ApplicationIcon from '../../icons/ApplicationIcon';
// import AnalyticsIcon from '../../icons/AnalyticsIcon';
// import Education from '../../icons/Education';
// import Course from '../../icons/Course';

interface IMenuItem {
  name: string;
  path: string;
  icon: React.ReactNode;
}
type Props = {
  children: React.ReactNode;
};

function SidebarAdmin({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const activeMenu =
    'text-slate-100 text-xl flex gap-3.5 rounded-full p-5 m-1 bg-[#A062F7]';
  const normalMenu =
    'text-slate-400 group flex rounded-full gap-3.5 text-xl p-5 m-1 hover:bg-[#D9BFFF] hover:text-[#A062F7]';

  const menuItem: IMenuItem[] = [
    { name: 'Менеджер', path: '/admin', icon: <User /> },

  ];
  return (
    <div className="flex">
      <div
        style={{ width: isOpen ? '240px' : '80px' }}
        className="h-auto  w-60 rounded-md border-solid border-r-slate-300  shadow-md"
      >
        <div className="my-3.5 flex items-center">
          <div
            style={{ marginLeft: isOpen ? '80px' : '0px' }}
            className="ml-20 flex text-2xl"
          >
            <HiOutlineArrowLongRight
              onClick={toggle}
              style={{ display: isOpen ? 'none' : 'block' }}
              className="ml-6 text-5xl text-[#A062F7]"
            />
            <HiOutlineMenuAlt1
              style={{ display: isOpen ? 'block' : 'none' }}
              onClick={toggle}
              className="ml-20 text-4xl text-[#A062F7]"
            />
          </div>
        </div>

        {menuItem?.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={({ isActive }) => (isActive ? activeMenu : normalMenu)}
          >
            <div>{item.icon}</div>
            <div style={{ display: isOpen ? 'block' : 'none' }}>
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>

      <main className={!isOpen ? 'flex w-[90%]' : 'flex w-[73%] '}>
        {children}
      </main>
    </div>
  );
}

export default SidebarAdmin;

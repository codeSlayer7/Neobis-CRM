import { NavLink } from 'react-router-dom';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import React, { useState } from 'react';
import { MdOutlineManageAccounts } from 'react-icons/md';
import { VscBook } from 'react-icons/vsc';
import { BsFolder } from 'react-icons/bs';
import { BsPersonWorkspace } from 'react-icons/bs';
import { SlGraduation } from 'react-icons/sl';
import { TiMessages } from 'react-icons/ti';
import Analytic from '../../../icons/Analytic';

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
    'text-slate-100 text-xl flex gap-3.5 rounded-full p-5 m-1 bg-[#4588C6]';
  const normalMenu =
    'text-slate-400 group flex rounded-full gap-3.5 text-xl p-5 m-1 hover:bg-[#B4D9FF] hover:text-[#4588C6]';

  const menuItem: IMenuItem[] = [
    {
      name: 'Менеджер',
      path: '/admin',
      icon: <MdOutlineManageAccounts className="text-3xl" />,
    },
    {
      name: 'Заявки',
      path: '/adminht',
      icon: <TiMessages className="text-3xl" />,
    },

    {
      name: 'Преподаватели',
      path: '/adminMentors',
      icon: <VscBook className="text-3xl" />,
    },
    {
      name: 'Курсы',
      path: '/adminCourses',
      icon: <BsPersonWorkspace className="text-3xl" />,
    },
    {
      name: 'Студенты',
      path: '/adminCourses',
      icon: <SlGraduation className="text-3xl" />,
    },
    {
      name: 'Архивы',
      path: '/adminCourses',
      icon: <BsFolder className="text-3xl" />,
    },
    {
      name: 'Аналитика',
      path: '/adminCourses',
      icon: <Analytic />,
    },

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
              className="ml-6 text-5xl text-[#4588C6]"
            />
            <HiOutlineMenuAlt1
              style={{ display: isOpen ? 'block' : 'none' }}
              onClick={toggle}
              className="ml-20 text-4xl text-[#4588C6]"
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

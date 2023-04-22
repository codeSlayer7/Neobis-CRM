import { NavLink, useLocation } from 'react-router-dom';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import React, { useState } from 'react';
import { MdOutlineManageAccounts } from 'react-icons/md';
import { VscBook } from 'react-icons/vsc';
import { BsFolder, BsPersonWorkspace } from 'react-icons/bs';
import { SlGraduation } from 'react-icons/sl';
import { TiMessages } from 'react-icons/ti';
import { TbBrandGoogleAnalytics } from 'react-icons/tb';
import { GrHistory } from 'react-icons/gr';
import { useAppDispatch } from '../../../../constants/global';
import HoverText from './HoverText';
import { toggleStore } from '../../../../redux/slices/toggleSidebar';
import HistoryHeader from './history-header';

interface IMenuItem {
  name: string;
  path: string;
  icon: React.ReactNode;
}
type Props = {
  children: React.ReactNode;
};
const hoverName = [
  'Менеджер',
  'Заявки',
  'Преподаватели',
  'Курсы',
  'Студенты',
  'Архивы',
  'Аналитика',
  'История операции',
];

function SidebarAdmin({ children }: Props) {
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    dispatch(toggleStore({ sidebar: !isOpen }));
    setIsOpen(!isOpen);
  };
  const location = useLocation();


  const activeMenu =
    'text-slate-100 text-xl flex gap-3.5 rounded-full p-5 m-1 bg-[#4588C6]';
  const normalMenu =
    'relative text-slate-400 group flex rounded-full gap-3.5 text-xl p-5 m-1 hover:bg-[#B4D9FF] hover:text-[#4588C6]';

  const menuItem: IMenuItem[] = [
    {
      name: 'Менеджер',
      path: '/admin',
      icon: <MdOutlineManageAccounts className="text-3xl" />,
    },
    {
      name: 'Заявки',
      path: '/admin/applications',
      icon: <TiMessages className="text-3xl" />,
    },

    {
      name: 'Преподаватели',
      path: '/admin/mentors',
      icon: <VscBook className="text-3xl" />,
    },
    {
      name: 'Курсы',
      path: '/admin/courses',
      icon: <BsPersonWorkspace className="text-3xl" />,
    },
    {
      name: 'Студенты',
      path: '/admin/students',
      icon: <SlGraduation className="text-3xl" />,
    },
    {
      name: 'Архивы',
      path: '/admin/archive',
      icon: <BsFolder className="text-3xl" />,
    },
    {
      name: 'Аналитика',
      path: '/admin/analytics',
      icon: <TbBrandGoogleAnalytics className="text-3xl" />,
    },
    {
      name: 'История операции',
      path: '/admin/history',
      icon: <GrHistory className="text-3xl text-white" />,
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
            to={item?.path}
            key={index}
            className={({ isActive }) => (isActive ? activeMenu : normalMenu)}
          >
            <div className="group relative">{item.icon}</div>
            <div style={{ display: isOpen ? 'block' : 'none' }}>
              {item.name}
            </div>
            {hoverName
              .filter((name) => name === item.name)
              .map((name) => (
                <HoverText text={name} isOpen={isOpen} key={index} />
              ))}
          </NavLink>
        ))}
      </div>

      {location.pathname === '/history' ? (
        <div className="flex h-[100vh] flex-col">
          {' '}
          <HistoryHeader />
          <main
            className={
              !isOpen ? 'flex w-[100%] flex-col ' : 'flex w-[73%] flex-col'
            }
          >
            {children}
          </main>
        </div>
      ) : (
        <main
          className={
            !isOpen
              ? 'flex  w-[100%] bg-[#F4F7FD]'
              : 'flex w-[73%] bg-[#F4F7FD]'
          }
        >
          {children}
        </main>
      )}
    </div>
  );
}

export default SidebarAdmin;

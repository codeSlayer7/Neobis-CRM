import { NavLink, useLocation } from 'react-router-dom';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import React, { useCallback, useState } from 'react';
import StudentIcon from '../../icons/StudentIcon';
import ArchiveIcon from '../../icons/ArchiveIcon';
import MentorsIcon from '../../icons/MentorsIcon';
import ApplicationIcon from '../../icons/ApplicationIcon';
// import AnalyticsIcon from '../../icons/AnalyticsIcon';
import Education from '../../icons/Education';
// import Course from '../../icons/Course';
import HistoryHeader from './history-header';
import HoverText from './hoverText';
import { useAppDispatch } from '../../../constants/global';
import { toggleStore } from '../../../redux/slices/toggleSidebar';

interface IMenuItem {
  name: string;
  path: string;
  icon: React.ReactNode;
}
type Props = {
  children: React.ReactNode;
};

const hoverName = ['Заявки', 'Курсы', 'Студенты', 'Преподаватели', 'Архивы'];

function Sidebar({ children }: Props) {
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    dispatch(toggleStore({ sidebar: !isOpen }));
    setIsOpen(!isOpen);
  };
  const location = useLocation();

  const activeMenu =
    'text-slate-100 text-xl flex gap-3.5 rounded-full p-5 m-1 bg-[#A062F7]';
  const normalMenu =
    'relative text-slate-400 group flex rounded-full gap-3.5 text-xl p-5 m-1 hover:bg-[#D9BFFF] hover:text-[#A062F7]';

  const menuItem: IMenuItem[] = [
    { name: 'Заявки', path: '/', icon: <ApplicationIcon /> },
    { name: 'Курсы', path: '/courses', icon: <Education /> },
    { name: 'Студенты', path: '/students', icon: <StudentIcon /> },
    { name: 'Преподаватели', path: '/mentors', icon: <MentorsIcon /> },
    { name: 'Архивы', path: '/archive', icon: <ArchiveIcon /> },
  ];
  return (
    <div className="flex ">
      <div
        style={{ width: isOpen ? '240px' : '80px' }}
        className=" h-auto w-60 rounded-md border-solid  border-r-slate-300 shadow-md"
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
      {/* <div className="flex flex-col"> */}

      {location.pathname === '/analytics' ? (
        <div className="flex flex-col">
          {' '}
          <HistoryHeader />
          <main
            className={
              !isOpen ? 'flex w-[100%] h-[1500px] flex-col ' : 'flex w-[73%] flex-col'
            }
          >
            {children}
          </main>
        </div>
      ) : (
        <main
          className={
            !isOpen ? 'flex w-[100%] flex-col h-[1500px] ' : 'flex w-[73%] flex-col'
          }
        >
          {children}
        </main>
      )}
    </div>
  );
}

export default Sidebar;

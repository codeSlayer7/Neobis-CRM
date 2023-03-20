import { NavLink } from 'react-router-dom';
import { FaBars, FaArrowRight } from 'react-icons/fa';
import React, { useState } from 'react';
import StudentIcon from '../../icons/StudentIcon';
import ArchiveIcon from '../../icons/ArchiveIcon';
import MentorsIcon from '../../icons/MentorsIcon';
import ApplicationIcon from '../../icons/ApplicationIcon';
import AnalyticsIcon from '../../icons/AnalyticsIcon';
import GroupIcon from '../../icons/GroupIcon';

interface IMenuItem {
  name: string;
  path: string;
  icon: React.ReactNode;
}
type Props = {
  children: React.ReactNode;
};

function Sidebar({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const activeMenu =
    'text-slate-100 text-xl flex gap-3.5 rounded-lg p-5 bg-neobis-bg-violet';
  const normalMenu =
    'text-slate-400 group flex rounded-lg gap-3.5 text-xl p-5 hover:bg-purple-100 hover:text-violet-400 ';

  const menuItem: IMenuItem[] = [
    { name: 'Заявки', path: '/', icon: <ApplicationIcon /> },
    { name: 'Группы', path: '/groups', icon: <GroupIcon /> },
    { name: 'Студенты', path: '/students', icon: <StudentIcon /> },
    { name: 'Преподаватели', path: '/mentors', icon: <MentorsIcon /> },
    { name: 'Архивы', path: '/archive', icon: <ArchiveIcon /> },
    { name: 'Аналитика', path: '/analytics', icon: <AnalyticsIcon /> },
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
            <FaArrowRight
              onClick={toggle}
              style={{ display: isOpen ? 'none' : 'block' }}
              className="ml-6 text-2xl text-violet-400"
            />
            <FaBars
              style={{ display: isOpen ? 'block' : 'none' }}
              onClick={toggle}
              className="ml-20 text-2xl text-violet-400"
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

export default Sidebar;

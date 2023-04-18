import { Link } from 'react-router-dom';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import React, { useState } from 'react';
import { MdOutlineManageAccounts } from 'react-icons/md';
import { VscBook } from 'react-icons/vsc';
import { BsFolder, BsPersonWorkspace } from 'react-icons/bs';
import { SlGraduation } from 'react-icons/sl';
import { TiMessages } from 'react-icons/ti';
import { TbBrandGoogleAnalytics } from 'react-icons/tb';

interface IMenuItem {
  name: string;
  path: string;
  icon: React.ReactNode;
  selected: boolean;
}
type Props = {
  children: React.ReactNode;
};

function SidebarAdmin({ children }: Props) {
  const Items: IMenuItem[] = [
    {
      name: 'Менеджер',
      path: '/admin',
      icon: <MdOutlineManageAccounts className="text-3xl" />,
      selected: false,
    },
    {
      name: 'Заявки',
      path: '/admin/applications',
      icon: <TiMessages className="text-3xl" />,
      selected: false,
    },

    {
      name: 'Преподаватели',
      path: '/admin/mentors',
      icon: <VscBook className="text-3xl" />,
      selected: false,
    },
    {
      name: 'Курсы',
      path: '/admin/courses',
      icon: <BsPersonWorkspace className="text-3xl" />,
      selected: false,
    },
    {
      name: 'Студенты',
      path: '/admin/students',
      icon: <SlGraduation className="text-3xl" />,
      selected: false,
    },
    {
      name: 'Архивы',
      path: '/admin/archive',
      icon: <BsFolder className="text-3xl" />,
      selected: false,
    },
    {
      name: 'Аналитика',
      path: '/admin/analytics',
      icon: <TbBrandGoogleAnalytics className="text-3xl" />,
      selected: false,
    },
  ];

  const [menuItem, setMenuItem] = useState(Items);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [isBurger, setIsBurger] = useState(false);

  const activeMenu =
    'text-slate-100 text-xl flex gap-3.5 rounded-full p-5 m-1 bg-[#A062F7]';
  const normalMenu =
    'relative text-slate-400 group flex rounded-full gap-3.5 text-xl p-5 m-1 hover:bg-[#D9BFFF] hover:text-[#A062F7]';

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
          <Link
            to={item?.path}
            key={index}
            onClick={() => {
              setMenuItem({ ...item, selected: !item.selected });
            }}
            className={`${item.selected ? activeMenu : normalMenu}`}
          >
            <div>{item.icon}</div>
            <div style={{ display: isOpen ? 'block' : 'none' }}>
              {item.name}
            </div>
          </Link>
        ))}
      </div>

      <main
        className={
          !isOpen ? 'flex  w-[100%] bg-[#F4F7FD]' : 'flex w-[73%] bg-[#F4F7FD]'
        }
      >
        {children}
      </main>
    </div>
  );
}

export default SidebarAdmin;

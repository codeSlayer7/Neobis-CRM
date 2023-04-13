import { FiEdit } from 'react-icons/fi';
import { MdOutlineSaveAlt } from 'react-icons/md';
import mentor from '../../../images/mentor.png';
import room from '../../../images/room.png';
import python from '../../../images/pythonIcon.png';
import student from '../../../images/student.png';
import DropDown from '../../../components/DropDown';
import SearchIcon from '../../../icons/SearchIcon';
import CourseStudents from '../../../components/Table/CourseStudents';
import Schedule from '../../../components/Schedule/schedule';
import Calendar from '../../../components/Schedule/calendar';

function AdminGroups() {
  return (
    <div className="my-10 ml-[36px] h-[100vh] w-full">
      <div className="flex h-24 w-[1287px] items-center justify-around rounded-lg border-2 border-slate-200 bg-white shadow-md ">
        <div className="flex">
          <img className="h-[65px] w-[65px]" src={mentor} alt="#" />
          <span className="ml-3">
            <h3 className="text-xl font-semibold">Адилет Масалиев</h3>
            <p className="tetx-lg font-normal">Преподаватель</p>
          </span>
        </div>
        <div className="flex">
          <img className="h-[65px] w-[65px]" src={room} alt="#" />
          <span className="ml-3">
            <h3 className="text-xl font-semibold">Маленькая комната</h3>
            <p className="tetx-lg font-normal">Аудитория</p>
          </span>
        </div>
        <div className="flex">
          <img className="h-[65px] w-[65px]" src={python} alt="#" />
          <span className="ml-3">
            <h3 className="text-xl font-semibold">Python 1</h3>
            <p className="tetx-lg font-normal">Группа</p>
          </span>
        </div>
        <div className="flex">
          <img className="h-[65px] w-[65px]" src={student} alt="#" />
          <span className="ml-3">
            <h3 className="text-xl font-semibold">26</h3>
            <p className="tetx-lg font-normal">Студентов</p>
          </span>
          <div className="ml-16 flex w-20 items-center justify-around  ">
            <MdOutlineSaveAlt className="  text-3xl  font-bold text-slate-400 hover:text-[#4588C6]" />
            <FiEdit className="text-2xl  text-slate-400 hover:text-[#4588C6]" />
          </div>
        </div>
      </div>
      <div className="my-20 mb-10 flex w-[60%] justify-between">
        <DropDown
          label={<div className="font-sans text-base">Оплата</div>}
          onOptionClick={(option) => `(option)`}
          options={['Наличными', 'Карта']}
        />
        <DropDown
          label={<div className="font-sans text-base">Группы</div>}
          onOptionClick={(option) => `(option)`}
          options={['Python 1', 'Python 2']}
        />
        <div className="flex w-[420px] items-center justify-between">
          <input
            className="placeholder:regular absolute block w-[420px] rounded-md border  border-slate-300 bg-white py-2 pl-9 pr-3 shadow-sm placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
            placeholder="Поиск..."
            type="text"
            name="search"
          />
          <span className="relative left-[350px]">
            <SearchIcon />
          </span>
        </div>
      </div>
      <div className=" items-left  h-[1200px] w-full ">
        <CourseStudents />
        <Calendar />
        <Schedule />
      </div>
    </div>
  );
}
export default AdminGroups;
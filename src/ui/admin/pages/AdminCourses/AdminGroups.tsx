import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import mentor from '../../../images/online-learning.png';
import room from '../../../icons/video-lesson.png';
import python from '../../../icons/it-department.png';
import student from '../../../images/classmates.png';
import DropDown from '../../../components/DropDown';
import SearchIcon from '../../../icons/SearchIcon';
import CourseStudents from '../../../components/Table/CourseStudents';
import Schedule from '../../../components/Schedule/schedule';
import Calendar from '../../../components/Schedule/calendar';
import { array } from '../../components/AdminDropDown/GroupField';
import { useAppDispatch, useAppSelector } from '../../../../constants/global';
import { getCourseByIdThunk } from '../../../../redux/service/courses/coursesAction';

function AdminGroups() {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const course = useAppSelector((state) => state.courses.course);
  useEffect(() => {
    dispatch(getCourseByIdThunk(id));
  }, [id, dispatch]);
  // console.log(course, 'dddd')

  return (
    <div className="my-10 ml-[36px] h-[100vh] w-full">
      <div className="flex h-24 w-[1287px] items-center justify-around rounded-lg border-2 border-slate-200 bg-white shadow-md ">
        <div className="flex">
          <img
            className="h-[65px] w-[65px]  rounded-full border-[3px] border-[#4588C6] p-1"
            src={mentor}
            alt="#"
          />
          <span className="ml-3">
            <p className="text-xl font-normal">Преподаватели</p>
            <h3 className="text-2xl font-semibold text-[#4588C6]">
              {course.numberOfMentors}
            </h3>
          </span>
        </div>
        <div className="flex">
          <img
            className="h-[65px] w-[65px]  rounded-full border-[3px] border-[#4588C6] p-1"
            src={python}
            alt="#"
          />
          <span className="ml-3">
            <p className="text-2xl font-normal">Группы</p>
            <h3 className="text-xl font-semibold text-[#4588C6] ">
              {course.numberOfGroups}
            </h3>
          </span>
        </div>
        <div className="flex">
          <img
            className="h-[65px] w-[65px]  rounded-full border-[3px] border-[#4588C6] p-1"
            src={room}
            alt="#"
          />
          <span className="ml-3">
            <p className="text-xl font-normal">Занятия</p>
            <h3 className="text-2xl font-semibold text-[#4588C6] ">
              {course.numberOfLessons}
            </h3>
          </span>
        </div>

        <div className="flex">
          <img
            className="h-[65px] w-[65px] rounded-full border-[3px] border-[#4588C6] p-1"
            src={student}
            alt="#"
          />
          <span className="ml-3">
            <p className="text-xl font-normal">Студенты</p>
            <h3 className="text-2xl font-semibold text-[#4588C6]">
              {course.numberOfStudents}
            </h3>
          </span>
        </div>
      </div>
      <div className="my-20 mb-10 flex w-[60%] justify-between">
        {/* <DropDown
          label={<div className="font-sans text-base">Оплата</div>}
          onOptionClick={(option) => `(option)`}
          options={['Наличными', 'Карта']}
        /> */}
        <DropDown
          label={<div className="font-sans text-base">Группы</div>}
          onOptionClick={(option) => `(option)`}
          options={array}
        />
        <div className="flex w-[420px] items-center justify-between ">
          <input
            className="placeholder:regular absolute block w-[420px] rounded-lg border-2  border-slate-300 bg-white py-2 pl-9 pr-3 shadow-md placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
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
        {/* <Calendar />
        <Schedule />  */}
      </div>
    </div>
  );
}
export default AdminGroups;

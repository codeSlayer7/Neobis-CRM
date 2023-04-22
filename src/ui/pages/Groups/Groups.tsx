import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import mentor from '../../images/online-learning.png';
import room from '../../icons/video-lesson.png';
import python from '../../icons/it-department.png';
import student from '../../images/classmates.png';
import DropDown from '../../components/DropDown';
import SearchIcon from '../../icons/SearchIcon';
import CourseStudents from '../../components/Table/CourseStudents';
// import Schedule from '../../components/Schedule/schedule';
// import Calendar from '../../components/Schedule/calendar';
import { useAppDispatch, useAppSelector } from '../../../constants/global';
import { getCourseByIdThunk } from '../../../redux/service/courses/coursesAction';
import { array } from '../../admin/components/AdminDropDown/GroupField';

function Groups() {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const course = useAppSelector((state) => state.courses.course);
  useEffect(() => {
    dispatch(getCourseByIdThunk(id));
  }, [id, dispatch]);

  return (
    <div className="my-10 ml-[36px] h-[auto] w-full">
      <div className="flex h-24 w-[1287px] items-center justify-around rounded-lg border-2 border-slate-200 shadow-md ">
        <div className="flex">
          <img
            className="h-[65px] w-[65px] rounded-full border-[3px] border-[#8874C8] p-[4px] "
            src={mentor}
            alt="#"
          />
          <span className="ml-4">
            <p className="tetx-lg font-normal">Преподаватели</p>
            <h3 className="text-xl font-semibold text-[#8874C8] ">
              {course.numberOfMentors}
            </h3>
          </span>
        </div>

        <div className="flex">
          <img
            className="h-[65px] w-[65px] rounded-full border-[3px] border-[#8874C8] p-[4px]"
            src={python}
            alt="#"
          />
          <span className="ml-4">
            <p className="tetx-lg font-normal">Группы</p>
            <h3 className="text-xl font-semibold text-[#8874C8] ">
              {course.numberOfGroups}
            </h3>
          </span>
        </div>
        <div className="flex">
          <img
            className="h-[65px] w-[65px] rounded-full border-[3px] border-[#8874C8] p-[4px]"
            src={room}
            alt="#"
          />
          <span className="ml-4">
            <p className="tetx-lg font-normal">Занятия</p>
            <h3 className="text-xl font-semibold text-[#8874C8] ">
              {course.numberOfLessons}
            </h3>
          </span>
        </div>
        <div className="flex">
          <img
            className="h-[65px] w-[65px] rounded-full border-[3px] border-[#8874C8] p-[4px]"
            src={student}
            alt="#"
          />
          <span className="ml-4">
            <p className="tetx-lg font-normal">Студенты</p>
            <h3 className="w-[80%] text-xl font-semibold text-[#8874C8]">
              {course.numberOfStudents}
            </h3>
          </span>
        </div>
      </div>
      <div className="my-20  mb-10 flex w-[93%] justify-between">
        <h3 className="text-3xl font-semibold leading-10 ">Активные группы</h3>
        <div className="flex w-[400px] justify-between mr-10">
          <DropDown
            label={
              <div className="inline-flex h-5 w-28 items-center font-sans text-base">
                Ментор
              </div>
            }
            onOptionClick={(option) => option}
            options={array}
          />
          <button
            type="button "
            className="bg-neobis-bg-green h-11 w-48 font-sans rounded-lg border text-lg text-white"
          >
            Добавить группу
          </button>
        </div>
      </div>
      <div className="my-20  mb-10 flex w-[93%] justify-between">
        <h3 className="text-3xl font-semibold leading-10 ">Список студентов</h3>

        <div className="flex w-[700px] justify-between">
          <DropDown
            label={
              <div className="inline-flex h-5 w-28 items-center font-sans text-base">
                Группы
              </div>
            }
            onOptionClick={(option) => option}
            options={array}
          />
          <div className="mr-10  flex w-[420px] items-center justify-between">
            <input
              className="placeholder:regular absolute block h-[44px] w-[420px] rounded-lg border-2  border-slate-300 bg-white py-2 pl-9 pr-3 shadow-lg placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              placeholder="Поиск..."
              type="text"
              name="search"
            />
            <span className="relative left-[350px]">
              <SearchIcon />
            </span>
          </div>
        </div>
      </div>

      <div className=" items-left  h-[1200px] w-full ">
        <CourseStudents />
        {/* <Calendar />
        <Schedule /> */}
      </div>
    </div>
  );
}
export default Groups;

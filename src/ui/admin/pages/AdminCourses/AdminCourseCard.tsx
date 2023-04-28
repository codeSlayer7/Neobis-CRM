import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DropDownAdminCourses from './DropDownAdminCourses';
import ProfileUser from '../../../icons/ProfileUser';
import Time from '../../../icons/Time';
import Money from '../../../icons/Money';
import Book from '../../../icons/Book';
import { useAppSelector, useAppDispatch } from '../../../../constants/global';
import { getAllCoursesThunk } from '../../../../redux/service/courses/coursesAction';
import { CourseType } from '../../components/Modals/CreateCourse';
import { archiveCourse } from '../../../../redux/service/courses/courses';

function AdminCourseCard({
  openEditMenu,
}: {
  openEditMenu: (course: CourseType) => void;
}) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const courses = useAppSelector((state) => {
    return state.courses.courses;
  });

  const archive = (id: number) => {
    archiveCourse(id)
      .then((res) => {
        if (res.status === 200) {
          alert('Успешно архивирован');
          dispatch(getAllCoursesThunk());
        }
      })
      .catch((err) => {
        alert('Ошибка при архивации');
      });
  };

  useEffect(() => {
    dispatch(getAllCoursesThunk());
  }, [dispatch]);

  return (
    <div className="mx-20 my-10 flex flex-wrap">
      {courses &&
        courses.map((course: any) => (
          <div key={course.id}>
            <div className="relative m-5 h-[360px] w-[350px] rounded-3xl border-2 border-[#B4D9FF] bg-white bg-fixed shadow-lg ">
              <DropDownAdminCourses
                archive={() => archive(course.id)}
                openEditMenu={() => openEditMenu(course)}
              />

              <img
                src={course.imageUrl}
                alt="#"
                className="mt-[-81px] h-[200px] w-[100%] rounded-t-3xl border-0 bg-fixed"
              />

              <h3
                className="my-3 ml-[26px] text-[28px] font-semibold text-[#4588C6]"
                onClick={() => navigate(`/admin/courses/${course.id}`)}
              >
                {course.name}
              </h3>

              <hr className="ml-6 w-[300px] border-2" />
              <div className="mt-3 ml-6 flex w-[330px]  flex-wrap">
                <div className="flex flex-col">
                  <div className="flex ">
                    <ProfileUser />
                    <p className="ml-3 text-lg font-normal">
                      {course.numberOfGroups} группы
                    </p>
                  </div>
                  <div className="flex">
                    <Time />
                    <p className="ml-3 text-lg font-normal">
                      {' '}
                      {course.durationInMonth} месяца
                    </p>
                  </div>
                </div>
                <div className="ml-[11%] flex flex-col ">
                  <div className="flex">
                    <Money />
                    <p className=" ml-3 text-lg font-normal">
                      {course.cost} сом
                    </p>
                  </div>

                  <div className="flex">
                    <Book />
                    <p className=" ml-3 text-lg font-normal">
                      {course.numberOfLessons} занятий
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default AdminCourseCard;

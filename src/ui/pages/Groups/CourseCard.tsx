import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Book from '../../icons/Book';
import Money from '../../icons/Money';
import ProfileUser from '../../icons/ProfileUser';
import Time from '../../icons/Time';
import { useAppDispatch, useAppSelector } from '../../../constants/global';
import { getAllCoursesThunk } from '../../../redux/service/courses/coursesAction';

function CourseCard() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const courses = useAppSelector((state) => {
    return state.courses.courses;
  });

  useEffect(() => {
    dispatch(getAllCoursesThunk());
  }, [dispatch]);
  return (
    <div className='flex flex-wrap w-[90%]'>
      {courses &&
        courses.map((course: any) => (
          <div
            key={course.id}
            onClick={() => navigate(`/courses/${course.id}`)}
          >
            <div className="relative  h-[360px] w-[350px] rounded-3xl border border-2 bg-fixed shadow-lg m-5 border-[#D9BFFF]">
              <img
                src={course.imageUrl}
                alt="#"
                className="rounded-t-3xl border-0 bg-fixed w-[100%] h-[200px]"
              />

              <h3 className="my-3 ml-[26px] text-[28px] font-semibold text-[#70BF44]">
                {course.name}
              </h3>

              <hr className="ml-6 w-[300px] border border-[#8874C8] " />
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
export default CourseCard;

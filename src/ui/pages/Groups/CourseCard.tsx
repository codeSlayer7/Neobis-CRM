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
    <div>
      {courses &&
        courses.map((course: any) => (
          <div
            key={course.id}
            onClick={() => navigate(`/courses/${course.id}`)}
          >
            <div className="relative  h-[398px] w-[382px] rounded-3xl border border-black bg-fixed shadow-sm">
              <img
                src={course.imageUrl}
                alt="#"
                className="rounded-t-3xl border-0 bg-fixed"
              />

              <h3 className="my-3 ml-[26px] text-[32px] font-bold ">
                {course.name}
              </h3>

              <hr className="ml-6 w-[330px] border border-black " />
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
                <div className="ml-[15%] flex flex-col ">
                  <div className="flex">
                    <Money />
                    <p className=" ml-3 text-lg font-normal">
                      {course.cost} тыс.сом
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

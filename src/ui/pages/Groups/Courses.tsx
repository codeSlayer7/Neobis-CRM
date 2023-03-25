// import { Link } from 'react-router-dom';
import CourseCard from './CourseCard';
import CourseData from './CourseData';

export default function Courses() {
  return (
    <div className="mx-[20px] h-auto w-[100%] pt-12 ">
      <div className="justify-around] flex flex-wrap">
        <CourseCard details={CourseData} />
      </div>
    </div>
  );
}

import CourseCard from './CourseCard';
import CourseData from './CourseData';

export default function Courses() {
  return (
    <div className="ml-[20px] h-[100vh] w-[100%] pt-12 ">
      <div className="justify-around] flex flex-wrap">
        <CourseCard details={CourseData} />
      </div>
    </div>
  );
}

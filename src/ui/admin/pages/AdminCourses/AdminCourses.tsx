import { Link } from 'react-router-dom';
import AdminCourseCard from './AdminCourseCard';
import AdminCourseData from './AdminCourseData';
import { getAllCourses } from '../../../../redux/service/courses/courses';

export default function AdminCourses() {
  getAllCourses();
  return (
    <div className="pb-0 pl-[20px] pr-[0px] pt-[40px] h-auto w-[100%] ">
      <Link to="/admin/course/create">
        <button
          type="button"
          className="ml-[980px] h-[43px] w-[251px] rounded-lg border bg-[#4588C6] text-lg text-white transition duration-150 hover:scale-95"
        >
          Создать новый курс
        </button>
      </Link>

      <div className="justify-around] flex flex-wrap">
        <AdminCourseCard details={AdminCourseData} />
      </div>
    </div>
  );
}

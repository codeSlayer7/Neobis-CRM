import { Link } from 'react-router-dom';
import AdminCourseCard from './AdminCourseCard';
import AdminCourseData from './AdminCourseData';

export default function AdminCourses() {
  return (
    <div className="ml-[20px] h-auto w-[100%] pt-12 ">
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

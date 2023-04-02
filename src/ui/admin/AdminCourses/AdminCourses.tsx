import AdminCourseCard from './AdminCourseCard';
import AdminCourseData from './AdminCourseData';

export default function AdminCourses() {
  return (
    <div className="mx-[20px] h-auto w-[100%] pt-12 ">
      <button
        type="button"
        className="bg-neobis-bg-green h-[43px] w-[251px] ml-[980px] rounded-lg border text-lg text-white transition duration-150 hover:scale-95"
      >
        Создать новый курс
      </button>
      <div className="justify-around] flex flex-wrap">
        <AdminCourseCard details={AdminCourseData} />
      </div>
    </div>
  );
}

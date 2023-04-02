import { Link } from 'react-router-dom';
import Book from '../../icons/Book';
import Money from '../../icons/Money';
import ProfileUser from '../../icons/ProfileUser';
import Time from '../../icons/Time';
import DropDownAdminCourses from './DropDownAdminCourses';

function AdminCourseCard(props) {
  return (
    <>
      {props.details.map((value, index) => (
        <div key={index}>
          <div className="relative m-5 bg-fixed h-[398px] w-[382px] rounded-3xl border border-black shadow-sm">
            <DropDownAdminCourses />

            <img
              src={value.img}
              alt="#"
              className="mt-[-81px] rounded-t-3xl border-0 bg-fixed"
            />
            <Link to="/groups">
              <h3 className="my-3 ml-[26px] text-[32px] font-bold ">
                {value.title}
              </h3>
            </Link>
            <hr className="ml-6 w-[330px] border border-black " />
            <div className="mt-3 ml-6 flex w-[330px]  flex-wrap">
              <div className="flex">
                <ProfileUser />
                <p className="ml-4 text-lg font-normal">2 группы</p>
              </div>
              <div className="ml-[75px] flex">
                <Time />
                <p className="ml-4 text-lg font-normal"> 3 месяца</p>
              </div>
              <div className="mt-2 flex">
                <Money />
                <p className="ml-4 text-lg font-normal ">20 тыс.сом</p>
              </div>
              <div className="ml-[60px] mt-2 flex">
                <Book />
                <p className="ml-4 text-lg font-normal">24 занятий</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
export default AdminCourseCard;

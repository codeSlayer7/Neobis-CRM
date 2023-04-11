import { Link } from 'react-router-dom';
import Book from '../../icons/Book';
import Money from '../../icons/Money';
import ProfileUser from '../../icons/ProfileUser';
import Time from '../../icons/Time';

function CourseCard(props) {
  return (
    <>
      {props.details.map((value, index) => (
        <div key={index}>
          <Link to="/groups">
            <div className="m-5 h-[398px] w-[382px] bg-white rounded-3xl border border-black shadow-sm">
              <img src={value.img} alt="#" className="rounded-t-3xl border-0" />
              <h3 className="my-3 ml-[26px] text-[32px] font-bold ">
                {value.title}
              </h3>
              <hr className="ml-6 w-[330px] border border-black " />
              <div className="mt-3 ml-6 flex w-[330px] bg-white flex-wrap">
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
          </Link>
        </div>
      ))}
    </>
  );
}
export default CourseCard;

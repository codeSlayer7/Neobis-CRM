import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import DropDownAdminMentor from './DropDownAdminMentor';
import { useAppDispatch, useAppSelector } from '../../../../constants/global';
import { getAllMentorsThunk } from '../../../../redux/service/mentors/mentorsAction';

function AdminMentorsCard() {
  const dispatch = useAppDispatch();
  const mentors = useAppSelector((state) => {
    return state.mentors.mentors;
  });
  useEffect(() => {
    dispatch(getAllMentorsThunk());
  }, [dispatch]);
  return (
    <div>
      {mentors.map((mentor: any) => (
        <div className="mr-[50px] h-[500px] " key={mentor.id}>
          <div className="mb-10 h-[351px] w-[323px] rounded-3xl border border-[#C7C7C7] bg-white shadow-md">
            <DropDownAdminMentor />

            <div className="mt-[-50px] flex items-center w-full justify-center  ">
              <img src={mentor.imageUrl} alt="#" className="rounded-full  border w-[120px] h-[120px] " />
            </div>
            <div className="mt-2 flex w-full flex-col justify-center text-center">
              <h3 className="text-xl font-semibold transform- ">{mentor.firstName} {mentor.lastName}</h3>
              <p className="text-base font-normal text-[#959595]">
                {mentor.email}
              </p>
            </div>
            <div className="mt-3 h-[127px] w-full rounded-b-3xl border bg-[#4588C6] text-center text-white">
              <p className=" mt-2 text-xl font-semibold">{mentor.course}</p>
              <Link to="/admin/mentor/details">
                <button
                  type="button"
                  className="mt-6 h-[42px] w-[279px] rounded-lg border border-white bg-[#E6EAEE] text-lg font-normal text-[#4588C6] transition duration-150 hover:scale-95"
                >
                  Подробная информация
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default AdminMentorsCard;

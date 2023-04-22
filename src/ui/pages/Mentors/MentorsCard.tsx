import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../constants/global';
import { getAllMentorsThunk } from '../../../redux/service/mentors/mentorsAction';

function MentorsCard() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const mentors = useAppSelector((state) => {
    return state.mentors.mentors;
  });
  useEffect(() => {
    dispatch(getAllMentorsThunk());
  }, [dispatch]);
  return (
    <div className="flex flex-wrap">
      {mentors &&
        mentors.map((mentor: any) => (
          <div
            className="mr-[50px]"
            key={mentor.id}
            // onClick={() => navigate(`/mentors/${mentors.id}`)}
          >
            <div className="mb-10 h-[351px] w-[323px] rounded-3xl border border-[#C7C7C7] shadow-md">
              <div className="mt-6 flex w-full items-center justify-center">
                <img
                  src={mentor.imageUrl}
                  alt="#"
                  className="h-[120px] w-[120px] rounded-full border "
                />
                {/* <div>{value.logo}</div> */}
              </div>
              <div className="mt-2 flex w-full flex-col justify-center text-center">
                <h3 className="text-xl font-semibold">
                  {mentor.firstName} {mentor.lastName}
                </h3>
                <p className="text-base font-normal text-[#959595]">
                  {mentor.email}
                </p>
              </div>
              <div className="bg-neobis-bg-violet mt-5 h-[127px] w-full rounded-b-3xl border text-center text-white">
                <p className=" mt-2 text-xl font-semibold">{mentor.course}</p>

                <button
                  onClick={() => navigate(`/mentors/${mentor.id}`)}
                  type="button"
                  className="bg-neobis-bg-green mt-6 h-[42px] w-[279px] rounded-lg border border-white text-lg font-normal transition duration-150 hover:scale-95"
                >
                  Подробная информация
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
export default MentorsCard;

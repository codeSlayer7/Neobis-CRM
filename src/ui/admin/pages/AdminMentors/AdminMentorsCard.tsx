import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import DropDownAdminMentor from './DropDownAdminMentor';
import { useAppDispatch, useAppSelector } from '../../../../constants/global';
import { getAllMentorsThunk } from '../../../../redux/service/mentors/mentorsAction';

function AdminMentorsCard({
  openEditMenu,
}: {
  openEditMenu: (course: CourseType) => void;
}) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const mentors = useAppSelector((state) => {
    return state.mentors.mentors;
  });

  const archive = (id: number) => {
    archiveMentor(id)
      .then((res) => {
        if (res.status === 200) {
          alert('Успешно архивирован');
          dispatch(getAllMentorsThunk());
        }
      })
      .catch((err) => {
        alert('Ошибка при архивации');
      });
  };
  useEffect(() => {
    dispatch(getAllMentorsThunk());
  }, [dispatch]);
  
  return (
    <div className="flex w-full flex-wrap">
      {mentors.map((mentor: any) => (
        <div className="mr-[50px] " key={mentor.id}>
          <div className="m-5 h-[351px] w-[323px] rounded-3xl border border-[#C7C7C7] bg-white shadow-md">
            <DropDownAdminMentor 
             archive={() => archive(mentor.id)}
             openEditMenu={() => openEditMenu(mentor)}/>

            <div className=" flex w-full items-center justify-center  ">
              <img
                src={mentor.imageUrl}
                alt="#"
                className="mt-[-50px]  h-[120px] w-[120px] rounded-full border "
              />
            </div>
            <div className="mt-2 flex w-full flex-col justify-center text-center">
              <h3 className="transform- text-xl font-semibold ">
                {mentor.firstName} {mentor.lastName}
              </h3>
              <p className="text-base font-normal text-[#959595]">
                {mentor.email}
              </p>
            </div>
            <div className="mt-3 h-[127px] w-full rounded-b-3xl border bg-[#4588C6] text-center text-white">
              <p className=" mt-2 text-xl font-semibold">{mentor.course}</p>

              <button
                onClick={() => navigate(`/admin/mentors/${mentor.id}`)}
                type="button"
                className="mt-6 h-[42px] w-[279px] rounded-lg border border-white bg-[#E6EAEE] text-lg font-normal text-[#4588C6] transition duration-150 hover:scale-95"
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
export default AdminMentorsCard;

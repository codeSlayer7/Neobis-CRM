import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../constants/global';
import EditWhite from '../../../icons/EditWhite';
// import photo from '../../../images/Photo.png';
import { getMentorByIdThunk } from '../../../../redux/service/mentors/mentorsAction';

function AdminMentorsDetails() {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const mentor = useAppSelector((state) => state.mentors.mentor);

  useEffect(() => {
    dispatch(getMentorByIdThunk(id));
  }, [id, dispatch]);

  return (
    <div className="mx-10 mb-20 h-auto w-full items-center justify-center">
      <button
        type="button"
        className="bg- my-10 ml-[80%] inline-flex h-[43px] w-[212px] items-center justify-around rounded-lg border text-xl font-normal text-white transition duration-150 hover:scale-95"
      >
        Редактировать
        <EditWhite />
      </button>
      <div className="relative mb-12 flex h-[797px] w-[1318px] rounded-xl border-2 bg-[#FCFDFE] shadow-md">
        <div className="mt-12 ml-20">
          <img
            src={mentor.imageUrl}
            alt="#"
            className="h-[120px] w-[120px] rounded-full border"
          />
          <h3 className="mt-12 text-lg font-semibold text-[#4588C6]">
            Преподаватель <br />
            {mentor.courseName}
          </h3>
        </div>
        <div className="mt-12 ml-28 flex w-[60%] flex-wrap justify-between ">
          <div>
            <ul className="my-5">
              <li className="text-2xl font-semibold">Имя</li>
              <li className="text-xl font-normal">
                {mentor.firstName} {mentor.lastName}
              </li>
            </ul>
            <ul>
              <li className="text-2xl font-semibold">Номер телефона</li>
              <li className="text-xl font-normal">{mentor.phoneNumber}</li>
            </ul>
          </div>
          <div className="mr-20">
            {mentor.groupNames && mentor.groupNames.length > 0 ? (
              <ul className="my-5">
                <li className="text-2xl font-semibold">Обучение в группах</li>
                {mentor.groupNames.map((groupName, index) => (
                  <li key={index} className="text-xl font-normal">
                    {groupName}
                  </li>
                ))}
              </ul>
            ) : (
              <p>Данные о группах отсутствуют</p>
            )}

            {/* <ul className="my-5">
              <li className="text-2xl font-semibold">Обучение в группах</li>
              {mentor.groupNames.map((groupName, index) => (
            <li key={index} className="text-xl font-normal">{groupName}</li>))}
              </ul> */}
            <ul className=" ">
              <li className="text-2xl font-semibold">Gmail</li>
              <li className="text-xl font-normal">{mentor.email}</li>
            </ul>
          </div>

          <div className="mt-5 ">
            <h3 className="mb-8 text-2xl font-semibold">Расписание</h3>
            <div className="rounded-lg border ">
              <table className="table-fixed cursor-pointer text-center text-xl font-normal">
                <thead>
                  <tr>
                    <th className=" h-20 w-40 rounded-lg border border-white bg-[#4588C6] text-2xl text-white">
                      Время
                    </th>
                    <th className=" h-20 w-40 rounded-lg border border-white bg-[#4588C6] text-2xl text-white">
                      Пн
                    </th>
                    <th className=" h-20 w-40 rounded-lg border border-white bg-[#4588C6] text-2xl text-white">
                      Вт
                    </th>
                    <th className=" h-20 w-40 rounded-lg border border-white bg-[#4588C6] text-2xl text-white">
                      Ср
                    </th>
                    <th className=" h-20 w-40 rounded-lg border border-white bg-[#4588C6] text-2xl text-white">
                      Чт
                    </th>
                    <th className=" h-20 w-40 rounded-lg border border-white bg-[#4588C6] text-2xl text-white">
                      Пт
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="h-16 w-40 rounded-lg border hover:bg-slate-200">
                      09:30 - 12:00
                    </td>
                    <td className="h-16 w-40 rounded-lg border hover:bg-slate-200">
                      Javascript1
                    </td>
                    <td className="h-16 w-40 rounded-lg border hover:bg-slate-200" />
                    <td className="h-16 w-40 rounded-lg border hover:bg-slate-200" />
                    <td className="h-16 w-40 rounded-lg border hover:bg-slate-200" />
                    <td className="h-16 w-40 rounded-lg border hover:bg-slate-200" />
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td className="h-16 w-40 rounded-lg border hover:bg-slate-200">
                      12:30 - 14:30
                    </td>
                    <td className="h-16 w-40 rounded-lg border hover:bg-slate-200" />
                    <td className="h-16 w-40 rounded-lg border hover:bg-slate-200">
                      Javascript2
                    </td>
                    <td className="h-16 w-40 rounded-lg border hover:bg-slate-200" />
                    <td className="h-16 w-40 rounded-lg border hover:bg-slate-200">
                      Javascript1
                    </td>
                    <td className="h-16 w-40 rounded-lg border hover:bg-slate-200" />
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td className="h-16 w-40 rounded-lg border hover:bg-slate-200">
                      15:00 - 17:30
                    </td>
                    <td className="h-16 w-40 rounded-lg border hover:bg-slate-200" />
                    <td className="h-16 w-40 rounded-lg border hover:bg-slate-200" />
                    <td className="h-16 w-40 rounded-lg border hover:bg-slate-200">
                      Javascript2
                    </td>
                    <td className="h-16 w-40 rounded-lg border hover:bg-slate-200" />
                    <td className="h-16 w-40 rounded-lg border hover:bg-slate-200">
                      Javascript2
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td className="h-16 w-40 rounded-lg border hover:bg-slate-200">
                      18:00 - 20:00
                    </td>
                    <td className="h-16 w-40 rounded-lg border hover:bg-slate-200" />
                    <td className="h-16 w-40 rounded-lg border hover:bg-slate-200" />
                    <td className="h-16 w-40 rounded-lg border hover:bg-slate-200" />
                    <td className="h-16 w-40 rounded-lg border hover:bg-slate-200" />
                    <td className="h-16 w-40 rounded-lg border hover:bg-slate-200">
                      Javascript1
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-[1px] mr-5 h-0 w-0 rounded-bl-xl border-2 border-b-[150px] border-r-[150px] border-[#FCFDFE] border-b-[#4588C6] shadow-md" />
      </div>
    </div>
  );
}
export default AdminMentorsDetails;

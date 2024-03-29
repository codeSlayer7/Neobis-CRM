import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../constants/global';
import { getMentorById } from '../../../../redux/service/mentors/mentors';
import photo from '../../../images/Photo.png';
import { getMentorByIdThunk } from '../../../../redux/service/mentors/mentorsAction';

function MentorsDetails() {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const mentor = useAppSelector((state) => state.mentors.mentor);

  useEffect(() => {
    dispatch(getMentorByIdThunk(id));
  }, [id, dispatch]);

  return (
    <div className="flex h-auto w-full items-center justify-center">
      <div className="relative my-12 flex h-[797px] w-[1318px] rounded-xl border-2 shadow-md bg-[#FCFDFE]">
        <div className="mt-12 ml-20">
          <img
            src={mentor.imageUrl}
            alt="#"
            className="h-[120px] w-[120px] rounded-full border"
          />
          <h3 className="mt-12 text-lg font-semibold text-[#70BF44]">
            Преподаватель <br />
            {mentor.courseName}
          </h3>
        </div>
        <div className="mt-12 ml-32 flex flex-wrap w-[60%] justify-between">
          <div className=''>
            <ul className="mr-24 pb-5">
              <li className="text-2xl font-semibold">Имя</li>
              <li className="text-xl font-normal">
                {mentor.firstName} {mentor.lastName}
              </li>
            </ul>
            <ul className="mr-24 pb-5">
              <li className="text-2xl font-semibold">Номер телефона</li>
              <li className="text-xl font-normal">{mentor.phoneNumber}</li>
            </ul>
          </div>
          <div className='mr-20'>
            <ul className=" pb-5">
              <li className="text-2xl font-semibold ">Gmail</li>
              <li className="text-xl font-normal">{mentor.email}</li>
            </ul>

            <ul className="pb-5">
              <li className="text-2xl font-semibold">Обучение в группах</li>
              <li className="text-xl font-normal">{mentor.groupName}</li>
            </ul>
          </div>

          <div >
            <h3 className="mb-8 text-2xl font-semibold">Расписание</h3>
            <div className="rounded-lg border ">
              <table className="table-fixed cursor-pointer text-center text-xl font-normal">
                <thead>
                  <tr>
                    <th className="border-bg-neobis-bg-green bg-neobis-bg-green h-20 w-40 rounded-lg border border-white text-2xl text-white">
                      Время
                    </th>
                    <th className="border-bg-neobis-bg-green bg-neobis-bg-green h-20 w-40 rounded-lg border border-white text-2xl text-white">
                      Пн
                    </th>
                    <th className="border-bg-neobis-bg-green bg-neobis-bg-green h-20 w-40 rounded-lg border border-white text-2xl text-white">
                      Вт
                    </th>
                    <th className="border-bg-neobis-bg-green bg-neobis-bg-green h-20 w-40 rounded-lg border border-white text-2xl text-white">
                      Ср
                    </th>
                    <th className="border-bg-neobis-bg-green bg-neobis-bg-green h-20 w-40 rounded-lg border border-white text-2xl text-white">
                      Чт
                    </th>
                    <th className="border-bg-neobis-bg-green bg-neobis-bg-green h-20 w-40 rounded-lg border border-white text-2xl text-white">
                      Пт
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="h-16 w-40 rounded-lg border">
                      09:30 - 12:00
                    </td>
                    <td className="h-16 w-40 rounded-lg border">Javascript1</td>
                    <td className="h-16 w-40 rounded-lg border" />
                    <td className="h-16 w-40 rounded-lg border" />
                    <td className="h-16 w-40 rounded-lg border" />
                    <td className="h-16 w-40 rounded-lg border" />
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td className="h-16 w-40 rounded-lg border">
                      12:30 - 14:30
                    </td>
                    <td className="h-16 w-40 rounded-lg border" />
                    <td className="h-16 w-40 rounded-lg border">Javascript2</td>
                    <td className="h-16 w-40 rounded-lg border" />
                    <td className="h-16 w-40 rounded-lg border">Javascript1</td>
                    <td className="h-16 w-40 rounded-lg border" />
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td className="h-16 w-40 rounded-lg border">
                      15:00 - 17:30
                    </td>
                    <td className="h-16 w-40 rounded-lg border" />
                    <td className="h-16 w-40 rounded-lg border" />
                    <td className="h-16 w-40 rounded-lg border">Javascript2</td>
                    <td className="h-16 w-40 rounded-lg border" />
                    <td className="h-16 w-40 rounded-lg border">Javascript2</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td className="h-16 w-40 rounded-lg border">
                      18:00 - 20:00
                    </td>
                    <td className="h-16 w-40 rounded-lg border" />
                    <td className="h-16 w-40 rounded-lg border" />
                    <td className="h-16 w-40 rounded-lg border" />
                    <td className="h-16 w-40 rounded-lg border" />
                    <td className="h-16 w-40 rounded-lg border">Javascript1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="r-5 absolute bottom-0 left-[-1px] h-0 w-0 rounded-bl-xl border border-b-[150px] border-r-[150px] border-[#FCFDFE] border border-b-violet-900 " />
      </div>
    </div>
  );
}
export default MentorsDetails;

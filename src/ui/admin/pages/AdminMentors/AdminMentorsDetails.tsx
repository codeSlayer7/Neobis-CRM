
import Edit from '../../../icons/Edit';
import photo from '../../../images/Photo.png';

function AdminMentorsDetails() {
  return (
    <div className="mx-10 h-auto w-full items-center justify-center">
      <button
        type="button"
        className="my-10 ml-[80%] inline-flex h-[43px] w-[212px] items-center justify-around rounded-lg border bg-[#E2E2E2] text-xl font-normal"
      >
        Редактировать
        <Edit />
      </button>
      <div className="relative mb-12 flex h-[797px] w-[1318px] rounded-xl border border-black bg-[#FCFDFE]">
        <div className="mt-12 ml-8">
          <img src={photo} alt="#" />
          <h3 className="mt-12 text-lg font-semibold">
            Преподаватель JavaScript
          </h3>
        </div>
        <div className="mt-12 ml-28 flex flex-wrap">
          <ul className="mr-24 pb-5">
            <li className="text-2xl font-semibold">Имя</li>
            <li className="text-xl font-normal">Жылдыз Маратовна</li>
          </ul>
          <ul className="mr-24 pb-5">
            <li className="text-2xl font-semibold">Номер телефона</li>
            <li className="text-xl font-normal">+996 554 555 312</li>
          </ul>
          <ul className=" pb-5">
            <li className="text-2xl font-semibold">Gmail</li>
            <li className="text-xl font-normal">zhyldyz.maratovna@gmail.com</li>
          </ul>
          <ul className="mr-24 pb-5">
            <li className="text-2xl font-semibold">Номер патента</li>
            <li className="text-xl font-normal">№421</li>
          </ul>
          <ul className="mr-24 pb-5">
            <li className="text-2xl font-semibold"> Срок патента</li>
            <li className="text-xl font-normal">23.01.2022 - 23.01.2024</li>
          </ul>
          <ul className="pb-5">
            <li className="text-2xl font-semibold">Обучение в группах</li>
            <li className="text-xl font-normal">JavaScript</li>
          </ul>
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
        <div className="r-5 absolute bottom-0 left-[-1px] h-0 w-0 rounded-bl-xl border border-b-[150px] border-r-[150px] border-[#FCFDFE] border-l-black border-b-[#4588C6]" />
      </div>
    </div>
  );
}
export default AdminMentorsDetails;

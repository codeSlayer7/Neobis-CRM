import { Link } from 'react-router-dom';
import DropDownAdminMentor from './DropDownAdminMentor';

function AdminMentorsCard(props: any) {
  return (
    <>
      {props.details.map((value: any, index: any) => (
        <div className="mr-[50px] h-[500px] " key={index}>
          <div className="mb-10 h-[351px] w-[323px] bg-white rounded-3xl border border-[#C7C7C7] shadow-md">
            <DropDownAdminMentor />

            <div className="mt-[-41px] flex w-full">
              <img src={value.img} alt="#" className="ml-[101px]" />
              <div>{value.logo}</div>
            </div>
            <div className="mt-2 flex w-full flex-col justify-center text-center">
              <h3 className="text-xl font-semibold">{value.name}</h3>
              <p className="text-base font-normal text-[#959595]">
                {value.gmail}
              </p>
            </div>
            <div className="mt-[19px] h-[127px] w-full rounded-b-3xl border bg-[#4588C6] text-center text-white">
              <p className=" mt-2 text-xl font-semibold">{value.mentor}</p>
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
    </>
  );
}
export default AdminMentorsCard;

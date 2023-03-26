import { Link } from 'react-router-dom';

function MentorsCard(props: any) {
  return (
    <>
      {props.details.map((value, index) => (
        <div className="mr-[50px]" key={index}>
          <div className="mb-10 h-[351px] w-[323px] rounded-3xl border border-[#C7C7C7] shadow-md">
            <div className="mt-6 flex w-full">
              <img src={value.img} alt="#" className="ml-[101px]" />
              <div>{value.logo}</div>
            </div>
            <div className="mt-2 flex w-full flex-col justify-center text-center">
              <h3 className="text-xl font-semibold">{value.name}</h3>
              <p className="text-base font-normal text-[#959595]">
                {value.gmail}
              </p>
            </div>
            <div className="bg-neobis-bg-violet mt-[19px] h-[127px] w-full rounded-b-3xl border text-center text-white">
              <p className=" mt-2 text-xl font-semibold">{value.mentor}</p>
              <Link to="/mentorsdetails">
                <button
                  type="button"
                  className="bg-neobis-bg-green mt-6 h-[42px] w-[279px] rounded-lg border border-white text-lg font-normal transition duration-150 hover:scale-95"
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
export default MentorsCard;

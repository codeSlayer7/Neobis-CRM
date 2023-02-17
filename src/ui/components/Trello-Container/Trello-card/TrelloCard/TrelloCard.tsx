// import { useState } from "react";
import Clock from '../../../../icons/clock.svg';
import Clock2 from '../../../../icons/clockBlack.svg';
// interface Props {
//   card?: {
//     name?: string;
//     time?: string;
//     specific?: string;
//     phoneNumber?: string;
//     status: boolean
//   };
// }

function TrelloCard({ card, status }: any) {
  //   const [violet, setViolet] = useState<boolean>(false);

  return (
    <div
      className={
        status
          ? 'bg-neobis-bg-violet my-2 h-[190px] w-[100%] rounded-3xl border-2 border-[#DADADA] '
          : 'my-2 h-[186px] w-[100%] rounded-3xl border-2 border-[#DADADA] bg-white'
      }
    >
      <div className="px-6 pt-4">
        <p
          className={
            status === true
              ? 'text-xl font-normal text-white'
              : 'text-xl font-normal text-black'
          }
        >
          {card.name}
        </p>

        <p className="flex pt-2 text-base font-normal">
          <img className="mr-3 " src={status ? Clock : Clock2} alt="clack" />{' '}
          {card.time}
        </p>
        <div className="mt-3 flex justify-around">
          <span className="bg-neobis-bg-card-text text-skin-text-darkViolet whitespace-nowrap rounded-lg px-2  py-[2px] text-base font-normal">
            {card.specific}
          </span>
          <span className="bg-neobis-bg-card-text text-skin-text-darkViolet ml-2 whitespace-nowrap rounded-lg py-[2px] px-2 text-base">
            {card.phoneNumber}
          </span>
        </div>
      </div>
      <div className="bg-neobis-bg-card-border border-t-[0.2px] mt-[18px]"> </div>

      <div className="flex justify-around pb-8 mt-2" >
        <button className="bg-neobis-bg-green rounded-lg px-2 py-[4px] text-base font-normal text-white">
          {' '}
          Зачислять
        </button>
        <button className="bg-neobis-bg-card-text text-skin-text-darkViolet rounded-lg px-2 py-[4px] text-base font-normal  ">
          {' '}
          Архивировать{' '}
        </button>
      </div>
    </div>
  );
}

export default TrelloCard;

// import { useState } from "react";
import { Draggable } from 'react-beautiful-dnd';
import { Link } from 'react-router-dom';
import useMediaQuery from '../../../../../hook/useMediaQuery';
import { ItemBack } from '../../../../../interfaces';
import { CardStatus } from '../../../../../interfaces/enum';
import Clock from '../../../../icons/clock.svg';
import Clock2 from '../../../../icons/clockBlack.svg';
import More from '../../../../icons/More';

interface Props {
  card: ItemBack;
  index: number;
}

function TrelloCard({ card, index }: Props) {
  //   const [violet, setViolet] = useState<boolean>(false);
  const matches = useMediaQuery('(min-width: 1280px)');

  const colorChange =
    card.status === CardStatus.WaitCall ? '#8874C8' : '#FFFFFF';
  return (
    <Draggable key={card.id} draggableId={card.id.toString()} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            ref={provided.innerRef}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...provided.draggableProps}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...provided.dragHandleProps}
            className="bg-neobis-bg-violet my-2 w-[100%] rounded-3xl border-2 border-[#DADADA] "
            style={{
              userSelect: 'none',
              minHeight: matches ? '190px' : '175px',
              width: '100%',
              borderRadius: '24px',
              backgroundColor: snapshot.isDragging ? '#DADADA' : colorChange,
              color: 'black',
              ...provided.draggableProps.style,
            }}
          >
            <div className="px-6 pt-4">
              <div className="flex justify-between">
                <p
                  className={
                    card.status === CardStatus.WaitCall
                      ? 'text-base font-normal text-white xl:text-lg  2xl:text-xl '
                      : 'text-base font-normal  text-black xl:text-lg  2xl:text-xl '
                  }
                >
                  {card.name}
                </p>
                <Link to="/infomodal">
                  <More />
                </Link>
              </div>
              <p
                className="flex pt-2 text-base font-normal"
                style={{
                  color:
                    card.status === CardStatus.WaitCall ? 'white' : 'black',
                }}
              >
                <div className="mr-2 h-6 w-6 ">
                  <img
                    className="h-full w-full"
                    src={card.status === CardStatus.WaitCall ? Clock : Clock2}
                    alt="clack"
                  />
                </div>
                {card.time}
              </p>
              <div className="mt-3 flex w-[100%] justify-around ">
                <span className="bg-neobis-bg-card-text text-skin-text-darkViolet whitespace-nowrap rounded-lg   px-1 xl:px-2   text-xs  font-normal xl:text-sm  2xl:text-lg ">
                  {card.specific}
                </span>
                <span className="bg-neobis-bg-card-text text-skin-text-darkViolet ml-2 whitespace-nowrap rounded-lg px-1 xl:px-2  text-xs  xl:text-sm   2xl:text-lg ">
                  {card.phoneNumber}
                </span>
              </div>
            </div>
            <div className="bg-neobis-bg-card-border mt-[18px] border-t-[0.2px]">
              {' '}
            </div>

            <div className="mt-2 flex justify-around px-2 ">
              <Link to="/enrollclient">
                <button
                  type="button"
                  className="bg-neobis-bg-green hover:easy-in rounded-lg px-4 py-[4px] text-xs font-normal text-white transition duration-150 hover:scale-110 xl:text-base  "
                >
                  Зачислять
                </button>
              </Link>
              <Link to="/archiveclient">
                <button
                  type="button"
                  className="bg-neobis-bg-card-text text-skin-text-darkViolet rounded-lg px-2 py-[4px] text-xs font-normal transition duration-150 hover:scale-110   hover:ease-in  xl:text-base"
                >
                  Архивировать
                </button>
              </Link>
            </div>
          </div>
        );
      }}
    </Draggable>
  );
}

export default TrelloCard;

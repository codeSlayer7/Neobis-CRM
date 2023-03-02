// import { useState } from "react";
import { Draggable } from 'react-beautiful-dnd';
import { Link } from 'react-router-dom';
import { ItemBack } from '../../../../../interfaces';
import { CardStatus } from '../../../../../interfaces/enum';
import Clock from '../../../../icons/clock.svg';
import Clock2 from '../../../../icons/clockBlack.svg';

interface Props {
  card: ItemBack;
  index: number;
}

function TrelloCard({ card, index }: Props) {
  //   const [violet, setViolet] = useState<boolean>(false);

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
            className="bg-neobis-bg-violet my-2 h-[190px] w-[100%] rounded-3xl border-2 border-[#DADADA] "
            style={{
              userSelect: 'none',
              height: '190px',
              width: '100%',
              borderRadius: '24px',
              backgroundColor: snapshot.isDragging ? '#DADADA' : colorChange,
              color: 'black',
              ...provided.draggableProps.style,
            }}
          >
            <div className="px-6 pt-4">
              <p
                className={
                  card.status === CardStatus.WaitCall
                    ? 'text-xl font-normal text-white'
                    : 'text-xl font-normal text-black'
                }
              >
                {card.name}
              </p>

              <p
                className="flex pt-2 text-base font-normal"
                style={{
                  color:
                    card.status === CardStatus.WaitCall ? 'white' : 'black',
                }}
              >
                <img
                  className="mr-3 "
                  src={card.status === CardStatus.WaitCall ? Clock : Clock2}
                  alt="clack"
                />{' '}
                {card.time}
              </p>
              <div className="mt-3 flex justify-center">
                <span className="bg-neobis-bg-card-text text-skin-text-darkViolet whitespace-nowrap rounded-lg px-2  py-[2px] text-base font-normal">
                  {card.specific}
                </span>
                <span className="bg-neobis-bg-card-text text-skin-text-darkViolet ml-2 whitespace-nowrap rounded-lg py-[2px] px-2 text-base">
                  {card.phoneNumber}
                </span>
              </div>
            </div>
            <div className="bg-neobis-bg-card-border mt-[18px] border-t-[0.2px]">
              {' '}
            </div>

            <div className="mt-2 flex justify-around px-2 pb-8">
              <Link to="/enrollclient">
                <button
                  type="button"
                  className="bg-neobis-bg-green hover:easy-in rounded-lg px-4 py-[4px] text-base font-normal text-white transition duration-150 hover:scale-110 "
                >
                  Зачислять
                </button>
              </Link>
              <Link to="/archiveclient">
                <button
                  type="button"
                  className="bg-neobis-bg-card-text text-skin-text-darkViolet rounded-lg px-2 py-[4px] text-base font-normal transition duration-150 hover:scale-110 hover:ease-in"
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

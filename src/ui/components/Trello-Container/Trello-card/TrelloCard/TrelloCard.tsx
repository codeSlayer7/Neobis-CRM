// import { useState } from "react";
import classNames from 'classnames';
import { Draggable } from 'react-beautiful-dnd';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../../../constants/global';
import useMediaQuery from '../../../../../hook/useMediaQuery';
import { ItemBack } from '../../../../../interfaces';
import { CardStatus, extraCardStatus } from '../../../../../interfaces/enum';
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
  const toggle = useAppSelector((trello) => trello.toggle.toggle);

  const colorChange =
    (card.status ? card.status : card.applicationStatus) ===
    extraCardStatus.WaitCall
      ? '#8874C8'
      : CardStatus.WaitCall === card.status
      ? '#8874C8'
      : '#FFFFFF';
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
              minHeight: matches ? '195px' : '175px',
              width: toggle ? '100%' : '100%',
              // ...(toggle ? { width: '16vw' } : { width: '19vw' }),
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
                    (card.status ? card.status : card.applicationStatus) ===
                    extraCardStatus.WaitCall
                      ? 'text-base font-normal text-white xl:text-lg  2xl:text-xl '
                      : CardStatus.WaitCall === card.status
                      ? 'text-base font-normal text-white xl:text-lg  2xl:text-xl '
                      : 'text-base font-normal  text-black xl:text-lg  2xl:text-xl '
                  }
                >
                  {card.firstName} {card.lastName}
                </p>
                <Link to="/infomodal">
                  <More />
                </Link>
              </div>
              <div
                className="flex pt-2 text-base font-normal"
                style={{
                  color:
                    (card.status ? card.status : card.applicationStatus) ===
                    extraCardStatus.WaitCall
                      ? 'white'
                      : CardStatus.WaitCall === card.status
                      ? 'white'
                      : 'black',
                }}
              >
                <div className="mr-2 h-6 w-6 ">
                  <img
                    className="h-full w-full"
                    src={
                      (card.status ? card.status : card.applicationStatus) ===
                      extraCardStatus.WaitCall
                        ? Clock
                        : CardStatus.WaitCall === card.status
                        ? Clock
                        : Clock2
                    }
                    alt="clack"
                  />
                </div>
                <p
                  style={{
                    color:
                      (card.status ? card.status : card.applicationStatus) ===
                      extraCardStatus.WaitCall
                        ? 'white'
                        : CardStatus.WaitCall === card.status
                        ? 'white'
                        : 'black',
                  }}
                >
                  {' '}
                  {card.creationDate}{' '}
                </p>
              </div>
              <div className="mt-3 flex w-[100%] justify-around ">
                <span
                  className={classNames(
                    `bg-neobis-bg-card-text text-skin-text-darkViolet whitespace-nowrap rounded-lg ${
                      toggle ? 'text-[0.7vw]' : 'text-[1vw]'
                    } px-2 font-normal `
                  )}
                >
                  {card.reason}
                </span>
                <span className="bg-neobis-bg-card-text text-skin-text-darkViolet ml-2 whitespace-nowrap rounded-lg font-normal px-2 ">
                  {card.phoneNumber}
                </span>
              </div>
            </div>
            <div className="bg-neobis-bg-card-border mt-[18px] border-t-[0.2px]">
              {' '}
            </div>

            <div className="mt-2 flex justify-around px-2 mx-2 md:mt-2">
              <Link to="/enrollclient">
                <button
                  type="button"
                  className="bg-neobis-bg-green hover:easy-in rounded-lg px-4 py-[4px] text-[1vw] font-normal text-white transition duration-150 hover:scale-110 "
                >
                  Зачислять
                </button>
              </Link>
              <Link to="/archiveclient">
                <button
                  type="button"
                  className="bg-neobis-bg-card-text text-skin-text-darkViolet rounded-lg ml-1 px-2 py-[4px] text-[1vw] font-normal transition duration-150 hover:scale-110   hover:ease-in "
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

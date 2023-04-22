import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import TrelloColumn from './Trello-card/TrelloColumn';
import TrelloCard from './Trello-card/TrelloCard/TrelloCard';
import { moveTask, sort } from '../../../redux/slices/todoSlice';
import { ColumnName, CardStatus } from '../../../interfaces/enum';
import PageTitle from './PageTitle';
import { useAppDispatch, useAppSelector } from '../../../constants/global';
import useMediaQuery from '../../../hook/useMediaQuery';
import HistoryModal from '../../pages/HistoryOperation/history/history-modal';
import HistoryTable from '../../pages/HistoryOperation/history/HistoryTable';
import { useEffect, useRef, useState } from 'react';
import axiosInteceptor from '../../../api/interceptor';
import {
  getAllAppThunk,
  getSortedThunk,
} from '../../../redux/service/applications/applicationAction';
import { changeStatusApplication } from '../../../redux/service/applications/applications';

function TrelloContainer() {
  const dispatch = useAppDispatch();
  const matches = useMediaQuery('(min-width: 1280px)');
  const columns = useAppSelector((trello) => trello.trello.columns);
  console.log(columns);
  
  const [Data, setData] = useState<any>(null);
  const willMount = useRef(true);
  const copyData = useRef(null);
  copyData.current = columns;

  useEffect(() => {
    dispatch(getSortedThunk());
    return () => {
      if (willMount.current) {
        console.log('odok', copyData);
      }

      willMount.current = false;
       changeStatusApplication(copyData.current);
    };
  }, []);

  const onDragEnd = (result: any): void => {
    const { source, destination } = result;
    if (!result.destination) return;

    if (source.droppableId === destination.droppableId) {
      dispatch(sort({ source, destination }));
      return;
    }
    const colStatus = columns[source.droppableId];
    const itemChange = colStatus.items.slice(source.index, 1);
    console.log('card Status', colStatus, 'col Change', itemChange);
    if (
      destination.droppableId === ColumnName.WaitCall &&
      source.draggableId !== ColumnName.WaitCall
    ) {
      const cardStatus = { name: CardStatus.WaitCall };

      dispatch(moveTask({ source, destination, cardStatus }));
    } else if (destination.droppableId === ColumnName.CallEnded) {
      const cardStatus = { name: CardStatus.CallEnded };
      dispatch(moveTask({ source, destination, cardStatus }));
    } else if (destination.droppableId === ColumnName.TrialLesson) {
      const cardStatus = { name: CardStatus.TrialLesson };
      dispatch(moveTask({ source, destination, cardStatus }));
    } else if (destination.droppableId === ColumnName.PassedTrialLesson) {
      const cardStatus = { name: CardStatus.PassedTrialLesson };
      dispatch(moveTask({ source, destination, cardStatus }));
    }
  };
  console.log('columns', columns);

  return (
    <div className="flex p-6 w-[100%] flex-col ">
      <PageTitle />
      <div className="flex justify-between ml-4 flex-wrap">
        <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
          {Object.entries(columns).map(([columnId, column]) => {
            return (
              <TrelloColumn
                key={columnId}
                columnTitle={column.name}
                count={column.items?.length}
              >
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        // eslint-disable-next-line react/jsx-props-no-spreading
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          background: snapshot.isDraggingOver
                            ? 'lightblue'
                            : '#F4F7FD',
                          minHeight: 753,
                          ...(!matches ? { width: 230 } : { width: '19vw' }),
                          // width: matches ? 250 : 220,
                          borderRadius: '24px',
                        }}
                      >
                        {column.items.map((item, index) => {
                          return (
                            <TrelloCard
                              card={item}
                              index={index}
                              key={item.id.toString()}
                            />
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </TrelloColumn>
            );
          })}
        </DragDropContext>
      </div>
    </div>
  );
}

export default TrelloContainer;

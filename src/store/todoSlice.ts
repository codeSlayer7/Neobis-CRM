import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ItemBack, Column, DragResult } from '../interfaces';
import { CardStatus } from '../interfaces/enum';

const itemsFromBackend: ItemBack[] = [
  {
    name: 'bakyt5 abykanov',
    time: '24 hours ago',
    specific: 'Frontend React',
    phoneNumber: '+996 550 51 80 40',
    status: CardStatus.WaitCall,
    id: 0.5980302055849753,
  },
  {
    name: 'bakyt4 abykanov',
    time: '24 hours ago',
    specific: 'Frontend React',
    phoneNumber: '+996 550 51 80 40',
    status: CardStatus.WaitCall,
    id: 0.31199698824253685,
  },
  {
    name: 'bakyt2 abykanov',
    time: '24 hours ago',
    specific: 'Frontend React',
    phoneNumber: '+996 550 51 80 40',
    status: CardStatus.WaitCall,
    id: 1.3010947237842845,
  },
  {
    name: 'bakyt1 abykansfov',
    time: '24 hours ago',
    specific: 'Frontend React',
    phoneNumber: '+996 550 51 80 40',
    status: CardStatus.WaitCall,
    id: 1.4348247561641614,
  },
];

const initialState: Column = {
  columns: {
    aa: {
      name: 'Ждет звонка',
      items: itemsFromBackend,
    },
    bb: {
      name: 'Звонок совершен',
      items: [],
    },
    cc: {
      name: 'Записан на проб.урок',
      items: [],
    },
    dd: {
      name: 'Посетил проб.урок',
      items: [],
    },
  },
};

const todoSlice = createSlice({
  name: 'trello',
  initialState,
  reducers: {
    // fetchMockData: (state, action) {
    //   console.log(action.payload);
    //   console.log(current(state));

    //   action.payload.itemsFromBackend.forEach((el: ItemBack): any => {
    //     if (el.status === CardStatus.WaitCall) {
    //       state.columns[ColumnName.WaitCall].items.push(el);
    //     } else if (el.status === CardStatus.PassedTrialLesson) {
    //       state.columns[ColumnName.PassedTrialLesson].items.push(el);
    //     } else if (el.status === CardStatus.TrialLesson) {
    //       state.columns[ColumnName.TrialLesson].items.push(el);
    //     } else {
    //       state.columns[ColumnName.CallEnded].items.push(el);
    //     }
    //   });
    // },
    moveTask(state, action: PayloadAction<DragResult>) {
      const { source, destination, cardStatus } = action.payload;

      if (source.droppableId && destination.droppableId && cardStatus) {
        const sourceColumn = state.columns[source.droppableId];
        const destColumn = state.columns[destination.droppableId];

        const sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];
        const [removed] = sourceItems.splice(source.index, 1);
        const removed1 = { ...removed, status: cardStatus.name };
        destItems.splice(destination.index, 0, removed1);

        return {
          ...state,
          columns: {
            ...state.columns,
            [source.droppableId]: {
              ...sourceColumn,
              items: sourceItems,
            },
            [destination.droppableId]: {
              ...destColumn,
              items: destItems,
            },
          },
        };
      }
      return state;
    },

    sort(state, action: PayloadAction<DragResult>) {
      const { source, destination } = action.payload;

      if (source && destination) {
        const column = state.columns[source.droppableId];
        const copiedItems = [...column.items];
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
        return {
          ...state,
          columns: {
            ...state.columns,
            [source.droppableId]: {
              ...column,
              items: copiedItems,
            },
          },
        };
      }
      return state;
    },
  },
});

export const { moveTask, sort } = todoSlice.actions;

export default todoSlice.reducer;

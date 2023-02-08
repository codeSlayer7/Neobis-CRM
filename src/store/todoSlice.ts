import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';

type ItemBack = {
  id: string;
  content: string;
};

const itemsFromBackend: ItemBack[] = [
  { id: 'dszfd111', content: 'First task' },
  { id: '22samfs2', content: 'Second task' },
  { id: '33ADSPOSAXJO3', content: 'Third task' },
  { id: '44FDPOPOKPO44', content: 'Fourth task' },
  { id: '55AIXDPDOKPAOKPOK55', content: 'Fifth task' },
];

type Column = {
  columns: {
    [key: string]: {
      name: string;
      items: ItemBack[] | [];
    };
  };
};

const initialState: any = {
  columns: {
    aa: {
      name: 'Requested',
      items: itemsFromBackend,
    },
    bb: {
      name: 'To do',
      items: [],
    },
    cc: {
      name: 'In Progress',
      items: [],
    },
    dd: {
      name: 'Done',
      items: [],
    },
  },
};

const todoSlice = createSlice({
  name: 'trello',
  initialState,
  reducers: {
    moveTask: (state, action: any): any => {
      console.log(current(state.columns));
      console.log(action);

      const { source, destination } = action.payload;
      console.log(source, destination);

      if (source.droppableId && destination.droppableId) {
        const sourceColumn = state.columns[source.droppableId];
        const destColumn = state.columns[destination.droppableId];
        console.log(current(destColumn));

        const sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);
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
    },
    sort: (state, action) => {
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
    },
  },
});

export const { moveTask, sort } = todoSlice.actions;

export default todoSlice.reducer;

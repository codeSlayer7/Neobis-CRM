import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ItemBack, Column, DragResult } from '../../interfaces';
import { CardStatus } from '../../interfaces/enum';
import { IApplication } from '../service/applications/applications';
import {
  getAllApplications,
  getAllAppThunk,
} from '../service/applications/applicationAction';

const itemsFromBackend: IApplication[] | [] = [];

const initialState: Column = {
  columns: {
    waitingForCall: {
      name: 'Ждет звонка',
      items: itemsFromBackend || [],
    },
    callReceived: {
      name: 'Звонок совершен',
      items: [],
    },
    attendedTrial: {
      name: 'Записан на проб.урок',
      items: [],
    },
    appliedForTrial: {
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
  extraReducers(builder) {
    builder.addCase(getAllAppThunk.pending, (state) => {
      // console.log('33');
      // state.loading = true;
    });
    builder.addCase(getAllAppThunk.fulfilled, (state, { payload }) => {
      console.log('4 TODOSLICE', payload);
      // state.loading = false;
      // state.accessToken = payload.authenticationResponse.jwtToken;
      // state.refreshToken = payload.authenticationResponse.refreshToken;
      // state.role = payload.role;
      // state.firstName = payload.firstName;
      // state.lastName = payload.lastName;
    });
    // builder.addCase(
    //   loginUserThunk.rejected,
    //   (state, { payload }: PayloadAction<any>) => {
    //     state.loading = false;
    //     state.error = payload;
    //   }
    // );
  },
});

export const { moveTask, sort } = todoSlice.actions;

export default todoSlice.reducer;

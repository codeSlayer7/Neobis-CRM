import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ItemBack, Column, DragResult } from '../../interfaces';
import { CardStatus } from '../../interfaces/enum';
import { IApplication } from '../service/applications/applications';
import {
  getSortedThunk,
  getAllAppThunk,
  postAppThunk,
} from '../service/applications/applicationAction';

const itemsFromBackend: IApplication[] | [] = [];

const initialState: Column = {
  loading: false,
  columns: {
    WAITING_FOR_CALL: {
      name: 'Ждет звонка',
      items: [],
    },
    CALL_RECEIVED: {
      name: 'Звонок совершен',
      items: [],
    },
    APPLIED_FOR_TRIAL: {
      name: 'Записан на проб.урок',
      items: [],
    },
    ATTENDED_TRIAL: {
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
      // const { appliedForTrial, attendedTrial, callReceived, waitingForCall } =
      //   payload;
      // console.log('get state', waitingForCall);

      console.log(payload);
      // state.loading = false;
      // state.accessToken = payload.authenticationResponse.jwtToken;
      // state.refreshToken = payload.authenticationResponse.refreshToken;
      // state.role = payload.role;
      // state.firstName = payload.firstName;
      // state.lastName = payload.lastName;
    });
    builder.addCase(getSortedThunk.fulfilled, (state, { payload }) => {
      const { appliedForTrial, attendedTrial, callReceived, waitingForCall } =
        payload;
      console.log('get state sorte', waitingForCall);
      state.columns.WAITING_FOR_CALL.items = waitingForCall;
      state.columns.CALL_RECEIVED.items = callReceived;
      state.columns.APPLIED_FOR_TRIAL.items = appliedForTrial;
      state.columns.ATTENDED_TRIAL.items = attendedTrial;
      // state.accessToken = payload.authenticationResponse.jwtToken;
      // state.refreshToken = payload.authenticationResponse.refreshToken;
      // state.role = payload.role;
      // state.firstName = payload.firstName;
      // state.lastName = payload.lastName;
    });
    builder.addCase(postAppThunk.fulfilled, (state, { payload }) => {
      state.loading = true;
    });
  },
});

export const { moveTask, sort } = todoSlice.actions;

export default todoSlice.reducer;

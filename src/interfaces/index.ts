import { IApplication } from '../redux/service/applications/applications';

export interface Column {
  loading: boolean;
  columns: {
    WAITING_FOR_CALL: {
      name: string;
      items: [];
    };
    CALL_RECEIVED: {
      name: string;
      items: [];
    };
    APPLIED_FOR_TRIAL: {
      name: string;
      items: [];
    };
    ATTENDED_TRIAL: {
      name: string;
      items: ItemBack[] | [];
    };
  };
}

export interface DragResult {
  cardStatus?: { name: string };
  destination: { droppableId: string; index: number };
  source: { index: number; droppableId: string };
}

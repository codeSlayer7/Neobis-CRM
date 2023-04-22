import { IApplication } from '../redux/service/applications/applications';

export interface ItemBack extends IApplication {}

export interface Column {
  loading: boolean;
  columns: {
    [key: string]: {
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

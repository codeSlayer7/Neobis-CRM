export interface ItemBack {
  name: string;
  time: string;
  specific: string;
  phoneNumber: string;
  status: string;
  id: number;
}

export interface Column {
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

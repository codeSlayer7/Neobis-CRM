import { DataGrid } from '@mui/x-data-grid';

export interface Columns {
  field: string;
  headerName: any;
  width: number;
  renderCell?: any;
}

interface Rows {
  id: number;
  group: string;
  number: string;
  teacher: string;
  date: string;
  cause: string;
}

export default function GroupTable() {
  const groupRows: Rows[] = [
    {
      id: 1,
      group: 'Product Manager',
      number: '10 студентов',
      teacher: 'Аскар Мусабеков',
      date: 'Октябрь 14',
      cause: 'Курс завершился ',
    },
    {
      id: 2,
      group: 'Java Script',
      number: '15 студентов',
      teacher: 'Аскар Мусабеков',
      date: 'Октябрь 14',
      cause: 'в дикрете в связи с рождение сына',
    },
    {
      id: 3,
      group: 'Java Script',
      number: '20 студентов',
      teacher: 'Аскар Мусабеков',
      date: 'Октябрь 14',
      cause: 'в дикрете в связи с рождение сына',
    },
    {
      id: 4,
      group: 'Java Script',
      number: '10 студентов',
      teacher: 'Аскар Мусабеков',
      date: 'Октябрь 14',
      cause: 'в дикрете в связи с рождение сына',
    },
    {
      id: 5,
      group: 'Java Script',
      number: '10 студентов',
      teacher: 'Аскар Мусабеков',
      date: 'Октябрь 14',
      cause: 'в дикрете в связи с рождение сына',
    },
    {
      id: 6,
      group: 'Java Script',
      number: '10 студентов',
      teacher: 'Аскар Мусабеков',
      date: 'Октябрь 14',
      cause: 'в дикрете в связи с рождение сына',
    },
  ];
  console.log(groupRows);

  const groupColumns: Columns[] = [
    {
      field: 'Ф.И.О',
      headerName: <div className="text-[16px] font-semibold">Направление</div>,
      width: 195,
    },
    {
      field: 'Email',
      headerName: (
        <div className="text-[16px] font-semibold">Количество обучаемых</div>
      ),
      width: 275,
    },
    {
      field: 'Телефон',
      headerName: (
        <div className="text-[16px] font-semibold">Преподаватель</div>
      ),
      width: 227,
    },
    {
      field: 'Группа',
      headerName: (
        <div className="text-[16px] font-semibold">Дата архивации</div>
      ),
      width: 212,
    },
    {
      field: 'Дата Заявки',
      headerName: (
        <div className="text-[16px] font-semibold">Причина архивации</div>
      ),
      width: 290,
    },
    {
      field: 'Дата Заявки',
      headerName: (
        <div className="text-[16px] font-semibold">Причина архивации</div>
      ),
      width: 290,
    },
  ];
  return (
    <DataGrid
      autoHeight
      className=" bg-white border rounded-lg shadow-lg w-[100%] hover:none"
      rows={groupRows}
      columns={groupColumns}
      getRowClassName={(params) => 'even:bg-[#F4F7FD]'}
    />
  );
}

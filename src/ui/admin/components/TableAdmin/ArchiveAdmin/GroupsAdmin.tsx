import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import axiosInteceptor from '../../../../../api/base/interceptor';
import ArchiveAction from '../../Actions/ArchiveAction';

interface Columns {
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

export default function GroupAdmin() {
  const [archiveApp, setArchiveApp] = useState(null);
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

  const groupColumns: Columns[] = [
    { field: 'id', headerName: '', width: 0 },
    {
      field: 'group',
      headerName: <div className="text-[16px] font-semibold">Направление</div>,
      width: 195,
    },
    {
      field: 'number',
      headerName: (
        <div className="text-[16px] font-semibold">Количество обучаемых</div>
      ),
      width: 230,
    },
    {
      field: 'teacher',
      headerName: (
        <div className="text-[16px] font-semibold">Преподаватель</div>
      ),
      width: 190,
    },
    {
      field: 'date',
      headerName: (
        <div className="text-[16px] font-semibold">Дата архивации</div>
      ),
      width: 190,
    },
    {
      field: 'cause',
      headerName: (
        <div className="text-[16px] font-semibold">Причина архивации</div>
      ),
      width: 330,
    },
    {
      field: 'actions',
      headerName: <div className="text-[16px] font-semibold">Действия</div>,
      width: 90,
      renderCell: (params: any) => <ArchiveAction {...params} />,
    },
  ];


  return (
    <DataGrid
      autoHeight
      className=" bg-white border rounded-lg shadow-lg w-[1300px] hover:none"
      rows={groupRows}
      columns={groupColumns}
      getRowClassName={(params) => 'even:bg-[#dee7f3]'}
    />
  );
}

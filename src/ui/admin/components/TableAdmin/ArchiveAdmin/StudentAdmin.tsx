import { DataGrid } from '@mui/x-data-grid';
import Actions from '../../Actions/Actions';

interface Columns {
  field: string;
  headerName: any;
  width: number;
  renderCell?: any;
}

export default function StudentTableAdmin() {
  const studentRows = [
    {
      id: 1,
      name: 'Жаныш Мамытов',
      email: 'zhanysh12@gmail.com',
      number: '+996 555 123 123',
      group: 'Python',
      date: 'Октябрь 14',
      cause: 'Курс завершился ',
    },
    {
      id: 2,
      name: 'Жаныш Мамытов',
      email: 'zhanysh12@gmail.com',
      number: '+996 555 123 123',
      group: 'Python',
      date: 'Октябрь 14',
      cause: 'По состоянию здоровью',
    },
    {
      id: 3,
      name: 'Мамытов Алтын',
      email: 'altynka12@gmail.com',
      number: '+996 555 123 123',
      group: 'IOS',
      date: 'Октябрь 14',
      cause: 'По состоянию здоровью',
    },
    {
      id: 4,
      name: 'Мамытов Алтын',
      email: 'altynkaa12347@gmail.com',
      number: '+996 555 123 123',
      group: 'Android',
      date: 'Октябрь 14',
      cause: 'По состоянию здоровью',
    },
  ];

  const studentColumns: Columns[] = [
    { field: 'id', headerName: '', width: 0 },
    {
      field: 'name',
      headerName: <div className="text-[16px] font-semibold">Ф.И.О.</div>,
      width: 219,
    },
    {
      field: 'email',
      headerName: <div className="text-[16px] font-semibold">Email</div>,
      width: 219,
    },
    {
      field: 'number',
      headerName: <div className="text-[16px] font-semibold">Телефон</div>,
      width: 180,
    },
    {
      field: 'group',
      headerName: <div className="text-[16px] font-semibold">Группа</div>,
      width: 140,
    },
    {
      field: 'date',
      headerName: (
        <div className="text-[16px] font-semibold">Дата архивации</div>
      ),
      width: 160,
    },
    {
      field: 'cause',
      headerName: (
        <div className="text-[16px] font-semibold">Причина архивации</div>
      ),
      width: 220,
    },
    {
      field: 'actions',
      headerName: <div className="text-[16px] font-semibold">Действия</div>,
      width: 100,
      renderCell: (params: any) => <Actions {...params} />,
    },
  ];

  return (
    <DataGrid
      autoHeight
      className=" bg-white border rounded-lg shadow-lg w-[1300px] hover:none"
      rows={studentRows}
      columns={studentColumns}
      getRowClassName={(params) => 'even:bg-[#dee7f3]'}
    />
  );
}

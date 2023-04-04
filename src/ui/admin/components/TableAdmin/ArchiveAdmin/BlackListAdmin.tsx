import { DataGrid } from '@mui/x-data-grid';
import Actions from '../../Actions/Actions';

interface Columns {
  field: string;
  headerName: any;
  width: number;
  renderCell?: any;
}

export default function BlackListAdmin() {
  const blackListRows = [
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
      name: 'Мария Никулина',
      email: 'mariionetwo@gmail.com',
      number: '+996 555 123 123',
      group: 'Java Script',
      date: 'Октябрь 14',
      cause: 'В течении урока ходит за едой',
    },
    {
      id: 4,
      name: 'Мария Никулина',
      email: 'mariionetwo@gmail.com',
      number: '+996 555 123 123',
      group: 'Java Script',
      date: 'Октябрь 14',
      cause: 'В течении урока ходит за едой',
    },
  ];

  const blackListColumns: Columns[] = [
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
      width: 200,
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
      width: 200,
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
      rows={blackListRows}
      columns={blackListColumns}
      getRowClassName={(params) => 'even:bg-[#dee7f3]'}
    />
  );
}

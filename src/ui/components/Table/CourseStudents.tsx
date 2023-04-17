import { DataGrid } from '@mui/x-data-grid';

interface Columns {
  field: string;
  headerName: any;
  width: number;
  renderCell?: any;
}

export default function CourseStudents() {
  const studentRows = [
    {
      id: 1,
      name: 'Жаныш Мамытов',
      status: 'Активен',
      number: '+996550141414',
      laptop: 'есть',
      email: 'qwerty@gmail.com',
    },
    {
      id: 2,
      name: 'Жаныш Мамытов',
      status: 'Активен',
      number: '+996 555 123 123',
      laptop: 'есть',
      email: 'qwerty@gmail.com',
    },
    {
      id: 3,
      name: 'Жаныш Мамытов',
      status: 'Активен',
      number: '+996 555 123 123',
      laptop: 'выдан ноутбук',
      email: 'qwerty@gmail.com',
    },
  ];

  const studentColumns: Columns[] = [
    { field: 'id', headerName: '', width: 0 },
    {
      field: 'name',
      headerName: <div className="text-[16px] font-semibold">Ф.И.О.</div>,
      width: 250,
    },
    {
      field: 'status',
      headerName: <div className="text-[16px] font-semibold">Статус</div>,
      width: 200,
    },
    {
      field: 'number',
      headerName: <div className="text-[16px] font-semibold">Телефон</div>,
      width: 250,
    },
    {
      field: 'laptop',
      headerName: (
        <div className="text-[16px] font-semibold">Наличие ноутбука</div>
      ),
      width: 250,
    },
    {
      field: 'email',
      headerName: <div className="text-[16px] font-semibold">Почта</div>,
      width: 250,
    },
  ];

  return (
    <DataGrid
      autoHeight
      className=" hover:none w-[1300px] rounded-lg border bg-white shadow-lg"
      rows={studentRows}
      columns={studentColumns}
      getRowClassName={(params) => 'even:bg-[#F4F7FD]'}
    />
  );
}

import { DataGrid } from "@mui/x-data-grid";

interface Columns {
    field: string;
    headerName: any;
    width: number;
    renderCell?: any;
  }

export default function TeacherTable () {

  const teacherRows = [
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
  ];

  const teacherColumns: Columns[]  = [
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
      headerName: (
        <div className="text-[16px] font-semibold">+996 555 123 123</div>
      ),
      width: 225,
    },
    {
      field: 'group',
      headerName: <div className="text-[16px] font-semibold">Группа</div>,
      width: 219,
    },
    {
      field: 'date',
      headerName: (
        <div className="text-[16px] font-semibold">Дата архивации</div>
      ),
      width: 170,
    },
    {
      field: 'cause',
      headerName: (
        <div className="text-[16px] font-semibold">Причина архивации</div>
      ),
      width: 200,
    },
  ];
    return(
        <DataGrid
        autoHeight
        className=" bg-white border rounded-lg shadow-lg w-[1300px] hover:none"
        rows={teacherRows}
        columns={teacherColumns}
        getRowClassName={(params) => 'even:bg-[#F4F7FD]'}
        />
    )
}
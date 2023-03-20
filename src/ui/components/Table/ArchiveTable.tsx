import { DataGrid } from '@mui/x-data-grid';

interface Colums {
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

// export default function ArchiveTable({buttonType}:Props) {
export default function ArchiveTable() {
  //////////////////////! TABLE GROUP
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

  const groupColumns: Colums[] = [
    { field: 'id', headerName: '', width: 0 },
    {
      field: 'group',
      headerName: <div className="text-[16px] font-semibold">Группа</div>,
      width: 195,
    },
    {
      field: 'number',
      headerName: (
        <div className="text-[16px] font-semibold">Количество обучаемых</div>
      ),
      width: 275,
    },
    {
      field: 'teacher',
      headerName: (
        <div className="text-[16px] font-semibold">Преподаватель</div>
      ),
      width: 227,
    },
    {
      field: 'date',
      headerName: (
        <div className="text-[16px] font-semibold">Дата архивации</div>
      ),
      width: 212,
    },
    {
      field: 'cause',
      headerName: (
        <div className="text-[16px] font-semibold">Причина архивации</div>
      ),
      width: 290,
    },
  ];

  //////////////////////// ! TEACHER TABLE

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

  const teacherColumns = [
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

  //////////////////!  USERS TABLE

  const usersRows = [
    {
      id: 1,
      name: 'Жаныш Мамытов',
      email: 'zhanysh12@gmail.com',
      number: '+996 555 123 123',
      post: 'Python',
      date: 'Октябрь 14',
      cause: 'Курс завершился ',
    },
    {
      id: 2,
      name: 'Жаныш Мамытов',
      email: 'zhanysh12@gmail.com',
      number: '+996 555 123 123',
      post: 'Python',
      date: 'Октябрь 14',
      cause: 'По состоянию здоровью',
    },
  ];

  const usersColumns = [
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
      field: 'post',
      headerName: (
        <div className="text-[16px] font-semibold">Office Manager</div>
      ),
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
      headerName: (
        <div className="text-[16px] font-semibold">Причина архивации</div>
      ),
      width: 200,
    },
  ];

  ////////////////////////! BLACK LIST

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
  ];

  const blackListColumns = [
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
      headerName: (
        <div className="text-[16px] font-semibold">Office Manager</div>
      ),
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
      headerName: (
        <div className="text-[16px] font-semibold">Причина архивации</div>
      ),
      width: 200,
    },
  ];

  return (
    <div>
      <DataGrid
        autoHeight
        className=" bg-white border rounded-lg shadow-lg w-[1300px] hover:none"
        rows={groupRows}
        columns={groupColumns}
        getRowClassName={(params) => 'even:bg-[#F4F7FD]'}
      />
    </div>
  );
}

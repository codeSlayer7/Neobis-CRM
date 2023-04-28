import { DataGrid } from '@mui/x-data-grid';
// import { useParams } from 'react-router-dom';
// import { useEffect} from 'react';
// import { useAppDispatch, useAppSelector } from '../../../constants/global';
// import { getCourseByIdThunk } from '../../../redux/service/courses/coursesAction';

interface Columns {
  field: string;
  headerName: any;
  width: number;
  renderCell?: any;
}

export default function ActiveStudents() {
  // const dispatch = useAppDispatch();
  // const { id } = useParams();

  // const { students } = useAppSelector((state) => state.courses);
  // useEffect(() => {
  //   dispatch(getCourseByIdThunk(id));
  // }, []);

  const rows = [
    {
      id: 1,
      name: 'JS1',
      numberOfStudents: '17/25',
      status: 'запущен',
      mentor: 'Адилет Масалиев',
      startTime: '20.04.2023',
      EndTime: '20.06.2023',
    },
    {
      id: 2,
      name: 'JS1',
      numberOfStudents: '17/25',
      status: 'запущен',
      mentor: 'Барсбек Айтбаев',
      startTime: '20.04.2023',
      EndTime: '20.06.2023',
    },
    {
      id: 3,
      name: 'JS1',
      numberOfStudents: '17/25',
      status: 'запущен',
      mentor: 'Келдибек Раатбеков',
      startTime: '20.04.2023',
      EndTime: '20.06.2023',
    },
    {
      id: 4,
      name: 'JS1',
      numberOfStudents: '17/25',
      status: 'запущен',
      mentor: 'Аяна Бердалиева',
      startTime: '20.04.2023',
      EndTime: '20.06.2023',
    },
    {
      id: 5,
      name: 'JS1',
      numberOfStudents: '17/25',
      status: 'запущен',
      mentor: 'Майрам Жуманалиева',
      startTime: '20.04.2023',
      EndTime: '20.06.2023',
    },
  ];
  const studentColumns: Columns[] = [
    { field: 'id', headerName: '', width: 0 },
    {
      field: 'name',
      headerName: (
        <div className="text-[16px] font-semibold">Название группы</div>
      ),
      width: 200,
    },
    {
      field: 'numberOfStudents',
      headerName: (
        <div className="text-[16px] font-semibold">Количество студентов</div>
      ),
      width: 200,
    },
    {
      field: 'status',
      headerName: <div className="text-[16px] font-semibold">Статус</div>,
      width: 200,
    },
    {
      field: 'mentor',
      headerName: <div className="text-[16px] font-semibold">Ментор</div>,
      width: 250,
    },
    {
      field: 'startTime',
      headerName: (
        <div className="text-[16px] font-semibold">Начало обучение</div>
      ),
      width: 200,
    },
    {
      field: 'EndTime',
      headerName: (
        <div className="text-[16px] font-semibold">Конец обучение</div>
      ),
      width: 200,
    },
  ];
  console.log(rows);

  return (
    <DataGrid
      autoHeight
      className=" hover:none w-[1300px] rounded-lg border bg-white shadow-lg"
      rows={rows}
      columns={studentColumns}
      getRowClassName={(params) => 'even:bg-[#F4F7FD]'}
    />
  );
}

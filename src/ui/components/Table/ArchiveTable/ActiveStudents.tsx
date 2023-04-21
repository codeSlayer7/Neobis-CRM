import { DataGrid } from '@mui/x-data-grid';
import { useParams } from 'react-router-dom';
// import { useEffect} from 'react';
// import { useAppDispatch, useAppSelector } from '../../../constants/global';
// import { getCourseByIdThunk } from '../../../redux/service/courses/coursesAction';

interface Columns {
  field: string;
  headerName: any;
  width: number;
  renderCell?: any;
}

export default function CourseStudents() {
//   const dispatch = useAppDispatch();
//   const { id } = useParams();

//   const { students } = useAppSelector((state) => state.courses);
//   useEffect(() => {
//     dispatch(getCourseByIdThunk(id));
//   }, []);

const rows : Rows[] =[
    {

    },
    {

    }
]

  const studentColumns: Columns[] = [
    { field: 'id', headerName: '', width: 0 },
    {
      field: 'firstName',
      headerName: <div className="text-[16px] font-semibold">Ф.И.О.</div>,
      width: 250,
    },
    {
      field: 'email',
      headerName: <div className="text-[16px] font-semibold">Почта</div>,
      width: 250,
    },
    {
      field: 'status',
      headerName: <div className="text-[16px] font-semibold">Статус</div>,
      width: 200,
    },
    {
      field: 'hasLaptop',
      headerName: (
        <div className="text-[16px] font-semibold">Наличие ноутбука</div>
      ),
      width: 250,
    },
    {
      field: 'phoneNumber',
      headerName: <div className="text-[16px] font-semibold">Телефон</div>,
      width: 250,
    },
  ];

  return (
    <DataGrid
      autoHeight
      className=" hover:none w-[1300px] rounded-lg border bg-white shadow-lg"
      rows={students}
      columns={studentColumns}
      getRowClassName={(params) => 'even:bg-[#F4F7FD]'}
    />
  );
}

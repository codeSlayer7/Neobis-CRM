import { DataGrid } from '@mui/x-data-grid';
import ArchiveAction from '../../Actions/ArchiveAction';
import { useAppDispatch, useAppSelector } from '../../../../../constants/global';
import { useEffect } from 'react';
import { getAllStudentsArchiveThunk } from '../../../../../redux/slices/archiveSlice';

interface Columns {
  field: string;
  headerName: any;
  width: number;
  renderCell?: any;
}

export default function StudentTableAdmin() {
  const dispatch = useAppDispatch()

  const archiveStudents = useAppSelector((state) => {
    return state.archive.students;
  }) 
  console.log("archiveStudents", archiveStudents);
  
  
  useEffect(() => {
    dispatch(getAllStudentsArchiveThunk())
  }, [dispatch])


  const studentColumns: Columns[] = [
    { field: 'id', headerName: '', width: 0 },
    {
      field: 'fullName',
      headerName: <div className="text-[16px] font-semibold">Ф.И.О.</div>,
      width: 209,
      renderCell: (params: any) => (
        <div>
          {params.row.firstName} {params.row.lastName}
        </div>
      )
    },
    {
      field: 'email',
      headerName: <div className="text-[16px] font-semibold">Email</div>,
      width: 210,
    },
    {
      field: 'phoneNumber',
      headerName: <div className="text-[16px] font-semibold">Телефон</div>,
      width: 180,
    },
    {
      field: 'group',
      headerName: <div className="text-[16px] font-semibold">Группа</div>,
      width: 140,
    },
    {
      field: 'dateArchive',
      headerName: (
        <div className="text-[16px] font-semibold">Дата архивации</div>
      ),
      width: 160,
    },
    {
      field: 'reasonArchive',
      headerName: (
        <div className="text-[16px] font-semibold">Причина архивации</div>
      ),
      width: 240,
    },
    {
      field: 'actions',
      headerName: <div className="text-[16px] font-semibold">Действия</div>,
      width: 150,
      renderCell: (params: any) => <ArchiveAction {...params} />,
    },
  ];

  return (
    <DataGrid
      autoHeight
      className=" bg-white border rounded-lg shadow-lg w-[1300px] hover:none"
      rows={archiveStudents}
      columns={studentColumns}
      getRowClassName={(params) => 'even:bg-[#dee7f3]'}
    />
  );
}

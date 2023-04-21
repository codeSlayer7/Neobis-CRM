import { DataGrid } from '@mui/x-data-grid';
import { useAppDispatch, useAppSelector } from '../../../../../constants/global';
import { useEffect } from 'react';
import { getAllMentorsArchiveThunk } from '../../../../../redux/slices/archiveSlice';
import ArchiveAction from '../../Actions/ArchiveAction';

interface Columns {
  field: string;
  headerName: any;
  width: number;
  renderCell?: any;
}

export default function MentorTableAdmin() {
  const dispatch = useAppDispatch()

  const mentors = useAppSelector((state) => {
    return state.archive.mentors;
  }) 
  console.log('mentors',mentors);
  
  
  useEffect(() => {
    dispatch(getAllMentorsArchiveThunk())
  }, [dispatch])



  const mentorColumns: Columns[] = [
    { field: 'id', headerName: '', width: 0 },
    {
      field: 'fullName',
      headerName: <div className="text-[16px] font-semibold">Ф.И.О.</div>,
      width: 210,
      renderCell: (params: any) => (
        <div>
          {params.row.firstName} {params.row.lastName}
        </div>
      )
    },
    {
      field: 'email',
      headerName: <div className="text-[16px] font-semibold">Email</div>,
      width: 219,
    },
    {
      field: 'course',
      headerName: <div className="text-[16px] font-semibold">Курс</div>,
      width: 170,
    },
    {
      field: 'dateArchive',
      headerName: (
        <div className="text-[16px] font-semibold">Дата архивации</div>
      ),
      width: 190,
    },
    {
      field: 'reasonArchive',
      headerName: (
        <div className="text-[16px] font-semibold">Причина архивации</div>
      ),
      width: 320,
    },
    {
        field: 'actions',
        headerName: <div className="text-[16px] font-semibold">Действия</div>,
        width: 100,
        renderCell: (params: any) => <ArchiveAction {...params} />,
      },
  ];

  return (
    <DataGrid
      autoHeight
      className=" bg-white border rounded-lg shadow-lg w-[1300px] hover:none"
      rows={mentors}
      columns={mentorColumns}
      getRowClassName={(params) => 'even:bg-[#dee7f3]'}
    />
  );
}

import { DataGrid } from '@mui/x-data-grid';
import { useAppDispatch, useAppSelector } from '../../../../../constants/global';
import { useEffect } from 'react';
import ArchiveAction from '../../Actions/ArchiveAction';
import { getAllUsersArchiveThunk } from '../../../../../redux/slices/archiveSlice';

interface Columns {
  field: string;
  headerName: any;
  width: number;
  renderCell?: any;
}

export default function UserTableAdmin() {
  const dispatch = useAppDispatch()

  const archiveUsers = useAppSelector((state) => {
    return state.archive.users
  })

  console.log("users", archiveUsers);
  

  useEffect(()=>{
    dispatch(getAllUsersArchiveThunk())
  }, [dispatch])


  const userColumns: Columns[] = [
    { field: 'id', headerName: '', width: 0 },
    {
      field: 'fullName',
      headerName: <div className="text-[16px] font-semibold">Ф.И.О.</div>,
      width: 209,
      renderCell: (params: any) => (
        <div>
          {params.row.firstName} {params.row.lastName}
        </div>
      ),
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
      field: 'archiveDate',
      headerName: (
        <div className="text-[16px] font-semibold">Дата архивации</div>
      ),
      width: 200,
    },
    {
      field: 'archiveReason',
      headerName: (
        <div className="text-[16px] font-semibold">Причина архивации</div>
      ),
      width: 330,
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
      rows={archiveUsers || []}
      columns={userColumns}
      getRowClassName={(params) => 'even:bg-[#dee7f3]'}
    />
  );
}

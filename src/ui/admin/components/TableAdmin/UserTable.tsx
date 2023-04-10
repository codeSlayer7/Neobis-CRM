import { DataGrid } from '@mui/x-data-grid';
import UserActions from '../../pages/Manager/UserActions';
import { useAppDispatch, useAppSelector } from '../../../../constants/global';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { getAllUserThunk } from '../../../../redux/slices/adminSlice';

interface Columns {
  field: string;
  headerName: any;
  width: number;
  renderCell?: any;
}

export default function UserTable() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const users = useAppSelector((state) => {
    return state.admin.users;
  });
  console.log('users', users);

  React.useEffect(() => {
    dispatch(getAllUserThunk());
  }, [dispatch]);

  const userRows = [
    {
      id: 1,
      name: 'Жаныш Мамытов',
      email: 'zh.mamytov@gmail.com',
      phoneNumber: '+996 555 123 123',
      lastVisit: '24.03.2023',
    },
    {
      id: 2,
      name: 'Жаныш Мамытов',
      email: 'zh.mamytov@gmail.com',
      phoneNumber: '+996 555 123 123',
      lastVisit: '24.03.2023',
    },
  ];

  const userColumns: Columns[] = [
    { field: 'id', headerName: '', width: 0 },
    {
      field: 'firstName',
      headerName: <div className="text-[16px] font-semibold">Ф.И.О</div>,
      width: 250,
    },

    {
      field: 'email',
      headerName: <div className="text-[16px] font-semibold">Почта</div>,
      width: 250,
    },
    {
      field: 'phoneNumber',
      headerName: (
        <div className="text-[16px] font-semibold">Номер телефона</div>
      ),
      width: 250,
    },
    {
      field: 'lastVisitTime',
      headerName: (
        <div className="text-[16px] font-semibold">Последний визит</div>
      ),
      width: 250,
    },

    {
      field: 'actions',
      headerName: <div className="text-[16px] font-semibold">Действия</div>,

      width: 150,
      renderCell: (params: any) => <UserActions {...params} />,
    },
  ];

  return (
    <DataGrid
      autoHeight
      className=" hover:none w-[1300px] rounded-lg border bg-white shadow-lg"
      rows={users}
      columns={userColumns}
      getRowClassName={(params) => 'even:bg-[#dee7f3]'}
    />
  );
}

import { DataGrid } from '@mui/x-data-grid';
import { useAppDispatch, useAppSelector } from '../../../../constants/global';
import React, { useState } from 'react';
import { getAllUserThunk } from '../../../../redux/slices/adminSlice';
import Actions from '../Actions/Actions';

interface Columns {
  field: string;
  headerName: any;
  width: number;
  renderCell?: any;
}

export default function UserTable() {
  const dispatch = useAppDispatch();

  const users = useAppSelector((state) => {
    return state.admin.users;
  });

  const renderCellDate = (params: any) => {
    return (
      <div>
        {params.row.lastVisitDate} {params.row.lastVisitTime}
      </div>
    );
  };
console.log("users", users);

  React.useEffect(() => {
    dispatch(getAllUserThunk());
  }, [dispatch]);

  const userColumns: Columns[] = [
    { field: 'id', headerName: '', width: 20 },
    {
      field: 'fullName',
      headerName: <div className="text-[16px] font-semibold">Ф.И.О</div>,
      width: 270,
      renderCell: (params: any) => ( <div> {params.row.firstName} {params.row.lastName}</div>)
    },
    {
      field: 'email',
      headerName: <div className="text-[16px] font-semibold">Почта</div>,
      width: 280,
    },
    {
      field: 'phoneNumber',
      headerName: (
        <div className="text-[16px] font-semibold">Номер телефона</div>
      ),
      width: 280,
    },
    {
      field: 'date',
      headerName: (
        <div className="text-[16px] font-semibold">Последний визит</div>
      ),
      width: 280,
      renderCell: renderCellDate,
    },

    {
      field: 'actions',
      headerName: <div className="text-[16px] font-semibold">Действия</div>,

      width: 120,
      renderCell: (params: any) => {
        return <Actions user={params.row} />;
      },
    },
  ];

  return (
    <DataGrid
      autoHeight
      className=" hover:none w-[1300px] rounded-lg border bg-white shadow-lg"
      rows={users || []}
      columns={userColumns}
      getRowClassName={(params) => 'even:bg-[#dee7f3]'}
    />
  );
}

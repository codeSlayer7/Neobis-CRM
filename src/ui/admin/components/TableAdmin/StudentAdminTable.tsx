import { DataGrid, GridRowClassNameParams } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import Actions from '../Actions/Actions';
import { useAppDispatch, useAppSelector } from '../../../../constants/global';
import { getAllStudentsThunk } from '../../../../redux/slices/studentSlice';

interface MyRows {
  id: number;
  name: string;
  status: string;
  number: string;
  email: string;
  group: string;
  payment: string;
  style?: React.CSSProperties;
}

interface MyColums {
  field: string;
  headerName: any;
  width: number;
  renderCell?: any;
}

const StudentAdminTable = () => {
  const dispatch = useAppDispatch();
  const isAdmin = true; 

  const students = useAppSelector((state) => {
    return state.student.students;
  });
  console.log('students', students );

    useEffect(() => {
    dispatch(getAllStudentsThunk());
  }, [dispatch]);


  const colors = (status: 'Неактивен' | 'Активен' | 'Заморожен') =>
    status === 'Активен'
      ? '#2CAE49'
      : status === 'Заморожен'
      ? '#2C77AE'
      : status === 'Неактивен'
      ? '#DF3939'
      : '';

  const columns: MyColums[] = [
    { field: 'id', headerName: '', width: 0 },
    {
      field: 'name',
      headerName: <div className="text-[16px] font-semibold">Имя студента</div>,
      width: 235,
    },
    {
      field: 'status',
      headerName: <div className="text-[16px] font-semibold">Статус</div>,
      width: 158,
      renderCell: (params: any) => {
        return (
          <div
            style={{
              background: colors(params.row.status),
              padding: '5px 11px',
              borderRadius: '12px',
              color: '#FFFFFF',
            }}
          >
            {params.row.status}
          </div>
        );
      },
    },
    {
      field: 'number',
      headerName: <div className="text-[16px] font-semibold">Телефон</div>,
      width: 180,
    },
    {
      field: 'email',
      headerName: <div className="text-[16px] font-semibold">Email</div>,
      width: 219,
    },
    {
      field: 'group',
      headerName: <div className="text-[16px] font-semibold">Группа</div>,
      width: 165,
    },
    {
      field: 'payment',
      headerName: <div className="text-[16px] font-semibold">Оплата</div>,
      width: 120,
    }
  ];
  if (isAdmin) {
    columns.push({
      field: 'actions',
      headerName: <div className="text-[16px] font-semibold">Действия</div>,
      width: 150,
      renderCell: (params: any) => <Actions {...params} />,
    });
  }

  return (
    <>
      <div>
        <DataGrid
          autoHeight
          className=" bg-white border rounded-lg shadow-lg"
          rows={students}
          columns={columns}
          getRowClassName={(params) => 'even:bg-[#dee7f3]'}
        />
      </div>
    </>
  );
};

export default StudentAdminTable;

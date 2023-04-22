import { DataGrid, GridRowClassNameParams } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../constants/global';
import { getAllStudentsThunk } from '../../../redux/slices/studentSlice';
import StudentActions from '../../admin/components/Actions/StudentActions';

interface MyColums {
  field: string;
  headerName: any;
  width: number;
  renderCell?: any;
}

const StudentTable = ({ searchValue, sortBy=()=> {} }: any) => {

  const students = useAppSelector((state) => {
    return state.student.students;
  });

  const { role } = useAppSelector((state) => {
    return state.user;
  });


  const colors = (status: 'Неактивный' | 'Активный' | 'Заморожен') =>
    status === 'Активный'
      ? '#2CAE49'
      : status === 'Заморожен'
      ? '#2C77AE'
      : status === 'Неактивный'
      ? '#DF3939'
      : '';

  const renderCell = (params: any) => (
    <div>
      {params.row.groups.map((value: any, index: any) => (
        <div key={index}>{value.name}</div>
      ))}
    </div>
  );

  const columns: MyColums[] = [
    { field: 'id', headerName: '', width: 0 },
    {
      field: 'fullName',
      headerName: <div onClick={sortBy('firstName')} className="text-[16px] font-semibold">Фио студента</div>,
      width: 215,
      renderCell: (params: any) => (
        <div>
          {params.row.firstName} {params.row.lastName}
        </div>
      ),
    },
    {
      field: 'status',
      headerName: <div onClick={sortBy('status')} className="text-[16px] font-semibold">Статус</div>,
      width: 150,
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
      field: 'phoneNumber',
      headerName: <div onClick={sortBy('phoneNumber')} className="text-[16px] font-semibold">Телефон</div>,
      width: 170,
    },
    {
      field: 'email',
      headerName: <div onClick={sortBy('email')} className="text-[16px] font-semibold">Почта</div>,
      width: 195,
    },
    {
      field: 'gender',
      headerName: <div onClick={sortBy('gender')} className="text-[16px] font-semibold">Пол</div>,
      width: 100,
    },
    {
      field: 'groups',
      headerName: <div onClick={sortBy('groups')} className="text-[16px] font-semibold">Группа</div>,
      width: 140,
      renderCell: renderCell,
    },
    {
      field: 'totalPaymentPercentage',
      headerName: <div onClick={sortBy('totalPaymentPercentage')} className="text-[16px] font-semibold">Оплата</div>,
      width: 110,
    },
  ];

  if (role) {
    role === 'ROLE_ADMIN' &&
      columns.push({
        field: 'actions',
        headerName: <div className="text-[16px] font-semibold">Действия</div>,
        width: 120,
        renderCell: (params: any) => <StudentActions student={params.row} />,
      });
  }

  // const filteredStudents = students.filter(students => students.includes(searchValue))

  return (
    <>
      <div>
        {/* {filteredStudents.map(students => ( */}
        <DataGrid
          autoHeight
          className=" bg-white border rounded-lg shadow-lg"
          rows={students}
          columns={columns}
          getRowClassName={(params) => 'even:bg-[#dee7f3]'}
        />
        {/* ))} */}
      </div>
    </>
  );
};

export default StudentTable;
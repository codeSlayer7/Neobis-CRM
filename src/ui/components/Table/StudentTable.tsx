import { DataGrid, GridRowClassNameParams } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../constants/global';
import { getAllStudentsThunk } from '../../../redux/slices/studentSlice';
import StudentActions from '../../admin/components/Actions/StudentActions';
import { StudentData } from '../../../redux/types/adminTypes';
import { Pagination } from '@mui/material';
import { paginateData } from '../../admin/pages/AdminStudents/AdminStudents';

interface MyColums {
  field: string;
  headerName: any;
  width: number;
  renderCell?: any;
}
interface Props {
  sortBy: any;
  students: {}[];
}
const StudentTable = ({ sortBy, students }: Props) => {
  const [page, setPage] = useState(1)
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

  // const renderCell = (params: any) => (
  //   <div>
  //     {params.row.groups.map((value: any, index: any) => (
  //       <div key={index}>{value.name}</div>
  //     ))}
  //   </div>
  // );

  const columns: MyColums[] = [
    { field: 'id', headerName: '', width: 0 },
    {
      field: 'fullName',
      headerName: (
        <div
          onClick={sortBy('firstName')}
          className="text-[16px] font-semibold"
        >
          Фио студента
        </div>
      ),
      width: 215,
      renderCell: (params: any) => (
        <div>
          {params.row.firstName} {params.row.lastName}
        </div>
      ),
    },
    {
      field: 'status',
      headerName: (
        <div onClick={sortBy('status')} className="text-[16px] font-semibold">
          Статус
        </div>
      ),
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
      headerName: (
        <div
          onClick={sortBy('phoneNumber')}
          className="text-[16px] font-semibold"
        >
          Телефон
        </div>
      ),
      width: 170,
    },
    {
      field: 'email',
      headerName: (
        <div onClick={sortBy('email')} className="text-[16px] font-semibold">
          Почта
        </div>
      ),
      width: 195,
    },
    {
      field: 'gender',
      headerName: (
        <div onClick={sortBy('gender')} className="text-[16px] font-semibold">
          Пол
        </div>
      ),
      width: 100,
    },
    {
      field: 'groups',
      headerName: (
        <div onClick={sortBy('groups')} className="text-[16px] font-semibold">
          Группа
        </div>
      ),
      width: 140,
      // renderCell: renderCell,
    },
    {
      field: 'totalPaymentPercentage',
      headerName: (
        <div
          onClick={sortBy('totalPaymentPercentage')}
          className="text-[16px] font-semibold"
        >
          Оплата
        </div>
      ),
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
        <DataGrid
          autoHeight
          className=" bg-white border rounded-lg shadow-lg"
          rows={paginateData<Record<string, any>>({data: students, page: page, pageSize: 10})}
          columns={columns}
          getRowClassName={(params) => 'even:bg-[#dee7f3]'}
          hideFooterPagination
        />
        <Pagination
          sx={{ marginTop: '20px', marginBottom: '20px' }}
          count={Math.ceil(students?.length / 10)}
          page={page}
          onChange={(_, page) => setPage(page)}
          color="secondary"
          size="medium"
        />
      </div>
    </>
  );
};

export default StudentTable;


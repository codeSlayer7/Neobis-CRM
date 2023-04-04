import { DataGrid, GridRowClassNameParams } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import Actions from '../Actions/Actions';

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

const StudentTableAdmin = () => {
  const rows: MyRows[] = [
    {
      id: 1,
      name: 'ХАБИБЧИК МАГИБЧИК',
      status: 'Заморожен',
      number: '+996 555 123 123',
      email: 'khabibchik@gmail.com',
      group: 'Product Manager',
      payment: '50 %',
    },
    {
      id: 2,
      name: 'ХАБИБЧИК МАГИБЧИК',
      status: 'Активен',
      number: '+996 555 123 123',
      email: 'khabibchik@gmail.com',
      group: 'Python',
      payment: '50 %',
      style: {},
    },
    {
      id: 3,
      name: 'ХАБИБЧИК МАГИБЧИК',
      status: 'Неактивен',
      number: '+996 555 123 123',
      email: 'khabibchik@gmail.com',
      group: 'Python',
      payment: '50 %',
    },
    {
      id: 4,
      name: 'ХАБИБЧИК МАГИБЧИК',
      status: 'Заморожен',
      number: '+996 555 123 123',
      email: 'khabibchik@gmail.com',
      group: 'Python',
      payment: '50 %',
    },
    {
      id: 5,
      name: 'ХАБИБЧИК МАГИБЧИК',
      status: 'Неактивен',
      number: '+996 555 123 123',
      email: 'khabibchik@gmail.com',
      group: 'Python',
      payment: '50 %',
    },
    {
      id: 6,
      name: 'ХАБИБЧИК МАГИБЧИК',
      status: 'Активен',
      number: '+996 555 123 123',
      email: 'khabibchik@gmail.com',
      group: 'Python',
      payment: '50 %',
    },
    {
      id: 7,
      name: 'ХАБИБЧИК МАГИБЧИК',
      status: 'Заморожен',
      number: '+996 555 123 123',
      email: 'khabibchik@gmail.com',
      group: 'Python',
      payment: '50 %',
    },
    {
      id: 8,
      name: 'ХАБИБЧИК МАГИБЧИК',
      status: 'Активен',
      number: '+996 555 123 123',
      email: 'khabibchik@gmail.com',
      group: 'Python',
      payment: '50 %',
    },
    {
      id: 9,
      name: 'ХАБИБЧИК МАГИБЧИК',
      status: 'Неактивен',
      number: '+996 555 123 123',
      email: 'khabibchik@gmail.com',
      group: 'Python',
      payment: '50 %',
    },
    {
      id: 10,
      name: 'ХАБИБЧИК МАГИБЧИК',
      status: 'Заморожен',
      number: '+996 555 123 123',
      email: 'khabibchik@gmail.com',
      group: 'Product Manager',
      payment: '50 %',
    },
  ];

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
      width: 255,
    },
    {
      field: 'status',
      headerName: <div className="text-[16px] font-semibold">Статус</div>,
      width: 148,
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
      width: 155,
    },
    {
      field: 'payment',
      headerName: <div className="text-[16px] font-semibold">Оплата</div>,
      width: 110,
    },
    {
        field: 'actions',
        headerName: <div className="text-[16px] font-semibold">Действия</div>,
  
        width: 120,
        renderCell: (params: any) => <Actions {...params} />,
      },
  ];

  return (
    <>
      <div>
        <DataGrid
          autoHeight
          className=" bg-white border rounded-lg shadow-lg"
          rows={rows}
          columns={columns}
          getRowClassName={(params) => 'even:bg-[#dee7f3]'}
        />
      </div>
    </>
  );
};

export default StudentTableAdmin;

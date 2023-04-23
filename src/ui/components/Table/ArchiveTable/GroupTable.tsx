import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import axiosInteceptor from '../../../../api/base/interceptor';

export default function GroupTable() {
  const [data, setData] = useState([]);
  useEffect(
    axiosInteceptor
      .get('http://68.183.88.191:8080/api/v1/applications?is_archived=true')
      .then((data) => setData(data))
  );

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ fontWeight: 'bold' }}>
          <TableRow>
            {[' Ф.И.О', 'Email', 'Телефон', 'Группа', 'Дата заявки', ''].map(
              (column) => (
                <TableCell
                  key={column}
                  sx={{
                    fontWeight: '600',
                    fontSize: '18px',
                    fontStyle: 'normal',
                    lineHeight: '27px',
                  }}
                  align="left"
                >
                  {column}
                </TableCell>
              )
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.data.map((row, index) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              style={
                index % 2 ? { background: '#F4F5F6' } : { background: 'white' }
              }
            >
              <TableCell component="th" scope="row">
                {row.firstName} {row.lastName}
              </TableCell>

              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.phoneNumber}</TableCell>
              <TableCell align="left">{row.reason}</TableCell>
              <TableCell align="left">{row.creationDate}</TableCell>
              <TableCell align="left">
                {console.log(row)}
                {!row.isArchived ? (
                  <IconButton size="large" onClick={() => archive(row.id)}>
                    <BsArchive size={25} />
                  </IconButton>
                ) : (
                  <IconButton onClick={() => unArchive(row.id)}>
                    <FaBoxOpen size={30} />
                  </IconButton>
                )}

                <IconButton style={{ marginLeft: '15px' }}>
                  <TbEdit size={30} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Columns } from '../../../components/Table/ArchiveTable/GroupTable';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { BsArchive } from 'react-icons/bs';
import { TbEdit } from 'react-icons/tb';
import { IconButton } from '@mui/material';
import { AiOutlineDelete } from 'react-icons/ai';
import { FaBoxOpen } from 'react-icons/fa';
import axiosInteceptor from '../../../../api/base/interceptor';
import { useDispatch } from 'react-redux';
import { useAppDispatch } from '../../../../constants/global';
import { getSortedApplication } from '../../../../redux/service/applications/applications';
import { getSortedThunk } from '../../../../redux/service/applications/applicationAction';

function AdminTableApp({ groupRows }: any) {
  const dispatch = useAppDispatch();
  const archive = (id) => {
    axiosInteceptor
      .put(`http://68.183.88.191:8080/api/v1/applications/archive?id=${id}`, {
        reason: 'не отвечает на уроках ',
      })
      .then((res) => console.log(res, 'success'));
    dispatch(getSortedThunk());
  };

  const unArchive = (id) => {
    axiosInteceptor
      .put(`http://68.183.88.191:8080/api/v1/applications/unarchive?id=${id}`)
      .then((res) => console.log(res, 'success'));
    dispatch(getSortedThunk());
  };
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
          {groupRows.items.map((row, index) => (
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

export default AdminTableApp;

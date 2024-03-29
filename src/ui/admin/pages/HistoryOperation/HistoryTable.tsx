import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Avatar, Typography, Box, Pagination } from '@mui/material';
import { usePagination } from '../../../../hook/use-pagination';
import data from './HIstoryData.json';
import HistoryHeader from '../../components/SidebarAdmin/history-header';
import HistoryModal from './history-modal';
import axiosInteceptor from '../../../../api/base/interceptor';
// import { getOperations } from '../../../../api/adminApi';

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

export default function HistoryTable() {
  const [isInitialized, setIsInitialized] = useState(false);
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    axiosInteceptor
      .get('http://68.183.88.191:8080/api/v1/operations')
      .then((res) => console.log(res, 'history'))
      .catch((err) => console.log(err));
  }, []);
  const {
    // isPaginating,
    currentPage,
    setCurrentPage,
    pageItems,
    setItemList,
    totalPages,
  } = usePagination([]);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  if (!isInitialized) {
    setItemList(data);
    setIsInitialized(true);
  }

  useEffect(() => {
    axiosInteceptor.get('api/v1/operations').then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <>
      {/* <HistoryHeader /> */}
      <Box
        sx={{
          width: '100%',
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
        }}
      >
        <Box sx={{ width: '90%',margin:"0 auto", display: 'table', tableLayout: 'fixed' }}>
          <TableContainer
            component={Paper}
            sx={{
              border: 2,
              borderColor: '#C7C7C7',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              fontWeight: '700',
            }}
          >
            <Table aria-label="simple table">
              <TableHead>
                <TableRow sx={{ borderBottom: 3, borderColor: '#C7C7C7' }}>
                  <TableCell>
                    <Typography variant="h6" fontWeight={600}>
                      Ф.И.О
                    </Typography>{' '}
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6" fontWeight={600}>
                      Время
                    </Typography>{' '}
                  </TableCell>
                  <TableCell sx={{ width: '200px' }}>
                    <Typography variant="h6" fontWeight={600}>
                      Тип операций
                    </Typography>{' '}
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6" fontWeight={600}>
                      Субьект
                    </Typography>{' '}
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6" fontWeight={600}>
                      Действие
                    </Typography>{' '}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {pageItems.map((row) => (
                  <TableRow
                    hover
                    key={row.id}
                    onClick={() => {
                      setShow(!show);
                      setModalData(row);
                    }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      style={{
                        borderBottom: 'none',
                        fontSize: '20px',
                        fontWeight: 400,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        {/* <Avatar
                          src={row.img}
                          sx={{
                            marginRight: '15px',
                            width: '40px',
                            height: '40px',
                          }}
                        /> */}
                        {row.first_name} {row.last_name}
                      </Box>
                    </TableCell>
                    <TableCell
                      style={{
                        borderBottom: 'none',
                        fontSize: '20px',
                        fontWeight: 400,
                        whiteSpace: 'nowrap',
                      }}
                      width={100}
                    >
                      {row.time}{' '}
                    </TableCell>
                    <TableCell
                      style={{
                        borderBottom: 'none',
                        fontSize: '20px',
                        fontWeight: 400,
                      }}
                    >
                      {row.action.substring(0, 15)}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: 'blue',
                        borderBottom: 'none',
                        fontSize: '20px',
                        fontWeight: 400,
                      }}
                    >
                      @{row.email}
                    </TableCell>
                    <TableCell
                      style={{
                        borderBottom: 'none',
                        fontSize: '20px',
                        fontWeight: 400,
                      }}
                    >
                      {row.type_operatin.substring(0, 15)}
                    </TableCell>
                    <HistoryModal show={show} manager={modalData} />
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            {/* </div> */}
          </TableContainer>
        </Box>
        <Pagination
          sx={{ marginTop: '20px' }}
          count={totalPages}
          page={currentPage}
          onChange={handleChange}
          color="secondary"
          size="medium"
        />
      </Box>
    </>
  );
}

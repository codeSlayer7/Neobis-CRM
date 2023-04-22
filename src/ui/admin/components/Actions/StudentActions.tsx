import { FiEdit } from 'react-icons/fi';
import { MdOutlineSaveAlt, MdPayment } from 'react-icons/md';
import { useState } from 'react';
import ArchiveClient from '../../../components/Modals/ArchiveClient';
import Modal from '../Modals/Modal';
import { UpdateStudentForm } from '../../pages/AdminStudents/UpdateStudentForm';
import { PaymentForm } from '../../pages/AdminStudents/PaymentForm';

interface Props{
student: any
}
const StudentActions = ({student}: Props)=> {
  
  const [openModalArchive, setOpenModalArchive] = useState(false);
  const [openModalEditStudent, setOpenModalEditStudent] = useState(false);
  const [openModalPayment, setOpenModalPayment] = useState(false);

  const handleOpenModalEditStudent = () => {
    setOpenModalEditStudent(true)
  }

  const handleCloseModalEditStudent = () => {
    setOpenModalEditStudent(false)
  }

  const handleSaveAltClick = () => {
    setOpenModalArchive(true);
  };

  const handleClose = () => {
    setOpenModalArchive(false);
  };

  const handleOpenModalPayment = () => {
    setOpenModalPayment(true)
  }

  const handleCloseModalPayment = () => {
    setOpenModalPayment(false)
  }


  return (
    <div className="flex justify-around">
      {/* ------------ARCHIVE----------------- */}
        <MdOutlineSaveAlt
          className="mr-2  text-3xl  font-bold text-slate-400 hover:text-[#4588C6]"
          onClick={handleSaveAltClick}
        />
        <Modal title="Внимание" open={openModalArchive} onClose={handleClose}>
        <ArchiveClient student={student} />
      </Modal>

{/* -------------UPDATE-------------------- */}
<FiEdit className="text-2xl  mr-2 mt-[4px] text-slate-400 hover:text-[#4588C6]" onClick={handleOpenModalEditStudent} />
      <Modal title="Изменение студента" open={openModalEditStudent} onClose={handleCloseModalEditStudent}>
        <UpdateStudentForm onClose={handleCloseModalEditStudent} student={student}/>
      </Modal>

      {/* ------PAYMENT--------------- */}
        <MdPayment className="text-[30px] mt-[2px] text-slate-400 hover:text-[#4588C6]" onClick={handleOpenModalPayment}/>
        <Modal title="Добавление оплаты" open={openModalPayment} onClose={handleCloseModalPayment}>
          <PaymentForm onClose={handleCloseModalPayment} student={student} />
        </Modal>
    </div>
  );
}
export default StudentActions;

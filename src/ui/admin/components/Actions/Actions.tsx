import { FiEdit } from 'react-icons/fi';
import { MdOutlineSaveAlt, MdPayment } from 'react-icons/md';
import { useState } from 'react';
import ArchiveClient from '../../../components/Modals/ArchiveClient';
import Modal from '../Modals/Modal';
import UpdateManagerForm from '../../pages/Manager/UpdateManagerForm';
import { TbArchive } from 'react-icons/tb';

interface Props{
user: any
}
const  Actions:React.FC<Props> = ({user})=> {
  
  const [openModalArchive, setOpenModalArchive] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);

  const handleOpenModalEdit = () => {
    setOpenModalEdit(true)
  }

  const handleCloseModalEdit = () => {
    setOpenModalEdit(false)
  }

  const handleSaveAltClick = () => {
    setOpenModalArchive(true);
  };

  const handleClose = () => {
    setOpenModalArchive(false);
  };


  return (
    <div className="flex justify-around">
      {/* ------------ARCHIVE----------------- */}
        <TbArchive
          className=" ml-2 mr-2  text-3xl  text-slate-400 hover:text-[#4588C6]"
          onClick={handleSaveAltClick}
        />
        <Modal title="Внимание" open={openModalArchive} onClose={handleClose}>
        <ArchiveClient user={user} />
      </Modal>

{/* -------------UPDATE-------------------- */}
<FiEdit className="text-2xl  mr-2 mt-[2px] text-slate-400 hover:text-[#4588C6]" onClick={handleOpenModalEdit} />
      <Modal title="Изменение менеджера" open={openModalEdit} onClose={handleCloseModalEdit}>
        <UpdateManagerForm onClose={handleCloseModalEdit} user={user}/>
      </Modal>
    </div>
  );
}
export default Actions;

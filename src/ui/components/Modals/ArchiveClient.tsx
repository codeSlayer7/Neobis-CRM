import { Link, useNavigate } from 'react-router-dom';
import { archiveStudent } from '../../../api/studentApi';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import Modal from '../../admin/components/Modals/Modal';
import RejectionReason from './RejectionReason';

function ArchiveClient({student}: any ) {
  const navigate = useNavigate();
  const [openModalReason, setOpenModalReason] = useState(false);
  

  const handleClose = () => {
    setOpenModalReason(false);
  };

  const handleOpen = () => {
    setOpenModalReason(true);
  }

  return (
    <div className="flex flex-col items-center justify-center ">
        <p className="mt-[47px] text-center text-xl font-semibold">
    Что вы хотите сделать с этими данными?      
        </p>
        <div className="mt-12 ml-5 flex mb-[40px]">
            <button
              type="submit"
              onClick={handleOpen}
              className="hover:easy-in p-[10px] rounded-lg border bg-red-500 text-white transition duration-150 hover:scale-110"
            >
              Архивировать
            </button>

          {openModalReason && (
        <div className="bg-[rgba(0, 0, 0, 0.5)] z-999" onClick={handleClose} />
      )}
      {createPortal(
        <Modal title="Внимание" open={openModalReason} onClose={handleClose}>
          <RejectionReason onSuccess={handleClose} id={student?.id}/>
      </Modal>, document.body
      )}
          <button
            type="submit"
            className="hover:easy-in ml-5 p-[10px] rounded-lg border bg-gray-400 text-white transition duration-150 hover:scale-110"
            onClick={() => navigate(-1)}
          >
            Добавить в ЧС
          </button>
        </div>
      </div>
  );
}

export default ArchiveClient;

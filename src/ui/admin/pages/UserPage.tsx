import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import UserTable from '../../components/Table/UserTable';
import CreateUser from '../components/Modals/CreateUser';

function UserPage() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="relative h-[100vh] w-full">
      <button
        type="button"
        className="bg-neobis-bg-green my-20 ml-[80%] h-12 w-56 rounded-lg border text-lg text-white transition duration-150 hover:scale-95"
        onClick={handleOpen}
      >
        Создать менеджера
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="absolute top-[-10%] left-[30%] right-32">
          <CreateUser />
        </div>
      </Modal>

      <div className="ml-[36px]">
        <UserTable />
      </div>
    </div>
  );
}
export default UserPage;

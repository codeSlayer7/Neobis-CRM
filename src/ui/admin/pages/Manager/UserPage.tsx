import { useState } from 'react';
import UserTable from '../../components/TableAdmin/UserTable';
import Modal from '../../components/Modals/Modal';
import ManagerForm from './ManagerForm';

function UserPage() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="relative h-[100vh] w-full">
      {open && <div className="background-overlay" onClick={handleClose} />}
      <button
        type="button"
        className="z-10 bg-[#4588C6] my-10 ml-[82%] h-12 w-56 rounded-lg border text-lg text-white transition duration-150 hover:scale-95"
        onClick={handleOpen}
      >
        Добавить менеджера
      </button>

      <Modal title="Создать менеджера" open={open}  onClose={handleClose}>
        <ManagerForm onClose={handleClose} />
      </Modal>

      <div className="ml-[36px] pb-[20px]">
        <UserTable />
      </div>
    </div>
  );
}
export default UserPage;

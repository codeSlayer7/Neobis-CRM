import { useState } from 'react';
import Modal from '@mui/material/Modal';
import AdminCourseCard from './AdminCourseCard';
import CreateCourse from '../../components/Modals/CreateCourse';

export default function AdminCourses() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="h-auto w-[100%] pb-0 pl-[20px] pr-[0px] pt-[40px] ">
      <button
        onClick={handleOpen}
        type="button"
        className="ml-[980px] h-[43px] w-[251px] rounded-lg border bg-[#4588C6] text-lg text-white transition duration-150 hover:scale-95"
      >
        Создать новый курс
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <CreateCourse handleClose={handleClose} />
      </Modal>

      <div className="flex w-full flex-wrap justify-between">
        <AdminCourseCard />
      </div>
    </div>
  );
}

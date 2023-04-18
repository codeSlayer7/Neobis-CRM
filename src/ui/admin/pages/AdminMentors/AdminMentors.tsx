import React, { useState } from 'react';

import Modal from '@mui/material/Modal';
import AdminMentorsCard from './AdminMentorsCard';
import AdminMentorsForm from './AdminMentorsForm';
import DropDown from '../../../components/DropDown';

function AdminMentors() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="h-auto w-[100%] pb-0 pl-[80px] pr-[20px] pt-[40px] ">
      <div className="ml-[500px] mr-[150px] flex h-[43px] items-center justify-around ">
        <DropDown
          label={<div className="font-sans text-base">Направление</div>}
          onOptionClick={(option) => console.log(option)}
          options={['Python', 'Java', 'JavaScript', 'Product Manager', 'UI8']}
        />
        <button
          type="button"
          className="h-[43px] w-[251px] rounded-lg border bg-[#4588C6] text-lg text-white transition duration-150 hover:scale-95"
          onClick={handleOpen}
        >
          Добавить преподавателя
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <AdminMentorsForm handleClose={handleClose}/>
        </Modal>
      </div>

      <div className="mt-14 flex flex-wrap">
        <AdminMentorsCard />
      </div>
    </div>
  );
}

export default AdminMentors;

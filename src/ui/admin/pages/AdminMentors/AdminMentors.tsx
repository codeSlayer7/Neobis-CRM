import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import AdminMentorsCard from './AdminMentorsCard';
import AdminMentorsForm, { MentorType } from './AdminMentorsForm';
import DropDown from '../../../components/DropDown';
import { array } from '../../components/AdminDropDown/GroupField';

function AdminMentors() {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<'create' | 'edit'>('create');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [editingMentor, setEditingMentor] = useState<MentorType | undefined>();

  const openEditMenu = (mentor: MentorType) => {
    setType('edit');
    setEditingMentor(mentor);
    setOpen(true);
  };

  return (
    <div className="h-auto w-[100%] pb-0 pl-[80px] pr-[20px] pt-[40px] ">
      <div className="ml-[45%] w-[600px] flex h-[43px] items-center justify-around ">
        <DropDown
          label={<div className="font-sans text-base w-[90px] h-[23px]">Направление</div>}
          onOptionClick={(option) => console.log(option)}
          options={array}
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
          <AdminMentorsForm
            type={type}
            editingMentor={editingMentor}
            handleClose={handleClose}
          />
        </Modal>
      </div>

      <div className="mt-14 flex flex-wrap">
        <AdminMentorsCard openEditMenu={openEditMenu} />
      </div>
    </div>
  );
}

export default AdminMentors;

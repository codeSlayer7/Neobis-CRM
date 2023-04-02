import { Modal } from '@mui/material';
import { useState } from 'react';
import DropDown from '../../components/DropDown';
import AdminMentorsCard from './AdminMentorsCard';
import AdminMentorsData from './AdminMentorsData';
import AdminMentorsForm from './AdminMentorsForm';

function AdminMentors() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="ml-[110px] h-auto w-[100%] pt-12 ">
      <div className="ml-[500px] mr-[150px] flex h-[43px] items-center justify-around ">
        <DropDown
          label={<div className="font-sans text-base">Направление</div>}
          onOptionClick={(option) => console.log(option)}
          options={['Python', 'Java', 'JavaScript', 'Product Manager', 'UI8']}
        />
        <button
          type="button"
          className="bg-neobis-bg-green h-[43px] w-[251px] rounded-lg border text-lg text-white transition duration-150 hover:scale-95"
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
          <AdminMentorsForm />
        </Modal>
      </div>

      <div className="mt-14 flex flex-wrap">
        <AdminMentorsCard details={AdminMentorsData} />
      </div>
    </div>
  );
}
export default AdminMentors;

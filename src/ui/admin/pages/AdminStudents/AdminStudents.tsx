import { useState } from 'react';
import DropDown from '../../../components/DropDown';
import Search from '../../../components/Search';
import StudentTableAdmin from '../../components/TableAdmin/StudentAdminTable';
import Modal from '../../components/Modals/Modal';
import { StudentForm } from './StudentForm';

export default function AdminStudents() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="pb-0 pl-[60px] pr-[25px] pt-[60px]">
      <div className="mb-[40px] flex">
        <div className="mr-[40px]">
          <DropDown
            label={<div className="text-base">Группа</div>}
            onOptionClick={(option) => console.log(option)}
            options={['Python', 'Java', 'JavaScript', 'Product Manager']}
          />
        </div>
        <div className="mr-[40px]">
          <DropDown
            label={<div className="text-[16px]">Оплата</div>}
            onOptionClick={(option) => console.log(option)}
            options={['Наличными', 'Карта']}
          />
        </div>
        <div className="mr-[40px]">
          <DropDown
            label={<div className="text-[16px]">Статус</div>}
            onOptionClick={(option) => console.log(option)}
            options={['Неактивен', 'Активен', 'Заморожен']}
          />
        </div>
        <Search />
        <button
          type="button"
          className="h-[43px] ml-[125px] w-[251px] rounded-lg border bg-[#4588C6] text-lg text-white transition duration-150 hover:scale-95"
          onClick={handleOpen}
        >
          Добавить студента
        </button>
      </div>
      <Modal title="Создать студента" open={open} onClose={handleClose}>
        <StudentForm />
      </Modal>
      <div>
        <StudentTableAdmin />
      </div>
    </div>
  );
}

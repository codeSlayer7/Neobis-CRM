import { useState, useEffect } from 'react';
import DropDown from '../../../components/DropDown';
import Search from '../../../components/Search';
import Modal from '../../components/Modals/Modal';
import { StudentForm } from './StudentForm';
import StudentTable from '../../../components/Table/StudentTable';
import { array } from '../../components/AdminDropDown/GroupField';
import { useAppDispatch } from '../../../../constants/global';
import { getAllStudentsThunk } from '../../../../redux/slices/studentSlice';

export const status = [
  {
    label:"Неактивный",
    value: 1
  },
  {
    label:"Активный",
    value: 2
  },
  {
    label:"Заморожен",
    value: 3
  },
] 

export default function AdminStudents() {
const [searchValue, setSearchValue] = useState('');
const [searchResults, setSearchResults] = useState([]);
const [groups, setGroups] = useState('')
const [status, setStatus] = useState('')
const [sortType, setSortType] = useState('id')
const [open, setOpen] = useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
const dispatch = useAppDispatch();


useEffect(() => {
  dispatch(getAllStudentsThunk({
    groupId: groups,
    page: 0,
    size: 25,
    sortBy: sortType,
    status: status,
  }));
}, [groups, sortType, status, searchValue]);


  return (
    <div className="pb-0 pl-[60px] pr-[15px] pt-[60px]">
      {open && <div className="background-overlay" onClick={handleClose} />}
      <div className="mb-[40px] flex">
        <div className="mr-[40px]">
          <DropDown
            label={<div className="text-base">Группа</div>}
            onOptionClick={(option) => setGroups(option.value)}
            options={array}
          />
        </div>
        <div className="mr-[40px]">
          <DropDown
            label={<div className="text-[16px]">Статус</div>}
            onOptionClick={(option) => setStatus(option.value)}
            options={status}
          />
        </div>
        <Search
         value={searchValue} 
        onChange={(e) => setSearchValue(e.target.value)}
         />
        <button
          type="button"
          className="h-[43px] ml-[310px] w-[251px] rounded-lg border bg-[#4588C6] text-lg text-white transition duration-150 hover:scale-95"
          onClick={handleOpen}
        >
          Добавить студента
        </button>
      </div>
      <Modal title="Создать студента" open={open} onClose={handleClose}>
        <StudentForm onClose={handleClose} />
      </Modal>
      <div>
        <StudentTable sortBy={(s: string) => () => setSortType(s)}/>
      </div>

    </div>
  );
}
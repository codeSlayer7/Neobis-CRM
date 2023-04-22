import { useState, useEffect } from 'react';
import DropDown from '../../../components/DropDown';
import Search from '../../../components/Search';
import Modal from '../../components/Modals/Modal';
import { StudentForm } from './StudentForm';
import StudentTable from '../../../components/Table/StudentTable';
import { array } from '../../components/AdminDropDown/GroupField';
import { useAppDispatch } from '../../../../constants/global';
import { getAllStudentsThunk } from '../../../../redux/slices/studentSlice';
import { useDebounce } from '../../../../hook/useDebounce';

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

interface PaginateProsType<T = Record<string, any>> {
  data: T[],
  pageSize: number,
  page: number
}

export const paginateData = <T = Record<string, any>>({data, pageSize, page}: PaginateProsType<T> ): T[] => {
  return data.slice((page * pageSize) - pageSize, page * pageSize)
}

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

const debouncedSearch = useDebounce(searchValue, 2000)

useEffect(() => {
  const filters = {
    groupId: groups,
    page: 0,
    size: 10,
    sortBy: sortType,
    status: status,
    string: searchValue
  }
  const { string, ...rest } = filters
  const query = searchValue ? filters : rest
  dispatch(getAllStudentsThunk(query));
}, [groups, sortType, status, debouncedSearch]);

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
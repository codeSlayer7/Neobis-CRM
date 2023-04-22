import { useState, useEffect } from 'react';
import DropDown from '../../../components/DropDown';
import Search from '../../../components/Search';
import Modal from '../../components/Modals/Modal';
import { StudentForm } from './StudentForm';
import StudentTable from '../../../components/Table/StudentTable';
import { array } from '../../components/AdminDropDown/GroupField';
import {
  Status,
  useAppDispatch,
  useAppSelector,
} from '../../../../constants/global';
import { getAllStudentsThunk } from '../../../../redux/slices/studentSlice';
import { SearchStudentParams, searchStudent } from '../../../../api/studentApi';

export const statuses = [
  {
    label: 'Неактивный',
    value: "BLOCKED",
  },
  {
    label: 'Активный',
    value: 'ACTIVE',
  },
  {
    label: 'Заморожен',
    value: 'FROZEN',
  },
];

export default function AdminStudents() {
  const [open, setOpen] = useState(false);
  const fetchedStudents = useAppSelector((state) => state.student.students)

  const [groupId, setGroupId] = useState<number | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [sortType, setSortType] = useState<string | null>(null);
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const [filteredStudents, setFilteredStudents] = useState(fetchedStudents);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const students = useAppSelector((state) => state.student.students);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!students?.length) {
      dispatch(getAllStudentsThunk());
    }
  }, []);

  useEffect(() => {
    const allParams: SearchStudentParams = {
      status :status,
      groupId,
      string: searchValue,
    };
    const params={}

    for(let [key,value] of Object.entries(allParams)) {
      if(value){
        //@ts-ignore
        params[key] = String(value)
      }
     }

    
    searchStudent(params)
      .then((res) => {
        console.log("res: " , res);
        
        if (res.status === 200) {
          
          setFilteredStudents(res.data);
        } else {
          //todo error  popup
        }
      })
      .catch((err) => {
        //todo error popup
      });
  }, [groupId, searchValue, status]);

  
  return (
    <div className="pb-0 pl-[60px] pr-[15px] pt-[60px]">
      {open && <div className="background-overlay" onClick={handleClose} />}
      <div className="mb-[40px] flex">
        <div className="mr-[40px]">
          <DropDown
            label={<div className="text-base">Группа</div>}
            onOptionClick={(option) => setGroupId(option.value)}
            options={array}
          />
        </div>
        <div className="mr-[40px]">
          <DropDown
            label={<div className="text-[16px]">Статус</div>}
            onOptionClick={(option) => setStatus(option.value)}
            options={statuses}
          />
        </div>
        <Search
          value={searchValue}
          onChange={(e: any) => setSearchValue(e.target.value)}
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
        <StudentTable sortBy={(s: string) => () => setSortType(s)}  students={filteredStudents}/>
      </div>
    </div>
  );
}

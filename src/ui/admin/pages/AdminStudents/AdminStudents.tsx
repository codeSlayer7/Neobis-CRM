import { useState } from 'react';
import DropDown from '../../../components/DropDown';
import Search from '../../../components/Search';
import Modal from '../../components/Modals/Modal';
import { StudentForm } from './StudentForm';
import StudentTable from '../../../components/Table/StudentTable';
import { searchStudent } from '../../../../api/studentApi';
import debounce from 'lodash/debounce';
import { array } from '../../components/AdminDropDown/GroupField';

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
const [open, setOpen] = useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

  // const filter = () => {
  //   return filterStudent()
  //     .then(response => {
  //       console.log('Ответ от сервера:', response.data);
  //       return response.data;
  //     })
  //     .catch(error => {
  //       console.error('Ошибка при выполнении запроса:', error);
  //       throw error;
  //     });
  // }

  // const search = debounce(() => {
  //   return (value: string) => {
  //     const params={
  //       status: "",
  //       groupId:  2,
  //       search: searchValue
  //     }
  //     return searchStudent(params)
  //       .then(response => {
  //         console.log('Ответ от сервера:', response.data);
  //         return setSearchResults(response.data);
  //       })
  //       .catch(error => {
  //         console.error('Ошибка при выполнении запроса:', error);
  //         throw error;
  //       });
  //   }
  // });
  

  // const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value } = event.target;
  //   setSearchValue(value);
  //   // search(value);
  // };


  return (
    <div className="pb-0 pl-[60px] pr-[15px] pt-[60px]">
      {open && <div className="background-overlay" onClick={handleClose} />}
      <div className="mb-[40px] flex">
        <div className="mr-[40px]">
          <DropDown
            label={<div className="text-base">Группа</div>}
            onOptionClick={(option) => console.log(option)}
            options={array}
          />
        </div>
        <div className="mr-[40px]">
          <DropDown
            label={<div className="text-[16px]">Статус</div>}
            onOptionClick={(option) => console.log(option)}
            options={status}
          />
        </div>
        <Search
        //  value={searchValue} 
        // onChange={handleSearchChange}
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
        <StudentTable/>
      </div>

    </div>
  );
}

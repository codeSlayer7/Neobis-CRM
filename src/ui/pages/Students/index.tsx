import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../constants/global';
import { array } from '../../admin/components/AdminDropDown/GroupField';
import { statuses } from '../../admin/pages/AdminStudents/AdminStudents';
import DropDown from '../../components/DropDown';
import Search from '../../components/Search';
import StudentTable from '../../components/Table/StudentTable';
import { getAllStudentsThunk } from '../../../redux/slices/studentSlice';

export default function Students() {
  const dispatch = useAppDispatch();
  const students = useAppSelector((state) => state.student.students);

  useEffect(() => {
    if (!students?.length) {
      dispatch(getAllStudentsThunk());
    }
  }, []);

  return (
    <div className="p-[60px]">
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
            options={statuses}
          />
        </div>
        <Search />
      </div>
      <div>
        <StudentTable students={students} sortBy={(v: any) => v} />
      </div>
    </div>
  );
}

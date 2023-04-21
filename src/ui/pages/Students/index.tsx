import { array } from '../../admin/components/AdminDropDown/GroupField';
import { status } from '../../admin/pages/AdminStudents/AdminStudents';
import DropDown from '../../components/DropDown';
import Search from '../../components/Search';
import StudentTable from '../../components/Table/StudentTable';

export default function Students() {
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
            options={status}
          />
        </div>
        <Search />
      </div>
      <div>
        <StudentTable />
      </div>
    </div>
  );
}

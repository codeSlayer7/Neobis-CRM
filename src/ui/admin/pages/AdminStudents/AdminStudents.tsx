import DropDown from '../../../components/DropDown';
import Search from '../../../components/Search';
import StudentTableAdmin from '../../components/TableAdmin/StudentAdminTable';

export default function AdminStudents() {
  return (
    <div className="p-[66px]">
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
      </div>
      <div>
        <StudentTableAdmin />
      </div>
    </div>
  );
}

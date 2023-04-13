import StudentTableAdmin from '../../admin/components/TableAdmin/ArchiveAdmin/StudentAdmin';
import StudentAdminTable from '../../admin/components/TableAdmin/StudentAdminTable';
import DropDown from '../../components/DropDown';
import Search from '../../components/Search';

export default function Students() {
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
            options={['25%', '50%', '75%', '100%']}
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
        {/* <StudentTable /> */}
        <StudentAdminTable/>
      </div>
    </div>
  );
}

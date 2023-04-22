import { useState } from 'react';
import NavigateButtonsAdmin from '../../components/NavigateButtonsAdmin';
import ArchiveTable from '../../components/TableAdmin/ArchiveAdmin/ArchiveTableAdmin';

export default function AdminArchive() {
  const [buttonType, setButtonType] = useState<number>(0);
  const [searchValue, setSearchValue] = useState<string>('');
  return (
    <div className="pt-[40px] pb-0 pl-[40px] pr-[20px]">
      <div className="mb-[50px]">
        <NavigateButtonsAdmin
          setSearchValue={setSearchValue}
          buttonType={buttonType}
          setButtonType={setButtonType}
        />
      </div>
      <ArchiveTable searchValue={searchValue} buttonType={buttonType} />
    </div>
  );
}

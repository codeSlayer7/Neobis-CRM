import { useState } from 'react';
import NavigateButtonsAdmin from '../../components/NavigateButtonsAdmin';
import ArchiveTable from '../../components/TableAdmin/ArchiveAdmin/ArchiveTableAdmin';

export default function AdminArchive() {
  const [buttonType, setButtonType] = useState<number>(0);

  return (
    <div className="pt-[40px] pb-0 pl-[40px] pr-[20px]">
      <div className="mb-[50px]">
        <NavigateButtonsAdmin
          buttonType={buttonType}
          setButtonType={setButtonType}
        />
      </div>
      <ArchiveTable buttonType={buttonType} />
    </div>
  );
}

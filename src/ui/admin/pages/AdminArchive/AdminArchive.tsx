import { useState } from 'react';
import NavigateButtonsAdmin from '../../components/NavigateButtonsAdmin';
import ArchiveTable from '../../components/TableAdmin/ArchiveAdmin/ArchiveTableAdmin';

export default function AdminArchive() {
  const [buttonType, setButtonType] = useState<number>(0);

  return (
    <div className="p-[40px]">
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

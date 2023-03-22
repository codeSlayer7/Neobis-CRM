import { useState } from 'react';
import NavigateButtons from '../../components/Buttons/NavigateButtons';
import ArchiveTable from '../../components/Table/ArchiveTable/ArchiveTable';

export default function Archive() {
  const [buttonType, setButtonType] = useState<number>(0);
  console.log('btn', buttonType);

  return (
    <div className="p-[40px]">
      <div className="mb-[50px]">
        <NavigateButtons setButtonType={setButtonType} />
      </div>
      <ArchiveTable
      buttonType={buttonType}
      />
    </div>
  );
}

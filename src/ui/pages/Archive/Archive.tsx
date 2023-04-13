import { useState } from 'react';
import NavigateButtons from '../../components/Buttons/NavigateButtons';
import ArchiveTable from '../../components/Table/ArchiveTable/ArchiveTable';

export default function Archive() {
  const [buttonType, setButtonType] = useState<number>(0);

  return (
    <div className="pt-40 pb-0 pl-[40px] pr-[20px]">
      <div className="mb-[50px]">
        <NavigateButtons
          buttonType={buttonType}
          setButtonType={setButtonType}
        />
      </div>
      <ArchiveTable buttonType={buttonType} />
    </div>
  );
}

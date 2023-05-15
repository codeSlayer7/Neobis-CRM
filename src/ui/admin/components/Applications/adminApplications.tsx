import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../constants/global';
import { getSortedThunk } from '../../../../redux/service/applications/applicationAction';
import { IApplication } from '../../../../redux/service/applications/applications';
import NavigateButtons from '../../../components/Buttons/NavigateButtons';
import ArchiveTable from '../../../components/Table/ArchiveTable/ArchiveTable';
import StudentTable from '../../../components/Table/ArchiveTable/StudentTable';
import AdminTableApp from './adminTable';

const buttonProp = [
  {
    label: 'Ждет звонка',
    value: 0,
  },
  {
    label: 'Звонок совершен',
    value: 1,
  },
  {
    label: 'Записан на проб.урок',
    value: 2,
  },
  {
    label: 'Посетил проб.урок',
    value: 3,
  },
];

const groupRows: any = [
  {
    applicationStatus: 'WAITING_FOR_CALL',
    applicationStatusNum: 1,
    applicationStatusUpdateDate: '2023-04-19',
    applicationStatusUpdateTime: '18:13',
    courseCardDto: {
      id: 1,
      name: 'Web Frontend',
      cost: 64000,
      durationInMonth: 4,
      numberOfLessons: 48,
    },
    creationDate: '2023-04-19',
    education: 'SCHOOL',
    email: 'abykanovbakyt@gmail.com',
    firstName: 'горы',
    gender: 'Ж',
    hasLaptop: false,
    id: 1,
    isArchived: false,
    isUrgent: true,
    lastName: 'Талаские',
    marketingStrategyEnum: 'INSTAGRAM',
    phoneNumber: '+996550518040',
    reason: 'фв ффафталотвщфтвлфщо  щтащ',
    updateDate: null,
  },
];

export default function AdminApplications() {
  const dispatch = useAppDispatch();
  const [buttonType, setButtonType] = useState<number>(0);
  useEffect(() => {
    dispatch(getSortedThunk());
  }, []);

  const filter = {
    '0': 'WAITING_FOR_CALL',
    '1': 'CALL_RECEIVED',
    '2': 'APPLIED_FOR_TRIAL',
    '3': 'ATTENDED_TRIAL',
  };

  const rowsApp = useAppSelector(
    (state) => state.trello.columns[filter[String(buttonType)]]
  );
  console.log(rowsApp, 'data table');

  return (
    <div className="p-[40px]">
      <div className="mb-[50px]">
        <NavigateButtons
          buttonType={buttonType}
          setButtonType={setButtonType}
          buttonProp={buttonProp}
        />
      </div>
      <AdminTableApp groupRows={rowsApp} />
      {/* <StudentTable /> */}
    </div>
  );
}
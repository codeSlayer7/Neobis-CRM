import BlackListTable from './BlackListTable';
import GroupTable from './GroupTable';
import StudentTable from './StudentTable';
import TeacherTable from './TeacherTable';
import UserTable from './UserTable';

interface Props {
  buttonType: number;
}

export default function ArchiveTable({ buttonType }: Props) {
  type Table = { [key: string]: any };

  const tables: Table = {
    '0': <GroupTable />,
    '1': <TeacherTable />,
    '2': <StudentTable />,
    '3': <UserTable />,
    '4': <BlackListTable />,
  };

  return <div>{tables[String(buttonType)]}</div>;
}
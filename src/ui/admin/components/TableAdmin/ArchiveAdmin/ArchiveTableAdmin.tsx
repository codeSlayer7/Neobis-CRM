import BlackListAdmin from "./BlackListAdmin";
import GroupAdmin from "./GroupsAdmin";
import StudentTableAdmin from "./StudentAdmin";
import TeacherTableAdmin from "./TeacherAdmin";
import UserTableAdmin from "./UserAdmin";


interface Props {
  buttonType: number;
}

export default function ArchiveTable({ buttonType }: Props) {
  type Table = { [key: string]: any };

  const tables: Table = {
    '0': <GroupAdmin />,
    '1': <TeacherTableAdmin />,
    '2': <StudentTableAdmin />,
    '3': <UserTableAdmin />,
    '4': <BlackListAdmin />,
  };

  return <div>{tables[String(buttonType)]}</div>;
}

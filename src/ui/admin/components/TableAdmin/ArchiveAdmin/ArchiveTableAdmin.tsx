import BlackListAdmin from "./BlackListAdmin";
import GroupAdmin from "./GroupsAdmin";
import StudentTableAdmin from "./StudentAdmin";
import TeacherTableAdmin from "./MentorTableAdmin";
import UserTableAdmin from "./UserAdmin";


interface Props {
  buttonType: number;
  searchValue: string;
}

export default function ArchiveTable({ buttonType,searchValue }: Props) {
  type Table = { [key: string]: any };

  const tables: Table = {
    '0': <GroupAdmin />,
    '1': <TeacherTableAdmin />,
    '2': <StudentTableAdmin searchValue={searchValue} />,
    '3': <UserTableAdmin />,
    '4': <BlackListAdmin />,
  };

  return <div>{tables[String(buttonType)]}</div>;
}

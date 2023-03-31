import { MdDeleteOutline, MdOutlineEdit } from 'react-icons/md';

function UserActions() {
  return (
    <div className="flex justify-around">
      <MdDeleteOutline className="mr-5 text-3xl text-slate-400 hover:text-red-600" />

      <MdOutlineEdit className="text-3xl text-slate-400 hover:text-[#70BF44]" />
    </div>
  );
}
export default UserActions;

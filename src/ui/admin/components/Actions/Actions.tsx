import { FiEdit } from 'react-icons/fi';
import { MdOutlineSaveAlt } from 'react-icons/md';

function Actions() {
  return (
    <div className="flex justify-around">
      <MdOutlineSaveAlt className="mr-5  text-3xl  font-bold text-slate-400 hover:text-[#4588C6]" />
      <FiEdit className="text-2xl mt-[4px] text-slate-400 hover:text-[#4588C6]" />
    </div>
  );
}
export default Actions;

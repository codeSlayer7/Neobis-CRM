import { useState } from 'react';
import { HiDotsVertical } from 'react-icons/hi';

function DropDownAdminCourses() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <button
        type="button"
        className=" z-100 relative left-[300px] m-5 flex h-[41px] w-[41px] items-center  justify-center rounded-full bg-[#51A3F6]"
        onClick={handleClick}
      >
        <HiDotsVertical className="t-2  text-2xl text-white" />
      </button>
      {open && (
        <div className="absolute left-[180px] z-10 mt-[-180px] h-24 w-48 rounded-lg border-2 border-[#70BF44] bg-white text-black">
          <ul className="text-center">
            <li className="p-1 text-lg hover:bg-[#F1F1F1]">Архивировать</li>
            <li className="p-1 text-lg hover:bg-[#F1F1F1]">Редактировать</li>
          </ul>
        </div>
      )}
    </>
  );
}
export default DropDownAdminCourses;

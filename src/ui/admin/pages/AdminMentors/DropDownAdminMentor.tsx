import { useState } from 'react';
import { HiDotsVertical } from 'react-icons/hi';
import { Link } from 'react-router-dom';

function DropDownAdminMentor() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <button
        type="button"
        className=" relative m-5 flex h-[41px] w-[41px] items-center  justify-center rounded-full bg-[#51A3F6]"
        onClick={handleClick}
      >
        <HiDotsVertical className="t-2  text-2xl text-white" />
      </button>
      {open && (
        <div className="absolute z-10 mt-[-180px] h-24  w-48 rounded-lg border-2 border-[#4588C6] bg-white text-black">
          <ul className="text-center">
            <Link to="/admin/mentor/mentorarchive">
              <li className="p-1 text-lg hover:bg-[#F1F1F1]">Архивировать</li>
            </Link>
            <Link to="/admin/mentor/mentoredit">
              <li className="p-1 text-lg hover:bg-[#F1F1F1]">Редактировать</li>
            </Link>
          </ul>
        </div>
      )}
    </>
  );
}
export default DropDownAdminMentor;

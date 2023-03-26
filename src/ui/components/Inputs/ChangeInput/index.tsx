import { useState } from 'react';
import CloseEye from '../../../icons/closeEye';
import Eye from '../../../icons/eye';

function ChangeInput() {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div>
      <label className="relative mb-2 block text-[20px] font-medium text-gray-900 dark:text-white">
        <div className="p-[18px] absolute">
          {open === false ? (
            <div onClick={toggle}>
              <Eye />
            </div>
          ) : (
            <div onClick={toggle}>
              <CloseEye />
            </div>
          )}
        </div>
        <input
          type={open === false ? 'password' : 'text'}
          id="password"
          className=" mb-[24px] block h-[60px] w-96 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-16 pb-5 pt-4 text-[20px] 
      font-normal text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:placeholder:text-gray-400
      dark:focus:border-blue-500 dark:focus:ring-blue-500"
          // placeholder="******"
          required
        />
      </label>
    </div>
  );
}

export default ChangeInput;

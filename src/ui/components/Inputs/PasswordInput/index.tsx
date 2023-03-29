import { forwardRef, InputHTMLAttributes, useState } from 'react';
import Lock from '../../../icons/lock';
import Unlock from '../../../icons/unlock';
import clsx from 'clsx';

export interface PasswordForm {
  name?: string;
  type: string;
  error?: string | undefined;
}

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  helperText?: string;
  error: boolean;
}

const PasswordInput: React.FC<Props> = ({ helperText, error, ...rest }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className="mb-[10px] text-[20px] font-medium">Пароль</div>
      <label className="relative mb-2 block text-[20px] font-medium text-gray-900 dark:text-white">
        <div className="top-[18px] left-[22px] absolute">
          {open === false ? (
            <div onClick={toggle}>
              <Lock />
            </div>
          ) : (
            <div onClick={toggle}>
              <Unlock />
            </div>
          )}
        </div>
        <input
          {...rest}
          type={open === false ? 'password' : 'text'}
          id="password"
          className="inline-flex justify-around h-[60px] w-96 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-16 pb-5 pt-4 text-[20px] 
          font-normal text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:placeholder:text-gray-400
          dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="введите ваш пароль"
        />
        <div className="text-[red] text-[16px] mt-[4px] mb-[25px] max-w-[415px] h-[10px]">
          {helperText}
        </div>
      </label>
    </div>
  );
};

export default PasswordInput;

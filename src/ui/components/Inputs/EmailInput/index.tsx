/* eslint-disable react/display-name */
import React, { InputHTMLAttributes } from 'react';
import Email from '../../../icons/email';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  helperText?: string;
}

const EmailInput: React.FC<Props> = ({ error, helperText, ...rest }) => {
  return (
    <div>
      <div className="mb-[10px] text-[20px] font-medium">Email</div>
      <label className="relative mb-2 text-[20px] font-medium text-gray-900 dark:text-white">
        <div className="p-[18px] absolute">
          <Email />
        </div>

        <input
          {...rest}
          id="email"
          type="text"
          className="inline-flex justify-around h-[60px] w-96 rounded-lg border bg-gray-50 p-2.5 pl-16 pb-5 pt-4 text-[20px] 
          font-normal text-gray-900  focus:ring-blue-500 dark:placeholder:text-gray-400"
          placeholder="введите ваш email"
        />
        <div className="text-[red] text-[16px] mt-[4px] mb-[15px] max-w-[415px] h-[10px]">
          {helperText}
        </div>
      </label>
    </div>
  );
};

export default EmailInput;

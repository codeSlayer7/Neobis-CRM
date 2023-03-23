/* eslint-disable react/display-name */
import React, { InputHTMLAttributes, useState } from 'react';
import Email from '../../../icons/email';

export interface EmailForm {
  name?: string;
  type: string;
  error?: string | undefined;
}

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  helperText?: string;
}

const EmailInput: React.FC<Props> = ({ error, helperText, ...rest }) => {
  return (
    <div>
      <div className="mb-[20px] text-[20px] font-medium">Email</div>
      <label className="relative mb-2  text-[20px] font-medium text-gray-900 dark:text-white">
        <div className="p-[18px] absolute">
          <Email />
        </div>
        <input
          {...rest}
          id="email"
          type="text"
          className="bg-[#FCFDFE] inline-flex  items-center justify-around  border-[#575048]text-gray-900 h-[60px] w-96 rounded-lg
    border p-2.5 pl-16 pb-5 pt-4 
    text-[20px] font-normal text-black focus:border-blue-500 focus:ring-blue-500
    dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="введите ваш email"
        />
        <div className="text-[red] mt-0 mb-[24px] max-w-[415px]">
          {helperText}
        </div>
      </label>
    </div>
  );
};

export default EmailInput;

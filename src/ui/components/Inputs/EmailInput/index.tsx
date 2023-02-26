/* eslint-disable react/display-name */
import React, { useState } from 'react';
import Email from '../../../icons/email';

export interface EmailForm {
  name?: string;
  type: string;
  error?: string | undefined;
}

type Props = {
  ref?: any;
};

const EmailInput = React.forwardRef<HTMLInputElement, Props>(({}, ref) => {
  return (
    <div>
      <div className="mb-[20px] text-[20px] font-medium">Email</div>
      <label className="relative mb-2 block text-[20px] font-medium text-gray-900 dark:text-white">
        <div className="top-18 left-22 absolute">
          <Email />
        </div>
        <input
          ref={ref}
          id="email"
          type="text"
          className="bg- [#FCFDFE] border-[#575048]text-gray-900 mb-[24px]  block h-[60px] w-96 rounded-lg
    border p-2.5 pl-16 pb-5 pt-4 
    text-[20px] font-normal text-black focus:border-blue-500 focus:ring-blue-500
    dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="введите ваш email"
          required
        />
      </label>
    </div>
  );
});

export default EmailInput;

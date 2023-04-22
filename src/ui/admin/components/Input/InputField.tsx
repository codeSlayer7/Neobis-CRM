import React, { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const InputField: React.FC<Props> = ({ label, ...rest }) => {
  return (
    <>
      <label className="mb-3 block text-lg font-semibold text-gray-900">
        {label}
      </label>
      <input
        className="mb-2 block h-[40px] w-[377px] rounded-sm border border-slate-300 bg-white p-2.5 text-sm"
        {...rest}
      />
    </>
  );
};

export default InputField;

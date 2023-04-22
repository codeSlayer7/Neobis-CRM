import React from 'react';

export const gender = [
    {
        label: 'MALE',
        value: 1
    },
    {
        label: 'FEMALE',
        value: 2
    }
]

interface Props{
    options: { label: string, value: number }[]
    value: any,
    name: string,
    onChange: (value: any) => void
}


const GenderField: React.FC<Props> = ({ options, value, name, onChange  }) => {
    return (
      <div>
        <select
          className="mb-2 block h-[40px] w-[377px] rounded-sm border border-slate-300 bg-white p-2.5 text-sm"
          value={value}
          onChange={onChange}
          name='gender'
        >
        {options.map(({ value, label}) => (
          <option value={value}>{label}</option>
        ))}
        </select>
      </div>
    );
  };
  
  export default GenderField;
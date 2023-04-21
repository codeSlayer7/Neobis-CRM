import React from 'react';

export const array = [
  {
    label:"Web-1",
    value: 4
  },
  {
    label:  "Web-2",
    value: 5
  },
  {
    label: "Web-3",
    value: 6
  },
  {
    label: "JavaBackend-1",
    value: 7
  },
  {
    label: "JavaBackend-2",
    value: 8
  },
  {
    label: "JavaBackend-3",
    value: 9
  },
  {
    label: "PythonBackend-1",
    value: 10
  },
  {
    label: "PythonBackend-2",
    value: 11
  },
  {
    label: "PythonBackend-3",
    value: 12
  },
  {
    label: "IOS-1",
    value: 13
  },
  {
    label: "IOS-2",
    value: 14
  },

  {
    label: "IOS-3",
    value: 15
  },
  {
    label: "IOS-4",
    value: 16
  },
  {
    label: "Android-1",
    value: 17
  },
  {
    label: "Android-2",
    value: 18
  },
  
]


interface Props{
options: { label: string, value: number }[]
value: any,
name: string,
onChange: (value: any) => void
}

const GroupField: React.FC<Props> = ({ options, value, name, onChange  }) => {

  return (
    <div>
      <select
        className="mb-2 block h-[40px] w-[377px] rounded-sm border border-slate-300 bg-white p-2.5 text-sm"
        value={value}
        onChange={onChange}
        name='enrollmentGroupId'
      >
{options.map(({ value, label}) => (
        <option value={value}>{label}</option>
      ))}
        {/* <option value="">{options}</option> */}
        {/* <option value="wallet">Электронный кошелек</option>
        <option value="card">Кредитная карта</option>
        // <option value="cash">Наличными</option> */}
      </select>
    </div>
  );
};

export default GroupField;

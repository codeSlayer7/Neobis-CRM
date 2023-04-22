import { useState } from 'react';
import { CaretDown, CaretUp } from 'phosphor-react';

type Option = {
  label: string; value:any;
}
interface Props {
  label: any;
  options: Option[];
  onOptionClick: (option: Option) => void;
}

const DropDown: React.FC<Props> = ({ options, onOptionClick, label }) => {
  const [isExpended, setIsExpended] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const showCaretDown = isExpended;
  const showCaretUp = !isExpended;

  // console.log('options', options);
  return (
    <div className="relative inline-block text-left shadow-lg">
      <button
        onClick={() => setIsExpended(!isExpended)}
        className="hover:text-blue flex rounded border bg-white p-[10px] text-sm font-medium text-black  shadow-sm  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <div className="mr-[10px]">{selectedValue ?? label}</div>
        <div>
          {showCaretDown && <CaretUp size={16} />}
          {showCaretUp && <CaretDown size={16} />}
        </div>
      </button>
      {isExpended && (
        <div className="absolute top-12 z-[99] divide-gray-100 rounded-lg bg-white p-[10px] shadow ">
          <ul>
            {Object.entries(options).map(([key, value]) => (
              <li
                onClick={() => {
                  setIsExpended(false);
                  onOptionClick(value);
                  setSelectedValue(value.label);
                }}
                className="p-default cursor-pointer hover:bg-blue-500 hover:text-white"
                key={value.value}
              >
                {value.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;

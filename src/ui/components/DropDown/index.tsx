import { useState } from 'react';
import { CaretDown, CaretUp } from 'phosphor-react';

interface Props {
  label: any;
  options: string[];
  onOptionClick: (option: string) => void;
}

const DropDown: React.FC<Props> = ({ options, onOptionClick, label }) => {
  const [isExpended, setIsExpended] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const showCaretDown = isExpended;
  const showCaretUp = !isExpended;

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsExpended(!isExpended)}
        className="hover:text-blue flex items-center rounded border bg-white px-4 py-2 text-sm font-medium text-black text-gray-700 shadow-sm hover:bg-black hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <div className="mr-10">{selectedValue ?? label}</div>
        <div>
          {showCaretDown && <CaretUp size={16} />}
          {showCaretUp && <CaretDown size={16} />}
        </div>
      </button>
      {isExpended && (
        <div className="absolute top-12 z-[99] w-44 divide-gray-100 rounded-lg bg-white p-[10px] shadow ">
          <ul>
            {options.map((option) => (
              <li
                onClick={() => {
                  setIsExpended(false);
                  onOptionClick(option);
                  setSelectedValue(option);
                }}
                className="p-default cursor-pointer hover:bg-blue-500 hover:text-white"
                key={option}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;

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
        className="flex items-center rounded text-black hover:bg-black hover:text-blue border shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <div className="mr-10">{selectedValue ?? label}</div>
        <div>
          {showCaretDown && <CaretUp size={16} />}
          {showCaretUp && <CaretDown size={16} />}
        </div>
      </button>
      {isExpended && (
        <div className="absolute top-12 z-[99] p-[10px] bg-white divide-gray-100 rounded-lg shadow w-44 ">
          <ul>
            {options.map((option) => (
              <li
                onClick={() => {
                  setIsExpended(false);
                  onOptionClick(option);
                  setSelectedValue(option);
                }}
                className="hover:bg-blue-500 hover:text-white p-default cursor-pointer"
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

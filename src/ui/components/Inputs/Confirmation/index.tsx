import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  helperText?: string;
}

const ConfirmationInput: React.FC<Props> = ({ error, helperText, ...rest }) => {
  return (
    <div>
      <div className="mb-[20px] text-[20px] font-medium">Код</div>
      <label className="relative mb-2 block text-[20px] font-medium text-gray-900 dark:text-white">
        <input
          {...rest}
          type="password"
          id="password"
          className=" mb-[24px] block h-[60px] w-96 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-16 pb-5 pt-4 text-[20px] 
    font-normal text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:placeholder:text-gray-400
    dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="******"
        />
        <div className="text-[red] text-[16px] mt-[4px] mb-[15px] max-w-[415px] h-[10px]">
          {helperText}
        </div>
      </label>
    </div>
  );
};

export default ConfirmationInput;

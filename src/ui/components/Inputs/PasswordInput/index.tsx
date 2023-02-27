import { forwardRef } from 'react';
import Password from '../../../icons/password';

export interface PasswordForm {
  name?: string;
  type: string;
  error?: string | undefined;
}

type Props = {
  ref?: any;
};

const PasswordInput = forwardRef<HTMLInputElement, PasswordForm>(({}, ref) => {
  return (
    <div>
      <div className="mb-[20px] text-[20px] font-medium">Пароль</div>
      <label className="relative mb-2 block text-[20px] font-medium text-gray-900 dark:text-white">
        <div className="top-18 left-22 absolute">
          <Password />
        </div>
        <input
          ref={ref}
          // type="password"
          id="password"
          className=" mb-[24px] block h-[60px] w-96 rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-16 pb-5 pt-4 text-[20px] 
    font-normal text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:placeholder:text-gray-400
    dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="введите ваш пароль"
          required
        />
      </label>
    </div>
  );
});

export default PasswordInput;

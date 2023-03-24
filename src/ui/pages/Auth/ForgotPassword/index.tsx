import { Send } from '../../../components/Buttons/Send';
import EmailInput from '../../../components/Inputs/EmailInput';
import Auth from '../../../icons/auth';

export default function ForgotPassword() {
  return (
    <div className="flex justify-around h-screen items-center">
      <div className="mt-[86px]">
        <Auth />
      </div>
      <div className="flex flex-col">
        <div className="mb-[36px] text-center text-[36px] font-semibold">
          Забыли пароль
        </div>
        <p className="mb-[60px] w-[450px] text-[20px] font-normal">
          Введите адрес электронной почты для сброса пароля
        </p>
        <EmailInput />
        <Send />
      </div>
    </div>
  );
}

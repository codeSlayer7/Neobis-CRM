import { Send } from '../../../components/Buttons/Send';
import ConfirmationInput from '../../../components/Inputs/Confirmation';
import Auth from '../../../icons/auth';

export default function Confirmation() {
  return (
    <div className="flex h-screen items-center justify-around">
      <div className="mt-[86px]">
        <Auth />
      </div>
      <div className="flex flex-col">
        <div className="mb-[36px] text-center text-[36px] font-semibold">
          Код подтверждения
        </div>
        <p className="mb-[60px] text-center text-[20px] font-normal">
          Введите код отправленный вам на почту
        </p>
        <ConfirmationInput />
        <Send />
      </div>
    </div>
  );
}

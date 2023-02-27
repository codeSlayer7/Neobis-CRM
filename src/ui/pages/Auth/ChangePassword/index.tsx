import { ChangeButton } from '../../../components/Buttons/ChangeButton';
import ChangeInput from '../../../components/Inputs/ChangeInput';
import Auth from '../../../icons/auth';

export default function ChangePassword() {
  return (
    <div className="flex h-screen items-center justify-around">
      <div className="mt-[86px]">
        <Auth />
      </div>
      <div className="flex flex-col">
        <div className="mb-[36px] text-center text-[36px] font-semibold">
          Изменить пароль
        </div>
        <div className="mb-[20px] text-[20px] font-medium">Новый пароль</div>
        <ChangeInput />
        <div className="mb-[20px] text-[20px] font-medium">
          Повторить пароль
        </div>
        <ChangeInput />
        <ChangeButton />
      </div>
    </div>
  );
}

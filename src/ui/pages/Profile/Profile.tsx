import {  useState } from 'react';
import { useAppSelector } from '../../../constants/global';
import ProfileInput from '../../components/Forms/ProfileInput';
import Edit from '../../icons/Edit';
import EditWhite from '../../icons/EditWhite';
import Photo from '../../images/photo.png';

function Profile() {
  const [show, setShow] = useState(false);
  const [change, setChange] = useState(false);

  const handleClick = () => {
    setChange(!change);
    setShow(!show);
  };

  const user = useAppSelector((state) => {
    return state.user;
  });

  return (
    <div className="mx-auto flex h-auto w-full items-center justify-center">
      <div className="my-10 mx-auto h-[798px] w-[886px]">
        <div className="flex">
          <div>
            <img src={Photo} alt="#" />
          </div>
          <div className="ml-7">
            <h2 className="text-3xl font-bold">{user.firstName}{user.lastName}</h2>
            <div className="mt-10">
              <button
                type="button"
                className={`inline-flex h-[43px] w-[212px] items-center justify-around rounded-lg border border-[#E2E2E2] text-xl font-normal ${
                  change === true ? `group bg-[#70BF44] text-white` : `bg-white`
                }`}
                onClick={handleClick}
              >
                Редактировать
                {!show && <Edit />}
                {show && <EditWhite />}
              </button>
              <button
                type="button"
                className="ml-5 h-[43px] w-[212px] rounded-lg border text-xl font-normal"
              >
                Изменить пароль
              </button>
            </div>
          </div>
        </div>
        <ProfileInput />
        {show && (
          <button
            type="button"
            className="mt-10 h-[52px] w-[625px] rounded-lg border bg-[#70BF44] text-xl text-white transition duration-150 hover:scale-95"
          >
            Сохранить
          </button>
        )}
      </div>
    </div>
  );
}
export default Profile;
